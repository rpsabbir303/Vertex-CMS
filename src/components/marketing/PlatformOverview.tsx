"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";

export function PlatformOverview() {
  const { t } = useMarketing();

  return (
    <section id="platform" className="section-spacing overflow-hidden bg-white">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{t.platform.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl capitalize sm:text-4xl lg:text-[3rem]">
            {t.platform.headline}
          </h2>
          <p className="body-copy mx-auto mt-5">{t.platform.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="relative mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col items-center">
            <div className="relative z-10 rounded-2xl border border-brand-blue/20 bg-brand-navy px-10 py-6 text-center shadow-lift">
              <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">VertexBuild</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Connected Platform
              </p>
            </div>

            <div className="absolute left-1/2 top-1/2 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/5" aria-hidden="true" />

            <div className="mt-10 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.platform.hubs.map((hub, i) => (
                <div
                  key={hub}
                  className={`rounded-lg border border-brand-line bg-brand-soft px-4 py-5 text-center transition hover:border-brand-blue/30 hover:bg-white hover:shadow-soft ${
                    i === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-brand-navy">{hub}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
