export function Emblem({
  size = 42,
  eager = false,
}: {
  size?: number;
  eager?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    // logo-96.png is a 96px copy of logo.png — the full 1254px original is
    // reserved for the og:image and is far too heavy to ship at this size.
    <img
      src="/logo-96.png"
      alt="Shree Neelkanth Tour & Travels"
      width={size}
      height={size}
      // No fetchPriority here on purpose: "high" would mint a preload that
      // competes with the hero, which is the actual LCP element.
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      style={{ width: size, height: size }}
      className="rounded-full bg-white object-cover ring-1 ring-black/5"
    />
  );
}

export default function Logo({
  light = false,
  eager = false,
}: {
  light?: boolean;
  eager?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <Emblem size={42} eager={eager} />
      <span className="leading-tight">
        <span className={`block font-display text-xl font-semibold ${light ? "text-white" : "text-ocean-900"}`}>
          Shree Neelkanth
        </span>
        <span className="block text-[0.62rem] uppercase tracking-[0.34em] text-ocean-500">
          Tour &amp; Travel
        </span>
      </span>
    </div>
  );
}
