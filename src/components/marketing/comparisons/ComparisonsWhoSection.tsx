import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ComparisonWhoItsForSection } from "./sections/ComparisonWhoItsForSection";

export function ComparisonsWhoSection() {
  const { whoItsFor } = COMPARISONS_LANDING;

  return (
    <ComparisonWhoItsForSection
      id={whoItsFor.id}
      eyebrow={whoItsFor.eyebrow}
      headline={whoItsFor.headline}
      audiences={whoItsFor.audiences.map((a) => ({
        title: a.title,
        body: a.body,
        consideration: a.consideration,
      }))}
      tone="cool"
    />
  );
}
