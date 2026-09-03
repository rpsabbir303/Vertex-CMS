import { MarketingPageShell, pageHeadingFromMeta } from "@/components/marketing/MarketingPageShell";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";

export const metadata = marketingMetadata("comparisonCmic");

export default function ComparisonCmicPage() {
  const config = MARKETING_PAGES.comparisonCmic;
  return (
    <MarketingPageShell
      title={pageHeadingFromMeta(config.title)}
      description={config.description}
      breadcrumbs={config.breadcrumbs}
    />
  );
}
