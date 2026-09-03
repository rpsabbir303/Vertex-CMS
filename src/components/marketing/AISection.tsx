"use client";

import { Reveal } from "@/components/Reveal";
import { AIConsole } from "@/components/mockups/ProductMockups";
import { useMarketing } from "./MarketingProviders";

export function AISection() {
  const { t } = useMarketing();

  return (
    <section id="ai" className="section-spacing relative overflow-hidden bg-brand-navy">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow-light">{t.ai.eyebrow}</p>
          <h2 className="display-title-light mt-4 text-3xl sm:text-4xl">{t.ai.headline}</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300">{t.ai.supporting}</p>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {t.ai.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-sm border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                  {step}
                </span>
                {i < t.ai.flow.length - 1 && <span className="text-brand-orange">→</span>}
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2">
            {t.ai.prompts.map((prompt) => (
              <li key={prompt} className="flex gap-2 text-sm text-slate-300">
                <span className="text-brand-orange">·</span>
                {prompt}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <AIConsole />
          <p className="mt-3 text-center text-[11px] text-slate-400 lg:text-left">
            Human confirmation required before any write or action
          </p>
        </Reveal>
      </div>
    </section>
  );
}
