import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

import { CUSTOMERS_PAGE } from "@/lib/marketing/customers/content";

import { CustomerEcosystemVisual } from "./visuals/CustomerEcosystemVisual";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

export function CustomersHero() {
  const { hero } = CUSTOMERS_PAGE;

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-white" data-design-layer="CustomersHero">
      <CustomersSectionBackdrop variant="hero" />

      <div className="cust-shell relative z-[1] py-8 sm:py-10 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:gap-8 xl:gap-10">
          <div className="min-w-0">
            <p className="cust-eyebrow">{hero.eyebrow}</p>

            <h1 className="cust-display mt-3 max-w-xl text-[2rem] leading-[1.08] sm:mt-4 sm:text-[2.35rem] lg:text-[2.65rem]">
              {hero.headline}
            </h1>

            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-brand-muted sm:mt-4">{hero.supporting}</p>

            <div className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={hero.primaryCta.href} className="btn-primary w-full sm:w-auto">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-brand-line/80 bg-[#F4F7FA]/60 p-2 sm:p-3 lg:p-4">
            <CustomerEcosystemVisual variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
