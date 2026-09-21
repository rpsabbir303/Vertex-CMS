import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import type { HelpDocArticleRecord } from "@/lib/marketing/resources/types";

type Props = {
  doc: HelpDocArticleRecord;
  index: number;
  variant?: "row" | "spotlight";
};

/** Help Center documentation entry — title links to detail; no generic “Explore” CTA. */
export function ResourceDocEntry({ doc, index, variant = "row" }: Props) {
  const num = String(index).padStart(2, "0");

  if (variant === "spotlight") {
    return (
      <article className="border border-brand-line/90 bg-white" data-design-layer="content">
        <Link href={doc.href} className="group block p-5 transition hover:bg-[#F7FAFD] sm:p-6 lg:p-7">
          <div className="flex gap-4 sm:gap-5">
            <span className="shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">{num}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Documentation</p>
              <h3 className="mt-1 font-display text-[1.2rem] font-bold leading-snug text-brand-navy group-hover:text-brand-blue sm:text-[1.35rem]">
                {doc.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-brand-muted sm:text-[15px]">{doc.description}</p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.08em] text-brand-muted/90">
                Product knowledge preview
              </p>
            </div>
            <ArrowRight className="mt-2 hidden h-4 w-4 shrink-0 text-brand-blue opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" />
          </div>
        </Link>
      </article>
    );
  }

  return (
    <Link
      href={doc.href}
      className="group flex items-start gap-3 border-l-2 border-transparent py-3 pl-1 transition hover:border-brand-blue hover:bg-[#F7FAFD]/80 sm:gap-4 sm:py-3.5"
      data-design-layer="content"
    >
      <span className="shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">{num}</span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-[1.02rem] font-bold leading-snug text-brand-navy group-hover:text-brand-blue sm:text-[1.08rem]">
          {doc.title}
        </p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-brand-muted">{doc.description}</p>
      </div>
      <ArrowRight className="mt-1 hidden h-3.5 w-3.5 shrink-0 text-brand-blue opacity-70 sm:block" />
    </Link>
  );
}
