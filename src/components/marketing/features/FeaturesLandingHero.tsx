import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { featuresLandingHero } from "@/lib/marketing/features/landing";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function FeaturesLandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-orange/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative py-14 sm:py-16 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{featuresLandingHero.eyebrow}</p>
          <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
            {featuresLandingHero.headline}
          </h1>
          <p className="body-copy mx-auto mt-5 max-w-2xl">{featuresLandingHero.supporting}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={featuresLandingHero.primary.href} className="btn-primary w-full sm:w-auto">
              {featuresLandingHero.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={featuresLandingHero.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
            >
              {featuresLandingHero.secondary.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={90} className="mx-auto mt-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-5">
            <div
              className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl"
              aria-hidden="true"
            />
            <FeatureProductPreview
              preview="connected"
              framed
              className="min-h-[260px] sm:min-h-[340px] lg:min-h-[400px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
