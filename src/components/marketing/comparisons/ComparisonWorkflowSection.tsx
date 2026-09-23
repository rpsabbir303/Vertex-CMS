import type { ComparisonDetailRecord } from "@/lib/marketing/comparisons/records";

import { ComparisonsSectionHeader } from "./ComparisonsSectionHeader";
import { ComparisonDocumentedField } from "./sections/ComparisonDocumentedField";

type Props = {
  record: ComparisonDetailRecord;
};

export function ComparisonWorkflowSection({ record }: Props) {
  const { workflows, name } = record;

  return (
    <section className="relative border-b border-brand-line/60 bg-[#F7F9FC]" aria-labelledby="comparison-workflows-heading">
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader eyebrow={workflows.eyebrow} headline={workflows.headline} supporting={workflows.supporting} />
        <h2 id="comparison-workflows-heading" className="sr-only">
          {workflows.headline}
        </h2>

        <ul className="mt-10 flex flex-col gap-4" role="list">
          {workflows.domains.map((domain) => (
            <li key={domain.id} className="border border-brand-line/80 bg-white px-5 py-6 sm:px-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#000000]">{domain.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#111827]/80">{domain.frameworkDescription}</p>
              <div className="mt-4 grid gap-4 border-t border-brand-line/60 pt-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                <ComparisonDocumentedField label="VertexBuild" summary={domain.vertexBuild} />
                <ComparisonDocumentedField label={name} summary={domain.competitor} />
                <div className="min-w-0 sm:col-span-2 lg:col-span-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#111827]/55">Comparison</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#111827]/85">{domain.comparisonContext}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
