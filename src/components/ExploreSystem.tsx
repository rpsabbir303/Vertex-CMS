"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import {
  AccountingUI,
  AIConsole,
  CollaborationUI,
  ConnectedExperienceUI,
  DocsUI,
  EstimateUI,
  FinanceUI,
  PhoneUI,
  PortfolioAnalytics,
  ProcurementUI,
  ProjectWorkspace,
  SafetyUI,
  ScheduleUI,
  WorkforceUI,
} from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import {
  EXPLORE_MODULES,
  GROUPS,
  WORKFLOW_STAGES,
  type ExploreModule,
  type ModuleGroup,
} from "@/lib/exploreModules";

type Mode = "system" | "workflow";

function PreviewFor({ type }: { type: ExploreModule["previewType"] }) {
  switch (type) {
    case "project":
      return <ProjectWorkspace />;
    case "estimate":
      return <EstimateUI />;
    case "finance":
      return <FinanceUI />;
    case "accounting":
      return <AccountingUI />;
    case "field":
      return (
        <div className="flex justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <PhoneUI variant="home" />
          <PhoneUI variant="log" raised />
        </div>
      );
    case "schedule":
      return <ScheduleUI />;
    case "safety":
      return <SafetyUI />;
    case "procurement":
      return <ProcurementUI />;
    case "docs":
      return <DocsUI />;
    case "workforce":
      return <WorkforceUI />;
    case "ai":
      return (
        <div className="overflow-hidden rounded-2xl bg-[#061A30] p-1">
          <AIConsole />
        </div>
      );
    case "reports":
      return <PortfolioAnalytics />;
    case "collaboration":
      return <CollaborationUI />;
    case "connected":
      return <ConnectedExperienceUI />;
    default:
      return <ProjectWorkspace />;
  }
}

function CenterCommand({ module }: { module: ExploreModule }) {
  const isFinance = module.previewType === "finance" || module.previewType === "accounting";
  const isAI = module.previewType === "ai";

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center lg:max-w-[380px]">
      {/* rings */}
      <div className="absolute inset-0 rounded-full border border-brand-blue/15" />
      <div className="absolute inset-4 rounded-full border border-dashed border-brand-blue/20" />
      <div className="absolute inset-10 rounded-full border border-brand-orange/20" />

      {/* orbit nodes */}
      {EXPLORE_MODULES.slice(0, 8).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 46;
        const y = 50 + Math.sin(angle) * 46;
        return (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/40"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        );
      })}

      <div
        className={`relative z-10 flex h-[72%] w-[72%] flex-col items-center justify-center rounded-[2rem] border shadow-card transition-all duration-500 ${
          isAI
            ? "border-brand-orange/40 bg-[#061A30] text-white"
            : isFinance
              ? "border-brand-navy/20 bg-brand-navy text-white"
              : "border-slate-200 bg-white text-brand-navy"
        }`}
      >
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
            isAI || isFinance ? "text-brand-orange" : "text-brand-blue"
          }`}
        >
          {module.number}
        </p>
        <p className="mt-2 text-center text-lg font-bold tracking-tight sm:text-xl">VertexBuild</p>
        <p className={`mt-1 text-center text-[10px] ${isAI || isFinance ? "text-slate-300" : "text-[#5B6B7C]"}`}>
          Construction Management System
        </p>

        <div className="mt-4 w-[85%] rounded-xl border border-white/10 bg-black/5 p-3 backdrop-blur">
          <p className={`text-[10px] font-semibold uppercase tracking-wide ${isAI || isFinance ? "text-brand-orange" : "text-brand-blue"}`}>
            Active · {module.title}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {(module.previewStats ?? []).slice(0, 3).map((s) => (
              <div key={s.label} className={`rounded-lg px-1.5 py-1.5 text-center ${isAI || isFinance ? "bg-white/10" : "bg-[#F5F8FC]"}`}>
                <p className={`text-[9px] ${isAI || isFinance ? "text-slate-400" : "text-[#5B6B7C]"}`}>{s.label}</p>
                <p className={`text-[11px] font-bold ${isAI || isFinance ? "text-white" : "text-brand-navy"}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExploreSystem() {
  const [mode, setMode] = useState<Mode>("system");
  const [activeId, setActiveId] = useState(EXPLORE_MODULES[0].id);
  const [groupFilter, setGroupFilter] = useState<ModuleGroup | "all">("all");
  const [workflowStage, setWorkflowStage] = useState(WORKFLOW_STAGES[0].id);

  const active = useMemo(
    () => EXPLORE_MODULES.find((m) => m.id === activeId) ?? EXPLORE_MODULES[0],
    [activeId]
  );

  const filteredModules = useMemo(() => {
    if (mode === "workflow") {
      const stage = WORKFLOW_STAGES.find((s) => s.id === workflowStage) ?? WORKFLOW_STAGES[0];
      return EXPLORE_MODULES.filter((m) => stage.moduleIds.includes(m.id));
    }
    if (groupFilter === "all") return EXPLORE_MODULES;
    return EXPLORE_MODULES.filter((m) => m.group === groupFilter);
  }, [mode, groupFilter, workflowStage]);

  const selectModule = (id: string) => setActiveId(id);

  return (
    <section id="explore" className="relative overflow-hidden bg-[#F5F8FC] py-20 text-[#0B1220] sm:py-28">
      {/* blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,110,245,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,110,245,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              The VertexBuild Platform
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
              Explore the Construction System.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5B6B7C] sm:text-lg">
              Everything you need to plan, manage, build, control and understand your projects —
              connected in one construction management system.
            </p>
          </div>
        </Reveal>

        {/* Mode toggle */}
        <Reveal delay={60}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-soft" role="tablist" aria-label="Explore by">
              <span className="hidden px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5B6B7C] sm:inline">
                Explore by
              </span>
              {(["system", "workflow"] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={mode === m}
                  onClick={() => setMode(m)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                    mode === m
                      ? "bg-brand-blue text-white shadow-sm"
                      : "text-[#5B6B7C] hover:text-brand-navy"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ========== DESKTOP ========== */}
        <div className="mt-12 hidden lg:block">
          {mode === "system" && (
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setGroupFilter("all")}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition ${
                  groupFilter === "all" ? "bg-brand-navy text-white" : "bg-white text-[#5B6B7C] border border-slate-200"
                }`}
              >
                All
              </button>
              {GROUPS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGroupFilter(g.id)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition ${
                    groupFilter === g.id
                      ? "bg-brand-orange text-white"
                      : "border border-slate-200 bg-white text-[#5B6B7C] hover:border-brand-orange/40"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          )}

          {mode === "workflow" && (
            <div className="mb-6 overflow-x-auto pb-2">
              <div className="flex min-w-max items-center justify-center gap-2 px-2">
                {WORKFLOW_STAGES.map((stage, i) => (
                  <div key={stage.id} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setWorkflowStage(stage.id);
                        const first = stage.moduleIds[0];
                        if (first) setActiveId(first);
                      }}
                      className={`rounded-xl px-3 py-2 text-[11px] font-semibold uppercase tracking-wide transition ${
                        workflowStage === stage.id
                          ? "bg-brand-orange text-white shadow-sm"
                          : "border border-slate-200 bg-white text-[#5B6B7C]"
                      }`}
                    >
                      {stage.title}
                    </button>
                    {i < WORKFLOW_STAGES.length - 1 && (
                      <span className="text-brand-blue/40" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-[240px_1fr_320px] items-start gap-6 xl:grid-cols-[260px_1fr_360px] xl:gap-8">
            {/* Left module nav */}
            <div className="max-h-[560px] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-2 shadow-soft">
              {filteredModules.map((m) => {
                const isActive = m.id === active.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onMouseEnter={() => selectModule(m.id)}
                    onFocus={() => selectModule(m.id)}
                    onClick={() => selectModule(m.id)}
                    className={`mb-1 flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition last:mb-0 ${
                      isActive
                        ? "bg-brand-blue/5 ring-1 ring-brand-orange/50"
                        : "hover:bg-[#F5F8FC]"
                    }`}
                  >
                    <span className={`mt-0.5 text-[11px] font-bold ${isActive ? "text-brand-orange" : "text-brand-blue"}`}>
                      {m.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-semibold ${isActive ? "text-brand-navy" : "text-[#334155]"}`}>
                        {m.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[10px] uppercase tracking-wide text-[#94A3B8]">
                        {GROUPS.find((g) => g.id === m.group)?.label}
                      </span>
                    </span>
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition ${
                        isActive ? "bg-brand-orange shadow-[0_0_10px_rgba(255,106,0,0.7)]" : "bg-slate-200"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Center command */}
            <div className="relative flex flex-col items-center justify-center py-4">
              <svg className="pointer-events-none absolute inset-0 h-full w-full text-brand-blue/20" aria-hidden="true">
                <line x1="8%" y1="50%" x2="28%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="72%" y1="50%" x2="92%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-brand-orange/40" />
              </svg>
              <CenterCommand module={active} />
              <p className="mt-6 text-center font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                One Connected System · For Modern Construction
              </p>
            </div>

            {/* Right preview panel */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                {active.number} · Preview
              </p>
              <h3 className="font-display mt-2 text-xl font-bold tracking-tight text-brand-navy">
                {active.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6B7C]">{active.description}</p>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
                <div className="max-h-[220px] overflow-hidden [&_.browser-chrome]:rounded-none [&_.browser-chrome]:border-0 [&_.browser-chrome]:shadow-none">
                  <div className="origin-top scale-[0.92]">
                    <PreviewFor type={active.previewType} />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Capabilities
              </p>
              <ul className="mt-2 space-y-1.5">
                {active.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-brand-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    {c}
                  </li>
                ))}
              </ul>

              <Link
                href={active.href}
                className="btn-primary mt-5 w-full bg-brand-orange"
              >
                Learn More
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* ========== MOBILE ========== */}
        <div className="mt-10 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setMode("system");
                  setGroupFilter(g.id);
                  const first = EXPLORE_MODULES.find((m) => m.group === g.id);
                  if (first) setActiveId(first.id);
                }}
                className={`shrink-0 rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide ${
                  groupFilter === g.id
                    ? "bg-brand-orange text-white"
                    : "border border-slate-200 bg-white text-[#5B6B7C]"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="mt-2 flex gap-2 overflow-x-auto pb-4">
            {filteredModules.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => selectModule(m.id)}
                className={`shrink-0 rounded-2xl border px-3 py-2 text-left transition ${
                  m.id === active.id
                    ? "border-brand-orange bg-white shadow-soft"
                    : "border-slate-200 bg-white/80"
                }`}
              >
                <span className="block text-[10px] font-bold text-brand-orange">{m.number}</span>
                <span className="mt-0.5 block max-w-[120px] text-xs font-semibold text-brand-navy">{m.title}</span>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-card">
            <CenterCommand module={active} />
            <h3 className="font-display mt-6 text-xl font-bold text-brand-navy">{active.title}</h3>
            <p className="mt-2 text-sm text-[#5B6B7C]">{active.description}</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
              <PreviewFor type={active.previewType} />
            </div>
            <ul className="mt-4 space-y-1.5">
              {active.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-brand-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {c}
                </li>
              ))}
            </ul>
            <Link href={active.href} className="btn-primary mt-5 w-full">
              Learn More
              <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <Reveal delay={100}>
          <div className="mt-16 rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-soft sm:px-10">
            <p className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              One Platform.
              <span className="text-brand-blue"> Every Part of Construction.</span>
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B6B7C]">
              Plan → Control → Build → Protect → Connect → Understand
            </p>
            <Link href="/features" className="btn-primary mt-6 inline-flex">
              Explore All Features
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
