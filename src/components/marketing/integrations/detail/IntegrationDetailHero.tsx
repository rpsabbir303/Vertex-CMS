import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { getCategoryLabel } from "@/lib/marketing/integrations/categories";
import {
  INTEGRATION_DETAIL_COPY,
  detailConnectionLabels,
  detailPrimaryCtas,
} from "@/lib/marketing/integrations/detailCopy";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationsSectionBackdrop } from "../backgrounds/IntegrationsSectionBackdrop";
import { IntegrationAvailabilityBadge } from "../IntegrationAvailabilityBadge";
import { IntegrationDetailBreadcrumb } from "../IntegrationDetailBreadcrumb";
import { IntegrationMonogram } from "../IntegrationMonogram";
import { IntegrationDetailConnectionVisual } from "../visuals/IntegrationDetailConnectionVisual";

type Props = {
  item: IntegrationRecord;
};

export function IntegrationDetailHero({ item }: Props) {
  const category = getCategoryLabel(item.categoryId);
  const comingSoon = item.availability === "COMING_SOON";
  const ctas = detailPrimaryCtas(item);
  const connection = detailConnectionLabels(item);
  const typeLabel =
    item.kind === "capability" ? INTEGRATION_DETAIL_COPY.typeCapability : INTEGRATION_DETAIL_COPY.typeIntegration;

  return (
    <section className="int-section-shell int-bg-hero border-b border-brand-line" data-design-layer="IntegrationHero">
      <IntegrationsSectionBackdrop variant="hero" />
      <div className="int-section-content site-shell int-detail-container int-detail-hero-band">
        <IntegrationDetailBreadcrumb item={item} />

        <div className="mt-4 grid gap-6 lg:mt-5 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-start lg:gap-10">
          <div className="flex min-w-0 flex-col">
            <IntegrationMonogram name={item.name} monogram={item.monogram} logoSrc={item.logoSrc} muted={comingSoon} />

            <p className="int-eyebrow mt-4 text-brand-orange">{category}</p>
            <p className="int-ui-label mt-2 text-brand-blue">{typeLabel}</p>

            <h1 className="int-display-title mt-3 text-3xl text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              {item.name}
            </h1>

            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-brand-muted">{item.shortDescription}</p>

            <div className="mt-6">
              <IntegrationAvailabilityBadge availability={item.availability} />
            </div>

            {comingSoon && (
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-brand-muted" role="status">
                {INTEGRATION_DETAIL_COPY.comingSoonStatus}
              </p>
            )}

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={ctas.primary.href} className="btn-primary w-full sm:w-auto">
                {ctas.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={ctas.secondary.href} className="btn-secondary w-full sm:w-auto">
                {ctas.secondary.label}
              </Link>
            </div>
            <Link
              href={ctas.tertiary.href}
              className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-orange hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              {ctas.tertiary.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="min-w-0 lg:pt-2">
            <IntegrationDetailConnectionVisual
              externalLabel={connection.source}
              integrationLabel={connection.connectionDisplay}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
