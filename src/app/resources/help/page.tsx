import type { Metadata } from "next";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { HelpCenterListingPage } from "@/components/marketing/resources/help-center/HelpCenterListingPage";
import { marketingMetadata } from "@/lib/marketing/pages";

export const metadata: Metadata = marketingMetadata("resourcesHelp");

export default function ResourcesHelpPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <HelpCenterListingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
