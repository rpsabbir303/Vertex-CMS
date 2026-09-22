"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { buildSystemDisciplines, buildSystemPipeline, buildingSection } from "@/lib/marketing/team/content";

const navy = "#08233F";
const orange = "#E85D2C";

const orbitPositions: Record<string, { x: number; y: number }> = {
  product: { x: 48, y: 72 },
  engineering: { x: 272, y: 72 },
  construction: { x: 48, y: 168 },
  financial: { x: 272, y: 168 },
  field: { x: 48, y: 264 },
  customer: { x: 272, y: 264 },
};

export function TeamBuildSystemMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = buildSystemDisciplines.find((d) => d.id === activeId) ?? null;

  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-[#FAFCFE]" aria-labelledby="team-build-map-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{buildingSection.eyebrow}</p>
          <h2 id="team-build-map-heading" className="display-title mt-4 max-w-2xl text-[1.75rem] leading-[1.1] text-[#08233F] sm:text-[2.1rem]">
            {buildingSection.headline}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:items-start">
          <Reveal delay={40}>
            <div className="mx-auto w-full max-w-[360px]">
              <svg viewBox="0 0 320 340" className="mx-auto w-full" role="img" aria-label="How the team builds VertexBuild">
                {buildSystemPipeline.map((step, i) => {
                  const y = 28 + i * 48;
                  const isLast = i === buildSystemPipeline.length - 1;
                  return (
                    <g key={step}>
                      {!isLast ? <line x1="160" y1={y + 18} x2="160" y2={y + 38} stroke="rgba(8,35,63,0.2)" strokeWidth="1" /> : null}
                      <circle cx="160" cy={y + 10} r="3" fill={orange} />
                      <text x="160" y={y + 6} textAnchor="middle" fill={navy} fontSize="8" fontWeight="600" letterSpacing="0.08em">
                        {step.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
                {buildSystemDisciplines.map((d) => {
                  const pos = orbitPositions[d.id]!;
                  const activeLine = activeId === d.id;
                  return (
                    <line
                      key={d.id}
                      x1={pos.x}
                      y1={pos.y}
                      x2="160"
                      y2="160"
                      stroke={activeLine ? navy : "rgba(8,35,63,0.12)"}
                      strokeWidth={activeLine ? 1.25 : 1}
                    />
                  );
                })}
                {buildSystemDisciplines.map((d) => {
                  const pos = orbitPositions[d.id]!;
                  const isActive = activeId === d.id;
                  return (
                    <g key={`node-${d.id}`}>
                      <circle cx={pos.x} cy={pos.y} r={isActive ? 4 : 3} fill={isActive ? navy : orange} />
                    </g>
                  );
                })}
              </svg>
              <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Team disciplines">
                {buildSystemDisciplines.map((d) => {
                  const isActive = activeId === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      aria-pressed={isActive}
                      className={`rounded-sm border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                        isActive ? "border-brand-navy bg-brand-navy text-white" : "border-brand-navy/15 bg-white text-[#08233F] hover:border-brand-navy/35"
                      }`}
                      onMouseEnter={() => setActiveId(d.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(d.id)}
                      onBlur={() => setActiveId(null)}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="min-h-[120px] border-t border-brand-navy/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {active ? (
                <>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{active.label}</p>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[#111827]">{active.description}</p>
                </>
              ) : (
                <p className="text-[14px] leading-[1.75] text-[#111827]/70">Hover a discipline to see how it connects to the product system.</p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
