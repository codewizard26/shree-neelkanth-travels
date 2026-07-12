import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, MapPin, Phone, MessageCircle, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { packages, contact, site } from "@/lib/data";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) return { title: "Package not found" };

  const desc = `${pkg.subtitle} — ${pkg.duration}, starting at ${pkg.price} per person. ${pkg.overview}`.slice(
    0,
    160
  );
  const url = `${site.url}/packages/${pkg.slug}`;

  return {
    title: `${pkg.title} Tour Package`,
    description: desc,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${pkg.title} Tour Package`,
      description: desc,
      images: [{ url: pkg.image, width: 1200, height: 630, alt: pkg.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} Tour Package`,
      description: desc,
      images: [pkg.image],
    },
  };
}

export default function PackageDetail({ params }: { params: { slug: string } }) {
  const pkg = packages.find((p) => p.slug === params.slug);
  if (!pkg) notFound();

  const waText = encodeURIComponent(
    `Hi! I'm interested in the "${pkg.title}" package (${pkg.duration}). Please share more details.`
  );

  const priceValue = pkg.price.replace(/[^\d]/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${pkg.title} Tour Package`,
    description: pkg.overview,
    image: pkg.image,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: priceValue || undefined,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/packages/${pkg.slug}`,
    },
  };

  return (
    <main className="overflow-x-hidden bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-ocean-900/40 to-ocean-900/30" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12">
          <Link
            href="/#packages"
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-cream backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <ArrowLeft size={15} /> All Packages
          </Link>
          {pkg.badge && (
            <span className="mb-3 inline-flex w-fit items-center rounded-full bg-gold-500 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-ocean-900">
              {pkg.badge}
            </span>
          )}
          <h1 className="font-display text-4xl font-semibold text-cream md:text-6xl">
            {pkg.title}
          </h1>
          <p className="mt-2 text-lg text-cream/80">{pkg.subtitle}</p>
          <div className="mt-4 flex flex-wrap items-center gap-5 text-cream/90">
            <span className="inline-flex items-center gap-2 text-sm">
              <Clock size={16} /> {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <MapPin size={16} /> Starts &amp; ends at Prayagraj
            </span>
            <span className="text-sm">
              <span className="text-cream/60">starting at </span>
              <span className="font-display text-xl font-semibold">{pkg.price}</span>
              <span className="text-cream/60"> / person</span>
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Left: content */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-ocean-700">
              Overview
            </h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-ink/75">
              {pkg.overview}
            </p>

            {/* Itinerary */}
            <h2 className="mt-14 font-display text-2xl font-semibold text-ocean-700">
              Day-by-day Itinerary
            </h2>
            <ol className="mt-8 space-y-0">
              {pkg.itinerary.map((d, i) => (
                <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* timeline line */}
                  {i !== pkg.itinerary.length - 1 && (
                    <span className="absolute left-[15px] top-9 h-full w-px bg-ocean-100" />
                  )}
                  <span className="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ocean-600 text-xs font-semibold text-cream">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <span className="text-xs uppercase tracking-[0.18em] text-gold-600">
                      {d.day}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ocean-700">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-ink/70">{d.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Inclusions / Exclusions */}
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <div className="rounded-3xl border border-ocean-100 bg-white p-7">
                <h3 className="font-display text-xl font-semibold text-ocean-700">
                  What&rsquo;s included
                </h3>
                <ul className="mt-4 space-y-3">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ocean-50 text-ocean-600">
                        <Check size={13} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-ocean-100 bg-white p-7">
                <h3 className="font-display text-xl font-semibold text-ocean-700">
                  Not included
                </h3>
                <ul className="mt-4 space-y-3">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                        <X size={13} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: sticky booking card */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-ocean-100 bg-white p-7 shadow-xl shadow-ocean-600/5">
              <span className="text-xs text-ink/50">starting at</span>
              <p className="font-display text-4xl font-semibold text-ocean-700">
                {pkg.price}
              </p>
              <p className="mt-1 text-sm text-ink/60">per person · {pkg.duration}</p>

              <div className="my-6 h-px w-full bg-ocean-100" />

              <p className="text-sm text-ink/70">
                Questions or ready to book? Talk to our travel coordinator now.
              </p>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-medium text-white transition-all hover:brightness-105"
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-ocean-600 py-3.5 font-medium text-cream transition-all hover:bg-ocean-700"
              >
                <Phone size={17} /> Call {contact.phoneDisplay}
              </a>

              <Link
                href="/#book"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-ocean-200 py-3.5 font-medium text-ocean-700 transition-all hover:bg-ocean-50"
              >
                Request a callback
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
