"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@/components/Icons";
import { CTAS } from "@/lib/marketing/navigation";

type HeroTone = "orange" | "blue" | "teal" | "cyan" | "violet" | "emerald";

type HeroNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  tone: HeroTone;
};

type HeroFloat = {
  title: string;
  value: string;
  tone: HeroTone;
};

const NODES: readonly HeroNode[] = [
  { id: "projects", label: "Projects", x: 8, y: 18, tone: "orange" },
  { id: "financial", label: "Financial", x: 88, y: 14, tone: "blue" },
  { id: "field", label: "Field", x: 4, y: 52, tone: "teal" },
  { id: "documents", label: "Documents", x: 92, y: 48, tone: "cyan" },
  { id: "safety", label: "Safety", x: 12, y: 82, tone: "blue" },
  { id: "ai", label: "AI", x: 86, y: 78, tone: "violet" },
  { id: "people", label: "People", x: 28, y: 6, tone: "cyan" },
  { id: "schedule", label: "Schedule", x: 72, y: 90, tone: "teal" },
];

const FLOATS: readonly HeroFloat[] = [
  { title: "Schedule Health", value: "ON TRACK", tone: "emerald" },
  { title: "AI Insight", value: "Material cost increasing", tone: "orange" },
  { title: "Change Orders", value: "3 Open", tone: "blue" },
  { title: "Field Status", value: "126 Daily Logs", tone: "cyan" },
  { title: "Safety", value: "Incident Free", tone: "emerald" },
  { title: "Cash Flow", value: "$4.3M", tone: "orange" },
];

function toneClass(tone: HeroTone) {
  switch (tone) {
    case "orange":
      return "border-brand-orange/30 text-brand-orange";
    case "teal":
      return "border-brand-teal/30 text-brand-teal";
    case "cyan":
      return "border-brand-cyan/30 text-brand-cyan";
    case "violet":
      return "border-brand-violet/30 text-brand-violet";
    case "emerald":
      return "border-emerald-400/30 text-emerald-300";
    default:
      return "border-brand-blue/30 text-brand-blue";
  }
}

function valueTone(tone: HeroTone) {
  switch (tone) {
    case "orange":
      return "text-brand-orange";
    case "teal":
      return "text-brand-teal";
    case "cyan":
      return "text-brand-cyan";
    case "violet":
      return "text-brand-violet";
    case "emerald":
      return "text-emerald-300";
    default:
      return "text-brand-blue";
  }
}

function ProjectsOverviewDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071526] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.75)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400">
          app.vertexcms.com / projects / overview
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue">Projects Overview</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">Executive command view</p>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
            One source of truth
          </span>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Active Projects", "24"],
            ["Project Value", "$246.8M"],
            ["Projected Profit", "$18.7M"],
            ["Margin", "12.6%"],
            ["Change Orders", "18"],
          ].map(([label, value], i) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
              <p className="text-[10px] text-slate-500">{label}</p>
              <p className={`mt-1 text-sm font-bold ${i === 2 || i === 3 ? "text-brand-orange" : "text-white"}`}>{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-12">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 lg:col-span-5">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Budget vs Cost</p>
            <div className="flex h-28 items-end gap-1.5">
              {[42, 58, 50, 68, 61, 74, 70, 82, 76, 88, 84, 92].map((h, i) => (
                <div key={i} className="relative flex-1 rounded-sm bg-brand-blue/15" style={{ height: `${h}%` }}>
                  <div
                    className="absolute bottom-0 w-full rounded-sm bg-brand-orange/85"
                    style={{ height: `${Math.max(28, h - 18)}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 lg:col-span-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Project Health</p>
            <div className="space-y-2">
              {[
                ["Waterfront Tower", "Watch", "bg-amber-400/15 text-amber-300"],
                ["Bridgeway Plaza", "Healthy", "bg-emerald-400/15 text-emerald-300"],
                ["Riverside Schools", "At Risk", "bg-brand-orange/15 text-brand-orange"],
              ].map(([n, s, c]) => (
                <div key={n} className="flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] text-slate-200">{n}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${c}`}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 lg:col-span-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Cash Flow Forecast</p>
            <p className="font-display text-2xl font-bold text-white">$4.3M</p>
            <p className="mt-1 text-[11px] text-slate-500">Next 30 days · net position</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-brand-blue" />
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">AI Insight</p>
            <p className="mt-1 text-[12px] text-slate-200">
              Material cost acceleration detected on 2 active projects. Review CO #18 before approval.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Recent Activity</p>
            <ul className="mt-1 space-y-1 text-[11px] text-slate-400">
              <li>Pay app #12 submitted · Bridgeway</li>
              <li>Daily log synced · Waterfront</li>
              <li>RFI #204 answered · Riverside</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--px", `${x}`);
      stage.style.setProperty("--py", `${y}`);
    };

    stage.addEventListener("pointermove", onMove);
    return () => stage.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16">
      <div className="home-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-14">
        <div className="max-w-xl">
          <p className="home-label">AI-Powered Construction Management Platform</p>
          <h1 className="home-display mt-5 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
            One operating system
            <span className="block text-slate-300">for the entire</span>
            <span className="block">construction business.</span>
          </h1>
          <p className="home-body mt-6 max-w-md">
            Vertex CMS connects projects, financials, field operations, compliance and AI intelligence in one unified
            platform.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={CTAS.trial.href} className="btn-home-primary">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={CTAS.demo.href} className="btn-home-secondary">
              Book a Demo
            </Link>
          </div>
          <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
            Projects · Financials · Field · People · Documents · Safety · Schedule · AI
          </p>
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto w-full max-w-[640px] [--px:0] [--py:0]"
          style={{ perspective: "1200px" }}
        >
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            {NODES.map((n) => (
              <line
                key={n.id}
                x1="50%"
                y1="50%"
                x2={`${n.x}%`}
                y2={`${n.y}%`}
                className="home-pulse-line stroke-brand-blue/40"
                strokeWidth="1"
              />
            ))}
          </svg>

          {NODES.map((n, i) => (
            <span
              key={n.id}
              className={`home-node absolute z-20 hidden md:inline-flex ${toneClass(n.tone)}`}
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                transform: `translate(calc(-50% + var(--px) * ${6 + i}px), calc(-50% + var(--py) * ${4 + i}px))`,
              }}
            >
              {n.label}
            </span>
          ))}

          <div
            className="relative z-10"
            style={{
              transform:
                "translate3d(calc(var(--px) * 10px), calc(var(--py) * 8px), 0) rotateX(calc(var(--py) * -4deg)) rotateY(calc(var(--px) * 5deg))",
              transition: "transform 80ms linear",
            }}
          >
            <ProjectsOverviewDashboard />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:absolute lg:-bottom-6 lg:left-0 lg:right-0 lg:mt-0 lg:grid-cols-3 lg:gap-3">
            {FLOATS.map((f, i) => (
              <div
                key={f.title}
                className="home-panel hidden rounded-xl px-3 py-2.5 shadow-lg sm:block"
                style={{
                  transform: `translate3d(calc(var(--px) * ${4 + i * 2}px), calc(var(--py) * ${3 + i}px), 0)`,
                }}
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">{f.title}</p>
                <p className={`mt-1 text-[12px] font-semibold ${valueTone(f.tone)}`}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
