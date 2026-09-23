import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ComparisonsSectionHeader } from "./ComparisonsSectionHeader";
import { ComparisonWhyFlowVisual } from "./visuals/ComparisonWhyFlowVisual";

export function ComparisonsWhySection() {
  const { whyCompare } = COMPARISONS_LANDING;

  return (
    <section className="relative border-b border-brand-line/60 bg-white" aria-labelledby="comparisons-why-heading">
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader
          eyebrow={whyCompare.eyebrow}
          headline={whyCompare.headline}
          supporting={whyCompare.supporting}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:items-start">
          <ol className="flex flex-col gap-6 sm:gap-7" role="list">
            {whyCompare.points.map((point) => (
              <li key={point.index} className="border-l-2 border-brand-orange/50 pl-5 sm:pl-6">
                <p className="font-mono text-[11px] font-semibold tracking-[0.08em] text-brand-orange">{point.index}</p>
                <h3 className="mt-1 font-display text-[1.15rem] font-bold text-[#000000] sm:text-[1.22rem]">{point.title}</h3>
                <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-[#111827] sm:text-[14.5px]">{point.body}</p>
              </li>
            ))}
          </ol>
          <ComparisonWhyFlowVisual className="lg:mt-4" />
        </div>
      </div>
    </section>
  );
}
