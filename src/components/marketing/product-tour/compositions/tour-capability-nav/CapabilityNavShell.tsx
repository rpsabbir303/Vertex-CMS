import type { ReactNode } from "react";

type Props = {
  title: string;
  titleId: string;
  children: ReactNode;
  /** Subtle surface variant per workflow nav pattern */
  variant?: "default" | "field" | "financial" | "ai";
};

const VARIANT_CLASS: Record<NonNullable<Props["variant"]>, string> = {
  default: "border-brand-line/80 bg-white",
  field: "border-brand-line/80 bg-[#FAFCFE]",
  financial: "border-brand-line/80 bg-white",
  ai: "border-brand-navy/12 bg-[#F7FAFD]",
};

export function CapabilityNavShell({ title, titleId, children, variant = "default" }: Props) {
  return (
    <aside
      className="mt-10"
      aria-labelledby={titleId}
      data-design-layer="tour-feature-links"
    >
      <div className={`overflow-hidden rounded-sm border shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] ${VARIANT_CLASS[variant]}`}>
        <div className="border-b border-brand-line/60 px-4 py-3 sm:px-5">
          <h2
            id={titleId}
            className="font-display text-[1.05rem] font-bold tracking-tight text-black sm:text-[1.15rem]"
          >
            {title}
          </h2>
        </div>
        <div className="px-4 py-1 sm:px-5 sm:py-2">{children}</div>
      </div>
    </aside>
  );
}
