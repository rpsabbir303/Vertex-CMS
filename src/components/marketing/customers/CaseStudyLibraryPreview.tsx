import { getCaseStudyPreviews, hasCaseStudies } from "@/lib/marketing/customers/catalog";

import {
  CUSTOMERS_IN_PAGE_LINKS,
  CUSTOMERS_LIMITED_NOTES,
  CUSTOMERS_PAGE,
  CUSTOMERS_SECTIONS,
} from "@/lib/marketing/customers/content";

import { CustomersSectionViewAllLink } from "./CustomersSectionViewAllLink";

import { CaseStudyCard } from "./CaseStudyCard";

import { CustomersProofCompactNote } from "./CustomersProofCompactNote";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";



export function CaseStudyLibraryPreview() {

  const { caseStudies: copy } = CUSTOMERS_PAGE;

  const previews = hasCaseStudies() ? getCaseStudyPreviews(3) : [];



  return (

    <section

      id={CUSTOMERS_SECTIONS.caseStudies}

      className="cust-scroll-target relative overflow-hidden border-b border-brand-line bg-[#F5F8FC] py-10 sm:py-12"

      data-design-layer="CaseStudyLibrary"

    >

      <CustomersSectionBackdrop variant="caseStudies" />

      <div className="cust-shell relative z-[1]">

        <div className="max-w-xl">

          <p className="cust-eyebrow">{copy.eyebrow}</p>

          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">{copy.headline}</h2>

          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{copy.supporting}</p>

          {previews.length > 0 ? (
            <CustomersSectionViewAllLink
              href={CUSTOMERS_IN_PAGE_LINKS.viewAllCaseStudies.href}
              label={CUSTOMERS_IN_PAGE_LINKS.viewAllCaseStudies.label}
              className="mt-4"
            />
          ) : null}

        </div>



        {previews.length > 0 ? (

          <div className="cust-case-studies-library-grid mt-6 min-w-0" role="list">

            {previews.map((study, index) => (

              <CaseStudyCard

                key={study.slug}

                study={study}

                variant="tile"

                visualIndex={index + 1}

                libraryLayout

                className="min-w-0 max-w-none"

              />

            ))}

          </div>

        ) : (

          <div className="mt-5 rounded-lg border border-brand-line bg-white px-4 py-4 sm:px-5">

            <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.caseStudies} />

          </div>

        )}

      </div>

    </section>

  );

}


