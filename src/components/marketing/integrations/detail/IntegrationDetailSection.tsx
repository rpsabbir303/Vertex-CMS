import type { ReactNode } from "react";

type Density = "major" | "compact" | "tight";

type Props = {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  variant?: "white" | "soft";
  borderTop?: boolean;
  density?: Density;
  /** Figma / design-tool layer name */
  designLayer?: string;
};

const DENSITY_CLASS: Record<Density, string> = {
  major: "int-detail-band-major",
  compact: "int-detail-band-compact",
  tight: "int-detail-band-tight",
};

export function IntegrationDetailSection({
  id,
  title,
  intro,
  children,
  variant = "white",
  borderTop = true,
  density = "compact",
  designLayer,
}: Props) {
  const bg = variant === "soft" ? "bg-[var(--int-detail-surface,#F7F9FC)]" : "bg-white";
  return (
    <section
      id={id}
      data-design-layer={designLayer}
      className={`int-section-shell ${bg} ${borderTop ? "border-t border-brand-line/80" : "border-b border-brand-line/80"}`}
    >
      <div className={`int-section-content site-shell int-detail-container ${DENSITY_CLASS[density]}`}>
        <h2 className="int-display-title max-w-3xl text-2xl text-brand-navy sm:text-[1.75rem] lg:text-3xl">{title}</h2>
        {intro && <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-muted">{intro}</p>}
        <div className="mt-5 min-w-0 sm:mt-6">{children}</div>
      </div>
    </section>
  );
}
