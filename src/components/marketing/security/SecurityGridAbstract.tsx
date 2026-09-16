import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityTrustInfrastructure } from "./SecurityTrustInfrastructure";

type Props = {
  pageId?: SecurityPageId;
  /** Between-section focal composition vs hero-scale */
  variant?: "interstitial" | "cta";
};

export function SecurityGridAbstract({ pageId = "hub", variant = "interstitial" }: Props) {
  if (variant === "cta") {
    const NAVY = "#08233F";
    const BLUE = "#146EF5";
    const ORANGE = "#FF6A00";
    return (
      <svg
        viewBox="0 0 640 200"
        className="pointer-events-none absolute bottom-0 right-0 h-[min(220px,50%)] w-[min(520px,85%)] opacity-70 lg:opacity-85"
        preserveAspectRatio="xMaxYMax meet"
        aria-hidden="true"
        fill="none"
      >
        <path d="M 40 40 C 180 100, 320 60, 480 120" stroke={BLUE} strokeOpacity="0.14" strokeWidth="1" className="security-line-flow-slow" />
        <path d="M 600 80 L 480 120 L 480 160" stroke={NAVY} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="480" cy="120" r="4" fill={ORANGE} fillOpacity="0.5" className="security-node-pulse" />
      </svg>
    );
  }

  return (
    <section className="security-grid-abstract relative border-y border-brand-navy/10 py-10 sm:py-12 lg:py-14" aria-hidden="true">
      <div className="site-shell relative min-h-[180px] sm:min-h-[220px] lg:min-h-[260px]">
        <div className="absolute inset-y-0 right-0 w-full max-w-3xl lg:max-w-none">
          <SecurityTrustInfrastructure density="hero-wide" pageId={pageId} className="h-full w-full opacity-75 lg:opacity-90" />
        </div>
        <svg viewBox="0 0 1280 120" className="absolute inset-x-0 top-0 h-8 w-full opacity-40" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="60" x2="420" y2="60" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
          <line x1="860" y1="60" x2="1280" y2="60" stroke="#08233F" strokeOpacity="0.06" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
