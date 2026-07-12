"use client";

import Reveal from "./Reveal";
import { vehicles, contact } from "@/lib/data";
import { Users, Check, MessageCircle } from "lucide-react";

export default function Vehicles() {
  return (
    <section id="vehicles" className="relative bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.32em] text-gold-600">
            Vehicles on Rent
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ocean-700 md:text-5xl">
            Rent a vehicle for your journey.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-ink/70">
            Travelling on your own plan? Choose from SUVs, Tempo Travellers and
            small cars — all with an experienced driver. Book now and
            we&rsquo;ll share the best rate.
          </p>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.12}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ocean-100 bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ocean-600/10">
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-ocean-700/90 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-cream">
                    <Users size={12} /> {v.capacity}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-ocean-700">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{v.type}</p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ink/70">
                    {v.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {v.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-ink/75"
                      >
                        <Check size={15} className="shrink-0 text-gold-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="my-5 h-px w-full bg-ocean-100" />

                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                      `Hi Shree Neelkanth, I'd like to rent a ${v.name} (${v.type}). Please share availability and rates.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-ocean-600 px-5 py-3 text-sm font-medium text-cream transition-all group-hover:bg-gold-500 group-hover:text-ocean-900"
                  >
                    <MessageCircle size={16} /> Book Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-ink/60">
            Prefer a call?{" "}
            <a
              href="#book"
              className="font-medium text-ocean-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-600"
            >
              Send us an enquiry
            </a>{" "}
            and we&rsquo;ll get back to you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
