/* Shared product chrome used across every mockup */

export function BrowserFrame({
  url = "app.vertexcms.com",
  children,
  dark = false,
  className = "",
}: {
  url?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border shadow-card ${
        dark ? "border-white/10 bg-[#0A2744]" : "border-slate-200/90 bg-white"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-2.5 ${
          dark ? "border-white/10 bg-white/5" : "border-slate-100 bg-[#F8FAFC]"
        }`}
      >
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div
          className={`ml-2 flex-1 truncate rounded-md px-3 py-1 text-[11px] ${
            dark ? "bg-white/10 text-slate-300" : "bg-white text-brand-muted shadow-sm"
          }`}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export function AppTopBar({ project = "Riverfront Office Complex" }: { project?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-2.5">
      <div className="rounded-lg border border-slate-200 bg-brand-soft px-2.5 py-1.5 text-[11px] font-medium text-brand-navy">
        {project} ▾
      </div>
      <div className="min-w-[120px] flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-brand-muted">
        Search projects, RFIs, docs…
      </div>
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-[10px] font-semibold text-brand-blue">
        3
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-orange" />
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-[10px] font-bold text-white">
        JM
      </span>
    </div>
  );
}

export function Kpi({
  label,
  value,
  sub,
  tone = "default",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "default" | "orange" | "green" | "blue";
}) {
  const tones = {
    default: "text-brand-navy",
    orange: "text-brand-orange",
    green: "text-emerald-600",
    blue: "text-brand-blue",
  };
  return (
    <div className="ui-kpi">
      <p className="ui-muted">{label}</p>
      <p className={`mt-1 text-sm font-bold ${tones[tone]}`}>{value}</p>
      {sub && <p className="mt-0.5 text-[10px] text-brand-muted">{sub}</p>}
    </div>
  );
}

export function FloatingChip({
  children,
  tone = "blue",
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  tone?: "blue" | "orange";
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold shadow-soft backdrop-blur ${
        dark
          ? tone === "orange"
            ? "border-brand-orange/30 bg-brand-panel text-brand-orange"
            : "border-white/15 bg-brand-panel text-brand-blue"
          : tone === "orange"
            ? "border-brand-orange/25 bg-white/95 text-brand-orange"
            : "border-brand-blue/25 bg-white/95 text-brand-blue"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function HeroPortfolioDashboard() {
  return (
    <div className="relative" aria-hidden="true">
      <BrowserFrame url="app.vertexcms.com / portfolio" className="animate-float shadow-lift">
        <AppTopBar project="All Projects" />
        <div className="bg-brand-soft/40 p-4 sm:p-5">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Portfolio Overview</p>
              <p className="text-sm font-semibold text-brand-navy">Executive command view</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
              Schedule Health 92%
            </span>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <Kpi label="Total Contract Value" value="$24.8M" />
            <Kpi label="Active Projects" value="18" tone="blue" />
            <Kpi label="Budget Variance" value="+2.4%" tone="orange" />
            <Kpi label="Schedule Health" value="92%" tone="green" />
            <Kpi label="Safety" value="96%" tone="green" />
            <Kpi label="Cash Position" value="$8.4M" />
          </div>

          <div className="grid gap-3 lg:grid-cols-12">
            <div className="ui-card p-3 lg:col-span-5">
              <p className="ui-label mb-2">Portfolio chart</p>
              <div className="flex h-28 items-end gap-1.5">
                {[38, 52, 48, 64, 58, 72, 68, 80, 74, 86, 82, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-brand-blue/15" style={{ height: `${h}%` }}>
                    <div className="mt-auto w-full rounded-sm bg-brand-blue" style={{ height: `${Math.max(30, h - 16)}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="ui-card p-3 lg:col-span-4">
              <p className="ui-label mb-2">Budget chart</p>
              <div className="space-y-2.5">
                {[
                  { n: "Labor", a: 72, b: 68 },
                  { n: "Materials", a: 58, b: 61 },
                  { n: "Subs", a: 44, b: 40 },
                ].map((r) => (
                  <div key={r.n}>
                    <div className="mb-1 flex justify-between text-[10px] text-brand-muted">
                      <span>{r.n}</span>
                      <span>A {r.a}% · B {r.b}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-brand-blue" style={{ width: `${r.a}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ui-card p-3 lg:col-span-3">
              <p className="ui-label mb-2">Project health</p>
              <div className="space-y-2">
                {[
                  { n: "Riverfront", s: "Healthy", c: "bg-emerald-50 text-emerald-700" },
                  { n: "Northside", s: "Watch", c: "bg-amber-50 text-amber-700" },
                  { n: "Oakwood", s: "At Risk", c: "bg-brand-orange/10 text-brand-orange" },
                ].map((p) => (
                  <div key={p.n} className="flex items-center justify-between gap-2">
                    <span className="truncate text-[11px] text-brand-navy">{p.n}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${p.c}`}>{p.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {["Risk · Med", "Open RFIs · 24", "Pending pay apps · 6"].map((t) => (
              <span key={t} className="rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-medium text-brand-muted shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </BrowserFrame>

      <FloatingChip className="absolute -left-2 top-20 hidden animate-float-slow md:block lg:-left-10" tone="orange">
        Budget Alert
      </FloatingChip>
      <FloatingChip className="absolute -right-1 top-32 hidden animate-float-delay md:block lg:-right-8" tone="orange">
        RFI Overdue
      </FloatingChip>
      <FloatingChip className="absolute bottom-28 -left-1 hidden animate-float md:block lg:-left-12" tone="blue">
        Safety Inspection
      </FloatingChip>
      <FloatingChip className="absolute bottom-16 right-4 hidden animate-float-slow md:block lg:-right-6" tone="orange">
        AI Risk Detected
      </FloatingChip>
    </div>
  );
}

export function ProjectWorkspace() {
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverfront">
      <AppTopBar />
      <div className="bg-brand-soft/30 p-4 sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Kpi label="Cost variance" value="+2.4%" tone="orange" />
          <Kpi label="Schedule" value="-3d" />
          <Kpi label="Safety" value="92" tone="green" />
          <Kpi label="Open RFIs" value="7" />
          <Kpi label="Submittals" value="12" tone="blue" />
          <Kpi label="Punch" value="28" />
        </div>
        <div className="ui-card p-3">
          <p className="ui-label mb-2">Phases & team</p>
          <div className="flex flex-wrap gap-2">
            {["Precon ✓", "Structure", "MEP", "Closeout"].map((p, i) => (
              <span
                key={p}
                className={`rounded-lg px-2.5 py-1 text-[10px] font-medium ${
                  i === 0 ? "bg-emerald-50 text-emerald-700" : i === 1 ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-soft text-brand-muted"
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function EstimateUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / estimating / EST-2041" className="shadow-lift">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-muted">Estimate</p>
          <p className="text-2xl font-bold text-brand-navy">$2,480,000</p>
          <div className="mt-4 space-y-2">
            {[
              ["Materials", "$812K"],
              ["Labor", "$640K"],
              ["Equipment", "$186K"],
              ["Subcontractors", "$620K"],
              ["Overhead", "$222K"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between rounded-lg bg-brand-soft px-3 py-2 text-[11px]">
                <span className="text-brand-muted">{l}</span>
                <span className="font-semibold text-brand-navy">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-soft/50 p-4">
          <p className="ui-label">Bid Management · Concrete</p>
          <div className="mt-3 space-y-2">
            {[
              { n: "Vendor A", v: "$482,000" },
              { n: "Vendor B", v: "$468,500", win: true },
              { n: "Vendor C", v: "$491,200" },
            ].map((b) => (
              <div
                key={b.n}
                className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-[11px] ${
                  b.win ? "border-brand-orange/40 bg-white shadow-sm" : "border-slate-200 bg-white/80"
                }`}
              >
                <span className="font-medium text-brand-navy">{b.n}</span>
                <span className={b.win ? "font-bold text-brand-orange" : "text-brand-muted"}>{b.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Quantity Takeoff", "Estimating", "Bid Management", "Bid Leveling"].map((t) => (
              <span key={t} className="rounded-md bg-white px-2 py-1 text-[9px] font-semibold text-brand-blue shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FinanceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / financials / riverfront" dark>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Contract Value", "$4.82M"],
            ["Original Contract", "$4.50M"],
            ["Approved COs", "+$320K"],
            ["Billed", "$3.21M"],
            ["Paid", "$2.84M"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[10px] text-slate-400">{l}</p>
              <p className={`mt-1 text-sm font-bold ${i === 2 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-3 text-xs font-semibold">Budget vs Actual</p>
            <div className="space-y-2">
              {[
                ["03 Concrete", 72, 78],
                ["05 Metals", 55, 52],
                ["26 Electrical", 40, 44],
              ].map(([c, b, a]) => (
                <div key={c as string}>
                  <div className="mb-1 flex justify-between text-[10px] text-slate-400">
                    <span>{c}</span>
                    <span>
                      B {b}% · A {a}%
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-white/10">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-brand-blue/50" style={{ width: `${b}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-full bg-brand-orange/90" style={{ width: `${a}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {["Contracts", "SOV", "Change Orders", "Pay Applications", "Budget & Job Cost", "General Ledger", "AP / AR", "WIP", "Cash Flow"].map(
              (t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-slate-200">
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PhoneUI({
  variant,
  raised,
}: {
  variant: "home" | "log" | "capture";
  raised?: boolean;
}) {
  const tabs = ["Home", "Logs", "Capture", "Time", "More"];
  const active = variant === "home" ? 0 : variant === "log" ? 1 : 2;

  return (
    <div className={`phone-shell w-[158px] sm:w-[176px] ${raised ? "sm:-translate-y-6" : ""}`} aria-hidden="true">
      <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-slate-200" />
      <div className="min-h-[280px] p-3.5">
        {variant === "home" && (
          <>
            <p className="text-[10px] text-brand-muted">Today&apos;s Project</p>
            <p className="text-sm font-semibold text-brand-navy">Riverfront Office</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-brand-soft p-2 text-[10px]"><span className="text-brand-muted">Weather</span><br /><span className="font-semibold">82°F</span></div>
              <div className="rounded-lg bg-brand-soft p-2 text-[10px]"><span className="text-brand-muted">Crew</span><br /><span className="font-semibold">18</span></div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {["Daily Log", "Photos", "RFIs", "Tasks", "Safety", "Drawings"].map((t) => (
                <div key={t} className="rounded-lg border border-slate-100 px-2 py-2 text-center text-[10px] font-medium text-brand-navy">
                  {t}
                </div>
              ))}
            </div>
          </>
        )}
        {variant === "log" && (
          <>
            <p className="text-[10px] text-brand-muted">Daily Log</p>
            <p className="text-sm font-semibold text-brand-navy">Work Completed</p>
            <p className="mt-2 rounded-lg bg-brand-blue/5 px-2.5 py-2 text-[11px] font-medium text-brand-blue">
              Concrete foundation
            </p>
            <div className="mt-3 space-y-1.5 text-[10px] text-brand-muted">
              <p>Crew · 18 workers</p>
              <p>Photos · 12</p>
              <p className="font-medium text-brand-orange">Location · GPS tagged</p>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
              ))}
            </div>
          </>
        )}
        {variant === "capture" && (
          <>
            <div className="flex aspect-[3/4] flex-col items-center justify-center rounded-xl bg-brand-navy text-white">
              <div className="h-14 w-14 rounded-full border-2 border-white/40" />
              <p className="mt-3 text-[10px] font-medium">Field Capture</p>
              <p className="mt-1 text-[9px] text-slate-300">GPS 37.78 · -122.41</p>
            </div>
            <p className="mt-2 text-center text-[10px] text-brand-blue">Attach to log / RFI / punch</p>
            <div className="mt-2 rounded-lg border border-brand-orange/30 bg-brand-orange/5 px-2 py-1.5 text-center text-[9px] font-semibold text-brand-orange">
              Offline · Syncing when connection returns
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between border-t border-slate-100 px-2 py-2 text-[8px] text-brand-muted">
        {tabs.map((t, i) => (
          <span key={t} className={i === active ? "font-semibold text-brand-blue" : ""}>
            {t.slice(0, 4)}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SafetyUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / safety">
      <div className="p-4 sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          <Kpi label="Safety Score" value="92%" tone="green" />
          <Kpi label="Open Incidents" value="2" tone="orange" />
          <Kpi label="Inspections" value="18" />
          <Kpi label="Toolbox Talks" value="24" tone="blue" />
          <Kpi label="COI Expiring" value="3" tone="orange" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="ui-card flex flex-col items-center justify-center p-4">
            <p className="ui-label mb-3">Compliance Radar</p>
            <div className="relative flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-brand-blue/20" />
              <div className="absolute inset-3 rounded-full border border-brand-blue/30" />
              <div className="absolute inset-6 rounded-full border border-brand-orange/35" />
              <div className="rounded-full bg-brand-blue px-3 py-2 text-center text-[11px] font-bold text-white">92</div>
            </div>
          </div>
          <div className="space-y-2">
            {["Safety", "Inspections", "Toolbox Talks", "JHA / JSA", "Insurance / COI", "Lien Waivers", "Bonds"].map((t) => (
              <div key={t} className="rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-medium text-brand-navy">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DocsUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / riverfront">
      <div className="grid lg:grid-cols-[200px_1fr]">
        <aside className="border-b border-slate-100 bg-brand-soft/60 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-3">Project Documents</p>
          <ul className="space-y-1 text-[11px] text-brand-muted">
            {["Drawings", "Specifications", "Contracts", "RFIs", "Submittals", "Photos"].map((f, i) => (
              <li key={f} className={`rounded-lg px-2.5 py-2 ${i === 0 ? "bg-white font-medium text-brand-blue shadow-sm" : ""}`}>
                {f}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-4">
          <div className="mb-3 flex h-36 items-center justify-center rounded-xl border border-dashed border-brand-blue/30 bg-[linear-gradient(135deg,#e8eef8,#f5f8fc)]">
            <p className="text-xs font-semibold text-brand-blue">Drawing Viewer · A-101</p>
          </div>
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-[10px] text-brand-muted">Old</p>
              <p className="text-sm font-semibold text-slate-500">REVISION 04</p>
            </div>
            <div className="rounded-xl border border-brand-blue/30 bg-brand-blue/5 p-3">
              <p className="text-[10px] text-brand-blue">Current</p>
              <p className="text-sm font-semibold text-brand-navy">REVISION 05</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Markup", "Version history", "Search", "Recent activity"].map((t) => (
              <span key={t} className="rounded-md bg-brand-soft px-2 py-1 text-[10px] font-medium text-brand-navy">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ScheduleUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / scheduling / riverfront">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {["Critical Path", "Look-Ahead", "Schedule Risk", "Gantt", "CPM"].map((t) => (
            <span key={t} className="rounded-lg bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
              {t}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          {[
            { n: "Foundation", w: "w-[35%]", left: "ml-0" },
            { n: "Structural", w: "w-[40%]", left: "ml-[18%]" },
            { n: "MEP", w: "w-[32%]", left: "ml-[42%]" },
            { n: "Finishes", w: "w-[28%]", left: "ml-[62%]" },
          ].map((r, i) => (
            <div key={r.n}>
              <p className="mb-1 text-[11px] font-medium text-brand-navy">{r.n}</p>
              <div className="h-7 rounded-md bg-slate-100">
                <div className={`h-full rounded-md ${i === 1 ? "bg-brand-orange" : "bg-brand-blue"} ${r.w} ${r.left}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WorkforceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / workforce">
      <div className="p-4 sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          <Kpi label="Crew" value="48" />
          <Kpi label="Clocked In" value="42" tone="green" />
          <Kpi label="Equipment" value="16" tone="blue" />
          <Kpi label="Utilization" value="87%" />
          <Kpi label="Timesheets" value="Pending 8" tone="orange" />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["Excavator", "Crane", "Loader", "Truck"].map((e) => (
            <div key={e} className="rounded-xl border border-slate-200 bg-brand-soft/70 px-3 py-3 text-center text-[11px] font-semibold text-brand-navy">
              {e}
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AIConsole() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] shadow-glow" aria-hidden="true">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-sm font-semibold text-white">Vertex AI Assistant</p>
        <p className="text-[11px] text-slate-400">Grounded in live project data · Human confirmation required for writes</p>
      </div>
      <div className="space-y-4 p-5">
        <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3 text-sm text-slate-100">
          What&apos;s putting the Riverside project at risk?
        </div>
        <div className="ml-auto max-w-[94%] rounded-2xl rounded-tr-md border border-brand-orange/25 bg-brand-dark/40 px-4 py-4 text-sm text-slate-100">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-brand-orange">3 areas need attention</p>
          <ul className="space-y-2 text-[13px]">
            <li><strong className="text-white">Budget</strong> — Projected variance +6.8%</li>
            <li><strong className="text-white">Schedule</strong> — Critical activity delayed 5 days</li>
            <li><strong className="text-white">RFIs</strong> — 4 overdue</li>
          </ul>
          <div className="mt-4 rounded-xl border border-white/10 p-3">
            <p className="text-[11px] font-semibold text-brand-orange">Recommended Actions</p>
            <ul className="mt-2 space-y-1 text-[12px] text-slate-300">
              <li>Review concrete change order</li>
              <li>Follow up on RFI #184</li>
              <li>Review schedule impact</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {["AI Assistant", "Project Analyst", "Document Intelligence", "Risk Intelligence", "AI Automation"].map((t) => (
            <div key={t} className="rounded-lg border border-white/10 px-2 py-2 text-center text-[9px] font-medium text-slate-200">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioAnalytics() {
  return (
    <BrowserFrame url="app.vertexcms.com / portfolio / analytics">
      <div className="p-4 sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {["Budget", "Schedule", "Safety", "Cash", "Risk"].map((l, i) => (
            <Kpi key={l} label={l} value={["On track", "92%", "96%", "$8.4M", "Med"][i]} tone={i === 4 ? "orange" : i === 1 || i === 2 ? "green" : "default"} />
          ))}
        </div>
        <div className="space-y-2">
          {[
            ["Project A · Riverfront Office", "Healthy", "text-emerald-700 bg-emerald-50"],
            ["Project B · Northside Medical", "Watch", "text-amber-700 bg-amber-50"],
            ["Project C · Oakwood Residential", "At Risk", "text-brand-orange bg-brand-orange/10"],
          ].map(([n, s, c]) => (
            <div key={n} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5">
              <span className="text-[12px] font-medium text-brand-navy">{n}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${c}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function MiniThumb({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      <div className="mb-1.5 h-8 rounded bg-gradient-to-br from-brand-blue/15 to-brand-soft" />
      <p className="text-[9px] font-semibold text-brand-navy">{label}</p>
    </div>
  );
}

export function AccountingUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / accounting / gl">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="ui-muted">Native General Ledger</p>
            <p className="text-sm font-semibold text-brand-navy">Double-entry journal</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            Balanced
          </span>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-4 bg-brand-soft px-3 py-2 text-[10px] font-semibold text-brand-muted">
            <span>Account</span>
            <span>Debit</span>
            <span>Credit</span>
            <span>Project</span>
          </div>
          {[
            ["1200 AP", "—", "$48,200", "Riverfront"],
            ["5100 Job Cost", "$48,200", "—", "Riverfront"],
            ["1100 Cash", "—", "$22,400", "Northside"],
          ].map((row) => (
            <div key={row[0] + row[3]} className="grid grid-cols-4 border-t border-slate-100 px-3 py-2 text-[11px] text-brand-navy">
              {row.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["GL", "AP", "AR", "WIP", "Cash Flow"].map((t) => (
            <span key={t} className="rounded-md bg-brand-soft px-2 py-1 text-[10px] font-semibold text-brand-blue">
              {t}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProcurementUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / procurement / po">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-3">Purchase Orders</p>
        <div className="space-y-2">
          {[
            { n: "PO-1042 · Rebar", s: "Approved", v: "$62,400" },
            { n: "PO-1048 · Formwork", s: "Partial", v: "$28,100" },
            { n: "PO-1051 · MEP Materials", s: "Open", v: "$91,800" },
          ].map((po) => (
            <div key={po.n} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5">
              <div>
                <p className="text-[12px] font-medium text-brand-navy">{po.n}</p>
                <p className="text-[10px] text-brand-muted">{po.s}</p>
              </div>
              <span className="text-[12px] font-semibold text-brand-blue">{po.v}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CollaborationUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / collaboration">
      <div className="p-4 sm:p-5">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {["Meetings", "Closeout", "Warranties"].map((t) => (
            <div key={t} className="rounded-xl border border-slate-200 bg-brand-soft/60 px-3 py-3 text-center text-[11px] font-semibold text-brand-navy">
              {t}
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="ui-label mb-2">Closeout checklist</p>
          <ul className="space-y-1.5 text-[11px] text-brand-muted">
            <li>✓ Substantial completion</li>
            <li>✓ As-builts uploaded</li>
            <li>○ O&M handoff</li>
            <li>○ Final affidavits</li>
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ConnectedExperienceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / connected">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-3">External Portals</p>
          <div className="space-y-2">
            {["Owner Portal", "Subcontractor Portal", "Vendor Portal", "Architect / Engineer"].map((p) => (
              <div key={p} className="rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-medium text-brand-navy">
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center bg-brand-soft/40 p-4">
          <PhoneUI variant="home" />
        </div>
      </div>
    </BrowserFrame>
  );
}

