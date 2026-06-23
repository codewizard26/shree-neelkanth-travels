"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { packages } from "@/lib/data";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

export default function Packages() {
  return (
    <section id="packages" className="relative bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.32em] text-gold-600">
            Curated Packages
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ocean-700 md:text-5xl">
            Journeys designed for every traveller.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-ink/70">
            Transparent pricing, flexible dates and fully customisable. Tap any
            package to view the full day-by-day itinerary.
          </p>
        </Reveal>

        <div className="grid gap-7 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.12}>
              <Link
                href={`/packages/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ocean-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ocean-600/10"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold-500 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-ocean-900">
                      <Sparkles size={12} /> {p.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-ocean-700">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{p.subtitle}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-gold-600">
                    <Clock size={13} /> {p.duration}
                  </p>

                  <div className="my-5 h-px w-full bg-ocean-100" />

                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-xs text-ink/50">starting at</span>
                      <p className="font-display text-2xl font-semibold text-ocean-700">
                        {p.price}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-600 px-5 py-2.5 text-sm font-medium text-cream transition-all group-hover:bg-gold-500 group-hover:text-ocean-900">
                      View Details <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
