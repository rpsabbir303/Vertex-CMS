"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";
import { MarketingTestimonialQuote } from "./MarketingTestimonialQuote";

export function MarketingTestimonials() {
  const { t } = useMarketing();

  return (
    <section className="section-spacing bg-white">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <div className="mt-6 max-w-4xl">
            <MarketingTestimonialQuote
              size="featured"
              quote={t.testimonials.quote}
              name={t.testimonials.name}
              role={t.testimonials.role}
              company={t.testimonials.company}
              note={t.testimonials.note}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
