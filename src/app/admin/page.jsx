// src/app/admin/page.jsx
"use client";

import { useEffect, useState } from "react";
import { getBrowserClient } from "../../libs/supabase/browser";

const supabase = getBrowserClient();

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) {
        setSession(data.session ?? null);
        setStatus("idle");
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession ?? null);
      }
    );

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) {
      return;
    }

    const loadBookings = async () => {
      setStatus("loading");
      const { data, error } = await supabase
        .from("bookings")
        .select(
          "id, created_at, customer_name, customer_phone, customer_email, service, requested_date, requested_time, notes, status"
        )
        .order("created_at", { ascending: false });

      if (error) {
        setMessage("Unable to load bookings. Please try again.");
      } else {
        setBookings(data ?? []);
        setMessage("");
      }
      setStatus("idle");
    };

    loadBookings();
  }, [session]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: formState.email,
      password: formState.password,
    });

    if (error) {
      setMessage("Login failed. Check your credentials.");
      setStatus("idle");
    } else {
      setFormState({ email: "", password: "" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <main className="px-4 md:px-12 py-12">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-2xl md:text-3xl tracking-widest text-gray-800">
          Admin Bookings
        </h1>

        <div className="mt-3 h-0.5 w-12 bg-(--primary)" />

        {!session ? (
          <form
            onSubmit={handleLogin}
            className="mt-8 grid gap-4 max-w-md rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm"
          >
            <label className="text-xs uppercase tracking-widest text-gray-500">
              Email
              <input
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
              />
            </label>

            <label className="text-xs uppercase tracking-widest text-gray-500">
              Password
              <input
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:border-(--primary) focus:outline-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="border border-(--primary) bg-(--primary) px-6 py-3 text-xs tracking-widest text-white transition hover:bg-transparent hover:text-(--primary) disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "SIGNING IN..." : "SIGN IN"}
            </button>

            {message ? <p className="text-xs text-red-600">{message}</p> : null}
          </form>
        ) : (
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                Signed in as {session.user.email}
              </p>
              <button
                type="button"
                onClick={handleLogout}
                className="border border-gray-300 px-6 py-2 text-xs tracking-widest hover:bg-white/60 transition"
              >
                SIGN OUT
              </button>
            </div>

            {message ? (
              <p className="mt-4 text-xs text-red-600">{message}</p>
            ) : null}

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="border-b border-gray-200 text-xs uppercase tracking-widest text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3">Notes</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100">
                      <td className="px-4 py-3">
                        {booking.requested_date || "Flexible"}{" "}
                        {booking.requested_time}
                      </td>
                      <td className="px-4 py-3">{booking.customer_name}</td>
                      <td className="px-4 py-3">{booking.service}</td>
                      <td className="px-4 py-3">
                        <div>{booking.customer_phone}</div>
                        <div>{booking.customer_email}</div>
                      </td>
                      <td className="px-4 py-3">{booking.notes || "-"}</td>
                      <td className="px-4 py-3 capitalize">
                        {booking.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {status === "loading" ? (
                <p className="px-4 py-4 text-xs text-gray-500">
                  Loading bookings...
                </p>
              ) : null}

              {status === "idle" && bookings.length === 0 ? (
                <p className="px-4 py-4 text-xs text-gray-500">
                  No bookings yet.
                </p>
              ) : null}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
