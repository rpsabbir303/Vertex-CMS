"use client";

import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { CertificationCard } from "../CertificationCard";
import { useLanguage } from "../LanguageProvider";
import { certifications } from "@/lib/website/tenantData";

export function CertificationsPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.pages.certifications.title} description={t.pages.certifications.description} />

      <section className="section-spacing">
        <div className="site-shell">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 60}>
                <CertificationCard certification={cert} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <ContentPlaceholder message={t.pages.certifications.placeholder} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
