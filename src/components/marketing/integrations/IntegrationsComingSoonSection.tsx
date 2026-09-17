"use client";

import Link from "next/link";
import { IntegrationsSection } from "./IntegrationsSection";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationCard } from "./IntegrationCard";

type Props = {
  items: IntegrationRecord[];
};

export function IntegrationsComingSoonSection({ items }: Props) {
  const comingSoon = items.filter((i) => i.availability === "COMING_SOON");
  if (comingSoon.length === 0) return null;

  const { comingSoon: copy } = INTEGRATIONS_PAGE;

  return (
    <section className="int-section-shell int-bg-soft border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="soft" />
      <div className="int-section-content site-shell section-spacing">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <IntegrationsSection>
            <p className="int-eyebrow text-brand-orange">{copy.eyebrow}</p>
            <h2 className="int-display-title mt-3 text-2xl text-brand-navy sm:text-3xl">{copy.headline}</h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-brand-muted">{copy.supporting}</p>
          </IntegrationsSection>
          <IntegrationsSection delayMs={40}>
            <div className="flex flex-wrap gap-3">
              <Link href={copy.requestInfo.href} className="btn-secondary">
                {copy.requestInfo.label}
              </Link>
              <Link href={copy.primaryCta.href} className="btn-primary">
                {copy.primaryCta.label}
              </Link>
            </div>
          </IntegrationsSection>
        </div>

        <div className="mt-8 rounded-sm border border-brand-line bg-white/80">
          {comingSoon.map((item) => (
            <IntegrationCard key={`soon-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
