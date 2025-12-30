"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function Hero3DCarousel() {
  const images = useMemo(
    () => [
      "/hero01.jpg",
      "/hero02.jpg",
      "/hero03.jpg",
      "/hero04.jpg",
      "/hero05.jpg",
      "/hero06.jpg",
    ],
    []
  );

  const count = images.length;
  const step = 360 / count;

  // responsive sizing (helps mobile 3D readability)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const radius = isMobile ? 260 : 520;
  const perspective = isMobile ? 850 : 1400;
  const cardW = isMobile ? 260 : 320;
  const cardH = isMobile ? 340 : 420;

  // rotation in degrees (continuous)
  const [rot, setRot] = useState(0);

  // refs for drag physics
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startRotRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);
  const velRef = useRef(0); // deg/ms
  const rafRef = useRef(null);

  // autoplay
  const autoRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const stopAutoplay = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoRef.current = setInterval(() => {
      setRot((r) => r - step); // rotate to next
    }, 3500);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const scheduleAutoplayResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, 1800);
  };

  const getClientX = (e) => {
    if (e.touches && e.touches.length) return e.touches[0].clientX;
    return e.clientX;
  };

  const snapToNearest = () => {
    // snap rotation to nearest step
    setRot((r) => {
      const snapped = Math.round(r / step) * step;
      return snapped;
    });
  };

  const startInertia = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    let v = velRef.current; // deg/ms
    let last = performance.now();

    const tick = (now) => {
      const dt = now - last;
      last = now;

      // friction
      v *= 0.95;

      setRot((r) => r + v * dt);

      if (Math.abs(v) > 0.01) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        snapToNearest();
        scheduleAutoplayResume();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  const onDown = (e) => {
    // prevent page scroll while dragging carousel
    if (e.cancelable) e.preventDefault();

    draggingRef.current = true;
    stopAutoplay();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const x = getClientX(e);
    startXRef.current = x;
    lastXRef.current = x;
    startRotRef.current = rot;
    lastTRef.current = performance.now();
    velRef.current = 0;
  };

  const onMove = (e) => {
    if (!draggingRef.current) return;
    if (e.cancelable) e.preventDefault();

    const x = getClientX(e);
    const dx = x - startXRef.current;

    // sensitivity: px -> degrees
    const degPerPx = isMobile ? 0.25 : 0.18;

    const nextRot = startRotRef.current + dx * degPerPx;
    setRot(nextRot);

    // velocity for inertia
    const now = performance.now();
    const dt = now - lastTRef.current;
    if (dt > 0) {
      const ddx = x - lastXRef.current;
      velRef.current = (ddx * degPerPx) / dt; // deg/ms
    }
    lastXRef.current = x;
    lastTRef.current = now;
  };

  const onUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    // if you "flick", inertia carries; otherwise snaps quickly
    if (Math.abs(velRef.current) > 0.05) {
      startInertia();
    } else {
      snapToNearest();
      scheduleAutoplayResume();
    }
  };

  // active index for depth cues
  const index = ((Math.round(-rot / step) % count) + count) % count;

  return (
    <div className="mt-12 px-4 md:px-12">
      <div
        className="relative mx-auto select-none"
        style={{
          width: cardW,
          height: cardH,
          perspective: `${perspective}px`,
          touchAction: "pan-y", // allow vertical scroll, we handle horizontal drag
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${rot}deg)`,
            transition: draggingRef.current
              ? "none"
              : "transform 650ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {images.map((src, i) => {
            const angle = i * step;

            const dist = Math.min(
              Math.abs(i - index),
              count - Math.abs(i - index)
            );
            const opacity = dist === 0 ? 1 : dist === 1 ? 0.55 : 0.18;
            const scale = dist === 0 ? 1 : dist === 1 ? 0.9 : 0.82;

            return (
              <div
                key={src}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: cardW,
                  height: cardH,
                  transformStyle: "preserve-3d",
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale}) translate3d(0,0,0)`,
                  opacity,
                  transition: "opacity 450ms ease",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={src}
                    alt="hero img"
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />

                  {/* glass border overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/25"
                    style={{
                      // push slightly forward to avoid z-fighting / layer swaps
                      transform: "translateZ(36px) translate3d(0,0,0)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      willChange: "transform, opacity",
                      boxShadow: "inset 0 0 0 14px rgba(255,255,255,0.42)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-center text-sm opacity-70">Drag to rotate</p>
    </div>
  );
}
