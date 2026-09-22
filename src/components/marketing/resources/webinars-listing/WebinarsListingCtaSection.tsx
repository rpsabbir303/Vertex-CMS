import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { AxisContinuationMark, ResourceCTAAbstract, ResourceCtaAmbient } from "../blog-detail/abstracts";

/** Webinar library finale — connects learning to product action. */
export function WebinarsListingCtaSection() {
  const cta = RESOURCES_HUB.cta;

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white" aria-labelledby="webinars-cta-heading">
      <ResourceCtaAmbient />
      <AxisContinuationMark stage="cta-entry" tone="dark" className="relative z-[1] pt-3 opacity-70" />

      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(10rem,11rem)] lg:gap-10">
          <div className="max-w-2xl" data-design-layer="content">
            <h2 id="webinars-cta-heading" className="font-display text-2xl font-bold sm:text-3xl">
              Turn what you learn into connected project workflows.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300">
              Apply session ideas on VertexBuild — project, field, financial, and intelligence workflows on one operating
              record.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={cta.primary.href} className="btn-primary w-full sm:w-auto">
                {cta.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={cta.secondary.href}
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </div>
          <ResourceCTAAbstract className="mx-auto hidden opacity-95 sm:block lg:mx-0" />
        </div>
      </div>
    </section>
  );
}
