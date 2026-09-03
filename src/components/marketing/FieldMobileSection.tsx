"use client";

import { Reveal } from "@/components/Reveal";
import { PhoneUI, BrowserFrame } from "@/components/mockups/ProductMockups";
import { useMarketing } from "./MarketingProviders";

export function FieldMobileSection() {
  const { t } = useMarketing();

  return (
    <section id="field" className="section-spacing bg-brand-soft">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-center lg:justify-start">
            <div className="hidden w-full max-w-md sm:block">
              <BrowserFrame url="app.vertexcms.com / field">
                <div className="bg-brand-soft p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Office CMS</p>
                  <div className="mt-4 h-32 rounded-lg border border-brand-line bg-white" />
                </div>
              </BrowserFrame>
            </div>
            <PhoneUI variant="home" />
          </div>
        </Reveal>

        <Reveal delay={80} className="order-1 lg:order-2">
          <p className="eyebrow">{t.field.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl">{t.field.headline}</h2>
          <p className="body-copy mt-5">{t.field.supporting}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.field.labels.map((label) => (
              <span
                key={label}
                className="rounded-sm border border-brand-line bg-white px-3 py-2 text-[12px] font-semibold text-brand-navy"
              >
                {label}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm font-semibold text-brand-orange">{t.field.offline}</p>
        </Reveal>
      </div>
    </section>
  );
}
