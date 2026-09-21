const NAVY = "#08233F";
const BLUE = "#146EF5";
const ORANGE = "#FF6A00";

type Props = {
  className?: string;
};

/** Abstract route: DATA → ACCESS → GOVERN → RECOVER. Decorative only. */
export function SecuritySystemMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 420 280" className={className} fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <path d="M 36 140 H 120" stroke={BLUE} strokeOpacity="0.28" strokeWidth="1" className="security-line-flow-slow" />
      <path d="M 120 140 H 210" stroke={NAVY} strokeOpacity="0.16" strokeWidth="1" />
      <path d="M 210 140 H 300" stroke={NAVY} strokeOpacity="0.16" strokeWidth="1" />
      <path d="M 300 140 H 384" stroke={NAVY} strokeOpacity="0.16" strokeWidth="1" strokeDasharray="4 7" />
      <rect x="96" y="116" width="48" height="48" stroke={NAVY} strokeOpacity="0.14" strokeWidth="1" />
      <rect x="186" y="108" width="48" height="64" stroke={BLUE} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="276" y="116" width="48" height="48" stroke={NAVY} strokeOpacity="0.14" strokeWidth="1" />
      <circle cx="36" cy="140" r="3.5" fill={NAVY} fillOpacity="0.22" />
      <circle cx="210" cy="140" r="4" fill={ORANGE} fillOpacity="0.7" className="security-node-pulse" />
      <circle cx="210" cy="140" r="11" stroke={ORANGE} strokeOpacity="0.28" strokeWidth="1" />
      <circle cx="384" cy="140" r="3.5" fill={BLUE} fillOpacity="0.35" />
      <text x="36" y="92" fill={NAVY} fillOpacity="0.28" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="1.4">
        DATA
      </text>
      <text x="108" y="92" fill={NAVY} fillOpacity="0.28" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="1.4">
        ACCESS
      </text>
      <text x="198" y="92" fill={NAVY} fillOpacity="0.28" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="1.4">
        GOVERN
      </text>
      <text x="292" y="92" fill={NAVY} fillOpacity="0.28" fontSize="8" fontFamily="var(--font-sans)" letterSpacing="1.4">
        RECOVER
      </text>
    </svg>
  );
}
