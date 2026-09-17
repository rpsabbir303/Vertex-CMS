"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea } from "@/lib/marketing/features/hub";
import { projectsFeatureDetail } from "@/lib/marketing/features/projectsDetail";
import { schedulingFeatureDetail } from "@/lib/marketing/features/schedulingDetail";
import {
  PM_CHANGE_ORDER,
  PM_DEMO_PROJECT,
  PM_DOCUMENT_FOLDERS,
  PM_INDICATORS,
  PM_OPEN_RFIS,
  PM_OVERVIEW,
  PM_SUBMITTALS,
  PM_SCHEDULE_MODULES,
  PM_WORKFLOW_STEPS,
} from "./projectCommandDemo";

const PANEL = "min-w-0 border border-brand-line/90 bg-white shadow-[0_1px_0_0_rgba(8,35,63,0.04)]";
const PANEL_LABEL =
  "border-b border-brand-line/80 bg-[#F6F8FB] px-3 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted";

function ShellPanel({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={PANEL + " " + className}>
      <p className={PANEL_LABEL}>{label}</p>
      <div className="p-3">{children}</div>
    </div>
  );
}

function ConnectedModuleRail({ activeLabel }: { activeLabel: string }) {
  const modules = PM_WORKFLOW_STEPS.filter((s) => s !== "Projects");
  const projectActive = activeLabel === "Projects";
  return (
    <div className="mt-3 border-t border-brand-line/70 pt-3" aria-hidden="true">
      <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">On this project</p>
      <ul className="relative mt-2 space-y-0 pl-3 font-sans text-[11px]">
        <li className={"relative " + (projectActive ? "font-semibold text-brand-navy" : "text-brand-muted")}>
          <span className="absolute -left-3 top-2 h-px w-2 bg-brand-line" />
          {projectActive ? (
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
          ) : null}
          Project
          {projectActive ? <span className="mt-0.5 block h-0.5 w-8 bg-brand-orange/80" aria-hidden="true" /> : null}
        </li>
        {modules.map((mod) => (
          <li key={mod} className="relative border-l border-brand-line/80 py-1.5 pl-3">
            <span
              className={
                "block " +
                (mod === activeLabel ? "font-semibold text-brand-navy" : "text-brand-muted")
              }
            >
              {mod === activeLabel ? (
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              ) : null}
              {mod}
            </span>
            {mod === activeLabel ? <span className="mt-0.5 block h-0.5 w-8 bg-brand-orange/80" aria-hidden="true" /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MainModule({ area }: { area: HubFeatureArea }) {
  const detail = getFeatureAreaByAreaId(area.id);

  if (area.slug === "projects") {
    return (
      <ShellPanel label="Project overview">
        <p className="font-sans text-[14px] font-semibold text-brand-navy">{PM_DEMO_PROJECT}</p>
        <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">{projectsFeatureDetail.workspace.body}</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {projectsFeatureDetail.workspace.highlights.map((h) => (
            <li key={h.label} className="border border-brand-line/80 bg-[#F6F8FB] px-2.5 py-2">
              <p className="text-[11px] font-semibold text-brand-navy">{h.label}</p>
              <p className="mt-0.5 text-[10px] text-brand-muted">{h.detail}</p>
            </li>
          ))}
        </ul>
      </ShellPanel>
    );
  }

  if (area.slug === "scheduling") {
    return (
      <ShellPanel label="Project timeline">
        <p className="text-[12px] text-brand-muted">{schedulingFeatureDetail.cpm.body}</p>
        <ul className="mt-4 space-y-3">
          {PM_SCHEDULE_MODULES.map((phase) => (
            <li key={phase.label}>
              <div className="mb-1 flex justify-between gap-2 text-[11px]">
                <span className="font-semibold text-brand-navy">{phase.label}</span>
                <span className="text-brand-muted">On project schedule</span>
              </div>
              <div className="h-2 overflow-hidden rounded-sm bg-brand-line/60">
                <div className="h-full rounded-sm bg-brand-blue/60" style={{ width: phase.width }} />
              </div>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {schedulingFeatureDetail.cpm.points.map((p) => (
            <li key={p} className="border border-brand-line/80 bg-[#F6F8FB] px-2 py-0.5 text-[10px] text-brand-navy">
              {p}
            </li>
          ))}
        </ul>
      </ShellPanel>
    );
  }

  if (area.slug === "documents") {
    return (
      <ShellPanel label="Document center">
        <p className="text-[12px] leading-relaxed text-brand-muted">{detail?.heroTagline ?? area.description}</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[240px] text-left text-[11px]">
            <thead>
              <tr className="border-b border-brand-line/80 text-brand-muted">
                <th className="pb-2 font-semibold uppercase tracking-wide">Folder</th>
                <th className="pb-2 font-semibold uppercase tracking-wide">On project</th>
              </tr>
            </thead>
            <tbody>
              {PM_DOCUMENT_FOLDERS.map((folder) => (
                <tr key={folder} className="border-b border-brand-line/50">
                  <td className="py-2 font-medium text-brand-navy">{folder}</td>
                  <td className="py-2 text-brand-blue">Connected</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShellPanel>
    );
  }

  if (area.slug === "rfis") {
    return (
      <ShellPanel label="Open RFIs">
        <ul className="space-y-2">
          {PM_OPEN_RFIS.map((row) => (
            <li key={row.id} className="border border-brand-line/80 bg-[#FAFBFC] px-3 py-2.5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="font-mono text-[11px] font-semibold text-brand-orange">{row.id}</p>
                <span className="rounded-sm border border-brand-orange/25 bg-brand-orange/[0.06] px-1.5 py-0.5 text-[9px] font-semibold uppercase text-brand-orange">
                  {row.status}
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-snug text-brand-navy">{row.subject}</p>
            </li>
          ))}
        </ul>
      </ShellPanel>
    );
  }

  if (area.slug === "submittals") {
    return (
      <ShellPanel label="Submittal register">
        <ul className="space-y-2">
          {PM_SUBMITTALS.map((row) => (
            <li key={row.id} className="border border-brand-line/80 bg-[#FAFBFC] px-3 py-2.5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="font-mono text-[11px] font-semibold text-brand-navy">{row.id}</p>
                <span className="text-[10px] font-semibold text-brand-blue">{row.status}</span>
              </div>
              <p className="mt-1 text-[12px] leading-snug text-brand-muted">{row.item}</p>
              <p className="mt-1 text-[10px] text-brand-muted">{PM_DEMO_PROJECT}</p>
            </li>
          ))}
        </ul>
      </ShellPanel>
    );
  }

  return (
    <ShellPanel label="Change order">
      <p className="font-mono text-[12px] font-semibold text-brand-orange">{PM_CHANGE_ORDER.id}</p>
      <p className="mt-1 text-[13px] font-semibold text-brand-navy">{PM_CHANGE_ORDER.title}</p>
      <p className="mt-2 text-[12px] text-brand-muted">{detail?.heroTagline ?? area.description}</p>
      <dl className="mt-3 space-y-2 text-[11px]">
        <div className="flex justify-between gap-3 border border-brand-line/80 bg-[#F6F8FB] px-2.5 py-2">
          <dt className="text-brand-muted">Status</dt>
          <dd className="font-semibold text-brand-navy">{PM_CHANGE_ORDER.status}</dd>
        </div>
        <div className="flex justify-between gap-3 border border-brand-line/80 bg-[#F6F8FB] px-2.5 py-2">
          <dt className="text-brand-muted">Contract ref</dt>
          <dd className="font-semibold text-brand-navy">{PM_CHANGE_ORDER.contract}</dd>
        </div>
      </dl>
    </ShellPanel>
  );
}

type Props = {
  area: HubFeatureArea;
  areas: HubFeatureArea[];
  onSelect: (area: HubFeatureArea) => void;
};

export function ProjectCommandWorkspace({ area, areas, onSelect }: Props) {
  return (
    <div
      className="min-w-0 overflow-hidden border border-brand-line/90 border-l-[3px] border-l-brand-navy bg-white"
      data-design-layer="ProjectCommandWorkspace"
    >
      <header className="border-b border-brand-line/80 bg-[#F6F8FB] px-4 py-4 sm:px-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
              Project command center
            </p>
            <p className="mt-1 font-display text-[1.35rem] leading-tight text-brand-navy sm:text-[1.5rem]">
              {PM_DEMO_PROJECT}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="border border-brand-line bg-white px-2.5 py-1 font-semibold text-brand-navy">
              {PM_OVERVIEW.status}
            </span>
            <span className="border border-brand-line bg-white px-2.5 py-1 text-brand-navy">PM · {PM_OVERVIEW.manager}</span>
          </div>
        </div>
      </header>

      <div className="grid min-w-0 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]">
        <nav
          className="border-b border-brand-line/80 bg-white p-2 lg:border-b-0 lg:border-r lg:p-3"
          aria-label="Project workspace modules"
        >
          <p className="mb-2 hidden font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted lg:block">
            Modules
          </p>
          <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible [scrollbar-width:thin]" role="tablist">
            {areas.map((mod) => {
              const selected = mod.id === area.id;
              return (
                <li key={mod.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => onSelect(mod)}
                    className={
                      "w-full rounded-sm px-3 py-2 text-left font-sans text-[11px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:text-[12px] " +
                      (selected
                        ? "bg-brand-navy text-white shadow-[inset_3px_0_0_0_#FF6A00] lg:shadow-[inset_3px_0_0_0_#FF6A00]"
                        : "text-brand-muted hover:bg-[#FAFBFC] hover:text-brand-navy")
                    }
                  >
                    {mod.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="min-w-0">
          <p className="border-b border-brand-line/70 px-3 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted sm:px-4">
            {PM_WORKFLOW_STEPS.map((step, i) => (
              <span key={step}>
                <span className={step === area.label ? "text-brand-orange" : ""}>{step}</span>
                {i < PM_WORKFLOW_STEPS.length - 1 ? " → " : ""}
              </span>
            ))}
          </p>
          <div className="grid min-w-0 gap-3 p-3 sm:p-4 lg:grid-cols-12 lg:items-start lg:gap-4">
        <div className="min-w-0 lg:col-span-3">
          <ShellPanel label="Project context">
            <dl className="space-y-2 text-[11px]">
              <div>
                <dt className="text-brand-muted">Project</dt>
                <dd className="font-semibold text-brand-navy">{PM_DEMO_PROJECT}</dd>
              </div>
              <div>
                <dt className="text-brand-muted">Status</dt>
                <dd className="font-semibold text-brand-navy">{PM_OVERVIEW.status}</dd>
              </div>
              <div>
                <dt className="text-brand-muted">Team</dt>
                <dd className="text-brand-navy">{PM_OVERVIEW.team}</dd>
              </div>
              <div>
                <dt className="text-brand-muted">Progress</dt>
                <dd className="text-brand-navy">{PM_OVERVIEW.progress}</dd>
              </div>
            </dl>
            <ConnectedModuleRail activeLabel={area.label} />
            <p className="mt-3 border-t border-brand-line/70 pt-3 text-[10px] leading-relaxed text-brand-muted">
              {area.description}
            </p>
          </ShellPanel>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <MainModule area={area} />
        </div>

        <div className="min-w-0 lg:col-span-3">
          <ShellPanel label="Project activity">
            <ul className="space-y-2">
              {PM_INDICATORS.map((label) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-2 border border-brand-line/80 bg-[#FAFBFC] px-2 py-1.5"
                >
                  <span className="text-[11px] text-brand-navy">{label}</span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[10px] leading-relaxed text-brand-muted">{projectsFeatureDetail.dashboard.body}</p>
          </ShellPanel>
        </div>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-line/80 bg-[#FAFBFC] px-3 py-3 sm:px-4">
        <p className="mb-2 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Connected coordination on this project
        </p>
        <div className="grid min-w-0 gap-2 md:grid-cols-3">
          <div className={"min-w-0 p-2.5 " + PANEL}>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">RFIs</p>
            {PM_OPEN_RFIS.map((r) => (
              <p key={r.id} className="mt-1 truncate text-[11px] text-brand-navy">
                <span className="font-mono text-brand-orange">{r.id}</span> · {r.status}
              </p>
            ))}
          </div>
          <div className={"min-w-0 p-2.5 " + PANEL}>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Submittals</p>
            {PM_SUBMITTALS.map((s) => (
              <p key={s.id} className="mt-1 truncate text-[11px] text-brand-navy">
                <span className="font-mono text-brand-navy">{s.id}</span> · {s.status}
              </p>
            ))}
          </div>
          <div className={"min-w-0 p-2.5 " + PANEL}>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Change orders</p>
            <p className="mt-1 text-[11px] text-brand-navy">
              <span className="font-mono text-brand-orange">{PM_CHANGE_ORDER.id}</span> · {PM_CHANGE_ORDER.status}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Link
            href={featureAreaPath(area.slug)}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-3.5 py-2 font-sans text-[12px] font-semibold text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
          >
            Explore {area.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
