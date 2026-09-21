import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { formatGuideDate, guideListingCategoryLabel, GUIDE_LISTING_PAGE_ANCHORS } from "@/lib/marketing/resources/guide";
import type { GuideArticleRecord } from "@/lib/marketing/resources/types";

import { GuideFeaturedWorkflowVisual } from "./GuideWorkflowVisual";

type Props = {
  guide: GuideArticleRecord;
};

export function FeaturedGuide({ guide }: Props) {
  const categoryLabel = guideListingCategoryLabel(guide.topic);
  const updated = formatGuideDate(guide.publishedAt);
  const formatLabel = guide.guideFormat ?? "In-depth guide";

  return (
    <section
      id={GUIDE_LISTING_PAGE_ANCHORS.featured}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white"
      aria-labelledby="featured-guide-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-12 xl:gap-16">
          <GuideFeaturedWorkflowVisual className="order-2 lg:order-1" />
          <div className="order-1 min-w-0 lg:order-2" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue">Featured guide</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{categoryLabel}</p>
            <h2
              id="featured-guide-heading"
              className="mt-2 font-display text-[1.55rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[1.95rem] lg:text-[2.15rem]"
            >
              {guide.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">{guide.description}</p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-line/80 pt-5 text-[12.5px]">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Format</dt>
                <dd className="mt-0.5 font-medium text-brand-navy">{formatLabel}</dd>
              </div>
              {updated ? (
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Updated</dt>
                  <dd className="mt-0.5 font-medium text-brand-navy">
                    <time dateTime={guide.publishedAt}>{updated}</time>
                  </dd>
                </div>
              ) : null}
            </dl>
            <Link href={guide.href} className="btn-primary mt-7 inline-flex w-full sm:w-auto">
              Open guide
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
