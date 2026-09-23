import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

import { AxisContinuationMark, ResourceCTAAbstract, ResourceCtaAmbient } from "../../resources/blog-detail/abstracts";

export type ComparisonCtaSectionProps = {
  headline: string;
  supporting: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  tertiary: { label: string; href: string };
};

/** CMS-1347 — comparison CTA block. */
export function ComparisonCtaSection({ headline, supporting, primary, secondary, tertiary }: ComparisonCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white" aria-labelledby="comparison-cta-heading">
      <ResourceCtaAmbient />
      <AxisContinuationMark stage="cta-entry" tone="dark" className="relative z-[1] pt-3 opacity-70" />

      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(10rem,11rem)] lg:gap-10">
          <div className="max-w-2xl" data-design-layer="content">
            <h2 id="comparison-cta-heading" className="font-display text-2xl font-bold sm:text-3xl">
              {headline}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300">{supporting}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={primary.href} className="btn-primary w-full sm:w-auto">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondary.href}
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                {secondary.label}
              </Link>
            </div>
            <Link
              href={tertiary.href}
              className="mt-4 inline-flex text-[13px] font-semibold uppercase tracking-wide text-brand-orange transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
            >
              {tertiary.label} →
            </Link>
          </div>
          <ResourceCTAAbstract className="mx-auto hidden opacity-95 sm:block lg:mx-0" />
        </div>
      </div>
    </section>
  );
}
