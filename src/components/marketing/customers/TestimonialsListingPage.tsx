import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { getTestimonialsCatalog, hasTestimonials } from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_ROUTES, CUSTOMERS_TESTIMONIALS_LISTING_PAGE } from "@/lib/marketing/customers/content";
import { ROUTES } from "@/lib/marketing/navigation";

import { CustomersFinalCta } from "./CustomersFinalCta";
import { CustomersSubpageHero } from "./CustomersSubpageHero";
import { TestimonialsContextSection } from "./TestimonialsContextSection";
import { TestimonialsLibrarySection } from "./TestimonialsLibrarySection";

export function TestimonialsListingPage() {
  const copy = CUSTOMERS_TESTIMONIALS_LISTING_PAGE;
  const all = hasTestimonials() ? getTestimonialsCatalog() : [];

  return (
    <div className="customers-page-canvas">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Customers", href: CUSTOMERS_ROUTES.landing },
          { label: "Testimonials" },
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
        backdropVariant="testimonials"
      />

      <TestimonialsLibrarySection
        testimonials={all}
        headline={copy.library.headline}
        supporting={copy.library.supporting}
        featuredEyebrow={copy.featured.eyebrow}
      />

      <TestimonialsContextSection headline={copy.context.headline} supporting={copy.context.supporting} />

      <CustomersFinalCta />
    </div>
  );
}
