// src/app/services/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Services | Nail Express Tewkesbury",
  description:
    "Explore our nail services at Nail Express — nail extensions, BIAB, gel/shellac, natural nail care, nail art and more.",
};

const EXTENSIONS = [
  {
    name: "Acrylic + Polish / White Tips",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Acrylic + Gel / Shellac",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Gel Powder",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Glitter Powder",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Ombre",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Chrome",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Builder Gel (BIAB)",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
  {
    name: "Pink & White",
    fullset: "Available",
    infill: "Available",
    takeoffNewset: "Available",
  },
];

const NATURAL = [
  { name: "Manicure", polish: "Available", gel: "Available" },
  { name: "Pedicure", polish: "Available", gel: "Available" },
  { name: "French Tips", polish: "Available", gel: "Available" },
  { name: "Nails Colour Change", polish: "Available", gel: "Available" },
  { name: "Toe Colour Change", polish: "Available", gel: "Available" },
  { name: "Take Off (with service)", polish: "Available", gel: "Available" },
];

const OTHER = [
  "Diamonds / Gems",
  "Nail Art (from simple to detailed)",
  "Eyelashes",
  "Eyebrows Wax",
  "Eyebrows Tint",
  "Upper Lip",
  "Chin",
];

export default function ServicesPage() {
  return (
    <main className="px-4 md:px-12 py-12">
      {/* HERO */}
      <section className="mx-auto max-w-6xl text-center">
        <p className="tracking-[0.35em] text-xs text-gray-600">OUR SERVICES</p>

        <h1 className="mt-4 text-3xl md:text-4xl tracking-widest text-gray-800">
          YOUR MINIATURE GETAWAY
        </h1>

        <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto" />

        <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-gray-700 italic">
          Take a moment to unwind with our carefully crafted nail treatments —
          designed to relax, refresh, and elevate your everyday routine.
        </p>
      </section>

      {/* CARD */}
      <section className="mx-auto max-w-6xl mt-12 md:mt-16">
        <div className="rounded-2xl bg-white/35 backdrop-blur-lg p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          {/* NAIL EXTENSIONS TABLE */}
          <div className="grid gap-6">
            <div>
              <h2 className="text-sm tracking-widest text-(--primary)">
                NAILS EXTENSION
              </h2>
              <div className="mt-3 h-[2px] w-10 bg-(--primary)" />
            </div>

            <div className="w-full overflow-x-auto">
              <div className="min-w-[680px]">
                <div className="grid grid-cols-[2.2fr_1fr_1fr_1.2fr] gap-4 text-xs tracking-widest text-gray-600 mb-4">
                  <div className="uppercase">Service</div>
                  <div className="uppercase text-center">Full Set</div>
                  <div className="uppercase text-center">Infill</div>
                  <div className="uppercase text-center">
                    Take Off & New Set
                  </div>
                </div>

                <div className="space-y-3">
                  {EXTENSIONS.map((row) => (
                    <div
                      key={row.name}
                      className="grid grid-cols-[2.2fr_1fr_1fr_1.2fr] gap-4 items-center rounded-xl bg-white/60 p-4"
                    >
                      <div className="text-sm text-gray-800">{row.name}</div>
                      <div className="text-sm text-gray-700 text-center">
                        {row.fullset}
                      </div>
                      <div className="text-sm text-gray-700 text-center">
                        {row.infill}
                      </div>
                      <div className="text-sm text-gray-700 text-center">
                        {row.takeoffNewset}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NATURAL SERVICES TABLE */}
            <div className="mt-10">
              <h2 className="text-sm tracking-widest text-(--primary)">
                NATURAL SERVICES
              </h2>
              <div className="mt-3 h-[2px] w-10 bg-(--primary)" />
            </div>

            <div className="w-full overflow-x-auto">
              <div className="min-w-[520px]">
                <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 text-xs tracking-widest text-gray-600 mb-4">
                  <div className="uppercase">Service</div>
                  <div className="uppercase text-center">Polish</div>
                  <div className="uppercase text-center">Gel / Shellac</div>
                </div>

                <div className="space-y-3">
                  {NATURAL.map((row) => (
                    <div
                      key={row.name}
                      className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center rounded-xl bg-white/60 p-4"
                    >
                      <div className="text-sm text-gray-800">{row.name}</div>
                      <div className="text-sm text-gray-700 text-center">
                        {row.polish}
                      </div>
                      <div className="text-sm text-gray-700 text-center">
                        {row.gel}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-gray-600 italic">
                  Add-ons and removals may vary depending on the set and finish.
                  Please ask our team for guidance.
                </p>
              </div>
            </div>

            {/* OTHER SERVICES */}
            <div className="mt-10">
              <h2 className="text-sm tracking-widest text-(--primary)">
                OTHER SERVICES
              </h2>
              <div className="mt-3 h-[2px] w-10 bg-(--primary)" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {OTHER.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/60 p-4 text-sm text-gray-800"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center text-center">
              <p className="text-sm text-gray-700">
                Appointments and walk-ins are welcome.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="border-2 border-(--primary) px-8 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
                >
                  FIND US & CONTACT
                </Link>
                <Link
                  href="/about"
                  className="border border-gray-300 px-8 py-3 text-xs tracking-widest hover:bg-white/60 transition"
                >
                  WHO WE ARE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
