import { Reveal } from "@/components/Reveal";
import { whatWeBuild } from "@/lib/marketing/careers/content";

export function CareersWhatWeBuild() {
  if (!whatWeBuild.enabled) return null;

  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{whatWeBuild.eyebrow}</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{whatWeBuild.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted sm:text-base">
            {whatWeBuild.supporting}
          </p>
          <p className="mt-3 text-[12px] text-brand-muted">
            Product domains below describe what Vertex CMS builds — not specific job responsibilities.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-12">
          <div className="overflow-x-auto pb-1">
            <ol className="flex min-w-[640px] items-stretch gap-0 lg:min-w-0">
              {whatWeBuild.flow.map((step, index) => (
                <li key={step.id} className="relative flex flex-1 flex-col">
                  <div className="flex h-full flex-col rounded-lg border border-brand-line bg-white px-4 py-5 sm:px-5">
                    <span className="font-mono text-[11px] font-semibold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[14px] font-semibold text-brand-navy">{step.label}</p>
                    <p className="mt-1 text-[12px] text-brand-muted">{step.detail}</p>
                  </div>
                  {index < whatWeBuild.flow.length - 1 ? (
                    <span
                      className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-brand-muted lg:block"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-2 text-[12px] text-brand-muted lg:hidden">Swipe to view the full system map</p>
        </Reveal>

        <Reveal delay={90} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {whatWeBuild.domains.map((domain) => (
              <li
                key={domain.label}
                className="rounded-md border border-brand-line bg-white px-3.5 py-2 text-[13px] font-medium text-brand-navy"
              >
                {domain.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
