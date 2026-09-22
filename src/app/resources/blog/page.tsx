import type { Metadata } from "next";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { BlogListingPage } from "@/components/marketing/resources/blog-listing/BlogListingPage";
import { marketingMetadata } from "@/lib/marketing/pages";

export const metadata: Metadata = marketingMetadata("resourcesBlog");

export default function ResourcesBlogPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#F5F8FC] text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <BlogListingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
