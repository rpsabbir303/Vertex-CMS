"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";

export function GrowthSection() {
  const { t } = useMarketing();

  return (
    <section id="growth" className="section-spacing bg-white">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{t.growth.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl">{t.growth.headline}</h2>
          <p className="body-copy mx-auto mt-5">{t.growth.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {t.growth.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-lg border border-brand-line bg-brand-soft px-4 py-3 text-center sm:px-6 sm:py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-navy">{step}</p>
                </div>
                {i < t.growth.flow.length - 1 && (
                  <span className="hidden text-brand-muted sm:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
