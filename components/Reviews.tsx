"use client";

import Reveal from "./Reveal";
import { reviews, ratingSummary } from "@/lib/data";
import { Star } from "lucide-react";

/**
 * GOOGLE REVIEWS
 * --------------
 * The cards below render from `lib/data.ts`. To show LIVE reviews from your
 * Google Business Profile, fetch them from the Google Places API and map the
 * response into the same shape. Example (server component / route handler):
 *
 *   const res = await fetch(
 *     `https://maps.googleapis.com/maps/api/place/details/json` +
 *     `?place_id=YOUR_PLACE_ID&fields=reviews,rating,user_ratings_total` +
 *     `&key=${process.env.GOOGLE_PLACES_API_KEY}`
 *   );
 *   const { result } = await res.json();
 *   // result.reviews -> map to the Review[] type used here.
 *
 * Find your Place ID at: https://developers.google.com/maps/documentation/places/web-service/place-id
 */

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
);

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={
            i < rating
              ? "fill-gold-500 text-gold-500"
              : "fill-ocean-100 text-ocean-100"
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ocean-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.6fr]">
          {/* Summary card */}
          <Reveal>
            <div className="rounded-3xl bg-white p-9 shadow-xl shadow-ocean-600/5">
              <div className="flex items-center gap-3">
                <GoogleG />
                <span className="text-sm font-medium text-ink/70">
                  Google Reviews
                </span>
              </div>
              <p className="mt-6 font-display text-6xl font-semibold text-ocean-700">
                {ratingSummary.average}
              </p>
              <div className="mt-2">
                <Stars rating={5} />
              </div>
              <p className="mt-3 text-sm text-ink/60">
                Based on {ratingSummary.count}+ verified reviews
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shree+Neelkanth+Tour+and+Travel"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ocean-200 px-5 py-3 text-sm font-medium text-ocean-700 transition-colors hover:bg-ocean-600 hover:text-cream"
              >
                <GoogleG /> Write a review
              </a>
            </div>
          </Reveal>

          {/* Review cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.1}>
                <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg shadow-ocean-600/5 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 text-sm font-semibold text-cream">
                      {r.initials}
                    </span>
                    <div className="flex-1">
                      <figcaption className="font-medium text-ocean-700">
                        {r.name}
                      </figcaption>
                      <p className="text-xs text-ink/45">{r.date}</p>
                    </div>
                    <GoogleG />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Stars rating={r.rating} />
                    <span className="text-[0.7rem] uppercase tracking-wider text-gold-600">
                      {r.trip}
                    </span>
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/70">
                    “{r.text}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
