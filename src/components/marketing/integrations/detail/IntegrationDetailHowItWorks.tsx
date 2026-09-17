import type { IntegrationHowItWorks } from "@/lib/marketing/integrations/types";
import { IntegrationDetailFlowArrow } from "../visuals/IntegrationDetailFlowArrow";

type Props = {
  howItWorks: IntegrationHowItWorks;
};

/** Compact horizontal flow on desktop; stacked steps below. */
export function IntegrationDetailHowItWorks({ howItWorks }: Props) {
  const hasLayers = Boolean(howItWorks.layers && howItWorks.layers.length > 0);
  const hasSteps = Boolean(howItWorks.steps && howItWorks.steps.length > 0);

  return (
    <div className="border border-brand-line/80 bg-white p-4 sm:p-5" data-design-layer="HowItWorks">
      {howItWorks.directionLabel && (
        <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted">
          {howItWorks.directionLabel}
        </p>
      )}

      {hasLayers && (
        <div
          className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-2"
          role="img"
          aria-label="Documented system layers."
        >
          {howItWorks.layers!.map((layer, index) => (
            <div key={layer.label} className="flex min-w-0 flex-1 items-center gap-2 md:min-w-[140px]">
              <div className="min-w-0 flex-1 border border-brand-navy/12 bg-[#FAFBFD] px-3 py-2.5">
                <p className="truncate font-sans text-[11px] font-bold uppercase tracking-[0.06em] text-brand-navy">{layer.label}</p>
                {layer.detail && <p className="mt-0.5 truncate text-[12px] text-brand-muted">{layer.detail}</p>}
              </div>
              {index < howItWorks.layers!.length - 1 && (
                <IntegrationDetailFlowArrow className="hidden shrink-0 md:block" />
              )}
            </div>
          ))}
        </div>
      )}

      {hasSteps && (
        <ol className={`space-y-0 ${hasLayers ? "mt-4 border-t border-brand-line/70 pt-4" : ""}`}>
          {howItWorks.steps!.map((step, index) => (
            <li
              key={step.title}
              className={
                "grid gap-2 py-3 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-4 " +
                (index > 0 ? "border-t border-brand-line/60" : "")
              }
            >
              <span className="font-sans text-[12px] font-bold tabular-nums text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-brand-navy">{step.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
