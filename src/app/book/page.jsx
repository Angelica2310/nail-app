// src/app/book/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Book Appointment",
  description:
    "Book your appointment with Nail Express Tewkesbury. Choose a service and time that suits you.",
};

const FRESHA_URL = "https://bamboonails.setmore.com";

// 👉 WhatsApp config
const WHATSAPP_PHONE = "447596246637"; // replace with real number (UK, no +, no spaces)
const WHATSAPP_MESSAGE =
  "Hi, I’d like to book a nail appointment. Please let me know your availability.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function BookPage() {
  return (
    <main className="px-4 md:px-12 py-12">
      <section className="mx-auto max-w-4xl text-center">
        <p className="tracking-[0.35em] text-xs text-gray-600">BOOKING</p>

        <h1 className="mt-4 text-3xl md:text-4xl tracking-widest text-gray-800">
          BOOK YOUR APPOINTMENT
        </h1>

        <div className="mt-4 h-0.5 w-12 bg-(--primary) mx-auto" />

        <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
          Choose your service and preferred time using our online booking
          system. You’ll be taken to Fresha to complete your booking, or you can
          book directly via WhatsApp.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          {/* Fresha booking */}
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-(--primary) bg-(--primary) px-8 py-3 text-xs tracking-widest text-white hover:bg-transparent hover:text-(--primary) transition"
          >
            CONTINUE TO BOOKING
          </a>

          {/* WhatsApp booking */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-600 px-8 py-3 text-xs tracking-widest text-green-700 hover:bg-green-600 hover:text-white transition"
          >
            BOOK VIA WHATSAPP
          </a>

          {/* Contact page */}
          <Link
            href="/contact"
            className="border border-gray-300 px-8 py-3 text-xs tracking-widest hover:bg-white/60 transition"
          >
            CONTACT US
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Prefer to book by phone? Call 01684 292988.
        </p>

        <p className="mt-4 text-xs text-gray-600 text-center">
          By booking, you agree to our{" "}
          <Link
            href="/policy"
            className="underline underline-offset-4 hover:text-(--primary)"
          >
            Policies
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
