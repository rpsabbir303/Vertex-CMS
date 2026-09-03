"use client";

import { Reveal } from "@/components/Reveal";
import { company, serviceAreaCities } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

type Props = {
  cities?: readonly string[];
};

export function ServiceArea({ cities: citiesProp }: Props) {
  const { t } = useLanguage();
  const cities = citiesProp ?? serviceAreaCities;

  return (
    <section className="section-spacing bg-white">
      <div className="site-shell">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">{t.serviceArea.eyebrow}</p>
            <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08]">
              {t.serviceArea.headline}
            </h2>
            <p className="mt-5 text-sm uppercase tracking-[0.14em] text-brand-muted">
              {company.serviceAreaLabel}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="grid gap-6 sm:grid-cols-2">
              {cities.map((city) => (
                <li key={city} className="group relative border-t border-brand-line pt-6">
                  <span
                    className="absolute left-0 top-0 h-0.5 w-8 bg-brand-orange transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                  <span className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy sm:text-3xl lg:text-[2rem]">
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
