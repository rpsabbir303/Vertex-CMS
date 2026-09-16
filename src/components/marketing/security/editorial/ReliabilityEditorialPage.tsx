"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { reliability, reliabilityEditorial, SECURITY_ROUTES } from "@/lib/marketing/security/content";
import { ReliabilityAbstract } from "./ReliabilityAbstract";
import { ReliabilityFlowRow, ReliabilityTrustStackVisual } from "./ReliabilityEditorialVisuals";
import { SecurityEditorialEyebrow, SecurityEditorialFrame } from "./SecurityEditorialFrame";
import { SecurityEditorialCTA } from "./SecurityEditorialCTA";
import { SecurityEditorialExplore } from "./SecurityEditorialExplore";
import { SecurityEditorialTopicRail } from "./SecurityEditorialTopicRail";

function EditorialSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby={id}>
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

export function ReliabilityEditorialPage() {
  const { t } = useMarketing();
  const pageCopy = t.security.pages.reliability;
  const ed = reliabilityEditorial;
  const heroCta = t.security.reliabilityHero;
  const ctaCopy = t.security.reliabilityCta;

  return (
    <SecurityEditorialFrame>
      <section className="border-b border-brand-line bg-white" aria-labelledby="rel-hero-heading">
        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0 border-b border-brand-line px-5 py-14 sm:px-8 sm:py-16 lg:border-b-0 lg:py-[4.5rem]">
            <SecurityEditorialEyebrow>{t.security.hero.eyebrow}</SecurityEditorialEyebrow>
            <h1
              id="rel-hero-heading"
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
              <ReliabilityAbstract className="max-h-full max-w-full" />
            </div>
          </div>
        </div>
      </section>

      <SecurityEditorialTopicRail current="reliability" />

      <EditorialSection id="rel-intro-heading" eyebrow={t.security.reliability.eyebrow} title={ed.intro.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.intro.body}</p>
        <ul className="mt-4 list-none space-y-2 p-0">
          {ed.intro.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-[14px] leading-[1.75] text-brand-navy/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-full text-[14px] leading-[1.75] text-brand-muted">{reliability.supporting}</p>
      </EditorialSection>

      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="rel-availability-heading">
        <div className="min-w-0 border border-brand-line">
          <div className="min-w-0 border-b border-brand-line px-6 py-10 text-center sm:px-8 sm:py-12">
            <h2
              id="rel-availability-heading"
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-navy"
            >
              {ed.availability.title}
            </h2>
            <p className="mt-8 break-words font-display text-[3rem] font-bold tracking-[-0.04em] text-brand-navy sm:text-[4rem]">
              {ed.availability.value}
            </p>
            <p className="mt-2 text-[15px] font-semibold text-brand-navy">{ed.availability.label}</p>
            <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              {ed.availability.qualifier}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.75] text-brand-muted">{ed.availability.detail}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="rel-recovery-heading">
        <div className="min-w-0 border border-brand-line">
          <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">
            <h2
              id="rel-recovery-heading"
              className="max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.15rem]"
            >
              {ed.recoveryObjectives.title}
            </h2>
            <p className="mt-4 max-w-full text-[14px] leading-[1.75] text-brand-muted">{ed.recoveryObjectives.note}</p>
          </div>
          <div className="grid min-w-0 grid-cols-1 sm:grid-cols-2">
            {[ed.recoveryObjectives.rpo, ed.recoveryObjectives.rto].map((metric, index) => (
              <div
                key={metric.label}
                className={`min-w-0 px-6 py-10 sm:px-8 ${index > 0 ? "border-t border-brand-line sm:border-l sm:border-t-0" : ""}`}
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">{metric.label}</p>
                <p className="mt-4 font-display text-[2.5rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[3rem]">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Documented target
                </p>
                <p className="mt-4 text-[14px] leading-[1.75] text-brand-muted">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EditorialSection id="rel-dr-model-heading" title="Disaster recovery model">
        <p className="mb-8 max-w-full text-[15px] leading-[1.75] text-brand-muted">
          A structured operating model for detection through service resumption — documented objectives, not guaranteed outcomes.
        </p>
        <div className="min-w-0 border border-brand-line p-4 sm:p-6">
          <ReliabilityFlowRow steps={[...ed.disasterRecoveryFlow]} ariaLabel="Disaster recovery workflow" />
        </div>
      </EditorialSection>

      <EditorialSection id="rel-backup-heading" title={ed.backupRecovery.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.backupRecovery.body}</p>
      </EditorialSection>

      <EditorialSection id="rel-runbook-heading" title={ed.restoreRunbook.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.restoreRunbook.body}</p>
        <div className="mt-8 min-w-0 border border-brand-line p-4 sm:p-6">
          <ReliabilityFlowRow steps={[...ed.restoreRunbook.steps]} ariaLabel="Restore runbook workflow" />
        </div>
      </EditorialSection>

      <EditorialSection id="rel-scale-heading" title={ed.scalability.title}>
        <p className="max-w-full text-[15px] leading-[1.75] text-brand-muted">{ed.scalability.body}</p>
      </EditorialSection>

      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="rel-targets-heading">
        <div className="min-w-0 max-w-3xl">
          <h2 id="rel-targets-heading" className="font-display text-[1.35rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[1.5rem]">
            {ed.targetsVsGuarantees.title}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-brand-muted">{ed.targetsVsGuarantees.body}</p>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white px-5 py-14 sm:px-8 sm:py-16" aria-labelledby="rel-trust-stack-heading">
        <div className="min-w-0 border border-brand-line">
          <div className="min-w-0 border-b border-brand-line px-6 py-10 sm:px-8 sm:py-12">
            <SecurityEditorialEyebrow>{t.security.protection.eyebrow}</SecurityEditorialEyebrow>
            <h2
              id="rel-trust-stack-heading"
              className="mt-4 max-w-full break-words font-display text-[1.75rem] font-bold tracking-[-0.03em] text-brand-navy sm:text-[2.15rem]"
            >
              Reliability within the trust architecture
            </h2>
            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">
              Reliability and disaster recovery sit alongside data protection, access control, compliance support, and AI governance as
              layers of the overall Security &amp; Trust model.
            </p>
          </div>
          <div className="px-6 py-10 sm:px-8 sm:py-12">
            <ReliabilityTrustStackVisual layers={ed.trustStack} />
          </div>
        </div>
      </section>

      <SecurityEditorialExplore current="reliability" />
      <SecurityEditorialCTA
        abstract={ReliabilityAbstract}
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
