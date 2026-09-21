import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import {
  formatTemplateDate,
  templateListingCategoryLabel,
  TEMPLATE_LISTING_PAGE_ANCHORS,
} from "@/lib/marketing/resources/template";
import type { TemplateArticleRecord } from "@/lib/marketing/resources/types";

import { TemplateFeaturedPanelAbstract } from "./TemplateSectionAbstracts";

type Props = { template: TemplateArticleRecord };

export function FeaturedTemplate({ template }: Props) {
  const categoryLabel = templateListingCategoryLabel(template.topic);
  const updated = formatTemplateDate(template.publishedAt);

  return (
    <section
      id={TEMPLATE_LISTING_PAGE_ANCHORS.featured}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white"
      aria-labelledby="featured-template-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-12 xl:gap-16">
          <TemplateFeaturedPanelAbstract className="order-2 lg:order-1" />
          <div className="order-1 min-w-0 lg:order-2" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue">Featured template</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              {categoryLabel} · {template.templateFormat}
            </p>
            <h2
              id="featured-template-heading"
              className="mt-2 font-display text-[1.55rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[1.95rem] lg:text-[2.1rem]"
            >
              {template.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">{template.description}</p>
            {updated ? (
              <p className="mt-4 text-[12.5px] text-brand-muted">
                Updated <time dateTime={template.publishedAt}>{updated}</time>
              </p>
            ) : null}
            <Link href={template.href} className="btn-primary mt-7 inline-flex w-full sm:w-auto">
              Open template
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
