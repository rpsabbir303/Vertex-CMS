"use client";

import { Reveal } from "@/components/Reveal";
import { FinanceUI } from "@/components/mockups/ProductMockups";
import { useMarketing } from "./MarketingProviders";

export function FinancialsSection() {
  const { t } = useMarketing();

  return (
    <section id="financials" className="section-spacing relative overflow-hidden bg-brand-dark">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden="true" />
      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow-light">{t.financials.eyebrow}</p>
          <h2 className="display-title-light mt-4 text-3xl sm:text-4xl lg:text-[3rem]">{t.financials.headline}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">{t.financials.supporting}</p>

          <div className="mt-10 space-y-3">
            {t.financials.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-slate-200">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {t.financials.highlights.map((h) => (
              <span
                key={h}
                className="rounded-sm border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-300"
              >
                {h}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mock-frame">
            <FinanceUI />
          </div>
          <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange lg:text-left">
            Native Accounting · Product preview
          </p>
        </Reveal>
      </div>
    </section>
  );
}
