/**
 * Full-width technical canvas with a framed content column.
 * Decoration lives at edges; content sits in calm zones.
 */
export function CareersCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="careers-canvas relative">
      <div className="careers-canvas-grid pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="careers-canvas-dots pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <svg
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
      >
        <path
          d="M -40 90 C 80 40, 140 160, 220 110"
          stroke="#146EF5"
          strokeOpacity="0.1"
          className="careers-line-flow-slow"
          strokeDasharray="5 14"
        />
        <circle cx="220" cy="110" r="2.5" fill="#FF6A00" fillOpacity="0.35" />
        <path
          d="M 1480 70 C 1340 20, 1280 140, 1220 90"
          stroke="#146EF5"
          strokeOpacity="0.1"
          className="careers-line-flow-slow"
          strokeDasharray="5 14"
        />
        <circle cx="1220" cy="90" r="2.5" fill="#146EF5" fillOpacity="0.28" />
      </svg>

      <div className="careers-canvas-frame relative z-[1] mx-auto w-full max-w-[1280px] overflow-visible border-x border-brand-navy/[0.1]">
        <span className="pointer-events-none absolute -left-px -top-px z-[1] h-3 w-3 border-l border-t border-brand-orange/50" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-px -top-px z-[1] h-3 w-3 border-r border-t border-brand-orange/50" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-px -left-px z-[1] h-3 w-3 border-b border-l border-brand-orange/40" aria-hidden="true" />
        <span className="pointer-events-none absolute -bottom-px -right-px z-[1] h-3 w-3 border-b border-r border-brand-orange/40" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}
