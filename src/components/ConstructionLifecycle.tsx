import { MiniThumb } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const STAGES = [
  { n: "01", t: "Preconstruction", ui: "Estimating" },
  { n: "02", t: "Plan", ui: "Projects" },
  { n: "03", t: "Build", ui: "Field" },
  { n: "04", t: "Control", ui: "Financials" },
  { n: "05", t: "Closeout", ui: "Documents" },
];

export function ConstructionLifecycle() {
  return (
    <section id="lifecycle" className="relative overflow-hidden py-20 sm:py-28">
      <Photo src={photos.siteOverview} alt="Construction project progressing on site" overlay="navy" />
      <div className="absolute inset-0 bg-brand-navy/65" aria-hidden="true" />

      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-light">Construction Lifecycle</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              See the Project Through.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 overflow-x-auto pb-2">
            <div className="relative flex min-w-[800px] items-start justify-between gap-4">
              <div className="absolute left-8 right-8 top-8 h-px bg-brand-orange/50" aria-hidden="true" />
              {STAGES.map((s) => (
                <div key={s.n} className="relative z-10 flex w-36 flex-col items-center text-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-[11px] font-bold text-white">
                    {s.n}
                  </span>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">{s.t}</p>
                  <div className="mt-4 w-full">
                    <MiniThumb label={s.ui} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
