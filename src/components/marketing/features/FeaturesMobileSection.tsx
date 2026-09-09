import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import { featuresLandingMobile } from "@/lib/marketing/features/landing";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function FeaturesMobileSection() {
  return (
    <section id={featuresLandingMobile.id} className="scroll-mt-28 border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="eyebrow">{featuresLandingMobile.eyebrow}</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">{featuresLandingMobile.headline}</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">
              {featuresLandingMobile.supporting}
            </p>
            <ul className="mt-6 space-y-2.5">
              {featuresLandingMobile.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  {point}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {featuresLandingMobile.workflows.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-lg border border-brand-line bg-white px-3 py-2 text-[12px] font-semibold text-brand-navy transition hover:border-brand-orange/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={featuresLandingMobile.cta.href} className="btn-primary mt-8 inline-flex">
              {featuresLandingMobile.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-5 sm:p-6">
              <FeatureProductPreview preview="docs" framed className="min-h-[220px] sm:min-h-[280px]" />
              <div className="mt-4 flex justify-center sm:absolute sm:bottom-6 sm:right-6 sm:mt-0">
                <div className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-soft" aria-hidden="true">
                  <PhoneUI variant="home" raised />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
