import type { Metadata } from "next";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { WebinarsListingPage } from "@/components/marketing/resources/webinars-listing/WebinarsListingPage";
import { marketingMetadata } from "@/lib/marketing/pages";

import "./webinars-page.css";

export const metadata: Metadata = marketingMetadata("resourcesWebinars");

export default function ResourcesWebinarsPage() {
  return (
    <MarketingProviders>
      <div className="webinars-page-scope flex min-h-screen flex-col overflow-x-hidden bg-white text-[#000000]">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <WebinarsListingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
