import { Reveal } from "@/components/Reveal";
import { reliability } from "@/lib/marketing/security/content";
import { StatusPill } from "./StatusPill";

export function SecurityReliability() {
  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Reliability</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{reliability.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted sm:text-base">
            {reliability.supporting}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {reliability.metrics.map((metric) => (
                <li key={metric.label} className="rounded-xl border border-brand-line bg-white p-5">
                  <p className="font-display text-3xl font-bold tracking-tight text-brand-navy">{metric.value}</p>
                  <p className="mt-2 text-[13px] font-semibold text-brand-navy">{metric.label}</p>
                  <p className="mt-1 text-[12px] text-brand-muted">{metric.detail}</p>
                  <div className="mt-3">
                    <StatusPill status={metric.status} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-xl border border-brand-line bg-white p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Recovery timeline
              </p>
              <ol className="mt-8 flex flex-col gap-0 sm:flex-row sm:items-stretch sm:justify-between">
                {reliability.flow.map((step, index) => (
                  <li key={step.label} className="relative flex flex-1 flex-col sm:items-center sm:text-center">
                    <div className="flex items-center gap-3 sm:flex-col sm:gap-0">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-navy bg-brand-navy text-[12px] font-bold text-white">
                        {index + 1}
                      </span>
                      {index < reliability.flow.length - 1 && (
                        <span
                          className="hidden h-px w-full bg-brand-line sm:absolute sm:left-[calc(50%+22px)] sm:top-[18px] sm:block sm:w-[calc(100%-44px)]"
                          aria-hidden="true"
                        />
                      )}
                      <div className="sm:mt-4">
                        <p className="text-[14px] font-semibold text-brand-navy">{step.label}</p>
                        <p className="mt-1 text-[12px] text-brand-muted">{step.detail}</p>
                      </div>
                    </div>
                    {index < reliability.flow.length - 1 && (
                      <span className="ml-4 h-6 w-px bg-brand-line sm:hidden" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-brand-line pt-5 text-[13px] text-brand-muted">
                {reliability.restoreNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
