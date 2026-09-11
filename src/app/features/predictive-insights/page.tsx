import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { PredictiveInsightsFeatureDetailPage } from "@/components/marketing/features/PredictiveInsightsFeatureDetailPage";
import { predictiveInsightsFeatureDetail } from "@/lib/marketing/features/predictiveInsightsDetail";

const { meta } = predictiveInsightsFeatureDetail;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PredictiveInsightsPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <PredictiveInsightsFeatureDetailPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
