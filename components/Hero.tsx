"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { ratingSummary } from "@/lib/data";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

const HERO_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg/1920px-Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[82vh] items-center overflow-hidden">
      {/* LCP element — a CSS background is only discovered after the stylesheet
          parses, so preload it up front. */}
      <link rel="preload" as="image" href={HERO_IMG} fetchPriority="high" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-800/70 to-ocean-600/30" />
      </div>

      <div className="absolute right-[12%] top-[26%] h-40 w-40 animate-floaty rounded-full bg-ocean-400/30 blur-3xl" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <motion.span variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/90">
          <MapPin size={13} /> Packages · Vehicles on Rent
        </motion.span>

        <motion.h1 variants={item} className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Your travel,
          <br />
          <span className="italic text-gold-400">made easy.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85">
          Rent a car, SUV, Tempo Traveller or a bus — all with a driver — for
          your own plan. And when you want it all arranged, our curated tour
          packages cover Ayodhya, Kashi, Chitrakoot and Vindhyachal. Vehicle
          rentals and tours, both handled end to end. Book over a call or
          WhatsApp.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#vehicles" className="rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-ocean-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30">
            Rent a Vehicle
          </a>
          <a href="#packages" className="rounded-full border border-white/40 px-7 py-3.5 font-medium text-white transition-all hover:bg-white hover:text-ocean-700">
            View Packages
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-9 flex items-center gap-3 text-white">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
            ))}
          </div>
          <p className="text-sm">
            <span className="font-semibold">{ratingSummary.average}</span> · {ratingSummary.count}+ Google reviews
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
