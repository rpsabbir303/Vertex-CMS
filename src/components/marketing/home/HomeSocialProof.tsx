import { Reveal } from "@/components/Reveal";

const LOGOS = ["Apex Build", "Northline GC", "Harbor Civil", "Summit Group", "Ridgeway", "Atlas Field"] as const;

export function HomeSocialProof() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#050d18] py-20 sm:py-24">
      <div className="site-shell">
        <Reveal className="text-center">
          <p className="home-label">Trust</p>
          <h2 className="home-display mt-4 text-3xl sm:text-4xl">Built for construction operators.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] text-slate-500">
            Customer logos and case studies appear here when approved. Placeholder brands below are for layout only.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="flex min-h-[72px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-3 text-center text-[12px] font-semibold tracking-wide text-slate-500"
            >
              {name}
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="home-panel mx-auto mt-10 max-w-3xl p-6 sm:p-8">
          <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">
            “Vertex gave our teams one place to see what was happening across the project — from the field to the
            financials.”
          </p>
          <p className="mt-5 text-[13px] text-slate-400">
            Demo Client · Director of Operations · Sample Construction Co.
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-slate-600">
            Placeholder testimonial · not a real customer
          </p>
        </Reveal>
      </div>
    </section>
  );
}
