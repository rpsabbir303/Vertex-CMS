import { CmsChrome } from "./CmsChrome";

export function ControlMockup() {
  return (
    <CmsChrome
      title="financials / riverfront"
      nav={["Contracts", "SOV", "Change Orders", "Budget", "Job Cost", "GL", "AP / AR", "Cash Flow"]}
    >
      <div className="p-3.5 sm:p-5">
        <div className="mb-3.5 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">Financial command</p>
            <p className="text-[13px] font-semibold text-[#08233F] sm:text-sm">Riverfront Office · Contract through cash</p>
          </div>
          <span className="rounded-full bg-[#FF6A00]/10 px-2.5 py-1 text-[10px] font-semibold text-[#FF6A00]">
            Variance +2.4%
          </span>
        </div>

        <div className="mb-3.5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Contract", "$4.82M"],
            ["Original", "$4.50M"],
            ["Approved COs", "+$320K"],
            ["Committed", "$3.41M"],
            ["Billed", "$3.21M"],
            ["Paid", "$2.84M"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200/90 bg-[#F5F8FC]/90 p-2.5 sm:p-3">
              <p className="text-[9px] text-[#667085] sm:text-[10px]">{l}</p>
              <p className={`mt-1 text-[13px] font-bold sm:text-sm ${i === 2 ? "text-[#FF6A00]" : "text-[#08233F]"}`}>
                {v}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm lg:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-[#08233F]">Budget vs Actual</p>
              <div className="flex items-center gap-2 text-[9px] text-[#667085]">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#146EF5]/50" /> Budget
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" /> Actual
                </span>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                ["03 Concrete", 72, 78],
                ["05 Metals", 55, 52],
                ["26 Electrical", 40, 44],
                ["09 Finishes", 18, 15],
              ].map(([c, b, a]) => (
                <div key={c as string}>
                  <div className="mb-1 flex justify-between text-[10px] text-[#667085]">
                    <span className="font-medium text-[#08233F]">{c}</span>
                    <span>
                      B {b}% · A {a}%
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-slate-100">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-[#146EF5]/40" style={{ width: `${b}%` }} />
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#FF6A00]"
                      style={{ width: `${a}%`, opacity: 0.85 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm lg:col-span-3">
            <p className="mb-2.5 text-xs font-semibold text-[#08233F]">Cash flow · 12 weeks</p>
            <div className="flex h-[88px] items-end gap-1.5 sm:h-24">
              {[42, 48, 45, 58, 52, 64, 60, 72, 68, 78, 74, 82].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i > 8
                          ? "linear-gradient(180deg,#FF6A00 0%,rgba(255,106,0,0.45) 100%)"
                          : "linear-gradient(180deg,#146EF5 0%,rgba(20,110,245,0.35) 100%)",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-[#94A3B8]">
              <span>W1</span>
              <span>W6</span>
              <span>W12</span>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm lg:col-span-3">
            <p className="mb-2 text-xs font-semibold text-[#08233F]">Contracts & change orders</p>
            <div className="overflow-hidden rounded-lg border border-slate-100">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-[#F8FAFC] text-[9px] uppercase tracking-wide text-[#667085]">
                  <tr>
                    <th className="px-2.5 py-1.5 font-semibold">Item</th>
                    <th className="px-2.5 py-1.5 font-semibold">Status</th>
                    <th className="px-2.5 py-1.5 text-right font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["CO-014 Structural steel", "Approved", "$128K", true],
                    ["CO-018 MEP redesign", "Pending", "$84K", false],
                    ["COR-022 Site drainage", "Draft", "$41K", false],
                    ["Pay App #08 · G702", "Ready", "$412K", true],
                  ].map(([n, s, v, ok]) => (
                    <tr key={n as string} className="border-t border-slate-100">
                      <td className="truncate px-2.5 py-2 font-medium text-[#08233F]">{n}</td>
                      <td className="px-2.5 py-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                            s === "Pending"
                              ? "bg-[#FF6A00]/10 text-[#FF6A00]"
                              : ok
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-slate-100 text-[#667085]"
                          }`}
                        >
                          {s}
                        </span>
                      </td>
                      <td className="px-2.5 py-2 text-right font-semibold text-[#146EF5]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 lg:col-span-2 lg:grid-cols-1">
            <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm">
              <p className="text-[10px] text-[#667085]">AP / AR position</p>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-[#667085]">AP open</p>
                  <p className="text-sm font-bold text-[#08233F]">$186K</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-[#667085]">AR open</p>
                  <p className="text-sm font-bold text-[#146EF5]">$412K</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-[#08233F] p-3 text-white shadow-sm">
              <p className="text-[10px] text-slate-300">Cash position</p>
              <p className="mt-1 text-lg font-bold">$1.24M</p>
              <p className="mt-0.5 text-[10px] text-slate-400">Accounting · GL aligned</p>
            </div>
          </div>
        </div>
      </div>
    </CmsChrome>
  );
}
