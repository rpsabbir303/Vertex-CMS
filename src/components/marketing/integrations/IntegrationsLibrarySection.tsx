"use client";

import { IntegrationsSection } from "./IntegrationsSection";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationCard } from "./IntegrationCard";

type Props = {
  items: IntegrationRecord[];
};

export function IntegrationsLibrarySection({ items }: Props) {
  const { library } = INTEGRATIONS_PAGE;

  if (items.length === 0) {
    return null;
  }

  const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section id="integration-directory" className="int-section-shell int-bg-discovery scroll-mt-24 border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="discovery" />
      <div className="int-section-content site-shell section-spacing">
        <IntegrationsSection>
          <p className="int-eyebrow text-brand-orange">{library.eyebrow}</p>
          <h2 className="int-display-title mt-3 text-3xl text-brand-navy sm:text-4xl">{library.headline}</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-brand-muted">{library.supporting}</p>
        </IntegrationsSection>

        <div className="mt-10 border-t border-brand-line">
          {sorted.map((item) => (
            <IntegrationCard key={`lib-${item.id}`} item={item} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
