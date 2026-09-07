import { Reveal } from "@/components/Reveal";
import { HUB_MODULES } from "@/lib/marketing/features/hub";
import { PLATFORM_SERVICES, ENTERPRISE_CAPABILITIES } from "@/lib/marketing/features/content";

export function FeaturesConnectedPlatform() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Connected platform</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">One platform. Connected workflows.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            Vertex CMS connects projects, financials, field operations, compliance, intelligence, and growth —
            not as disconnected tools.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-12">
          <ol className="mx-auto flex max-w-3xl flex-col gap-0">
            {HUB_MODULES.map((mod, index) => (
              <li key={mod.id} className="relative flex gap-4">
                <div className="flex w-10 flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy bg-brand-navy font-mono text-[11px] font-bold text-white">
                    {mod.number}
                  </span>
                  {index < HUB_MODULES.length - 1 ? (
                    <span className="my-1 w-px flex-1 min-h-[28px] bg-brand-line" aria-hidden="true" />
                  ) : null}
                </div>
                <div className="mb-4 flex-1 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-3">
                  <p className="text-[14px] font-semibold text-brand-navy">{mod.title}</p>
                  <p className="mt-1 text-[12px] text-brand-muted">{mod.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={90} className="mt-14">
          <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Built into every workflow
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-brand-navy">Platform services</h3>
            <p className="mt-2 max-w-2xl text-[14px] text-brand-muted">
              Cross-cutting capabilities — not standalone modules.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {PLATFORM_SERVICES.map((service) => (
                <li
                  key={service.code}
                  className="rounded-lg border border-brand-line bg-white px-3.5 py-3"
                >
                  <p className="text-[13px] font-semibold text-brand-navy">{service.name}</p>
                  <p className="mt-1 text-[11px] text-brand-muted">{service.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-brand-line pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Enterprise entitlements
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ENTERPRISE_CAPABILITIES.map((item) => (
                  <li
                    key={item.code}
                    className="rounded-md border border-brand-line bg-white px-3 py-2 text-[12px] font-medium text-brand-navy"
                    title={item.description}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
