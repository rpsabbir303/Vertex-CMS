"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { aiGovernance, aiGovernanceEditorial, SECURITY_ROUTES } from "@/lib/marketing/security/content";
import { AiGovernanceAbstract } from "./AiGovernanceAbstract";
import { AiGovernanceFlowRow, AiGovernanceGovernanceModelVisual } from "./AiGovernanceEditorialVisuals";
import {
  SecurityEditorialDivider,
  SecurityEditorialEyebrow,
  SecurityEditorialFrame,
} from "./SecurityEditorialFrame";
import { SecurityEditorialCTA } from "./SecurityEditorialCTA";
import { SecurityEditorialExplore } from "./SecurityEditorialExplore";
import { SecurityEditorialTopicRail } from "./SecurityEditorialTopicRail";

function EditorialSection({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16 ${className}`}
      aria-labelledby={id}
    >
      <div className="min-w-0 border border-brand-line">
        <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">
          {eyebrow ? <SecurityEditorialEyebrow>{eyebrow}</SecurityEditorialEyebrow> : null}
          <h2
            id={id}
            className={`max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.15rem] ${eyebrow ? "mt-4" : ""}`}
          >
            {title}
          </h2>
        </div>
        <div className="min-w-0 px-6 py-8 sm:px-8 sm:py-10">{children}</div>
      </div>
    </section>
  );
}

export function AiGovernanceEditorialPage() {
  const { t } = useMarketing();
  const pageCopy = t.security.pages["ai-governance"];
  const ed = aiGovernanceEditorial;
  const heroCta = t.security.aiGovernanceHero;
  const ctaCopy = t.security.aiGovernanceCta;

  return (
    <SecurityEditorialFrame>
      <section className="border-b border-brand-line bg-white" aria-labelledby="ag-hero-heading">
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0 border-b border-brand-line px-5 py-14 sm:px-8 sm:py-16 lg:border-b-0 lg:py-[4.5rem]">
            <SecurityEditorialEyebrow>{t.security.hero.eyebrow}</SecurityEditorialEyebrow>
            <h1
              id="ag-hero-heading"
              className="mt-5 max-w-full break-words font-display text-[2rem] font-bold leading-[1.08] tracking-[-0.04em] text-brand-navy sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              {pageCopy.title}
            </h1>
            <p className="mt-5 max-w-full text-[16px] leading-[1.7] text-brand-muted">{pageCopy.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={SECURITY_ROUTES.home} className="btn-primary inline-flex px-5 py-2.5 text-[13px]">
                {heroCta.primary}
              </Link>
              <Link href={SECURITY_ROUTES.contact} className="btn-secondary inline-flex px-5 py-2.5 text-[13px]">
                {heroCta.secondary}
              </Link>
            </div>
          </div>
          <div className="flex min-h-[280px] min-w-0 items-center justify-center overflow-hidden border-brand-line bg-brand-soft/50 p-6 sm:min-h-[320px] sm:p-10 lg:min-h-[480px] lg:border-l">
            <div className="h-full max-h-[360px] w-full max-w-full">
              <AiGovernanceAbstract className="max-h-full max-w-full" />
            </div>
          </div>
        </div>
      </section>

      <SecurityEditorialTopicRail current="ai-governance" />

      <EditorialSection id="ag-human-control-heading" eyebrow={t.security.aiGovernance.eyebrow} title={ed.humanControl.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.humanControl.intro}</p>
        <ul className="mt-4 list-none space-y-2 p-0">
          {ed.humanControl.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-[14px] leading-[1.75] text-brand-navy/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 min-w-0 border border-brand-line bg-white p-4 sm:p-6">
          <AiGovernanceFlowRow steps={[...ed.humanControl.sequence]} ariaLabel="Governance confirmation sequence" />
        </div>
      </EditorialSection>

      <EditorialSection id="ag-confirmed-writes-heading" title={ed.confirmedWrites.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.confirmedWrites.body}</p>
        <div className="mt-8 min-w-0 border border-brand-line p-4 sm:p-6">
          <AiGovernanceFlowRow steps={[...ed.confirmedWrites.steps]} ariaLabel="Confirmed write action workflow" />
        </div>
      </EditorialSection>

      <EditorialSection id="ag-activity-heading" title={ed.activityTraceability.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.activityTraceability.body}</p>
        <div className="mt-8 min-w-0 border border-brand-line p-4 sm:p-6">
          <AiGovernanceFlowRow steps={[...ed.activityTraceability.steps]} ariaLabel="AI activity and logging flow" />
        </div>
      </EditorialSection>

      <EditorialSection id="ag-records-heading" title={ed.protectRecords.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.protectRecords.body}</p>
      </EditorialSection>

      <EditorialSection id="ag-tenant-heading" title={ed.tenantUsage.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.tenantUsage.body}</p>
      </EditorialSection>

      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="ag-capabilities-heading">
        <div className="min-w-0 border border-brand-line">
          <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">
            <SecurityEditorialEyebrow>{t.security.aiGovernance.eyebrow}</SecurityEditorialEyebrow>
            <h2
              id="ag-capabilities-heading"
              className="mt-4 max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.15rem]"
            >
              Current AI capabilities and roadmap intelligence
            </h2>
            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">{aiGovernance.roadmapNote}</p>
          </div>
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
            <div className="min-w-0 border-b border-brand-line px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Current capabilities</p>
              <SecurityEditorialDivider />
              <ul className="m-0 list-none p-0">
                {ed.currentCapabilities.map((item, index) => (
                  <li key={item.title}>
                    {index > 0 ? <SecurityEditorialDivider /> : null}
                    <div className="py-4">
                      <p className="text-[14px] font-semibold text-brand-navy">{item.title}</p>
                      <p className="mt-2 text-[13px] leading-[1.8] text-brand-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 px-6 py-8 sm:px-8 sm:py-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Planned / roadmap</p>
              <SecurityEditorialDivider />
              <ul className="m-0 list-none p-0">
                {ed.roadmapCapabilities.map((item) => (
                  <li key={item.title}>
                    <div className="py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[14px] font-semibold text-brand-navy">{item.title}</p>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                          Planned / Roadmap
                        </span>
                      </div>
                      <p className="mt-2 text-[13px] leading-[1.8] text-brand-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="ag-model-heading">
        <div className="min-w-0 border border-brand-line">
          <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">
            <h2
              id="ag-model-heading"
              className="max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.15rem]"
            >
              Governance model
            </h2>
            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">{aiGovernance.coreMessage}</p>
          </div>
          <div className="min-w-0 px-4 py-8 sm:px-6 sm:py-10">
            <AiGovernanceGovernanceModelVisual steps={ed.governanceModel} />
          </div>
        </div>
      </section>

      <EditorialSection id="ag-trust-heading" title={ed.trustMessage.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.trustMessage.body}</p>
        <p className="mt-4 max-w-full border-l-2 border-brand-orange/60 pl-4 text-[14px] leading-[1.75] text-brand-muted">
          {aiGovernance.supporting}
        </p>
      </EditorialSection>

      <SecurityEditorialExplore current="ai-governance" />
      <SecurityEditorialCTA
        abstract={AiGovernanceAbstract}
        title={ctaCopy.title}
        supporting={ctaCopy.supporting}
        primaryLabel={ctaCopy.primary}
        secondaryLabel={ctaCopy.secondary}
        primaryHref={SECURITY_ROUTES.contact}
        showTertiary={false}
      />
    </SecurityEditorialFrame>
  );
}
