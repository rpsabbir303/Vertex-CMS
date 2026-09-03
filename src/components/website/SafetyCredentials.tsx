"use client";

import { Reveal } from "@/components/Reveal";
import { certifications, safetyMetrics, type SafetyMetric } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

type Props = {
  metrics?: SafetyMetric[];
};

export function SafetyCredentials({ metrics: metricsProp }: Props) {
  const { t } = useLanguage();
  const metrics = metricsProp ?? safetyMetrics;
  const primary = metrics.find((m) => m.id === "trir") ?? metrics[0];
  const secondary = metrics.filter((m) => m.id !== primary?.id);

  return (
    <section className="section-spacing bg-[#FAFAF8]">
      <div className="site-shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
          <Reveal>
            <p className="eyebrow">{t.safety.eyebrow}</p>
            <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08]">
              {t.safety.headline}
            </h2>
            <p className="body-copy prose-width mt-6">{t.safety.supporting}</p>
          </Reveal>

          <Reveal delay={80}>
            {primary && (
              <div className="border border-brand-line bg-white p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
                  {primary.label}
                </p>
                <p className="mt-3 font-display text-6xl font-bold tracking-tight text-brand-navy sm:text-7xl">
                  {primary.value}
                </p>
                <p className="mt-2 text-xs text-brand-muted">{primary.note}</p>
              </div>
            )}

            <div className="mt-4 grid grid-cols-1 gap-px border border-brand-line bg-brand-line sm:grid-cols-3">
              {secondary.map((metric) => (
                <div key={metric.id} className="bg-white p-6 sm:p-7">
                  <p className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">{metric.value}</p>
                  <p className="mt-2 text-sm font-semibold text-brand-navy">{metric.label}</p>
                  <p className="mt-1 text-xs text-brand-muted">{metric.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {certifications.length > 0 && (
          <Reveal className="mt-14 border-t border-brand-line pt-10">
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert.id}
                  className="border border-brand-line bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted"
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
