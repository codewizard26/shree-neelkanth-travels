import { Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ocean-900 py-14 text-cream/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo light />
            <p className="mt-5 text-sm font-light leading-relaxed">
              Pilgrimage, heritage &amp; wildlife tours across Uttar Pradesh, planned end to end.
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            <FooterCol
              title="Explore"
              links={["Destinations", "Packages", "Reviews", "About Us"]}
            />
            <FooterCol
              title="Popular Tours"
              links={["Ayodhya", "Varanasi", "Nawabganj Sanctuary", "Katarniyaghat"]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Shree Neelkanth Tour &amp; Travel. All
            rights reserved.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold-500 hover:text-ocean-900"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cream">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-gold-400">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
