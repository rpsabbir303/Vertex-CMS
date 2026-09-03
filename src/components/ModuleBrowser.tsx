"use client";

import { useState } from "react";
import {
  DocsUI,
  EstimateUI,
  FinanceUI,
  ProjectWorkspace,
  SafetyUI,
  ScheduleUI,
} from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

const MODULES = [
  {
    id: "projects",
    title: "Projects & Portfolio",
    desc: "Cross-project health, phases, teams and variance in one workspace.",
    view: <ProjectWorkspace />,
  },
  {
    id: "precon",
    title: "Preconstruction",
    desc: "Estimating, bid packages, leveling and award-to-budget flow.",
    view: <EstimateUI />,
  },
  {
    id: "finance",
    title: "Financials & Accounting",
    desc: "Contracts, SOV, change orders, pay apps and native GL.",
    view: <FinanceUI />,
  },
  {
    id: "schedule",
    title: "Scheduling",
    desc: "CPM, look-ahead and critical path with schedule risk visibility.",
    view: <ScheduleUI />,
  },
  {
    id: "safety",
    title: "Safety & Compliance",
    desc: "Incidents, inspections, toolbox talks, COI and compliance radar.",
    view: <SafetyUI />,
  },
  {
    id: "docs",
    title: "Documents & Drawings",
    desc: "Version control, markup and current-revision visibility.",
    view: <DocsUI />,
  },
];

export function ModuleBrowser() {
  const [active, setActive] = useState(MODULES[0].id);
  const current = MODULES.find((m) => m.id === active) ?? MODULES[0];

  return (
    <section id="modules" className="relative overflow-hidden bg-brand-charcoal py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-30" aria-hidden="true" />

      <div className="container-wide relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Browse the Platform</p>
            <h2 className="headline mt-3">
              Every Module.
              <br />
              One Operating System.
            </h2>
            <p className="copy mt-4">
              Select a capability to preview how Vertex CMS runs that part of the job — the same
              product language across planning, money, field and compliance.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <Reveal>
            <div className="panel overflow-hidden">
              {MODULES.map((m, i) => {
                const isActive = m.id === active;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActive(m.id)}
                    className={`flex w-full items-start gap-4 border-b border-white/5 px-5 py-4 text-left transition last:border-0 ${
                      isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className={`mt-0.5 text-xs font-bold ${isActive ? "text-brand-orange" : "text-brand-muted"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className={`block text-sm font-semibold ${isActive ? "text-white" : "text-slate-300"}`}>
                        {m.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-brand-muted">{m.desc}</span>
                    </span>
                    <span
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        isActive ? "bg-brand-orange shadow-[0_0_12px_rgba(255,106,0,0.8)]" : "bg-white/15"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden="true" />
              <div className="relative z-10">{current.view}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
