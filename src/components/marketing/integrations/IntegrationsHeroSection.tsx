"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationsSection } from "./IntegrationsSection";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";
import { scrollToIntegrationsDiscover } from "./scrollToDiscover";
import { IntegrationHeroNetworkVisual } from "./visuals/IntegrationHeroNetworkVisual";

export function IntegrationsHeroSection() {
  const { hero } = INTEGRATIONS_PAGE;

  return (
    <section className="int-section-shell int-bg-hero border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="hero" />
      <div className="int-section-content site-shell section-spacing-lg">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <IntegrationsSection>
            <p className="int-eyebrow text-brand-orange">{hero.eyebrow}</p>
            <h1 className="int-display-title mt-4 max-w-xl text-4xl text-brand-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-brand-muted">{hero.supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToIntegrationsDiscover()}
                className="btn-primary w-full sm:w-auto"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </IntegrationsSection>

          <IntegrationsSection delayMs={80}>
            <div className="int-inset-blueprint px-4 py-8 sm:px-8 sm:py-10">
              <p className="int-ui-label relative mb-4 text-center text-brand-muted">System architecture</p>
              <IntegrationHeroNetworkVisual className="relative mx-auto flex justify-center" />
            </div>
          </IntegrationsSection>
        </div>
      </div>
    </section>
  );
}
