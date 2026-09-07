import { Reveal } from "@/components/Reveal";
import { architectureLayers } from "@/lib/marketing/security/content";

export function SecurityArchitecture() {
  return (
    <section className="border-b border-brand-line bg-[#F7F9FC]">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Architecture</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{architectureLayers.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted sm:text-base">
            {architectureLayers.supporting}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="overflow-x-auto pb-2">
            <div className="mx-auto min-w-[640px] max-w-4xl rounded-xl border border-brand-line bg-white p-6 sm:p-8">
              <div className="flex flex-col items-center">
                <div className="rounded-lg border border-brand-navy bg-brand-navy px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white">
                  {architectureLayers.root}
                </div>
                <span className="h-8 w-px bg-brand-line" aria-hidden="true" />

                <div className="relative grid w-full grid-cols-3 gap-4">
                  <span
                    className="absolute left-[16.5%] right-[16.5%] top-0 h-px bg-brand-line"
                    aria-hidden="true"
                  />
                  {architectureLayers.pillars.map((pillar) => (
                    <div key={pillar.title} className="flex flex-col items-center">
                      <span className="h-6 w-px bg-brand-line" aria-hidden="true" />
                      <div className="w-full rounded-lg border border-brand-line bg-[#FAFBFD] p-4 text-center">
                        <p className="text-[13px] font-semibold text-brand-navy">{pillar.title}</p>
                        <ul className="mt-3 space-y-2">
                          {pillar.items.map((item) => (
                            <li
                              key={item}
                              className="rounded-md border border-brand-line bg-white px-2.5 py-2 font-mono text-[11px] text-brand-muted"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <span className="mt-2 h-8 w-px bg-brand-line" aria-hidden="true" />
                <div className="w-full max-w-md rounded-lg border border-brand-orange/30 bg-brand-orange/5 px-5 py-3 text-center">
                  <p className="text-[13px] font-semibold text-brand-navy">{architectureLayers.base}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-[12px] text-brand-muted sm:hidden">
            Swipe horizontally to view the full diagram
          </p>
        </Reveal>
      </div>
    </section>
  );
}
