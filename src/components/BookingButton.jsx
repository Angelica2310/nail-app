"use client";
import React, { useState } from "react";
// import BookingForm from "./BookingForm";

export default function BookingButton() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div>
      <button className="booking-btn" onClick={() => setFormOpen(true)}>
        Book a table
      </button>

      {formOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setFormOpen(false)}
        >
          <div
            className="p-4 shadow-lg rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
          >
            {/* <BookingForm setFormOpen={setFormOpen} /> */}
          </div>
        </div>
      )}
    </div>
  );
}
