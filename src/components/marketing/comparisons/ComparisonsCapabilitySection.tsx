import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ComparisonCapabilitySection } from "./sections/ComparisonCapabilitySection";

export function ComparisonsCapabilitySection() {
  const { capability } = COMPARISONS_LANDING;

  return (
    <ComparisonCapabilitySection
      id={capability.id}
      mode="landing"
      eyebrow={capability.eyebrow}
      headline={capability.headline}
      supporting={capability.supporting}
      categories={capability.categories.map((c) => ({ title: c.title, body: c.body }))}
      tone="cool"
    />
  );
}
