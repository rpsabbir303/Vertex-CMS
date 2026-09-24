import { CUSTOMERS_LIMITED_NOTES } from "@/lib/marketing/customers/content";
import type { CaseStudyRecord } from "@/lib/marketing/customers/types";

import { CaseStudyCard } from "./CaseStudyCard";
import { CustomersProofCompactNote } from "./CustomersProofCompactNote";
import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  studies: CaseStudyRecord[];
  featuredSlug?: string;
  featuredEyebrow: string;
  headline: string;
  supporting: string;
};

export function CaseStudiesLibrarySection({
  studies,
  featuredSlug,
  featuredEyebrow,
  headline,
  supporting,
}: Props) {
  const featuredStudy = featuredSlug ? studies.find((s) => s.slug === featuredSlug) : undefined;
  const showFeaturedBlock = studies.length > 0 && featuredStudy;

  return (
    <>
      {showFeaturedBlock ? (
        <section
          className="relative overflow-hidden border-b border-brand-line/90 bg-white py-12 sm:py-14 lg:py-16"
          data-design-layer="CaseStudyFeatured"
          aria-labelledby="case-study-featured-heading"
        >
          <CustomersSectionBackdrop variant="featured" />
          <div className="cust-shell relative z-[1]">
            <div className="cust-section-rule mb-8 max-w-3xl" aria-hidden="true" />
            <p id="case-study-featured-heading" className="cust-eyebrow">
              {featuredEyebrow}
            </p>
            <div className="mt-6 lg:mt-8">
              <CaseStudyCard study={featuredStudy} variant="featured" showCapabilities />
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="relative overflow-hidden border-b border-brand-line/90 bg-[#FAFBFD] py-12 sm:py-14 lg:py-16"
        data-design-layer="CaseStudiesLibrary"
        aria-labelledby="case-studies-library-heading"
      >
        <CustomersSectionBackdrop variant="caseStudies" />
        <div className="cust-shell relative z-[1]">
          <header className="max-w-2xl">
            <h2 id="case-studies-library-heading" className="cust-display text-[1.65rem] leading-[1.15] text-brand-navy sm:text-[2rem]">
              {headline}
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-brand-muted">{supporting}</p>
          </header>

          {studies.length === 0 ? (
            <div className="mt-6 rounded-lg border border-brand-line bg-white px-4 py-4 sm:px-5">
              <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.caseStudies} />
            </div>
          ) : (
            <div
              className="cust-case-studies-library-grid mt-8 min-w-0 sm:mt-10"
              data-design-layer="CaseStudiesGrid"
              role="list"
            >
              {studies.map((study, index) => (
                <CaseStudyCard
                  key={study.slug}
                  study={study}
                  variant="tile"
                  visualIndex={index}
                  libraryLayout
                  showCapabilities
                  featuredInLibrary={featuredStudy?.slug === study.slug}
                  className="min-w-0 max-w-none"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
