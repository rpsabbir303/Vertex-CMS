import { CmsChrome } from "./CmsChrome";

function FloorPlanPreview() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden="true">
      <rect x="8" y="8" width="304" height="164" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      <rect x="20" y="20" width="120" height="70" fill="#EEF4FF" stroke="#146EF5" strokeWidth="1.2" />
      <text x="40" y="58" fill="#146EF5" fontSize="10" fontFamily="system-ui">Lobby</text>
      <rect x="150" y="20" width="148" height="70" fill="#FFF7ED" stroke="#FF6A00" strokeWidth="1.2" />
      <text x="185" y="58" fill="#FF6A00" fontSize="10" fontFamily="system-ui">Open Office</text>
      <rect x="20" y="100" width="90" height="60" fill="#ECFDF5" stroke="#059669" strokeWidth="1.2" />
      <text x="38" y="134" fill="#059669" fontSize="10" fontFamily="system-ui">Core</text>
      <rect x="120" y="100" width="178" height="60" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.2" />
      <text x="165" y="134" fill="#64748B" fontSize="10" fontFamily="system-ui">Meeting / MEP</text>
      <circle cx="260" cy="45" r="8" fill="none" stroke="#FF6A00" strokeWidth="1.5" />
      <line x1="260" y1="37" x2="260" y2="53" stroke="#FF6A00" strokeWidth="1" />
      <line x1="252" y1="45" x2="268" y2="45" stroke="#FF6A00" strokeWidth="1" />
    </svg>
  );
}

export function ProtectMockup() {
  return (
    <CmsChrome
      title="documents / riverfront"
      nav={["Drawings", "Specifications", "Safety", "Submittals", "RFIs", "Closeout"]}
    >
      <div className="grid lg:grid-cols-[1fr_200px]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r sm:p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#667085]">Protect</p>
              <p className="text-sm font-semibold text-[#08233F]">A-101 Floor Plan · Rev C</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-lg bg-[#146EF5]/10 px-2.5 py-1 text-[10px] font-semibold text-[#146EF5]">
                Current
              </span>
              <span className="rounded-lg bg-[#F5F8FC] px-2.5 py-1 text-[10px] font-semibold text-[#667085]">
                Markup
              </span>
            </div>
          </div>

          <div className="mb-3 overflow-hidden rounded-xl border border-[#146EF5]/20 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#F8FAFC] px-3 py-1.5 text-[10px] text-[#667085]">
              <span>Sheet A-101 · Issued for construction</span>
              <span className="font-semibold text-[#146EF5]">1:100</span>
            </div>
            <div className="h-44 p-2 sm:h-52">
              <FloorPlanPreview />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-[10px] text-[#667085]">Previous</p>
              <p className="text-sm font-semibold text-slate-500">REVISION 04</p>
              <p className="mt-1 text-[10px] text-[#667085]">Superseded · Mar 4</p>
            </div>
            <div className="rounded-xl border border-[#146EF5]/30 bg-[#146EF5]/5 p-3">
              <p className="text-[10px] text-[#146EF5]">Current</p>
              <p className="text-sm font-semibold text-[#08233F]">REVISION 05</p>
              <p className="mt-1 text-[10px] text-[#667085]">Approved · Mar 18</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 bg-[#F5F8FC]/50 p-4">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-xs font-semibold text-[#08233F]">Safety score</p>
            <p className="mt-1 text-2xl font-bold text-emerald-600">92%</p>
            <p className="text-[10px] text-[#667085]">2 open observations · 18 inspections</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="mb-2 text-xs font-semibold text-[#08233F]">Approvals</p>
            <ul className="space-y-1.5 text-[10px]">
              <li className="flex justify-between">
                <span>Submittal 214</span>
                <span className="text-emerald-600">Approved</span>
              </li>
              <li className="flex justify-between">
                <span>RFI 184</span>
                <span className="text-[#FF6A00]">Overdue</span>
              </li>
              <li className="flex justify-between">
                <span>Toolbox talk</span>
                <span className="text-[#146EF5]">Complete</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="mb-2 text-xs font-semibold text-[#08233F]">Activity</p>
            <ul className="space-y-1.5 text-[10px] text-[#667085]">
              <li>Rev C uploaded · P. Nguyen</li>
              <li>Markup on S-201 · sheet 4</li>
              <li>COI alert · Apex Concrete</li>
            </ul>
          </div>
        </div>
      </div>
    </CmsChrome>
  );
}
