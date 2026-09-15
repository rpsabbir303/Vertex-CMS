"use client";

import Link from "next/link";
import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { AboutHeroVisual } from "@/components/marketing/company/CompanyVisuals";
import {
  AboutAiVisual,
  AboutAudienceVisual,
  AboutChallengeVisual,
  AboutConnectedVisual,
  AboutIdentityVisual,
  AboutIntelligenceVisual,
  AboutLayersVisual,
  AboutLifecycleVisual,
  AboutPlatformMapVisual,
} from "@/components/marketing/about/AboutVisuals";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import {
  aboutAi,
  aboutAudiences,
  aboutCapabilities,
  aboutChallenge,
  aboutConnected,
  aboutIdentity,
  aboutIntelligence,
  aboutLayers,
  aboutLifecycle,
  aboutPlatformMap,
} from "@/lib/marketing/about/content";

const SURFACES = {
  plain: "",
  mist: "bg-brand-navy/[0.02]",
  blue: "bg-[#146EF5]/[0.025]",
} as const;

function SectionShell({
  children,
  labelledBy,
  tone = "plain",
}: {
  children: React.ReactNode;
  labelledBy: string;
  tone?: keyof typeof SURFACES;
}) {
  return (
    <section className={`relative z-[2] border-b border-brand-navy/[0.1] ${SURFACES[tone]}`} aria-labelledby={labelledBy}>
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

const eyebrowClass = "font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange";
const headingClass = "display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]";
const leadClass = "mt-5 text-[15px] leading-[1.8] text-brand-navy/85 sm:text-base";
const mutedClass = "mt-4 max-w-md text-[14px] leading-[1.8] text-brand-muted sm:text-[15px]";
const cardClass = "rounded-lg border border-brand-navy/12 bg-white p-5 sm:p-6";
const splitGrid = "relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16";

export function AboutPageContent() {
  const { t } = useMarketing();

  return (
    <CompanyCanvas>
      <CompanyHero
        eyebrow={t.about.eyebrow}
        headline={t.hero.headline}
        supporting={<p>{t.hero.supporting}</p>}
        visual={<AboutHeroVisual />}
      />

      <SectionShell labelledBy="about-identity-heading" tone="mist">
        <div className={splitGrid}>
          <Reveal>
            <div className="careers-safe-zone">
              <p className={eyebrowClass}>{aboutIdentity.eyebrow}</p>
              <h2 id="about-identity-heading" className={headingClass}>
                {aboutIdentity.headline}
              </h2>
              <div className="mt-6 space-y-4">
                {aboutIdentity.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "text-[15px] leading-[1.8] text-brand-navy/85 sm:text-base"
                        : "max-w-md text-[14px] leading-[1.8] text-brand-muted sm:text-[15px]"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="relative z-[1] min-w-0">
            <AboutIdentityVisual />
          </div>
        </div>
      </SectionShell>

      <SectionShell labelledBy="about-challenge-heading">
        <Reveal>
          <div className="careers-safe-zone">
            <p className={eyebrowClass}>{aboutChallenge.eyebrow}</p>
            <h2 id="about-challenge-heading" className={headingClass}>
              {aboutChallenge.headline}
            </h2>
          </div>
        </Reveal>
        <div className="mt-10">
          <AboutChallengeVisual labels={aboutChallenge.flow} />
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {aboutChallenge.items.map((item) => (
            <li key={item.number} className={cardClass}>
              <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">{item.number}</p>
              <h3 className="mt-3 text-[16px] font-semibold leading-snug text-brand-navy sm:text-[17px]">{item.title}</h3>
              <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-brand-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell labelledBy="about-audiences-heading" tone="blue">
        <div className={splitGrid}>
          <div>
            <Reveal>
              <div className="careers-safe-zone">
                <p className={eyebrowClass}>{aboutAudiences.eyebrow}</p>
                <h2 id="about-audiences-heading" className={headingClass}>
                  {aboutAudiences.headline}
                </h2>
                <p className={leadClass}>{aboutAudiences.supporting}</p>
              </div>
            </Reveal>
            <div className="mt-10 relative z-[1] min-w-0">
              <AboutAudienceVisual labels={aboutAudiences.items.map((item) => item.label)} />
            </div>
          </div>
          <ol className="space-y-0">
            {aboutAudiences.items.map((item) => (
              <li key={item.id} className="border-b border-brand-navy/10 py-7 first:pt-0 last:border-b-0 last:pb-0">
                <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">{item.number}</p>
                <h3 className="mt-3 text-[18px] font-semibold text-brand-navy">{item.label}</h3>
                <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-brand-muted">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-[13px] font-semibold text-brand-navy hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                >
                  {item.cta} →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>

      <SectionShell labelledBy="about-platform-map-heading">
        <Reveal>
          <div className="careers-safe-zone mx-auto max-w-2xl text-center">
            <p className={eyebrowClass}>{aboutPlatformMap.eyebrow}</p>
            <h2 id="about-platform-map-heading" className={headingClass}>
              {aboutPlatformMap.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.8] text-brand-muted">{aboutPlatformMap.supporting}</p>
          </div>
        </Reveal>
        <div className="mt-10 relative z-[1] min-w-0">
          <AboutPlatformMapVisual center={aboutPlatformMap.center} labels={aboutPlatformMap.groups.map((group) => group.title)} />
        </div>
      </SectionShell>

      <SectionShell labelledBy="about-layers-heading" tone="mist">
        <div className={splitGrid}>
          <div className="relative z-[1] min-w-0 order-2 lg:order-1">
            <AboutLayersVisual labels={aboutLayers.items.map((item) => item.title)} />
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="careers-safe-zone">
              <p className={eyebrowClass}>{aboutLayers.eyebrow}</p>
              <h2 id="about-layers-heading" className={headingClass}>
                {aboutLayers.headline}
              </h2>
              <p className={leadClass}>{aboutLayers.supporting}</p>
            </div>
          </Reveal>
        </div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {aboutLayers.items.map((item) => (
            <li key={item.number} className={cardClass}>
              <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">{item.number}</p>
              <h3 className="mt-3 text-[16px] font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell labelledBy="about-intelligence-heading">
        <div className={splitGrid}>
          <Reveal>
            <div className="careers-safe-zone">
              <p className={eyebrowClass}>{aboutIntelligence.eyebrow}</p>
              <h2 id="about-intelligence-heading" className={headingClass}>
                {aboutIntelligence.headline}
              </h2>
              <p className={leadClass}>{aboutIntelligence.supporting}</p>
              <p className={mutedClass}>{aboutIntelligence.note}</p>
            </div>
          </Reveal>
          <div className="relative z-[1] min-w-0">
            <AboutIntelligenceVisual labels={aboutIntelligence.flow} />
          </div>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {aboutIntelligence.domains.map((domain) => (
            <li key={domain.title} className={cardClass}>
              <h3 className="text-[15px] font-semibold text-brand-navy">{domain.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{domain.body}</p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell labelledBy="about-ai-heading" tone="blue">
        <div className={splitGrid}>
          <div className="relative z-[1] min-w-0 order-2 lg:order-1">
            <AboutAiVisual />
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="careers-safe-zone">
              <p className={eyebrowClass}>{aboutAi.eyebrow}</p>
              <h2 id="about-ai-heading" className={headingClass}>
                {aboutAi.headline}
              </h2>
              <p className={leadClass}>{aboutAi.supporting}</p>
              <p className={mutedClass}>{aboutAi.note}</p>
              <Link
                href={aboutAi.href}
                className="mt-6 inline-flex text-[13px] font-semibold text-brand-navy hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                {aboutAi.cta} →
              </Link>
            </div>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {aboutAi.capabilities.map((item, index) => (
            <li key={item.title} className={cardClass}>
              <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {aboutAi.governance.map((item) => (
            <li key={item.label} className="border-t border-brand-navy/10 pt-4">
              <p className="text-[13px] font-semibold text-brand-navy">{item.label}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell labelledBy="about-lifecycle-heading">
        <Reveal>
          <div className="careers-safe-zone mx-auto text-center lg:max-w-2xl">
            <p className={eyebrowClass}>{aboutLifecycle.eyebrow}</p>
            <h2 id="about-lifecycle-heading" className={headingClass}>
              {aboutLifecycle.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.8] text-brand-muted">{aboutLifecycle.supporting}</p>
          </div>
        </Reveal>
        <div className="mt-10 relative z-[1] min-w-0">
          <AboutLifecycleVisual labels={aboutLifecycle.operational} />
        </div>
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-brand-muted">
          {aboutLifecycle.growth.join(" → ")}
        </p>
      </SectionShell>

      <SectionShell labelledBy="about-connected-heading" tone="mist">
        <AboutConnectedVisual />
        <Reveal>
          <div className="careers-safe-zone relative z-[1] mx-auto max-w-3xl text-center">
            <p className={eyebrowClass}>{aboutConnected.eyebrow}</p>
            <h2
              id="about-connected-heading"
              className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]"
            >
              {aboutConnected.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-brand-navy/85 sm:text-base">
              {aboutConnected.statement}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.8] text-brand-muted sm:text-[15px]">{aboutConnected.supporting}</p>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell labelledBy="about-capabilities-heading">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{aboutCapabilities.eyebrow}</p>
            <h2
              id="about-capabilities-heading"
              className="display-title mt-4 text-[2rem] leading-[1.1] sm:text-[2.35rem] lg:text-[2.5rem]"
            >
              {aboutCapabilities.headline}
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-brand-muted">{aboutCapabilities.supporting}</p>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5" role="list">
          {aboutCapabilities.items.map((item) => (
            <li key={item.id} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-lg border border-brand-navy/12 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-navy/25 hover:shadow-[0_8px_24px_-18px_rgba(8,35,63,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:p-6"
              >
                <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange">{item.number}</span>
                <h3 className="mt-3 text-[16px] font-semibold leading-snug text-brand-navy sm:text-[17px]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-brand-muted">{item.description}</p>
                <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-muted transition group-hover:text-brand-orange">
                  {aboutCapabilities.exploreLabel} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      <CompanyNav current="about" />
    </CompanyCanvas>
  );
}
