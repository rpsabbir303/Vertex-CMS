import { Reveal } from "@/components/Reveal";
import { ProjectWorkspace } from "@/components/mockups/ProductMockups";

export function HomeProjectControl() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#050d18] py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <p className="home-label">Project Control</p>
            <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
              Build with complete
              <span className="block text-slate-300">project visibility.</span>
            </h2>
            <p className="home-body mt-5 max-w-md">
              Health, budget, schedule, change orders, documents and AI insights — in one project command surface.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-[12px] text-slate-400">
              {["Project Health", "Budget vs Cost", "Schedule", "Projected Profit", "Change Orders", "AI Insights"].map(
                (item) => (
                  <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    {item}
                  </li>
                )
              )}
            </ul>
          </Reveal>

          <Reveal delay={100} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_80px_-36px_rgba(0,0,0,0.8)]">
              <ProjectWorkspace />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
