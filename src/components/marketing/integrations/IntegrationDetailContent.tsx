import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { getCategoryLabel } from "@/lib/marketing/integrations/categories";
import { getRelatedIntegrations } from "@/lib/marketing/integrations/catalog";
import {
  INTEGRATION_DETAIL_COPY,
  detailClosingCtas,
  detailOverviewBody,
} from "@/lib/marketing/integrations/detailCopy";
import { getIntegrationDetailVisibility } from "@/lib/marketing/integrations/detailSections";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { ROUTES } from "@/lib/marketing/navigation";
import { IntegrationDetailAdditional } from "./detail/IntegrationDetailAdditional";
import { IntegrationDetailBenefits } from "./detail/IntegrationDetailBenefits";
import { IntegrationDetailCapabilitiesBlock } from "./detail/IntegrationDetailCapabilitiesBlock";
import { IntegrationDetailDataExchanged } from "./detail/IntegrationDetailDataExchanged";
import { IntegrationDetailHero } from "./detail/IntegrationDetailHero";
import { IntegrationDetailHowItWorks } from "./detail/IntegrationDetailHowItWorks";
import { IntegrationDetailRequirements } from "./detail/IntegrationDetailRequirements";
import { IntegrationDetailSection } from "./detail/IntegrationDetailSection";
import { IntegrationAvailabilityBadge } from "./IntegrationAvailabilityBadge";
import { IntegrationCard } from "./IntegrationCard";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationDetailRelationshipVisual } from "./visuals/IntegrationDetailRelationshipVisual";

type Props = {
  item: IntegrationRecord;
};

function capabilitiesSectionTitle(
  showCap: boolean,
  showFlow: boolean,
  showTech: boolean,
): string {
  if (showCap && showFlow) return INTEGRATION_DETAIL_COPY.capabilitiesWorkflowsHeadline;
  if (showCap) return INTEGRATION_DETAIL_COPY.capabilitiesHeadline;
  if (showFlow) return INTEGRATION_DETAIL_COPY.workflowsHeadline;
  return INTEGRATION_DETAIL_COPY.technicalHeadline;
}

export function IntegrationDetailContent({ item }: Props) {
  const category = getCategoryLabel(item.categoryId);
  const comingSoon = item.availability === "COMING_SOON";
  const related = getRelatedIntegrations(item);
  const detail = item.detail;
  const visibility = getIntegrationDetailVisibility(item);
  const overviewBody = detailOverviewBody(item);
  const overviewPoints = detail?.overviewPoints;
  const closingCtas = detailClosingCtas(item);

  const typeLabel =
    item.kind === "capability" ? INTEGRATION_DETAIL_COPY.typeCapability : INTEGRATION_DETAIL_COPY.typeIntegration;

  const showConnectionInOverview = !visibility.showDataExchanged && !visibility.showHowItWorks;

  return (
    <div className="int-detail-page">
      <IntegrationDetailHero item={item} />

      <IntegrationDetailSection
        title={INTEGRATION_DETAIL_COPY.overviewHeadline}
        variant="soft"
        borderTop
        density="major"
        designLayer="IntegrationOverview"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
          <div className="min-w-0">
            <p className="text-[15px] leading-relaxed text-brand-muted">{overviewBody}</p>
            {overviewPoints && overviewPoints.length > 0 && (
              <ul className="mt-4 space-y-2">
                {overviewPoints.map((point) => (
                  <li key={point} className="flex gap-2 text-[14px] leading-relaxed text-brand-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {showConnectionInOverview && (
              <div className="mt-5 border-t border-brand-line/60 pt-5">
                <IntegrationDetailRelationshipVisual item={item} showDataList={false} />
              </div>
            )}
          </div>
          <aside className="min-w-0 border border-brand-line/80 bg-white p-4 lg:self-start" data-design-layer="IntegrationMetadata">
            <p className="int-ui-label text-brand-muted">At a glance</p>
            <dl className="mt-3 space-y-3">
              <div>
                <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Category</dt>
                <dd className="mt-0.5 text-[13px] font-medium text-brand-navy">{category}</dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Type</dt>
                <dd className="mt-0.5 text-[13px] font-medium text-brand-navy">{typeLabel}</dd>
              </div>
              <div>
                <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Availability</dt>
                <dd className="mt-1">
                  <IntegrationAvailabilityBadge availability={item.availability} />
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </IntegrationDetailSection>

      {visibility.showHowItWorks && detail?.howItWorks && (
        <IntegrationDetailSection
          title={INTEGRATION_DETAIL_COPY.howItWorksHeadline}
          variant="white"
          density="compact"
          designLayer="HowItWorks"
        >
          <IntegrationDetailHowItWorks howItWorks={detail.howItWorks} />
        </IntegrationDetailSection>
      )}

      {visibility.showDataExchanged && (
        <IntegrationDetailSection
          id="data-exchanged"
          title={INTEGRATION_DETAIL_COPY.dataExchangedHeadline}
          variant="soft"
          density="major"
          designLayer="DataExchange"
        >
          <IntegrationDetailDataExchanged item={item} />
        </IntegrationDetailSection>
      )}

      {visibility.showCapabilitiesBlock && (
        <IntegrationDetailSection
          title={capabilitiesSectionTitle(
            visibility.showCapabilities,
            visibility.showWorkflows,
            visibility.showTechnicalNotes,
          )}
          variant="white"
          density="compact"
          designLayer="Capabilities"
        >
          <IntegrationDetailCapabilitiesBlock
            capabilities={detail?.capabilities}
            workflows={detail?.workflows}
            technicalNotes={detail?.technicalNotes}
          />
        </IntegrationDetailSection>
      )}

      {visibility.showBenefits && detail?.benefits && (
        <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.benefitsHeadline} variant="soft" density="compact" designLayer="Benefits">
          <IntegrationDetailBenefits benefits={detail.benefits} />
        </IntegrationDetailSection>
      )}

      {visibility.showRequirements && (
        <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.requirementsHeadline} variant="white" density="tight" designLayer="Requirements">
          <IntegrationDetailRequirements requirements={detail?.requirements} requirementsNote={detail?.requirementsNote} />
        </IntegrationDetailSection>
      )}

      {visibility.showLimitations && detail?.limitations && (
        <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.limitationsHeadline} variant="soft" density="tight">
          <ul className="max-w-3xl divide-y divide-brand-line/70 border border-brand-line/80">
            {detail.limitations.map((line) => (
              <li key={line} className="px-4 py-2 text-[13px] text-brand-muted sm:px-5">
                {line}
              </li>
            ))}
          </ul>
        </IntegrationDetailSection>
      )}

      {visibility.showDocumentation && detail?.documentationLinks && (
        <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.documentationHeadline} variant="white" density="tight">
          <ul className="flex max-w-3xl flex-col gap-2">
            {detail.documentationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-[14px] font-semibold text-brand-orange hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </IntegrationDetailSection>
      )}

      {visibility.showAdditional && detail?.additionalSections && (
        <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.additionalHeadline} variant="soft" density="compact">
          <IntegrationDetailAdditional sections={detail.additionalSections} />
        </IntegrationDetailSection>
      )}

      <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.availabilityHeadline} variant="white" density="compact" designLayer="Availability">
        <div className="flex flex-col gap-4 border border-brand-line/80 bg-[var(--int-detail-surface,#F7F9FC)] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <div className="min-w-0">
            <IntegrationAvailabilityBadge availability={item.availability} />
            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-brand-muted">
              {comingSoon ? INTEGRATION_DETAIL_COPY.comingSoonStatus : INTEGRATION_DETAIL_COPY.availableStatus}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            {comingSoon ? (
              <>
                <Link href={ROUTES.integrations} className="btn-secondary">
                  Explore available integrations
                </Link>
                <Link href={closingCtas.secondary.href} className="btn-primary">
                  Book a Demo
                </Link>
              </>
            ) : (
              <Link href={closingCtas.primary.href} className="btn-primary">
                {closingCtas.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </IntegrationDetailSection>

      <section className="int-section-shell int-bg-cta border-t border-brand-line/80" data-design-layer="IntegrationCTA">
        <div className="int-section-content site-shell int-detail-container int-detail-band-compact">
          <div className="int-cta-panel relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10">
            <IntegrationsSectionBackdrop variant="cta" />
            <div className="relative max-w-xl">
              <h2 className="int-display-title text-2xl text-brand-navy sm:text-[1.75rem]">
                {comingSoon
                  ? INTEGRATION_DETAIL_COPY.closingHeadlineComingSoon
                  : INTEGRATION_DETAIL_COPY.closingHeadlineAvailable}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">
                {comingSoon ? INTEGRATION_DETAIL_COPY.closingBodyComingSoon : INTEGRATION_DETAIL_COPY.closingBodyAvailable}
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Link href={closingCtas.primary.href} className="btn-primary w-full sm:w-auto">
                  {closingCtas.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={closingCtas.secondary.href} className="btn-secondary w-full sm:w-auto">
                  {closingCtas.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <IntegrationDetailSection title={INTEGRATION_DETAIL_COPY.relatedHeadline} variant="white" density="tight" designLayer="RelatedIntegrations">
          <div className="border-t border-brand-line">
            {related.map((rel) => (
              <IntegrationCard key={rel.id} item={rel} compact />
            ))}
          </div>
        </IntegrationDetailSection>
      )}

      <div className="site-shell int-detail-container border-t border-brand-line/60 pb-8 pt-4">
        <Link
          href={ROUTES.integrations}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-muted transition hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" className="shrink-0" aria-hidden="true">
            <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {INTEGRATION_DETAIL_COPY.backLabel}
        </Link>
      </div>
    </div>
  );
}
