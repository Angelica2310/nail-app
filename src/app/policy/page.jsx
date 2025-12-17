// src/app/policies/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Policies",
  description:
    "Appointment policies for Nail Express Tewkesbury, including cancellations, late arrivals, repairs, and general guidelines.",
};

export default function PoliciesPage() {
  return (
    <main className="px-4 md:px-12 py-12">
      <section className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="text-center">
          <p className="tracking-[0.35em] text-xs text-gray-600">POLICIES</p>
          <h1 className="mt-4 text-3xl md:text-4xl tracking-widest text-gray-800">
            OUR GENERAL POLICIES
          </h1>
          <div className="mt-4 h-[2px] w-12 bg-(--primary) mx-auto" />
          <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
            To ensure the best experience for all our clients, please take a
            moment to review our policies before booking.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-12 space-y-8">
          {/* Booking */}
          <div>
            <h2 className="text-sm tracking-widest text-(--primary)">
              BOOKINGS
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-(--primary)" />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Appointments are recommended to guarantee availability. Walk-ins
              are welcome when space allows, but priority is given to booked
              appointments.
            </p>
          </div>

          {/* Cancellation */}
          <div>
            <h2 className="text-sm tracking-widest text-(--primary)">
              CANCELLATIONS & RESCHEDULING
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-(--primary)" />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              We kindly ask that you give us advance notice if you need to
              cancel or reschedule your appointment, so we can offer the time to
              another client.
            </p>
          </div>

          {/* Late Arrivals */}
          <div>
            <h2 className="text-sm tracking-widest text-(--primary)">
              LATE ARRIVALS
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-(--primary)" />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Please arrive on time for your appointment. If you arrive late,
              your service time may be reduced or your appointment may need to
              be rescheduled, depending on availability.
            </p>
          </div>

          {/* Nail Art */}
          <div>
            <h2 className="text-sm tracking-widest text-(--primary)">
              NAIL ART & CUSTOM DESIGNS
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-(--primary)" />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              We’re happy to work from inspiration photos and personal
              preferences. While we’ll always aim to match your requested design
              as closely as possible, colours and details may vary slightly
              depending on materials and technique.
            </p>
          </div>

          {/* Repairs */}
          <div>
            <h2 className="text-sm tracking-widest text-(--primary)">
              REPAIRS
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-(--primary)" />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Repairs may be available depending on the condition of the nail
              and how long it has been since your original appointment. Please
              contact us as soon as possible so we can advise.
            </p>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-sm tracking-widest text-(--primary)">
              PAYMENTS
            </h2>
            <div className="mt-2 h-[2px] w-10 bg-(--primary)" />
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              We accept cash and bank transfer. If you have any questions
              regarding payment methods, please contact us in advance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-700">
            If you have any questions about our policies, feel free to get in
            touch.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="border border-(--primary) px-8 py-3 text-xs tracking-widest hover:bg-(--primary) hover:text-white transition"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
