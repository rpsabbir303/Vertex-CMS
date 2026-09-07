import { Reveal } from "@/components/Reveal";
import { featuresHero, heroEcosystemNodes } from "@/lib/marketing/features/content";

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <Reveal>
          <p className="eyebrow">{featuresHero.eyebrow}</p>
          <h1 className="display-title mt-4 max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
            {featuresHero.headline}
          </h1>
          <p className="body-copy mt-6 max-w-lg">{featuresHero.supporting}</p>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Module · Feature · Platform service — one connected product
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
            <div className="mx-auto flex h-20 w-full max-w-[11rem] flex-col items-center justify-center rounded-xl border border-brand-navy bg-brand-navy text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Vertex</p>
              <p className="mt-1 text-[14px] font-bold text-white">CMS</p>
            </div>
            <div className="mx-auto my-4 h-6 w-px bg-brand-line" aria-hidden="true" />
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {heroEcosystemNodes.map((node) => (
                <li
                  key={node}
                  className="rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5 text-center text-[12px] font-semibold text-brand-navy"
                >
                  {node}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3 border-t border-brand-line pt-4">
              <span className="h-px flex-1 bg-brand-line" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Connected system
              </p>
              <span className="h-px flex-1 bg-brand-line" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
