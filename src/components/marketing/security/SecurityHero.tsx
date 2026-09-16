"use client";

import { useMarketing } from "@/components/marketing/MarketingProviders";
import { securityCta } from "@/lib/marketing/security/content";
import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityConstellation } from "./SecurityConstellation";
import { SecurityGhostButton, SecurityLimeButton, SecurityLiveEyebrow, SecurityMeasure } from "./SecuritySurface";

type Props = {
  pageId: SecurityPageId;
};

export function SecurityHero({ pageId }: Props) {
  const { t } = useMarketing();
  const copy = t.security.pages[pageId];

  return (
    <section className="border-b border-[#E8E8E8]" aria-labelledby="security-page-heading">
      <div className="grid lg:grid-cols-2">
        <div className="bg-white">
          <SecurityMeasure className="flex h-full flex-col justify-center py-14 sm:py-16 lg:max-w-none lg:py-[4.5rem]">
            <SecurityLiveEyebrow>{t.security.hero.eyebrow}</SecurityLiveEyebrow>
            <h1
              id="security-page-heading"
              className="mt-5 max-w-[11em] font-display text-[2.35rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#0D0D0D] sm:text-[3.15rem] lg:text-[3.55rem]"
            >
              {copy.title}
            </h1>
            <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.7] text-[#5C6560]">{copy.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SecurityLimeButton href={securityCta.primaryHref}>{t.security.cta.primary}</SecurityLimeButton>
              <SecurityGhostButton href={securityCta.secondaryHref}>{t.security.cta.secondary}</SecurityGhostButton>
            </div>
          </SecurityMeasure>
        </div>
        <div className="security-paper relative min-h-[320px] border-t border-[#C5DDB8] lg:min-h-[520px] lg:border-l lg:border-t-0">
          <SecurityConstellation pageId={pageId} />
        </div>
      </div>
    </section>
  );
}
