// src/app/book/BookingForm.jsx
"use client";

import { useState } from "react";

const SERVICES = [
  "Gel Manicure",
  "Classic Manicure",
  "Builder Gel",
  "Luxury Pedicure",
  "Nail Art Add-on",
  "Infills",
];

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const buildWhatsAppUrl = (phone, message) => {
  if (!phone || !message) {
    return "";
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export default function BookingForm({ whatsappPhone, whatsappMessage }) {
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0],
    date: "",
    time: TIME_SLOTS[0],
    notes: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const { booking } = await response.json();
      const detailedMessage = [
        "Hi, I'd like to book a nail appointment.",
        `Name: ${booking.name}`,
        `Phone: ${booking.phone}`,
        `Email: ${booking.email}`,
        `Service: ${booking.service}`,
        `Date: ${booking.date || "Flexible"}`,
        `Time: ${booking.time}`,
        booking.notes ? `Notes: ${booking.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const nextWhatsAppLink = buildWhatsAppUrl(whatsappPhone, detailedMessage);

      setStatus("success");
      setStatusMessage(
        "Thanks! Your request is in. We’ll email you shortly with confirmation details."
      );
      setWhatsappLink(nextWhatsAppLink);
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage(
        "Something went wrong while saving your request. Please call us or use WhatsApp."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-6 text-left shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs uppercase tracking-widest text-gray-500">
          Full name
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
            placeholder="Your name"
          />
        </label>

        <label className="text-xs uppercase tracking-widest text-gray-500">
          Phone number
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
            placeholder="e.g. 07..."
          />
        </label>

        <label className="text-xs uppercase tracking-widest text-gray-500">
          Email address
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
            placeholder="you@example.com"
          />
        </label>

        <label className="text-xs uppercase tracking-widest text-gray-500">
          Service
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
          >
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="text-xs uppercase tracking-widest text-gray-500">
          Preferred date
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
          />
        </label>

        <label className="text-xs uppercase tracking-widest text-gray-500">
          Preferred time
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block text-xs uppercase tracking-widest text-gray-500">
        Notes (optional)
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
          placeholder="Anything we should know?"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-(--primary) bg-(--primary) px-6 py-3 text-xs tracking-widest text-white transition hover:bg-transparent hover:text-(--primary) disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "SAVING..." : "REQUEST THIS SLOT"}
        </button>

        <div className="text-xs text-gray-600 sm:text-right">
          {statusMessage ? (
            <p>{statusMessage}</p>
          ) : (
            <p>Send your request by WhatsApp for a faster reply.</p>
          )}
          <a
            href={
              whatsappLink ||
              buildWhatsAppUrl(whatsappPhone, whatsappMessage || "")
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex text-green-700 underline underline-offset-4 hover:text-green-800"
          >
            Prefer WhatsApp? Message us here.
          </a>
        </div>
      </div>
    </form>
  );
}
