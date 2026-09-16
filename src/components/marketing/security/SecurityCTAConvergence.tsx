const NAVY = "#08233F";
const BLUE = "#146EF5";
const ORANGE = "#FF6A00";

/** Decorative paths converging toward the contact zone. */
export function SecurityCTAConvergence() {
  return (
    <svg
      viewBox="0 0 1280 320"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(55%,280px)] w-full opacity-70 lg:h-[320px] lg:opacity-90"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      fill="none"
    >
      <path d="M 0 40 C 200 120, 420 80, 640 160" stroke={BLUE} strokeOpacity="0.14" strokeWidth="1" className="security-line-flow-slow" />
      <path d="M 1280 60 C 1080 140, 860 100, 640 160" stroke={BLUE} strokeOpacity="0.12" strokeWidth="1" className="security-line-flow" />
      <path d="M 640 160 V 280" stroke={NAVY} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 9" />
      <circle cx="640" cy="160" r="5" fill={ORANGE} fillOpacity="0.5" className="security-node-pulse" />
      <circle cx="640" cy="160" r="18" stroke={BLUE} strokeOpacity="0.16" strokeWidth="1" />
      <rect x="580" y="248" width="120" height="48" rx="1" stroke={NAVY} strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}
