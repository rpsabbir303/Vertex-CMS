"use client";

import { useState } from "react";
import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import {
  hubFoundationModules,
  hubSpecificationGrid,
  protectionAreas,
  trustOverview,
} from "@/lib/marketing/security/content";
import { SecurityDividerHorizontal, SecurityDividerVertical } from "./SecurityDivider";
import { SecurityRadialMap } from "./SecurityRadialMap";
import { SecurityLimeButton, SecurityLiveEyebrow, SecurityMeasure, SecurityPaper } from "./SecuritySurface";

const PASTELS = ["#D7E8F6", "#F3D9C4", "#F1E7B0"] as const;
const PILLAR_FOCUS = ["data", "access", "govern", "ai", "recover"] as const;

export function SecurityHubContent() {
  const { t } = useMarketing();
  const o = t.security.overview;
  const pillarsById = Object.fromEntries(trustOverview.pillars.map((p) => [p.id, p]));
  const topics = [
    { pillarId: "data" as const, area: protectionAreas[0] },
    { pillarId: "access" as const, area: protectionAreas[1] },
    { pillarId: "compliance" as const, area: protectionAreas[2] },
    { pillarId: "ai" as const, area: protectionAreas[3] },
    { pillarId: "reliability" as const, area: protectionAreas[4] },
  ];
  const [active, setActive] = useState(0);
  const activeTopic = topics[active];

  return (
    <>
      <section
        className="border-b border-[#E8E8E8] bg-white"
        aria-labelledby="trust-overview-heading"
        data-figma-section="trust-overview"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 border-b border-[#E8E8E8] bg-white lg:border-b-0" data-figma-region="trust-overview-heading">
            <SecurityMeasure className="py-14 sm:py-16 lg:max-w-none lg:py-20">
              <SecurityLiveEyebrow>{o.eyebrow}</SecurityLiveEyebrow>
              <h2
                id="trust-overview-heading"
                className="mt-4 max-w-[16em] font-display text-[1.85rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#0D0D0D] sm:text-[2.35rem]"
              >
                {o.headline}
              </h2>
              <p className="mt-5 max-w-[32rem] text-[15px] leading-[1.75] text-[#5C6560]">{o.supporting}</p>
            </SecurityMeasure>
          </div>
          <SecurityDividerVertical className="hidden lg:block" />
          <ol className="flex-1 list-none p-0 m-0" data-figma-region="trust-overview-grid">
            {topics.map(({ pillarId, area }, rowIndex) => {
              const pillar = pillarsById[pillarId];
              if (!area || !pillar) return null;
              return (
                <li key={pillarId} className="m-0 p-0">
                  {rowIndex > 0 ? <SecurityDividerHorizontal /> : null}
                  <article className="trust-area-cell bg-white" data-figma-cell={pillarId}>
                    <Link href={area.href} className="group flex gap-5 px-5 py-6 sm:px-8 sm:py-7">
                      <span className="font-mono text-[13px] font-semibold text-[#3FE844]" data-figma-role="index">
                        {area.index}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-[16px] font-semibold tracking-tight text-[#0D0D0D] group-hover:text-[#163326]"
                          data-figma-role="title"
                        >
                          {area.title}
                        </span>
                        <span
                          className="mt-1 block text-[14px] leading-[1.65] text-[#5C6560]"
                          data-figma-role="description"
                        >
                          {pillar.body}
                        </span>
                      </span>
                    </Link>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-b border-[#0F241C]" data-figma-section="key-information-highlight">
        <SecurityPaper dark className="border-b-0">
          <SecurityMeasure className="grid gap-8 py-12 sm:grid-cols-3 sm:py-16">
            {hubSpecificationGrid.slice(0, 3).map((item) => (
              <div key={item.label} className="min-w-0" data-figma-cell={item.label}>
                <p className="font-display text-[2rem] font-bold tracking-[-0.03em] text-white sm:text-[2.35rem]">{item.label}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">{item.detail}</p>
                {item.qualifier ? (
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3FE844]">
                    {item.qualifier}
                  </p>
                ) : null}
              </div>
            ))}
          </SecurityMeasure>
        </SecurityPaper>
      </section>

      <section
        className="border-b border-[#E8E8E8] bg-white"
        aria-labelledby="key-information-heading"
        data-figma-section="key-information"
      >
        <SecurityMeasure className="py-12 sm:py-14">
          <SecurityLiveEyebrow>{t.security.keyInfo.eyebrow}</SecurityLiveEyebrow>
          <h2 id="key-information-heading" className="sr-only">
            {t.security.keyInfo.eyebrow}
          </h2>
          <div
            className="mt-8 grid grid-cols-1 border border-dashed border-[#D4D4D4] sm:grid-cols-2 lg:grid-cols-3"
            data-figma-region="key-information-grid"
          >
            {hubSpecificationGrid.map((item, index) => (
              <article
                key={item.label}
                className={`border-dashed border-[#D4D4D4] bg-white p-6 sm:p-7 ${index % 3 !== 2 ? "lg:border-r" : ""} ${
                  index < 6 ? "border-b" : ""
                } ${index % 2 === 0 ? "sm:max-lg:border-r" : ""} ${index < 7 ? "sm:max-lg:even:border-r-0" : ""}`}
                data-figma-cell={item.label}
              >
                <p className="text-[1.2rem] font-bold tracking-tight text-[#0D0D0D]" data-figma-role="label">
                  {item.label}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5C6560]" data-figma-role="detail">
                  {item.detail}
                </p>
                {item.qualifier ? (
                  <p
                    className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5C6560]/80"
                    data-figma-role="qualifier"
                  >
                    {item.qualifier}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </SecurityMeasure>
      </section>

      <section data-figma-section="explore-trust-model-headline">
        <SecurityPaper className="border-b border-[#C5DDB8]">
          <SecurityMeasure className="py-16 text-center sm:py-20 lg:py-24">
            <h2 className="mx-auto max-w-[18em] font-display text-[1.9rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#0D0D0D] sm:text-[2.6rem]">
              {t.security.protection.headline}
            </h2>
          </SecurityMeasure>
        </SecurityPaper>
      </section>

      <section className="border-b border-[#E8E8E8] bg-white" data-figma-section="trust-areas-interactive">
        <div className="flex flex-col lg:flex-row">
          <div
            className="flex-1 border-b border-[#E8E8E8] bg-white lg:border-b-0"
            data-figma-region="trust-area-detail"
          >
            <SecurityMeasure className="py-12 sm:py-16 lg:max-w-none">
              <div className="flex flex-wrap gap-2" data-figma-region="trust-area-tabs" role="tablist">
                {topics.map(({ area }, index) => (
                  <button
                    key={area.title}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    onClick={() => setActive(index)}
                    className={`rounded-md px-3 py-1.5 text-[12px] font-semibold transition ${
                      active === index ? "bg-[#163326] text-white" : "bg-[#F4F4F4] text-[#5C6560] hover:text-[#0D0D0D]"
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
              {activeTopic ? (
                <div className="mt-8" role="tabpanel">
                  <h3 className="font-display text-[1.7rem] font-bold tracking-[-0.03em] text-[#0D0D0D]">
                    {activeTopic.area.title}
                  </h3>
                  <p className="mt-3 max-w-[32rem] text-[15px] leading-[1.75] text-[#5C6560]">{activeTopic.area.description}</p>
                  <div className="mt-7">
                    <SecurityLimeButton href={activeTopic.area.href}>{t.security.explore}</SecurityLimeButton>
                  </div>
                </div>
              ) : null}
            </SecurityMeasure>
          </div>
          <SecurityDividerVertical className="hidden lg:block" />
          <SecurityPaper
            className="flex flex-1 items-center justify-center px-6 py-12"
            data-figma-region="trust-area-visual"
          >
            <SecurityRadialMap focus={PILLAR_FOCUS[active]} />
          </SecurityPaper>
        </div>
      </section>

      <section
        className="grid border-b border-[#E8E8E8] lg:grid-cols-3"
        aria-label={t.security.protection.eyebrow}
        data-figma-section="trust-foundation-modules"
      >
        {hubFoundationModules.map((mod, index) => (
          <article
            key={mod.title}
            className="border-b border-[#E8E8E8] px-6 py-10 last:border-b-0 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            style={{ backgroundColor: PASTELS[index] }}
            data-figma-cell={mod.title}
          >
            <h3 className="font-display text-[1.35rem] font-bold tracking-tight text-[#0D0D0D]">{mod.title}</h3>
            <ul className="mt-5 space-y-2">
              {mod.lines.map((line) => (
                <li key={line} className="text-[13px] leading-[1.65] text-[#163326]/80">
                  {line}
                </li>
              ))}
            </ul>
            <Link href={mod.href} className="mt-8 inline-flex text-[13px] font-semibold text-[#0D0D0D] hover:text-[#163326]">
              {t.security.explore} →
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
