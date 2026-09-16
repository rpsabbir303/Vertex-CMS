import type { SecurityPageId } from "@/lib/marketing/security/pages";

const NAVY = "#08233F";
const BLUE = "#146EF5";

export type SecurityAmbientZoneId = "trust" | "spec" | "nav" | "cta" | "topic";

type Props = {
  zone: SecurityAmbientZoneId;
  pageId?: SecurityPageId;
};

/** Section-scoped ambient fragments — evolves the canvas by zone, not one repeating grid. */
export function SecurityAmbientZone({ zone }: Props) {
  return (
    <div className={`security-ambient security-ambient--${zone} pointer-events-none absolute inset-0 overflow-hidden`} aria-hidden="true">
      {zone === "trust" ? (
        <svg viewBox="0 0 1280 640" className="absolute -right-[20%] top-0 h-full w-[85%] opacity-60 lg:-right-[8%] lg:w-[70%] lg:opacity-80" preserveAspectRatio="xMaxYMin meet" fill="none">
          <rect x="720" y="80" width="320" height="420" rx="2" stroke={NAVY} strokeOpacity="0.07" strokeWidth="1" />
          <rect x="780" y="140" width="200" height="300" rx="1" stroke={BLUE} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="5 9" />
          <path d="M 960 80 V 40 M 960 500 V 580" stroke={NAVY} strokeOpacity="0.08" strokeWidth="1" />
          <path d="M 640 320 H 720" stroke={BLUE} strokeOpacity="0.12" strokeWidth="1" className="security-line-flow-slow" />
        </svg>
      ) : null}

      {zone === "spec" ? (
        <svg viewBox="0 0 1280 400" className="absolute inset-x-0 bottom-0 h-[70%] w-full opacity-50 lg:opacity-65" preserveAspectRatio="xMidYMax slice" fill="none">
          <line x1="0" y1="120" x2="360" y2="120" stroke={NAVY} strokeOpacity="0.06" strokeWidth="1" />
          <line x1="920" y1="200" x2="1280" y2="200" stroke={NAVY} strokeOpacity="0.05" strokeWidth="1" />
          <path d="M 1280 80 H 1100 V 160 H 960" stroke={BLUE} strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      ) : null}

      {zone === "nav" ? (
        <svg viewBox="0 0 1280 360" className="absolute inset-0 h-full w-full opacity-40 lg:opacity-55" preserveAspectRatio="none" fill="none">
          <line x1="80" y1="0" x2="80" y2="360" stroke={NAVY} strokeOpacity="0.04" strokeWidth="1" strokeDasharray="2 6" />
          <line x1="1200" y1="0" x2="1200" y2="360" stroke={NAVY} strokeOpacity="0.04" strokeWidth="1" strokeDasharray="2 6" />
        </svg>
      ) : null}

      {zone === "cta" ? null : null}

      {zone === "topic" ? (
        <svg viewBox="0 0 1280 500" className="absolute -right-[15%] top-8 h-[min(420px,55%)] w-[75%] opacity-45 lg:opacity-60" preserveAspectRatio="xMaxYMin meet" fill="none">
          <path d="M 900 40 C 980 120, 1020 200, 940 280" stroke={BLUE} strokeOpacity="0.1" strokeWidth="1" />
          <rect x="820" y="120" width="140" height="88" rx="1" stroke={NAVY} strokeOpacity="0.07" strokeWidth="1" />
        </svg>
      ) : null}
    </div>
  );
}
