import type { Metadata } from "next";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { GuidesListingPage } from "@/components/marketing/resources/guides-listing/GuidesListingPage";
import { marketingMetadata } from "@/lib/marketing/pages";

export const metadata: Metadata = marketingMetadata("resourcesGuides");

export default function ResourcesGuidesPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <GuidesListingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
