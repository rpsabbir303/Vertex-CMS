import type { Metadata } from "next";
import "@/app/features/features-landing.css";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { CustomersLandingPage } from "@/components/marketing/customers/CustomersLandingPage";
import { CustomersTypographyRoot } from "@/components/marketing/customers/CustomersTypographyRoot";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { customersLandingMeta } from "@/lib/marketing/customers/content";

export const metadata: Metadata = {
  title: customersLandingMeta.title,
  description: customersLandingMeta.description,
  alternates: { canonical: customersLandingMeta.canonical },
  openGraph: {
    title: customersLandingMeta.title,
    description: customersLandingMeta.description,
    url: customersLandingMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CustomersPage() {
  return (
    <CustomersTypographyRoot>
      <MarketingProviders>
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
          <MarketingHeader />
          <main className="w-full min-w-0 flex-1">
            <CustomersLandingPage />
          </main>
          <MarketingFooter />
          <CookieConsent />
        </div>
      </MarketingProviders>
    </CustomersTypographyRoot>
  );
}
