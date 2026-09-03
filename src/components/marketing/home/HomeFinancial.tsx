import { Reveal } from "@/components/Reveal";
import { FinanceUI } from "@/components/mockups/ProductMockups";

const METRICS = [
  ["Budget", "$12.4M"],
  ["Committed", "$9.8M"],
  ["Actual", "$8.1M"],
  ["Forecast", "$12.9M"],
  ["Margin", "11.8%"],
  ["WIP", "$2.4M"],
  ["EAC", "$13.1M"],
  ["ETC", "$5.0M"],
] as const;

export function HomeFinancial() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#050d18] py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="home-label">Financial Intelligence</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            Know where
            <span className="block text-slate-300">the money is going.</span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map(([label, value], i) => (
            <div key={label} className="home-panel px-4 py-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</p>
              <p className={`mt-2 font-display text-2xl font-bold ${i === 4 ? "text-brand-orange" : "text-white"}`}>
                {value}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_80px_-36px_rgba(0,0,0,0.85)]">
          <FinanceUI />
        </Reveal>

        <p className="mt-4 text-center text-[12px] text-slate-500">
          Cash flow, WIP, billing and job cost — connected to the same project truth.
        </p>
      </div>
    </section>
  );
}
