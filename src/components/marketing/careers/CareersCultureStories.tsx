"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { careersConfig } from "@/lib/marketing/careers/content";
import { CareersCultureStorySection } from "./culture/CareersCultureStorySection";
import {
  CultureVisualConnectedSystems,
  CultureVisualCustomerProblem,
  CultureVisualDisciplines,
  CultureVisualProblems,
} from "./culture/CareersCultureVisuals";

const STORY_CONFIG = [
  { layout: "text-first" as const, background: "bg-brand-navy/[0.02]", Visual: CultureVisualProblems },
  { layout: "visual-first" as const, background: "bg-transparent", Visual: CultureVisualDisciplines },
  { layout: "text-first" as const, background: "bg-[#146EF5]/[0.025]", Visual: CultureVisualConnectedSystems },
  { layout: "visual-first" as const, background: "bg-transparent", Visual: CultureVisualCustomerProblem },
];

export function CareersCultureStories() {
  const { t } = useMarketing();
  const c = t.careers.employerValue;

  return (
    <div aria-label="Culture">
      <div className="relative border-b border-brand-navy/[0.1]">
        <div className="site-shell relative py-12 sm:py-14 lg:py-16">
          <Reveal className="max-w-2xl">
            <div className="careers-safe-zone">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">00</span>
              <span className="h-px w-8 bg-brand-navy/15" aria-hidden="true" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{c.eyebrow}</p>
            </div>
            {careersConfig.useDemoCultureContent ? (
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/55">
                {c.demoNotice}
              </p>
            ) : null}
            <h2 className="display-title mt-5 text-[1.85rem] leading-[1.1] sm:text-[2.25rem] lg:text-[2.5rem]">
              {c.storyHeadline}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-brand-muted sm:text-base">{c.storyIntro}</p>
            </div>
          </Reveal>
        </div>
      </div>

      {c.principles.map((principle, index) => {
        const config = STORY_CONFIG[index];
        if (!config) return null;
        const { Visual } = config;

        return (
          <CareersCultureStorySection
            key={principle.number}
            sectionId={`culture-${principle.number}`}
            principle={principle}
            visual={<Visual />}
            layout={config.layout}
            background={config.background}
          />
        );
      })}
    </div>
  );
}
