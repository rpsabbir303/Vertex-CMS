"use client";

import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { ServiceItem } from "../ServiceItem";
import { useLanguage } from "../LanguageProvider";
import { serviceMeta } from "@/lib/website/tenantData";

export function ServicesPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.pages.services.title} description={t.pages.services.description} />

      <section className="section-spacing">
        <div className="site-shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceMeta.map((service, i) => {
              const content = t.services.items[service.id as keyof typeof t.services.items];
              return (
                <Reveal key={service.id} delay={i * 60}>
                  <ServiceItem
                    service={service}
                    title={content?.title ?? service.id}
                    description={content?.description ?? ""}
                  />
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <ContentPlaceholder message={t.pages.services.placeholder} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
