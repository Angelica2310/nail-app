"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function Hero() {
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

  const [start, setStart] = useState(0);

  const visible = useMemo(() => {
    const n = images.length;
    return [0, 1, 2].map((i) => images[(start + i) % n]);
  }, [images, start]);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => (s + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center gap-3 px-4 mt-12 md:flex-row md:justify-center md:px-12 md:gap-5">
      {visible.map((src, i) => (
        <div key={`${src}-${i}`} className={i === 0 ? "" : "hidden md:block"}>
          <div className="relative w-[320px] h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt="hero img"
              fill
              className="object-cover"
              priority={i === 0}
            />

            {/* transparent/glass border overlay (does NOT blur the image) */}
            <div
              className="
              pointer-events-none absolute inset-0 rounded-2xl
              ring-1 ring-white/25
              shadow-[inset_0_0_0_14px_rgba(255,255,255,0.5)]
            "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
