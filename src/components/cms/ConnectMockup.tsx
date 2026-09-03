import { CmsChrome } from "./CmsChrome";

export function ConnectMockup() {
  return (
    <CmsChrome
      title="project / collaboration"
      nav={["Activity", "Tasks", "Team", "Approvals", "Messages", "Portals"]}
    >
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#667085]">Connect</p>
            <p className="text-sm font-semibold text-[#08233F]">One project · Everyone connected</p>
          </div>
          <div className="flex -space-x-2">
            {["PM", "SUP", "GC", "SUB", "OWN"].map((a) => (
              <span
                key={a}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#146EF5] text-[8px] font-bold text-white"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Flow strip */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-dashed border-[#146EF5]/25 bg-[rgba(20,110,245,0.04)] px-3 py-3">
          {["Office", "Field", "Subs", "Client"].map((n, i) => (
            <span key={n} className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#08233F]">
              <span className="rounded-lg bg-white px-2.5 py-1.5 shadow-sm">{n}</span>
              {i < 3 && <span className="text-[#146EF5]">→</span>}
            </span>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200 p-3 lg:col-span-3">
            <p className="mb-3 text-xs font-semibold text-[#08233F]">Project activity feed</p>
            <div className="space-y-2.5">
              {[
                { who: "Superintendent · M. Reyes", what: "Daily log submitted · Zone B", when: "12m", tone: "blue" },
                { who: "PM · J. Morgan", what: "Assigned RFI #184 follow-up", when: "41m", tone: "orange" },
                { who: "Sub · Apex Concrete", what: "Uploaded insurance COI", when: "2h", tone: "green" },
                { who: "Owner portal", what: "Pay App #08 viewed", when: "3h", tone: "blue" },
                { who: "Architect", what: "Drawing Rev C approved", when: "Yesterday", tone: "green" },
              ].map((row) => (
                <div key={row.what} className="flex gap-3 rounded-lg border border-slate-100 bg-[#F5F8FC]/60 px-3 py-2.5">
                  <span
                    className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                      row.tone === "orange"
                        ? "bg-[#FF6A00]"
                        : row.tone === "green"
                          ? "bg-emerald-500"
                          : "bg-[#146EF5]"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-[#08233F]">{row.what}</p>
                    <p className="text-[10px] text-[#667085]">{row.who}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-[#94A3B8]">{row.when}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:col-span-2">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="mb-2 text-xs font-semibold text-[#08233F]">Approvals queue</p>
              <ul className="space-y-2 text-[11px]">
                {[
                  ["Pay App #08", "Owner"],
                  ["Submittal 214", "Architect"],
                  ["CO-018", "PM"],
                ].map(([t, r]) => (
                  <li key={t} className="flex justify-between rounded-lg bg-[#F5F8FC] px-2.5 py-2">
                    <span className="font-medium text-[#08233F]">{t}</span>
                    <span className="text-[#FF6A00]">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="mb-2 text-xs font-semibold text-[#08233F]">Open tasks</p>
              <ul className="space-y-1.5 text-[11px] text-[#667085]">
                <li>• Resolve RFI #184</li>
                <li>• Confirm look-ahead</li>
                <li>• Collect lien waiver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CmsChrome>
  );
}
