"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { protectionAreas, trustOverview } from "@/lib/marketing/security/content";
import { SecurityHeroMark } from "./SecurityHeroMark";
import { SecurityColumn, SecurityColumnRow, SecuritySectionRule } from "./SecurityModularGrid";

const REST = [
  { pillarId: "ai", areaIndex: 3 },
  { pillarId: "reliability", areaIndex: 4 },
] as const;

const pillarsById = Object.fromEntries(trustOverview.pillars.map((p) => [p.id, p]));

export function SecurityHubTrustGrid() {
  const { t } = useMarketing();

  return (
    <div className="security-trust-grid">
      <SecuritySectionRule />
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.7fr)]">
        <SecurityColumnRow columns={2} className="lg:col-span-2 lg:divide-x">
          {REST.map(({ pillarId, areaIndex }, i) => {
            const pillar = pillarsById[pillarId];
            const area = protectionAreas[areaIndex];
            if (!pillar || !area) return null;
            return (
              <SecurityColumn key={pillarId}>
                <Reveal delay={40 + i * 40}>
                  <Link href={area.href} className="group flex h-full flex-col">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{area.index}</p>
                    <h3 className="display-title mt-4 text-[1.15rem] leading-snug sm:text-[1.25rem]">{area.title}</h3>
                    <p className="mt-4 text-[14px] leading-[1.75] text-brand-muted">{pillar.body}</p>
                    <span className="mt-8 inline-flex text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition group-hover:text-brand-orange">
                      {t.security.explore}
                    </span>
                  </Link>
                </Reveal>
              </SecurityColumn>
            );
          })}
        </SecurityColumnRow>
        <div className="relative hidden min-h-[180px] border-t border-brand-navy/10 lg:block lg:border-l lg:border-t-0" aria-hidden="true">
          <SecurityHeroMark className="absolute inset-0 h-full w-full p-6 opacity-80" />
        </div>
      </div>
      <SecuritySectionRule />
    </div>
  );
}
