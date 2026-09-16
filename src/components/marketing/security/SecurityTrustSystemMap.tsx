"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { protectionAreas, trustOverview } from "@/lib/marketing/security/content";

const NAVY = "#08233F";
const BLUE = "#146EF5";
const ORANGE = "#FF6A00";

const LAYER_STACK = [
  { pillarId: "data", areaIndex: 0, side: "left" as const },
  { pillarId: "access", areaIndex: 1, side: "right" as const },
  { pillarId: "compliance", areaIndex: 2, side: "right" as const },
  { pillarId: "ai", areaIndex: 3, side: "left" as const },
  { pillarId: "reliability", areaIndex: 4, side: "left" as const },
];

const SPINE_Y = [72, 168, 264, 360, 456];

function PillarLink({ pillarId, areaIndex, align }: { pillarId: string; areaIndex: number; align: "start" | "end" }) {
  const pillarsById = Object.fromEntries(trustOverview.pillars.map((p) => [p.id, p]));
  const pillar = pillarsById[pillarId];
  const area = protectionAreas[areaIndex];
  if (!pillar || !area) return null;

  return (
    <Link
      href={area.href}
      className={`group flex max-w-[14rem] flex-col sm:max-w-[15rem] ${align === "end" ? "items-end text-right" : "items-start text-left"}`}
    >
      <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-orange">{area.index}</span>
      <span className="mt-1 font-display text-[14px] font-bold leading-snug text-brand-navy transition group-hover:text-brand-blue sm:text-[15px]">
        {area.title}
      </span>
      <span className="mt-1.5 text-[12px] leading-relaxed text-brand-muted">{pillar.body}</span>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-navy/50 transition group-hover:text-brand-orange">
        Explore →
      </span>
    </Link>
  );
}

function LayerSpineSvg() {
  return (
    <svg viewBox="0 0 720 520" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true" fill="none">
      <line x1="360" y1="48" x2="360" y2="472" stroke={NAVY} strokeOpacity="0.1" strokeWidth="1" />
      {SPINE_Y.map((y, i) => (
        <g key={y}>
          <line
            x1="360"
            y1={y}
            x2={i % 2 === 0 ? 200 : 520}
            y2={y}
            stroke={i === 0 ? BLUE : NAVY}
            strokeOpacity={i === 0 ? 0.2 : 0.11}
            strokeWidth="1"
            strokeDasharray={i > 2 ? "4 8" : undefined}
          />
          <circle
            cx="360"
            cy={y}
            r={i === 0 ? 5 : 3.5}
            fill={i === 0 ? ORANGE : NAVY}
            fillOpacity={i === 0 ? 0.55 : 0.14}
            className={i === 0 ? "security-node-pulse" : undefined}
          />
        </g>
      ))}
      <rect x="312" y="216" width="96" height="72" rx="1" stroke={BLUE} strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="360" cy="252" r="8" stroke={BLUE} strokeOpacity="0.22" strokeWidth="1" />
      <circle cx="360" cy="252" r="3" fill={ORANGE} fillOpacity="0.5" />
    </svg>
  );
}

export function SecurityTrustSystemMap() {
  return (
    <div className="security-trust-map relative mt-12 lg:mt-16">
      <div className="relative mx-auto hidden max-w-5xl lg:block">
        <div className="relative min-h-[520px]">
          <LayerSpineSvg />
          {LAYER_STACK.map(({ pillarId, areaIndex, side }, i) => {
            const topPct = `${((SPINE_Y[i] ?? 0) / 520) * 100}%`;
            return (
              <Reveal key={pillarId} delay={40 + i * 45}>
                <div
                  className={`absolute z-[2] max-w-[40%] -translate-y-1/2 ${side === "left" ? "left-0 text-left" : "right-0 text-right"}`}
                  style={{ top: topPct }}
                >
                  <PillarLink pillarId={pillarId} areaIndex={areaIndex} align={side === "left" ? "start" : "end"} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="mx-auto h-48 max-w-md sm:h-52">
          <LayerSpineSvg />
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2" role="list">
          {LAYER_STACK.map(({ pillarId, areaIndex }, i) => (
            <li key={pillarId} className="border-t border-brand-navy/12 pt-5">
              <Reveal delay={30 + i * 35}>
                <PillarLink pillarId={pillarId} areaIndex={areaIndex} align="start" />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
