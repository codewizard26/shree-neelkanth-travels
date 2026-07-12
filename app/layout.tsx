import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Inter,
  Noto_Sans_Devanagari,
  Noto_Sans_Tamil,
  Noto_Sans_Kannada,
  Noto_Sans_Telugu,
} from "next/font/google";
import "./globals.css";
import { site, contact, reviews } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-deva",
  display: "swap",
});

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-tamil",
  display: "swap",
});

const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kannada",
  display: "swap",
});

const telugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-telugu",
  display: "swap",
});

const description =
  "Shree Neelkanth Tour & Travel curates Ayodhya, Varanasi, Lucknow, Chitrakoot and Vindhyachal tour packages across Uttar Pradesh — plus SUVs, Tempo Travellers and buses on rent. Simple to book, planned end to end.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Shree Neelkanth Tour & Travel | Tours across Uttar Pradesh",
    template: "%s | Shree Neelkanth Tour & Travel",
  },
  description,
  applicationName: site.name,
  keywords: [
    "Ayodhya tour package",
    "Varanasi tour",
    "Lucknow Ayodhya tour",
    "Chitrakoot darshan",
    "Vindhyachal darshan",
    "Prayagraj car & bus rental",
    "Tempo Traveller on rent Prayagraj",
    "Uttar Pradesh tour operator",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Shree Neelkanth Tour & Travel | Tours across Uttar Pradesh",
    description,
    images: [
      { url: site.ogImage, width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Neelkanth Tour & Travel | Tours across Uttar Pradesh",
    description,
    images: [site.ogImage],
  },
  category: "travel",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102a52",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description,
      publisher: { "@id": `${site.url}/#business` },
      inLanguage: "en-IN",
    },
    {
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": `${site.url}/#business`,
  name: site.name,
  description,
  url: site.url,
  image: `${site.url}${site.ogImage}`,
  logo: `${site.url}/logo-full.svg`,
  telephone: contact.phone,
  email: contact.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.maps,
  aggregateRating:
    reviews.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: (
            reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
          ).toFixed(1),
          reviewCount: reviews.length,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
  })),
  areaServed: [
    "Ayodhya",
    "Varanasi",
    "Lucknow",
    "Chitrakoot",
    "Vindhyachal",
    "Prayagraj",
    "Uttar Pradesh",
  ],
  sameAs: site.socials,
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which tour packages does Shree Neelkanth Tour & Travel offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Ayodhya, Varanasi, Lucknow, Chitrakoot and Vindhyachal darshan tour packages across Uttar Pradesh, most starting and ending at Prayagraj.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a car, Tempo Traveller or bus in Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We rent SUVs, small cars, Tempo Travellers and buses with an experienced driver. Contact us on WhatsApp or call for the best rate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a tour with Shree Neelkanth Tour & Travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Call or WhatsApp us at ${contact.phoneDisplay}, or email ${contact.email}. We plan the trip end to end and share a fixed rate before you book.`,
      },
    },
    {
      "@type": "Question",
      name: "Where is Shree Neelkanth Tour & Travel located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We are based in ${site.locality}, ${site.region}, India, and serve pilgrim destinations across Uttar Pradesh.`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${devanagari.variable} ${tamil.variable} ${kannada.variable} ${telugu.variable}`}
    >
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        {children}
      </body>
    </html>
  );
}

