"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Vehicles", href: "/#vehicles" },
  { label: "Packages", href: "/#packages" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Reviews", href: "/#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 py-2.5 shadow-[0_1px_0_rgba(16,42,82,0.1)] backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/">
          <Logo light={!scrolled} eager />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-sm font-medium transition-colors ${
                  scrolled ? "text-ocean-900/80 hover:text-ocean-900" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#book"
              className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ocean-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={scrolled ? "text-ocean-900 md:hidden" : "text-white md:hidden"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-6 mt-3 overflow-hidden rounded-2xl bg-white shadow-xl md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-ocean-50 px-6 py-4 text-ocean-900">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#book" onClick={() => setOpen(false)} className="block bg-gold-500 px-6 py-4 font-semibold text-ocean-900">
                Book Now
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
