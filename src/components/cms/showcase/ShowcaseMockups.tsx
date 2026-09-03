import { ShowcaseChrome } from "./ShowcaseChrome";

/** MOCKUP 01 — Project / Portfolio Dashboard */
export function Mockup01Projects() {
  return (
    <ShowcaseChrome path="projects / portfolio" activeNav="Projects">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wide text-[#667085]">Portfolio</p>
          <p className="text-[12px] font-semibold text-[#08233F]">Active projects</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
          Health 92%
        </span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {[
          ["Active", "18", "#146EF5"],
          ["On track", "14", "#08233F"],
          ["Watch", "4", "#FF6A00"],
        ].map(([l, v, c]) => (
          <div key={l} className="rounded-lg border border-slate-200/80 bg-[#F5F8FC]/80 px-2 py-1.5">
            <p className="text-[8px] text-[#667085]">{l}</p>
            <p className="text-[12px] font-bold" style={{ color: c }}>
              {v}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          ["Riverfront Office", 68, "Active"],
          ["Northside Medical", 22, "Precon"],
          ["Harbor Utility", 8, "Bidding"],
        ].map(([n, p, s]) => (
          <div key={n as string} className="rounded-lg border border-slate-100 bg-[#F5F8FC]/60 px-2 py-1.5">
            <div className="flex items-center justify-between gap-1">
              <p className="truncate text-[10px] font-medium text-[#08233F]">{n}</p>
              <span className="shrink-0 text-[8px] text-[#667085]">{s}</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-[#146EF5]" style={{ width: `${p}%` }} />
              </div>
              <span className="text-[9px] font-semibold text-[#08233F]">{p}%</span>
            </div>
          </div>
        ))}
      </div>
    </ShowcaseChrome>
  );
}

/** MOCKUP 02 — Financial Dashboard */
export function Mockup02Financials() {
  return (
    <ShowcaseChrome path="financials / riverfront" activeNav="Financials">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wide text-[#667085]">Financials</p>
          <p className="text-[12px] font-semibold text-[#08233F]">Budget · Contracts · Cash</p>
        </div>
        <span className="rounded-full bg-[#FF6A00]/10 px-2 py-0.5 text-[9px] font-semibold text-[#FF6A00]">
          +2.4%
        </span>
      </div>
      <div className="mb-2 grid grid-cols-2 gap-1.5">
        {[
          ["Contract", "$4.82M"],
          ["Committed", "$3.41M"],
          ["Approved COs", "+$320K"],
          ["Cash flow", "$1.24M"],
        ].map(([l, v], i) => (
          <div key={l} className="rounded-lg border border-slate-200/80 bg-[#F5F8FC]/80 px-2 py-1.5">
            <p className="text-[8px] text-[#667085]">{l}</p>
            <p className={`text-[11px] font-bold ${i === 2 ? "text-[#FF6A00]" : "text-[#08233F]"}`}>{v}</p>
          </div>
        ))}
      </div>
      <p className="mb-1.5 text-[10px] font-semibold text-[#08233F]">Budget vs Actual</p>
      <div className="space-y-1.5">
        {[
          ["03 Concrete", 72, 78],
          ["05 Metals", 55, 52],
          ["26 Electrical", 40, 44],
        ].map(([c, b, a]) => (
          <div key={c as string}>
            <div className="mb-0.5 flex justify-between text-[8px] text-[#667085]">
              <span>{c}</span>
              <span>
                B {b}% · A {a}%
              </span>
            </div>
            <div className="relative h-1.5 rounded-full bg-slate-100">
              <div className="absolute inset-y-0 left-0 rounded-full bg-[#146EF5]/35" style={{ width: `${b}%` }} />
              <div className="absolute inset-y-0 left-0 rounded-full bg-[#FF6A00]/90" style={{ width: `${a}%` }} />
            </div>
          </div>
        ))}
      </div>
    </ShowcaseChrome>
  );
}

/** MOCKUP 03 — Field / Operations Dashboard */
export function Mockup03Field() {
  return (
    <ShowcaseChrome path="field / daily operations" activeNav="Field">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wide text-[#667085]">Field operations</p>
          <p className="text-[12px] font-semibold text-[#08233F]">Today on site</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
          Sync ready
        </span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {[
          ["Crew", "18"],
          ["Equipment", "6"],
          ["Photos", "12"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-lg border border-slate-200/80 bg-[#F5F8FC]/80 px-2 py-1.5 text-center">
            <p className="text-[8px] text-[#667085]">{l}</p>
            <p className="text-[12px] font-bold text-[#146EF5]">{v}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-slate-100 bg-[#F5F8FC]/60 p-2">
        <p className="text-[10px] font-semibold text-[#08233F]">Daily activity</p>
        <ul className="mt-1.5 space-y-1 text-[9px] text-[#5B6B7C]">
          <li className="rounded-md bg-white px-2 py-1 text-[#08233F]">Foundation pour — Zone B</li>
          <li className="rounded-md bg-white px-2 py-1 text-[#08233F]">MEP rough-in · Level 2</li>
          <li className="rounded-md bg-[#FF6A00]/10 px-2 py-1 text-[#FF6A00]">Delivery delay · 1 day</li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="mb-1 text-[9px] font-semibold text-[#08233F]">Schedule progress</p>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[64%] rounded-full bg-[#146EF5]" />
        </div>
        <p className="mt-1 text-[8px] text-[#667085]">Workforce · Equipment · Updates</p>
      </div>
    </ShowcaseChrome>
  );
}

/** MOCKUP 04 — AI / Intelligence Dashboard */
export function Mockup04Intelligence() {
  return (
    <ShowcaseChrome path="ai / project analyst" activeNav="AI" dark>
      <div className="mb-2 flex items-center justify-between gap-2">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">AI & intelligence</p>
          <p className="text-[12px] font-semibold text-white">Project insights</p>
        </div>
        <span className="rounded-full bg-[#FF6A00]/20 px-2 py-0.5 text-[9px] font-semibold text-[#FF6A00]">
          Live
        </span>
      </div>
      <div className="mb-2 rounded-lg bg-white/10 px-2.5 py-2 text-[10px] text-slate-200">
        What is putting Riverfront at risk?
      </div>
      <div className="space-y-1.5 rounded-lg border border-[#FF6A00]/25 bg-white/[0.04] p-2">
        {[
          ["Schedule risk", "+8 days", "#FF6A00"],
          ["Cost variance", "+3.2%", "#FF6A00"],
          ["Open RFIs", "12", "#146EF5"],
        ].map(([l, v, c]) => (
          <div key={l} className="flex items-center justify-between text-[10px]">
            <span className="text-slate-300">{l}</span>
            <span className="font-semibold" style={{ color: c }}>
              {v}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-10 items-end gap-0.5">
        {[40, 52, 48, 62, 58, 70, 66, 78].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i > 5 ? "rgba(255,106,0,0.7)" : "rgba(20,110,245,0.55)",
            }}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[8px] text-slate-400">Reports · Insights · Construction data</p>
    </ShowcaseChrome>
  );
}
