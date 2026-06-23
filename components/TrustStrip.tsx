"use client";

import Reveal from "./Reveal";
import { ShieldCheck, Headphones, Star, BadgeIndianRupee } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Transparent Pricing" },
  { icon: Headphones, label: "24×7 On-Trip Support" },
  { icon: BadgeIndianRupee, label: "Best Price Promise" },
  { icon: Star, label: "4.9★ on Google" },
];

export default function TrustStrip() {
  return (
    <section className="bg-ocean-900 py-11">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.08}>
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-ocean-400/20 text-gold-400">
                <it.icon size={20} />
              </span>
              <span className="text-sm font-medium">{it.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
