import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { featuresLandingCta } from "@/lib/marketing/features/landing";

export function FeaturesLandingCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy" data-design-layer="FeaturesCTA">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
        <line x1="80" y1="160" x2="1120" y2="160" stroke="rgba(255,255,255,0.12)" />
        <circle cx="600" cy="160" r="8" fill="rgba(255,106,0,0.35)" />
        <circle cx="600" cy="160" r="28" fill="none" stroke="rgba(20,110,245,0.35)" />
      </svg>
      <div className="feat-shell relative py-12 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.6rem]">
            {featuresLandingCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">
            {featuresLandingCta.supporting}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Link href={featuresLandingCta.primary.href} className="btn-primary w-full sm:w-auto">
              {featuresLandingCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={featuresLandingCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
            >
              {featuresLandingCta.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
