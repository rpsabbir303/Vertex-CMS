"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { MAP_NODES, PLATFORM_CATEGORIES, PLATFORM_STACKS, WORKFLOW_STAGES } from "@/lib/marketing/solutions/data";

function MiniChrome({ url, children, dark = false }: { url: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={
        "overflow-hidden rounded-xl border shadow-[0_16px_40px_-28px_rgba(8,35,63,0.4)] " +
        (dark ? "border-white/10 bg-[#0A1F35]" : "border-brand-line bg-white")
      }
    >
      <div
        className={
          "flex items-center gap-2 border-b px-3 py-1.5 " +
          (dark ? "border-white/10 bg-white/5" : "border-brand-line/70 bg-[#F7F9FC]")
        }
      >
        <span className="flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]/90" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]/90" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]/90" />
        </span>
        <span className={"truncate text-[9px] " + (dark ? "text-slate-400" : "text-brand-muted")}>{url}</span>
      </div>
      {children}
    </div>
  );
}

export function MiniGcUI() {
  return (
    <MiniChrome url="app.vertexcms.com / projects">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-brand-navy">Riverside Medical Center</p>
          <span className="rounded-sm bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
            On Track
          </span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {[
            ["Budget", "92%"],
            ["Open RFIs", "6"],
            ["Subs", "14"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-brand-line bg-[#FAFBFD] px-2 py-1.5">
              <p className="text-[8px] text-brand-muted">{k}</p>
              <p className="text-[11px] font-bold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </MiniChrome>
  );
}

export function MiniSpecialtyUI() {
  return (
    <MiniChrome url="app.vertexcms.com / field">
      <div className="p-3">
        <p className="text-[11px] font-semibold text-brand-navy">MEP — Level 3 rough-in</p>
        <ul className="mt-2 space-y-1.5 text-[10px]">
          {[
            ["Timesheet · Crew A", "42 hrs"],
            ["T&M Ticket TM-118", "Pending"],
            ["Billing SOV 08", "$86K"],
          ].map(([k, v]) => (
            <li key={k} className="flex items-center justify-between rounded-md border border-brand-line bg-[#FAFBFD] px-2 py-1.5">
              <span className="text-brand-navy">{k}</span>
              <span className="font-semibold text-brand-muted">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </MiniChrome>
  );
}

export function MiniOwnerUI() {
  return (
    <MiniChrome url="portal.vertexcms.com">
      <div className="p-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Owner Portal</p>
        <p className="mt-1 text-[11px] font-semibold text-brand-navy">Riverside Medical Center</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-line">
          <div className="h-full w-[68%] rounded-full bg-brand-orange" />
        </div>
        <p className="mt-1 text-[9px] text-brand-muted">Progress 68% · Pay App #07 pending</p>
      </div>
    </MiniChrome>
  );
}

export function MiniCommercialUI() {
  return (
    <MiniChrome url="app.vertexcms.com / schedule">
      <div className="p-3">
        <p className="text-[11px] font-semibold text-brand-navy">Northline Office Complex</p>
        <div className="mt-2 space-y-1">
          {["Foundation", "Structure", "MEP", "Interiors"].map((p, i) => (
            <div key={p} className="flex items-center gap-2">
              <span className="w-14 text-[8px] text-brand-muted">{p}</span>
              <div className="h-1.5 flex-1 rounded-full bg-brand-line">
                <div className="h-full rounded-full bg-brand-navy" style={{ width: `${[100, 82, 54, 18][i]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MiniChrome>
  );
}

export function MiniResidentialUI() {
  return (
    <MiniChrome url="app.vertexcms.com / projects">
      <div className="p-3">
        <p className="text-[11px] font-semibold text-brand-navy">Harbor Residences · Lot 14</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5 text-[9px]">
          <div className="rounded-md border border-brand-line bg-[#FAFBFD] px-2 py-1.5">
            <p className="text-brand-muted">Field</p>
            <p className="font-semibold text-brand-navy">Log submitted</p>
          </div>
          <div className="rounded-md border border-brand-line bg-[#FAFBFD] px-2 py-1.5">
            <p className="text-brand-muted">Client</p>
            <p className="font-semibold text-brand-navy">Update posted</p>
          </div>
        </div>
      </div>
    </MiniChrome>
  );
}

export function MiniCivilUI() {
  return (
    <MiniChrome url="app.vertexcms.com / look-ahead">
      <div className="p-3">
        <p className="text-[11px] font-semibold text-brand-navy">Harbor Point Corridor</p>
        <ul className="mt-2 space-y-1 text-[9px] text-brand-muted">
          <li>Look-ahead · Week of Sep 14</li>
          <li>Workforce · 38 on site</li>
          <li>Safety · Inspection complete</li>
        </ul>
      </div>
    </MiniChrome>
  );
}

function MapMini({ id }: { id: string }) {
  switch (id) {
    case "general-contractors":
    case "project-manager":
      return <MiniGcUI />;
    case "specialty-contractors":
      return <MiniSpecialtyUI />;
    case "owners":
      return <MiniOwnerUI />;
    case "commercial":
      return <MiniCommercialUI />;
    case "residential":
      return <MiniResidentialUI />;
    case "civil":
      return <MiniCivilUI />;
    default:
      return (
        <MiniChrome url="app.vertexcms.com">
          <div className="p-3">
            <p className="text-[11px] font-semibold text-brand-navy">Vertex CMS</p>
            <p className="mt-1 text-[10px] text-brand-muted">Connected project record · Riverside Medical Center</p>
          </div>
        </MiniChrome>
      );
  }
}

export function InteractiveSolutionMap() {
  const [activeId, setActiveId] = useState<(typeof MAP_NODES)[number]["id"]>("general-contractors");
  const active = MAP_NODES.find((n) => n.id === activeId) ?? MAP_NODES[0];
  const groups = useMemo(
    () =>
      [
        { id: "business", label: "Business", items: MAP_NODES.filter((n) => n.group === "business") },
        { id: "project", label: "Project type", items: MAP_NODES.filter((n) => n.group === "project") },
        { id: "role", label: "Role", items: MAP_NODES.filter((n) => n.group === "role") },
      ] as const,
    []
  );

  function NodeButton({ node }: { node: (typeof MAP_NODES)[number] }) {
    const selected = node.id === active.id;
    return (
      <button
        type="button"
        onMouseEnter={() => setActiveId(node.id)}
        onFocus={() => setActiveId(node.id)}
        onClick={() => setActiveId(node.id)}
        aria-pressed={selected}
        className={
          "w-full rounded-sm border px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
          (selected
            ? "border-brand-orange bg-brand-orange/10 text-brand-navy"
            : "border-brand-line bg-white text-brand-navy hover:border-brand-navy/25")
        }
      >
        <span className="block text-[12px] font-semibold">{node.label}</span>
      </button>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_28px_70px_-40px_rgba(8,35,63,0.45)]">
      <div className="flex items-center justify-between gap-3 border-b border-brand-line bg-[#F7F9FC] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]/90" />
          </span>
          <p className="truncate text-[11px] font-semibold text-brand-navy">Vertex CMS · Solution Map</p>
        </div>
        <p className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted sm:block">
          Hover a node to inspect
        </p>
      </div>

      <div className="relative bg-[#FAFBFD] p-4 sm:p-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(8,35,63,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="relative grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(180px,220px)_minmax(0,1fr)] lg:gap-8">
          <div className="space-y-5">
            {groups.slice(0, 2).map((group) => (
              <div key={group.id}>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                  {group.label}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((node) => (
                    <li key={node.id}>
                      <NodeButton node={node} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:self-stretch">
            <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-brand-line" aria-hidden="true" />
            <div
              className={
                "relative z-10 w-full rounded-sm border px-4 py-6 text-center transition " +
                (active.group ? "border-brand-orange/50 bg-brand-navy" : "border-brand-navy bg-brand-navy")
              }
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Platform</p>
              <p className="mt-2 font-display text-lg font-bold text-white">Vertex CMS</p>
              <p className="mt-2 text-[11px] leading-snug text-slate-300">
                One connected operating system
              </p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
                → {active.label}
              </p>
            </div>
          </div>

          <div className="lg:hidden rounded-sm border border-brand-navy bg-brand-navy px-4 py-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Platform</p>
            <p className="mt-1 font-display text-lg font-bold text-white">Vertex CMS</p>
            <p className="mt-1 text-[11px] text-slate-300">Connected to {active.label}</p>
          </div>

          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Role</p>
            <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
              {groups[2].items.map((node) => (
                <li key={node.id}>
                  <NodeButton node={node} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-px border-t border-brand-line bg-brand-line lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="bg-white p-4 sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
            {active.group === "business" ? "Business" : active.group === "project" ? "Project type" : "Role"}
          </p>
          <p className="mt-1 font-display text-xl font-bold text-brand-navy">{active.label}</p>
          <ul className="mt-3 space-y-1.5">
            {active.capabilities.map((cap) => (
              <li key={cap} className="flex gap-2 text-[13px] text-brand-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                {cap}
              </li>
            ))}
          </ul>
          <Link href={active.href} className="btn-ghost mt-4 text-[12px]">
            Open solution
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="bg-[#F7F9FC] p-4 sm:p-5">
          <MapMini id={active.id} />
        </div>
      </div>
    </div>
  );
}

export function PlatformArchitectureVisual() {
  const [activeId, setActiveId] = useState<(typeof PLATFORM_STACKS)[number]["id"]>("general-contractors");
  const active = PLATFORM_STACKS.find((s) => s.id === activeId) ?? PLATFORM_STACKS[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-12">
      <div className="flex flex-col">
        {PLATFORM_STACKS.map((stack, index) => {
          const selected = stack.id === active.id;
          return (
            <button
              key={stack.id}
              type="button"
              onClick={() => setActiveId(stack.id)}
              className={
                "border-l-2 px-4 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                (selected
                  ? "border-brand-orange bg-white"
                  : "border-brand-line bg-transparent hover:border-brand-navy/30")
              }
            >
              <span className="font-mono text-[10px] font-bold text-brand-orange">0{index + 1}</span>
              <span className="mt-1 block font-display text-xl font-bold text-brand-navy">{stack.label}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Solution</p>
        <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{active.label}</p>
        <p className="mt-2 text-[13px] text-brand-muted">uses the same platform through</p>

        <ol className="mt-6">
          {active.layers.map((layer, i) => (
            <li key={layer} className="relative pl-6">
              {i < active.layers.length - 1 ? (
                <span className="absolute left-[7px] top-6 h-[calc(100%-8px)] w-px bg-brand-line" aria-hidden="true" />
              ) : null}
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-brand-navy bg-white" aria-hidden="true" />
              <div className="mb-3 border border-brand-line bg-white px-4 py-3">
                <p className="text-[14px] font-semibold text-brand-navy">{layer}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Documented capabilities
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {active.capabilities.map((cap) => (
            <li key={cap} className="border border-brand-line bg-white px-2.5 py-1 text-[11px] font-medium text-brand-navy">
              {cap}
            </li>
          ))}
        </ul>
        <Link href={active.href} className="btn-primary mt-6 w-full sm:w-auto">
          Explore {active.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function WorkflowOperatingModel() {
  return (
    <div className="overflow-x-auto [scrollbar-width:thin]">
      <ol className="flex min-w-[920px] items-stretch gap-0">
        {WORKFLOW_STAGES.map((stage, index) => (
          <li key={stage.id} className="relative flex min-w-[150px] flex-1 flex-col border border-brand-line bg-white">
            {index < WORKFLOW_STAGES.length - 1 ? (
              <span
                className="absolute -right-2 top-5 z-10 hidden h-4 w-4 rotate-45 border-r border-t border-brand-line bg-white lg:block"
                aria-hidden="true"
              />
            ) : null}
            <div className="border-b border-brand-line bg-[#FAFBFD] px-3 py-3">
              <p className="font-mono text-[10px] font-bold text-brand-orange">0{index + 1}</p>
              <p className="mt-1 text-[13px] font-bold uppercase tracking-wide text-brand-navy">{stage.label}</p>
            </div>
            <ul className="flex flex-1 flex-col gap-1 p-3">
              {stage.modules.map((mod) => (
                <li key={mod.label}>
                  <Link href={mod.href} className="block text-[12px] text-brand-muted transition hover:text-brand-navy">
                    {mod.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ConnectedEcosystemMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A1F35]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Vertex CMS</p>
        <p className="mt-1 text-[14px] font-semibold text-white">Connected operating platform</p>
      </div>
      <ul className="divide-y divide-white/10">
        {PLATFORM_CATEGORIES.map((cat) => (
          <li key={cat.title} className="grid gap-3 px-5 py-4 sm:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] sm:items-center">
            <Link href={cat.href} className="text-[13px] font-semibold text-white hover:text-brand-orange">
              {cat.title}
            </Link>
            <ul className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300 transition hover:border-white/25 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LivePreviewStage({
  preview,
  label,
  dark = false,
}: {
  preview: PreviewKey;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-4 sm:p-5 " +
        (dark
          ? "border-white/10 bg-gradient-to-br from-[#061525] via-[#0A1F35] to-[#08233F] "
          : "border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] ")
      }
    >
      <p
        className={
          "mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] " +
          (dark ? "text-slate-400" : "text-brand-muted")
        }
      >
        Vertex CMS · {label}
      </p>
      <FeatureProductPreview
        preview={preview}
        dark={dark}
        framed
        className="min-h-[240px] sm:min-h-[300px] lg:min-h-[380px]"
      />
    </div>
  );
}
