import Link from "next/link";
import { googleReviews } from "../libs/reviews";

export default function Review() {
  const { highlights } = googleReviews;

  return (
    <section className="rounded-2xl p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-xl md:text-2xl tracking-widest text-(--text)">
          REVIEWS
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-(--primary)"></div>
      </div>

      {/* Reviews grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((r) => (
          <figure
            key={r.name}
            className="rounded-xl bg-white/70 backdrop-blur p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
          >
            <blockquote className="text-sm leading-relaxed text-gray-600 italic">
              “{r.text}”
            </blockquote>

            <figcaption className="mt-6 text-xs tracking-widest text-gray-800">
              {r.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
