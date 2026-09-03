"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { HeroPortfolioDashboard, FinanceUI, FloatingChip } from "@/components/mockups/ProductMockups";
import { CTAS } from "@/lib/marketing/navigation";
import { useMarketing } from "./MarketingProviders";

export function MarketingHero() {
  const { t } = useMarketing();

  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-[#FAFBFD]">
      <div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-brand-blue/5 blur-3xl" aria-hidden="true" />

      <div className="site-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24 xl:py-28">
        <Reveal>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="display-title mt-5 text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
            {t.hero.headline}
          </h1>
          <p className="body-copy prose-width mt-6">{t.hero.supporting}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={CTAS.demo.href} className="btn-primary">
              {t.header.bookDemo}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={CTAS.trial.href} className="btn-secondary">
              {t.header.startTrial}
            </Link>
          </div>

          <Link href={CTAS.explorePlatform.href} className="btn-ghost mt-6 inline-flex">
            {t.hero.explore}
          </Link>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-brand-line pt-8">
            {t.hero.trust.map((item) => (
              <li key={item} className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-navy">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="relative min-w-0">
          <div className="relative">
            <div className="mock-frame shadow-product">
              <HeroPortfolioDashboard />
            </div>
            <FloatingChip className="absolute -left-2 top-8 hidden sm:block" tone="blue">
              PROJECTS
            </FloatingChip>
            <FloatingChip className="absolute -right-2 top-16 hidden sm:block" tone="orange">
              FINANCIALS
            </FloatingChip>
            <FloatingChip className="absolute -left-4 bottom-24 hidden md:block" tone="blue">
              FIELD
            </FloatingChip>
            <FloatingChip className="absolute -right-4 bottom-12 hidden md:block" tone="orange">
              AI
            </FloatingChip>
          </div>
          <div className="mt-4 hidden overflow-hidden rounded-xl border border-brand-line bg-white shadow-soft lg:block">
            <div className="origin-top-left scale-[0.55]">
              <FinanceUI />
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-brand-muted lg:text-left">
            One connected platform · Product preview
          </p>
        </Reveal>
      </div>
    </section>
  );
}
