// src/app/contact/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Nail Express Tewkesbury",
  description:
    "Get in touch with Nail Express. Find our location, opening hours, and contact details or book your next nail appointment with us.",
};

export default function ContactPage() {
  return (
    <main className="px-4 md:px-12 py-12">
      {/* HERO */}
      <section className="mx-auto max-w-6xl text-center">
        <p className="tracking-[0.35em] text-xs text-gray-600">CONTACT US</p>

        <h1 className="mt-4 text-3xl md:text-4xl tracking-widest text-gray-800">
          WE’D LOVE TO HEAR FROM YOU
        </h1>

        <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto"></div>

        <p className="mt-6 max-w-xl mx-auto text-sm md:text-base leading-relaxed text-gray-700">
          Whether you’d like to book an appointment, ask a question, or simply
          say hello, feel free to get in touch. We’re always happy to help.
        </p>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24 grid gap-10 md:grid-cols-2">
        {/* LEFT: DETAILS */}
        <div className="rounded-2xl bg-white/35 backdrop-blur-lg p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h2 className="tracking-widest text-lg text-gray-800">
            CONTACT DETAILS
          </h2>
          <div className="mt-3 h-[2px] w-10 bg-(--primary)"></div>

          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <p>
              <span className="font-medium">Address:</span>
              <br />
              153 High Street,
              <br />
              Tewkesbury, GL20 5JP
            </p>

            <p>
              <span className="font-medium">Phone:</span>
              <br />
              <a href="tel:01684292988" className="hover:underline">
                01684 292988
              </a>
            </p>

            <p>
              <span className="font-medium">Email:</span>
              <br />
              <a
                href="mailto:info@nailexpress.co.uk"
                className="hover:underline"
              >
                info@nailexpress.co.uk
              </a>
            </p>
          </div>

          <div className="mt-10">
            <h3 className="tracking-widest text-sm text-gray-800">
              OPENING HOURS
            </h3>
            <div className="mt-3 h-[2px] w-8 bg-(--primary)"></div>

            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              <li>Monday: 9am – 7pm</li>
              <li>Tuesday: 9am – 7pm</li>
              <li>Wednesday: 9am – 7pm</li>
              <li>Thursday: 9am – 7pm</li>
              <li>Friday: 8:30am – 7pm</li>
              <li>Saturday: 8:30am – 7pm</li>
              <li>Sunday: CLOSED</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: QUICK CONTACT */}
        <div className="rounded-2xl border border-(--primary) p-6 md:p-10 bg-white/60">
          <h2 className="tracking-widest text-lg text-gray-800">
            GET IN TOUCH
          </h2>
          <div className="mt-3 h-[2px] w-10 bg-(--primary)"></div>

          <p className="mt-6 text-sm leading-relaxed text-gray-700">
            For bookings and enquiries, the quickest way to reach us is by phone
            or in person. You’re also welcome to email us and we’ll respond as
            soon as possible.
          </p>

          <div className="mt-8 space-y-4">
            {/* Phone */}
            <a
              href="tel:01684292988"
              className="flex items-center justify-between rounded-xl border border-gray-300 p-4 hover:border-(--primary) transition"
            >
              <span className="text-sm tracking-widest text-gray-700">
                CALL US
              </span>
              <span className="text-sm font-medium text-gray-800">
                01684 292988
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@nailexpress.co.uk"
              className="flex items-center justify-between rounded-xl border border-gray-300 p-4 hover:border-(--primary) transition"
            >
              <span className="text-sm tracking-widest text-gray-700">
                EMAIL
              </span>
              <span className="text-sm font-medium text-gray-800">
                info@nailexpress.co.uk
              </span>
            </a>
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-block border-2 border-(--primary) px-6 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24">
        <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
          <iframe
            title="Nail Express location"
            src="https://www.google.com/maps?q=153%20High%20Street%20Tewkesbury%20GL20%205JP&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl mt-16 md:mt-24">
        <div className="rounded-2xl bg-white/35 backdrop-blur-lg p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-800">
            READY TO BOOK?
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto"></div>

          <p className="mt-6 text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            Secure your appointment today and enjoy a calm, professional nail
            experience designed just for you.
          </p>

          <div className="mt-8">
            <Link
              href="/services"
              className="border-2 border-(--primary) px-8 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
