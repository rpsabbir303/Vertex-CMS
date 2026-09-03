"use client";

import { Reveal } from "@/components/Reveal";
import { ContentPlaceholder } from "../ContentPlaceholder";
import { PageHero } from "../PageHero";
import { TestimonialCard } from "../TestimonialCard";
import { useLanguage } from "../LanguageProvider";
import { testimonials } from "@/lib/website/tenantData";

export function TestimonialsPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.pages.testimonials.title} description={t.pages.testimonials.description} />

      <section className="section-spacing">
        <div className="site-shell">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <TestimonialCard testimonial={item} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <ContentPlaceholder message={t.pages.testimonials.placeholder} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
