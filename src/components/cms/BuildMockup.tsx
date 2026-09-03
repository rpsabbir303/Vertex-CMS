import { CmsChrome, Kpi } from "./CmsChrome";

export function BuildMockup() {
  return (
    <div className="space-y-4">
      <CmsChrome
        title="field / riverfront"
        nav={["Daily Logs", "Schedule", "Workforce", "Equipment", "Tasks", "Photos"]}
      >
        <div className="p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#667085]">Build · Field → Office</p>
              <p className="text-sm font-semibold text-[#08233F]">Today on site · Riverfront Office</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
              Sync ready
            </span>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Kpi label="Weather" value="82°F Clear" />
            <Kpi label="Crew on site" value="18" tone="blue" />
            <Kpi label="Equipment" value="6 active" />
            <Kpi label="Photos today" value="12" tone="orange" />
          </div>

          <div className="grid gap-3 lg:grid-cols-5">
            <div className="rounded-xl border border-slate-200 p-3 lg:col-span-3">
              <p className="mb-2 text-xs font-semibold text-[#08233F]">Schedule progress</p>
              <div className="space-y-2">
                {[
                  ["Foundation — Zone B", 100, "#146EF5"],
                  ["Structure — Level 2", 78, "#146EF5"],
                  ["MEP rough-in", 54, "#FF6A00"],
                  ["Look-ahead · Week 12", 20, "#94A3B8"],
                ].map(([n, p, c]) => (
                  <div key={n as string}>
                    <div className="mb-1 flex justify-between text-[10px]">
                      <span className="text-[#08233F]">{n}</span>
                      <span className="font-semibold text-[#08233F]">{p}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full" style={{ width: `${p}%`, background: c as string }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-3 lg:col-span-2">
              <p className="mb-2 text-xs font-semibold text-[#08233F]">Daily log draft</p>
              <ul className="space-y-2 text-[11px] text-[#667085]">
                <li className="rounded-lg bg-[#F5F8FC] px-2.5 py-2 text-[#08233F]">Concrete foundation — Zone B</li>
                <li className="rounded-lg bg-[#F5F8FC] px-2.5 py-2 text-[#08233F]">Electrical rough-in — Level 2</li>
                <li className="rounded-lg bg-[#FF6A00]/5 px-2.5 py-2 text-[#FF6A00]">Issue: Delivery delayed 1 day</li>
              </ul>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {[
                  ["from-amber-200 to-stone-400", "Zone B pour"],
                  ["from-sky-200 to-slate-400", "Level 2 frame"],
                  ["from-orange-200 to-stone-500", "MEP rough-in"],
                ].map(([g, label]) => (
                  <div key={label} className={`relative aspect-square overflow-hidden rounded-md bg-gradient-to-br ${g}`}>
                    <span className="absolute inset-x-0 bottom-0 bg-black/45 px-1 py-0.5 text-[8px] text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CmsChrome>

      {/* Mobile companion */}
      <div className="flex justify-center sm:justify-end">
        <div className="w-[150px] overflow-hidden rounded-[1.6rem] border-[6px] border-[#0B1A2B] bg-white shadow-lg sm:w-[160px]">
          <div className="mx-auto mt-1.5 h-1 w-12 rounded-full bg-slate-200" />
          <div className="min-h-[200px] p-3">
            <p className="text-[9px] text-[#667085]">Field app</p>
            <p className="text-xs font-semibold text-[#08233F]">Daily Log</p>
            <div className="mt-2 rounded-lg bg-[#146EF5]/5 px-2 py-1.5 text-[9px] font-medium text-[#146EF5]">
              GPS tagged · Offline sync
            </div>
            <div className="mt-2 space-y-1 text-[9px] text-[#667085]">
              <p>Crew 18 · Photos 12</p>
              <p>Timesheet · Clocked in</p>
            </div>
          </div>
          <div className="flex justify-around border-t border-slate-100 py-2 text-[8px] text-[#667085]">
            <span className="font-semibold text-[#146EF5]">Home</span>
            <span>Logs</span>
            <span>Capture</span>
            <span>Time</span>
          </div>
        </div>
      </div>
    </div>
  );
}
