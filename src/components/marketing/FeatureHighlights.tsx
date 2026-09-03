"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";

export function FeatureHighlights() {
  const { t } = useMarketing();

  return (
    <section id="solutions" className="section-spacing bg-[#FAFAF8]">
      <div className="site-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.features.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl">{t.features.headline}</h2>
        </Reveal>

        <div className="mt-14 space-y-0 divide-y divide-brand-line border-y border-brand-line">
          {t.features.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <Link
                href={item.href}
                className="group grid gap-6 py-10 transition hover:bg-white sm:grid-cols-[1fr_2fr] sm:gap-12 lg:py-12"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy group-hover:text-brand-blue">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <p className="max-w-xl text-base leading-relaxed text-brand-muted">{item.description}</p>
                  <ArrowRight className="h-5 w-5 shrink-0 text-brand-orange opacity-0 transition group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
