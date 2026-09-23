import Link from "next/link";

import { ComparisonsSectionHeader } from "../ComparisonsSectionHeader";

export type ComparisonWhoItsForSectionProps = {
  id?: string;
  eyebrow: string;
  headline: string;
  audiences: Array<{ title: string; body: string; consideration: string; comparisonContext?: string }>;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "white" | "cool";
};

/** CMS-1346 — audience / operating context section. */
export function ComparisonWhoItsForSection({
  id,
  eyebrow,
  headline,
  audiences,
  ctaLabel,
  ctaHref,
  tone = "cool",
}: ComparisonWhoItsForSectionProps) {
  const bg = tone === "cool" ? "bg-[#F7F9FC]" : "bg-white";

  return (
    <section
      id={id}
      className={`relative scroll-mt-28 border-b border-brand-line/60 ${bg}`}
      aria-labelledby="comparison-who-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <ComparisonsSectionHeader eyebrow={eyebrow} headline={headline} />
        <h2 id="comparison-who-heading" className="sr-only">
          {headline}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="flex flex-col border border-brand-line/80 bg-white px-5 py-6 sm:px-6 sm:py-7"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#000000]">{audience.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#111827]">{audience.body}</p>
              {audience.comparisonContext ? (
                <p className="mt-3 text-[13px] leading-relaxed text-[#111827]/80">{audience.comparisonContext}</p>
              ) : null}
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111827]/55">
                Consider · {audience.consideration}
              </p>
            </article>
          ))}
        </div>

        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-orange hover:text-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
