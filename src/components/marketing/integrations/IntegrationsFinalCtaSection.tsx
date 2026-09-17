"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationsSection } from "./IntegrationsSection";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";

export function IntegrationsFinalCtaSection() {
  const cta = INTEGRATIONS_PAGE.finalCta;

  return (
    <section className="int-section-shell int-bg-cta">
      <div className="int-section-content site-shell section-spacing">
        <IntegrationsSection>
          <div className="int-cta-panel relative grid gap-0 overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,240px)]">
            <IntegrationsSectionBackdrop variant="cta" />
            <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-12">
              <h2 className="int-display-title text-3xl text-brand-navy sm:text-4xl">{cta.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{cta.supporting}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={cta.primary.href} className="btn-primary w-full sm:w-auto">
                  {cta.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={cta.secondary.href} className="btn-secondary w-full sm:w-auto">
                  {cta.secondary.label}
                </Link>
              </div>
              <Link
                href={cta.tertiary.href}
                className="mt-5 inline-block text-[13px] font-semibold text-brand-orange hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                {cta.tertiary.label} →
              </Link>
            </div>
            <div className="relative hidden border-t border-brand-line/60 lg:block lg:border-l lg:border-t-0" aria-hidden="true">
              <div className="flex h-full min-h-[200px] items-center justify-center p-8">
                <svg viewBox="0 0 200 200" className="h-36 w-36 text-brand-navy/15">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
                  <circle cx="100" cy="100" r="6" fill="rgba(255,106,0,0.35)" />
                  <line x1="100" y1="30" x2="100" y2="64" stroke="rgba(20,110,245,0.35)" strokeWidth="1" />
                  <line x1="100" y1="136" x2="100" y2="170" stroke="rgba(20,110,245,0.35)" strokeWidth="1" />
                  <line x1="30" y1="100" x2="64" y2="100" stroke="rgba(20,110,245,0.35)" strokeWidth="1" />
                  <line x1="136" y1="100" x2="170" y2="100" stroke="rgba(20,110,245,0.35)" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </IntegrationsSection>
      </div>
    </section>
  );
}
