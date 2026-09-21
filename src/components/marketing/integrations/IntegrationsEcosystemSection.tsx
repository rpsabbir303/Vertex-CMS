"use client";

import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationsSection } from "./IntegrationsSection";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";
import { IntegrationDataExchangeVisual } from "./visuals/IntegrationDataExchangeVisual";

export function IntegrationsEcosystemSection() {
  const { ecosystem } = INTEGRATIONS_PAGE;

  return (
    <section className="int-section-shell int-bg-ecosystem border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="ecosystem" />
      <div className="int-section-content site-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
          <IntegrationsSection>
            <p className="int-eyebrow text-brand-orange">{ecosystem.eyebrow}</p>
            <h2 className="int-display-title mt-4 text-3xl text-brand-navy sm:text-4xl">{ecosystem.headline}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-brand-muted">{ecosystem.body}</p>

            <ol className="mt-10 space-y-0 border border-brand-line/80">
              {[
                { label: "External Systems", detail: "Accounting, e-signature, productivity, and payment systems your business already uses." },
                { label: "Integration Layer", detail: "Public API, webhooks, and approved connections that define how data moves." },
                { label: "VertexBuild", detail: "Project, financial, field, and growth workflows on a shared operating record." },
                { label: "Business Workflows", detail: "Teams work from shared project context instead of disconnected tools." },
              ].map((row, i) => (
                <li key={row.label} className="list-none border-b border-brand-line/70 px-5 py-4 last:border-b-0">
                  <span className="font-sans text-[10px] font-bold text-brand-blue/80">0{i + 1}</span>
                  <p className="mt-1 text-[13px] font-semibold text-brand-navy">{row.label}</p>
                  <p className="mt-1 text-[13px] text-brand-muted">{row.detail}</p>
                </li>
              ))}
            </ol>
          </IntegrationsSection>

          <IntegrationsSection delayMs={60}>
            <div className="int-inset-blueprint p-6 sm:p-8">
              <p className="int-ui-label mb-4 text-brand-muted">Infrastructure blueprint</p>
              <IntegrationDataExchangeVisual />
            </div>
          </IntegrationsSection>
        </div>
      </div>
    </section>
  );
}
