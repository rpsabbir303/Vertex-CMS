"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/images";
import { REQUEST_BID_HREF } from "@/lib/website/navigation";
import { company } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  const metaItems = [
    company.projectsDelivered
      ? { label: t.hero.metaProjectsDelivered, value: company.projectsDelivered }
      : null,
    { label: t.hero.metaServiceArea, value: company.serviceAreaLabel },
    company.established ? { label: t.hero.metaEstablished, value: company.established } : null,
    { label: t.hero.metaProjectTypes, value: company.projectTypes },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="hero-height relative w-full">
        <Image
          src={photos.steelFrame}
          alt="Large-scale commercial construction project"
          fill
          priority
          className="hero-image-zoom object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/75 to-brand-navy/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-brand-navy/20"
          aria-hidden="true"
        />

        <div className="site-shell relative flex h-full flex-col justify-end pb-10 pt-28 sm:pb-14 sm:pt-36 lg:pb-20 lg:pt-44">
          <Reveal className="max-w-4xl">
            <p className="eyebrow-light">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-display text-[2.625rem] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
              {t.hero.headline}
              <br />
              {t.hero.headlineLine2}
            </h1>
            <p className="prose-width mt-7 text-base leading-[1.75] text-slate-200 sm:text-lg">
              {t.hero.supporting}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={REQUEST_BID_HREF} className="btn-primary">
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/35 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">{t.hero.credibility}</p>
          </Reveal>

          <Reveal delay={140} className="mt-14 hidden border-t border-white/15 pt-8 lg:block">
            <dl className="grid grid-cols-2 gap-x-12 gap-y-6 lg:grid-cols-4">
              {metaItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-6 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 lg:flex xl:right-12">
          <span>{t.hero.scrollExplore}</span>
          <span className="text-brand-orange" aria-hidden="true">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}
