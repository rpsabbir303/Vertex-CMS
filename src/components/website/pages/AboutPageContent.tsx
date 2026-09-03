"use client";

import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { useLanguage } from "../LanguageProvider";
import { aboutContent, company, safetyMetrics, serviceAreaCities } from "@/lib/website/tenantData";
import { PAGE_ANCHORS } from "@/lib/website/navigation";

export function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.pages.about.title} description={t.pages.about.description} />

      <section className="section-spacing">
        <div className="site-shell max-w-3xl">
          <Reveal>
            <p className="body-copy">{aboutContent.story}</p>
            <p className="body-copy mt-4">{aboutContent.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-spacing bg-[#FAFAF8]">
        <div className="site-shell">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Our Values</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {aboutContent.values.map((value, i) => (
              <Reveal key={value.id} delay={i * 60}>
                <div className="border border-brand-line bg-white p-6">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id={PAGE_ANCHORS.safety} className="section-spacing scroll-mt-24">
        <div className="site-shell">
          <Reveal>
            <p className="eyebrow">{t.safety.eyebrow}</p>
            <h2 className="display-title mt-4 text-2xl sm:text-3xl">{t.safety.headline}</h2>
            <p className="body-copy prose-width mt-4">{t.safety.supporting}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {safetyMetrics.map((metric, i) => (
              <Reveal key={metric.id} delay={i * 50}>
                <div className="border border-brand-line bg-white p-6">
                  <p className="font-display text-2xl font-bold text-brand-navy">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold">{metric.label}</p>
                  <p className="mt-1 text-xs text-brand-muted">{metric.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id={PAGE_ANCHORS.serviceArea} className="section-spacing scroll-mt-24 bg-[#FAFAF8]">
        <div className="site-shell">
          <Reveal>
            <p className="eyebrow">{t.serviceArea.eyebrow}</p>
            <h2 className="display-title mt-4 text-2xl sm:text-3xl">{t.serviceArea.headline}</h2>
            <p className="mt-4 text-sm text-brand-muted">{company.serviceAreaLabel}</p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreaCities.map((city) => (
              <span
                key={city}
                className="border border-brand-line bg-white px-5 py-2.5 text-sm font-medium text-brand-navy"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-shell">
          <ContentPlaceholder message={t.pages.about.placeholder} />
        </div>
      </section>
    </>
  );
}
