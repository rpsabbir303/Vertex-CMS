import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/features/features-landing.css";
import "@/app/customers/customers-visual.css";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { CaseStudiesListingPage } from "@/components/marketing/customers/CaseStudiesListingPage";
import { CustomersTypographyRoot } from "@/components/marketing/customers/CustomersTypographyRoot";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { caseStudiesListingMeta } from "@/lib/marketing/customers/content";

export const metadata: Metadata = {
  title: caseStudiesListingMeta.title,
  description: caseStudiesListingMeta.description,
  alternates: { canonical: caseStudiesListingMeta.canonical },
  openGraph: {
    title: caseStudiesListingMeta.title,
    description: caseStudiesListingMeta.description,
    url: caseStudiesListingMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

function CustomersSubpageShell({ children }: { children: ReactNode }) {
  return (
    <CustomersTypographyRoot>
      <MarketingProviders>
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
          <MarketingHeader />
          <main className="w-full min-w-0 flex-1">{children}</main>
          <MarketingFooter />
          <CookieConsent />
        </div>
      </MarketingProviders>
    </CustomersTypographyRoot>
  );
}

export default function CaseStudiesListingRoute() {
  return (
    <CustomersSubpageShell>
      <CaseStudiesListingPage />
    </CustomersSubpageShell>
  );
}
