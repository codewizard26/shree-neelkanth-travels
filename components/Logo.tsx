export function Emblem({ size = 42 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Shree Neelkanth Tour & Travels"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-full bg-white object-cover ring-1 ring-black/5"
    />
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <Emblem size={42} />
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
