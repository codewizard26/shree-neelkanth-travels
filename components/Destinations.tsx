"use client";

import Reveal from "./Reveal";
import { destinations } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-ocean-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.32em] text-gold-400">
            Where We Travel
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
            Destinations that stay with you.
          </h2>
          <p className="mt-5 text-lg font-light text-cream/70">
            Handpicked temple towns, ghats and wildlife reserves across Uttar
            Pradesh, each planned to the last detail.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <a
                href="#packages"
                className="group relative block h-[26rem] overflow-hidden rounded-3xl"
              >
                <div
                  className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${d.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-[0.7rem] uppercase tracking-[0.25em] text-gold-400">
                    {d.days}
                  </span>
                  <h3 className="mt-1.5 font-display text-3xl font-semibold text-cream">
                    {d.name}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {d.tagline}
                  </p>
                </div>
                <span className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream/15 text-cream opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
