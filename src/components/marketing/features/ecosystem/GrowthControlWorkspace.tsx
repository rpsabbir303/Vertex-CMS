"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { crmFeatureDetail } from "@/lib/marketing/features/crmDetail";
import { customerPortalsFeatureDetail } from "@/lib/marketing/features/customerPortalsDetail";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import { leadsFeatureDetail } from "@/lib/marketing/features/leadsDetail";
import { websiteBuilderFeatureDetail } from "@/lib/marketing/features/websiteBuilderDetail";
import {
  GROWTH_ACTIVE_STAGE_INDEX,
  GROWTH_FLOW,
  GROWTH_OPPORTUNITY,
  GROWTH_PIPELINE_STAGES,
} from "./growthControlDemo";

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

function GrowthFlowStrip({ activeSlug }: { activeSlug: string }) {
  const slugToStep: Record<string, string> = {
    "website-builder": "Website",
    leads: "Lead",
    crm: "CRM",
    "customer-portals": "Portal",
  };
  const activeStep = slugToStep[activeSlug] ?? "CRM";

  return (
    <ol className="flex flex-wrap items-center gap-1 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted sm:text-[10px]">
      {GROWTH_FLOW.map((step, i) => (
        <li key={step} className="flex items-center gap-1">
          <span className={step === activeStep ? "text-brand-orange" : "text-brand-navy/70"}>{step}</span>
          {i < GROWTH_FLOW.length - 1 ? (
            <span className="text-brand-blue/40" aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function WebsiteModule() {
  return (
    <>
      <p className="mb-3 text-[12px] leading-relaxed text-brand-muted">{websiteBuilderFeatureDetail.intro.body}</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {websiteBuilderFeatureDetail.templates.items.slice(0, 4).map((t) => (
          <li key={t.name} className="border border-brand-line/80 bg-[#FAFBFC] px-3 py-2.5">
            <p className="text-[11px] font-semibold text-brand-navy">{t.name}</p>
            <p className="mt-1 text-[10px] leading-snug text-brand-muted">{t.body}</p>
          </li>
        ))}
      </ul>
      <ShellPanel label="CMS-connected content" className="mt-3">
        <ul className="space-y-1.5 text-[11px] text-brand-navy">
          {websiteBuilderFeatureDetail.cmsImport.flows.slice(0, 4).map((f) => (
            <li key={f.source}>
              <span className="text-brand-muted">{f.source}</span>
              <span className="text-brand-blue"> → </span>
              {f.target}
            </li>
          ))}
        </ul>
      </ShellPanel>
    </>
  );
}

function LeadsModule() {
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{leadsFeatureDetail.pipeline.body}</p>
      <ol className="space-y-2">
        {leadsFeatureDetail.workflow.steps.map((step) => (
          <li key={step.n} className="flex gap-3 border border-brand-line/80 bg-[#FAFBFC] px-3 py-2.5">
            <span className="font-mono text-[10px] font-bold text-brand-orange">{step.n}</span>
            <div>
              <p className="text-[12px] font-semibold text-brand-navy">{step.title}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function CrmModule() {
  const opp = GROWTH_OPPORTUNITY;
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{crmFeatureDetail.workspace.body}</p>
      <ShellPanel label="Opportunity pipeline">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          {GROWTH_PIPELINE_STAGES.map((stage, i) => (
            <div
              key={stage}
              className={
                "min-w-[6.5rem] shrink-0 rounded-sm border px-2 py-2 " +
                (i === GROWTH_ACTIVE_STAGE_INDEX
                  ? "border-brand-orange/40 bg-brand-orange/[0.05]"
                  : "border-brand-line/80 bg-white")
              }
            >
              <p
                className={
                  "text-[10px] font-semibold " + (i === GROWTH_ACTIVE_STAGE_INDEX ? "text-brand-orange" : "text-brand-navy")
                }
              >
                {stage}
              </p>
              <p className="mt-1 text-[9px] text-brand-muted">
                {i === GROWTH_ACTIVE_STAGE_INDEX ? opp.activeInStage : i === 5 ? "1 won" : "—"}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 border border-brand-orange/25 bg-brand-orange/[0.04] p-3">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[13px] font-semibold text-brand-navy">{opp.name}</p>
              <p className="mt-1 text-[11px] text-brand-muted">
                Client · {opp.client} · {opp.type}
              </p>
            </div>
            <span className="rounded-sm border border-brand-orange/30 bg-brand-orange/[0.08] px-2 py-0.5 text-[9px] font-semibold text-brand-orange">
              {opp.stage}
            </span>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ["Opportunity value", opp.value],
              ["Expected close", opp.expectedClose],
              ["Project type", opp.type],
              ["Win / loss", opp.winLoss],
            ].map(([label, value]) => (
              <div key={label} className="border border-brand-line/70 bg-white px-2 py-1.5">
                <dt className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{label}</dt>
                <dd
                  className={
                    "mt-0.5 text-[11px] font-semibold " +
                    (label === "Project type" ? "text-brand-blue" : label === "Win / loss" ? "text-brand-orange" : "text-brand-navy")
                  }
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </ShellPanel>
    </>
  );
}

function PortalsModule() {
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{customerPortalsFeatureDetail.controlledAccess.body}</p>
      <ShellPanel label="Portal access by role">
        <ul className="flex flex-wrap gap-1.5">
          {customerPortalsFeatureDetail.controlledAccess.roles.map((role) => (
            <li
              key={role}
              className="border border-brand-line/80 bg-[#F6F8FB] px-2 py-0.5 text-[10px] font-semibold text-brand-navy"
            >
              {role}
            </li>
          ))}
        </ul>
      </ShellPanel>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {customerPortalsFeatureDetail.capabilities.items.slice(0, 4).map((item) => (
          <li key={item.title} className="border border-brand-line/80 px-3 py-2">
            <p className="text-[11px] font-semibold text-brand-navy">{item.title}</p>
            <p className="mt-0.5 text-[10px] leading-snug text-brand-muted">{item.body}</p>
          </li>
        ))}
      </ul>
      <ol className="mt-3 space-y-2">
        {customerPortalsFeatureDetail.howItWorks.steps.map((s) => (
          <li key={s.n} className="flex gap-2 text-[11px]">
            <span className="font-mono font-bold text-brand-orange">{s.n}</span>
            <span className="text-brand-navy">
              <span className="font-semibold">{s.title}</span>
              <span className="text-brand-muted"> — {s.body}</span>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

function MainGrowthModule({ area }: { area: HubFeatureArea }) {
  const detail = getFeatureAreaByAreaId(area.id);
  return (
    <div className="min-w-0">
      <p className="font-sans text-[15px] font-semibold text-brand-navy">{area.label}</p>
      <p className="mt-1 text-[12px] leading-relaxed text-brand-muted">{detail?.heroTagline ?? area.description}</p>
      <div className="mt-4">
        {area.slug === "website-builder" ? <WebsiteModule /> : null}
        {area.slug === "leads" ? <LeadsModule /> : null}
        {area.slug === "crm" ? <CrmModule /> : null}
        {area.slug === "customer-portals" ? <PortalsModule /> : null}
      </div>
    </div>
  );
}

type Props = {
  area: HubFeatureArea;
  section: HubModuleSection;
  onSelect: (area: HubFeatureArea) => void;
};

export function GrowthControlWorkspace({ area, section, onSelect }: Props) {
  const orderedAreas = section.workflow
    .filter((step) => step.slug)
    .map((step) => section.areas.find((a) => a.slug === step.slug))
    .filter((a): a is HubFeatureArea => Boolean(a));

  const stageLabels = ["Website", "Lead", "CRM", "Portal"];

  return (
    <div
      className="min-w-0 overflow-hidden rounded-2xl border border-brand-line/80 bg-gradient-to-b from-[#FAFBFD] to-white"
      data-design-layer="GrowthControlWorkspace"
    >
      <div className="px-4 pt-4 sm:px-5 sm:pt-5">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Growth pipeline</p>
        <GrowthFlowStrip activeSlug={area.slug} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 px-3 sm:grid-cols-4 sm:px-4" role="tablist" aria-label="Business growth stages">
        {orderedAreas.map((mod, index) => {
          const selected = mod.id === area.id;
          return (
            <button
              key={mod.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onSelect(mod)}
              className={
                "relative min-w-0 rounded-xl border px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                (selected
                  ? "border-brand-orange/40 bg-white shadow-[0_8px_24px_-16px_rgba(8,35,63,0.25)]"
                  : "border-brand-line/70 bg-white/70 hover:border-brand-blue/30 hover:bg-white")
              }
            >
              <p className="font-mono text-[10px] font-bold text-brand-orange">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-sans text-[12px] font-semibold leading-snug text-brand-navy">{mod.label}</p>
              <p className="mt-0.5 text-[10px] text-brand-muted">{stageLabels[index] ?? mod.tags[0]}</p>
              {index < orderedAreas.length - 1 ? (
                <span className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-brand-blue/30 sm:inline" aria-hidden="true">
                  →
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 border-t border-brand-line/70 p-4 sm:p-5">
        <MainGrowthModule area={area} />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-brand-line/60 pt-4">
          <p className="max-w-lg text-[12px] text-brand-muted">
            Connected to project delivery — win work, then keep stakeholders on the same project record.
          </p>
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
