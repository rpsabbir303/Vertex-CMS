"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";

export function MarketingTestimonials() {
  const { t } = useMarketing();

  return (
    <section className="section-spacing bg-white">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <blockquote className="mt-6 max-w-4xl">
            <p className="font-display text-2xl font-medium leading-snug text-brand-navy sm:text-3xl lg:text-4xl lg:leading-[1.2]">
              &ldquo;{t.testimonials.quote}&rdquo;
            </p>
            <footer className="mt-10 border-l-2 border-brand-orange pl-6">
              <p className="font-display text-lg font-bold text-brand-navy">{t.testimonials.name}</p>
              <p className="mt-1 text-sm font-semibold text-brand-orange">{t.testimonials.role}</p>
              <p className="text-sm text-brand-muted">{t.testimonials.company}</p>
              <p className="mt-3 text-xs text-brand-muted">{t.testimonials.note}</p>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
