import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { careersCta } from "@/lib/marketing/team/content";

export function TeamCareersCTA() {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="site-shell section-spacing">
        <Reveal>
          <div className="rounded-xl border border-brand-line bg-white px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">{careersCta.eyebrow}</p>
              <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {careersCta.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-lg rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 text-[15px] italic leading-relaxed text-brand-muted">
                {careersCta.supportingPlaceholder}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={careersCta.ctaHref}
                  className="btn-primary w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                >
                  {careersCta.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-5 text-[12px] text-brand-muted">{careersCta.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
