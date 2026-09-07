import { Reveal } from "@/components/Reveal";
import { buildingSection } from "@/lib/marketing/team/content";

export function TeamBuilding() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">
          <Reveal>
            <p className="eyebrow">{buildingSection.eyebrow}</p>
            <h2 className="display-title mt-3 max-w-md text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {buildingSection.headline}
            </h2>
            <div className="mt-8 hidden rounded-xl border border-brand-line bg-[#FAFBFD] p-5 lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Product surface
              </p>
              <div className="mt-4 space-y-2">
                {["Projects", "Financials", "Field", "Intelligence"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-md border border-brand-line bg-white px-3 py-2.5"
                  >
                    <span className="text-[12px] font-medium text-brand-navy">{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-line" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <ul className="space-y-0">
              {buildingSection.pillars.map((pillar, index) => {
                const isPlaceholder = pillar.body.startsWith("[Approved");
                return (
                  <li
                    key={pillar.id}
                    className={`border-b border-brand-line py-7 first:pt-0 last:border-b-0 ${
                      index % 2 === 1 ? "lg:pl-10" : ""
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                      {pillar.label}
                    </p>
                    <p
                      className={`mt-3 max-w-xl text-[15px] leading-relaxed sm:text-base ${
                        isPlaceholder
                          ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 italic text-brand-muted"
                          : "text-brand-navy/85"
                      }`}
                    >
                      {pillar.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
