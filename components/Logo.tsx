export function Emblem({ size = 42 }: { size?: number }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} aria-hidden>
      <defs>
        <linearGradient id="lr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b8def" /><stop offset=".55" stopColor="#1d4ed8" /><stop offset="1" stopColor="#0a1a35" />
        </linearGradient>
        <linearGradient id="lp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#cdddff" />
        </linearGradient>
        <radialGradient id="ls" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#f7d27a" /><stop offset="1" stopColor="#e6a817" />
        </radialGradient>
        <clipPath id="lc"><circle cx="80" cy="80" r="62" /></clipPath>
      </defs>
      <circle cx="80" cy="80" r="74" fill="url(#lr)" />
      <circle cx="80" cy="80" r="62" fill="#0a1a35" />
      <path d="M113,43 a15,15 0 1,0 0.1,30 a11.5,11.5 0 1,1 -0.1,-30 z" fill="#f0bd45" />
      <circle cx="80" cy="88" r="20" fill="url(#ls)" />
      <g clipPath="url(#lc)">
        <path d="M18,110 L62,62 L88,92 L114,60 L142,108 L142,142 L18,142 Z" fill="#16409c" />
        <path d="M18,122 L54,82 L80,110 L106,78 L142,122 L142,142 L18,142 Z" fill="url(#lp)" />
        <path d="M18,132 q20,8 40,0 t40,0 t40,0" fill="none" stroke="#5b8def" strokeWidth="3" opacity=".85" />
      </g>
    </svg>
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
