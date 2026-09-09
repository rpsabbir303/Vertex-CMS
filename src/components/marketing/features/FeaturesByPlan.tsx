import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { getFeaturesLandingPlans } from "@/lib/marketing/features/landing";

export function FeaturesByPlan() {
  const data = getFeaturesLandingPlans();

  return (
    <section id="features-by-plan" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{data.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{data.supporting}</p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {data.plans.map((plan) => (
            <li
              key={plan.id}
              className="flex h-full flex-col rounded-2xl border border-brand-line bg-[#FAFBFD] p-6"
            >
              <h3 className="font-display text-xl font-bold text-brand-navy">{plan.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{plan.description}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-brand-navy">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange hover:text-brand-navy"
              >
                {plan.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link href={data.cta.href} className="btn-secondary inline-flex">
            {data.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
