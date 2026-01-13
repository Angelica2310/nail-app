import { Resend } from "resend";
import { createServerClient } from "../../../libs/supabase/server";

const buildBookingRecord = (payload) => ({
  customer_name: payload.name?.trim(),
  customer_phone: payload.phone?.trim(),
  customer_email: payload.email?.trim(),
  service: payload.service,
  requested_date: payload.date || null,
  requested_time: payload.time,
  notes: payload.notes?.trim() || null,
  status: "new",
});

const buildEmailText = (booking) => {
  const lines = [
    "Thanks for booking with Nail Express Tewkesbury!",
    "",
    "Here are your appointment details:",
    `Name: ${booking.customer_name}`,
    `Phone: ${booking.customer_phone}`,
    `Email: ${booking.customer_email}`,
    `Service: ${booking.service}`,
    `Date: ${booking.requested_date || "Flexible"}`,
    `Time: ${booking.requested_time}`,
    booking.notes ? `Notes: ${booking.notes}` : null,
    "",
    "We will confirm availability shortly.",
  ];

  return lines.filter(Boolean).join("\n");
};

export async function POST(request) {
  const payload = await request.json();

  if (
    !payload?.name ||
    !payload?.phone ||
    !payload?.email ||
    !payload?.service ||
    !payload?.time
  ) {
    return Response.json(
      { message: "Missing required booking fields." },
      { status: 400 }
    );
  }

  const supabase = createServerClient();
  const bookingPayload = buildBookingRecord(payload);

  const { data: booking, error } = await supabase
    .from("bookings")
    .insert(bookingPayload)
    .select()
    .single();

  if (error) {
    console.error("Supabase insert failed:", error);
    return Response.json(
      { message: "Unable to save booking at the moment." },
      { status: 500 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM;
  const adminEmail = process.env.RESEND_ADMIN_EMAIL;

  if (resendApiKey && resendFrom) {
    const resend = new Resend(resendApiKey);
    const emailText = buildEmailText(booking);

    try {
      await resend.emails.send({
        from: resendFrom,
        to: booking.customer_email,
        subject: "Your booking request",
        text: emailText,
      });

      if (adminEmail) {
        await resend.emails.send({
          from: resendFrom,
          to: adminEmail,
          subject: "New booking request received",
          text: emailText,
        });
      }
    } catch (emailError) {
      console.error("Resend email failed:", emailError);
    }
  } else {
    console.warn(
      "Resend email skipped: missing RESEND_API_KEY or RESEND_FROM."
    );
  }

  return Response.json(
    {
      booking: {
        id: booking.id,
        name: booking.customer_name,
        phone: booking.customer_phone,
        email: booking.customer_email,
        service: booking.service,
        date: booking.requested_date,
        time: booking.requested_time,
        notes: booking.notes,
        status: booking.status,
      },
    },
    { status: 201 }
  );
}
