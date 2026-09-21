"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { Reveal } from "@/components/Reveal";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import {
  FINAL_CTA,
  JOURNEY_PATHS,
  PLATFORM_CATEGORIES,
  PROJECT_TYPE_PROFILES,
  SOLUTION_DETAILS,
  SOLUTION_ROLES,
  SOLUTIONS_PAGE,
  TRUST_AUDIENCE,
  WORKFLOW_STAGES,
  type RoleId,
} from "@/lib/marketing/solutions/data";
import { LivePreviewStage } from "./SolutionsProductUI";

/* ─── Shared SaaS chrome ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{children}</p>
  );
}

/* ─── 1. Trust + metrics strip ─── */

export function SolutionsTrustStripSection() {
  const metrics = [
    { value: "6", label: "Platform areas" },
    { value: "1", label: "Project record" },
    { value: "50+", label: "Documented modules" },
    { value: "∞", label: "Connected workflows" },
  ] as const;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Built for</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_AUDIENCE.map((name) => (
                <span key={name} className="text-[14px] font-semibold text-brand-navy/80">
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <p className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">{m.value}</p>
                  <p className="mt-1 text-[12px] text-brand-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. Platform — horizontal rail + full-width product theater ─── */

const PLATFORM_THEATER: Record<
  (typeof PLATFORM_CATEGORIES)[number]["title"],
  { tagline: string; preview: PreviewKey; dark?: boolean; url: string }
> = {
  "Project Management": {
    tagline: "Delivery, documents, and project controls on one record.",
    preview: "projectDashboard",
    url: "app.vertexcms.com / projects",
  },
  "Financial Management": {
    tagline: "Cost, accounting, billing, WIP, and cash in context.",
    preview: "accountingDashboard",
    dark: true,
    url: "app.vertexcms.com / financials",
  },
  "Field Operations": {
    tagline: "Jobsite activity synced back to the office in real time.",
    preview: "dailyLogDashboard",
    url: "app.vertexcms.com / field",
  },
  "Compliance & Workforce": {
    tagline: "Subs, compliance, workforce, and time tied to the project.",
    preview: "wfOverview",
    url: "app.vertexcms.com / workforce",
  },
  "AI & Intelligence": {
    tagline: "Grounded intelligence across project, field, and financial data.",
    preview: "predHero",
    dark: true,
    url: "app.vertexcms.com / intelligence",
  },
  "Business Growth": {
    tagline: "CRM, leads, portals, and client experience connected to delivery.",
    preview: "cpShowcase",
    url: "app.vertexcms.com / growth",
  },
};

function PlatformPreviewStage({
  preview,
  dark,
  url,
}: {
  preview: PreviewKey;
  dark?: boolean;
  url: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-brand-line/80 bg-white shadow-[0_32px_80px_-40px_rgba(8,37,66,0.45)]">
      <div className="flex items-center gap-2 border-b border-brand-line/70 bg-[#F7F9FC] px-4 py-2.5">
        <span className="flex shrink-0 gap-1" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]/90" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/90" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]/90" />
        </span>
        <span className="min-w-0 truncate text-[10px] text-brand-muted">{url}</span>
        <span className="ml-auto hidden rounded-full border border-emerald-400/30 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 sm:inline">
          Live workspace
        </span>
      </div>
      <div className={"relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[380px] " + (dark ? "bg-[#061525]" : "bg-[#FAFBFD]")}>
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <FeatureProductPreview preview={preview} dark={dark} scale="md" className="rounded-none border-0 bg-transparent shadow-none" />
        </div>
        <div
          className={
            "pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t to-transparent " +
            (dark ? "from-[#061525]" : "from-[#FAFBFD]")
          }
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export function SolutionsPlatformShowcaseSection() {
  const [active, setActive] = useState(0);
  const category = PLATFORM_CATEGORIES[active];
  const theater = PLATFORM_THEATER[category.title];

  return (
    <section id="platform" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Platform</SectionLabel>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            {SOLUTIONS_PAGE.architectureHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
            {SOLUTIONS_PAGE.architectureSupporting}
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-10 -mx-4 px-4 sm:-mx-0 sm:px-0">
          <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:thin] snap-x snap-mandatory">
            {PLATFORM_CATEGORIES.map((cat, i) => {
              const selected = active === i;
              return (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "group flex w-[152px] shrink-0 snap-start flex-col rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-[168px] " +
                    (selected
                      ? "border-brand-navy bg-brand-navy text-white shadow-[0_20px_50px_-24px_rgba(8,37,66,0.55)]"
                      : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/20 hover:bg-white hover:shadow-sm")
                  }
                >
                  <span className={"font-mono text-[10px] font-bold " + (selected ? "text-brand-orange" : "text-brand-orange/80")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={"mt-2 text-[13px] font-semibold leading-snug " + (selected ? "text-white" : "text-brand-navy")}>
                    {cat.title}
                  </span>
                  <span className={"mt-2 text-[11px] " + (selected ? "text-slate-300" : "text-brand-muted")}>
                    {cat.items.length} modules
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div
            key={category.title}
            className="overflow-hidden rounded-3xl border border-brand-line bg-[#F4F7FB] shadow-[0_40px_100px_-48px_rgba(8,37,66,0.35)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-line/80 bg-white px-5 py-4 sm:px-6 lg:px-8">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Platform area</p>
                <p className="mt-1 font-display text-xl font-bold text-brand-navy sm:text-2xl">{category.title}</p>
                <p className="mt-1 max-w-xl text-[13px] text-brand-muted">{theater.tagline}</p>
              </div>
              <Link href={category.href} className="btn-primary shrink-0">
                Explore {category.title.split(" ")[0]}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid lg:grid-cols-[minmax(220px,260px)_minmax(0,1fr)]">
              <aside className="border-b border-brand-line/80 bg-white p-5 lg:border-b-0 lg:border-r lg:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">In this area</p>
                <ul className="mt-4 space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[12px] font-medium text-brand-navy transition hover:bg-[#FAFBFD]"
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-brand-orange" aria-hidden="true" />
                          {item.label}
                        </span>
                        <ArrowRight className="h-3 w-3 text-brand-muted/0 transition group-hover:text-brand-orange" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className="relative p-5 sm:p-6 lg:p-8">
                <PlatformPreviewStage preview={theater.preview} dark={theater.dark} url={theater.url} />
                <div className="absolute bottom-10 left-8 hidden rounded-xl border border-brand-line bg-white px-3 py-2 shadow-lg lg:block">
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">Shared record</p>
                  <p className="text-[11px] font-bold text-brand-navy">Project · Financial · Field</p>
                </div>
                <div className="absolute right-10 top-10 hidden rounded-xl border border-brand-orange/25 bg-white px-3 py-2 shadow-lg lg:block">
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-orange">Synced</p>
                  <p className="text-[11px] font-bold text-brand-navy">{category.items.length} modules active</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-brand-line/80 bg-brand-navy px-5 py-3.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">One platform</span>
              {PLATFORM_CATEGORIES.map((cat, i) => (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "text-[11px] font-medium transition " +
                    (active === i ? "text-white" : "text-slate-400 hover:text-white")
                  }
                >
                  {cat.title}
                </button>
              ))}
              <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
              <span className="text-[11px] text-slate-400">Same project record · Every workflow connected</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 3. Workflow hub — visual ecosystem diagram ─── */

const HUB_NODES = [
  { id: "plan", label: "Plan", angle: -90 },
  { id: "estimate", label: "Estimate", angle: -30 },
  { id: "build", label: "Build", angle: 30 },
  { id: "control", label: "Control", angle: 90 },
  { id: "connect", label: "Connect", angle: 150 },
  { id: "intelligence", label: "Intelligence", angle: 210 },
] as const;

export function SolutionsWorkflowHubSection() {
  const [activeId, setActiveId] = useState<(typeof WORKFLOW_STAGES)[number]["id"]>("build");
  const active = WORKFLOW_STAGES.find((s) => s.id === activeId) ?? WORKFLOW_STAGES[2];
  const radius = 42;

  return (
    <section id="workflow" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
          <Reveal>
            <SectionLabel>Operating model</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {SOLUTIONS_PAGE.workflowHeadline}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-brand-muted">{SOLUTIONS_PAGE.workflowSupporting}</p>

            <div className="mt-8 rounded-2xl border border-brand-line bg-[#FAFBFD] p-5">
              <p className="font-mono text-[10px] font-bold text-brand-orange">
                {String(WORKFLOW_STAGES.findIndex((s) => s.id === activeId) + 1).padStart(2, "0")} · {active.label}
              </p>
              <ul className="mt-4 space-y-2">
                {active.modules.map((mod) => (
                  <li key={mod.label}>
                    <Link
                      href={mod.href}
                      className="flex items-center gap-2 text-[13px] font-medium text-brand-navy hover:text-brand-orange"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-brand-orange" />
                      {mod.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="relative">
            <div className="relative mx-auto aspect-square max-w-[480px]">
              <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                {HUB_NODES.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <line
                      key={node.id}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      className="stroke-brand-line"
                      strokeWidth="1"
                      strokeDasharray="4 5"
                    />
                  );
                })}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-brand-navy bg-brand-navy px-4 py-5 text-center shadow-[0_24px_60px_-20px_rgba(8,37,66,0.5)]">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Core</p>
                <p className="mt-1 font-display text-lg font-bold text-white">Project record</p>
                <p className="mt-1 text-[10px] leading-snug text-slate-400">One source for every workflow</p>
              </div>

              {HUB_NODES.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                const selected = activeId === node.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveId(node.id)}
                    className={
                      "absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-[11px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                      (selected
                        ? "border-brand-orange bg-white text-brand-navy shadow-[0_8px_24px_-8px_rgba(232,93,4,0.4)]"
                        : "border-brand-line bg-white text-brand-muted hover:border-brand-navy/25 hover:text-brand-navy")
                    }
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {node.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. Bento — journey paths + capabilities ─── */

export function SolutionsBentoSection() {
  return (
    <section id="matrix" className="scroll-mt-28 border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {SOLUTIONS_PAGE.matrixHeadline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{SOLUTIONS_PAGE.matrixNote}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {JOURNEY_PATHS.map((path, i) => (
            <Reveal
              key={path.n}
              delay={i * 60}
              className={
                "flex flex-col rounded-2xl border border-brand-line bg-white p-6 shadow-[0_1px_0_rgba(8,37,66,0.04)] " +
                (i === 0 ? "lg:col-span-5 lg:row-span-2" : i === 1 ? "lg:col-span-4" : "lg:col-span-3")
              }
            >
              <span className="font-mono text-[11px] font-bold text-brand-orange">{path.n}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-navy sm:text-2xl">{path.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-brand-muted">{path.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {path.modules.map((mod) => (
                  <li
                    key={mod}
                    className="rounded-full border border-brand-line bg-[#FAFBFD] px-3 py-1 text-[11px] font-medium text-brand-navy"
                  >
                    {mod}
                  </li>
                ))}
              </ul>
              <Link href={path.href} className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
                {path.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          ))}

          <Reveal delay={180} className="rounded-2xl border border-brand-line bg-brand-navy p-6 lg:col-span-4 lg:row-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Connections</p>
            <p className="mt-3 font-display text-xl font-bold text-white">Every module ties back to the project</p>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-400">
              Marks in our capability map show documented relevance — not unused modules or pricing tiers.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Projects", "Financials", "Field", "Documents", "Safety", "AI"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-3 text-center text-[10px] font-semibold text-slate-300"
                >
                  {label}
                </div>
              ))}
            </div>
            <Link href={ROUTES.features} className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
              Browse all features
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. Roles — product-led spotlight ─── */

export function SolutionsRolesSection() {
  const [activeId, setActiveId] = useState<RoleId>("project-manager");
  const active = SOLUTION_ROLES.find((r) => r.id === activeId) ?? SOLUTION_ROLES[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      const match = SOLUTION_ROLES.find((r) => r.hash === hash);
      if (match) setActiveId(match.id);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section id="roles" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>By role</SectionLabel>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {SOLUTIONS_PAGE.rolesHeadline}
          </h2>
          <p className="mt-4 text-[15px] text-brand-muted">{SOLUTIONS_PAGE.rolesSupporting}</p>
        </Reveal>

        <Reveal delay={60} className="mt-10 flex flex-wrap justify-center gap-2">
          {SOLUTION_ROLES.map((role) => (
            <button
              key={role.id}
              id={role.hash}
              type="button"
              onClick={() => setActiveId(role.id)}
              className={
                "scroll-mt-28 rounded-full border px-4 py-2 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                (activeId === role.id
                  ? "border-brand-navy bg-brand-navy text-white shadow-sm"
                  : "border-brand-line bg-[#FAFBFD] text-brand-muted hover:text-brand-navy")
              }
            >
              {role.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div key={active.id} aria-live="polite">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Role spotlight</p>
              <h3 className="font-display mt-3 text-2xl font-bold text-brand-navy sm:text-3xl">{active.label}</h3>
              <p className="mt-4 text-[16px] font-medium leading-snug text-brand-navy">{active.headline}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-brand-muted">{active.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {active.workflows.slice(0, 6).map((wf) => (
                  <li
                    key={wf}
                    className="flex items-center gap-2 rounded-lg border border-brand-line/70 bg-[#FAFBFD] px-3 py-2.5 text-[12px] font-medium text-brand-navy"
                  >
                    <CheckIcon className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
                    {wf}
                  </li>
                ))}
              </ul>
              <Link href={active.cta.href} className="btn-primary mt-8 inline-flex">
                {active.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <LivePreviewStage
              preview={active.preview}
              label={active.previewLabel}
              dark={Boolean(active.previewDark)}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 6. Project types — three-up product cards ─── */

const PROJECT_TYPE_PREVIEW_URL: Record<(typeof PROJECT_TYPE_PROFILES)[number]["slug"], string> = {
  commercial: "app.vertexcms.com / schedule",
  residential: "app.vertexcms.com / projects",
  civil: "app.vertexcms.com / look-ahead",
};

function ProjectTypePreviewFrame({
  preview,
  dark,
  url,
}: {
  preview: PreviewKey;
  dark?: boolean;
  url: string;
}) {
  return (
    <div className="relative bg-gradient-to-b from-[#EEF2F8] to-[#E4EBF4] px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
      <div className="overflow-hidden rounded-xl border border-brand-line/80 bg-white shadow-[0_24px_56px_-32px_rgba(8,37,66,0.35)]">
        <div className="flex items-center gap-2 border-b border-brand-line/70 bg-[#F7F9FC] px-3 py-2">
          <span className="flex shrink-0 gap-1" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]/90" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/90" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]/90" />
          </span>
          <span className="min-w-0 truncate text-[9px] text-brand-muted sm:text-[10px]">{url}</span>
        </div>

        <div className="relative h-[200px] overflow-hidden bg-[#FAFBFD] sm:h-[220px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <FeatureProductPreview
              preview={preview}
              dark={dark}
              scale="sm"
              className="rounded-none border-0 bg-transparent shadow-none"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectTypeCard({
  profile,
  index,
}: {
  profile: (typeof PROJECT_TYPE_PROFILES)[number];
  index: number;
}) {
  const item = SOLUTION_DETAILS[profile.slug];
  const url = PROJECT_TYPE_PREVIEW_URL[profile.slug];

  return (
    <Reveal delay={index * 80}>
      <article
        id={profile.slug}
        className="scroll-mt-28 flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_20px_60px_-32px_rgba(8,37,66,0.18)]"
      >
        <ProjectTypePreviewFrame preview={item.preview} dark={Boolean(item.previewDark)} url={url} />

        <div className="flex flex-1 flex-col border-t border-brand-line/70 p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{profile.kicker}</p>
          <h3 className="mt-2 font-display text-xl font-bold leading-snug text-brand-navy">{item.label}</h3>
          <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-brand-muted">{item.supporting}</p>
          <ul className="mt-4 space-y-2">
            {profile.characteristics.map((line) => (
              <li key={line} className="flex items-start gap-2 text-[12px] leading-snug text-brand-navy">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
          <Link
            href={item.href}
            className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-semibold text-brand-orange hover:text-brand-navy"
          >
            {item.cta.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function SolutionsProjectTypesSection() {
  return (
    <section id="project-types" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Project types</SectionLabel>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {SOLUTIONS_PAGE.projectTypesHeadline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{SOLUTIONS_PAGE.projectTypesSupporting}</p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECT_TYPE_PROFILES.map((profile, index) => (
            <ProjectTypeCard key={profile.slug} profile={profile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. Ecosystem — light constellation + module bridge ─── */

const ECOSYSTEM_NODE_LAYOUT = [
  { x: 50, y: 8 },
  { x: 88, y: 28 },
  { x: 88, y: 72 },
  { x: 50, y: 92 },
  { x: 12, y: 72 },
  { x: 12, y: 28 },
] as const;

function EcosystemOrbitCanvas({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[540px]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {ECOSYSTEM_NODE_LAYOUT.map((pos, i) => (
          <line
            key={PLATFORM_CATEGORIES[i].title}
            x1="50%"
            y1="50%"
            x2={`${pos.x}%`}
            y2={`${pos.y}%`}
            className="stroke-brand-orange/25"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />
        ))}
        <circle cx="50%" cy="50%" r="18%" className="fill-brand-orange/[0.04] stroke-brand-orange/15" strokeWidth="1" />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 w-[42%] max-w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-brand-line bg-white px-4 py-5 text-center shadow-[0_24px_60px_-24px_rgba(8,37,66,0.28)]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-orange">VertexBuild</p>
        <p className="mt-2 font-display text-lg font-bold leading-tight text-brand-navy">Project record</p>
        <p className="mt-2 text-[10px] leading-snug text-brand-muted">One source for every workflow</p>
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-50 px-2.5 py-1 text-[9px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Always synced
        </span>
      </div>

      {PLATFORM_CATEGORIES.map((cat, i) => {
        const pos = ECOSYSTEM_NODE_LAYOUT[i];
        const selected = active === i;
        return (
          <button
            key={cat.title}
            type="button"
            onClick={() => onSelect(i)}
            className={
              "absolute z-30 max-w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
              (selected
                ? "border-brand-orange/50 bg-white shadow-[0_16px_40px_-16px_rgba(232,93,4,0.35)] ring-2 ring-brand-orange/15"
                : "border-brand-line/80 bg-white/95 shadow-sm hover:border-brand-navy/20 hover:shadow-md")
            }
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <span className="font-mono text-[9px] font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
            <span className="mt-0.5 block text-[11px] font-semibold leading-snug text-brand-navy">{cat.title}</span>
            <span className="mt-1 block text-[9px] text-brand-muted">{cat.items.length} modules</span>
          </button>
        );
      })}
    </div>
  );
}

export function SolutionsPowerPlatformSection() {
  const [active, setActive] = useState(0);
  const category = PLATFORM_CATEGORIES[active];
  const theater = PLATFORM_THEATER[category.title];

  return (
    <section id="ecosystem" className="relative scroll-mt-28 overflow-hidden border-b border-brand-line bg-gradient-to-b from-[#FFF9F6] via-white to-[#EFF4FA]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_80%_at_50%_-20%,rgba(232,93,4,0.07),transparent)]"
        aria-hidden="true"
      />

      <div className="site-shell relative section-spacing">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Ecosystem</SectionLabel>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem]">
            {SOLUTIONS_PAGE.ecosystemHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
            {SOLUTIONS_PAGE.ecosystemSupporting}
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-12 lg:mt-16">
          <EcosystemOrbitCanvas active={active} onSelect={setActive} />
        </Reveal>

        <Reveal delay={100} className="mt-10 lg:mt-12">
          <div
            key={category.title}
            className="overflow-hidden rounded-3xl border border-brand-line/80 bg-white shadow-[0_32px_80px_-40px_rgba(8,37,66,0.22)]"
          >
            <div className="grid lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
              <div className="border-b border-brand-line/70 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Connected area</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">{category.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{theater.tagline}</p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {category.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between gap-2 rounded-xl border border-brand-line/70 bg-[#FAFBFD] px-3.5 py-2.5 text-[12px] font-medium text-brand-navy transition hover:border-brand-orange/30 hover:bg-white"
                      >
                        {item.label}
                        <ArrowRight className="h-3 w-3 shrink-0 text-brand-muted" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link href={category.href} className="btn-primary mt-8 inline-flex">
                  Explore {category.title.split(" ")[0]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative bg-gradient-to-br from-[#EEF2F8] via-[#F5F7FA] to-[#E8EDF4] p-5 sm:p-6 lg:p-8">
                <PlatformPreviewStage preview={theater.preview} dark={false} url={theater.url} />
                <div className="absolute bottom-10 left-10 hidden rounded-xl border border-brand-line bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm lg:block">
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">Platform</p>
                  <p className="text-[11px] font-bold text-brand-navy">Unified · Not siloed</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-line/70 bg-[#FAFBFD] px-6 py-4 sm:px-8">
              <div className="flex flex-wrap gap-2">
                {PLATFORM_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={
                      "rounded-full px-3 py-1 text-[11px] font-semibold transition " +
                      (active === i ? "bg-brand-navy text-white" : "text-brand-muted hover:text-brand-navy")
                    }
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
              <Link
                href={ROUTES.features}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange hover:text-brand-navy"
              >
                Browse all features
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 8. Final CTA — centered SaaS close ─── */

export function SolutionsFinalCtaSection() {
  return (
    <section className="bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-brand-line bg-white px-8 py-12 text-center shadow-[0_40px_100px_-48px_rgba(8,37,66,0.35)] sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,93,4,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(37,99,235,0.06), transparent 55%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {FINAL_CTA.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{FINAL_CTA.supporting}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={FINAL_CTA.primary.href} className="btn-primary w-full sm:w-auto">
                  {FINAL_CTA.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={FINAL_CTA.secondary.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
                >
                  {FINAL_CTA.secondary.label}
                </Link>
              </div>
              <Link href={FINAL_CTA.trial.href} className="mt-5 inline-block text-[13px] font-semibold text-brand-orange hover:text-brand-navy">
                {FINAL_CTA.trial.label} →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
