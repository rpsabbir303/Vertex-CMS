import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { getCaseStudiesCatalog, getFeaturedCaseStudy } from "@/lib/marketing/customers/catalog";
import {
  CUSTOMERS_CASE_STUDIES_LISTING_PAGE,
  CUSTOMERS_ROUTES,
} from "@/lib/marketing/customers/content";
import { ROUTES } from "@/lib/marketing/navigation";

import { CaseStudiesLibrarySection } from "./CaseStudiesLibrarySection";
import { CustomersFinalCta } from "./CustomersFinalCta";
import { CustomersSubpageHero } from "./CustomersSubpageHero";

export function CaseStudiesListingPage() {
  const copy = CUSTOMERS_CASE_STUDIES_LISTING_PAGE;
  const studies = getCaseStudiesCatalog();
  const featured = getFeaturedCaseStudy();

  return (
    <div className="customers-page-canvas">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Customers", href: CUSTOMERS_ROUTES.landing },
          { label: "Case Studies" },
        ]}
      />

      <Link
        href={CUSTOMERS_ROUTES.landing}
        className="cust-shell relative z-[1] mt-2 inline-flex text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
      >
        ← Customers
      </Link>

      <CustomersSubpageHero
        eyebrow={copy.hero.eyebrow}
        headline={copy.hero.headline}
        supporting={copy.hero.supporting}
        backdropVariant="hero"
      />

      <CaseStudiesLibrarySection
        studies={studies}
        featuredSlug={featured?.slug}
        featuredEyebrow={copy.featured.eyebrow}
        headline={copy.library.headline}
        supporting={copy.library.supporting}
      />

      <CustomersFinalCta />
    </div>
  );
}
