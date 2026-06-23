import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  Noto_Sans_Devanagari,
  Noto_Sans_Tamil,
  Noto_Sans_Kannada,
  Noto_Sans_Telugu,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";

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

export const metadata: Metadata = {
  title: "Shree Neelkanth Tour & Travel | Tours across Uttar Pradesh",
  description:
    "Shree Neelkanth Tour & Travel curates Ayodhya, Varanasi, Lucknow, bird-sanctuary and Katarniyaghat wildlife tour packages across Uttar Pradesh — simple to book, planned end to end.",
  keywords: [
    "Ayodhya tour package",
    "Varanasi tour",
    "Lucknow Ayodhya tour",
    "Nawabganj bird sanctuary",
    "Katarniyaghat tiger safari",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
