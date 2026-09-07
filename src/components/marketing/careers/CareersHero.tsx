import { Reveal } from "@/components/Reveal";
import { careersHero } from "@/lib/marketing/careers/content";

export function CareersHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative grid items-end gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">{careersHero.eyebrow}</p>
          <h1 className="display-title mt-4 max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {careersHero.headline}
          </h1>
          {careersHero.supporting ? (
            <p className="body-copy mt-6 max-w-lg">{careersHero.supporting}</p>
          ) : (
            <p className="mt-6 max-w-lg rounded-lg border border-dashed border-brand-line bg-white/80 px-4 py-3 text-[15px] italic leading-relaxed text-brand-muted">
              {careersHero.supportingPlaceholder}
            </p>
          )}
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-xl border border-brand-line bg-white p-5 shadow-soft sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
              People · Product · Technology
            </p>
            <div className="mt-5 space-y-3">
              {[
                { label: "Product surface", detail: "Projects · Financials · Field" },
                { label: "Intelligence", detail: "AI with human confirmation" },
                { label: "Open roles", detail: "Listed when published" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 rounded-lg border border-brand-line/90 bg-[#FAFBFD] px-3.5 py-3"
                >
                  <span className="text-[13px] font-semibold text-brand-navy">{row.label}</span>
                  <span className="truncate font-mono text-[11px] text-brand-muted">{row.detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-brand-line pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[11px] text-brand-muted">Vertex CMS · Software company</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
