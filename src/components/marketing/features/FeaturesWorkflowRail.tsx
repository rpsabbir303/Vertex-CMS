import Link from "next/link";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { HubWorkflowStep } from "@/lib/marketing/features/hub";

type Props = {
  label: string;
  steps: HubWorkflowStep[];
  tone?: "light" | "dark";
};

export function FeaturesWorkflowRail({ label, steps, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={
        "border px-3 py-3 sm:px-4 " +
        (dark ? "border-white/10 bg-white/[0.04]" : "border-brand-line/80 bg-white")
      }
      data-design-layer="WorkflowRail"
    >
      <p
        className={
          "font-sans text-[10px] font-semibold uppercase tracking-[0.14em] " +
          (dark ? "text-slate-400" : "text-brand-muted")
        }
      >
        {label}
      </p>
      <ol className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-2">
        {steps.map((step, index) => {
          const chipClass =
            "inline-flex items-center rounded-sm border px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.06em] " +
            (dark
              ? "border-white/15 text-white"
              : "border-brand-line/80 bg-[#FAFBFD] text-brand-navy");
          return (
            <li key={step.label + index} className="flex items-center gap-1">
              {step.slug ? (
                <Link
                  href={featureAreaPath(step.slug)}
                  className={chipClass + " hover:border-brand-orange/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"}
                >
                  {step.label}
                </Link>
              ) : (
                <span className={chipClass}>{step.label}</span>
              )}
              {index < steps.length - 1 ? (
                <svg width="12" height="12" viewBox="0 0 16 16" className={"shrink-0 " + (dark ? "text-white/35" : "text-brand-blue/40")} aria-hidden="true">
                  <path d="M3 8h8M9 5l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
