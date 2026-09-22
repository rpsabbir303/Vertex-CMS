import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { PRODUCT_TOUR_HERO } from "@/lib/marketing/product-tour/content";

import { ProductTourHeroWorkflow } from "./ProductTourVisuals";

type Props = {
  breadcrumbs: { label: string; href?: string }[];
};

export function ProductTourHero({ breadcrumbs }: Props) {
  const copy = PRODUCT_TOUR_HERO;

  return (
    <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#F5F8FC]" data-resource-visual="product-tour-hero">
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,22rem)] lg:gap-12">
          <div className="min-w-0" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{copy.eyebrow}</p>
            <h1 className="mt-3 max-w-2xl font-display text-[1.85rem] font-bold leading-[1.08] tracking-tight text-black sm:text-[2.35rem] lg:text-[2.45rem]">
              {copy.headline}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-[#111827]">{copy.supporting}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={copy.primaryCta.href} className="btn-primary inline-flex w-full sm:w-auto">
                {copy.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href={copy.secondaryCta.href} className="btn-secondary inline-flex w-full sm:w-auto">
                {copy.secondaryCta.label}
              </Link>
            </div>
          </div>
          <ProductTourHeroWorkflow className="justify-self-center lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
}
