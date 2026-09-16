const NAVY = "#08233F";
const BLUE = "#146EF5";
const ORANGE = "#FF6A00";

type Props = {
  className?: string;
};

/** Sparse architectural mark — not a boxed illustration. */
export function SecurityHeroMark({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 640 280"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid meet"
    >
      <path d="M 80 72 H 240 V 168" stroke={NAVY} strokeOpacity="0.12" strokeWidth="1" />
      <path d="M 240 168 H 410" stroke={BLUE} strokeOpacity="0.22" strokeWidth="1" className="security-line-flow-slow" />
      <path d="M 410 40 V 168 H 560" stroke={NAVY} strokeOpacity="0.12" strokeWidth="1" />
      <path d="M 410 168 V 240" stroke={NAVY} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 8" />
      <rect x="470" y="88" width="88" height="56" stroke={NAVY} strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="240" cy="168" r="3" fill={NAVY} fillOpacity="0.2" />
      <circle cx="410" cy="168" r="4" fill={ORANGE} fillOpacity="0.7" className="security-node-pulse" />
      <circle cx="410" cy="168" r="12" stroke={ORANGE} strokeOpacity="0.28" strokeWidth="1" />
      <circle cx="560" cy="168" r="2.5" fill={BLUE} fillOpacity="0.35" />
    </svg>
  );
}
