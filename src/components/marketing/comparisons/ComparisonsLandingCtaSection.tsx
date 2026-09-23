import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ComparisonCtaSection } from "./sections/ComparisonCtaSection";

export function ComparisonsLandingCtaSection() {
  const cta = COMPARISONS_LANDING.finalCta;

  return (
    <ComparisonCtaSection
      headline={cta.headline}
      supporting={cta.supporting}
      primary={cta.primary}
      secondary={cta.secondary}
      tertiary={cta.tertiary}
    />
  );
}
