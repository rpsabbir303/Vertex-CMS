import { CareersSvgField } from "./CareersSvgField";

/**
 * Full-width technical canvas with a framed content column.
 * Abstract layers are inline SVG so HTML-to-Figma importers can capture them.
 */
export function CareersCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="company-canvas careers-canvas relative">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <CareersSvgField tone="light" showDots showPaths />
      </div>

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
