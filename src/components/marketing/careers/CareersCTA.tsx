import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { careersCtaSection } from "@/lib/marketing/careers/content";

export function CareersCTA() {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="site-shell section-spacing">
        <Reveal>
          <div className="rounded-xl border border-brand-line bg-white px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
            <p className="eyebrow">{careersCtaSection.eyebrow}</p>
            <h2 className="display-title mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {careersCtaSection.headline}
            </h2>
            {careersCtaSection.supporting ? (
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-brand-muted">
                {careersCtaSection.supporting}
              </p>
            ) : (
              <p className="mx-auto mt-5 max-w-lg rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 text-[15px] italic leading-relaxed text-brand-muted">
                {careersCtaSection.supportingPlaceholder}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={careersCtaSection.primaryHref}
                className="btn-primary w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                {careersCtaSection.primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={careersCtaSection.secondaryHref}
                className="btn-secondary w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
              >
                {careersCtaSection.secondaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
