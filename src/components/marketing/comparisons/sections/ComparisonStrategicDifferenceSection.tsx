import { ComparisonsSectionHeader } from "../ComparisonsSectionHeader";
import { ComparisonOperatingModelVisual } from "../visuals/ComparisonOperatingModelVisual";

export type ComparisonStrategicDifferenceSectionProps = {
  id?: string;
  eyebrow: string;
  headline: string;
  supporting: string;
  supportingDetail?: string;
  stages: readonly string[];
  closingLabel: string;
  tone?: "white" | "cool";
};

/** CMS-1345 — strategic / workflow relationship section. */
export function ComparisonStrategicDifferenceSection({
  id,
  eyebrow,
  headline,
  supporting,
  supportingDetail,
  stages,
  closingLabel,
  tone = "white",
}: ComparisonStrategicDifferenceSectionProps) {
  const bg = tone === "cool" ? "bg-[#F7F9FC]" : "bg-white";

  return (
    <section
      id={id}
      className={`relative scroll-mt-28 border-b border-brand-line/60 ${bg}`}
      aria-labelledby="comparison-strategic-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-14 lg:items-center">
          <div>
            <ComparisonsSectionHeader eyebrow={eyebrow} headline={headline} supporting={supporting} />
            <h2 id="comparison-strategic-heading" className="sr-only">
              {headline}
            </h2>
            {supportingDetail ? (
              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-[#111827]/85">{supportingDetail}</p>
            ) : null}
          </div>
          <ComparisonOperatingModelVisual stages={[...stages]} closingLabel={closingLabel} />
        </div>
      </div>
    </section>
  );
}
