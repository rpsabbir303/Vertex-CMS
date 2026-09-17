import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { FeaturesPageContent } from "@/components/marketing/features/FeaturesPageContent";
import { featuresPageMeta } from "@/lib/marketing/features/content";
export const metadata: Metadata = {
  title: featuresPageMeta.title,
  description: featuresPageMeta.description,
  alternates: { canonical: featuresPageMeta.canonical },
  openGraph: {
    title: featuresPageMeta.title,
    description: featuresPageMeta.description,
    url: featuresPageMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function FeaturesPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <FeaturesPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
