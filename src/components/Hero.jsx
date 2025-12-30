"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

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

  // simple responsive switch
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

  const [index, setIndex] = useState(0);

  // autoplay desktop only (safe + less annoying on mobile)
  useEffect(() => {
    if (isMobile) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 3500);

    return () => clearInterval(id);
  }, [isMobile, count]);

  const go = (dir) => setIndex((i) => (i + dir + count) % count);

  return (
    <div className="mt-12 px-4 md:px-12">
      {/* Scene */}
      <div
        className="relative mx-auto"
        style={{
          width: cardW,
          height: cardH,
          perspective: `${perspective}px`,
        }}
      >
        {/* Ring */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            transform: `translateZ(-${radius}px) rotateY(${
              -index * step
            }deg) translate3d(0,0,0)`,
            transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {images.map((src, i) => {
            const angle = i * step;

            const dist = Math.min(
              Math.abs(i - index),
              count - Math.abs(i - index)
            );
            const opacity = dist === 0 ? 1 : dist === 1 ? 0.6 : 0.22;

            // scaling is a strong depth cue on mobile, keep it subtle
            const scale = dist === 0 ? 1 : dist === 1 ? 0.92 : 0.86;

            const cardShadow = isMobile
              ? "0 10px 25px rgba(0,0,0,0.18)"
              : "0 25px 60px rgba(0,0,0,0.25), 0 8px 18px rgba(0,0,0,0.18)";

            return (
              <div
                key={src}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: cardW,
                  height: cardH,
                  transformStyle: "preserve-3d",
                  opacity,
                  transition: "opacity 450ms ease",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale}) translate3d(0,0,0)`,
                }}
              >
                {/* Card */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{
                    boxShadow: cardShadow,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "translate3d(0,0,0)",
                  }}
                >
                  <Image
                    src={src}
                    alt="hero img"
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />

                  {/* Glass border overlay (stable layer) */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/25"
                    style={{
                      transform: "translateZ(6px) translate3d(0,0,0)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      willChange: "transform, opacity",
                      boxShadow: "inset 0 0 0 12px rgba(255,255,255,0.40)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="absolute inset-x-0 -bottom-14 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            className="rounded-full px-4 py-2 text-sm bg-black/70 text-white hover:bg-black"
          >
            Prev
          </button>
          <button
            onClick={() => go(1)}
            className="rounded-full px-4 py-2 text-sm bg-black/70 text-white hover:bg-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
