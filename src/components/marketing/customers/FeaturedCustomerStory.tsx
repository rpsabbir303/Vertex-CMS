import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

import { getFeaturedCaseStudy, hasCaseStudies } from "@/lib/marketing/customers/catalog";

import { CUSTOMERS_LIMITED_NOTES, CUSTOMERS_PAGE, CUSTOMERS_ROUTES, CUSTOMERS_SECTIONS } from "@/lib/marketing/customers/content";

import { CustomersProofCompactNote } from "./CustomersProofCompactNote";

import { CaseStudyCoverImage } from "./CaseStudyCoverImage";

import { CustomerEcosystemVisual } from "./visuals/CustomerEcosystemVisual";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";



export function FeaturedCustomerStory() {

  const story = getFeaturedCaseStudy();

  const { featuredStory } = CUSTOMERS_PAGE;

  const hasStory = hasCaseStudies() && story;



  return (

    <section

      id={CUSTOMERS_SECTIONS.featuredStory}

      className="cust-scroll-target relative overflow-hidden border-b border-brand-line bg-white py-10 sm:py-12"

      data-design-layer="FeaturedCustomerStory"

    >

      <CustomersSectionBackdrop variant="featured" />

      <div className="cust-shell relative z-[1]">

        <div className="max-w-xl">

          <p className="cust-eyebrow">{featuredStory.eyebrow}</p>

          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">{featuredStory.headline}</h2>

          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{featuredStory.supporting}</p>

        </div>



        {hasStory ? (

          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">

            <CaseStudyCoverImage
              study={story}
              priority
              aspectClassName="aspect-video min-h-[240px] lg:aspect-auto lg:min-h-[280px] lg:h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-lg border border-brand-line"
            />

            <div className="flex min-w-0 flex-col justify-center rounded-lg border border-brand-line bg-[#FAFBFD] p-5 sm:p-6">

              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{story.customerName}</p>

              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-orange">

                {[story.contractorType, story.projectType].filter(Boolean).join(" · ")}

              </p>

              <h3 className="cust-display mt-3 text-xl sm:text-[1.65rem]">{story.headline}</h3>

              {story.challenge ? (

                <div className="mt-4">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Challenge</p>

                  <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{story.challenge}</p>

                </div>

              ) : null}

              {story.approach ? (

                <div className="mt-3">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">VertexBuild approach</p>

                  <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{story.approach}</p>

                </div>

              ) : null}

              {story.outcome ? (

                <p className="mt-4 border-l-2 border-brand-orange pl-3 text-[13px] font-medium text-brand-navy">{story.outcome}</p>

              ) : null}

              <Link

                href={CUSTOMERS_ROUTES.caseStudyDetail(story.slug)}

                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"

              >

                Read Case Study

                <ArrowRight className="h-3.5 w-3.5" />

              </Link>

            </div>

          </div>

        ) : (

          <div className="mt-5 grid gap-4 rounded-lg border border-brand-line bg-[#FAFBFD] p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-center sm:gap-6 sm:p-5">

            <div className="rounded-md border border-brand-line/80 bg-white p-2">

              <CustomerEcosystemVisual variant="compact" />

            </div>

            <div>

              <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.featured} />

              <Link

                href={featuredStory.emptyStateCta.href}

                className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:underline"

              >

                {featuredStory.emptyStateCta.label}

                <ArrowRight className="h-3.5 w-3.5" />

              </Link>

            </div>

          </div>

        )}

      </div>

    </section>

  );

}


