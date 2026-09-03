import { MarketingPageShell, pageHeadingFromMeta } from "@/components/marketing/MarketingPageShell";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";

export const metadata = marketingMetadata("comparisonProcore");

export default function ComparisonProcorePage() {
  const config = MARKETING_PAGES.comparisonProcore;
  return (
    <MarketingPageShell
      title={pageHeadingFromMeta(config.title)}
      description={config.description}
      breadcrumbs={config.breadcrumbs}
    />
  );
}
