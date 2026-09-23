import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { COMPARISON_DIRECTORY } from "@/lib/marketing/comparisons/catalog";
import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ComparisonsSectionHeader } from "./ComparisonsSectionHeader";
import { ComparisonDirectoryFrameworkVisual } from "./visuals/ComparisonDirectoryFrameworkVisual";

function focusTagClass(tag: string) {
  return tag.replace(/\s+/g, " ").toUpperCase();
}

export function ComparisonsDirectorySection() {
  const { directory } = COMPARISONS_LANDING;

  return (
    <section
      id={directory.id}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-[#F7F9FC]"
      aria-labelledby="comparisons-directory-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader
          eyebrow={directory.eyebrow}
          headline={directory.headline}
          supporting={directory.supporting}
        />
        <h2 id="comparisons-directory-heading" className="sr-only">
          {directory.headline}
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(11rem,13.5rem)] lg:gap-8 xl:gap-10">
          <div className="order-2 min-w-0 overflow-hidden border border-brand-line/80 bg-white lg:order-1">
            <ul role="list">
              {COMPARISON_DIRECTORY.map((item, i) => (
                <li key={item.slug} className={i > 0 ? "border-t border-brand-line/70" : undefined}>
                  <Link
                    href={item.href}
                    className="group grid gap-3 px-4 py-5 transition-colors hover:bg-[#FAFBFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange/45 sm:gap-4 sm:px-5 sm:py-5 md:grid-cols-[1fr_auto] md:items-start lg:grid-cols-[3.25rem_minmax(7.5rem,9.5rem)_minmax(0,1fr)_minmax(9rem,11rem)_2rem] lg:items-center lg:gap-x-5 lg:gap-y-0 xl:px-6"
                  >
                    <div className="flex min-w-0 items-baseline gap-3 md:col-span-1 lg:contents">
                      <span className="shrink-0 font-mono text-[1.35rem] font-semibold leading-none tracking-tight text-brand-orange sm:text-[1.5rem] lg:pt-0.5">
                        {item.index}
                      </span>
                      <h3 className="min-w-0 font-display text-[1.15rem] font-bold uppercase leading-tight tracking-tight text-[#000000] sm:text-[1.25rem] lg:pr-2">
                        {item.name}
                      </h3>
                    </div>

                    <p className="min-w-0 text-[14px] leading-relaxed text-[#111827] sm:text-[14.5px] lg:border-l lg:border-brand-line/60 lg:pl-5">
                      {item.summary}
                    </p>

                    <div
                      className="flex flex-col gap-1.5 lg:border-l lg:border-brand-line/60 lg:pl-5"
                      aria-label="Comparison areas"
                    >
                      {item.focusTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#111827]/55"
                        >
                          {focusTagClass(tag)}
                        </span>
                      ))}
                      <span className="mt-1 hidden text-[12px] font-semibold text-[#111827] group-hover:text-brand-orange lg:inline-flex lg:items-center lg:gap-1">
                        View comparison
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>

                    <span
                      className="hidden items-center justify-end text-[#111827] group-hover:text-brand-orange md:inline-flex lg:justify-center"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                    </span>

                    <span className="col-span-full inline-flex items-center gap-1 text-[12px] font-semibold text-[#111827] group-hover:text-brand-orange lg:hidden">
                      View comparison
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ComparisonDirectoryFrameworkVisual className="order-1 h-fit lg:order-2 lg:sticky lg:top-28" />
        </div>
      </div>
    </section>
  );
}
