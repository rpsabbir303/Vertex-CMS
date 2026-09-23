import type { Metadata } from "next";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { ComparisonsLandingPage } from "@/components/marketing/comparisons/ComparisonsLandingPage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { marketingMetadata } from "@/lib/marketing/pages";

import "./comparisons-page.css";

export const metadata: Metadata = marketingMetadata("comparisons");

export default function ComparisonsPage() {
  return (
    <MarketingProviders>
      <div className="comparisons-page-scope flex min-h-screen flex-col overflow-x-hidden bg-white text-[#000000]">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <ComparisonsLandingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
