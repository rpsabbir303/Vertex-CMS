import { HeroPortfolioDashboard } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

const NODES = [
  { label: "Projects", pos: "left-[4%] top-[18%]" },
  { label: "Financials", pos: "right-[2%] top-[14%]" },
  { label: "Field", pos: "left-[0%] bottom-[28%]" },
  { label: "Safety", pos: "right-[0%] bottom-[24%]" },
  { label: "Documents", pos: "left-[18%] bottom-[6%]" },
  { label: "AI", pos: "right-[16%] bottom-[4%]" },
  { label: "Workforce", pos: "left-[8%] top-[48%]" },
  { label: "Scheduling", pos: "right-[6%] top-[46%]" },
];

export function ProductOverview() {
  return (
    <section id="overview" className="bg-white py-20 sm:py-24">
      <div className="container-wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-blue">See the Whole Job</p>
            <h2 className="headline mt-3">One platform. Every part of construction.</h2>
            <p className="copy mx-auto mt-4 text-center">
              A connected operating system for projects, money, field work, compliance, documents,
              and intelligence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
              {NODES.map((n) => (
                <span
                  key={n.label}
                  className={`absolute ${n.pos} rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy shadow-soft`}
                >
                  {n.label}
                </span>
              ))}
            </div>

            <div className="relative z-10 mx-auto max-w-3xl overflow-x-auto">
              <div className="min-w-[520px] sm:min-w-0 [&_.absolute]:!hidden">
                <HeroPortfolioDashboard />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden">
              {NODES.map((n) => (
                <span key={n.label} className="rounded-full border border-slate-200 bg-brand-soft px-3 py-1.5 text-[11px] font-semibold text-brand-navy">
                  {n.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
