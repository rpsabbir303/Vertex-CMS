import { Reveal } from "./Reveal";

const BEFORE = ["Excel", "Emails", "Paper", "PDF", "Phone", "Separate Accounting", "Scattered Photos"];
const AFTER = ["Projects", "Financials", "Field", "Safety", "Documents", "AI", "Mobile"];

export function BeforeAfter() {
  return (
    <section id="control" className="bg-brand-soft py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="headline uppercase">
              From Disconnected Work
              <br />
              To Complete Control.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Without CMS</p>
              <div className="relative mt-8 h-64">
                {BEFORE.map((item, i) => (
                  <div
                    key={item}
                    className="absolute rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm"
                    style={{
                      left: `${6 + (i % 4) * 22}%`,
                      top: `${8 + Math.floor(i / 2) * 16 + (i % 3) * 5}%`,
                      transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (5 + i * 0.8)}deg)`,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="min-h-[340px] rounded-2xl border border-brand-blue/20 bg-brand-navy p-6 text-white shadow-lift">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange">With VertexBuild</p>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {AFTER.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-5 text-center text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-slate-300">One operating system for construction</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
