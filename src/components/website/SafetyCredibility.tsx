import { Reveal } from "@/components/Reveal";
import { SAFETY_METRICS } from "@/lib/website/homeData";

export function SafetyCredibility() {
  return (
    <section className="border-b border-brand-line bg-brand-soft py-16 sm:py-20 lg:py-24">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Safety & Credibility</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Make Safety Part of Your Story
          </h2>
          <p className="body-copy mt-4">
            Track safety performance, incidents, inspections, and compliance — and share credible
            safety information with owners and partners.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SAFETY_METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 60}>
              <div className="rounded-xl border border-brand-line bg-white p-6 text-center transition hover:shadow-product">
                <p className="text-3xl font-bold text-brand-navy">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-brand-navy">{metric.label}</p>
                <p className="mt-1 text-xs text-brand-muted">{metric.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
