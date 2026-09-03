export function UnderstandMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#061A30] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6A00]/20 text-[#FF6A00]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Vertex AI · Project Analyst</p>
            <p className="text-[10px] text-slate-400">Grounded in live CMS data · Confirm before write</p>
          </div>
        </div>
        <span className="rounded-full bg-[#FF6A00]/15 px-2.5 py-1 text-[10px] font-semibold text-[#FF6A00]">Live</span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3 border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3 text-sm text-slate-100">
            What is putting the Riverfront project at risk?
          </div>

          <div className="rounded-2xl rounded-tr-md border border-[#FF6A00]/25 bg-white/[0.04] px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#FF6A00]">
              3 areas need attention
            </p>

            <div className="mt-3 space-y-2.5">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex justify-between text-[12px]">
                  <span className="font-semibold text-white">Schedule Risk</span>
                  <span className="text-[#FF6A00]">+8 day potential delay</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">Critical path impact on MEP Level 2</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex justify-between text-[12px]">
                  <span className="font-semibold text-white">Financial Risk</span>
                  <span className="text-[#FF6A00]">+3.2% projected variance</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">Change order exposure rising</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex justify-between text-[12px]">
                  <span className="font-semibold text-white">Open Issues</span>
                  <span className="text-[#146EF5]">12 unresolved RFIs</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">4 overdue · architect queue</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-[#FF6A00]/20 bg-[#FF6A00]/10 p-3">
              <p className="text-[11px] font-semibold text-[#FF6A00]">Recommended actions</p>
              <ul className="mt-2 space-y-1 text-[12px] text-slate-200">
                <li>Review subcontractor schedule</li>
                <li>Resolve pending RFIs</li>
                <li>Review change order exposure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Supporting intelligence</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Budget trend", "Watch"],
              ["Safety", "92%"],
              ["Cash position", "Stable"],
              ["Docs indexed", "Live"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[10px] text-slate-400">{l}</p>
                <p className="mt-1 text-sm font-bold text-white">{v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="mb-2 text-[11px] font-semibold text-white">Risk pulse</p>
            <div className="flex h-16 items-end gap-1">
              {[40, 48, 45, 62, 58, 70, 66, 78, 74, 82].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i > 6 ? "rgba(255,106,0,0.75)" : "rgba(20,110,245,0.55)",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["AI Assistant", "Risk Intelligence", "Document Intelligence", "Reports"].map((t) => (
              <span key={t} className="rounded-lg border border-white/10 px-2 py-1 text-[9px] font-medium text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
