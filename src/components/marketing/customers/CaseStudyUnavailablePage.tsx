import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CASE_STUDY_LIMITED_NOTES, CUSTOMERS_SECTIONS, customersSectionHref } from "@/lib/marketing/customers/content";
import { ROUTES } from "@/lib/marketing/navigation";

import { CaseStudyDetailBackdrop } from "./visuals/CaseStudyDetailBackdrop";

/** Shown when a case-study slug is unknown or proof is not published. */
export function CaseStudyUnavailablePage() {
  const caseStudiesHref = `${ROUTES.customers}${customersSectionHref(CUSTOMERS_SECTIONS.caseStudies)}`;

  return (
    <div className="customers-page-canvas">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Customers", href: ROUTES.customers },
          { label: "Case Studies", href: caseStudiesHref },
          { label: "Case Study" },
        ]}
      />

      <Link
        href={caseStudiesHref}
        className="cust-shell relative z-[1] mt-2 inline-flex text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
      >
        ← Back to Case Studies
      </Link>

      <section className="relative overflow-hidden border-b border-brand-line bg-white py-8 sm:py-10 lg:py-11">
        <CaseStudyDetailBackdrop variant="context" />
        <div className="cust-shell relative z-[1] max-w-2xl">
          <p className="cust-eyebrow">Case study</p>
          <h1 className="cust-display mt-3 text-[1.85rem] leading-tight sm:text-[2.15rem]">
            This story is not publicly available
          </h1>
          <p className="mt-5 border-l-2 border-brand-orange pl-4 text-[15px] leading-relaxed text-brand-muted">
            {CASE_STUDY_LIMITED_NOTES.unavailable}
          </p>
        </div>
      </section>
    </div>
  );
}
