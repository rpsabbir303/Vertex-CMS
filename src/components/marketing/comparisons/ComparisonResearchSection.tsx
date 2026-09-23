import type { ComparisonDetailRecord } from "@/lib/marketing/comparisons/records";

import { ComparisonsSectionHeader } from "./ComparisonsSectionHeader";

type Props = {
  record: ComparisonDetailRecord;
};

export function ComparisonResearchSection({ record }: Props) {
  const steps = record.researchSteps;

  return (
    <section className="relative border-b border-brand-line/60 bg-white" aria-labelledby="comparison-research-heading">
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader eyebrow="Research to decision" headline="From research to a clearer decision." />
        <h2 id="comparison-research-heading" className="sr-only">
          From research to a clearer decision.
        </h2>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-8" role="list">
          {steps.map((step) => (
            <li key={step.index} className="border border-brand-line/80 bg-[#FAFBFD] px-5 py-6 sm:px-6 sm:py-7">
              <p className="font-mono text-[11px] font-semibold tracking-[0.08em] text-brand-orange">{step.index}</p>
              <h3 className="mt-2 font-display text-[1.05rem] font-bold text-[#000000]">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#111827]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
