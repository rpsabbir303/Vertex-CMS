import { Reveal } from "@/components/Reveal";

const TARGETS = [
  {
    from: "28%",
    to: "below 12%",
    label: "Project cost overruns",
    note: "Target outcome",
  },
  {
    from: "14 days",
    to: "3 days",
    label: "Pay application cycle",
    note: "Target outcome",
  },
  {
    from: "—",
    to: "98%+",
    label: "Billable capture",
    note: "Target outcome",
  },
  {
    from: "—",
    to: "4+ hrs/week",
    label: "Manual reporting reduction",
    note: "Target outcome",
  },
] as const;

export function HomeImpact() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="home-label">Business Impact</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            Connected data
            <span className="block text-slate-300">changes the numbers.</span>
          </h2>
          <p className="home-body mt-5 max-w-xl">
            Documented business outcome targets for teams running construction on one connected operating system.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TARGETS.map((t) => (
            <div key={t.label} className="home-panel flex min-h-[200px] flex-col justify-between p-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{t.note}</p>
                <p className="mt-4 text-[13px] text-slate-500 line-through decoration-slate-600">{t.from}</p>
                <p className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl">{t.to}</p>
              </div>
              <p className="mt-6 text-[13px] font-medium text-slate-300">{t.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
