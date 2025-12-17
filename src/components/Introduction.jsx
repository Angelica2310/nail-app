import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="mt-20 px-4 md:px-12 mx-auto">
      <section className="md:py-20 px-4 text-center">
        <h2 className="tracking-[0.35em] text-sm md:text-base mb-6 text-gray-800">
          MORE THAN JUST NAILS
        </h2>

        <p className="max-w-xl mx-auto text-sm md:text-base italic text-(--text) leading-relaxed">
          At Nail Express, every visit is designed to be a moment of calm. From
          thoughtful details to expert care, we believe beauty should feel as
          good as it looks.
        </p>

        <div className="my-8 h-[2px] w-12 bg-(--primary) mx-auto"></div>
      </section>

      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8 justify-center py-7">
        {/* IMAGE */}
        <Image
          src="/front-door.jpg"
          alt="salon"
          width={700}
          height={450}
          className="w-full max-w-[900px] h-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl"
        />

        {/* TEXT CARD */}
        <div className="p-4 md:p-10 text-xs md:text-sm max-w-xs md:max-w-md border border-(--primary) bg-white/25 backdrop-blur-lg shadow-lg rounded-2xl mt-5">
          <h2 className="tracking-widest md:text-2xl mb-4 text-(--text) text-xl">
            MODERN ARTISTIC NAILS
          </h2>
          {/* Divider */}
          <div className="mt-3 mb-6 h-0.5 w-12 bg-(--primary)"></div>

          <p className="text-sm leading-relaxed text-(--text)">
            A destination salon where beauty meets relaxation. Enjoy flawless
            manicures and indulgent treatments designed to help you look and
            feel your best.
          </p>

          <Link href="/about">
            <button className="mt-6 border-2 border-(--primary) px-6 py-2 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition cursor-pointer">
              WHO WE ARE
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center text-center px-4 md:px-12 py-20">
        <h2 className="tracking-[0.35em] text-lg md:text-xl mb-4">
          YOUR MINIATURE GETAWAY
        </h2>
        {/* Divider */}
        <div className="h-0.5 w-12 bg-(--primary) mb-6"></div>

        <p className="italic text-sm md:text-base text-gray-600 max-w-xl mb-10">
          Take a moment to unwind with our carefully crafted nail treatments,
          designed to relax, refresh, and elevate your everyday routine.
        </p>

        <div className="flex flex-col gap-4 tracking-widest text-xs md:text-sm text-gray-700 mb-12">
          <span>STRESS-RELIEVING MANICURE</span>
          <span>LUXURY GEL & BIAB TREATMENTS</span>
        </div>
        <Link href="/service">
          <button className="border-2 border-(--primary) px-10 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition cursor-pointer">
            VIEW OUR SERVICES
          </button>
        </Link>
      </div>
    </div>
  );
}
