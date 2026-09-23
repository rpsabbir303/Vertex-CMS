import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ComparisonStrategicDifferenceSection } from "./sections/ComparisonStrategicDifferenceSection";

export function ComparisonsOperatingModelSection() {
  const { operatingModel } = COMPARISONS_LANDING;

  return (
    <ComparisonStrategicDifferenceSection
      id={operatingModel.id}
      eyebrow={operatingModel.eyebrow}
      headline={operatingModel.headline}
      supporting={operatingModel.supporting}
      stages={operatingModel.stages}
      closingLabel={operatingModel.closingLabel}
    />
  );
}
