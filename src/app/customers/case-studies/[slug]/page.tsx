import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { CaseStudyDetailPage } from "@/components/marketing/customers/CaseStudyDetailPage";
import { CaseStudyUnavailablePage } from "@/components/marketing/customers/CaseStudyUnavailablePage";
import { CustomersTypographyRoot } from "@/components/marketing/customers/CustomersTypographyRoot";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getCaseStudiesCatalog, getCaseStudyBySlug } from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_ROUTES } from "@/lib/marketing/customers/content";

type PageProps = {
  params: { slug: string };
};

/** Only pre-render slugs from the approved catalog; unknown slugs use the unavailable state. */
export const dynamicParams = true;

export function generateStaticParams() {
  return getCaseStudiesCatalog().map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: "Case Study | VertexBuild Customers",
      description: "This customer case study is not available for public reference.",
      robots: { index: false, follow: true },
    };
  }

  const title = `${study.customerName} | Case Study | VertexBuild`;
  const description = study.summary;
  const canonical = CUSTOMERS_ROUTES.caseStudyDetail(params.slug);

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
  };
}

function CaseStudyPageShell({ children }: { children: ReactNode }) {
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

export default function CustomerCaseStudyDetailPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return (
      <CaseStudyPageShell>
        <CaseStudyUnavailablePage />
      </CaseStudyPageShell>
    );
  }

  return (
    <CaseStudyPageShell>
      <CaseStudyDetailPage study={study} />
    </CaseStudyPageShell>
  );
}
