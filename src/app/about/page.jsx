// src/app/about/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Nail Express — our story, values, and passion for modern nail care in Tewkesbury.",
};

export default function AboutPage() {
  return (
    <main className="px-4 md:px-12 py-12">
      {/* HERO */}
      <section className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="tracking-[0.35em] text-xs text-gray-600">ABOUT US</p>

          <h1 className="mt-4 text-3xl md:text-4xl tracking-widest text-gray-800">
            MODERN ARTISTIC NAILS
          </h1>

          <div className="mt-4 h-[2px] w-12 bg-(--primary)"></div>

          <p className="mt-6 text-sm md:text-base leading-relaxed text-gray-700">
            A destination salon where beauty meets relaxation. From flawless
            manicures to indulgent treatments, we’re here to help you look and
            feel your best — every visit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/service"
              className="border-2 border-(--primary) px-6 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              VIEW SERVICES
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 px-8 py-3 text-xs tracking-widest hover:bg-white/60 transition"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <Image
              src="/front-door.jpg"
              alt="Nail Express storefront"
              width={900}
              height={650}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl bg-white/35 backdrop-blur-lg p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h2 className="tracking-widest text-lg text-gray-800">OUR STORY</h2>
          <div className="mt-3 h-[2px] w-10 bg-(--primary)"></div>

          <p className="mt-6 text-sm leading-relaxed text-gray-700">
            Nail Express was created with a simple idea: your nail appointment
            should feel like a miniature getaway. We combine modern techniques,
            thoughtful details, and a calm atmosphere so you can unwind while we
            perfect every finish.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            Whether you love natural, clean sets or bold nail art, we tailor
            every service to your style — with care, precision, and a focus on
            long-lasting results.
          </p>
        </div>

        <div className="rounded-2xl border border-(--primary) p-6 md:p-10 bg-white/60">
          <h2 className="tracking-widest text-lg text-gray-800">WHAT WE DO</h2>
          <div className="mt-3 h-[2px] w-10 bg-(--primary)"></div>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)"></span>
              Manicures & pedicures with a flawless finish
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)"></span>
              Gel, BIAB / builder, and strengthening treatments
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)"></span>
              Nail art — from subtle details to statement sets
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-(--primary)"></span>
              Aftercare guidance so your nails stay perfect longer
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/service"
              className="inline-block border-2 border-(--primary) px-6 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24">
        <div className="text-center">
          <p className="tracking-[0.35em] text-xs text-gray-600">OUR PROMISE</p>
          <h2 className="mt-4 text-2xl md:text-3xl tracking-widest text-gray-800">
            QUALITY • CARE • DETAIL
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto"></div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Hygiene First",
              text: "Clean tools, sanitised stations, and a meticulous approach — every appointment.",
            },
            {
              title: "Tailored to You",
              text: "We listen first. Shape, colour, and finish are chosen to suit your lifestyle and style.",
            },
            {
              title: "Long-Lasting Results",
              text: "Strong prep, quality products, and careful application for wear you can trust.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/40 backdrop-blur-lg p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <h3 className="tracking-widest text-sm text-gray-800">
                {card.title.toUpperCase()}
              </h3>
              <div className="mt-3 h-[2px] w-10 bg-(--primary)"></div>
              <p className="mt-5 text-sm leading-relaxed text-gray-700">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="tracking-widest text-lg text-gray-800">OUR WORK</h2>
          <div className="mt-3 h-[2px] w-12 bg-(--primary)"></div>
          <p className="mt-6 max-w-xl text-sm italic text-gray-600 leading-relaxed">
            A little inspiration — from clean classics to creative designs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["/about01.jpg", "/about02.jpg", "/about03.jpg"].map((src) => (
            <div
              key={src}
              className="rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-80 overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt="Nail design"
                  fill
                  className="object-cover"
                />

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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24">
        <div className="rounded-2xl bg-white/35 backdrop-blur-lg p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-800">
            READY FOR YOUR NEXT APPOINTMENT?
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto"></div>
          <p className="mt-6 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Book your visit and enjoy a calm, detailed service — designed to
            leave you feeling refreshed and confident.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/service"
              className="border-2 border-(--primary) px-8 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              VIEW SERVICES
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 px-8 py-3 text-xs tracking-widest hover:bg-white/60 transition"
            >
              FIND US & CONTACT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
