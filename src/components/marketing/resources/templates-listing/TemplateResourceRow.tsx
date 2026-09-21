import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { formatTemplateDate, templateListingCategoryLabel } from "@/lib/marketing/resources/template";
import type { TemplateArticleRecord } from "@/lib/marketing/resources/types";

type Props = {
  template: TemplateArticleRecord;
  index: number;
  variant?: "row" | "spotlight";
  showCategory?: boolean;
};

export function TemplateResourceRow({ template, index, variant = "row", showCategory = true }: Props) {
  const categoryLabel = templateListingCategoryLabel(template.topic);
  const updated = formatTemplateDate(template.publishedAt);

  if (variant === "spotlight") {
    return (
      <Link
        href={template.href}
        className="group block border border-brand-line bg-white transition hover:border-brand-blue/35 hover:bg-[#F7FAFD]"
        data-design-layer="content"
      >
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-7 lg:p-8">
          <span className="shrink-0 text-[12px] font-semibold tabular-nums text-brand-orange">
            {String(index).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              {showCategory ? (
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{categoryLabel}</p>
              ) : null}
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue">{template.templateFormat}</p>
            </div>
            <h3 className="mt-1 font-display text-[1.25rem] font-bold leading-snug text-brand-navy transition group-hover:text-brand-blue sm:text-[1.45rem]">
              {template.title}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-brand-muted">{template.description}</p>
            {updated ? (
              <p className="mt-3 text-[12.5px] text-brand-muted">
                Updated <time dateTime={template.publishedAt}>{updated}</time>
              </p>
            ) : null}
            <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue">
              Open template
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={template.href}
      className="group relative flex items-start gap-3 border-l-2 border-transparent px-3 py-4 transition hover:border-brand-blue hover:bg-[#F7FAFD] sm:gap-4 sm:px-5 sm:py-5"
      data-design-layer="content"
    >
      <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
        {String(index).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {showCategory ? (
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{categoryLabel}</p>
          ) : null}
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue">{template.templateFormat}</p>
        </div>
        <p className="mt-1 font-display text-[1.05rem] font-bold leading-snug text-brand-navy transition group-hover:text-brand-blue sm:text-[1.12rem]">
          {template.title}
        </p>
        <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed text-brand-muted">{template.description}</p>
        {updated ? (
          <p className="mt-2 text-[12px] text-brand-muted/90">
            Updated <time dateTime={template.publishedAt}>{updated}</time>
          </p>
        ) : null}
      </div>
      <span className="flex shrink-0 items-center gap-1 pt-1 text-[11px] font-semibold text-brand-blue opacity-85 transition group-hover:translate-x-0.5 group-hover:opacity-100 sm:text-[12px]">
        Open template
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
