"use client";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const count = images.length;
  const step = 360 / count;

  const radius = isMobile ? 260 : 520;
  const perspective = isMobile ? 800 : 1400;

  const cardW = isMobile ? 260 : 320;
  const cardH = isMobile ? 340 : 420;

  useEffect(() => {
    // autoplay
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, [count]);

  const go = (dir) => {
    clearInterval(intervalRef.current);
    setIndex((i) => (i + dir + count) % count);
    // restart autoplay
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 3500);
  };

  return (
    <div className="mt-12 px-4 md:px-12">
      {/* Scene */}
      <div
        className="relative mx-auto"
        style={{ width: cardW, height: cardH, perspective: `${perspective}px` }}
      >
        {/* Ring */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-${radius}px) rotateY(${-index * step}deg)`,
            transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
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
                  opacity,
                  transformStyle: "preserve-3d",
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
                  opacity,
                  transition: "opacity 600ms ease",
                }}
              >
                {/* Card */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={src}
                    alt="hero img"
                    fill
                    className="object-cover"
                    priority={i === 0}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  />

                  {/* Glass border overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/25"
                    style={{
                      boxShadow: "inset 0 0 0 14px rgba(255,255,255,0.42)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
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
