"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { careersConfig, getOpenJobs, getPublishedJobs } from "@/lib/marketing/careers/content";
import { CareersEmptyState } from "./CareersEmptyState";
import { CareersJobCard } from "./CareersJobCard";

export function CareersOpenPositions() {
  const { t } = useMarketing();
  const o = t.careers.openPositions;
  const e = t.careers.emptyState;
  const openJobs = getOpenJobs(getPublishedJobs());
  const isEmpty = openJobs.length === 0;

  const countLabel =
    openJobs.length === 1
      ? `1 ${o.countSingular}`
      : openJobs.length > 0
        ? `${openJobs.length} ${o.countPlural}`
        : null;

  return (
    <section
      id="open-positions"
      className="relative scroll-mt-28 border-b border-brand-navy/[0.1]"
      aria-labelledby="careers-open-positions-heading"
    >
      <div className="site-shell relative section-spacing">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{o.eyebrow}</p>
            <h2
              id="careers-open-positions-heading"
              className="display-title mt-4 text-[2rem] leading-[1.1] sm:text-[2.35rem] lg:text-[2.5rem]"
            >
              {isEmpty ? e.title : o.title}
            </h2>
            {countLabel ? (
              <p className="mt-3 font-mono text-[12px] font-medium tracking-[0.08em] text-brand-muted">{countLabel}</p>
            ) : null}
            {!isEmpty && careersConfig.useDemoJobs ? (
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">
                {o.demoNotice}
              </p>
            ) : null}
            {isEmpty ? (
              <p className="mt-5 max-w-md text-[14px] leading-[1.8] text-brand-muted">{e.body}</p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={70} className="mt-8 sm:mt-10">
          {isEmpty ? (
            <div className="careers-safe-zone-wide max-w-xl rounded-lg border border-brand-navy/12 bg-white px-5 py-6">
              <CareersEmptyState />
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" role="list">
              {openJobs.map((job) => (
                <CareersJobCard key={job.id} job={job} ctaLabel={o.viewPosition} />
              ))}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}
