"use client";

import Reveal from "./Reveal";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 99197 56791",
    href: "tel:+919919756791",
  },
  {
    icon: Mail,
    label: "Email",
    value: "neelkanthtourtravels96@gmail.com",
    href: "mailto:neelkanthtourtravels96@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    value:
      "Shree Neelkanth Tour & Travels, Nagar Nigam, Allahpur, Prayagraj, Uttar Pradesh 211006",
    href: "https://www.google.com/maps/place/Shri+Neelkanth+Tour+And+Travels/@25.4482958,81.8713832,17z/data=!3m1!4b1!4m6!3m5!1s0x399ab550dc72ce69:0xb2cf4831c384c8ac!8m2!3d25.4482958!4d81.8713832!16s%2Fg%2F11sbr0p4g5",
  },
];

export default function Contact() {
  return (
    <section id="book" className="relative bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2.5rem] bg-ocean-700 shadow-2xl shadow-ocean-900/20">
          <div className="grid lg:grid-cols-2">
            {/* Left: copy + details */}
            <div className="relative p-10 md:p-14">
              <Reveal>
                <span className="text-xs uppercase tracking-[0.32em] text-gold-400">
                  Reserve Your Spot
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
                  Let&rsquo;s plan your sacred journey together.
                </h2>
                <p className="mt-5 max-w-md font-light text-cream/75">
                  Share a few details and our travel coordinator will reach out
                  within a few hours with a tailored plan — no obligation.
                </p>
              </Reveal>

              <div className="mt-10 space-y-5">
                {details.map((d, i) => (
                  <Reveal key={d.label} delay={i * 0.08}>
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={d.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 text-cream/90"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream/10 transition-colors group-hover:bg-gold-500 group-hover:text-ocean-900">
                        <d.icon size={19} />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-cream/50">
                          {d.label}
                        </span>
                        <span className="text-base">{d.value}</span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              <a
                href="https://wa.me/919919756791"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-medium text-ocean-900 transition-all hover:bg-gold-400"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>

            {/* Right: form */}
            <Reveal className="bg-cream p-10 md:p-14">
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you! This is a demo form — connect it to your email or CRM to receive enquiries."
                  );
                }}
              >
                <Field label="Full name" placeholder="e.g. Anjali Sharma" />
                <Field
                  label="Phone / WhatsApp"
                  placeholder="+91 ..."
                  type="tel"
                />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ocean-700">
                    What are you interested in?
                  </label>
                  <select className="w-full rounded-xl border border-ocean-100 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-gold-400">
                    <option>Ayodhya Darshan</option>
                    <option>Ayodhya – Varanasi</option>
                    <option>Ayodhya – Varanasi – Chandauli</option>
                    <option>Chitrakoot Darshan</option>
                    <option>Vindhyachal Darshan</option>
                    <option>Vehicle on Rent — Hatchback / Sedan</option>
                    <option>Vehicle on Rent — SUV</option>
                    <option>Vehicle on Rent — Tempo Traveller</option>
                    <option>Vehicle on Rent — 40 / 50 Seater Bus</option>
                    <option>Custom / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ocean-700">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your group, dates, and any needs."
                    className="w-full resize-none rounded-xl border border-ocean-100 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-gold-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-ocean-600 py-3.5 font-medium text-cream transition-all hover:bg-ocean-700 hover:shadow-lg"
                >
                  Request Booking
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ocean-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ocean-100 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-gold-400"
      />
    </div>
  );
}
