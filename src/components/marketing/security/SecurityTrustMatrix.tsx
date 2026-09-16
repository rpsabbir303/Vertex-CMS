"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { protectionAreas, trustOverview } from "@/lib/marketing/security/content";
import { SecurityMatrix, SecurityMatrixBanner, SecurityMatrixCell, SecurityMatrixRow } from "./SecurityMatrix";
import { SecuritySystemMark } from "./SecuritySystemMark";

const ROW_ONE = [
  { pillarId: "data", areaIndex: 0 },
  { pillarId: "access", areaIndex: 1 },
  { pillarId: "compliance", areaIndex: 2 },
] as const;

const ROW_TWO = [
  { pillarId: "ai", areaIndex: 3 },
  { pillarId: "reliability", areaIndex: 4 },
] as const;

const pillarsById = Object.fromEntries(trustOverview.pillars.map((p) => [p.id, p]));

function TrustTopic({ pillarId, areaIndex }: { pillarId: string; areaIndex: number }) {
  const { t } = useMarketing();
  const pillar = pillarsById[pillarId];
  const area = protectionAreas[areaIndex];
  if (!pillar || !area) return null;

  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{area.index}</p>
      <h3 className="display-title mt-4 text-[1.2rem] leading-snug sm:text-[1.3rem]">{area.title}</h3>
      <p className="mt-4 text-[14px] leading-[1.75] text-brand-muted">{pillar.body}</p>
      <Link
        href={area.href}
        className="mt-8 inline-flex text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-navy hover:text-brand-orange"
      >
        {t.security.explore}
      </Link>
    </>
  );
}

export function SecurityTrustMatrix() {
  const { t } = useMarketing();
  const o = t.security.overview;

  return (
    <SecurityMatrix>
      <SecurityMatrixBanner>
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{o.eyebrow}</p>
          <h2 className="display-title mx-auto mt-4 max-w-3xl text-[1.75rem] leading-[1.15] sm:text-[2.15rem] lg:text-[2.35rem]">{o.headline}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-brand-muted sm:text-[16px]">{o.supporting}</p>
        </Reveal>
      </SecurityMatrixBanner>

      <SecurityMatrixRow columns={3} className="border-b border-brand-navy/15">
        {ROW_ONE.map(({ pillarId, areaIndex }) => (
          <SecurityMatrixCell key={pillarId}>
            <TrustTopic pillarId={pillarId} areaIndex={areaIndex} />
          </SecurityMatrixCell>
        ))}
      </SecurityMatrixRow>

      <SecurityMatrixRow columns={3}>
        {ROW_TWO.map(({ pillarId, areaIndex }) => (
          <SecurityMatrixCell key={pillarId}>
            <TrustTopic pillarId={pillarId} areaIndex={areaIndex} />
          </SecurityMatrixCell>
        ))}
        <SecurityMatrixCell className="flex min-h-[160px] items-center justify-center">
          <SecuritySystemMark className="h-[140px] w-full max-w-sm" />
        </SecurityMatrixCell>
      </SecurityMatrixRow>
    </SecurityMatrix>
  );
}
