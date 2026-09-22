import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { TOUR_FINAL_CTA } from "@/lib/marketing/product-tour/content";

import { TourSectionAbstract } from "./ProductTourVisuals";

export function TourCTA() {
  const cta = TOUR_FINAL_CTA;

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white" aria-labelledby="tour-final-cta-heading">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
        <TourSectionAbstract variant="cta" />
      </div>
      <div className="site-shell relative z-[1] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center" data-design-layer="content">
          <h2 id="tour-final-cta-heading" className="font-display text-2xl font-bold sm:text-3xl lg:text-[2rem]">
            {cta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">{cta.supporting}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={cta.primary.href} className="btn-primary w-full sm:w-auto">
              {cta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={cta.secondary.href}
              className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
