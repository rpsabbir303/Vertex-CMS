import type { Metadata } from "next";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { TemplatesListingPage } from "@/components/marketing/resources/templates-listing/TemplatesListingPage";
import { marketingMetadata } from "@/lib/marketing/pages";

export const metadata: Metadata = marketingMetadata("resourcesTemplates");

export default function ResourcesTemplatesPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <TemplatesListingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
