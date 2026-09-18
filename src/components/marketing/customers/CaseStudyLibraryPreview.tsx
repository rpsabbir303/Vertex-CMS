import { getCaseStudyPreviews, hasCaseStudies } from "@/lib/marketing/customers/catalog";

import { CUSTOMERS_LIMITED_NOTES, CUSTOMERS_PAGE, CUSTOMERS_SECTIONS } from "@/lib/marketing/customers/content";

import { CaseStudyCard } from "./CaseStudyCard";

import { CustomersProofCompactNote } from "./CustomersProofCompactNote";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";



export function CaseStudyLibraryPreview() {

  const { caseStudies: copy } = CUSTOMERS_PAGE;

  const previews = hasCaseStudies() ? getCaseStudyPreviews(8) : [];



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

        </div>



        {previews.length > 0 ? (

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {previews.map((study, index) => (

              <CaseStudyCard

                key={study.slug}

                study={study}

                variant={index === 0 ? "row" : "tile"}

                visualIndex={index + 1}

                className={index === 0 ? "sm:col-span-2 lg:col-span-3 lg:rounded-lg lg:border lg:border-brand-line lg:bg-white lg:p-1" : ""}

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


