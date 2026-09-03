"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";

export function ProblemSection() {
  const { t } = useMarketing();

  return (
    <section className="section-spacing bg-brand-navy text-white">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow-light">{t.problem.eyebrow}</p>
          <h2 className="display-title-light mt-4 text-3xl sm:text-4xl lg:text-[3.25rem] lg:leading-[1.08]">
            {t.problem.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.problem.items.map((item, i) => (
            <Reveal key={item.number} delay={i * 60}>
              <article className="flex h-full flex-col bg-brand-navy p-8 sm:p-10">
                <span className="font-display text-4xl font-bold text-brand-orange/80">{item.number}</span>
                <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
