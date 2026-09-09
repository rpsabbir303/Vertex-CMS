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

export function ProjectDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverfront / dashboard">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Project dashboard</p>
            <p className="text-[14px] font-semibold text-brand-navy">Riverfront Office Complex</p>
          </div>
          <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            Active
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Kpi label="Cost variance" value="+2.4%" tone="orange" />
          <Kpi label="Schedule variance" value="-3 days" />
          <Kpi label="Safety score" value="92" tone="green" />
          <Kpi label="Open RFIs" value="7" />
          <Kpi label="Submittal status" value="12 in review" tone="blue" />
          <Kpi label="Punch count" value="28 open" />
        </div>
        <div className="mt-3 rounded-xl border border-slate-200 bg-brand-soft/50 px-3 py-2.5">
          <p className="text-[11px] text-brand-muted">
            Project-level indicators stay on the project workspace—so teams see cost, schedule, safety, RFIs,
            submittals, and punch without leaving the record.
          </p>
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

export function BudgetJobCostDashboardUI() {
  const cards = [
    { l: "Original Budget", v: "$4.82M" },
    { l: "Approved Changes", v: "+$320K", orange: true },
    { l: "Revised Budget", v: "$5.14M" },
    { l: "Committed Cost", v: "$3.76M", note: "System" },
    { l: "Actual Cost", v: "$2.94M", note: "System" },
    { l: "Projected Cost", v: "$4.98M" },
    { l: "Variance", v: "+$160K", orange: true },
  ];
  const categories = [
    { n: "03 Concrete", budget: 78, committed: 72, actual: 58, projected: 76 },
    { n: "05 Metals", budget: 65, committed: 60, actual: 48, projected: 62 },
    { n: "06 Wood & Plastics", budget: 52, committed: 44, actual: 36, projected: 50 },
    { n: "09 Finishes", budget: 40, committed: 28, actual: 18, projected: 38 },
    { n: "16 Electrical", budget: 58, committed: 55, actual: 42, projected: 60, warn: true },
  ];

  return (
    <BrowserFrame url="app.vertexcms.com / budget / riverside-medical" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Budget & Job Cost</p>
        <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {cards.map((c) => (
            <div key={c.l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{c.l}</p>
              <p className={`mt-1 text-[13px] font-bold ${c.orange ? "text-brand-orange" : "text-white"}`}>{c.v}</p>
              {c.note ? <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wide text-slate-500">{c.note}</p> : null}
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold">Budget vs Actual by cost category</p>
            <div className="flex flex-wrap gap-2 text-[9px] text-slate-400">
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue/70" />Budget</span>
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />Committed</span>
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />Actual</span>
              <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />Projected</span>
            </div>
          </div>
          <div className="space-y-2.5">
            {categories.map((row) => (
              <div key={row.n}>
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className={row.warn ? "font-semibold text-brand-orange" : "text-slate-300"}>{row.n}</span>
                  <span className="text-slate-500">B {row.budget}% · C {row.committed}% · A {row.actual}% · P {row.projected}%</span>
                </div>
                <div className="relative h-2.5 rounded-full bg-white/10">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-brand-blue/45" style={{ width: `${row.budget}%` }} />
                  <div className="absolute inset-y-0 left-0 rounded-full bg-white/25" style={{ width: `${row.committed}%` }} />
                  <div className="absolute inset-y-0 left-0 rounded-full bg-emerald-400/70" style={{ width: `${row.actual}%` }} />
                  <div
                    className={`absolute top-0 h-full w-0.5 ${row.warn ? "bg-brand-orange" : "bg-brand-orange/80"}`}
                    style={{ left: `${row.projected}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-slate-500">
            Committed Cost and Actual Cost are system-calculated from project financial activity.
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BudgetCostCodeTableUI() {
  const rows = [
    { code: "03-300", desc: "Cast-in-Place Concrete", o: "820K", ch: "+40K", r: "860K", c: "710K", a: "540K", p: "845K", v: "+15K" },
    { code: "05-120", desc: "Structural Steel", o: "1.12M", ch: "+80K", r: "1.20M", c: "980K", a: "720K", p: "1.18M", v: "+20K" },
    { code: "06-100", desc: "Rough Carpentry", o: "340K", ch: "+12K", r: "352K", c: "290K", a: "210K", p: "348K", v: "+4K" },
    { code: "09-900", desc: "Finishes", o: "610K", ch: "+55K", r: "665K", c: "420K", a: "280K", p: "650K", v: "+15K" },
    { code: "16-100", desc: "Electrical", o: "780K", ch: "+95K", r: "875K", c: "810K", a: "610K", p: "910K", v: "-35K", warn: true },
  ];

  return (
    <BrowserFrame url="app.vertexcms.com / budget / riverside-medical / cost-codes" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Cost-code job cost</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[720px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Cost Code", "Description", "Original", "Approved Changes", "Revised", "Committed", "Actual", "Projected", "Variance"].map(
                (h) => (
                  <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code} className="border-b border-white/5 text-slate-300 last:border-0">
                <td className="whitespace-nowrap px-2 py-2.5 font-semibold text-white">{r.code}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.desc}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.o}</td>
                <td className="whitespace-nowrap px-2 py-2.5 text-brand-orange">{r.ch}</td>
                <td className="whitespace-nowrap px-2 py-2.5 font-medium text-white">{r.r}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.c}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.a}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.p}</td>
                <td className={`whitespace-nowrap px-2 py-2.5 font-semibold ${r.warn ? "text-brand-orange" : "text-emerald-400"}`}>
                  {r.v}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[9px] text-slate-500">Committed · Actual columns are system-controlled</p>
      </div>
    </BrowserFrame>
  );
}

export function BudgetVsActualUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / budget / riverside-medical / variance" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="ui-label mb-1 !text-slate-400">Budget vs committed vs actual vs projected</p>
        <p className="mb-4 text-[13px] font-semibold">Riverside Medical Center · Cost performance</p>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Budget", "$5.14M", "bg-brand-blue/50"],
            ["Committed", "$3.76M", "bg-white/30"],
            ["Actual", "$2.94M", "bg-emerald-400/70"],
            ["Projected", "$4.98M", "bg-brand-orange"],
          ].map(([l, v, bar]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-sm font-bold">{v}</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div className={`h-full w-3/4 rounded-full ${bar}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { t: "Under Budget", d: "Projected remains below revised budget", c: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300" },
            { t: "On Track", d: "Committed and actual align with plan", c: "border-white/15 bg-white/5 text-slate-200" },
            { t: "Watch Variance", d: "Electrical trending over projected", c: "border-brand-orange/35 bg-brand-orange/10 text-brand-orange" },
          ].map((card) => (
            <div key={card.t} className={`rounded-xl border px-3 py-3 ${card.c}`}>
              <p className="text-[11px] font-semibold">{card.t}</p>
              <p className="mt-1 text-[10px] opacity-80">{card.d}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BudgetFlowUI() {
  const steps = [
    { n: "01", t: "Original Budget", d: "Approved budget by cost code" },
    { n: "02", t: "Approved Changes", d: "Changes that affect budget" },
    { n: "03", t: "Revised Budget", d: "Current approved position" },
    { n: "04", t: "Committed Cost", d: "Subcontracts + approved POs" },
    { n: "05", t: "Actual Cost", d: "Timesheets, received POs, certified pay apps" },
    { n: "06", t: "Projected Cost", d: "Where cost is heading" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Cost progression</p>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className={
              "rounded-xl border px-3 py-3 " +
              (i === 3 || i === 4
                ? "border-brand-orange/30 bg-brand-orange/[0.04]"
                : "border-slate-200 bg-brand-soft/40")
            }
          >
            <p className="font-mono text-[10px] font-bold text-brand-orange">{s.n}</p>
            <p className="mt-1 text-[13px] font-semibold text-brand-navy">{s.t}</p>
            <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            {(i === 3 || i === 4) && (
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-wide text-brand-orange">System-calculated</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BudgetIntelligenceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / budget / riverside-medical / intelligence" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Project Intelligence
            </p>
            <p className="mt-0.5 text-[13px] font-semibold text-white">Margin risk signals</p>
          </div>
          <span className="rounded-md border border-brand-orange/30 bg-brand-orange/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-brand-orange">
            Advanced · AI
          </span>
        </div>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {[
          { t: "Profit Fade Early Warning", d: "Emerging margin pressure on electrical package", s: "Watch" },
          { t: "Cost to Complete", d: "ETC / EAC visibility from projected cost signals", s: "ETC · EAC" },
          { t: "Final Margin Prediction", d: "Anticipated final margin from live cost data", s: "Predictive" },
        ].map((card) => (
          <div key={card.t} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">{card.s}</p>
            <p className="mt-1.5 text-[12px] font-semibold text-white">{card.t}</p>
            <p className="mt-1 text-[10px] leading-relaxed text-slate-400">{card.d}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 px-4 py-2.5 text-[10px] text-slate-500">
        Predictive insights layered on live project data · AI Intelligence
      </p>
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

export function DocumentCenterUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / riverfront / center">
      <AppTopBar />
      <div className="grid lg:grid-cols-[180px_1fr]">
        <aside className="border-b border-slate-100 bg-brand-soft/50 p-3 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">Folders</p>
          <ul className="space-y-1 text-[11px]">
            {[
              { n: "Drawings", active: false },
              { n: "Specifications", active: false },
              { n: "Contracts", active: false },
              { n: "Reports", active: false },
              { n: "Photos", active: false },
              { n: "Permits", active: true },
            ].map((f) => (
              <li
                key={f.n}
                className={
                  "rounded-lg px-2.5 py-2 " +
                  (f.active ? "bg-white font-semibold text-brand-navy shadow-sm" : "text-brand-muted")
                }
              >
                {f.n}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <div className="min-w-[140px] flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-brand-muted">
              Search project documents…
            </div>
            <span className="rounded-md bg-brand-soft px-2 py-1 text-[10px] font-semibold text-brand-navy">
              Filter · PDF
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] gap-2 border-b border-slate-100 bg-brand-soft/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">
              <span>Document</span>
              <span>Type</span>
              <span>Status</span>
              <span>Updated</span>
            </div>
            {[
              { n: "Curtain wall shop drawings", t: "PDF", s: "Current", d: "Mar 12" },
              { n: "Spec Section 08 44 00", t: "DOCX", s: "Current", d: "Mar 10" },
              { n: "Firestopping product data", t: "PDF", s: "Review", d: "Mar 09" },
              { n: "MEP coordination package", t: "PDF", s: "Current", d: "Mar 08" },
            ].map((row, i) => (
              <div
                key={row.n}
                className={
                  "grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] gap-2 border-b border-slate-100 px-3 py-2.5 text-[11px] last:border-0 " +
                  (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")
                }
              >
                <span className="truncate font-medium text-brand-navy">{row.n}</span>
                <span className="text-brand-muted">{row.t}</span>
                <span className={row.s === "Review" ? "font-semibold text-brand-orange" : "text-brand-muted"}>
                  {row.s}
                </span>
                <span className="text-brand-muted">{row.d}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-brand-muted">Recent activity · 6 updates today · Riverfront project context</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DocumentDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / DOC-1842">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label">Document detail</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Curtain wall shop drawings</p>
          <p className="mt-1 text-[11px] text-brand-muted">DOC-1842 · PDF · Linked to Submittal SUB-042</p>
          <div className="mt-4 space-y-2">
            {[
              ["Current revision", "Rev 03"],
              ["Uploaded by", "A. Chen"],
              ["Project", "Riverfront Office"],
              ["Folder", "Submittals"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
                <span className="text-brand-muted">{l}</span>
                <span className="font-semibold text-brand-navy">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-soft/40 p-4">
          <p className="ui-label mb-2">Version history</p>
          <ul className="space-y-2">
            {[
              { r: "Rev 03", s: "Current", hot: true },
              { r: "Rev 02", s: "Superseded", hot: false },
              { r: "Rev 01", s: "Superseded", hot: false },
            ].map((v) => (
              <li
                key={v.r}
                className={
                  "flex items-center justify-between rounded-lg border px-3 py-2 text-[11px] " +
                  (v.hot ? "border-brand-orange/35 bg-white" : "border-slate-200 bg-white/80")
                }
              >
                <span className="font-semibold text-brand-navy">{v.r}</span>
                <span className={v.hot ? "text-brand-orange" : "text-brand-muted"}>{v.s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded-lg border border-brand-line bg-white px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Linked records</p>
            <p className="mt-1 text-[12px] font-semibold text-brand-navy">SUB-042 · RFI-191</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DocumentUploadUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / upload">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-2">Upload project files</p>
        <div className="mb-3 flex h-28 items-center justify-center rounded-xl border border-dashed border-brand-orange/35 bg-brand-orange/[0.04]">
          <div className="text-center">
            <p className="text-[12px] font-semibold text-brand-navy">Drop files to upload</p>
            <p className="mt-1 text-[10px] text-brand-muted">PDF · DOCX · DWG · Images</p>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            ["Project", "Riverfront Office"],
            ["Folder", "Specifications"],
            ["Status", "Ready to organize"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{l}</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <ul className="mt-3 space-y-1.5">
          {["Spec_084400_Rev03.pdf", "Product_Data_Firestop.pdf"].map((f) => (
            <li key={f} className="flex items-center justify-between rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
              <span className="font-medium text-brand-navy">{f}</span>
              <span className="text-brand-orange">Queued</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function DrawingsWorkflowUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / riverfront / A-101">
      <AppTopBar />
      <div className="grid lg:grid-cols-[160px_1fr_150px]">
        <aside className="border-b border-slate-100 p-3 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">Register</p>
          <ul className="space-y-1 text-[10px]">
            {[
              { n: "A-101 Floor Plan", r: "Rev 05", hot: true },
              { n: "A-201 Elevations", r: "Rev 03", hot: false },
              { n: "S-101 Foundation", r: "Rev 04", hot: false },
            ].map((d) => (
              <li
                key={d.n}
                className={
                  "rounded-lg px-2 py-2 " +
                  (d.hot ? "bg-brand-orange/10 font-semibold text-brand-navy" : "text-brand-muted")
                }
              >
                <span className="block">{d.n}</span>
                <span className="text-[9px]">{d.r}</span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="relative border-b border-slate-100 p-3 lg:border-b-0 lg:border-r">
          <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-dashed border-brand-blue/25 bg-[linear-gradient(135deg,#e8eef8,#f5f8fc)] sm:h-52">
            <div className="absolute left-[20%] top-[30%] h-16 w-24 border border-brand-navy/25" />
            <div className="absolute left-[45%] top-[40%] h-12 w-20 border border-brand-navy/20" />
            <div className="absolute left-[35%] top-[35%] h-2.5 w-2.5 rounded-full bg-brand-orange" />
            <div className="absolute right-[22%] top-[48%] h-2.5 w-2.5 rounded-full bg-brand-blue" />
            <p className="relative text-[11px] font-semibold text-brand-blue">Drawing Viewer · A-101</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Zoom", "Pan", "Layers", "Current rev"].map((t) => (
              <span key={t} className="rounded-md bg-brand-soft px-2 py-1 text-[9px] font-medium text-brand-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
        <aside className="bg-brand-soft/40 p-3">
          <p className="ui-label mb-2">Markup</p>
          <ul className="space-y-1.5 text-[10px]">
            {["Cloud", "Arrow", "Text", "Dimension", "Pin"].map((t, i) => (
              <li
                key={t}
                className={
                  "rounded-md border px-2 py-1.5 " +
                  (i === 0 ? "border-brand-orange/40 bg-white font-semibold text-brand-navy" : "border-slate-200 bg-white text-brand-muted")
                }
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[9px] leading-relaxed text-brand-muted">
            Annotations stay on the project drawing record.
          </p>
        </aside>
      </div>
    </BrowserFrame>
  );
}

export function DocumentConsolidateUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / riverfront / current">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-3">Consolidate to current</p>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="space-y-2">
            {["Rev 01 · Outdated", "Rev 02 · Outdated", "Rev 03 · Outdated"].map((r) => (
              <div
                key={r}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-500 line-through decoration-slate-300"
              >
                {r}
              </div>
            ))}
          </div>
          <div className="hidden text-center font-mono text-[11px] font-bold text-brand-orange sm:block">→</div>
          <div className="rounded-xl border border-brand-orange/40 bg-brand-orange/[0.06] px-4 py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Current</p>
            <p className="mt-2 text-[14px] font-bold text-brand-navy">Rev 04 · Spec 08 44 00</p>
            <p className="mt-1 text-[11px] text-brand-muted">One project record · History preserved</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DocumentSearchUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / search">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 rounded-xl border border-brand-orange/30 bg-white px-3 py-2.5 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Full-text search</p>
          <p className="mt-1 text-[13px] font-semibold text-brand-navy">curtain wall · A-101 · firestopping</p>
        </div>
        <ul className="space-y-2">
          {[
            { n: "A-101 Floor Plan", m: "Drawing title match · Rev 05 Current", t: "DWG" },
            { n: "Curtain wall shop drawings", m: "Document name match · Linked SUB-042", t: "PDF" },
            { n: "Spec Section 08 44 00", m: "Description match · Specs folder", t: "DOCX" },
          ].map((r, i) => (
            <li
              key={r.n}
              className={
                "rounded-xl border px-3 py-2.5 " +
                (i === 0 ? "border-brand-orange/35 bg-brand-orange/[0.04]" : "border-slate-200 bg-white")
              }
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[12px] font-semibold text-brand-navy">{r.n}</p>
                <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[9px] font-semibold text-brand-muted">
                  {r.t}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-brand-muted">{r.m}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function DocumentVersionsUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / DOC-1842 / versions" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Version & revision control</p>
        <p className="mt-1 text-[14px] font-semibold text-white">Curtain wall shop drawings</p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {[
            { n: "01", note: "Initial upload", current: false },
            { n: "02", note: "Coord. update", current: false },
            { n: "03", note: "Approved set", current: true },
          ].map((v, i, arr) => (
            <div key={v.n} className="flex items-center gap-2">
              <div
                className={
                  "min-w-[88px] rounded-xl border px-3 py-2.5 text-center " +
                  (v.current
                    ? "border-brand-orange/45 bg-brand-orange/15"
                    : "border-white/10 bg-white/[0.04]")
                }
              >
                <p className={"text-[11px] font-bold " + (v.current ? "text-brand-orange" : "text-white")}>
                  Version {v.n}
                </p>
                <p className="mt-0.5 text-[9px] text-slate-400">{v.note}</p>
                {v.current ? (
                  <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-brand-orange">Current</p>
                ) : (
                  <p className="mt-1 text-[8px] uppercase tracking-wide text-slate-500">Available</p>
                )}
              </div>
              {i < arr.length - 1 ? (
                <span className="text-[11px] font-semibold text-slate-500" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {[
            { r: "Rev 03", s: "Current", note: "Issued for construction", hot: true },
            { r: "Rev 02", s: "Available", note: "Coordination comments incorporated", hot: false },
            { r: "Rev 01", s: "Available", note: "Initial submittal package", hot: false },
          ].map((v) => (
            <li
              key={v.r}
              className={
                "rounded-xl border px-3 py-2.5 " +
                (v.hot ? "border-brand-orange/45 bg-brand-orange/10" : "border-white/10 bg-white/[0.04]")
              }
            >
              <div className="flex items-center justify-between gap-2">
                <span className={"text-[12px] font-semibold " + (v.hot ? "text-white" : "text-slate-300")}>
                  {v.r}
                </span>
                <span className={"text-[9px] font-bold uppercase " + (v.hot ? "text-brand-orange" : "text-slate-500")}>
                  {v.s}
                </span>
              </div>
              <p className="mt-0.5 text-[10px] text-slate-400">{v.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-slate-400">
          Latest becomes current. Previous versions remain available for reference.
        </p>
      </div>
    </BrowserFrame>
  );
}

export function DrawingRegisterUI() {
  const rows = [
    { no: "C-101", t: "Site Plan", d: "Civil", sz: "ARCH D", r: "03", s: "Current" },
    { no: "S-201", t: "Foundation Plan", d: "Structural", sz: "ARCH D", r: "04", s: "Current" },
    { no: "A-101", t: "Level 03 Floor Plan", d: "Architectural", sz: "ARCH D", r: "05", s: "Current" },
    { no: "M-301", t: "HVAC Plan", d: "MEP", sz: "ARCH D", r: "02", s: "Current" },
    { no: "E-401", t: "Power Plan", d: "Electrical", sz: "ARCH D", r: "03", s: "Review" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / register" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Drawing register</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Riverside Medical Center · Current set</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[640px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Number", "Title", "Discipline", "Sheet", "Rev", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {rows.map((row, i) => (
              <tr
                key={row.no}
                className={"border-b border-white/5 last:border-0 " + (i === 2 ? "bg-brand-orange/10" : "")}
              >
                <td className="whitespace-nowrap px-2 py-2.5 font-semibold text-white">{row.no}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{row.t}</td>
                <td className="px-2 py-2.5">{row.d}</td>
                <td className="px-2 py-2.5">{row.sz}</td>
                <td className="px-2 py-2.5 font-semibold text-brand-orange">{row.r}</td>
                <td className="px-2 py-2.5">{row.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function DrawingViewerDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / A-101">
      <AppTopBar />
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl border border-dashed border-brand-blue/25 bg-[linear-gradient(135deg,#e8eef8,#f5f8fc)]">
            <div className="absolute inset-6 border border-brand-navy/15" />
            <div className="absolute left-[25%] top-[35%] h-14 w-28 border border-brand-navy/25" />
            <p className="relative text-[12px] font-semibold text-brand-blue">Sheet A-101 · Viewer</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Architectural", "Structural", "Civil", "MEP", "Electrical"].map((d, i) => (
              <span
                key={d}
                className={
                  "rounded-md px-2 py-1 text-[9px] font-semibold " +
                  (i === 0 ? "bg-brand-orange/10 text-brand-orange" : "bg-brand-soft text-brand-muted")
                }
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-brand-soft/40 p-4">
          <span className="rounded-md bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-700">
            Current revision
          </span>
          <div className="mt-3 space-y-2">
            {[
              ["Drawing number", "A-101"],
              ["Drawing title", "Level 03 Floor Plan"],
              ["Discipline", "Architectural"],
              ["Sheet size", "ARCH D"],
              ["Revision", "05"],
              ["Sheets", "12 of 48"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px]">
                <span className="text-brand-muted">{l}</span>
                <span className="font-semibold text-brand-navy">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DrawingMarkupUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / A-101 / markup">
      <div className="p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <p className="ui-label">Drawing markup · Non-destructive overlay</p>
          <span className="rounded-md border border-brand-line bg-white px-2 py-1 text-[9px] font-semibold text-brand-navy">
            Source file unchanged
          </span>
        </div>
        <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#eef2f7,#f8fafc)] sm:h-60">
          <div className="absolute inset-8 border border-brand-navy/10" />
          <div className="absolute left-[22%] top-[28%] h-16 w-20 border-2 border-brand-orange/70" />
          <div className="absolute left-[30%] top-[24%] h-0 w-10 rotate-[-25deg] border-t-2 border-brand-orange" />
          <div className="absolute left-[42%] top-[20%] rounded-md bg-brand-navy px-2 py-1 text-[9px] font-semibold text-white">
            Verify beam pocket
          </div>
          <div className="absolute bottom-[28%] right-[24%] h-8 w-8 rounded-full border-2 border-brand-blue/60" />
          <div className="absolute bottom-[22%] right-[18%] rounded bg-white/90 px-1.5 py-0.5 text-[8px] font-semibold text-brand-blue shadow-sm">
            {"Dim 12'-6\""}
          </div>
          <span className="absolute left-[55%] top-[48%] flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[9px] font-bold text-white">
            2
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Arrow", "Note", "Highlight", "Measure", "Comment"].map((t) => (
            <span key={t} className="rounded-md bg-brand-soft px-2 py-1 text-[9px] font-medium text-brand-navy">
              {t}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SheetsAsBuiltUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / sheets">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-3">Sheets & as-built tracking</p>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-[0.7fr_1.2fr_0.7fr_0.8fr] gap-2 border-b border-slate-100 bg-brand-soft/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">
            <span>Sheet</span>
            <span>Title</span>
            <span>Rev</span>
            <span>As-built</span>
          </div>
          {[
            { s: "A-101", t: "Level 03 Floor Plan", r: "05", a: "In progress" },
            { s: "A-201", t: "South Elevation", r: "03", a: "Pending" },
            { s: "S-301", t: "Foundation Plan", r: "04", a: "Recorded" },
            { s: "M-101", t: "HVAC Plan", r: "02", a: "Pending" },
          ].map((row, i) => (
            <div
              key={row.s}
              className={
                "grid grid-cols-[0.7fr_1.2fr_0.7fr_0.8fr] gap-2 border-b border-slate-100 px-3 py-2.5 text-[11px] last:border-0 " +
                (i === 2 ? "bg-emerald-50/50" : "bg-white")
              }
            >
              <span className="font-semibold text-brand-navy">{row.s}</span>
              <span className="truncate text-brand-navy">{row.t}</span>
              <span className="text-brand-muted">{row.r}</span>
              <span
                className={
                  row.a === "Recorded"
                    ? "font-semibold text-emerald-700"
                    : row.a === "In progress"
                      ? "font-semibold text-brand-orange"
                      : "text-brand-muted"
                }
              >
                {row.a}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TransmittalUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / documents / transmittals / new" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">New Transmittal</p>
        <p className="mt-1 text-[14px] font-semibold text-white">TR-028 · Shop drawings package</p>
        <div className="mt-4 space-y-2">
          {[
            ["To", "Harbor Development · AE Team"],
            ["Selected documents", "4 items · A-101, SUB-042 package"],
            ["Purpose", "For review and comment"],
            ["Sent by", "Jordan Miles"],
            ["Acknowledgement", "Pending"],
            ["Status", "Sent"],
          ].map(([l, v]) => (
            <div
              key={l}
              className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
            >
              <span className="text-[11px] text-slate-400">{l}</span>
              <span className="text-right text-[11px] font-semibold text-white">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function FieldDrawingUI() {
  return (
    <div className="mx-auto w-full max-w-[280px]" aria-hidden="true">
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card">
        <div className="bg-brand-navy px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Field · Current drawing</p>
          <p className="mt-1 text-[14px] font-semibold text-white">A-101 Floor Plan</p>
        </div>
        <div className="space-y-2 p-4">
          {[
            ["Revision", "05 · Current"],
            ["Updated", "Mar 12, 2026"],
            ["Project", "Riverfront Office"],
            ["Sheet", "A-101 of 48"],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
              <span className="text-brand-muted">{l}</span>
              <span className="font-semibold text-brand-navy">{v}</span>
            </div>
          ))}
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-[11px] font-semibold text-emerald-700">
            Working from current revision
          </div>
        </div>
      </div>
    </div>
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

export function ScheduleGanttUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / scheduling / riverfront / gantt">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">CPM schedule · Gantt</p>
            <p className="text-[13px] font-semibold text-brand-navy">Riverfront Office Complex</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[9px] font-semibold text-brand-muted">
              Baseline
            </span>
            <span className="rounded-md border border-brand-orange/30 bg-brand-orange/5 px-2 py-1 text-[9px] font-semibold text-brand-orange">
              Current
            </span>
            <span className="rounded-md bg-brand-soft px-2 py-1 text-[9px] font-semibold text-brand-navy">
              Variance · −3d
            </span>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-[1.1fr_2fr] gap-2 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">
          <span>Activity</span>
          <div className="grid grid-cols-6 gap-1">
            {["W1", "W2", "W3", "W4", "W5", "W6"].map((w) => (
              <span key={w} className="text-center">
                {w}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {[
            { n: "Foundation pour", status: "92%", left: "0%", w: "28%", critical: false, baseline: true },
            { n: "Structural steel", status: "64%", left: "18%", w: "34%", critical: true, baseline: true },
            { n: "MEP rough-in", status: "22%", left: "42%", w: "30%", critical: true, baseline: false },
            { n: "Envelope", status: "0%", left: "58%", w: "26%", critical: false, baseline: false },
          ].map((row) => (
            <div key={row.n} className="grid grid-cols-[1.1fr_2fr] items-center gap-2">
              <div>
                <p className="truncate text-[11px] font-semibold text-brand-navy">{row.n}</p>
                <p className="text-[9px] text-brand-muted">
                  {row.status} complete{row.critical ? " · Critical" : ""}
                </p>
              </div>
              <div className="relative h-8 rounded-md bg-slate-100">
                {row.baseline ? (
                  <div
                    className="absolute top-1 h-2 rounded-sm bg-slate-300/80"
                    style={{ left: row.left, width: row.w }}
                  />
                ) : null}
                <div
                  className={
                    "absolute bottom-1 h-3 rounded-sm " + (row.critical ? "bg-brand-orange" : "bg-brand-blue")
                  }
                  style={{ left: row.left, width: row.w }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[9px] text-brand-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-4 rounded-sm bg-slate-300" /> Baseline
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-4 rounded-sm bg-brand-blue" /> Current
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-4 rounded-sm bg-brand-orange" /> Critical path
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ScheduleDependenciesUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / scheduling / riverfront / dependencies">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-3">Task relationships</p>
          <ul className="space-y-2">
            {[
              { from: "Foundation", to: "Structural", type: "FS", lag: "+2d" },
              { from: "Structural", to: "MEP rough-in", type: "SS", lag: "+0d" },
              { from: "MEP rough-in", to: "Envelope", type: "FF", lag: "+1d" },
              { from: "Envelope", to: "Finishes", type: "FS", lag: "+0d" },
            ].map((r) => (
              <li key={r.from + r.to} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold text-brand-navy">
                    {r.from} → {r.to}
                  </p>
                  <span className="rounded-md bg-brand-soft px-2 py-0.5 font-mono text-[9px] font-bold text-brand-navy">
                    {r.type}
                  </span>
                </div>
                <p className="mt-1 text-[10px] text-brand-muted">Lag {r.lag} · Float tracked on successor</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brand-soft/40 p-4">
          <p className="ui-label mb-3">Critical path & float</p>
          <div className="mb-3 space-y-2">
            {["Structural steel", "MEP rough-in", "Envelope"].map((t, i) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-lg border border-brand-orange/25 bg-white px-3 py-2"
              >
                <span className="text-[11px] font-semibold text-brand-navy">{t}</span>
                <span className="text-[9px] font-semibold text-brand-orange">
                  {i === 0 ? "Float 0d" : i === 1 ? "Float 0d" : "Float 1d"}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-7">
            {["FS", "FF", "SS", "SF", "LAG", "PATH", "FLOAT"].map((k) => (
              <div
                key={k}
                className="rounded-md border border-slate-200 bg-white px-1.5 py-2 text-center font-mono text-[9px] font-bold text-brand-navy"
              >
                {k}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ScheduleLookAheadUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / scheduling / riverfront / look-ahead">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">3-week look-ahead</p>
            <p className="text-[12px] text-brand-muted">Auto-generated from CPM · Mar 10–30</p>
          </div>
          <span className="rounded-md bg-brand-blue/10 px-2 py-1 text-[10px] font-semibold text-brand-blue">
            From master schedule
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            {
              w: "Week 1",
              items: ["Steel column set L3", "Slab edge forms", "MEP sleeve layout"],
            },
            {
              w: "Week 2",
              items: ["Deck pour L3", "Duct hangers", "Temp power feed"],
            },
            {
              w: "Week 3",
              items: ["Envelope mockup", "Firestop inspection", "Look-ahead review"],
            },
          ].map((col, i) => (
            <div
              key={col.w}
              className={
                "rounded-xl border p-3 " +
                (i === 0 ? "border-brand-orange/35 bg-brand-orange/[0.04]" : "border-slate-200 bg-white")
              }
            >
              <p className="text-[11px] font-semibold text-brand-navy">{col.w}</p>
              <ul className="mt-2 space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="rounded-md bg-brand-soft/70 px-2 py-1.5 text-[10px] text-brand-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ScheduleRiskUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / scheduling / riverfront / risk" dark>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Gantt · risk overlay</p>
          <div className="mt-3 space-y-2">
            {[
              { n: "Structural steel", risk: false },
              { n: "Concrete Pour — Level 04", risk: true },
              { n: "MEP rough-in", risk: false },
            ].map((r) => (
              <div key={r.n}>
                <p className={"mb-1 text-[11px] " + (r.risk ? "font-semibold text-brand-orange" : "text-slate-300")}>
                  {r.n}
                </p>
                <div className="h-6 rounded-md bg-white/5">
                  <div
                    className={"h-full w-[55%] rounded-md " + (r.risk ? "bg-brand-orange/80" : "bg-brand-blue/70")}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Schedule Risk</p>
          <p className="mt-2 text-lg font-bold text-white">HIGH RISK</p>
          <p className="mt-1 text-[13px] font-semibold text-white">Concrete Pour — Level 04</p>
          <p className="mt-3 text-[11px] text-slate-400">Likely delay</p>
          <p className="text-[15px] font-semibold text-white">2–3 days</p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">Signals</p>
          <ul className="mt-1.5 space-y-1 text-[11px] text-slate-300">
            <li>• Crew productivity below plan</li>
            <li>• Weather impact detected</li>
            <li>• Predecessor activity trending late</li>
          </ul>
          <div className="mt-3 rounded-lg border border-brand-orange/35 bg-brand-orange/10 px-3 py-2.5">
            <p className="text-[10px] font-semibold text-brand-orange">Recommended action</p>
            <p className="mt-1 text-[11px] text-slate-200">Review crew allocation and predecessor completion.</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ScheduleExportUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / scheduling / riverfront / export">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Gantt & reporting</p>
            <p className="text-[13px] font-semibold text-brand-navy">Share schedule performance</p>
          </div>
          <span className="rounded-md border border-brand-orange/30 bg-brand-orange/5 px-2.5 py-1.5 text-[10px] font-semibold text-brand-orange">
            Export Gantt PDF
          </span>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="border-b border-slate-100 bg-brand-soft/60 px-3 py-2 text-[10px] font-semibold text-brand-navy">
            Current vs baseline · Riverfront
          </div>
          <div className="space-y-2 p-3">
            {[
              { n: "Critical path activities", v: "12" },
              { n: "Schedule variance", v: "−3 days" },
              { n: "Look-ahead window", v: "3 weeks" },
            ].map((r) => (
              <div key={r.n} className="flex items-center justify-between text-[11px]">
                <span className="text-brand-muted">{r.n}</span>
                <span className="font-semibold text-brand-navy">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[11px] text-brand-muted">
          PDF-ready schedule output for project teams and stakeholders.
        </p>
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
  return <AccountingDashboardUI />;
}

export function AccountingDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / accounting" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Native Accounting</p>
        <p className="mt-0.5 text-[14px] font-semibold text-white">Construction financial activity</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {["General Ledger", "Accounts Payable", "Accounts Receivable", "Vendors", "Project Accounting", "Transactions"].map(
            (t, i) => (
              <span
                key={t}
                className={
                  "rounded-md border px-2 py-1 text-[9px] font-semibold " +
                  (i === 0
                    ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
                    : "border-white/10 bg-white/[0.04] text-slate-300")
                }
              >
                {t}
              </span>
            )
          )}
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Cash Position", "$2.84M"],
            ["Accounts Receivable", "$1.42M"],
            ["Accounts Payable", "$986K"],
            ["Open Transactions", "124"],
            ["Project Revenue", "$4.82M"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[13px] font-bold ${i === 2 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-[0.7fr_1.3fr_0.9fr_0.7fr_0.8fr_0.7fr] gap-1 border-b border-white/10 bg-white/5 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
            <span>Date</span>
            <span>Project</span>
            <span>Account</span>
            <span>Type</span>
            <span>Amount</span>
            <span>Status</span>
          </div>
          {[
            { d: "09/08/26", p: "Riverside Medical Center", a: "Subcontractor", t: "Payment", v: "$84,200", s: "Approved", hot: false },
            { d: "09/08/26", p: "Downtown Office", a: "Materials", t: "Invoice", v: "$32,450", s: "Pending", hot: true },
            { d: "09/07/26", p: "Harbor Expansion", a: "Labor", t: "Timesheet", v: "$18,720", s: "Posted", hot: false },
          ].map((row) => (
            <div
              key={row.d + row.p + row.t}
              className={
                "grid grid-cols-[0.7fr_1.3fr_0.9fr_0.7fr_0.8fr_0.7fr] gap-1 border-b border-white/5 px-3 py-2.5 text-[10px] last:border-0 " +
                (row.hot ? "bg-brand-orange/10" : "")
              }
            >
              <span className="text-slate-400">{row.d}</span>
              <span className="truncate text-slate-200">{row.p}</span>
              <span className="text-slate-300">{row.a}</span>
              <span className="text-slate-300">{row.t}</span>
              <span className="font-semibold text-white">{row.v}</span>
              <span
                className={
                  "font-semibold " +
                  (row.s === "Pending"
                    ? "text-brand-orange"
                    : row.s === "Approved"
                      ? "text-emerald-400"
                      : "text-[#7EB6FF]")
                }
              >
                {row.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AccountingApUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / accounting / ap" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Accounts Payable</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Vendor obligations</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[520px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Vendor", "Invoice", "Project", "Due Date", "Amount", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {[
              ["Pacific Steel Co.", "INV-4412", "Riverside Medical", "Sep 18", "$84,200", "Pending"],
              ["Delta MEP LLC", "INV-4388", "Downtown Office", "Sep 12", "$32,450", "Approved"],
              ["Harbor Formworks", "INV-4371", "Harbor Expansion", "Sep 05", "$18,900", "Paid"],
            ].map((r) => (
              <tr key={r[1]} className="border-b border-white/5 last:border-0">
                {r.map((c, i) => (
                  <td
                    key={c}
                    className={
                      "whitespace-nowrap px-2 py-2.5 " +
                      (i === 5
                        ? c === "Pending"
                          ? "font-semibold text-brand-orange"
                          : c === "Paid"
                            ? "font-semibold text-emerald-400"
                            : "font-semibold text-[#7EB6FF]"
                        : i === 4
                          ? "font-semibold text-white"
                          : "")
                    }
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function AccountingArUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / accounting / ar" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Accounts Receivable</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Customer receivables</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[520px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Customer", "Project", "Invoice", "Due Date", "Amount", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {[
              ["Riverside Health", "Riverside Medical", "AR-2201", "Sep 22", "$412,000", "Open"],
              ["Metro Developers", "Downtown Office", "AR-2194", "Sep 15", "$186,500", "Partial"],
              ["Harbor Authority", "Harbor Expansion", "AR-2188", "Sep 08", "$94,200", "Paid"],
            ].map((r) => (
              <tr key={r[2]} className="border-b border-white/5 last:border-0">
                {r.map((c, i) => (
                  <td
                    key={c}
                    className={
                      "whitespace-nowrap px-2 py-2.5 " +
                      (i === 5
                        ? c === "Open"
                          ? "font-semibold text-brand-orange"
                          : c === "Paid"
                            ? "font-semibold text-emerald-400"
                            : "font-semibold text-[#7EB6FF]"
                        : i === 4
                          ? "font-semibold text-white"
                          : "")
                    }
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function AccountingProjectUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / accounting / projects / riverside-medical" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Project Accounting</p>
        <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-3 py-2 text-[11px] font-semibold text-brand-orange">
          Current financial status · Active
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Contract Value", "$4.82M"],
            ["Revenue", "$3.21M"],
            ["Costs", "$2.94M"],
            ["Receivables", "$412K"],
            ["Payables", "$186K"],
            ["Cash applied", "$2.84M"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[13px] font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">Recent project transactions</p>
          <p className="mt-1 text-[11px] text-slate-300">AP payment · Subcontractor · $84,200 · Posted to GL</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AccountingReportUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / accounting / reporting" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="mb-3 text-[13px] font-semibold">Financial visibility</p>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {[
            ["Revenue", "$4.82M", 72],
            ["Expenses", "$3.41M", 58],
            ["AR", "$1.42M", 48],
            ["AP", "$986K", 36],
            ["Cash Position", "$2.84M", 64],
          ].map(([l, v, w]) => (
            <div key={l as string} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[12px] font-bold">{v}</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-brand-blue/70" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/5 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
            <span>Report</span>
            <span>Period</span>
            <span>Scope</span>
            <span>Status</span>
          </div>
          {[
            ["GL activity", "Sep 2026", "All projects", "Ready"],
            ["AP aging", "Sep 2026", "Vendors", "Ready"],
            ["AR aging", "Sep 2026", "Customers", "Ready"],
          ].map((r) => (
            <div key={r[0]} className="grid grid-cols-4 border-b border-white/5 px-3 py-2.5 text-[10px] text-slate-300 last:border-0">
              <span className="font-semibold text-white">{r[0]}</span>
              <span>{r[1]}</span>
              <span>{r[2]}</span>
              <span className="font-semibold text-emerald-400">{r[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AccountingFlowUI() {
  const steps = [
    { n: "01", t: "Capture", d: "Bring project and financial activity into the system." },
    { n: "02", t: "Code", d: "Organize transactions against accounts, projects, and cost structures." },
    { n: "03", t: "Review", d: "Review accounting activity, obligations, and financial status." },
    { n: "04", t: "Report", d: "Use connected information to understand financial performance." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Accounting workflow</p>
      <ol className="grid gap-3 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li
            key={s.t}
            className={
              "rounded-xl border px-3 py-3 " +
              (i === 0 ? "border-brand-orange/30 bg-brand-orange/[0.04]" : "border-slate-200 bg-brand-soft/40")
            }
          >
            <p className="font-mono text-[10px] font-bold text-brand-orange">{s.n}</p>
            <p className="mt-1 text-[13px] font-semibold text-brand-navy">{s.t}</p>
            <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BillingWorkspaceUI() {
  const rows = [
    { item: "01", desc: "General Conditions", sched: "420K", prev: "280K", curr: "35K", total: "315K", bal: "105K" },
    { item: "02", desc: "Site Work", sched: "310K", prev: "250K", curr: "20K", total: "270K", bal: "40K" },
    { item: "03", desc: "Concrete", sched: "860K", prev: "620K", curr: "55K", total: "675K", bal: "185K" },
    { item: "04", desc: "Structural Steel", sched: "1.20M", prev: "840K", curr: "75K", total: "915K", bal: "285K" },
    { item: "05", desc: "Electrical", sched: "875K", prev: "510K", curr: "62K", total: "572K", bal: "303K" },
    { item: "06", desc: "Finishes", sched: "665K", prev: "210K", curr: "37K", total: "247K", bal: "418K" },
  ];

  return (
    <BrowserFrame url="app.vertexcms.com / billing / riverside-medical" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Billing Workspace</p>
        <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Contract Value", "$4.82M"],
            ["Original Contract", "$4.50M"],
            ["Approved Changes", "+$320K"],
            ["Billed", "$3.21M"],
            ["Paid", "$2.84M"],
            ["Outstanding", "$370K"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[12px] font-bold ${i === 5 || i === 2 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <div className="mb-1 flex justify-between text-[10px] text-slate-400">
            <span>Billing progress</span>
            <span className="font-semibold text-brand-orange">Current application · $284K</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-full w-[67%] rounded-full bg-brand-blue/70" />
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="min-w-[640px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-[9px] uppercase tracking-wide text-slate-500">
                {["Item", "Description", "Scheduled Value", "Previous", "Current", "Total Completed", "Balance"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.item} className="border-b border-white/5 text-slate-300 last:border-0">
                  <td className="px-2 py-2 font-semibold text-white">{r.item}</td>
                  <td className="whitespace-nowrap px-2 py-2">{r.desc}</td>
                  <td className="px-2 py-2">{r.sched}</td>
                  <td className="px-2 py-2">{r.prev}</td>
                  <td className="px-2 py-2 font-semibold text-brand-orange">{r.curr}</td>
                  <td className="px-2 py-2 font-medium text-white">{r.total}</td>
                  <td className="px-2 py-2">{r.bal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BillingSovUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / billing / riverside-medical / sov" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Schedule of Values · Progress billing
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Application #08 · Riverside Medical Center</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[720px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {[
                "Item",
                "Scheduled Value",
                "Previous Apps",
                "Current App",
                "Total Completed",
                "Retainage",
                "Balance to Finish",
              ].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {[
              ["03 Concrete", "$860K", "$620K", "$55K", "$675K", "$67.5K", "$185K"],
              ["04 Structural Steel", "$1.20M", "$840K", "$75K", "$915K", "$91.5K", "$285K"],
              ["05 Electrical", "$875K", "$510K", "$62K", "$572K", "$57.2K", "$303K"],
              ["06 Finishes", "$665K", "$210K", "$37K", "$247K", "$24.7K", "$418K"],
            ].map((r) => (
              <tr key={r[0]} className="border-b border-white/5 last:border-0">
                {r.map((c, i) => (
                  <td
                    key={c}
                    className={
                      "whitespace-nowrap px-2 py-2.5 " +
                      (i === 0
                        ? "font-semibold text-white"
                        : i === 3
                          ? "font-semibold text-brand-orange"
                          : i === 4
                            ? "font-medium text-white"
                            : "")
                    }
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[9px] text-slate-500">
          Modern Vertex CMS interpretation of SOV / progress billing — not a copyrighted form reproduction
        </p>
      </div>
    </BrowserFrame>
  );
}

export function BillingProgressUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / billing / riverside-medical / progress" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[13px] font-semibold">Billing that reflects project progress</p>
        <p className="mt-1 text-[11px] text-slate-400">Riverside Medical Center · Current cycle</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Contract Value", "$4.82M"],
            ["Completed Work", "$3.21M"],
            ["Current Application", "$284K"],
            ["Project Progress", "67%"],
            ["Billing Progress", "67%"],
            ["Remaining Balance", "$1.61M"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[13px] font-bold ${i === 2 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-2 flex justify-between text-[10px]">
            <span className="text-slate-400">Project progress</span>
            <span className="text-slate-300">67%</span>
          </div>
          <div className="mb-3 h-2 rounded-full bg-white/10">
            <div className="h-full w-[67%] rounded-full bg-brand-blue/70" />
          </div>
          <div className="mb-2 flex justify-between text-[10px]">
            <span className="text-slate-400">Billing progress</span>
            <span className="font-semibold text-brand-orange">67% · App #08</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div className="h-full w-[67%] rounded-full bg-brand-orange" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BillingPayAppUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / billing / riverside-medical / pay-app-08" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Pay Application</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Application #08 · G702 workflow</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <ol className="mb-4 flex flex-wrap items-center gap-2 text-[10px]">
          {["Schedule of Values", "Progress Billing", "Pay Application", "Approval", "Payment"].map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span
                className={
                  "rounded-md border px-2 py-1 font-semibold " +
                  (i === 2
                    ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
                    : i < 2
                      ? "border-white/15 bg-white/5 text-slate-200"
                      : "border-white/10 text-slate-500")
                }
              >
                {s}
              </span>
              {i < 4 ? <span className="text-slate-600">→</span> : null}
            </li>
          ))}
        </ol>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ["Current payment due", "$284,000"],
            ["Previous certificates", "$2,926,000"],
            ["Total completed & stored", "$3,210,000"],
            ["Status", "In review"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-0.5 text-[12px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BillingArUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / billing / receivables" dark>
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Invoices & AR</p>
          <div className="overflow-x-auto">
            <table className="min-w-[360px] w-full text-left text-[10px]">
              <thead>
                <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
                  {["Customer", "Project", "Invoice", "Amount", "Due", "Status"].map((h) => (
                    <th key={h} className="whitespace-nowrap px-1.5 py-2 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  ["Riverside Health", "Riverside Medical", "AR-2201", "$284K", "Sep 22", "Open"],
                  ["Metro Developers", "Downtown Office", "AR-2194", "$96K", "Sep 15", "Partial"],
                  ["Harbor Authority", "Harbor Expansion", "AR-2188", "$64K", "Sep 08", "Paid"],
                ].map((r) => (
                  <tr key={r[2]} className="border-b border-white/5 last:border-0">
                    {r.map((c, i) => (
                      <td
                        key={c}
                        className={
                          "whitespace-nowrap px-1.5 py-2 " +
                          (i === 5
                            ? c === "Open"
                              ? "font-semibold text-brand-orange"
                              : c === "Paid"
                                ? "font-semibold text-emerald-400"
                                : "font-semibold text-[#7EB6FF]"
                            : i === 3
                              ? "font-semibold text-white"
                              : "")
                        }
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Outstanding</p>
          {[
            ["Billed", "$3.21M"],
            ["Paid", "$2.84M"],
            ["Outstanding", "$370K"],
            ["Overdue", "$48K"],
          ].map(([l, v], i) => (
            <div
              key={l}
              className={
                "flex items-center justify-between rounded-lg border px-3 py-2.5 text-[11px] " +
                (i >= 2 ? "border-brand-orange/30 bg-brand-orange/10" : "border-white/10 bg-white/[0.04]")
              }
            >
              <span className="text-slate-400">{l}</span>
              <span className={`font-semibold ${i >= 2 ? "text-brand-orange" : "text-white"}`}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BillingFlowUI() {
  const steps = [
    { n: "01", t: "Build", d: "Set up contract and scheduled values." },
    { n: "02", t: "Progress", d: "Capture current project billing progress." },
    { n: "03", t: "Apply", d: "Prepare and review the current payment application." },
    { n: "04", t: "Track", d: "Monitor billed, paid, and outstanding amounts." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Billing workflow</p>
      <ol className="relative space-y-0">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (i === 0 ? "bg-brand-orange text-white" : "bg-brand-navy text-white")
                }
              >
                {s.n}
              </span>
              {i < steps.length - 1 ? (
                <span className="my-1 w-px min-h-[18px] flex-1 bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={i < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PayAppDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / pay-applications / riverside-medical / 08" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              AIA Pay Application
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center · Application #08</p>
          </div>
          <span className="rounded-md border border-brand-orange/35 bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
            In Review
          </span>
        </div>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Original Contract", "$4.50M"],
            ["Approved Changes", "+$320K"],
            ["Revised Contract", "$4.82M"],
            ["Completed to Date", "$3.42M"],
            ["Retainage", "$342K"],
            ["Current Due", "$284K"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[12px] font-bold ${i === 5 || i === 1 ? "text-brand-orange" : "text-white"}`}>
                {v}
              </p>
            </div>
          ))}
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Application Date", "09/08/2026"],
            ["Billing Period", "August 2026"],
            ["Reviewer", "Project Manager"],
            ["Remaining Balance", "$1.06M"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-0.5 text-[12px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PayAppG702UI() {
  const lines = [
    ["Original Contract Sum", "$4,500,000"],
    ["Approved Changes", "+$320,000"],
    ["Current Contract Sum", "$4,820,000"],
    ["Total Completed and Stored", "$3,420,000"],
    ["Less Retainage", "−$342,000"],
    ["Less Previous Payments", "−$2,794,000"],
    ["Current Payment Due", "$284,000"],
    ["Balance to Finish", "$1,060,000"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / pay-applications / 08 / summary" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Payment summary · G702-inspired
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Application #08 · Riverside Medical Center</p>
      </div>
      <div className="p-4 sm:p-5">
        <ul className="space-y-1.5">
          {lines.map(([l, v], i) => (
            <li
              key={l}
              className={
                "flex items-center justify-between rounded-lg border px-3 py-2.5 text-[11px] " +
                (i === 6
                  ? "border-brand-orange/40 bg-brand-orange/10"
                  : i === 2 || i === 3
                    ? "border-white/15 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03]")
              }
            >
              <span className={i === 6 ? "font-semibold text-brand-orange" : "text-slate-300"}>{l}</span>
              <span className={`font-bold ${i === 6 ? "text-brand-orange" : "text-white"}`}>{v}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[9px] text-slate-500">
          Modern Vertex CMS interpretation of G702 payment summary — not an official AIA form reproduction
        </p>
      </div>
    </BrowserFrame>
  );
}

export function PayAppG703UI() {
  const rows = [
    { item: "01", desc: "General Conditions", sched: "420K", prev: "280K", curr: "35K", total: "315K", ret: "31.5K", bal: "105K" },
    { item: "02", desc: "Site Work", sched: "310K", prev: "250K", curr: "20K", total: "270K", ret: "27K", bal: "40K" },
    { item: "03", desc: "Concrete", sched: "860K", prev: "620K", curr: "55K", total: "675K", ret: "67.5K", bal: "185K" },
    { item: "04", desc: "Structural Steel", sched: "1.20M", prev: "840K", curr: "75K", total: "915K", ret: "91.5K", bal: "285K" },
    { item: "05", desc: "Mechanical", sched: "690K", prev: "410K", curr: "48K", total: "458K", ret: "45.8K", bal: "232K" },
    { item: "06", desc: "Electrical", sched: "875K", prev: "510K", curr: "62K", total: "572K", ret: "57.2K", bal: "303K" },
    { item: "07", desc: "Finishes", sched: "665K", prev: "210K", curr: "37K", total: "247K", ret: "24.7K", bal: "418K" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / pay-applications / 08 / sov" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Schedule of Values · G703-inspired
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Continuation sheet · Application #08</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[720px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Item", "Description", "Scheduled Value", "Previous", "Current", "Total Completed", "Retainage", "Balance"].map(
                (h) => (
                  <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {rows.map((r) => (
              <tr key={r.item} className="border-b border-white/5 last:border-0">
                <td className="px-2 py-2 font-semibold text-white">{r.item}</td>
                <td className="whitespace-nowrap px-2 py-2">{r.desc}</td>
                <td className="px-2 py-2">{r.sched}</td>
                <td className="px-2 py-2">{r.prev}</td>
                <td className="px-2 py-2 font-semibold text-brand-orange">{r.curr}</td>
                <td className="px-2 py-2 font-medium text-white">{r.total}</td>
                <td className="px-2 py-2">{r.ret}</td>
                <td className="px-2 py-2">{r.bal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Total Contract Value", "$4.82M"],
            ["Total Completed", "$3.42M"],
            ["Current Application", "$284K"],
            ["Remaining Balance", "$1.06M"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-0.5 text-[12px] font-bold ${i === 2 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PayAppRetainageUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / pay-applications / 08 / retainage" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[13px] font-semibold">Retainage on this application</p>
        <p className="mt-1 text-[11px] text-slate-400">
          Retainage is shown as part of the payment picture for the current project application.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Completed Work", "$3.42M"],
            ["Retainage Held", "$342K"],
            ["Example Rate", "10%"],
            ["Before Retainage", "$326K"],
            ["Current Payment Due", "$284K"],
            ["Balance to Finish", "$1.06M"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[13px] font-bold ${i === 4 || i === 1 ? "text-brand-orange" : "text-white"}`}>
                {v}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9px] text-slate-500">Example rate shown for this project — retainage can vary by contract</p>
      </div>
    </BrowserFrame>
  );
}

export function PayAppHistoryUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / pay-applications / riverside-medical / history" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Application history</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[420px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Application", "Period", "Submitted", "Amount", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {[
              ["#05", "May", "05/28/26", "$210K", "Approved"],
              ["#06", "June", "06/29/26", "$248K", "Approved"],
              ["#07", "July", "07/30/26", "$265K", "Approved"],
              ["#08", "August", "09/08/26", "$284K", "In Review"],
            ].map((r, idx) => (
              <tr
                key={r[0]}
                className={
                  "border-b border-white/5 last:border-0 " + (idx === 3 ? "bg-brand-orange/10" : "")
                }
              >
                {r.map((c, i) => (
                  <td
                    key={c}
                    className={
                      "whitespace-nowrap px-2 py-2.5 " +
                      (i === 4
                        ? c === "In Review"
                          ? "font-semibold text-brand-orange"
                          : "font-semibold text-emerald-400"
                        : i === 0 || i === 3
                          ? "font-semibold text-white"
                          : "")
                    }
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function PayAppReviewUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / pay-applications / 08 / review" dark>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Application preview
          </p>
          <p className="text-[14px] font-semibold text-white">Application #08</p>
          <p className="mt-1 text-[11px] text-slate-400">Riverside Medical Center · August 2026</p>
          <div className="mt-3 space-y-2">
            {[
              ["Current Contract Sum", "$4.82M"],
              ["Total Completed & Stored", "$3.42M"],
              ["Current Payment Due", "$284K"],
            ].map(([l, v]) => (
              <div
                key={l}
                className="flex justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px]"
              >
                <span className="text-slate-400">{l}</span>
                <span className="font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Review information
          </p>
          {[
            ["Application", "#08"],
            ["Project", "Riverside Medical Center"],
            ["Contract", "C-2041 Rev B"],
            ["Billing Period", "August 2026"],
            ["Current Amount", "$284,000"],
            ["Retainage", "$342,000 held"],
            ["Reviewer", "Project Manager"],
            ["Status", "In Review"],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px]">
              <span className="text-slate-400">{l}</span>
              <span className={`font-semibold ${l === "Status" ? "text-brand-orange" : "text-white"}`}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PayAppFlowUI() {
  const steps = [
    { n: "01", t: "Prepare", d: "Build the current application from project and contract information." },
    { n: "02", t: "Review", d: "Review SOV, completed work, retainage, and payment details." },
    { n: "03", t: "Certify", d: "Move the application through certification in workflow." },
    { n: "04", t: "Track", d: "Keep application and payment status visible." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Pay application workflow</p>
      <ol className="relative space-y-0">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (i === 2 ? "bg-brand-orange text-white" : "bg-brand-navy text-white")
                }
              >
                {s.n}
              </span>
              {i < steps.length - 1 ? (
                <span className="my-1 w-px min-h-[18px] flex-1 bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={i < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** WIP Reporting — snapshots connected to GL and budget. No invented earned/over-under formulas. */
export function WipDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / wip / riverside-medical" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">WIP Reporting</p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
            Snapshot · Sep 2026
          </span>
        </div>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["Contract Value", "$4.82M"],
            ["Budget", "$5.14M"],
            ["Actual Cost", "$2.94M"],
            ["Billed", "$3.21M"],
            ["Connected Source", "GL · Budget"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[12px] font-bold ${i === 3 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="mb-2 text-[11px] font-semibold">Connected project financial position</p>
          <div className="space-y-2">
            {[
              ["Budget", 78, "bg-brand-blue/60"],
              ["Actual Cost", 52, "bg-emerald-400/70"],
              ["Billed", 58, "bg-brand-orange"],
            ].map(([l, w, bar]) => (
              <div key={l as string}>
                <div className="mb-1 flex justify-between text-[10px] text-slate-400">
                  <span>{l}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${bar}`} style={{ width: `${w}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[9px] text-slate-500">WIP views stay connected to GL and budget data</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WipProjectUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / wip / riverside-medical / detail" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Project WIP view</p>
        <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Project Manager", "A. Chen"],
            ["Contract Value", "$4.82M"],
            ["Budget", "$5.14M"],
            ["Actual Cost", "$2.94M"],
            ["Billed", "$3.21M"],
            ["Snapshot", "Sep 2026"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[13px] font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="mb-3 text-[11px] font-semibold">Budget · Cost · Billed</p>
          <div className="flex h-24 items-end gap-3">
            {[
              { l: "Budget", h: "90%", c: "bg-brand-blue/70" },
              { l: "Cost", h: "58%", c: "bg-emerald-400/70" },
              { l: "Billed", h: "64%", c: "bg-brand-orange" },
            ].map((b) => (
              <div key={b.l} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-20 w-full items-end rounded-md bg-white/5 px-2">
                  <div className={`w-full rounded-sm ${b.c}`} style={{ height: b.h }} />
                </div>
                <span className="text-[9px] text-slate-400">{b.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WipTableUI() {
  const rows = [
    { p: "Riverside Medical Center", c: "$4.82M", b: "$5.14M", cost: "$2.94M", billed: "$3.21M", snap: "Sep 2026" },
    { p: "Downtown Office", c: "$3.64M", b: "$3.80M", cost: "$2.22M", billed: "$2.71M", snap: "Sep 2026" },
    { p: "Harbor Expansion", c: "$6.12M", b: "$6.40M", cost: "$2.68M", billed: "$3.08M", snap: "Sep 2026" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / wip / reporting" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">WIP report</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Active projects · Snapshot Sep 2026</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[640px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Project", "Contract", "Budget", "Actual Cost", "Billed", "Snapshot"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {rows.map((r, i) => (
              <tr key={r.p} className={"border-b border-white/5 last:border-0 " + (i === 0 ? "bg-brand-orange/10" : "")}>
                <td className="whitespace-nowrap px-2 py-2.5 font-semibold text-white">{r.p}</td>
                <td className="px-2 py-2.5">{r.c}</td>
                <td className="px-2 py-2.5">{r.b}</td>
                <td className="px-2 py-2.5">{r.cost}</td>
                <td className="px-2 py-2.5 font-semibold text-brand-orange">{r.billed}</td>
                <td className="px-2 py-2.5">{r.snap}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[9px] text-slate-500">Illustrative snapshot values for marketing — grounded in connected GL and budget context</p>
      </div>
    </BrowserFrame>
  );
}

export function WipPortfolioUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / wip / portfolio" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Portfolio WIP visibility
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Across active projects</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            ["Projects in snapshot", "12"],
            ["Connected to GL", "Yes"],
            ["Budget context", "Live"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[13px] font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2">
          {[
            { n: "Riverside Medical Center", s: "Active", note: "Budget · Cost · Billed in view" },
            { n: "Downtown Office", s: "Active", note: "Needs review this period" },
            { n: "Harbor Expansion", s: "Active", note: "Snapshot current" },
          ].map((p, i) => (
            <li
              key={p.n}
              className={
                "flex items-center justify-between rounded-lg border px-3 py-2.5 " +
                (i === 1 ? "border-brand-orange/35 bg-brand-orange/10" : "border-white/10 bg-white/[0.04]")
              }
            >
              <div>
                <p className="text-[12px] font-semibold text-white">{p.n}</p>
                <p className="text-[10px] text-slate-400">{p.note}</p>
              </div>
              <span className={`text-[10px] font-semibold ${i === 1 ? "text-brand-orange" : "text-slate-300"}`}>
                {p.s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function WipSnapshotUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / wip / snapshots" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[13px] font-semibold">WIP snapshots</p>
        <p className="mt-1 text-[11px] text-slate-400">Capture reporting snapshots connected to GL and budget</p>
        <ul className="mt-4 space-y-2">
          {[
            { p: "Sep 2026", d: "Current period · Ready for review", hot: true },
            { p: "Aug 2026", d: "Closed snapshot · Ledger-connected", hot: false },
            { p: "Jul 2026", d: "Closed snapshot · Budget context retained", hot: false },
          ].map((s) => (
            <li
              key={s.p}
              className={
                "rounded-xl border px-3 py-3 " +
                (s.hot ? "border-brand-orange/35 bg-brand-orange/10" : "border-white/10 bg-white/[0.04]")
              }
            >
              <p className={`text-[12px] font-semibold ${s.hot ? "text-brand-orange" : "text-white"}`}>{s.p}</p>
              <p className="mt-0.5 text-[10px] text-slate-400">{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function WipFlowUI() {
  const steps = [
    { n: "01", t: "Collect", d: "Bring relevant project financial information together." },
    { n: "02", t: "Snapshot", d: "Capture a WIP reporting snapshot for the period." },
    { n: "03", t: "Review", d: "Understand connected budget, cost, billing, and ledger context." },
    { n: "04", t: "Act", d: "Use the reporting view to guide project and financial decisions." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">WIP reporting workflow</p>
      <ol className="relative space-y-0">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (i === 1 ? "bg-brand-orange text-white" : "bg-brand-navy text-white")
                }
              >
                {s.n}
              </span>
              {i < steps.length - 1 ? (
                <span className="my-1 w-px min-h-[18px] flex-1 bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={i < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Cash Flow Forecast — connected to invoices and payables. No bank-balance or alert claims. */
export function CashDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / cash-flow / forecast" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Cash Flow Forecast
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">Outlook · Next 90 days</p>
          </div>
          <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
            Connected · INV · AP
          </span>
        </div>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Expected Inflows", "$1.42M"],
            ["Expected Outflows", "$986K"],
            ["Accounts Receivable", "$1.18M"],
            ["Accounts Payable", "$742K"],
            ["Upcoming Payments", "$384K"],
            ["Net Expected", "+$434K"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[12px] font-bold ${i === 5 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] font-semibold">Inflows vs outflows</p>
            <div className="flex gap-3 text-[9px] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> In
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/80" /> Out
              </span>
            </div>
          </div>
          <div className="flex h-24 items-end gap-2 sm:gap-3">
            {[
              { m: "Sep", inH: "72%", outH: "48%" },
              { m: "Oct", inH: "85%", outH: "62%" },
              { m: "Nov", inH: "58%", outH: "70%" },
              { m: "Dec", inH: "90%", outH: "55%" },
              { m: "Jan", inH: "64%", outH: "58%" },
              { m: "Feb", inH: "78%", outH: "52%" },
            ].map((b) => (
              <div key={b.m} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-20 w-full items-end justify-center gap-0.5 rounded-md bg-white/5 px-1">
                  <div className="w-[42%] rounded-sm bg-brand-orange" style={{ height: b.inH }} />
                  <div className="w-[42%] rounded-sm bg-brand-blue/70" style={{ height: b.outH }} />
                </div>
                <span className="text-[9px] text-slate-400">{b.m}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[9px] text-slate-500">
            Illustrative forecast visibility from invoices and payables — not accuracy claims
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CashChartUI() {
  const months = [
    { m: "Sep", inV: "$248K", outV: "$186K", net: "+$62K" },
    { m: "Oct", inV: "$312K", outV: "$224K", net: "+$88K" },
    { m: "Nov", inV: "$198K", outV: "$256K", net: "−$58K" },
    { m: "Dec", inV: "$340K", outV: "$210K", net: "+$130K" },
    { m: "Jan", inV: "$176K", outV: "$168K", net: "+$8K" },
    { m: "Feb", inV: "$146K", outV: "$142K", net: "+$4K" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / cash-flow / timeline" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Forecast over time
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Expected inflows vs outflows</p>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 flex flex-wrap gap-4 text-[10px] text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-brand-orange" /> Expected Inflows
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-brand-blue/80" /> Expected Outflows
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-emerald-400/80" /> Net Movement
          </span>
        </div>
        <div className="flex h-36 items-end gap-2 sm:gap-3">
          {months.map((b, i) => (
            <div key={b.m} className="flex flex-1 flex-col items-center gap-1">
              <div
                className={
                  "mb-1 text-[8px] font-semibold " + (b.net.startsWith("+") ? "text-emerald-400" : "text-slate-400")
                }
              >
                {b.net}
              </div>
              <div className="flex h-24 w-full items-end justify-center gap-0.5 rounded-md bg-white/5 px-1">
                <div
                  className={"w-[40%] rounded-sm " + (i === 0 ? "bg-brand-orange" : "bg-brand-orange/80")}
                  style={{ height: `${40 + i * 6}%` }}
                />
                <div className="w-[40%] rounded-sm bg-brand-blue/65" style={{ height: `${35 + ((i * 7) % 30)}%` }} />
              </div>
              <span className="text-[9px] font-semibold text-slate-300">{b.m}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CashInflowsUI() {
  const rows = [
    { c: "Northline Development", p: "Riverside Medical Center", inv: "INV-1048", d: "Sep 18", a: "$284K", s: "Expected" },
    { c: "Harbor Properties", p: "Harbor Expansion", inv: "INV-1092", d: "Sep 24", a: "$196K", s: "Pending" },
    { c: "Downtown Holdings", p: "Downtown Office", inv: "INV-1120", d: "Oct 03", a: "$142K", s: "Expected" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / cash-flow / inflows" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Expected inflows</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">From invoices & receivables</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[640px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Customer", "Project", "Invoice", "Expected", "Amount", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {rows.map((r, i) => (
              <tr key={r.inv} className={"border-b border-white/5 last:border-0 " + (i === 0 ? "bg-brand-orange/10" : "")}>
                <td className="whitespace-nowrap px-2 py-2.5 font-semibold text-white">{r.c}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.p}</td>
                <td className="px-2 py-2.5">{r.inv}</td>
                <td className="px-2 py-2.5">{r.d}</td>
                <td className="px-2 py-2.5 font-semibold text-brand-orange">{r.a}</td>
                <td className="px-2 py-2.5">{r.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function CashOutflowsUI() {
  const rows = [
    { v: "ABC Concrete", p: "Riverside Medical Center", t: "Subcontract", d: "Sep 15", a: "$84K", s: "Scheduled" },
    { v: "Metro Electrical", p: "Downtown Office", t: "Purchase Order", d: "Sep 20", a: "$42K", s: "Pending" },
    { v: "SteelWorks", p: "Harbor Expansion", t: "Subcontract", d: "Sep 28", a: "$126K", s: "Scheduled" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / cash-flow / outflows" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Expected outflows</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">From payables & commitments</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[640px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-500">
              {["Vendor", "Project", "Type", "Due", "Amount", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {rows.map((r, i) => (
              <tr key={r.v + r.d} className={"border-b border-white/5 last:border-0 " + (i === 0 ? "bg-brand-orange/10" : "")}>
                <td className="whitespace-nowrap px-2 py-2.5 font-semibold text-white">{r.v}</td>
                <td className="whitespace-nowrap px-2 py-2.5">{r.p}</td>
                <td className="px-2 py-2.5">{r.t}</td>
                <td className="px-2 py-2.5">{r.d}</td>
                <td className="px-2 py-2.5 font-semibold text-brand-orange">{r.a}</td>
                <td className="px-2 py-2.5">{r.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  );
}

export function CashArApUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / cash-flow / ar-ap" dark>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Receivables</p>
          <p className="mt-1 text-[22px] font-bold text-white">$1.18M</p>
          <p className="mt-0.5 text-[10px] text-slate-400">AR visibility from invoices</p>
          <ul className="mt-4 space-y-2">
            {[
              ["Open", "$742K", 72],
              ["Due Soon", "$284K", 42],
              ["Overdue", "$154K", 22],
            ].map(([l, v, w]) => (
              <li key={l as string}>
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className="text-slate-400">{l}</span>
                  <span className="font-semibold text-white">{v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-brand-orange" style={{ width: `${w}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Payables</p>
          <p className="mt-1 text-[22px] font-bold text-white">$742K</p>
          <p className="mt-0.5 text-[10px] text-slate-400">AP visibility from payable workflows</p>
          <ul className="mt-4 space-y-2">
            {[
              ["Due This Week", "$184K", 58],
              ["Due This Month", "$384K", 78],
              ["Scheduled", "$174K", 36],
            ].map(([l, v, w]) => (
              <li key={l as string}>
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className="text-slate-400">{l}</span>
                  <span className="font-semibold text-white">{v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-brand-blue/70" style={{ width: `${w}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CashProjectUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / cash-flow / riverside-medical" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Project financial summary
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-orange/40 bg-brand-orange/15 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
            Selected
          </span>
        </div>
      </div>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Contract Value", "$4.82M"],
            ["Billed", "$3.21M"],
            ["Collected", "$2.84M"],
            ["Outstanding AR", "$370K"],
            ["Upcoming Payables", "$420K"],
            ["Forecast Link", "INV · AP"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[13px] font-bold ${i === 2 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="mb-3 text-[11px] font-semibold">Billing · Collections · Payables</p>
          <div className="flex h-20 items-end gap-3">
            {[
              { l: "Billed", h: "78%", c: "bg-brand-blue/70" },
              { l: "Collected", h: "68%", c: "bg-brand-orange" },
              { l: "Payables", h: "42%", c: "bg-emerald-400/60" },
            ].map((b) => (
              <div key={b.l} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-16 w-full items-end rounded-md bg-white/5 px-2">
                  <div className={`w-full rounded-sm ${b.c}`} style={{ height: b.h }} />
                </div>
                <span className="text-[9px] text-slate-400">{b.l}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[9px] text-slate-500">
            Project context for cash forecast — no invented project cash-position formula
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CashFlowUI() {
  const steps = [
    { n: "01", t: "Collect", d: "Bring receivables, payables, billing, and financial activity together." },
    { n: "02", t: "Organize", d: "Structure expected inflows and outflows in the forecast view." },
    { n: "03", t: "Review", d: "Understand upcoming cash movement from operating data." },
    { n: "04", t: "Plan", d: "Use available information to make informed financial decisions." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Cash flow workflow</p>
      <ol className="relative space-y-0">
        {steps.map((s, i) => (
          <li key={s.t} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (i === 2 ? "bg-brand-orange text-white" : "bg-brand-navy text-white")
                }
              >
                {s.n}
              </span>
              {i < steps.length - 1 ? (
                <span className="my-1 w-px min-h-[18px] flex-1 bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={i < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
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

export function RfiUI() {
  return <RfiRegisterUI />;
}

export function RfiFlowUI() {
  const steps = ["Question", "Assigned", "Response", "Resolved"] as const;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">RFI workflow</p>
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (index === steps.length - 1
                    ? "bg-emerald-500 text-white"
                    : index === 0
                      ? "bg-brand-orange text-white"
                      : "bg-brand-navy text-white")
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 ? (
                <span className="my-1 w-px flex-1 min-h-[18px] bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={index < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold text-brand-navy">{step}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">
                {index === 0
                  ? "Capture the project question"
                  : index === 1
                    ? "Route to the right owner"
                    : index === 2
                      ? "Record the official answer"
                      : "Close with a clear outcome"}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function RfiRegisterUI() {
  const rows = [
    {
      id: "RFI-001",
      subject: "Clarification Required — Beam pocket at Grid B",
      status: "Open",
      priority: "High",
      assignee: "A. Chen",
      due: "Mar 14",
      project: "Riverfront",
      response: "Pending",
      hot: true,
    },
    {
      id: "RFI-002",
      subject: "MEP chase clearance at Level 2",
      status: "In Review",
      priority: "Medium",
      assignee: "J. Patel",
      due: "Mar 16",
      project: "Riverfront",
      response: "In progress",
      hot: false,
    },
    {
      id: "RFI-003",
      subject: "Curtain wall fastener schedule",
      status: "Answered",
      priority: "Low",
      assignee: "M. Ortiz",
      due: "Mar 10",
      project: "Riverfront",
      response: "Received",
      hot: false,
    },
    {
      id: "RFI-004",
      subject: "Slab edge condition at Grid D",
      status: "Closed",
      priority: "Medium",
      assignee: "A. Chen",
      due: "Mar 08",
      project: "Riverfront",
      response: "Complete",
      hot: false,
    },
  ];

  return (
    <BrowserFrame url="app.vertexcms.com / rfis / riverfront">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">RFI Register</p>
            <p className="text-[13px] font-semibold text-brand-navy">Riverfront Office Complex</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
            7 open
          </span>
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          <div className="min-w-[140px] flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-brand-muted">
            Search RFIs…
          </div>
          {["Status", "Priority", "Assignee"].map((f) => (
            <span
              key={f}
              className="rounded-lg border border-slate-200 bg-brand-soft/60 px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy"
            >
              {f} ▾
            </span>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="hidden grid-cols-[0.7fr_1.6fr_0.7fr_0.6fr_0.8fr_0.6fr] gap-2 border-b border-slate-100 bg-brand-soft/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-brand-muted sm:grid">
            <span>RFI</span>
            <span>Subject</span>
            <span>Status</span>
            <span>Priority</span>
            <span>Assignee</span>
            <span>Due</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.id}
              className={
                "border-b border-slate-100 px-3 py-2.5 last:border-0 " +
                (row.hot ? "bg-brand-orange/[0.04]" : "bg-white")
              }
            >
              <div className="grid gap-1 sm:grid-cols-[0.7fr_1.6fr_0.7fr_0.6fr_0.8fr_0.6fr] sm:items-center sm:gap-2">
                <span className="text-[11px] font-semibold text-brand-navy">{row.id}</span>
                <span className="truncate text-[11px] text-brand-navy">{row.subject}</span>
                <span
                  className={
                    "text-[10px] font-semibold " +
                    (row.status === "Open"
                      ? "text-brand-orange"
                      : row.status === "In Review"
                        ? "text-brand-blue"
                        : row.status === "Answered"
                          ? "text-emerald-600"
                          : "text-brand-muted")
                  }
                >
                  {row.status}
                </span>
                <span className="text-[10px] text-brand-muted">{row.priority}</span>
                <span className="text-[10px] text-brand-muted">{row.assignee}</span>
                <span className="text-[10px] text-brand-muted">{row.due}</span>
              </div>
              <p className="mt-1 text-[10px] text-brand-muted sm:hidden">
                {row.project} · Response · {row.response}
              </p>
              <p className="mt-1 hidden text-[10px] text-brand-muted sm:block">
                Project · {row.project} · Response · {row.response}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function RfiCreateUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / rfis / new">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="ui-label">Create RFI</p>
          <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand-navy">
            RFI-005
          </span>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {[
            ["RFI Number", "RFI-005"],
            ["Subject", "Beam pocket clarification"],
            ["Project", "Riverfront Office Complex"],
            ["Assignee", "A. Chen · Architect"],
            ["Priority", "High"],
            ["Due Date", "Mar 18, 2026"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
              <p className="mt-0.5 text-[12px] font-medium text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2.5 rounded-lg border border-slate-200 bg-brand-soft/40 px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Question</p>
          <p className="mt-1 text-[11px] leading-relaxed text-brand-navy">
            Confirm pocket depth for W12×26 at Grid B / Level 3 against structural revision 05.
          </p>
        </div>
        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 text-[10px] text-brand-muted">
            Attachments · Drawing A-301 · Spec 05 12 00
          </div>
          <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Create RFI
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function RfiDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / rfis / RFI-001" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">RFI Detail</p>
        <p className="mt-1 text-[14px] font-semibold text-white">RFI-001 · Beam pocket at Grid B / Level 3</p>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-3 border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-brand-orange/20 px-2 py-0.5 text-[10px] font-semibold text-brand-orange">
              Open
            </span>
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white">
              Priority · High
            </span>
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
              Due Mar 14
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Question</p>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
              Confirm pocket depth for W12×26 against structural revision 05. Field needs direction before pour.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Assignee</p>
            <p className="mt-1 text-[12px] font-semibold text-white">A. Chen · Architect</p>
            <p className="text-[10px] text-slate-400">Response pending</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["A-301.pdf", "Spec 05 12 00"].map((f) => (
              <span key={f} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-400">Activity / history</p>
          <ul className="space-y-2">
            {[
              { t: "RFI created", d: "Mar 11 · P. Rivera", hot: false },
              { t: "Assigned to A. Chen", d: "Mar 11 · System", hot: false },
              { t: "Attachment added", d: "Mar 12 · P. Rivera", hot: true },
              { t: "Awaiting response", d: "Due Mar 14", hot: false },
            ].map((a) => (
              <li
                key={a.t}
                className={
                  "rounded-lg border px-3 py-2 " +
                  (a.hot ? "border-brand-orange/35 bg-brand-orange/10" : "border-white/10 bg-white/[0.03]")
                }
              >
                <p className="text-[11px] font-semibold text-white">{a.t}</p>
                <p className="text-[10px] text-slate-400">{a.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function RfiResponseUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / rfis / RFI-001 / respond">
      <AppTopBar />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-3">Workflow</p>
          <ol className="space-y-2">
            {[
              { n: "Create", done: true },
              { n: "Assign", done: true },
              { n: "Review", done: true },
              { n: "Respond", done: false, active: true },
              { n: "Resolve", done: false },
            ].map((s) => (
              <li
                key={s.n}
                className={
                  "flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-semibold " +
                  (s.active
                    ? "border-brand-orange/40 bg-brand-orange/[0.06] text-brand-orange"
                    : s.done
                      ? "border-slate-200 bg-white text-brand-navy"
                      : "border-slate-100 bg-brand-soft/40 text-brand-muted")
                }
              >
                <span
                  className={
                    "flex h-5 w-5 items-center justify-center rounded-full text-[9px] " +
                    (s.active
                      ? "bg-brand-orange text-white"
                      : s.done
                        ? "bg-brand-navy text-white"
                        : "bg-slate-200 text-brand-muted")
                  }
                >
                  {s.done ? "✓" : s.n[0]}
                </span>
                {s.n}
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-brand-soft/30 p-4">
          <p className="ui-label mb-2">Response panel</p>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Response</p>
            <p className="mt-1 text-[12px] leading-relaxed text-brand-navy">
              Pocket depth confirmed at 6&quot; per structural revision 05. Proceed with pour after inspection.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
              <div className="rounded-lg bg-brand-soft px-2.5 py-2">
                <p className="text-brand-muted">Responded by</p>
                <p className="font-semibold text-brand-navy">A. Chen</p>
              </div>
              <div className="rounded-lg bg-brand-soft px-2.5 py-2">
                <p className="text-brand-muted">Date</p>
                <p className="font-semibold text-brand-navy">Mar 13, 2026</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[10px]">
              <span className="font-semibold text-emerald-700">Status · Answered</span>
              <span className="text-emerald-600">History updated</span>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Activity history</p>
            <p className="mt-1 text-[11px] text-brand-navy">Response recorded · Ready to resolve</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function RfiStatusUI() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Status & priority</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Status</p>
          <ul className="space-y-2">
            {[
              { s: "Open", c: "bg-brand-orange/10 text-brand-orange border-brand-orange/25" },
              { s: "In Review", c: "bg-brand-blue/10 text-brand-blue border-brand-blue/25" },
              { s: "Answered", c: "bg-emerald-50 text-emerald-700 border-emerald-200" },
              { s: "Closed", c: "bg-slate-100 text-brand-muted border-slate-200" },
            ].map((item) => (
              <li
                key={item.s}
                className={"rounded-lg border px-3 py-2 text-[12px] font-semibold " + item.c}
              >
                {item.s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Priority</p>
          <ul className="space-y-2">
            {[
              { s: "High", c: "border-brand-orange/30 bg-brand-orange/[0.06] text-brand-orange" },
              { s: "Medium", c: "border-brand-blue/25 bg-brand-blue/[0.06] text-brand-blue" },
              { s: "Low", c: "border-slate-200 bg-brand-soft text-brand-navy" },
            ].map((item) => (
              <li
                key={item.s}
                className={"rounded-lg border px-3 py-2.5 text-[12px] font-semibold " + item.c}
              >
                {item.s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function RfiContextUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / rfis / RFI-001 / context">
      <AppTopBar />
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">RFI-001</p>
          <p className="text-[13px] font-semibold text-brand-navy">Beam pocket at Grid B / Level 3</p>
          <p className="mt-2 text-[11px] leading-relaxed text-brand-muted">
            Question stays connected to project information, related documents, and activity—not an isolated email
            thread.
          </p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
            <p className="font-semibold text-brand-navy">Project · Riverfront Office Complex</p>
            <p className="text-brand-muted">Phase · Structure · Status · Open</p>
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="ui-label mb-1">Connected information</p>
          {[
            ["Related document", "Spec 05 12 00 · Structural steel"],
            ["Related drawing", "A-301 · Beam pocket detail"],
            ["Attachments", "2 files · 1 markup"],
            ["Activity", "4 events · Response pending"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[11px] font-medium text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function RfiFieldUI() {
  return (
    <div className="mx-auto w-full max-w-[280px]" aria-hidden="true">
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card">
        <div className="bg-brand-navy px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Field · RFI</p>
          <p className="mt-1 text-[14px] font-semibold text-white">RFI-001</p>
        </div>
        <div className="space-y-2 p-4">
          {[
            ["Project", "Riverfront Office"],
            ["Question", "Beam pocket depth at Grid B"],
            ["Priority", "High"],
            ["Status", "Open"],
            ["Response", "Pending"],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between gap-3 rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
              <span className="shrink-0 text-brand-muted">{l}</span>
              <span className="text-right font-semibold text-brand-navy">{v}</span>
            </div>
          ))}
          <div className="rounded-lg border border-brand-orange/25 bg-brand-orange/5 px-3 py-2 text-center text-[11px] font-semibold text-brand-orange">
            Follow up from the field
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubmittalUI() {
  return <SubmittalRegisterUI />;
}

export function SubmittalFlowUI() {
  const steps = ["Create", "Submit", "Review", "Respond", "Track"] as const;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Submittal coordination</p>
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (index === 0
                    ? "bg-brand-orange text-white"
                    : index === steps.length - 1
                      ? "bg-emerald-500 text-white"
                      : "bg-brand-navy text-white")
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 ? (
                <span className="my-1 w-px min-h-[18px] flex-1 bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={index < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-brand-navy">{step}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">
                {index === 0
                  ? "Capture the submittal package"
                  : index === 1
                    ? "Send for review with context"
                    : index === 2
                      ? "Examine documents and details"
                      : index === 3
                        ? "Record the review decision"
                        : "Keep status visible on the project"}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SubmittalRegisterUI() {
  const rows = [
    {
      id: "SUB-001",
      item: "Product Data — Curtain wall system",
      status: "Open",
      priority: "High",
      reviewer: "A. Chen",
      due: "Mar 14",
      project: "Riverfront",
      progress: "Awaiting submit",
      hot: true,
    },
    {
      id: "SUB-002",
      item: "Material Sample — Flooring finish",
      status: "In Review",
      priority: "Medium",
      reviewer: "J. Patel",
      due: "Mar 16",
      project: "Riverfront",
      progress: "Under review",
      hot: false,
    },
    {
      id: "SUB-003",
      item: "Shop Drawing — Curtain wall",
      status: "Approved",
      priority: "Low",
      reviewer: "M. Ortiz",
      due: "Mar 08",
      project: "Riverfront",
      progress: "Complete",
      hot: false,
    },
    {
      id: "SUB-004",
      item: "MEP coordination drawings",
      status: "Revise & Resubmit",
      priority: "High",
      reviewer: "A. Chen",
      due: "Mar 18",
      project: "Riverfront",
      progress: "Comments issued",
      hot: false,
    },
  ];

  return (
    <BrowserFrame url="app.vertexcms.com / submittals / riverfront">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Submittal Register</p>
            <p className="text-[13px] font-semibold text-brand-navy">Riverfront Office Complex</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
            12 in review
          </span>
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          <div className="min-w-[140px] flex-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-brand-muted">
            Search submittals…
          </div>
          {["Status", "Priority", "Reviewer"].map((f) => (
            <span
              key={f}
              className="rounded-lg border border-slate-200 bg-brand-soft/60 px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy"
            >
              {f} ▾
            </span>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="hidden grid-cols-[0.7fr_1.5fr_0.85fr_0.6fr_0.8fr_0.55fr] gap-2 border-b border-slate-100 bg-brand-soft/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-brand-muted sm:grid">
            <span>No.</span>
            <span>Description</span>
            <span>Status</span>
            <span>Priority</span>
            <span>Reviewer</span>
            <span>Due</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.id}
              className={
                "border-b border-slate-100 px-3 py-2.5 last:border-0 " +
                (row.hot ? "bg-brand-orange/[0.04]" : "bg-white")
              }
            >
              <div className="grid gap-1 sm:grid-cols-[0.7fr_1.5fr_0.85fr_0.6fr_0.8fr_0.55fr] sm:items-center sm:gap-2">
                <span className="text-[11px] font-semibold text-brand-navy">{row.id}</span>
                <span className="truncate text-[11px] text-brand-navy">{row.item}</span>
                <span
                  className={
                    "text-[10px] font-semibold " +
                    (row.status === "Open" || row.status === "Revise & Resubmit"
                      ? "text-brand-orange"
                      : row.status === "In Review"
                        ? "text-brand-blue"
                        : "text-emerald-600")
                  }
                >
                  {row.status}
                </span>
                <span className="text-[10px] text-brand-muted">{row.priority}</span>
                <span className="text-[10px] text-brand-muted">{row.reviewer}</span>
                <span className="text-[10px] text-brand-muted">{row.due}</span>
              </div>
              <p className="mt-1 text-[10px] text-brand-muted">
                Project · {row.project} · Progress · {row.progress}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubmittalCreateUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / submittals / new">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="ui-label">Create Submittal</p>
          <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand-navy">
            SUB-005
          </span>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {[
            ["Submittal Number", "SUB-005"],
            ["Title / Description", "Firestopping product data"],
            ["Project", "Riverfront Office Complex"],
            ["Category", "Product Data"],
            ["Reviewer", "A. Chen · Architect"],
            ["Priority", "Medium"],
            ["Due Date", "Mar 20, 2026"],
            ["Notes", "Include UL listing sheets"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
              <p className="mt-0.5 text-[12px] font-medium text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 text-[10px] text-brand-muted">
            Attachments · Spec sheet · Cut sheet · Sample photo
          </div>
          <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Create Submittal
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubmittalDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / submittals / SUB-001" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Submittal Detail</p>
        <p className="mt-1 text-[14px] font-semibold text-white">SUB-001 · Curtain wall product data</p>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-3 border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-brand-blue/20 px-2 py-0.5 text-[10px] font-semibold text-[#7EB6FF]">
              In Review
            </span>
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white">
              Priority · High
            </span>
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
              Due Mar 14
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Description</p>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
              Product data package for curtain wall system — performance data, finish options, and manufacturer
              certifications.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Reviewer</p>
            <p className="mt-1 text-[12px] font-semibold text-white">A. Chen · Architect</p>
            <p className="text-[10px] text-slate-400">Review in progress</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Cut-sheet.pdf", "Performance.pdf", "Finish board"].map((f) => (
              <span key={f} className="rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-400">Activity / history</p>
          <ul className="space-y-2">
            {[
              { t: "Submittal created", d: "Mar 10 · P. Rivera" },
              { t: "Assigned to A. Chen", d: "Mar 10 · System" },
              { t: "Documents attached", d: "Mar 11 · P. Rivera" },
              { t: "Review started", d: "Mar 12 · A. Chen" },
            ].map((a, i) => (
              <li
                key={a.t}
                className={
                  "rounded-lg border px-3 py-2 " +
                  (i === 3 ? "border-brand-orange/35 bg-brand-orange/10" : "border-white/10 bg-white/[0.03]")
                }
              >
                <p className="text-[11px] font-semibold text-white">{a.t}</p>
                <p className="text-[10px] text-slate-400">{a.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubmittalReviewUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / submittals / SUB-001 / review">
      <AppTopBar />
      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">Submittal information</p>
          <p className="text-[13px] font-semibold text-brand-navy">SUB-001 · Curtain wall product data</p>
          <p className="mt-2 text-[11px] leading-relaxed text-brand-muted">
            Reviewer examines submitted documents and records a decision against the project record.
          </p>
          <div className="mt-3 space-y-2">
            {[
              ["Reviewer", "A. Chen · Architect"],
              ["Due date", "Mar 14, 2026"],
              ["Priority", "High"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
                <span className="text-brand-muted">{l}</span>
                <span className="font-semibold text-brand-navy">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Documents</p>
            <div className="flex flex-wrap gap-1.5">
              {["Cut-sheet.pdf", "Performance.pdf"].map((f) => (
                <span key={f} className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] text-brand-navy">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-brand-soft/30 p-4">
          <p className="ui-label mb-2">Review</p>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Review comments</p>
            <p className="mt-1 text-[12px] leading-relaxed text-brand-navy">
              Performance data accepted. Confirm finish selection against interior package before closeout.
            </p>
            <p className="mt-3 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Review status</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700">
                Approved
              </span>
              <span className="rounded-md border border-brand-orange/30 bg-brand-orange/5 px-2.5 py-1.5 text-[10px] font-semibold text-brand-orange">
                Revise & Resubmit
              </span>
            </div>
            <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[10px] font-semibold text-emerald-700">
              Decision · Approved · Status updated on project
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubmittalStatusUI() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Status & priority</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Status</p>
          <ul className="space-y-2">
            {[
              { s: "Open", c: "bg-brand-orange/10 text-brand-orange border-brand-orange/25" },
              { s: "In Review", c: "bg-brand-blue/10 text-brand-blue border-brand-blue/25" },
              { s: "Approved", c: "bg-emerald-50 text-emerald-700 border-emerald-200" },
              { s: "Revise & Resubmit", c: "bg-slate-100 text-brand-navy border-slate-200" },
            ].map((item) => (
              <li key={item.s} className={"rounded-lg border px-3 py-2 text-[12px] font-semibold " + item.c}>
                {item.s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Priority</p>
          <ul className="space-y-2">
            {[
              { s: "High", c: "border-brand-orange/30 bg-brand-orange/[0.06] text-brand-orange" },
              { s: "Medium", c: "border-brand-blue/25 bg-brand-blue/[0.06] text-brand-blue" },
              { s: "Low", c: "border-slate-200 bg-brand-soft text-brand-navy" },
            ].map((item) => (
              <li key={item.s} className={"rounded-lg border px-3 py-2.5 text-[12px] font-semibold " + item.c}>
                {item.s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SubmittalWorkflowUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / submittals / SUB-001 / workflow">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Review workflow</p>
            <p className="text-[13px] font-semibold text-brand-navy">SUB-001 · Curtain wall product data</p>
          </div>
          <span className="rounded-md bg-brand-blue/10 px-2 py-1 text-[10px] font-semibold text-brand-blue">
            In Review
          </span>
        </div>
        <ol className="space-y-2">
          {[
            { n: "Submittal created", d: "Mar 10 · P. Rivera", done: true },
            { n: "Assigned to reviewer", d: "A. Chen · Architect", done: true },
            { n: "Documents reviewed", d: "Cut-sheet · Performance data", done: true, active: true },
            { n: "Comments / decision", d: "Awaiting review action", done: false },
            { n: "Status updated", d: "Visible on project record", done: false },
          ].map((s) => (
            <li
              key={s.n}
              className={
                "flex items-start gap-3 rounded-xl border px-3 py-2.5 " +
                (s.active
                  ? "border-brand-orange/40 bg-brand-orange/[0.05]"
                  : s.done
                    ? "border-slate-200 bg-white"
                    : "border-slate-100 bg-brand-soft/40")
              }
            >
              <span
                className={
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold " +
                  (s.active
                    ? "bg-brand-orange text-white"
                    : s.done
                      ? "bg-brand-navy text-white"
                      : "bg-slate-200 text-brand-muted")
                }
              >
                {s.done && !s.active ? "✓" : "·"}
              </span>
              <div>
                <p
                  className={
                    "text-[12px] font-semibold " + (s.active ? "text-brand-orange" : "text-brand-navy")
                  }
                >
                  {s.n}
                </p>
                <p className="text-[10px] text-brand-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </BrowserFrame>
  );
}

export function SubmittalDocsUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / submittals / SUB-001 / documents">
      <AppTopBar />
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">Submittal details</p>
          <p className="text-[13px] font-semibold text-brand-navy">SUB-001 · Curtain wall product data</p>
          <div className="mt-3 space-y-2">
            {[
              ["Status", "In Review"],
              ["Reviewer", "A. Chen"],
              ["Due", "Mar 14"],
            ].map(([l, v]) => (
              <div key={l} className="flex justify-between rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]">
                <span className="text-brand-muted">{l}</span>
                <span className="font-semibold text-brand-navy">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="ui-label mb-1">Attachments</p>
          {[
            ["Cut-sheet.pdf", "Product data"],
            ["Performance.pdf", "Test results"],
            ["Finish board.jpg", "Sample photo"],
          ].map(([f, t]) => (
            <div key={f} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5">
              <div>
                <p className="text-[11px] font-semibold text-brand-navy">{f}</p>
                <p className="text-[10px] text-brand-muted">{t}</p>
              </div>
              <span className="text-[10px] font-semibold text-brand-blue">View</span>
            </div>
          ))}
          <div className="rounded-lg border border-brand-orange/25 bg-brand-orange/5 px-3 py-2 text-[11px] font-semibold text-brand-orange">
            Review information stays with the package
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubmittalFieldUI() {
  return (
    <div className="mx-auto w-full max-w-[280px]" aria-hidden="true">
      <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card">
        <div className="bg-brand-navy px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Field · Submittal</p>
          <p className="mt-1 text-[14px] font-semibold text-white">SUB-001</p>
        </div>
        <div className="space-y-2 p-4">
          {[
            ["Project", "Riverfront Office"],
            ["Submittal", "Curtain wall product data"],
            ["Status", "In Review"],
            ["Reviewer", "A. Chen"],
            ["Due Date", "Mar 14"],
            ["Documents", "3 attached"],
            ["Review", "In progress"],
          ].map(([l, v]) => (
            <div
              key={l}
              className="flex justify-between gap-3 rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2 text-[11px]"
            >
              <span className="shrink-0 text-brand-muted">{l}</span>
              <span className="text-right font-semibold text-brand-navy">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ChangeOrderUI() {
  return <ChangeOrderDetailUI />;
}

export function ChangeOrderFlowUI() {
  const steps = [
    { n: "Change Order Request", d: "Capture the proposed project change" },
    { n: "Pending Approval", d: "Review against contract context" },
    { n: "Approved", d: "Convert approved request into a change order" },
    { n: "Contract Revision Impact", d: "Reflect impact in financial workflows" },
  ] as const;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Change workflow</p>
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.n} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={
                  "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                  (index === 0
                    ? "bg-brand-orange text-white"
                    : index === steps.length - 1
                      ? "bg-emerald-500 text-white"
                      : "bg-brand-navy text-white")
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < steps.length - 1 ? (
                <span className="my-1 w-px min-h-[18px] flex-1 bg-slate-200" aria-hidden="true" />
              ) : null}
            </div>
            <div className={index < steps.length - 1 ? "pb-4" : ""}>
              <p className="text-[13px] font-semibold text-brand-navy">{step.n}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{step.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ChangeOrderRegisterUI() {
  const rows = [
    {
      id: "COR-022",
      type: "Request",
      desc: "Site drainage adjustment",
      status: "Pending approval",
      project: "Riverfront",
      date: "Mar 12",
      impact: "$41,000",
      hot: true,
    },
    {
      id: "CO-018",
      type: "Change Order",
      desc: "MEP redesign package",
      status: "Pending approval",
      project: "Riverfront",
      date: "Mar 10",
      impact: "$84,000",
      hot: false,
    },
    {
      id: "CO-014",
      type: "Change Order",
      desc: "Structural steel reinforcement",
      status: "Approved",
      project: "Riverfront",
      date: "Mar 02",
      impact: "$128,000",
      hot: false,
    },
    {
      id: "CO-017",
      type: "Change Order",
      desc: "Additional beam reinforcement",
      status: "Contract impact",
      project: "Riverfront",
      date: "Feb 28",
      impact: "$86,400",
      hot: false,
    },
  ];

  return (
    <BrowserFrame url="app.vertexcms.com / change-orders / riverfront" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Change Order Register
            </p>
            <p className="mt-0.5 text-[13px] font-semibold text-white">Riverfront Office Complex</p>
          </div>
          <span className="rounded-md bg-brand-orange/20 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
            2 pending approval
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="hidden grid-cols-[0.75fr_0.7fr_1.4fr_0.95fr_0.7fr_0.7fr] gap-2 border-b border-white/10 bg-white/5 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-slate-400 sm:grid">
            <span>No.</span>
            <span>Type</span>
            <span>Description</span>
            <span>Status</span>
            <span>Date</span>
            <span>Impact</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.id}
              className={
                "border-b border-white/10 px-3 py-2.5 last:border-0 " +
                (row.hot ? "bg-brand-orange/10" : "bg-transparent")
              }
            >
              <div className="grid gap-1 sm:grid-cols-[0.75fr_0.7fr_1.4fr_0.95fr_0.7fr_0.7fr] sm:items-center sm:gap-2">
                <span className="text-[11px] font-semibold text-white">{row.id}</span>
                <span className="text-[10px] text-slate-400">{row.type}</span>
                <span className="truncate text-[11px] text-slate-200">{row.desc}</span>
                <span
                  className={
                    "text-[10px] font-semibold " +
                    (row.status.includes("Pending")
                      ? "text-brand-orange"
                      : row.status === "Approved"
                        ? "text-emerald-400"
                        : "text-[#7EB6FF]")
                  }
                >
                  {row.status}
                </span>
                <span className="text-[10px] text-slate-400">{row.date}</span>
                <span className="text-[10px] font-semibold text-white">{row.impact}</span>
              </div>
              <p className="mt-1 text-[10px] text-slate-500">Project · {row.project} · Contract-linked</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ChangeOrderCreateUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / change-orders / new" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Create Change Order Request
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">COR-023</p>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {[
            ["Request Number", "COR-023"],
            ["Title / Description", "Beam pocket reinforcement"],
            ["Project", "Riverfront Office Complex"],
            ["Contract", "C-2041 Rev B"],
            ["Cost Impact", "$86,400"],
            ["Status", "Change Order Request"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
              <p className="mt-0.5 text-[12px] font-medium text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Change information</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
            Owner-directed structural reinforcement at Grid B. Tied to contract C-2041 for revision impact tracking.
          </p>
        </div>
        <div className="mt-3 flex justify-end">
          <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Create Request
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ChangeOrderDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / change-orders / CO-017" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Change Order Detail</p>
        <p className="mt-1 text-[14px] font-semibold text-white">CO-017 · Additional beam reinforcement</p>
      </div>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="space-y-3 border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-brand-orange/20 px-2 py-0.5 text-[10px] font-semibold text-brand-orange">
              Pending approval
            </span>
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
              From COR-017
            </span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Description</p>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-200">
              Owner change request tied to structural revision package. Change order linked to contract C-2041.
            </p>
          </div>
          <div className="space-y-2">
            {[
              ["Project", "Riverfront Office Complex"],
              ["Contract ref", "C-2041 Rev B"],
              ["Approval status", "Pending owner"],
            ].map(([l, v]) => (
              <div
                key={l}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <span className="text-[11px] text-slate-400">{l}</span>
                <span className="text-[11px] font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Cost impact</p>
          <p className="mt-2 text-3xl font-bold text-white">+$86,400</p>
          <p className="mt-1 text-[11px] text-slate-400">Labor · materials · markup</p>
          <div className="mt-4 space-y-2">
            {[
              { l: "Labor", v: "$32,100" },
              { l: "Materials", v: "$41,200" },
              { l: "Markup", v: "$13,100" },
            ].map((r) => (
              <div key={r.l} className="flex justify-between text-[11px]">
                <span className="text-slate-400">{r.l}</span>
                <span className="font-semibold text-white">{r.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-brand-orange/40 bg-brand-orange/10 px-3 py-2.5">
            <p className="text-[11px] font-semibold text-brand-orange">
              Awaiting approval · Contract revision impact tracked
            </p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ChangeOrderStatusUI() {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-[#0A2744] p-5 shadow-card sm:p-6"
      aria-hidden="true"
    >
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        Status & visibility
      </p>
      <ul className="space-y-2">
        {[
          {
            s: "Change Order Request",
            d: "Proposed change captured on the project",
            c: "border-white/15 bg-white/5 text-white",
          },
          {
            s: "Pending Approval",
            d: "Awaiting review against contract context",
            c: "border-brand-orange/35 bg-brand-orange/10 text-brand-orange",
          },
          {
            s: "Approved",
            d: "Ready to convert into a change order",
            c: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
          },
          {
            s: "Change Order",
            d: "Issued change with contract revision impact",
            c: "border-[#7EB6FF]/30 bg-[#7EB6FF]/10 text-[#7EB6FF]",
          },
        ].map((item) => (
          <li key={item.s} className={"rounded-lg border px-3 py-2.5 " + item.c}>
            <p className="text-[12px] font-semibold">{item.s}</p>
            <p className="mt-0.5 text-[10px] opacity-80">{item.d}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChangeOrderContextUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / change-orders / CO-017 / context" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Connected project information
        </p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">CO-017 · Beam reinforcement</p>
      </div>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-slate-400">Change Order</p>
          <p className="text-[12px] leading-relaxed text-slate-200">
            Change stays tied to the project and contract—so cost impact and revision context remain visible with the
            decision record.
          </p>
          <div className="mt-3 space-y-2">
            {[
              ["Project", "Riverfront Office Complex"],
              ["Type", "Change Order"],
              ["Status", "Pending approval"],
            ].map(([l, v]) => (
              <div
                key={l}
                className="flex justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[11px]"
              >
                <span className="text-slate-400">{l}</span>
                <span className="font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
            Contract & financial context
          </p>
          {[
            ["Contract", "C-2041 Rev B"],
            ["Cost impact", "+$86,400"],
            ["Revision impact", "Tracked on contract"],
            ["Source request", "COR-017"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">{l}</p>
              <p className="mt-0.5 text-[11px] font-medium text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PreconWorkspaceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / precon / riverside-office">
      <AppTopBar project="Riverside Office Complex" />
      <div className="bg-brand-soft/30 p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Preconstruction workspace</p>
            <p className="text-[15px] font-semibold text-brand-navy">Riverside Office Complex</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
            Bid preparing
          </span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Kpi label="Estimated cost" value="$18.4M" />
          <Kpi label="Bid value" value="$19.1M" tone="blue" />
          <Kpi label="Margin" value="11.2%" tone="green" />
          <Kpi label="Estimate status" value="Rev 03" />
          <Kpi label="Bid deadline" value="Mar 28" tone="orange" />
          <Kpi label="Bid status" value="Open" tone="blue" />
        </div>
        <div className="flex flex-wrap gap-2">
          {["Opportunity", "Estimate", "Takeoff", "Bid package"].map((t, i) => (
            <span
              key={t}
              className={
                "rounded-lg px-2.5 py-1.5 text-[10px] font-semibold " +
                (i === 1 ? "bg-brand-orange/10 text-brand-orange" : "bg-white text-brand-muted shadow-sm")
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function EstimatingUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / estimating / EST-2041">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Estimate · EST-2041</p>
            <p className="text-[14px] font-semibold text-brand-navy">Riverside Office · Version 03</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["→ Budget", "→ SOV"].map((t) => (
              <span key={t} className="rounded-md border border-brand-orange/30 bg-brand-orange/5 px-2 py-1 text-[10px] font-semibold text-brand-orange">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-[1.1fr_0.7fr_0.55fr_0.65fr_0.55fr_0.55fr] gap-1 border-b border-slate-100 bg-brand-soft/70 px-2.5 py-2 text-[8px] font-semibold uppercase tracking-wide text-brand-muted sm:text-[9px]">
            <span>Line / cost code</span>
            <span>Qty</span>
            <span>Unit</span>
            <span>Labor</span>
            <span>Markup</span>
            <span>Ext.</span>
          </div>
          {[
            ["03-300 · Cast-in-place", "2,400 CY", "$186", "12h · $68", "8%", "$482K"],
            ["05-120 · Structural steel", "186 TN", "$2,140", "6h · $82", "7%", "$428K"],
            ["09-650 · Flooring", "48,000 SF", "$4.20", "0.2h · $55", "10%", "$246K"],
          ].map((row, i) => (
            <div
              key={row[0]}
              className={
                "grid grid-cols-[1.1fr_0.7fr_0.55fr_0.65fr_0.55fr_0.55fr] gap-1 border-b border-slate-100 px-2.5 py-2 text-[10px] last:border-0 " +
                (i === 0 ? "bg-brand-orange/[0.03]" : "bg-white")
              }
            >
              <span className="truncate font-medium text-brand-navy">{row[0]}</span>
              <span className="text-brand-muted">{row[1]}</span>
              <span className="text-brand-muted">{row[2]}</span>
              <span className="text-brand-muted">{row[3]}</span>
              <span className="text-brand-muted">{row[4]}</span>
              <span className="font-semibold text-brand-navy">{row[5]}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Subtotal", "$2.18M"],
            ["Overhead", "$164K"],
            ["Profit", "$196K"],
            ["Contingency", "$87K"],
            ["Tax", "$52K"],
            ["Total", "$2.48M"],
          ].map(([l, v], i) => (
            <div
              key={l}
              className={
                "rounded-lg border px-2.5 py-2 " +
                (i === 5 ? "border-brand-orange/35 bg-brand-orange/5" : "border-slate-200 bg-white")
              }
            >
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={"text-[12px] font-bold " + (i === 5 ? "text-brand-orange" : "text-brand-navy")}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function BidManagementUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / bid-management / PKG-Concrete">
      <AppTopBar project="Riverside Office Complex" />
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Bid package · Concrete</p>
            <p className="text-[13px] font-semibold text-brand-navy">Trade 03 · Due Mar 22</p>
          </div>
          <span className="rounded-md bg-brand-blue/10 px-2 py-1 text-[10px] font-semibold text-brand-blue">
            3 of 5 submitted
          </span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Kpi label="Invited" value="5" />
          <Kpi label="Submitted" value="3" tone="blue" />
          <Kpi label="Lowest bid" value="$468.5K" tone="green" />
          <Kpi label="Award status" value="Pending" tone="orange" />
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr] gap-2 border-b border-slate-100 bg-brand-soft/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">
            <span>Subcontractor</span>
            <span>Status</span>
            <span>Amount</span>
            <span>Leveling</span>
          </div>
          {[
            { n: "Vendor A", s: "Submitted", a: "$482,000", l: "+2.9%", hot: false },
            { n: "Vendor B", s: "Submitted", a: "$468,500", l: "Baseline", hot: true },
            { n: "Vendor C", s: "Submitted", a: "$491,200", l: "+4.8%", hot: false },
            { n: "Vendor D", s: "Invited", a: "—", l: "—", hot: false },
          ].map((row) => (
            <div
              key={row.n}
              className={
                "grid grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr] gap-2 border-b border-slate-100 px-3 py-2.5 text-[11px] last:border-0 " +
                (row.hot ? "bg-brand-orange/[0.04]" : "bg-white")
              }
            >
              <span className="font-semibold text-brand-navy">{row.n}</span>
              <span className="text-brand-muted">{row.s}</span>
              <span className={row.hot ? "font-bold text-brand-orange" : "text-brand-navy"}>{row.a}</span>
              <span className="text-brand-muted">{row.l}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TakeoffUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / takeoff / A-101">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">Plan view · A-101</p>
          <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-dashed border-brand-blue/25 bg-[linear-gradient(135deg,#e8eef8,#f5f8fc)] sm:h-52">
            <div className="absolute left-[18%] top-[28%] h-px w-[42%] rotate-[-8deg] bg-brand-orange" />
            <div className="absolute left-[22%] top-[48%] h-px w-[38%] rotate-[12deg] bg-brand-blue" />
            <div className="absolute left-[40%] top-[36%] h-2.5 w-2.5 rounded-full border-2 border-brand-orange bg-white" />
            <div className="absolute left-[55%] top-[58%] h-2.5 w-2.5 rounded-full border-2 border-brand-blue bg-white" />
            <p className="relative text-[11px] font-semibold text-brand-blue">Digital takeoff canvas</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Measure", "Area", "Count", "Linear"].map((t) => (
              <span key={t} className="rounded-md bg-brand-soft px-2 py-1 text-[10px] font-medium text-brand-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-brand-soft/40 p-4">
          <p className="ui-label mb-2">Measurement totals</p>
          <div className="space-y-2">
            {[
              ["Slab on grade", "24,800 SF"],
              ["Exterior wall", "1,860 LF"],
              ["Column count", "42 EA"],
            ].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
                <span className="text-[11px] text-brand-muted">{l}</span>
                <span className="text-[12px] font-semibold text-brand-navy">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-brand-line bg-white px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Estimate context</p>
            <p className="mt-1 text-[12px] font-semibold text-brand-navy">Linked to EST-2041 · Rev 03</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CrmPipelineUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / crm / pipeline">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="ui-label">Opportunity pipeline</p>
          <span className="rounded-md bg-brand-soft px-2 py-1 text-[10px] font-semibold text-brand-navy">
            Q1 pursuits
          </span>
        </div>
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          {[
            "New Opportunity",
            "Qualification",
            "Go / No-Go",
            "Estimating",
            "Bidding",
            "Awarded",
            "Lost",
          ].map((stage, i) => (
            <div
              key={stage}
              className={
                "min-w-[7.5rem] shrink-0 rounded-xl border px-2.5 py-2 " +
                (i === 3
                  ? "border-brand-orange/40 bg-brand-orange/5"
                  : "border-slate-200 bg-white")
              }
            >
              <p className={"text-[10px] font-semibold " + (i === 3 ? "text-brand-orange" : "text-brand-navy")}>
                {stage}
              </p>
              <p className="mt-1 text-[9px] text-brand-muted">{i === 3 ? "2 active" : i === 5 ? "1 won" : "—"}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/[0.03] p-3">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[13px] font-semibold text-brand-navy">Riverside Office Complex</p>
              <p className="mt-1 text-[11px] text-brand-muted">Client · Harbor Development · Commercial</p>
            </div>
            <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-[9px] font-semibold text-brand-orange">
              Estimating
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Kpi label="Opportunity value" value="$19.1M" />
            <Kpi label="Expected close" value="Apr 12" />
            <Kpi label="Project type" value="Commercial" tone="blue" />
            <Kpi label="Win / loss" value="Open" tone="orange" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectCreateUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / projects / new">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">Create project</p>
        <p className="mb-4 text-[14px] font-semibold text-brand-navy">New project setup</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ["Project type", "Commercial"],
            ["Location", "Austin, TX"],
            ["Start date", "Apr 01, 2026"],
            ["End date", "Nov 30, 2027"],
            ["Project team", "8 members"],
            ["Retainage", "10%"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-brand-soft/50 px-3 py-2.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{l}</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Financial information</p>
          <p className="mt-1 text-[12px] text-brand-navy">Original contract · retainage · billing setup on the project record</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectFinancialSummaryUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverfront / financials">
      <AppTopBar />
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-3">Project financial summary</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Original contract", "$4.50M"],
            ["Revised contract", "$4.82M"],
            ["Billed to date", "$3.21M"],
            ["Paid to date", "$2.84M"],
            ["Retainage held", "$321K"],
          ].map(([l, v], i) => (
            <div
              key={l}
              className={
                "rounded-xl border px-3 py-3 " +
                (i === 1 ? "border-brand-orange/35 bg-brand-orange/[0.04]" : "border-slate-200 bg-white")
              }
            >
              <p className="text-[10px] text-brand-muted">{l}</p>
              <p className={"mt-1 text-lg font-bold " + (i === 1 ? "text-brand-orange" : "text-brand-navy")}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectPhasesTeamUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverfront / phases">
      <AppTopBar />
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-3">WBS phases</p>
          <ul className="space-y-2">
            {[
              { n: "01 · Preconstruction", s: "Complete", c: "bg-emerald-50 text-emerald-700" },
              { n: "02 · Structure", s: "Active", c: "bg-brand-orange/10 text-brand-orange" },
              { n: "03 · MEP", s: "Upcoming", c: "bg-brand-soft text-brand-muted" },
              { n: "04 · Closeout", s: "Upcoming", c: "bg-brand-soft text-brand-muted" },
            ].map((p) => (
              <li key={p.n} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                <span className="text-[12px] font-semibold text-brand-navy">{p.n}</span>
                <span className={"rounded-full px-2 py-0.5 text-[9px] font-semibold " + p.c}>{p.s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brand-soft/40 p-4">
          <p className="ui-label mb-3">Team assignment</p>
          <ul className="space-y-2">
            {[
              ["JM", "Jordan Miles", "Project Manager"],
              ["AC", "Aisha Chen", "Superintendent"],
              ["RK", "Rita Kole", "Estimator"],
              ["DL", "Devon Lee", "Controller"],
            ].map(([ini, name, role]) => (
              <li key={name} className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-[9px] font-bold text-white">
                  {ini}
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-semibold text-brand-navy">{name}</span>
                  <span className="block text-[10px] text-brand-muted">{role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ProjectSwitcherUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / projects">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-2">Project switcher</p>
        <div className="mb-3 rounded-xl border border-brand-orange/35 bg-brand-orange/[0.04] px-3 py-2.5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[12px] font-semibold text-brand-navy">Riverfront Office Complex</p>
              <p className="text-[10px] text-brand-muted">Active · Austin, TX</p>
            </div>
            <span className="text-[10px] font-semibold text-brand-orange">Current ▾</span>
          </div>
        </div>
        <ul className="space-y-2">
          {[
            { n: "Harbor Transit Hub", s: "Active" },
            { n: "Westside Residences", s: "Bidding" },
            { n: "North Clinic Expansion", s: "On hold" },
          ].map((p) => (
            <li
              key={p.n}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 transition hover:border-brand-navy/20"
            >
              <span className="text-[12px] font-medium text-brand-navy">{p.n}</span>
              <span className="text-[10px] font-semibold text-brand-muted">{p.s}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

