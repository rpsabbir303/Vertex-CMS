"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { aiaPayApplicationsFeatureDetail } from "@/lib/marketing/features/aiaPayApplicationsDetail";
import { billingFeatureDetail } from "@/lib/marketing/features/billingDetail";
import { cashFlowFeatureDetail } from "@/lib/marketing/features/cashFlowDetail";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea } from "@/lib/marketing/features/hub";
import { nativeAccountingFeatureDetail } from "@/lib/marketing/features/nativeAccountingDetail";
import { wipFeatureDetail } from "@/lib/marketing/features/wipDetail";
import { budgetJobCostFeatureDetail } from "@/lib/marketing/features/budgetJobCostDetail";
import {
  FM_CONTRACT_SUMMARY,
  FM_COST_CODE_BARS,
  FM_DEMO_PROJECT,
  FM_JOB_COST_SUMMARY,
  FM_SLUG_TO_FLOW_STEP,
  FM_WORKFLOW_STEPS,
} from "./financialControlDemo";

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

function FinancialWorkflowStrip({ activeStep }: { activeStep: string }) {
  return (
    <div className="border border-brand-line/80 bg-[#FAFBFC] px-3 py-2.5 sm:px-4" aria-label="Connected financial workflow">
      <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        Connected financial workflow
      </p>
      <ol className="mt-2 flex flex-wrap items-center gap-x-0.5 gap-y-1.5">
        {FM_WORKFLOW_STEPS.map((step, index) => {
          const active = step === activeStep;
          return (
            <li key={step} className="flex items-center gap-0.5">
              <span
                className={
                  "rounded-sm border px-1.5 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.04em] sm:text-[10px] " +
                  (active
                    ? "border-brand-orange/40 bg-white text-brand-navy shadow-[inset_0_-2px_0_0_#FF6A00]"
                    : "border-brand-line/70 bg-white text-brand-muted")
                }
              >
                {step}
              </span>
              {index < FM_WORKFLOW_STEPS.length - 1 ? (
                <svg width="10" height="10" viewBox="0 0 16 16" className="shrink-0 text-brand-blue/35" aria-hidden="true">
                  <path
                    d="M3 8h8M9 5l3 3-3 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function FlowPositionRail({ activeStep }: { activeStep: string }) {
  return (
    <div className="hidden min-w-0 lg:block">
      <ShellPanel label="Money flow">
        <ol className="space-y-0 border-l border-brand-line/80 pl-3">
          {FM_WORKFLOW_STEPS.map((step) => {
            const active = step === activeStep;
            return (
              <li key={step} className="relative py-1.5 pl-2">
                {active ? (
                  <span className="absolute -left-[13px] top-3 h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
                ) : null}
                <span className={"text-[11px] " + (active ? "font-semibold text-brand-navy" : "text-brand-muted")}>{step}</span>
                {active ? <span className="mt-0.5 block h-0.5 w-10 bg-brand-orange/70" aria-hidden="true" /> : null}
              </li>
            );
          })}
        </ol>
      </ShellPanel>
    </div>
  );
}

function BudgetJobCostModule() {
  return (
    <>
      <p className="mb-3 text-[12px] leading-relaxed text-brand-muted">{budgetJobCostFeatureDetail.dashboard.body}</p>
      <ShellPanel label="Budget vs actual">
        <ul className="space-y-3">
          {FM_COST_CODE_BARS.map((row) => (
            <li key={row.label}>
              <div className="mb-1 flex justify-between gap-2 text-[11px]">
                <span className="font-semibold text-brand-navy">{row.label}</span>
                <span className={row.warn ? "font-semibold text-brand-orange" : "text-brand-muted"}>
                  Actual vs budget
                </span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-sm bg-brand-line/50">
                <div
                  className="absolute inset-y-0 left-0 rounded-sm bg-brand-blue/25"
                  style={{ width: `${row.budgetPct}%` }}
                  aria-hidden="true"
                />
                <div
                  className={"absolute inset-y-0 left-0 rounded-sm " + (row.warn ? "bg-brand-orange/55" : "bg-brand-blue/55")}
                  style={{ width: `${row.actualPct}%` }}
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </ShellPanel>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {FM_JOB_COST_SUMMARY.slice(0, 6).map((m) => (
          <div key={m.label} className="border border-brand-line/80 bg-[#FAFBFC] px-2 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
            <p className="mt-0.5 font-mono text-[12px] font-semibold text-brand-navy">{m.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function NativeAccountingModule() {
  const steps = nativeAccountingFeatureDetail.workflow.steps;
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{nativeAccountingFeatureDetail.project.body}</p>
      <div className="grid gap-3 lg:grid-cols-2">
        <ShellPanel label="Project financial data">
          <p className="text-[12px] font-semibold text-brand-navy">{FM_DEMO_PROJECT}</p>
          <ul className="mt-2 space-y-1 text-[11px] text-brand-muted">
            {nativeAccountingFeatureDetail.project.points.map((p) => (
              <li key={p}>→ {p}</li>
            ))}
          </ul>
          <p className="mt-3 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-blue">
            ↓ Native accounting ↓
          </p>
        </ShellPanel>
        <ShellPanel label="General ledger activity">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[220px] text-left text-[11px]">
              <thead>
                <tr className="border-b border-brand-line/80 text-brand-muted">
                  <th className="pb-2 font-semibold">Account</th>
                  <th className="pb-2 font-semibold">Activity</th>
                  <th className="pb-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {nativeAccountingFeatureDetail.dashboard.metrics.slice(0, 4).map((m) => (
                  <tr key={m.label} className="border-b border-brand-line/50">
                    <td className="py-2 font-medium text-brand-navy">{m.label}</td>
                    <td className="py-2 font-mono text-brand-navy">{m.value}</td>
                    <td className="py-2 text-brand-blue">Posted</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ShellPanel>
      </div>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-2 border border-brand-line/80 bg-[#FAFBFC] px-2.5 py-2">
            <span className="font-mono text-[10px] font-bold text-brand-orange">{s.n}</span>
            <div>
              <p className="text-[11px] font-semibold text-brand-navy">{s.title}</p>
              <p className="text-[10px] text-brand-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function BillingModule() {
  const row = cashFlowFeatureDetail.inflows.rows[0];
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{billingFeatureDetail.workspace.body}</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {["Project", "Billing", "AR"].map((node, i) => (
          <div key={node} className="flex items-center gap-2">
            <span className="flex-1 border border-brand-line/90 bg-white px-2 py-2 text-center text-[11px] font-semibold text-brand-navy shadow-[0_1px_0_0_rgba(8,35,63,0.04)]">
              {node}
            </span>
            {i < 2 ? <span className="text-brand-blue/50" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
      <ShellPanel label="Billing register" className="mt-3">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-[11px]">
            <thead>
              <tr className="border-b border-brand-line/80 text-brand-muted">
                <th className="pb-2 font-semibold">Invoice</th>
                <th className="pb-2 font-semibold">Project</th>
                <th className="pb-2 font-semibold">Amount</th>
                <th className="pb-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-line/50">
                <td className="py-2 font-mono font-semibold text-brand-navy">{row.invoice}</td>
                <td className="py-2 text-brand-navy">{row.project}</td>
                <td className="py-2 font-mono text-brand-navy">{row.amount}</td>
                <td className="py-2 text-brand-blue">{row.status}</td>
              </tr>
              {cashFlowFeatureDetail.inflows.rows.slice(1).map((r) => (
                <tr key={r.invoice} className="border-b border-brand-line/50">
                  <td className="py-2 font-mono text-brand-navy">{r.invoice}</td>
                  <td className="py-2 text-brand-muted">{r.project}</td>
                  <td className="py-2 font-mono text-brand-muted">{r.amount}</td>
                  <td className="py-2 text-brand-muted">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShellPanel>
    </>
  );
}

function PayAppModule() {
  const steps = aiaPayApplicationsFeatureDetail.workflow.story;
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{aiaPayApplicationsFeatureDetail.workspace.body}</p>
      <ol className="flex flex-wrap items-center gap-1">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-1">
            <span className="rounded-sm border border-brand-line/80 bg-white px-2 py-1 text-[10px] font-semibold text-brand-navy">
              {step}
            </span>
            {i < steps.length - 1 ? <span className="text-brand-blue/40">→</span> : null}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {aiaPayApplicationsFeatureDetail.workspace.metrics.map((m) => (
          <div key={m.label} className="border border-brand-line/80 bg-[#FAFBFC] px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
            <p className="mt-0.5 font-mono text-[12px] font-semibold text-brand-navy">{m.value}</p>
          </div>
        ))}
      </div>
      <dl className="mt-3 grid gap-2 sm:grid-cols-2">
        {aiaPayApplicationsFeatureDetail.workspace.meta.map((item) => (
          <div key={item.label} className="flex justify-between gap-2 border border-brand-line/80 px-2.5 py-2 text-[11px]">
            <dt className="text-brand-muted">{item.label}</dt>
            <dd className="font-semibold text-brand-navy">{item.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

function WipModule() {
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{wipFeatureDetail.table.body}</p>
      <ShellPanel label="WIP snapshot">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-[11px]">
            <thead>
              <tr className="border-b border-brand-line/80 text-brand-muted">
                {wipFeatureDetail.table.columns.map((col) => (
                  <th key={col} className="pb-2 pr-2 font-semibold uppercase tracking-wide">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {wipFeatureDetail.table.rows.map((r) => (
                <tr
                  key={r.project}
                  className={
                    "border-b border-brand-line/50 " + (r.project === FM_DEMO_PROJECT ? "bg-brand-orange/[0.04]" : "")
                  }
                >
                  <td className="py-2 font-semibold text-brand-navy">{r.project}</td>
                  <td className="py-2 font-mono text-brand-navy">{r.contract}</td>
                  <td className="py-2 font-mono text-brand-muted">{r.budget}</td>
                  <td className="py-2 font-mono text-brand-muted">{r.cost}</td>
                  <td className="py-2 font-mono text-brand-muted">{r.billed}</td>
                  <td className="py-2 text-brand-blue">{r.snapshot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShellPanel>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {wipFeatureDetail.showcase.metrics.map((m) => (
          <div key={m.label} className="border border-brand-line/80 bg-[#FAFBFC] px-2 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
            <p className="mt-0.5 font-mono text-[12px] font-semibold text-brand-navy">{m.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CashFlowModule() {
  const metrics = cashFlowFeatureDetail.showcase.metrics;
  return (
    <>
      <p className="mb-3 text-[12px] text-brand-muted">{cashFlowFeatureDetail.showcase.body}</p>
      <ol className="flex flex-wrap items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-muted">
        {["Expected cash", "Receivables", "Payables", "Cash position"].map((label, i) => (
          <li key={label} className="flex items-center gap-1">
            <span className="rounded-sm border border-brand-line/80 bg-white px-2 py-1 text-brand-navy">{label}</span>
            {i < 3 ? <span className="text-brand-blue/40">↓</span> : null}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="border border-brand-line/80 bg-[#FAFBFC] px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
            <p className="mt-0.5 font-mono text-[12px] font-semibold text-brand-navy">{m.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] text-brand-muted">{cashFlowFeatureDetail.showcase.disclaimer}</p>
    </>
  );
}

function MainFinancialModule({ area }: { area: HubFeatureArea }) {
  const detail = getFeatureAreaByAreaId(area.id);

  return (
    <ShellPanel label={area.label}>
      <p className="mb-3 text-[11px] text-brand-muted">{detail?.heroTagline ?? area.description}</p>
      {area.slug === "budget-job-cost" ? <BudgetJobCostModule /> : null}
      {area.slug === "native-accounting" ? <NativeAccountingModule /> : null}
      {area.slug === "billing" ? <BillingModule /> : null}
      {area.slug === "aia-pay-applications" ? <PayAppModule /> : null}
      {area.slug === "wip" ? <WipModule /> : null}
      {area.slug === "cash-flow" ? <CashFlowModule /> : null}
    </ShellPanel>
  );
}

type Props = {
  area: HubFeatureArea;
  areas: HubFeatureArea[];
  onSelect: (area: HubFeatureArea) => void;
};

export function FinancialControlWorkspace({ area, areas, onSelect }: Props) {
  const flowStep = FM_SLUG_TO_FLOW_STEP[area.slug] ?? "One Financial Picture";

  return (
    <div
      className="min-w-0 overflow-hidden rounded-sm border border-brand-line/90 bg-white ring-1 ring-brand-navy/[0.06]"
      data-design-layer="FinancialControlWorkspace"
    >
      <div className="border-b border-brand-navy/10 bg-brand-navy px-4 py-3 text-white sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-sans text-[13px] font-semibold tracking-tight">Financial control center</p>
          <p className="font-sans text-[12px] text-white/80">{FM_DEMO_PROJECT}</p>
        </div>
      </div>

      <div className="border-b border-brand-line/80 bg-[#F0F4FA] px-3 py-3 sm:px-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {FM_CONTRACT_SUMMARY.map((m) => (
            <div key={m.label} className="min-w-0 border border-brand-line/80 bg-white px-2.5 py-2">
              <p className="truncate text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
              <p className="mt-0.5 truncate font-mono text-[12px] font-semibold text-brand-navy sm:text-[13px]">
                {m.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Committed", value: FM_JOB_COST_SUMMARY.find((m) => m.label === "Committed Cost")?.value ?? "—" },
            { label: "Actual", value: FM_JOB_COST_SUMMARY.find((m) => m.label === "Actual Cost")?.value ?? "—" },
            { label: "Revised budget", value: FM_JOB_COST_SUMMARY.find((m) => m.label === "Revised Budget")?.value ?? "—" },
            { label: "Variance", value: FM_JOB_COST_SUMMARY.find((m) => m.label === "Variance")?.value ?? "—" },
          ].map((m) => (
            <div key={m.label} className="min-w-0 border border-brand-line/70 bg-white/80 px-2 py-1.5">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
              <p className="font-mono text-[11px] font-semibold text-brand-navy">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-brand-line/80 px-3 py-3 sm:px-4">
        <FinancialWorkflowStrip activeStep={flowStep} />
      </div>

      <div className="grid min-w-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,13.5rem)]">
        <div className="min-w-0 border-b border-brand-line/80 p-3 sm:p-4 lg:border-b-0 lg:border-r">
          <MainFinancialModule area={area} />
          <div className="mt-4 border-t border-brand-line/70 pt-4">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
              One financial picture
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-brand-muted">
              Contract through GL on <span className="font-semibold text-brand-navy">{FM_DEMO_PROJECT}</span>.
            </p>
            <Link
              href={featureAreaPath(area.slug)}
              className="mt-3 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-3.5 py-2 font-sans text-[12px] font-semibold text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              Explore {area.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className="bg-[#FAFBFC] p-3 sm:p-4">
          <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Financial modules
          </p>
          <ul className="mt-2 space-y-1" role="tablist" aria-label="Financial modules">
            {areas.map((mod, index) => {
              const selected = mod.id === area.id;
              return (
                <li key={mod.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => onSelect(mod)}
                    className={
                      "flex w-full items-start gap-2 rounded-sm border px-2.5 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                      (selected
                        ? "border-brand-orange/35 bg-white"
                        : "border-transparent bg-transparent hover:border-brand-line/80 hover:bg-white")
                    }
                  >
                    <span className="font-mono text-[10px] font-bold text-brand-orange">{String(index + 1).padStart(2, "0")}</span>
                    <span className={"font-sans text-[11px] font-semibold leading-snug " + (selected ? "text-brand-navy" : "text-brand-muted")}>
                      {mod.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 hidden lg:block">
            <FlowPositionRail activeStep={flowStep} />
          </div>
        </aside>
      </div>
    </div>
  );
}
