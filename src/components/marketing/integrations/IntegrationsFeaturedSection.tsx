"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { IntegrationsSection } from "./IntegrationsSection";
import { getCategoryLabel } from "@/lib/marketing/integrations/categories";
import { INTEGRATIONS_PAGE, integrationDetailPath } from "@/lib/marketing/integrations/data";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationMonogram } from "./IntegrationMonogram";

type Props = {
  items: IntegrationRecord[];
};

export function IntegrationsFeaturedSection({ items }: Props) {
  const featured = items.filter((i) => i.featured);
  if (featured.length === 0) return null;

  const copy = INTEGRATIONS_PAGE.featured;
  const [primary, ...rest] = featured;
  const supporting = rest.slice(0, 2);

  return (
    <section className="int-section-shell int-bg-soft border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="soft" />
      <div className="int-section-content site-shell section-spacing">
        <IntegrationsSection>
          <p className="int-eyebrow text-brand-orange">{copy.eyebrow}</p>
          <h2 className="int-display-title mt-3 text-3xl text-brand-navy">{copy.headline}</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-brand-muted">{copy.supporting}</p>
        </IntegrationsSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <IntegrationsSection>
            <FeaturedPanel item={primary} large />
          </IntegrationsSection>
          {supporting.length > 0 && (
            <div className="flex flex-col gap-4">
              {supporting.map((item, i) => (
                <IntegrationsSection key={item.id} delayMs={40 * (i + 1)}>
                  <FeaturedPanel item={item} />
                </IntegrationsSection>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedPanel({ item, large }: { item: IntegrationRecord; large?: boolean }) {
  const available = item.availability === "AVAILABLE";
  const category = getCategoryLabel(item.categoryId);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <IntegrationMonogram name={item.name} monogram={item.monogram} logoSrc={item.logoSrc} muted={!available} />
          <div>
            {item.kind === "capability" ? (
              <p className="int-ui-label text-brand-blue">Platform capability</p>
            ) : (
              <p className="int-ui-label text-brand-muted">Third-party integration</p>
            )}
            <h3
              className={
                "mt-1 text-brand-navy " +
                (large ? "int-display-title text-2xl sm:text-[1.65rem]" : "font-sans text-lg font-semibold tracking-tight")
              }
            >
              {item.name}
            </h3>
            <p className="int-ui-label mt-1 text-brand-muted">{category}</p>
          </div>
        </div>
      </div>
      <p className={"mt-5 text-brand-muted " + (large ? "text-[15px] leading-relaxed" : "text-[14px] leading-relaxed")}>
        {item.shortDescription}
      </p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-brand-line/70 pt-4">
        <span
          className={
            "font-sans text-[10px] font-semibold uppercase tracking-[0.12em] " +
            (available ? "text-emerald-700" : "text-brand-muted")
          }
        >
          {available ? "Available" : "Coming Soon"}
        </span>
        <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-orange">
          {available ? "Explore" : "Overview"}
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </>
  );

  return (
    <Link
      href={integrationDetailPath(item.slug)}
      className={
        "block h-full bg-white p-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
        (large
          ? "int-inset-blueprint border-brand-navy/10 hover:border-brand-navy/20"
          : "border border-brand-line hover:border-brand-navy/15 hover:bg-[#F7F9FC]")
      }
    >
      {content}
    </Link>
  );
}
