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
    <div>
      <div className="flex flex-col items-center md:gap-2 px-4 md:flex-row md:justify-center md:px-12 mt-12 ">
        {visible.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="bg-(--accent) rounded-2xl p-3 shadow-md"
          >
            <div className="relative w-[320px] md:w-[520px] h-[420px] md:h-[520px] overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt="hero img"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
