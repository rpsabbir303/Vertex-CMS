import { Reveal } from "./Reveal";
import { HeroPortfolioDashboard } from "./mockups/ProductMockups";

const FEATURES = [
  {
    title: "Project Control",
    desc: "Portfolio health, phases, teams and variance without spreadsheet assembly.",
    icon: "01",
  },
  {
    title: "Financial Truth",
    desc: "Contracts, SOV, change orders, pay apps and native double-entry GL.",
    icon: "02",
  },
  {
    title: "Field First",
    desc: "Daily logs, GPS photos, RFIs and punch — offline-capable mobile capture.",
    icon: "03",
  },
  {
    title: "Safety Visible",
    desc: "Incidents, inspections, toolbox talks, COI and compliance radar.",
    icon: "04",
  },
  {
    title: "Document Truth",
    desc: "Drawings, revisions, markup and search from one controlled record.",
    icon: "05",
  },
  {
    title: "AI Intelligence",
    desc: "Ask project questions and surface risk — with human confirmation before writes.",
    icon: "06",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative overflow-hidden bg-brand-black py-20 sm:py-28">
      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why VertexBuild</p>
            <h2 className="headline mt-3">
              Built for the Way
              <br />
              Construction Actually Runs.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <Reveal delay={80}>
            <div className="pointer-events-none mx-auto hidden max-w-3xl opacity-30 lg:block" aria-hidden="true">
              <div className="scale-90">
                <HeroPortfolioDashboard />
              </div>
            </div>
          </Reveal>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:-mt-24">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <article className="panel group h-full p-6 transition hover:-translate-y-1 hover:border-brand-orange/30">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orange/15 text-sm font-bold text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold uppercase tracking-wide text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{f.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
