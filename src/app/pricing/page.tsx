import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { PricingPageContent } from "@/components/marketing/pricing/PricingPageContent";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";

export const metadata = marketingMetadata("pricing");

export default function PricingPage() {
  const config = MARKETING_PAGES.pricing;
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs items={config.breadcrumbs ?? [{ label: "Home", href: ROUTES.home }, { label: "Pricing" }]} />
          <PricingPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
