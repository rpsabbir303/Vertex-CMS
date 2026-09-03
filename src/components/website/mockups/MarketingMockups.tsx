import { BrowserFrame, Kpi } from "@/components/mockups/ProductMockups";

export function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-product">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-navy via-[#0a2d4f] to-brand-panel">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20,110,245,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(20,110,245,0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy/90 to-transparent" />

          <div className="absolute left-4 top-4 rounded-lg border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-medium text-slate-300">Project Health</p>
            <p className="text-lg font-bold text-white">92%</p>
          </div>

          <div className="absolute right-4 top-8 rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-medium text-brand-orange">Budget Variance</p>
            <p className="text-sm font-bold text-white">+2.4%</p>
          </div>

          <div className="absolute bottom-16 left-4 rounded-lg border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-medium text-slate-300">Schedule</p>
            <p className="text-sm font-bold text-emerald-400">On Track</p>
          </div>

          <div className="absolute bottom-8 right-4 rounded-lg border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-medium text-slate-300">Safety Score</p>
            <p className="text-sm font-bold text-white">96%</p>
          </div>

          <div className="absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-xl border border-white/20 bg-white/95 p-3 shadow-2xl">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-brand-navy">Riverfront Office Complex</p>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">Active</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-brand-soft p-2">
                  <p className="text-[9px] text-brand-muted">Contract</p>
                  <p className="text-[11px] font-bold text-brand-navy">$4.8M</p>
                </div>
                <div className="rounded-lg bg-brand-soft p-2">
                  <p className="text-[9px] text-brand-muted">Billed</p>
                  <p className="text-[11px] font-bold text-brand-blue">$3.2M</p>
                </div>
                <div className="rounded-lg bg-brand-soft p-2">
                  <p className="text-[9px] text-brand-muted">RFIs Open</p>
                  <p className="text-[11px] font-bold text-brand-orange">7</p>
                </div>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[68%] rounded-full bg-brand-blue" />
              </div>
              <p className="mt-1 text-[9px] text-brand-muted">68% complete · Phase: Structure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-3 hidden rounded-lg border border-brand-line bg-white px-3 py-2 shadow-md sm:block">
        <p className="text-[10px] font-semibold text-brand-navy">Cash Flow</p>
        <p className="text-xs font-bold text-emerald-600">+$842K</p>
      </div>
    </div>
  );
}

export function PlatformPreview() {
  return (
    <BrowserFrame url="app.vertexcms.com / dashboard">
      <div className="bg-brand-soft/40 p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-brand-navy">Project Control Center</p>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">Healthy</span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Kpi label="Project Health" value="92%" tone="green" />
          <Kpi label="Budget" value="$4.82M" />
          <Kpi label="Schedule" value="On Track" tone="blue" />
          <Kpi label="Cash Flow" value="+$842K" tone="green" />
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {["RFIs · 7 open", "Pay Apps · 3 pending", "Safety · 96%"].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[11px] font-medium text-brand-navy">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Project Health", "Budget", "Schedule", "RFIs", "Pay Applications", "Safety", "Cash Flow"].map((tag) => (
            <span key={tag} className="rounded-md bg-white px-2 py-1 text-[9px] font-medium text-brand-muted shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FinancialDashboard() {
  return (
    <BrowserFrame url="app.vertexcms.com / financials" dark>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Contract Value", "$4.82M"],
            ["Billed to Date", "$3.21M"],
            ["Committed Cost", "$2.94M"],
            ["Actual Cost", "$2.68M"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[10px] text-slate-400">{label}</p>
              <p className="mt-1 text-sm font-bold">{value}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-3 text-xs font-semibold">Cost Performance</p>
            <div className="space-y-2">
              {[
                ["Projected Cost", "$3.08M", 64],
                ["Variance", "+$140K", 28, true],
              ].map(([label, value, width, warn]) => (
                <div key={label as string}>
                  <div className="mb-1 flex justify-between text-[10px] text-slate-400">
                    <span>{label}</span>
                    <span className={warn ? "text-brand-orange" : ""}>{value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${warn ? "bg-brand-orange" : "bg-brand-blue"}`}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-3 text-xs font-semibold">Cash Flow Trend</p>
            <div className="flex h-24 items-end gap-1.5">
              {[35, 42, 38, 55, 48, 62, 58, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-brand-blue/60" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FieldAppMockup() {
  return (
    <div className="phone-shell mx-auto w-[200px] sm:w-[220px]" aria-hidden="true">
      <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-slate-300" />
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] text-brand-muted">Field App</p>
          <span className="rounded bg-brand-blue/10 px-1.5 py-0.5 text-[8px] font-semibold text-brand-blue">ES</span>
        </div>
        <p className="text-sm font-semibold text-brand-navy">Riverfront Office</p>
        <p className="text-[10px] text-brand-muted">Today · Superintendent</p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {["Daily Log", "Photos", "RFIs", "Punch", "Time", "Safety"].map((item) => (
            <div
              key={item}
              className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-brand-soft text-[11px] font-semibold text-brand-navy"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-2.5 text-center">
          <p className="text-[9px] font-semibold text-brand-orange">Offline Mode</p>
          <p className="text-[8px] text-brand-muted">Syncs when connection returns</p>
        </div>

        <div className="mt-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-brand-navy">
          <div className="h-10 w-10 rounded-full border-2 border-white/50" />
          <p className="sr-only">Camera capture</p>
        </div>
      </div>
    </div>
  );
}

export function AIChatMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-glow" aria-hidden="true">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-sm font-semibold text-white">Vertex AI Assistant</p>
        <p className="text-[11px] text-slate-400">Construction-specific intelligence</p>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          {[
            "What's putting this project at risk?",
            "Which RFIs are overdue?",
            "Where are we trending over budget?",
          ].map((prompt) => (
            <span key={prompt} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-slate-300">
              {prompt}
            </span>
          ))}
        </div>
        <div className="rounded-2xl rounded-tl-md bg-white/10 px-4 py-3 text-sm text-slate-100">
          What changed this week?
        </div>
        <div className="rounded-2xl rounded-tr-md border border-brand-orange/25 bg-brand-panel/60 px-4 py-4 text-sm text-slate-100">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-brand-orange">Summary</p>
          <ul className="space-y-1.5 text-[13px] text-slate-300">
            <li>3 RFIs submitted · 1 overdue</li>
            <li>Concrete pour completed · Level 4</li>
            <li>Budget variance trending +4.2%</li>
          </ul>
          <div className="mt-3 rounded-lg border border-brand-orange/20 bg-brand-orange/5 px-3 py-2">
            <p className="text-[10px] font-semibold text-brand-orange">Suggested action</p>
            <p className="text-[11px] text-slate-300">Review change order CO-042</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-500">AI suggestions require user confirmation.</p>
      </div>
    </div>
  );
}
