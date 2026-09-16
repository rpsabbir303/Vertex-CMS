"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { protectionAreas, trustOverview } from "@/lib/marketing/security/content";
import { SecurityColumn, SecurityColumnRow, SecuritySectionRule } from "./SecurityModularGrid";

const FOUNDATION = [
  { pillarId: "data", areaIndex: 0 },
  { pillarId: "access", areaIndex: 1 },
  { pillarId: "compliance", areaIndex: 2 },
] as const;

const pillarsById = Object.fromEntries(trustOverview.pillars.map((p) => [p.id, p]));

export function SecurityFoundationGrid() {
  const { t } = useMarketing();

  return (
    <div className="security-foundation">
      <SecuritySectionRule />
      <SecurityColumnRow columns={3}>
        {FOUNDATION.map(({ pillarId, areaIndex }, i) => {
          const pillar = pillarsById[pillarId];
          const area = protectionAreas[areaIndex];
          if (!pillar || !area) return null;
          return (
            <SecurityColumn key={pillarId}>
              <Reveal delay={40 + i * 40}>
                <Link href={area.href} className="group flex h-full flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{area.index}</p>
                  <h3 className="display-title mt-4 text-[1.15rem] leading-snug sm:text-[1.25rem]">{area.title}</h3>
                  <p className="mt-4 flex-1 text-[14px] leading-[1.75] text-brand-muted">{pillar.body}</p>
                  <span className="mt-8 inline-flex text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition group-hover:text-brand-orange">
                    {t.security.explore}
                  </span>
                </Link>
              </Reveal>
            </SecurityColumn>
          );
        })}
      </SecurityColumnRow>
      <SecuritySectionRule />
    </div>
  );
}
