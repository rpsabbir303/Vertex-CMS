import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";

import { ROUTES } from "@/lib/marketing/navigation";
import type { ComparisonDetailRecord } from "@/lib/marketing/comparisons/records";

import { ComparisonDetailHero } from "./ComparisonDetailHero";
import { ComparisonOperatingModelDetailSection } from "./ComparisonOperatingModelDetailSection";
import { ComparisonOverviewSection } from "./ComparisonOverviewSection";
import { ComparisonResearchSection } from "./ComparisonResearchSection";
import { ComparisonWorkflowSection } from "./ComparisonWorkflowSection";
import { ComparisonsResourcePageBackground } from "./ComparisonsResourcePageBackground";
import { ComparisonCapabilitySection } from "./sections/ComparisonCapabilitySection";
import { ComparisonCtaSection } from "./sections/ComparisonCtaSection";
import { ComparisonStrategicDifferenceSection } from "./sections/ComparisonStrategicDifferenceSection";
import { ComparisonWhoItsForSection } from "./sections/ComparisonWhoItsForSection";

type Props = {
  record: ComparisonDetailRecord;
};

/** CMS-1343 — reusable comparison detail template for `/comparisons/[slug]`. */
export function ComparisonDetailPage({ record }: Props) {
  const breadcrumbs = [
    { label: "Home", href: ROUTES.home },
    { label: "Comparisons", href: ROUTES.comparisons },
    { label: record.name },
  ];

  return (
    <div className="comparisons-landing relative overflow-x-hidden bg-[#F5F8FC] font-sans text-[#000000]">
      <ComparisonsResourcePageBackground />

      <div className="comparisons-landing-content relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />
        <ComparisonDetailHero record={record} />
        <ComparisonOverviewSection record={record} />
        <ComparisonCapabilitySection
          mode="detail"
          eyebrow={record.capability.eyebrow}
          headline={record.capability.headline}
          supporting={record.capability.supporting}
          competitorName={record.name}
          areas={record.capability.areas}
          tone="cool"
        />
        <ComparisonWorkflowSection record={record} />
        <ComparisonOperatingModelDetailSection record={record} />
        <ComparisonStrategicDifferenceSection
          eyebrow={record.strategicDifference.eyebrow}
          headline={record.strategicDifference.headline}
          supporting={record.strategicDifference.supporting}
          supportingDetail={record.strategicDifference.supportingDetail}
          stages={record.strategicDifference.stages}
          closingLabel={record.strategicDifference.closingLabel}
        />
        <ComparisonWhoItsForSection
          eyebrow={record.whoItsFor.eyebrow}
          headline={record.whoItsFor.headline}
          audiences={[...record.whoItsFor.audiences]}
          tone="cool"
        />
        <ComparisonResearchSection record={record} />
        <ComparisonCtaSection
          headline={record.cta.headline}
          supporting={record.cta.supporting}
          primary={record.cta.primary}
          secondary={record.cta.secondary}
          tertiary={record.cta.tertiary}
        />
      </div>
    </div>
  );
}
