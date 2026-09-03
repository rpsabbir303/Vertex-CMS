import { CmsChrome, Kpi } from "./CmsChrome";

export function PlanMockup() {
  return (
    <CmsChrome
      title="plan / portfolio"
      nav={["Portfolio", "Projects", "Preconstruction", "Estimating", "Bids", "Tasks"]}
    >
      <div className="p-3.5 sm:p-5">
        <div className="mb-3.5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">Portfolio overview</p>
            <p className="text-[13px] font-semibold text-[#08233F] sm:text-sm">
              Projects · Preconstruction · Estimating
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            Schedule health 92%
          </span>
        </div>

        <div className="mb-3.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Kpi label="Active projects" value="18" tone="blue" />
          <Kpi label="In bidding" value="5" />
          <Kpi label="Estimate pipeline" value="$12.4M" tone="orange" />
          <Kpi label="Milestones due" value="7" />
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm lg:col-span-3">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-xs font-semibold text-[#08233F]">Active projects</p>
              <span className="text-[10px] text-[#667085]">Portfolio</span>
            </div>
            <div className="space-y-2">
              {[
                { n: "Riverfront Office Complex", s: "Active", p: 68, h: "Healthy" },
                { n: "Northside Medical Expansion", s: "Precon", p: 22, h: "Watch" },
                { n: "Harbor Utility Upgrade", s: "Bidding", p: 8, h: "Healthy" },
                { n: "Civic Center Wing B", s: "Awarded", p: 12, h: "Healthy" },
              ].map((row) => (
                <div
                  key={row.n}
                  className="rounded-lg border border-slate-100 bg-[#F5F8FC]/80 px-3 py-2.5 transition hover:border-[#146EF5]/25"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[12px] font-medium text-[#08233F]">{row.n}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                        row.h === "Watch" ? "bg-[#FF6A00]/10 text-[#FF6A00]" : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {row.h}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-14 shrink-0 text-[10px] text-[#667085]">{row.s}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-[#146EF5]" style={{ width: `${row.p}%` }} />
                    </div>
                    <span className="text-[10px] font-semibold text-[#08233F]">{row.p}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:col-span-2">
            <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm">
              <p className="mb-2 text-xs font-semibold text-[#08233F]">Upcoming milestones</p>
              <ul className="space-y-2 text-[11px]">
                {[
                  ["Foundation pour — Zone B", "Mar 24"],
                  ["Bid package: Concrete", "Mar 26"],
                  ["Estimate review — MEP", "Mar 28"],
                ].map(([t, d]) => (
                  <li key={t} className="flex justify-between gap-2 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-[#08233F]">{t}</span>
                    <span className="shrink-0 font-medium text-[#667085]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#146EF5]/20 bg-gradient-to-br from-[#146EF5]/[0.07] to-white p-3">
              <p className="text-xs font-semibold text-[#146EF5]">Preconstruction</p>
              <p className="mt-1 text-[11px] font-medium text-[#08233F]">EST-2041 · $2.48M · Margin 11.2%</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {["Estimate", "Bid", "Level", "Award"].map((s, i) => (
                  <span
                    key={s}
                    className={`rounded-md px-2 py-1 text-[9px] font-semibold ${
                      i < 2 ? "bg-[#146EF5] text-white" : "bg-white text-[#667085] shadow-sm"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CmsChrome>
  );
}

/** Compact secondary workflow strip: Estimate → Approved → Budget + SOV */
export function PlanWorkflowStrip() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_40px_rgba(8,35,63,0.1)]">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-[#F8FAFC] px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
        <p className="text-[10px] font-medium text-[#667085]">app.vertexcms.com / estimate → budget</p>
      </div>
      <div className="grid gap-0 sm:grid-cols-[1fr_auto_1fr_auto_1.15fr]">
        <div className="p-3.5 sm:p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#667085]">Estimate</p>
          <p className="mt-1 text-sm font-bold text-[#08233F]">EST-2041</p>
          <p className="mt-0.5 text-[11px] text-[#5B6B7C]">$2.48M · Margin 11.2%</p>
        </div>
        <div className="hidden items-center px-1 text-[#146EF5] sm:flex" aria-hidden="true">
          →
        </div>
        <div className="border-t border-slate-100 bg-emerald-50/60 p-3.5 sm:border-t-0 sm:border-l sm:p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-700">Approved</p>
          <p className="mt-1 text-sm font-bold text-[#08233F]">Awarded</p>
          <p className="mt-0.5 text-[11px] text-[#5B6B7C]">Ready for budget</p>
        </div>
        <div className="hidden items-center px-1 text-[#146EF5] sm:flex" aria-hidden="true">
          →
        </div>
        <div className="border-t border-slate-100 bg-[#146EF5]/[0.06] p-3.5 sm:border-t-0 sm:border-l sm:p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#146EF5]">Project budget + SOV</p>
          <p className="mt-1 text-sm font-bold text-[#08233F]">$2.48M committed</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Budget", "SOV", "Cost codes"].map((t) => (
              <span key={t} className="rounded-md bg-white px-2 py-0.5 text-[9px] font-semibold text-[#08233F] shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
