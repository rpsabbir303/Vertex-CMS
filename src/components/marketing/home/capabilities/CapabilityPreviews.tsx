import { CapabilityAppChrome, Metric, Panel } from "./CapabilityAppChrome";

export function PreconstructionPreview() {
  return (
    <CapabilityAppChrome activeId="preconstruction" url="app.vertexcms.com / precon / riverside">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-cyan">Opportunity</p>
          <p className="mt-1 font-display text-lg font-semibold text-white">Riverside Office Complex</p>
        </div>
        <div className="flex gap-1.5 text-[10px] font-semibold">
          {["CRM", "Estimating", "Takeoff", "Bidding"].map((t, i) => (
            <span
              key={t}
              className={`rounded-md px-2 py-1 ${
                i === 1 ? "bg-brand-orange/15 text-brand-orange" : "border border-white/10 text-slate-400"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Estimated Value" value="$24.6M" />
        <Metric label="Estimate" value="$18.4M" tone="blue" />
        <Metric label="Bid Status" value="Preparing" tone="orange" />
        <Metric label="Probability" value="72%" tone="green" />
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        <Panel title="Cost Breakdown" className="lg:col-span-7">
          <div className="space-y-2">
            {[
              ["Materials", 78],
              ["Labor", 64],
              ["Subcontractors", 52],
              ["Equipment", 38],
            ].map(([label, w]) => (
              <div key={label as string}>
                <div className="mb-1 flex justify-between text-[10px] text-slate-400">
                  <span>{label}</span>
                  <span>{w}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-brand-blue" style={{ width: `${w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Workflow" className="lg:col-span-5">
          <div className="flex flex-col gap-2">
            {["Plan", "Estimate", "Bid"].map((step, i) => (
              <div
                key={step}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 text-[12px] ${
                  i === 1
                    ? "border-brand-orange/30 bg-brand-orange/10 text-brand-orange"
                    : "border-white/10 text-slate-300"
                }`}
              >
                <span className="font-semibold">{step}</span>
                <span className="text-[10px] text-slate-500">{i === 1 ? "Active" : i === 0 ? "Done" : "Next"}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {["Estimate", "Takeoff", "Bid", "Contacts"].map((p) => (
              <div key={p} className="rounded-md border border-white/10 px-2 py-1.5 text-center text-[10px] text-slate-400">
                {p}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </CapabilityAppChrome>
  );
}

export function ProjectManagementPreview() {
  return (
    <CapabilityAppChrome activeId="project-management" url="app.vertexcms.com / projects / riverside">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue">Projects</p>
          <p className="mt-1 font-display text-lg font-semibold text-white">Riverside Office Complex</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
          In Progress
        </span>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Project Health" value="75%" tone="green" />
        <Metric label="Open RFIs" value="12" tone="orange" />
        <Metric label="Submittals" value="8" tone="blue" />
        <Metric label="Change Orders" value="3" />
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        <Panel title="Schedule Timeline" className="lg:col-span-8">
          <div className="space-y-2.5">
            {[
              ["Foundation", 100, "bg-emerald-400"],
              ["Structure", 72, "bg-brand-blue"],
              ["MEP Rough-in", 38, "bg-brand-orange"],
              ["Interior", 12, "bg-slate-500"],
            ].map(([name, w, color]) => (
              <div key={name as string} className="grid grid-cols-[88px_1fr] items-center gap-2">
                <span className="truncate text-[10px] text-slate-400">{name}</span>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${color}`} style={{ width: `${w}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Schedule", "Documents", "RFIs", "Submittals", "Change Orders"].map((t) => (
              <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-400">
                {t}
              </span>
            ))}
          </div>
        </Panel>
        <Panel title="Recent Activity" className="lg:col-span-4">
          <ul className="space-y-2 text-[11px] text-slate-400">
            <li>RFI #214 answered · Structure</li>
            <li>Submittal package 08 approved</li>
            <li>CO #03 under review</li>
            <li>Schedule update published</li>
          </ul>
          <p className="mt-3 text-[10px] font-semibold text-emerald-300">On Track · 75% health</p>
        </Panel>
      </div>
    </CapabilityAppChrome>
  );
}

export function FinancialPreview() {
  return (
    <CapabilityAppChrome activeId="financial-control" url="app.vertexcms.com / financials / riverside">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Financial Control</p>
          <p className="mt-1 font-display text-lg font-semibold text-white">Budget · Job Cost · Billing</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Budget", "Job Cost", "Accounting", "Billing", "WIP", "Cash Flow"].map((t) => (
            <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-[9px] text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <Metric label="Budget" value="$148.7M" />
        <Metric label="Committed" value="$102.4M" tone="blue" />
        <Metric label="Actual" value="$96.8M" />
        <Metric label="Forecast" value="$154.2M" tone="orange" />
        <Metric label="Margin" value="12.6%" tone="green" />
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        <Panel title="Budget vs Cost" className="lg:col-span-6">
          <div className="flex h-28 items-end gap-1.5">
            {[48, 56, 52, 64, 60, 72, 68, 78, 74, 86, 82, 90].map((h, i) => (
              <div key={i} className="relative flex-1 rounded-sm bg-brand-blue/20" style={{ height: `${h}%` }}>
                <div
                  className="absolute bottom-0 w-full rounded-sm bg-brand-orange/85"
                  style={{ height: `${Math.max(26, h - 16)}%` }}
                />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Cash Flow Forecast" className="lg:col-span-3">
          <p className="font-display text-2xl font-bold text-white">$4.3M</p>
          <p className="mt-1 text-[11px] text-slate-500">30-day net position</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-brand-blue" />
          </div>
        </Panel>
        <Panel title="Open Items" className="lg:col-span-3">
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li className="flex justify-between">
              <span>WIP</span>
              <span className="font-semibold text-white">$2.4M</span>
            </li>
            <li className="flex justify-between">
              <span>Pay Applications</span>
              <span className="font-semibold text-brand-orange">6 open</span>
            </li>
            <li className="flex justify-between">
              <span>AIA Billing</span>
              <span className="font-semibold text-white">App #12</span>
            </li>
          </ul>
        </Panel>
      </div>
    </CapabilityAppChrome>
  );
}

export function FieldOperationsPreview() {
  return (
    <CapabilityAppChrome activeId="field-operations" url="app.vertexcms.com / field / daily-logs">
      <div className="grid gap-3 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-teal">Daily Log</p>
              <p className="mt-1 font-display text-lg font-semibold text-white">May 12, 2026</p>
            </div>
            <span className="rounded-full border border-brand-blue/25 bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
              SYNCED
            </span>
          </div>

          <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Metric label="Weather" value="72°F Sunny" />
            <Metric label="Workers" value="32" tone="blue" />
            <Metric label="Photos" value="12" />
            <Metric label="Open Punch" value="8" tone="orange" />
          </div>

          <Panel title="Work Performed">
            <p className="text-[13px] text-slate-200">Concrete pour — Level 2</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <div className="rounded-lg border border-white/10 px-3 py-2">
                Equipment
                <p className="mt-1 font-semibold text-white">2 Cranes · 1 Pump</p>
              </div>
              <div className="rounded-lg border border-white/10 px-3 py-2">
                Modules
                <p className="mt-1 font-semibold text-white">Drawings · T&M · Safety · Time</p>
              </div>
            </div>
          </Panel>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 lg:col-span-4">
          <div className="w-[148px] overflow-hidden rounded-[1.6rem] border-[5px] border-slate-700 bg-[#0a1628] shadow-lg">
            <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-white/20" />
            <div className="p-3">
              <p className="text-[9px] text-slate-500">Field Capture</p>
              <p className="text-[12px] font-semibold text-white">Daily Log</p>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {["Photos", "RFI", "Punch", "Safety"].map((t) => (
                  <div key={t} className="rounded-md border border-white/10 px-1.5 py-2 text-center text-[9px] text-slate-300">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {["OFFLINE", "QUEUED", "SYNCING", "SYNCED"].map((s, i) => (
              <span
                key={s}
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  i === 3 ? "bg-brand-orange text-white" : "border border-white/10 text-slate-500"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CapabilityAppChrome>
  );
}

export function AIIntelligencePreview() {
  return (
    <CapabilityAppChrome activeId="ai-intelligence" url="app.vertexcms.com / ai / project-risk">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-violet">Vertex AI</p>
          <p className="mt-1 font-display text-lg font-semibold text-white">Project Intelligence</p>
        </div>
        <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
          Human confirmation required
        </span>
      </div>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {["Projects", "Financials", "Documents", "Field Data"].map((t) => (
          <span key={t} className="rounded-md border border-brand-violet/25 bg-brand-violet/10 px-2 py-1 text-[10px] text-slate-300">
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3 text-[13px] text-slate-100">
          Which projects are at risk of exceeding budget?
        </div>
        <div className="ml-auto max-w-[96%] rounded-2xl rounded-tr-md border border-brand-orange/25 bg-[#06111f] px-4 py-4">
          <p className="text-[13px] text-slate-100">I found 3 projects with elevated cost-overrun risk.</p>
          <div className="mt-3 space-y-2">
            {[
              ["Riverside Office Complex", "+8.4%", "Forecast variance"],
              ["Waterfront Tower", "+5.7%", "Pending change orders"],
              ["Bridgeway Plaza", "+3.1%", "Material cost acceleration"],
            ].map(([n, d, r]) => (
              <div key={n} className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <div>
                  <p className="text-[12px] font-semibold text-white">{n}</p>
                  <p className="text-[10px] text-slate-500">{r}</p>
                </div>
                <span className="text-[12px] font-bold text-brand-orange">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-brand-blue/25 bg-brand-blue/10 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue">AI Insight</p>
            <p className="mt-1 text-[13px] text-slate-100">Review change order #18 before approval.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white">View Details</span>
              <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[11px] font-semibold text-white">Confirm</span>
              <span className="rounded-md border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-slate-300">
                Request Changes
              </span>
            </div>
          </div>
        </div>
      </div>
    </CapabilityAppChrome>
  );
}

export function CloseoutPreview() {
  return (
    <CapabilityAppChrome activeId="closeout" url="app.vertexcms.com / closeout / riverside">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300">Project Closeout</p>
          <p className="mt-1 font-display text-lg font-semibold text-white">Riverside Office Complex</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
          Completion 92%
        </span>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="Completion" value="92%" tone="green" />
        <Metric label="Open Punch" value="14" tone="orange" />
        <Metric label="Documents" value="98%" tone="blue" />
        <Metric label="Warranty Items" value="6" />
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        <Panel title="Punch Completion" className="lg:col-span-5">
          <div className="mb-2 flex items-end justify-between">
            <p className="font-display text-3xl font-bold text-white">86%</p>
            <p className="text-[11px] text-slate-500">14 open · 88 closed</p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[86%] rounded-full bg-emerald-400" />
          </div>
        </Panel>
        <Panel title="Document Status" className="lg:col-span-3">
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li className="flex justify-between"><span>As-builts</span><span className="text-emerald-300">Complete</span></li>
            <li className="flex justify-between"><span>O&M</span><span className="text-brand-orange">2 pending</span></li>
            <li className="flex justify-between"><span>Warranties</span><span className="text-white">In review</span></li>
          </ul>
        </Panel>
        <Panel title="Outstanding" className="lg:col-span-4">
          <ul className="space-y-2 text-[11px] text-slate-400">
            <li>Punch #214 · Lobby finishes</li>
            <li>Warranty item · Roof sealant</li>
            <li>Final affidavit package</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Punch", "Documents", "Warranty"].map((t) => (
              <span key={t} className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-400">
                {t}
              </span>
            ))}
          </div>
        </Panel>
      </div>
    </CapabilityAppChrome>
  );
}
