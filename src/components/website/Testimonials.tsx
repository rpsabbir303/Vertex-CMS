"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { testimonials as defaultTestimonials, type Testimonial } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

type Props = {
  items?: Testimonial[];
};

export function Testimonials({ items: itemsProp }: Props) {
  const { t } = useLanguage();
  const items = itemsProp ?? defaultTestimonials;
  const [active, setActive] = useState(0);

  if (items.length === 0) return null;

  const current = items[active];

  return (
    <section className="section-spacing-lg bg-brand-navy text-white">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow-light">{t.testimonials.eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {t.testimonials.headline}
            </h2>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-8">
            <span className="font-display text-7xl leading-none text-brand-orange/30 sm:text-8xl" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="-mt-8 font-display text-2xl font-medium leading-[1.35] tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
              {current.quote}
            </blockquote>
            <footer className="mt-10 border-t border-white/15 pt-8">
              <p className="text-lg font-semibold text-white">{current.name}</p>
              <p className="mt-2 text-sm text-slate-400">{current.company}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-brand-orange">
                {current.project}
              </p>
            </footer>

            {items.length > 1 && (
              <div className="mt-10 flex items-center gap-4" role="tablist" aria-label="Testimonials">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-12 bg-brand-orange" : "w-6 bg-white/25 hover:bg-white/45"
                    }`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
