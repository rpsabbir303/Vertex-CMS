import { MarketingPageShell, pageHeadingFromMeta } from "@/components/marketing/MarketingPageShell";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";

export const metadata = marketingMetadata("careers");

export default function CareersPage() {
  const config = MARKETING_PAGES.careers;
  return (
    <MarketingPageShell
      title={pageHeadingFromMeta(config.title)}
      description={config.description}
      breadcrumbs={config.breadcrumbs}
    />
  );
}
