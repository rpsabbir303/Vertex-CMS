import type { ComparisonDetailRecord } from "@/lib/marketing/comparisons/records";

import { ComparisonsSectionHeader } from "./ComparisonsSectionHeader";
import { ComparisonDocumentedField } from "./sections/ComparisonDocumentedField";

type Props = {
  record: ComparisonDetailRecord;
};

export function ComparisonOperatingModelDetailSection({ record }: Props) {
  const { operatingModel, name } = record;

  return (
    <section className="relative border-b border-brand-line/60 bg-white" aria-labelledby="comparison-operating-model-heading">
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader
          eyebrow={operatingModel.eyebrow}
          headline={operatingModel.headline}
          supporting={operatingModel.supporting}
        />
        <h2 id="comparison-operating-model-heading" className="sr-only">
          {operatingModel.headline}
        </h2>

        <div className="mt-8 border border-brand-line/80 bg-[#FAFBFD] p-5 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <ComparisonDocumentedField label="VertexBuild" summary={operatingModel.vertexBuild} />
            <ComparisonDocumentedField label={name} summary={operatingModel.competitor} />
          </div>
          <div className="mt-6 border-t border-brand-line/60 pt-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#111827]/55">Comparison context</p>
            <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-[#111827]">{operatingModel.comparisonContext}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
