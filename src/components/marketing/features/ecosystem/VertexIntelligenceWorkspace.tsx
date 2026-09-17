"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { aiAssistantFeatureDetail } from "@/lib/marketing/features/aiAssistantDetail";
import { automationFeatureDetail } from "@/lib/marketing/features/automationDetail";
import { documentIntelligenceFeatureDetail } from "@/lib/marketing/features/documentIntelligenceDetail";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import { predictiveInsightsFeatureDetail } from "@/lib/marketing/features/predictiveInsightsDetail";
import { projectIntelligenceFeatureDetail } from "@/lib/marketing/features/projectIntelligenceDetail";
import type { HubFeatureArea } from "@/lib/marketing/features/hub";

const DEMO_PROJECT = "Riverfront Office Complex";

const FLOW = ["Project data", "Vertex Intelligence", "Understand", "Insight", "Action"] as const;

const PANEL_BORDER = "border border-brand-line/90 bg-white";
const PANEL_LABEL =
  "border-b border-brand-line/80 bg-[#F6F8FB] px-3 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted";

function FlowStrip() {
  return (
    <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted sm:text-[10px]">
      {FLOW.map((step, i) => (
        <li key={step} className="flex items-center gap-1">
          <span className={i === 1 ? "text-brand-orange" : "text-brand-navy/70"}>{step}</span>
          {i < FLOW.length - 1 ? (
            <span className="text-brand-blue/40" aria-hidden="true">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Panel({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"min-w-0 shadow-[0_1px_0_0_rgba(8,35,63,0.04)] " + PANEL_BORDER + " " + className}>
      <p className={PANEL_LABEL}>{label}</p>
      <div className="p-3">{children}</div>
    </div>
  );
}

function ActionRow({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-brand-line/80 bg-[#FAFBFC] px-3 py-3 sm:px-4">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-sm bg-brand-orange px-3.5 py-2 font-sans text-[12px] font-semibold text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
      >
        {label}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
      <span className="font-sans text-[11px] text-brand-muted">Human confirmation before writes</span>
    </div>
  );
}

function AskField({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 border border-brand-line bg-[#F6F8FB] px-3 py-2.5">
      <span className="min-w-0 flex-1 font-sans text-[12px] text-brand-navy/80">{placeholder}</span>
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-brand-line bg-white text-brand-blue"
        aria-hidden="true"
      >
        →
      </span>
    </div>
  );
}

function AssistantMode({ area }: { area: HubFeatureArea }) {
  const askCard =
    aiAssistantFeatureDetail.whatCanAsk.cards.find((c) => c.category === "Project") ??
    aiAssistantFeatureDetail.whatCanAsk.cards[0];
  const metrics = aiAssistantFeatureDetail.workspace.metrics;
  const refs = aiAssistantFeatureDetail.grounded;

  return (
    <>
      <div className="mb-4">
        <p className="font-sans text-[11px] font-semibold text-brand-navy">Ask about your projects</p>
        <div className="mt-2">
          <AskField placeholder={askCard.question} />
        </div>
      </div>

      <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Panel label="Project context">
          <ul className="space-y-2 text-[12px] text-brand-navy">
            <li className="flex justify-between gap-2 border-b border-brand-line/60 pb-2">
              <span className="text-brand-muted">Schedule</span>
              <span className="font-semibold">{metrics.find((m) => m.label === "Schedule")?.value}</span>
            </li>
            <li className="flex justify-between gap-2 border-b border-brand-line/60 pb-2">
              <span className="text-brand-muted">Cost variance</span>
              <span className="font-semibold">{metrics.find((m) => m.label === "Cost variance")?.value}</span>
            </li>
            <li className="flex justify-between gap-2 border-b border-brand-line/60 pb-2">
              <span className="text-brand-muted">Open RFIs</span>
              <span className="font-semibold">{metrics.find((m) => m.label === "Open RFIs")?.value}</span>
            </li>
            <li className="flex justify-between gap-2 pb-1">
              <span className="text-brand-muted">Documents</span>
              <span className="font-semibold text-brand-blue">On project record</span>
            </li>
            <li className="flex justify-between gap-2">
              <span className="text-brand-muted">Change orders</span>
              <span className="font-semibold text-brand-blue">Connected</span>
            </li>
          </ul>
        </Panel>
        <Panel label="Intelligence">
          <p className="font-sans text-[11px] font-semibold text-brand-orange">{area.label}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-brand-navy">{askCard.description}</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map((m) => (
              <li key={m.label} className="border border-brand-line/80 bg-[#F6F8FB] px-2 py-2">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{m.label}</p>
                <p className="mt-0.5 text-[12px] font-semibold text-brand-navy">{m.value}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2">
        <Panel label="References">
          <p className="text-[12px] leading-relaxed text-brand-muted">{refs.body}</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {aiAssistantFeatureDetail.multiModule.modules.map((mod) => (
              <li
                key={mod}
                className="border border-brand-line/80 bg-[#F6F8FB] px-2 py-0.5 text-[10px] font-medium text-brand-navy"
              >
                {mod}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel label="Suggested action">
          <p className="text-[12px] leading-relaxed text-brand-navy">{aiAssistantFeatureDetail.workspace.body}</p>
          <Link
            href={featureAreaPath("projects")}
            className="mt-3 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-brand-blue hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
          >
            View project
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </Panel>
      </div>
      <ActionRow href={featureAreaPath("ai-assistant")} label="Explore AI Assistant" />
    </>
  );
}

function ProjectIntelMode() {
  const tiles = [
    { title: "Schedule", body: "Review schedule variance and activity." },
    { title: "Cost", body: "Review cost trends from connected job cost." },
    { title: "RFIs", body: "Open coordination items affecting progress." },
    { title: "Submittals", body: "Pending review and workflow status." },
    { title: "Change orders", body: "Scope and cost changes on the record." },
  ];

  return (
    <>
      <Panel label="Project intelligence">
        <p className="font-sans text-[14px] font-semibold text-brand-navy">{DEMO_PROJECT}</p>
        <p className="mt-1 text-[12px] leading-relaxed text-brand-muted">{projectIntelligenceFeatureDetail.hero.supporting}</p>
      </Panel>
      <div className="mt-3 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {tiles.map((t) => (
          <div key={t.title} className={"min-w-0 p-3 " + PANEL_BORDER}>
            <p className="font-sans text-[11px] font-semibold text-brand-navy">{t.title}</p>
            <p className="mt-1 text-[11px] leading-snug text-brand-muted">{t.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Panel label="Connected workflows">
          <ul className="flex flex-wrap gap-1.5">
            {projectIntelligenceFeatureDetail.connected.modules.map((m) => (
              <li
                key={m}
                className="border border-brand-line/80 bg-[#F6F8FB] px-2 py-0.5 text-[10px] font-medium text-brand-navy"
              >
                {m}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel label="Next step">
          <p className="text-[12px] text-brand-navy">{projectIntelligenceFeatureDetail.action.cards[0].body}</p>
        </Panel>
      </div>
      <ActionRow href={featureAreaPath("project-intelligence")} label="Explore Project Intelligence" />
    </>
  );
}

function PredictiveMode() {
  const signals = predictiveInsightsFeatureDetail.earlyWarning.cards;
  const example = predictiveInsightsFeatureDetail.signalToAction.example;

  return (
    <>
      <Panel label="Project signals">
        <p className="text-[12px] text-brand-muted">{predictiveInsightsFeatureDetail.intro.body}</p>
      </Panel>
      <ul className="mt-3 grid min-w-0 gap-2 sm:grid-cols-2">
        {signals.map((s) => (
          <li key={s.title} className={"flex min-w-0 gap-3 p-3 " + PANEL_BORDER}>
            <span
              className={
                "mt-1 h-2 w-2 shrink-0 rounded-full " + (s.severity === "HIGH" ? "bg-brand-orange" : "bg-brand-blue")
              }
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="font-sans text-[12px] font-semibold text-brand-navy">{s.title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-brand-muted">{s.body}</p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-wider text-brand-muted">{s.severity} signal</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <Panel label="Signal → insight">
          <p className="text-[12px] font-semibold text-brand-orange">{example.signal}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-brand-navy">{example.insight}</p>
        </Panel>
        <Panel label="Sources">
          <ul className="space-y-1 text-[11px] text-brand-muted">
            {example.sources.map((src) => (
              <li key={src} className="text-brand-blue">
                → {src}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-brand-navy">{example.action}</p>
        </Panel>
      </div>
      <ActionRow href={featureAreaPath("predictive-insights")} label="Explore Predictive Insights" />
    </>
  );
}

function DocumentIntelMode() {
  const question = documentIntelligenceFeatureDetail.qa.questions[0];
  const summary = documentIntelligenceFeatureDetail.summary.points[0];

  return (
    <>
      <p className="mb-3 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
        Document → <span className="text-brand-orange">Intelligence</span> → Structured information
      </p>
      <div className="grid min-w-0 gap-3 lg:grid-cols-2">
        <Panel label="Project document">
          <p className="font-sans text-[11px] font-semibold text-brand-muted">Specification · Project record</p>
          <p className="mt-2 text-[12px] leading-relaxed text-brand-navy">{question}</p>
          <div className="mt-3 space-y-1 border border-brand-line/80 bg-[#F6F8FB] p-2.5 font-sans text-[10px] leading-relaxed text-brand-muted">
            <p className="font-semibold text-brand-navy">Division 08 — Openings</p>
            <p>Fire-rated door assemblies…</p>
            <p className="text-brand-blue">Connected document version on project</p>
          </div>
        </Panel>
        <Panel label="Extracted context">
          <p className="text-[12px] font-semibold text-brand-navy">{summary.title}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">{summary.body}</p>
          <ul className="mt-3 space-y-1.5 text-[11px] text-brand-navy">
            <li>
              <span className="text-brand-muted">Project · </span>
              {DEMO_PROJECT}
            </li>
            <li>
              <span className="text-brand-muted">Reference · </span>
              Specification section
            </li>
            <li>
              <span className="text-brand-muted">Workflow · </span>
              Submittals & RFIs
            </li>
          </ul>
        </Panel>
      </div>
      <ActionRow href={featureAreaPath("document-intelligence")} label="Explore Document Intelligence" />
    </>
  );
}

function AutomationMode() {
  const steps = automationFeatureDetail.howItWorks.steps;
  const trigger = automationFeatureDetail.triggers.cards[2];

  return (
    <>
      <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
        <Panel label="Automation flow">
          <ol className="relative space-y-0">
            {steps.map((step, index) => (
              <li key={step.n} className="relative flex gap-3 pb-3 last:pb-0">
                {index < steps.length - 1 ? (
                  <span
                    className="absolute left-[11px] top-6 bottom-0 w-px bg-brand-line"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative z-[1] flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-line bg-white font-mono text-[10px] font-bold text-brand-orange">
                  {step.n}
                </span>
                <div className={"min-w-0 flex-1 px-3 py-2 " + PANEL_BORDER}>
                  <p className="text-[12px] font-semibold text-brand-navy">{step.title}</p>
                  <p className="mt-0.5 text-[11px] text-brand-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Panel>
        <Panel label="Example trigger">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">{trigger.category}</p>
          <p className="mt-1 text-[13px] font-semibold text-brand-navy">{trigger.title}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">{trigger.body}</p>
          <div className="mt-4 border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">Prepared action</p>
            <p className="mt-1 text-[11px] text-brand-navy">Assign follow-up from open RFI · pending confirmation</p>
          </div>
        </Panel>
      </div>
      <ActionRow href={featureAreaPath("automation")} label="Explore Automation" />
    </>
  );
}

export function VertexIntelligenceWorkspace({ area }: { area: HubFeatureArea }) {
  return (
    <div
      className="min-w-0 overflow-hidden rounded-lg border border-brand-line/80 bg-white"
      data-design-layer="VertexIntelligenceWorkspace"
    >
      <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-blue/60 to-brand-orange/80" aria-hidden="true" />
      <div className="border-b border-brand-line/70 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-[1.25rem] text-brand-navy sm:text-[1.35rem]">{area.label}</p>
            <FlowStrip />
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full border border-brand-line bg-[#F6F8FB] px-3 py-1 font-semibold text-brand-navy">
              {DEMO_PROJECT}
            </span>
            <span className="rounded-full border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-1 font-semibold text-brand-orange">
              Confirmation required
            </span>
          </div>
        </div>
      </div>

      <div className="min-h-[280px] bg-[#FAFBFC]/50 p-4 sm:p-6">
        {area.slug === "ai-assistant" ? <AssistantMode area={area} /> : null}
        {area.slug === "project-intelligence" ? <ProjectIntelMode /> : null}
        {area.slug === "predictive-insights" ? <PredictiveMode /> : null}
        {area.slug === "document-intelligence" ? <DocumentIntelMode /> : null}
        {area.slug === "automation" ? <AutomationMode /> : null}
      </div>
    </div>
  );
}
