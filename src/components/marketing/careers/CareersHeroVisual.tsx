/** Large abstract product-architecture visual for the Careers hero. Decorative only. */
export function CareersHeroVisual() {
  return (
    <div className="relative h-full min-h-[280px] w-full sm:min-h-[320px] lg:min-h-[380px]" aria-hidden="true">
      <svg
        viewBox="0 0 640 460"
        className="h-auto w-full max-w-none lg:absolute lg:-right-8 lg:top-1/2 lg:w-[118%] lg:-translate-y-1/2 xl:-right-16"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`hv-${i}`} x1={40 + i * 72} y1="12" x2={40 + i * 72} y2="448" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`hh-${i}`} x1="16" y1={28 + i * 64} x2="624" y2={28 + i * 64} stroke="#08233F" strokeOpacity="0.04" strokeWidth="1" />
        ))}

        {/* Primary architecture paths */}
        <path
          d="M 48 92 C 140 92, 160 168, 248 168 S 340 88, 430 108 S 540 188, 612 168"
          stroke="#146EF5"
          strokeOpacity="0.28"
          strokeWidth="1"
          className="careers-line-flow"
          strokeDasharray="6 8"
        />
        <path
          d="M 36 248 C 120 210, 180 310, 270 292 S 390 210, 480 250 S 560 330, 628 300"
          stroke="#08233F"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        <path
          d="M 72 360 C 180 330, 220 390, 320 372 S 430 300, 530 340"
          stroke="#FF6A00"
          strokeOpacity="0.18"
          strokeWidth="1"
          className="careers-line-flow-slow"
          strokeDasharray="4 10"
        />

        {/* UI fragment outlines — not filled dashboard cards */}
        <rect x="72" y="58" width="148" height="96" rx="2" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
        <line x1="72" y1="78" x2="220" y2="78" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <rect x="88" y="90" width="52" height="3" fill="#146EF5" fillOpacity="0.22" />
        <rect x="88" y="102" width="92" height="2" fill="#08233F" fillOpacity="0.08" />
        <rect x="88" y="112" width="76" height="2" fill="#08233F" fillOpacity="0.06" />
        <circle cx="204" cy="70" r="3" fill="#FF6A00" fillOpacity="0.55" className="careers-pulse" />

        <rect x="268" y="132" width="126" height="78" rx="2" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
        <rect x="284" y="148" width="36" height="36" rx="1" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
        <rect x="330" y="152" width="48" height="2" fill="#08233F" fillOpacity="0.1" />
        <rect x="330" y="162" width="40" height="2" fill="#08233F" fillOpacity="0.07" />
        <rect x="330" y="172" width="32" height="2" fill="#08233F" fillOpacity="0.07" />

        <rect x="430" y="48" width="156" height="88" rx="2" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <path d="M 450 92 H 510 V 72 H 560" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="510" cy="72" r="3" fill="#146EF5" fillOpacity="0.4" className="careers-pulse-delay" />
        <circle cx="560" cy="92" r="3" fill="#FF6A00" fillOpacity="0.45" />

        <rect x="92" y="268" width="210" height="72" rx="2" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="120" cy="304" r="10" stroke="#146EF5" strokeOpacity="0.2" strokeWidth="1" />
        <rect x="142" y="296" width="88" height="3" fill="#08233F" fillOpacity="0.1" />
        <rect x="142" y="308" width="64" height="2" fill="#08233F" fillOpacity="0.06" />
        <rect x="236" y="292" width="48" height="16" rx="1" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />

        {/* Node network */}
        <circle cx="248" cy="168" r="4.5" fill="#146EF5" fillOpacity="0.45" className="careers-pulse" />
        <circle cx="270" cy="292" r="3.5" fill="#08233F" fillOpacity="0.25" />
        <circle cx="430" cy="108" r="4" fill="#146EF5" fillOpacity="0.35" />
        <circle cx="480" cy="250" r="5" fill="#FF6A00" fillOpacity="0.5" className="careers-pulse-delay" />
        <circle cx="320" cy="372" r="3.5" fill="#146EF5" fillOpacity="0.3" />

        {/* Intersection markers */}
        <path d="M 246 160 v 16 M 240 168 h 16" stroke="#146EF5" strokeOpacity="0.35" strokeWidth="1" />
        <path d="M 478 242 v 16 M 472 250 h 16" stroke="#FF6A00" strokeOpacity="0.4" strokeWidth="1" />

        {/* Collaboration cluster */}
        <circle cx="392" cy="348" r="5" stroke="#146EF5" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="412" cy="358" r="5" stroke="#146EF5" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="432" cy="348" r="5" stroke="#FF6A00" strokeOpacity="0.3" strokeWidth="1" />
        <path d="M 397 348 H 407 M 417 358 H 427" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      </svg>
    </div>
  );
}
