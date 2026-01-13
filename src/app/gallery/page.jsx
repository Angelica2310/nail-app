import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of modern nail art, BIAB sets, and timeless classics from Nail Express Tewkesbury.",
};

const gallerySets = [
  {
    title: "Signature Art",
    description: "Modern detailing with clean, glossy finishes.",
    image: "/hero01.jpg",
  },
  {
    title: "Soft Neutrals",
    description: "Sheer pinks and natural tones for everyday elegance.",
    image: "/hero02.jpg",
  },
  {
    title: "Bold Accents",
    description: "Statement shades paired with sleek shape work.",
    image: "/hero03.jpg",
  },
  {
    title: "BIAB Classics",
    description: "Strong builder sets finished with subtle shine.",
    image: "/hero04.jpg",
  },
  {
    title: "Fresh French",
    description: "Timeless tips refreshed with a modern twist.",
    image: "/about01.jpg",
  },
  {
    title: "Gloss & Glow",
    description: "High shine manicures for your next occasion.",
    image: "/about02.jpg",
  },
  {
    title: "Creative Sets",
    description: "Custom hand-painted designs and delicate art.",
    image: "/about03.jpg",
  },
  {
    title: "Seasonal Touch",
    description: "On-trend colours inspired by the moment.",
    image: "/hero05.jpg",
  },
  {
    title: "Minimal Chic",
    description: "Simple, refined finishes for a polished look.",
    image: "/hero06.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="px-4 md:px-12 py-12">
      <section className="mx-auto max-w-6xl text-center">
        <p className="tracking-[0.35em] text-xs text-gray-600">GALLERY</p>
        <h1 className="mt-4 text-3xl md:text-4xl tracking-widest text-gray-800">
          NAIL ART INSPIRATION
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto"></div>
        <p className="mt-6 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Explore our most-loved sets, from soft neutrals to bold statement
          designs. Every set is tailored to your style and finished with the
          detail you deserve.
        </p>
      </section>

      <section className="mx-auto max-w-6xl mt-12 md:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gallerySets.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white/50 shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <div className="relative h-72">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-sm tracking-widest">{item.title}</h2>
                <p className="mt-1 text-xs text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl mt-16 md:mt-24">
        <div className="rounded-2xl bg-white/35 backdrop-blur-lg p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-800">
            READY TO CREATE YOUR SET?
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto"></div>
          <p className="mt-6 text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Share your inspiration with our team and we’ll design a set that
            feels unique to you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/service"
              className="border-2 border-(--primary) px-8 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              VIEW SERVICES
            </Link>
            <Link
              href="/book"
              className="border border-gray-300 px-8 py-3 text-xs tracking-widest hover:bg-white/60 transition"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
