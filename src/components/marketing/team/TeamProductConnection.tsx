import { Reveal } from "@/components/Reveal";
import { productConnectionSection } from "@/lib/marketing/team/content";
import { ProductDisciplineDiagram } from "./TeamVisuals";

export function TeamProductConnection() {
  const copy = productConnectionSection;
  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-[#F4F8FC]/60" aria-labelledby="team-product-connection">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{copy.eyebrow}</p>
            <h2 id="team-product-connection" className="display-title mt-4 text-[1.65rem] leading-[1.12] sm:text-[2rem] lg:text-[2.15rem] text-[#08233F]">
              {copy.headline}
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-[#111827]">{copy.intro}</p>
          </Reveal>
          <Reveal delay={60}>
            <ProductDisciplineDiagram platformLabel={copy.platformLabel} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
