import type { Metadata } from "next";
import { Check, Phone, MessageCircle, MapPin, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { vehicles, contact, site, reviews } from "@/lib/data";

const HERO_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg/1920px-Boats_at_sunrise_Ganges_River_Varanasi_Uttar_Pradesh_Schwiki.jpg";

const title = "Car Hire in Prayagraj — Taxi, Cab & Tempo Traveller on Rent";
const description =
  "Reliable car hire in Prayagraj (Allahabad) with experienced drivers. Book a hatchback, sedan, SUV, Innova Crysta or Tempo Traveller on rent for local trips, outstation tours and Ayodhya–Varanasi darshan. Transparent per-km rates, 24x7 booking.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "car hire in Prayagraj",
    "car rental Prayagraj",
    "taxi in Prayagraj",
    "cab booking Prayagraj",
    "Prayagraj to Ayodhya taxi",
    "Tempo Traveller on rent Prayagraj",
    "Innova on rent Prayagraj",
    "Allahabad car rental",
    "outstation cab Prayagraj",
  ],
  alternates: { canonical: "/car-hire-prayagraj" },
  openGraph: {
    type: "website",
    url: `${site.url}/car-hire-prayagraj`,
    title,
    description,
    images: [
      { url: vehicles[2]?.image ?? site.ogImage, width: 1200, height: 630, alt: title },
    ],
  },
  twitter: { card: "summary_large_image", title, description },
};

const avgRating =
  reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Car Hire and Taxi Rental",
      name: "Car Hire in Prayagraj",
      description,
      provider: {
        "@type": "TravelAgency",
        name: site.name,
        telephone: contact.phone,
        email: contact.email,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.locality,
          addressRegion: site.region,
          addressCountry: site.country,
        },
      },
      areaServed: {
        "@type": "City",
        name: "Prayagraj",
        alternateName: "Allahabad",
      },
      offers: vehicles.map((v) => ({
        "@type": "Offer",
        name: `${v.name} on rent (${v.type})`,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${site.url}/car-hire-prayagraj`,
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avgRating,
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Car Hire in Prayagraj",
          item: `${site.url}/car-hire-prayagraj`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does car hire in Prayagraj cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rates start at ₹10/km for a hatchback, ₹12/km for a sedan, ₹14/km for an SUV like Innova Crysta and ₹22/km for a Tempo Traveller. Toll, parking and night charges are extra. Call for a fixed quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a car from Prayagraj to Ayodhya or Varanasi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide outstation cabs and full tour cars from Prayagraj to Ayodhya, Varanasi, Lucknow, Chitrakoot and Vindhyachal with experienced drivers.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide a driver with the rental car?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every car, SUV and Tempo Traveller comes with an experienced local driver. Self-drive is not offered.",
          },
        },
      ],
    },
  ],
};

const routes = [
  { to: "Ayodhya", km: "~170 km" },
  { to: "Varanasi", km: "~120 km" },
  { to: "Lucknow", km: "~200 km" },
  { to: "Chitrakoot", km: "~120 km" },
  { to: "Vindhyachal", km: "~90 km" },
  { to: "Airport / Railway Station", km: "Local" },
];

const whyUs = [
  ["Experienced local drivers", "Drivers who know Prayagraj, the temple routes and highways to Ayodhya, Varanasi and beyond."],
  ["Transparent per-km rates", "Fixed, upfront pricing. No hidden charges — you approve the fare before you travel."],
  ["Clean, AC vehicles", "Well-maintained hatchbacks, sedans, Innova SUVs and Tempo Travellers, sanitised before every trip."],
  ["24×7 booking", "Call or WhatsApp any time for airport, railway station pickups and last-minute trips."],
  ["Any group size", "From a couple in a hatchback to a 26-seat Tempo Traveller for pilgrim groups."],
  ["Full tour packages", "Combine your cab with a planned Ayodhya, Varanasi or Chitrakoot darshan package."],
];

const faqs = [
  ["How much does car hire in Prayagraj cost?", "Rates start at ₹10/km (hatchback), ₹12/km (sedan), ₹14/km (SUV / Innova Crysta) and ₹22/km (Tempo Traveller). Toll, parking and night charges are extra. Call for a fixed quote."],
  ["Can I book a car from Prayagraj to Ayodhya or Varanasi?", "Yes — we run outstation cabs and full tour cars from Prayagraj to Ayodhya, Varanasi, Lucknow, Chitrakoot and Vindhyachal with experienced drivers."],
  ["Do you provide a driver with the car?", "Every vehicle comes with an experienced local driver. We do not offer self-drive rentals."],
];

export default function CarHirePrayagraj() {
  const waLink = (text: string) =>
    `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <main className="overflow-x-hidden bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero — matches landing page */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMG}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-800/70 to-ocean-600/30" />
        </div>

        <div className="absolute right-[12%] top-[26%] h-40 w-40 animate-floaty rounded-full bg-ocean-400/30 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/90">
              <MapPin size={13} /> Prayagraj · Allahabad
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Car Hire in
              <br />
              <span className="italic text-gold-400">Prayagraj.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/85">
              Book a reliable taxi, cab or car on rent in Prayagraj with an
              experienced driver. Hatchbacks, sedans, Innova Crysta SUVs and Tempo
              Travellers for local city runs, outstation trips and full
              Ayodhya–Varanasi darshan tours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-ocean-900 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/30"
              >
                <Phone size={16} /> Call {contact.phoneDisplay}
              </a>
              <a
                href={waLink(
                  "Hi Shree Neelkanth, I want to hire a car in Prayagraj. Please share rates and availability."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-medium text-white transition-all hover:bg-white hover:text-ocean-700"
              >
                <MessageCircle size={16} /> WhatsApp Booking
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-9 flex items-center gap-3 text-white">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-sm">
                <span className="font-semibold">{avgRating}</span> · {reviews.length}+ Google reviews
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fleet + rates */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.32em] text-gold-600">
              Vehicles on Rent
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ocean-700 md:text-5xl">
              Cars &amp; Tempo Travellers on rent.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-ink/70">
              Choose the right vehicle for your trip. All rentals include a trained
              driver. Toll, parking and night charges are billed separately.
            </p>
          </Reveal>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ocean-100 bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ocean-600/10">
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.image}
                      alt={`${v.name} (${v.type}) on rent in Prayagraj`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-ocean-700/90 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-cream">
                      <Users size={12} /> {v.capacity}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-ocean-700">
                      {v.name} on rent
                    </h3>
                    <p className="mt-1 text-sm text-ink/60">{v.type}</p>
                    <ul className="mt-4 space-y-2">
                      {v.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-ink/75"
                        >
                          <Check size={15} className="mt-0.5 shrink-0 text-gold-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="my-5 h-px w-full bg-ocean-100" />
                    <a
                      href={waLink(
                        `Hi, I want to hire a ${v.name} (${v.type}) in Prayagraj. Please share the rate.`
                      )}
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
        </div>
      </section>

      {/* Popular routes */}
      <section className="bg-ocean-50/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <span className="text-xs uppercase tracking-[0.32em] text-gold-600">
              Outstation Cabs
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ocean-700 md:text-5xl">
              Popular cab routes from Prayagraj.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-ink/70">
              One-way and round-trip outstation taxi service to the major pilgrim
              and tourist destinations of Uttar Pradesh.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r, i) => (
              <Reveal key={r.to} delay={i * 0.08}>
                <div className="flex items-center justify-between rounded-2xl border border-ocean-100 bg-cream px-5 py-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ocean-600/10">
                  <span className="font-medium text-ocean-800">
                    Prayagraj → {r.to}
                  </span>
                  <span className="text-sm text-ink/60">{r.km}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <span className="text-xs uppercase tracking-[0.32em] text-gold-600">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ocean-700 md:text-5xl">
              Why book car hire with us.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(([h, p], i) => (
              <Reveal key={h} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-ocean-100 bg-cream p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-600/10">
                  <h3 className="font-display text-lg font-semibold text-ocean-700">
                    {h}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ocean-50/60 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <span className="text-xs uppercase tracking-[0.32em] text-gold-600">
              FAQs
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-ocean-700 md:text-5xl">
              Car hire in Prayagraj — FAQs.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-5">
            {faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 0.06}>
                <div className="rounded-2xl border border-ocean-100 bg-cream p-6">
                  <h3 className="font-display text-base font-semibold text-ocean-800">
                    {q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <p className="text-ink/70">Ready to book your car in Prayagraj?</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ocean-900 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
              >
                <Phone size={16} /> Call {contact.phoneDisplay}
              </a>
              <a
                href={waLink(
                  "Hi Shree Neelkanth, I want to hire a car in Prayagraj. Please share rates."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ocean-200 px-7 py-3.5 text-sm font-semibold text-ocean-700 transition-colors hover:bg-white"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
