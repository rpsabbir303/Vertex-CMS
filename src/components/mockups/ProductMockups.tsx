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

/** Drawings workspace — sets, sheets, current revision, markup. Register DWG. */
export function DrawingWorkspaceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / riverside-medical">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Drawings</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
              IFC Set · Architectural
            </span>
            <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
              Current
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <div className="min-w-[140px] flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-brand-muted">
            Search drawings, titles, numbers…
          </div>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy">
            Discipline · All
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-[170px_1fr_160px]">
        <aside className="border-b border-slate-100 p-3 lg:border-b-0 lg:border-r">
          <p className="ui-label mb-2">Sheet list</p>
          <ul className="space-y-1 text-[10px]">
            {[
              { no: "A-101", t: "Level 03 Floor Plan", r: "Rev 06", hot: true },
              { no: "A-201", t: "Elevations", r: "Rev 04", hot: false },
              { no: "S-101", t: "Foundation Plan", r: "Rev 05", hot: false },
              { no: "M-301", t: "HVAC Plan", r: "Rev 03", hot: false },
            ].map((d) => (
              <li
                key={d.no}
                className={
                  "rounded-lg px-2 py-2 " +
                  (d.hot ? "bg-brand-orange/10 font-semibold text-brand-navy" : "text-brand-muted")
                }
              >
                <span className="block">{d.no} · {d.t}</span>
                <span className="text-[9px]">{d.r}</span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="border-b border-slate-100 p-3 lg:border-b-0 lg:border-r">
          <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl border border-dashed border-brand-blue/25 bg-[linear-gradient(135deg,#e8eef8,#f5f8fc)] sm:h-48">
            <div className="absolute inset-6 border border-brand-navy/10" />
            <div className="absolute left-[22%] top-[32%] h-14 w-24 border border-brand-navy/25" />
            <div className="absolute left-[48%] top-[40%] h-10 w-16 border border-brand-orange/50" />
            <p className="relative text-[11px] font-semibold text-brand-blue">Viewer · A-101</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Zoom", "Pan", "Markup", "Navigate"].map((t) => (
              <span key={t} className="rounded-md bg-brand-soft px-2 py-1 text-[9px] font-medium text-brand-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
        <aside className="bg-brand-soft/40 p-3">
          <p className="ui-label mb-2">Sheet detail</p>
          <ul className="space-y-1.5 text-[10px]">
            {[
              ["Number", "A-101"],
              ["Title", "Level 03 Floor Plan"],
              ["Current rev", "06"],
              ["Previous", "05"],
              ["Rev date", "Sep 08, 2026"],
              ["Status", "Current"],
            ].map(([l, v]) => (
              <li key={l} className="flex justify-between rounded-md border border-slate-200 bg-white px-2 py-1.5">
                <span className="text-brand-muted">{l}</span>
                <span className={"font-semibold " + (l === "Status" ? "text-brand-orange" : "text-brand-navy")}>
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </BrowserFrame>
  );
}

export function DrawingRevisionUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / drawings / A-101 / revisions" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Revision control</p>
        <p className="mt-1 text-[14px] font-semibold">A-101 · Level 03 Floor Plan</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">Previous revision</p>
            <p className="mt-2 text-[22px] font-bold text-slate-300">REVISION 05</p>
            <p className="mt-1 text-[11px] text-slate-500">Issued Aug 22, 2026 · Available for reference</p>
          </div>
          <div className="rounded-xl border border-brand-orange/40 bg-brand-orange/10 p-4">
            <p className="text-[10px] uppercase tracking-wide text-brand-orange">Current revision</p>
            <p className="mt-2 text-[22px] font-bold text-white">REVISION 06</p>
            <p className="mt-1 text-[11px] text-slate-300">Issued Sep 08, 2026 · Status · Current</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {["Rev 03", "Rev 04", "Rev 05", "Rev 06"].map((r, i, arr) => (
            <div key={r} className="flex items-center gap-2">
              <span
                className={
                  "rounded-md border px-2.5 py-1.5 text-[10px] font-semibold " +
                  (i === arr.length - 1
                    ? "border-brand-orange/45 bg-brand-orange/15 text-brand-orange"
                    : "border-white/10 bg-white/[0.04] text-slate-400")
                }
              >
                {r}
                {i === arr.length - 1 ? " · Current" : ""}
              </span>
              {i < arr.length - 1 ? (
                <span className="text-[11px] text-slate-500" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-slate-400">
          Latest becomes current. Previous revisions remain available for reference.
        </p>
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

/** Daily Field Logs — weather, manpower, attachments. Register LOG. */
export function DailyLogDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / daily-logs / riverside-medical / 2026-09-09">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Daily Log</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
              Sep 9, 2026
            </span>
            <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
              Submitted
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Weather", "82°F · Partly Cloudy"],
            ["Workforce", "42 Workers"],
            ["Photos", "8 Photos"],
            ["Site Conditions", "Clear and dry"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 p-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[12px] font-bold ${i === 0 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-2">
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Work Completed</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-brand-navy">
                Structural framing completed on Level 03.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Notes</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-brand-navy">
                Material delivery completed at 10:30 AM.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                Site Conditions
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-brand-navy">
                Clear and dry. Access routes open on East Wing.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl border border-slate-200 bg-brand-soft/40 p-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                Workforce
              </p>
              <ul className="space-y-1.5 text-[11px]">
                {[
                  ["Structural crew", "18"],
                  ["Carpenters", "12"],
                  ["Supervision", "4"],
                  ["Visitors", "8"],
                ].map(([r, n]) => (
                  <li key={r} className="flex justify-between border-b border-slate-200/80 pb-1.5 last:border-0">
                    <span className="text-brand-muted">{r}</span>
                    <span className="font-semibold text-brand-navy">{n}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                Photos
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300"
                  />
                ))}
              </div>
              <p className="mt-2 text-[10px] text-brand-muted">8 photos · Linked to project log</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DailyLogCaptureUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / daily-logs / new">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Start daily log</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-muted">
            Draft
          </span>
        </div>
        <ol className="space-y-2">
          {[
            { n: "01", t: "Start the daily record", d: "Record the date, project conditions, and key information.", hot: true },
            { n: "02", t: "Document activity", d: "Capture completed work, workforce updates, and notes.", hot: false },
            { n: "03", t: "Add supporting evidence", d: "Attach photos and useful field context.", hot: false },
            { n: "04", t: "Keep the record current", d: "Maintain a clear daily history for the project.", hot: false },
          ].map((s) => (
            <li
              key={s.n}
              className={
                "flex gap-3 rounded-xl border px-3 py-3 " +
                (s.hot ? "border-brand-orange/35 bg-brand-orange/[0.06]" : "border-slate-200 bg-white")
              }
            >
              <span
                className={
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold " +
                  (s.hot ? "bg-brand-orange text-white" : "bg-brand-navy text-white")
                }
              >
                {s.n}
              </span>
              <div>
                <p className="text-[12px] font-semibold text-brand-navy">{s.t}</p>
                <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </BrowserFrame>
  );
}

export function DailyLogDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / daily-logs / riverside-medical / 2026-09-09" dark>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Daily Log</p>
            <p className="mt-0.5 text-[14px] font-semibold">Riverside Medical Center</p>
            <p className="mt-0.5 text-[11px] text-slate-400">September 9, 2026</p>
          </div>
          <span className="rounded-md border border-brand-orange/40 bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase text-brand-orange">
            Submitted
          </span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Weather", "82°F"],
            ["Condition", "Partly Cloudy"],
            ["Workforce", "42"],
            ["Photos", "8"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[13px] font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            ["Work Completed", "Structural framing completed on Level 03."],
            ["Site Conditions", "Clear and dry."],
            ["Notes", "Material delivery completed at 10:30 AM."],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] uppercase tracking-wide text-slate-400">{l}</p>
              <p className="mt-1 text-[12px] text-slate-200">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DailyLogHistoryUI() {
  const days = [
    { d: "September 9", t: "Work Completed", detail: "Structural framing · Level 03", hot: true },
    { d: "September 8", t: "Structural Work", detail: "Steel delivery · North wing", hot: false },
    { d: "September 7", t: "Site Preparation", detail: "Access routes · Staging area", hot: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / daily-logs / riverside-medical" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Daily log history</p>
        <p className="mt-0.5 text-[14px] font-semibold">Riverside Medical Center</p>
        <ol className="mt-4 space-y-2">
          {days.map((row) => (
            <li
              key={row.d}
              className={
                "rounded-xl border px-3 py-3 " +
                (row.hot ? "border-brand-orange/40 bg-brand-orange/[0.08]" : "border-white/10 bg-white/[0.04]")
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[12px] font-semibold">{row.d}</p>
                <span className={"text-[10px] font-bold uppercase " + (row.hot ? "text-brand-orange" : "text-slate-400")}>
                  {row.t}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-300">{row.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-[10px] text-slate-500">Illustrative sample history — not company results</p>
      </div>
    </BrowserFrame>
  );
}

export function DailyLogWorkforceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / daily-logs / riverside-medical / workforce">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Workforce · Sep 9</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">42 workers on site</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Daily log
          </span>
        </div>
        <ul className="space-y-2">
          {[
            ["Structural crew", "18", "Level 03"],
            ["Carpenters", "12", "East Wing"],
            ["Supervision", "4", "Site-wide"],
            ["Visitors", "8", "Delivery & inspection"],
          ].map(([role, n, loc]) => (
            <li
              key={role}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5"
            >
              <div>
                <p className="text-[12px] font-semibold text-brand-navy">{role}</p>
                <p className="text-[10px] text-brand-muted">{loc}</p>
              </div>
              <span className="text-[14px] font-bold text-brand-orange">{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function DailyLogPhotosUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / daily-logs / riverside-medical / photos">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Log photos</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">September 9, 2026</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase text-brand-orange">
            8 attached
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-gradient-to-br from-slate-200 to-slate-300"
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-brand-muted">
          Visual evidence connected to the daily log and project record
        </p>
      </div>
    </BrowserFrame>
  );
}

/** Punch Lists — lists, items, status tracking. Register PUNCH. */
export function PunchDashboardUI() {
  const rows = [
    {
      id: "P-104",
      d: "Door hardware adjustment",
      loc: "Level 02 — East Wing",
      a: "Site Team",
      p: "High",
      due: "Sep 12",
      s: "Open",
    },
    {
      id: "P-105",
      d: "Wall finish touch-up",
      loc: "Level 01 — Lobby",
      a: "Finishing Team",
      p: "Med",
      due: "Sep 15",
      s: "In Progress",
    },
    {
      id: "P-106",
      d: "Ceiling tile replacement",
      loc: "Level 03 — Corridor",
      a: "Ceiling Sub",
      p: "Low",
      due: "Sep 10",
      s: "Completed",
    },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / punch / riverside-medical">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Punch List</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Closeout · Pre-final
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <div className="min-w-[140px] flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-brand-muted">
            Search items, locations, assignees…
          </div>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy">
            Status · All
          </span>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy">
            Priority · All
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            ["Open", "12", "text-brand-orange"],
            ["In Progress", "7", "text-brand-navy"],
            ["Completed", "28", "text-emerald-700"],
          ].map(([l, v, c]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 p-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[16px] font-bold ${c}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[640px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Item", "Description", "Location", "Assigned", "Priority", "Due", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.id}
                  className={"border-b border-slate-100 last:border-0 " + (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")}
                >
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.id}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-navy">{r.d}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.loc}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.a}</td>
                  <td className="px-2.5 py-2.5 text-brand-muted">{r.p}</td>
                  <td className="px-2.5 py-2.5 text-brand-muted">{r.due}</td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (r.s === "Open"
                        ? "text-brand-orange"
                        : r.s === "Completed"
                          ? "text-emerald-700"
                          : "text-brand-navy")
                    }
                  >
                    {r.s}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
          <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
          <div>
            <p className="text-[11px] font-semibold text-brand-navy">Photo attached · P-104</p>
            <p className="text-[10px] text-brand-muted">Door hardware · East Wing corridor</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PunchStatusUI() {
  const items = [
    {
      id: "P-104",
      d: "Door hardware adjustment",
      loc: "Level 02 — East Wing",
      a: "Site Team",
      s: "Open",
      hot: true,
    },
    {
      id: "P-105",
      d: "Wall finish touch-up",
      loc: "Level 01 — Lobby",
      a: "Finishing Team",
      s: "In Progress",
      hot: false,
    },
    {
      id: "P-106",
      d: "Ceiling tile replacement",
      loc: "Level 03 — Corridor",
      a: "Ceiling Sub",
      s: "Completed",
      hot: false,
    },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / punch / riverside-medical / status" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Punch tracking</p>
        <p className="mt-1 text-[14px] font-semibold">Riverside Medical Center</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["Open", "12", "text-brand-orange"],
            ["In Progress", "7", "text-white"],
            ["Completed", "28", "text-emerald-400"],
          ].map(([l, v, c]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] uppercase tracking-wide text-slate-400">{l}</p>
              <p className={`mt-1 text-[22px] font-bold ${c}`}>{v}</p>
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={
                "rounded-xl border px-3 py-3 " +
                (item.hot ? "border-brand-orange/40 bg-brand-orange/10" : "border-white/10 bg-white/[0.04]")
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[12px] font-semibold text-white">
                  {item.id} · {item.d}
                </p>
                <span
                  className={
                    "text-[10px] font-bold uppercase " +
                    (item.s === "Open"
                      ? "text-brand-orange"
                      : item.s === "Completed"
                        ? "text-emerald-400"
                        : "text-slate-300")
                  }
                >
                  {item.s}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-slate-400">
                {item.loc}
                {item.a ? ` · Assigned: ${item.a}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function PunchAssignUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / punch / P-104">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Punch item</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">P-104 · Door hardware adjustment</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase text-brand-orange">
            Open
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ["Location", "Level 02 — East Wing"],
            ["Priority", "High"],
            ["Due date", "Sep 12, 2026"],
            ["Status", "Open"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-3 py-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Assigned to</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Site Team", "Hardware trade", "Superintendent"].map((a, i) => (
              <span
                key={a}
                className={
                  "rounded-md border px-2.5 py-1.5 text-[11px] font-semibold " +
                  (i === 0
                    ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
                    : "border-brand-line bg-brand-soft text-brand-navy")
                }
              >
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Notes</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-brand-navy">
            Latch alignment needs adjustment before final inspection walk.
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PunchCloseoutUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / punch / riverside-medical / closeout" dark>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Closeout view</p>
            <p className="mt-0.5 text-[14px] font-semibold">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
            Pre-final
          </span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            ["Open Items", "12"],
            ["Assigned Work", "19"],
            ["Completion", "70%"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[18px] font-bold ${i === 0 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[70%] rounded-full bg-brand-orange" />
        </div>
        <ul className="space-y-2">
          {[
            { t: "High priority open", d: "3 items due this week", hot: true },
            { t: "Trade assignments", d: "Hardware · Finishing · Ceiling", hot: false },
            { t: "Ready for review", d: "5 items marked complete", hot: false },
          ].map((row) => (
            <li
              key={row.t}
              className={
                "rounded-xl border px-3 py-2.5 " +
                (row.hot ? "border-brand-orange/40 bg-brand-orange/[0.08]" : "border-white/10 bg-white/[0.04]")
              }
            >
              <p className="text-[12px] font-semibold">{row.t}</p>
              <p className="mt-0.5 text-[10px] text-slate-400">{row.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

/** T&M / Field Tickets — tickets + line items (labor, material, related work). Register TM. */
export function TmTicketUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">T&M Ticket</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">TM-218 · Riverside Medical Center</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
              Sep 09, 2026
            </span>
            <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
              Submitted
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Crew", "Field crew A"],
            ["Labor", "24 hrs"],
            ["Materials", "12 CY"],
            ["Est. Total", "$4,280"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 p-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[12px] font-bold ${i === 3 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mb-3 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Work description</p>
          <p className="mt-1 text-[13px] font-semibold text-brand-navy">Additional concrete preparation</p>
          <p className="mt-1 text-[11px] text-brand-muted">
            Additional preparation required before scheduled installation.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            ["Labor", "3 Workers · 24 Hours"],
            ["Materials", "Concrete · 12 CY"],
            ["Equipment", "Concrete Saw · 6 Hours"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className="mt-1 text-[12px] font-bold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-brand-muted">Illustrative sample ticket — not company results</p>
      </div>
    </BrowserFrame>
  );
}

export function TmTicketDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218 / detail" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">T&M ticket detail</p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">TM-218 · Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-orange/40 bg-brand-orange/15 px-2.5 py-1 text-[10px] font-bold uppercase text-brand-orange">
            Submitted
          </span>
        </div>
      </div>
      <div className="grid gap-3 p-4 text-white sm:p-5 lg:grid-cols-2">
        <div className="space-y-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[9px] uppercase tracking-wide text-slate-400">Project · Date · Location</p>
            <p className="mt-1 text-[12px] font-semibold">Riverside Medical Center · Sep 09, 2026 · Level 03</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[9px] uppercase tracking-wide text-slate-400">Description</p>
            <p className="mt-1 text-[12px]">Additional concrete preparation before scheduled installation.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[9px] uppercase tracking-wide text-slate-400">Notes</p>
            <p className="mt-1 text-[12px] text-slate-300">Surface prep extended due to substrate condition.</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-2 text-[10px] font-semibold text-brand-orange">Labor lines</p>
            <ul className="space-y-1 text-[11px] text-slate-300">
              <li className="flex justify-between"><span>Carpenter</span><span>8 hrs</span></li>
              <li className="flex justify-between"><span>Laborer</span><span>8 hrs</span></li>
              <li className="flex justify-between"><span>Operator</span><span>6 hrs</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-2 text-[10px] font-semibold text-brand-orange">Material lines</p>
            <ul className="space-y-1 text-[11px] text-slate-300">
              <li className="flex justify-between"><span>Concrete</span><span>12 CY</span></li>
              <li className="flex justify-between"><span>Rebar</span><span>840 LB</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="mb-2 text-[10px] font-semibold text-brand-orange">Equipment / related</p>
            <ul className="space-y-1 text-[11px] text-slate-300">
              <li className="flex justify-between"><span>Concrete Saw</span><span>6 hrs</span></li>
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TmLaborUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218 / labor">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">Labor lines</p>
        <p className="mb-3 text-[13px] font-semibold text-brand-navy">TM-218 · Sep 09, 2026</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[420px] w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Role", "Hours", "Date"].map((h) => (
                  <th key={h} className="px-3 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["James Carter", "Carpenter", "8 hrs", "Sep 09"],
                ["Michael Lee", "Laborer", "8 hrs", "Sep 09"],
                ["Daniel Brooks", "Operator", "6 hrs", "Sep 09"],
              ].map((row, i) => (
                <tr key={row[0]} className={"border-b border-slate-100 last:border-0 " + (i === 0 ? "bg-brand-orange/[0.04]" : "")}>
                  {row.map((cell) => (
                    <td key={cell} className="px-3 py-2.5 font-medium text-brand-navy">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[10px] text-brand-muted">Hours captured on ticket lines — rates omitted where not shown in product</p>
      </div>
    </BrowserFrame>
  );
}

export function TmMaterialsUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218 / materials">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">Material lines</p>
        <p className="mb-3 text-[13px] font-semibold text-brand-navy">Quantities connected to the work</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[480px] w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Material", "Quantity", "Unit", "Description"].map((h) => (
                  <th key={h} className="px-3 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Concrete", "12", "CY", "Additional slab preparation"],
                ["Rebar", "840", "LB", "Additional reinforcement"],
                ["Fasteners", "14", "BOX", "Field installation"],
              ].map((row, i) => (
                <tr key={row[0]} className={"border-b border-slate-100 last:border-0 " + (i === 0 ? "bg-brand-orange/[0.04]" : "")}>
                  <td className="px-3 py-2.5 font-semibold text-brand-navy">{row[0]}</td>
                  <td className="px-3 py-2.5 font-semibold text-brand-orange">{row[1]}</td>
                  <td className="px-3 py-2.5 text-brand-muted">{row[2]}</td>
                  <td className="px-3 py-2.5 text-brand-muted">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TmEquipmentUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218 / equipment">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">Equipment / related lines</p>
        <p className="mb-3 text-[13px] font-semibold text-brand-navy">Usage recorded with the ticket</p>
        <ul className="space-y-2">
          {[
            ["Concrete Saw", "6 hrs", "Riverside Medical Center", "Sep 09"],
            ["Mini Excavator", "4 hrs", "Riverside Medical Center", "Sep 09"],
          ].map((row, i) => (
            <li
              key={row[0]}
              className={
                "grid grid-cols-2 gap-2 rounded-xl border px-3 py-3 sm:grid-cols-4 " +
                (i === 0 ? "border-brand-orange/35 bg-brand-orange/[0.06]" : "border-slate-200 bg-white")
              }
            >
              <div>
                <p className="text-[9px] text-brand-muted">Equipment</p>
                <p className="text-[12px] font-semibold text-brand-navy">{row[0]}</p>
              </div>
              <div>
                <p className="text-[9px] text-brand-muted">Usage</p>
                <p className="text-[12px] font-semibold text-brand-orange">{row[1]}</p>
              </div>
              <div>
                <p className="text-[9px] text-brand-muted">Project</p>
                <p className="text-[12px] font-semibold text-brand-navy">{row[2]}</p>
              </div>
              <div>
                <p className="text-[9px] text-brand-muted">Date</p>
                <p className="text-[12px] font-semibold text-brand-navy">{row[3]}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[10px] text-brand-muted">Ticket-line usage only — not fleet, GPS, or telematics</p>
      </div>
    </BrowserFrame>
  );
}

export function TmFlowUI() {
  const steps = [
    { t: "Field", d: "Capture the work" },
    { t: "Details", d: "Labor, materials, equipment, notes" },
    { t: "Review", d: "Review documented activity" },
    { t: "Project Record", d: "Keep information connected" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Field to office</p>
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
        {steps.map((s, i) => (
          <li key={s.t} className="flex flex-1 items-center gap-2">
            <div className="w-full rounded-xl border border-brand-line bg-[#FAFBFD] px-3 py-3">
              <p className="font-mono text-[10px] font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden text-brand-muted sm:inline" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function TmChangeUI() {
  const chain = ["T&M Ticket", "Supporting Field Record", "Change Order", "Project Financial Record"];
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218 / connections" dark>
      <div className="p-4 text-white sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Connected workflows</p>
        <p className="mt-1 text-[14px] font-semibold">Relationship & traceability</p>
        <ol className="mt-5 space-y-0">
          {chain.map((step, i) => (
            <li key={step} className="flex flex-col items-start">
              <div
                className={
                  "rounded-xl border px-4 py-3 " +
                  (i === 0
                    ? "border-brand-orange/40 bg-brand-orange/10"
                    : "border-white/10 bg-white/[0.04]")
                }
              >
                <p className={"text-[12px] font-semibold " + (i === 0 ? "text-brand-orange" : "text-white")}>{step}</p>
              </div>
              {i < chain.length - 1 ? (
                <span className="my-1 ml-4 text-[12px] text-slate-500" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[11px] text-slate-400">
          Traceability across workflows — not automatic Change Order creation
        </p>
      </div>
    </BrowserFrame>
  );
}

export function TmAttachmentsUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / TM-218 / documentation">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">T&M Ticket · TM-218</p>
        <p className="mb-3 text-[13px] font-semibold text-brand-navy">Supporting details with the work</p>
        <ul className="space-y-2">
          {[
            { n: "Field Note", d: "Substrate condition noted before pour prep", hot: true },
            { n: "Site Photo", d: "Linked visual reference for the ticket", hot: false },
            { n: "Material Delivery Record", d: "Supporting document on the project record", hot: false },
          ].map((a) => (
            <li
              key={a.n}
              className={
                "rounded-xl border px-3 py-3 " +
                (a.hot ? "border-brand-orange/35 bg-brand-orange/[0.06]" : "border-slate-200 bg-white")
              }
            >
              <p className="text-[12px] font-semibold text-brand-navy">{a.n}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{a.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function TmReviewUI() {
  const rows = [
    { id: "TM-218", d: "Concrete preparation", type: "Labor + Mat", hrs: "24", cost: "$4,280", s: "Submitted" },
    { id: "TM-217", d: "After-hours corridor work", type: "Labor", hrs: "8", cost: "$960", s: "In Review" },
    { id: "TM-216", d: "Lift & hardware", type: "Equip + Mat", hrs: "3", cost: "$1,140", s: "Approved" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / tm / riverside-medical / review">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">T&M review</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            3 pending
          </span>
        </div>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <table className="min-w-[560px] w-full text-left text-[10px]">
          <thead>
            <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
              {["Ticket", "Description", "Type", "Hours", "Est. Cost", "Status"].map((h) => (
                <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.id}
                className={"border-b border-slate-100 last:border-0 " + (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")}
              >
                <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.id}</td>
                <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-navy">{r.d}</td>
                <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.type}</td>
                <td className="px-2.5 py-2.5 text-brand-muted">{r.hrs}</td>
                <td className="px-2.5 py-2.5 font-semibold text-brand-navy">{r.cost}</td>
                <td
                  className={
                    "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                    (r.s === "Submitted"
                      ? "text-brand-orange"
                      : r.s === "Approved"
                        ? "text-emerald-700"
                        : "text-brand-navy")
                  }
                >
                  {r.s}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[10px] text-brand-muted">Illustrative review queue — not company results</p>
      </div>
    </BrowserFrame>
  );
}

export function TmDashboardUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / tm / riverside-medical" dark>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">T&M activity</p>
            <p className="mt-0.5 text-[14px] font-semibold">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
            This week
          </span>
        </div>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Labor Hours", "86"],
            ["Materials", "24 lines"],
            ["Equipment", "18 hrs"],
            ["Total Activity", "12 tickets"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[16px] font-bold ${i === 0 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2">
          {[
            { id: "TM-218", d: "Concrete preparation", meta: "Labor · Materials · $4,280", s: "Submitted" },
            { id: "TM-217", d: "After-hours corridor", meta: "Labor · $960", s: "In Review" },
            { id: "TM-216", d: "Lift & hardware", meta: "Equipment · Materials · $1,140", s: "Approved" },
          ].map((row, i) => (
            <li
              key={row.id}
              className={
                "flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3 py-2.5 " +
                (i === 0 ? "border-brand-orange/40 bg-brand-orange/[0.08]" : "border-white/10 bg-white/[0.04]")
              }
            >
              <div>
                <p className="text-[12px] font-semibold">
                  {row.id} · {row.d}
                </p>
                <p className="text-[10px] text-slate-400">{row.meta}</p>
              </div>
              <span
                className={
                  "text-[10px] font-bold uppercase " +
                  (row.s === "Submitted" ? "text-brand-orange" : "text-slate-300")
                }
              >
                {row.s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

/** Safety — incidents, inspections, toolbox talks, JHA/JSA. Register SAFETY. No scores/OSHA cert claims. */
export function SafetyOverviewUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / safety / riverside-medical">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Safety Overview</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Field operations
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Open Observations", "08"],
            ["Inspections", "12"],
            ["Open Actions", "05"],
            ["Completed", "17"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 p-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[16px] font-bold ${i === 0 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[620px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Item", "Location", "Assigned", "Priority", "Date", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  t: "Observation · Material storage",
                  loc: "Level 02 — East Wing",
                  a: "Site Team",
                  p: "Med",
                  d: "Sep 09",
                  s: "Open",
                  hot: true,
                },
                {
                  t: "Inspection · Daily site check",
                  loc: "Site Area B",
                  a: "A. Chen",
                  p: "—",
                  d: "Sep 09",
                  s: "Completed",
                  hot: false,
                },
                {
                  t: "Action · Secure storage",
                  loc: "Level 01",
                  a: "Safety Team",
                  p: "High",
                  d: "Sep 10",
                  s: "In Progress",
                  hot: false,
                },
                {
                  t: "Incident · Access path",
                  loc: "Site Area C",
                  a: "Field Team",
                  p: "Med",
                  d: "Sep 08",
                  s: "In Review",
                  hot: false,
                },
              ].map((row) => (
                <tr
                  key={row.t}
                  className={
                    "border-b border-slate-100 last:border-0 " +
                    (row.hot ? "bg-brand-orange/[0.04]" : "bg-white")
                  }
                >
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{row.t}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{row.loc}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{row.a}</td>
                  <td className="px-2.5 py-2.5 text-brand-muted">{row.p}</td>
                  <td className="px-2.5 py-2.5 text-brand-muted">{row.d}</td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (row.s === "Open" ? "text-brand-orange" : "text-brand-navy")
                    }
                  >
                    {row.s}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] text-brand-muted">Illustrative sample activity — not company results</p>
      </div>
    </BrowserFrame>
  );
}

export function SafetyObservationUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / safety / observations / SO-214">
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="ui-label">Safety observation</p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Open material storage area</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2.5 py-1 text-[10px] font-bold uppercase text-brand-orange">
            Open
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ["Location", "Level 02 — East Wing"],
            ["Reported", "Sep 09, 2026"],
            ["Reported by", "Site Team"],
            ["Priority", "Medium"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-3 py-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Follow-up action</p>
          <p className="mt-1 text-[12px] text-brand-navy">Organize and secure stored materials.</p>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
          <div className="h-10 w-10 shrink-0 rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
          <div>
            <p className="text-[11px] font-semibold text-brand-navy">Supporting photo</p>
            <p className="text-[10px] text-brand-muted">East Wing storage · Sep 09</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SafetyInspectionUI() {
  const checks = [
    { l: "PPE compliance", on: true },
    { l: "Access routes", on: true },
    { l: "Material storage", on: true },
    { l: "Housekeeping", on: true },
    { l: "Fall protection", on: false },
    { l: "Equipment condition", on: true },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / safety / inspections / SI-088">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">Inspection</p>
        <p className="text-[14px] font-semibold text-brand-navy">Daily Site Safety Inspection</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Date", "Sep 09, 2026"],
            ["Inspector", "A. Chen"],
            ["Project", "Riverside Medical"],
            ["Status", "In Progress"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-brand-soft/40 px-2.5 py-2">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-0.5 text-[11px] font-semibold ${l === "Status" ? "text-brand-orange" : "text-brand-navy"}`}>
                {v}
              </p>
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-1.5">
          {checks.map((c) => (
            <li
              key={c.l}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] text-brand-navy"
            >
              <span
                className={
                  "flex h-4 w-4 items-center justify-center rounded border text-[9px] font-bold " +
                  (c.on
                    ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
                    : "border-slate-300 text-transparent")
                }
              >
                {c.on ? "✓" : "·"}
              </span>
              {c.l}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] text-brand-muted">
          Finding · Fall protection area needs follow-up before next shift
        </p>
      </div>
    </BrowserFrame>
  );
}

export function SafetyIncidentUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / safety / incidents / INC-041" dark>
      <div className="p-4 text-white sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Incident record</p>
            <p className="mt-0.5 text-[14px] font-semibold">INC-041</p>
          </div>
          <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300">
            In Review
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Date", "Sep 08, 2026"],
            ["Time", "10:40 AM"],
            ["Location", "Site Area C"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[12px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[9px] uppercase tracking-wide text-slate-400">Description</p>
          <p className="mt-1 text-[12px] text-slate-200">
            Near-miss involving temporary access path. Area secured and documented for follow-up.
          </p>
        </div>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[9px] uppercase tracking-wide text-slate-400">People involved</p>
            <p className="mt-1 text-[12px] font-semibold">Field crew · Supervision notified</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[9px] uppercase tracking-wide text-slate-400">Follow-up</p>
            <p className="mt-1 text-[12px] font-semibold text-brand-orange">Re-establish marked access route</p>
          </div>
        </div>
        <p className="mt-3 text-[10px] text-slate-500">Supporting notes and documents on the project record</p>
      </div>
    </BrowserFrame>
  );
}

export function SafetyActionsUI() {
  const rows = [
    { id: "CA-104", d: "Secure temporary material storage", a: "Site Team", due: "Sep 11", s: "Open", hot: true },
    { id: "CA-105", d: "Replace damaged warning signage", a: "Safety Team", due: "Sep 10", s: "In Progress", hot: false },
    { id: "CA-106", d: "Clear blocked access route", a: "Field Team", due: "Sep 09", s: "Resolved", hot: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / safety / follow-ups">
      <div className="p-4 sm:p-5">
        <p className="ui-label mb-1">Follow-up actions</p>
        <p className="mb-3 text-[13px] font-semibold text-brand-navy">Open → In Progress → Resolved</p>
        <div className="mb-3 flex flex-wrap gap-2">
          {["Open", "In Progress", "Resolved"].map((s, i) => (
            <span
              key={s}
              className={
                "rounded-md border px-2.5 py-1 text-[10px] font-semibold " +
                (i === 0
                  ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange"
                  : "border-brand-line bg-white text-brand-navy")
              }
            >
              {s}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {rows.map((r) => (
            <li
              key={r.id}
              className={
                "rounded-xl border px-3 py-3 " +
                (r.hot ? "border-brand-orange/35 bg-brand-orange/[0.06]" : "border-slate-200 bg-white")
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[12px] font-semibold text-brand-navy">
                  {r.id} · {r.d}
                </p>
                <span
                  className={
                    "text-[10px] font-bold uppercase " +
                    (r.s === "Open"
                      ? "text-brand-orange"
                      : r.s === "Resolved"
                        ? "text-emerald-700"
                        : "text-brand-navy")
                  }
                >
                  {r.s}
                </span>
              </div>
              <p className="mt-1 text-[10px] text-brand-muted">
                Assigned: {r.a} · Due: {r.due}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function SafetyFlowUI() {
  const steps = [
    { t: "Field", d: "Capture observation" },
    { t: "Document", d: "Add details & evidence" },
    { t: "Action", d: "Assign follow-up" },
    { t: "Resolution", d: "Track completion" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Field-to-office visibility</p>
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
        {steps.map((s, i) => (
          <li key={s.t} className="flex flex-1 items-center gap-2">
            <div className="w-full rounded-xl border border-brand-line bg-[#FAFBFD] px-3 py-3">
              <p className="font-mono text-[10px] font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden text-brand-muted sm:inline" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Mobile FO — field access for logs, drawings, photos, punch, T&M, safety. No offline/GPS claims. */
function MobilePhoneFrame({
  children,
  tab = 0,
}: {
  children: React.ReactNode;
  tab?: number;
}) {
  const tabs = ["Home", "Field", "Capture", "More"];
  return (
    <div className="phone-shell mx-auto w-[220px] sm:w-[236px]" aria-hidden="true">
      <div className="mx-auto mt-2.5 h-1.5 w-16 rounded-full bg-slate-300" />
      <div className="min-h-[430px] px-3.5 pb-2 pt-2.5">{children}</div>
      <div className="flex justify-between border-t border-slate-100 px-3 py-2.5 text-[8px] text-brand-muted">
        {tabs.map((t, i) => (
          <span key={t} className={i === tab ? "font-semibold text-brand-navy" : ""}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MobileHomeUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={0}>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold text-brand-navy">Vertex CMS</p>
          <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[8px] font-semibold text-brand-muted">
            Field
          </span>
        </div>
        <p className="text-[9px] text-brand-muted">Project</p>
        <p className="text-[13px] font-semibold leading-snug text-brand-navy">Riverside Medical Center</p>
        <p className="mt-1 text-[9px] text-brand-muted">Today · September 09, 2026</p>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
          Quick Actions
        </p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {["Daily Log", "Photos", "Drawings", "Punch", "T&M", "Safety"].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-slate-200 bg-brand-soft/50 px-2 py-2.5 text-center text-[10px] font-semibold text-brand-navy"
            >
              {t}
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
          Recent Activity
        </p>
        <ul className="mt-1.5 space-y-1.5">
          {[
            { t: "Daily Log", d: "Updated 9:42 AM" },
            { t: "Punch", d: "P-104 — In Progress" },
            { t: "Photo", d: "Added 10:15 AM" },
            { t: "Safety", d: "Observation Added" },
          ].map((r) => (
            <li
              key={r.t + r.d}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-2"
            >
              <p className="text-[11px] font-semibold text-brand-navy">{r.t}</p>
              <p className="text-[9px] text-brand-muted">{r.d}</p>
            </li>
          ))}
        </ul>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileDashboardUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={0}>
        <p className="text-[9px] text-brand-muted">Project</p>
        <p className="text-[13px] font-semibold text-brand-navy">Riverside Medical Center</p>
        <p className="mt-1 text-[9px] text-brand-muted">Today&apos;s Activity · Sep 09</p>
        <ul className="mt-3 space-y-1">
          {[
            ["Daily Log", "Not Started"],
            ["Punch Items", "7 Open"],
            ["Safety", "2 Open"],
            ["Photos", "12 Recent"],
            ["Drawings", "Current Set"],
            ["T&M", "3 Draft Entries"],
          ].map(([l, v]) => (
            <li
              key={l}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-2.5 py-2"
            >
              <span className="text-[11px] font-medium text-brand-navy">{l}</span>
              <span className="text-[10px] font-semibold text-brand-orange">{v}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
          Quick Actions
        </p>
        <div className="mt-1.5 flex gap-1.5">
          {["+ Daily Log", "+ Photo", "+ Punch"].map((a) => (
            <span
              key={a}
              className="flex-1 rounded-lg border border-brand-orange/30 bg-brand-orange/5 py-2 text-center text-[9px] font-semibold text-brand-orange"
            >
              {a}
            </span>
          ))}
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileDailyLogUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={1}>
        <p className="text-[9px] text-brand-muted">Daily Log</p>
        <p className="text-[13px] font-semibold text-brand-navy">Sep 09, 2026</p>
        <div className="mt-3 space-y-1.5">
          {[
            ["Weather", "82°F · Partly Cloudy"],
            ["Work Completed", "MEP rough-in · East Wing"],
            ["Workforce", "22 on site"],
            ["Notes", "Material delivery confirmed"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-wide text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Photos</p>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
          ))}
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileDrawingUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={1}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[9px] text-brand-muted">Drawing</p>
            <p className="text-[13px] font-semibold text-brand-navy">A-204</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2 py-1 text-[8px] font-bold uppercase text-brand-orange">
            Current
          </span>
        </div>
        <p className="text-[11px] font-medium text-brand-navy">Second Floor Plan</p>
        <p className="text-[9px] text-brand-muted">Revision · Rev 06</p>
        <div className="mt-3 flex aspect-[4/3] flex-col justify-between rounded-xl border border-slate-200 bg-[#F0F4F9] p-3">
          <div className="grid h-full grid-cols-3 gap-1 opacity-40">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-sm border border-dashed border-brand-navy/25" />
            ))}
          </div>
          <p className="text-center text-[9px] font-medium text-brand-muted">Sheet preview</p>
        </div>
        <div className="mt-2 flex items-center justify-center gap-2">
          {["−", "Fit", "+"].map((c) => (
            <span
              key={c}
              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-brand-navy"
            >
              {c}
            </span>
          ))}
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobilePhotosUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={2}>
        <p className="text-[9px] text-brand-muted">Field Photos</p>
        <p className="text-[13px] font-semibold text-brand-navy">Riverside Medical Center</p>
        <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center rounded-xl bg-brand-navy text-white">
          <div className="h-12 w-12 rounded-full border-2 border-white/35" />
          <p className="mt-2 text-[10px] font-medium">Capture photo</p>
          <p className="mt-0.5 text-[8px] text-slate-300">Sep 09 · Level 02</p>
        </div>
        <p className="mt-3 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">
          Recent photos
        </p>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
          ))}
        </div>
        <p className="mt-2 text-[9px] text-brand-muted">Connected to project record</p>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobilePunchUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={1}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[9px] text-brand-muted">Punch Item</p>
            <p className="text-[13px] font-semibold text-brand-navy">P-104</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2 py-1 text-[8px] font-bold uppercase text-brand-orange">
            In Progress
          </span>
        </div>
        <p className="text-[12px] font-semibold text-brand-navy">Door hardware adjustment</p>
        <div className="mt-3 space-y-1.5">
          {[
            ["Location", "Level 02 — East Wing"],
            ["Assigned", "Site Team"],
            ["Status", "In Progress"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-wide text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2">
          <div className="h-9 w-9 shrink-0 rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
          <div>
            <p className="text-[10px] font-semibold text-brand-navy">Photo attached</p>
            <p className="text-[8px] text-brand-muted">East Wing · Sep 09</p>
          </div>
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileTmUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={1}>
        <p className="text-[9px] text-brand-muted">Time & Materials</p>
        <p className="text-[13px] font-semibold text-brand-navy">TM-218</p>
        <div className="mt-3 space-y-1.5">
          {[
            ["Project", "Riverside Medical Center"],
            ["Date", "Sep 09, 2026"],
            ["Work Description", "After-hours access corridor work"],
            ["Labor", "4 hrs · Field crew"],
            ["Materials", "Hardware kit · Qty 2"],
            ["Equipment", "Lift · 3 hrs"],
            ["Notes", "Owner request · documented"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5">
              <p className="text-[8px] uppercase tracking-wide text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[10px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileSafetyUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={1}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[9px] text-brand-muted">Safety Observation</p>
            <p className="text-[12px] font-semibold text-brand-navy">Open material storage</p>
          </div>
          <span className="rounded-md bg-brand-orange/10 px-2 py-1 text-[8px] font-bold uppercase text-brand-orange">
            Open
          </span>
        </div>
        <div className="space-y-1.5">
          {[
            ["Location", "Level 02 — East Wing"],
            ["Description", "Stored materials need organizing"],
            ["Priority", "Medium"],
            ["Assigned To", "Site Team"],
            ["Status", "Open"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-wide text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2">
          <div className="h-9 w-9 shrink-0 rounded-md bg-gradient-to-br from-slate-200 to-slate-300" />
          <div>
            <p className="text-[10px] font-semibold text-brand-navy">Photo</p>
            <p className="text-[8px] text-brand-muted">Supporting evidence</p>
          </div>
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileWorkspaceUI() {
  const screens: { label: string; title: string; rows: string[] }[] = [
    {
      label: "01 · Project Home",
      title: "Riverside Medical",
      rows: ["Daily Log", "Photos", "Punch", "Safety"],
    },
    {
      label: "02 · Daily Log",
      title: "Sep 09 Log",
      rows: ["Weather 82°F", "Crew 22", "Photos 3", "Notes added"],
    },
    {
      label: "03 · Punch",
      title: "P-104",
      rows: ["Door hardware", "Level 02", "Site Team", "In Progress"],
    },
    {
      label: "04 · Safety",
      title: "Observation",
      rows: ["East Wing", "Medium", "Site Team", "Open"],
    },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">One mobile workspace</p>
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-nowrap lg:gap-3">
        {screens.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center gap-2 sm:min-w-[140px] sm:max-w-[180px]">
            <div className="w-full">
              <p className="mb-2 text-center font-mono text-[9px] font-bold text-brand-orange">{s.label}</p>
              <div className="phone-shell mx-auto w-full max-w-[160px]">
                <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-300" />
                <div className="min-h-[200px] px-2.5 pb-2 pt-2">
                  <p className="text-[11px] font-semibold text-brand-navy">{s.title}</p>
                  <ul className="mt-2 space-y-1">
                    {s.rows.map((r) => (
                      <li
                        key={r}
                        className="rounded-md border border-slate-200 bg-brand-soft/40 px-2 py-1.5 text-[9px] font-medium text-brand-navy"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {i < screens.length - 1 ? (
              <span className="hidden shrink-0 text-brand-muted lg:inline" aria-hidden="true">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileFlowUI() {
  const steps = [
    { t: "Mobile Field", d: "Capture" },
    { t: "Vertex CMS", d: "Organize" },
    { t: "Project Team", d: "Review" },
    { t: "Project Record", d: "Stay Current" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">Field-to-office connection</p>
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
        {steps.map((s, i) => (
          <li key={s.t} className="flex flex-1 items-center gap-2">
            <div className="w-full rounded-xl border border-brand-line bg-[#FAFBFD] px-3 py-3">
              <p className="font-mono text-[10px] font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-[13px] font-semibold text-brand-navy">{s.t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{s.d}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden text-brand-muted sm:inline" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function MobileCaptureUI() {
  return (
    <div className="flex justify-center py-2">
      <MobilePhoneFrame tab={2}>
        <p className="text-[9px] text-brand-muted">New Field Record</p>
        <p className="text-[13px] font-semibold text-brand-navy">Daily Activity</p>
        <div className="mt-3 space-y-1.5">
          {[
            ["Project", "Riverside Medical Center"],
            ["Type", "Daily Activity"],
            ["Location", "Level 03"],
            ["Description", "Structural framing completed."],
            ["Photos", "3 Attachments"],
            ["Status", "Draft"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-white px-2.5 py-2">
              <p className="text-[8px] uppercase tracking-wide text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
      </MobilePhoneFrame>
    </div>
  );
}

export function MobileChainUI() {
  const items = [
    { t: "Daily Logs", d: "Capture daily project activity." },
    { t: "Photos", d: "Document visual progress." },
    { t: "Drawings", d: "Reference project information." },
    { t: "Punch", d: "Track field issues." },
    { t: "T&M", d: "Document time and materials." },
    { t: "Safety", d: "Capture safety activity." },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="ui-label mb-4">One mobile experience</p>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.t} className="rounded-xl border border-brand-line bg-[#FAFBFD] px-3 py-3">
            <p className="font-mono text-[10px] font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-1 text-[13px] font-semibold text-brand-navy">{item.t}</p>
            <p className="mt-0.5 text-[11px] text-brand-muted">{item.d}</p>
          </li>
        ))}
      </ol>
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

/** Subcontractors (SUB) + linked COI / lien / compliance readiness mockups */

export function SubDirectoryUI() {
  const rows = [
    {
      name: "Northstar Mechanical",
      trade: "MEP",
      projects: "3 Projects",
      prequal: "Approved",
      insurance: "Current",
      compliance: "Ready",
      status: "Active",
    },
    {
      name: "Summit Electrical",
      trade: "Electrical",
      projects: "2 Projects",
      prequal: "Approved",
      insurance: "Expires in 18 days",
      compliance: "Review",
      status: "Active",
    },
    {
      name: "Apex Concrete",
      trade: "Concrete",
      projects: "1 Project",
      prequal: "Pending",
      insurance: "Current",
      compliance: "Pending Review",
      status: "Pending",
    },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / subcontractors">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Subcontractor Directory
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Portfolio · Active Relationships</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            24 Subcontractors
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <div className="min-w-[140px] flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-brand-muted">
            Search subcontractors, trades, projects…
          </div>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy">
            Status · All
          </span>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy">
            Compliance · All
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[680px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Subcontractor", "Trade", "Projects", "Prequalification", "Insurance", "Compliance", "Status"].map(
                  (h) => (
                    <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.name}
                  className={
                    "border-b border-slate-100 last:border-0 " +
                    (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")
                  }
                >
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.name}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.trade}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.projects}</td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (r.prequal === "Approved" ? "text-emerald-700" : "text-amber-700")
                    }
                  >
                    {r.prequal}
                  </td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (r.insurance.includes("Expires") ? "text-brand-orange" : "text-emerald-700")
                    }
                  >
                    {r.insurance}
                  </td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (r.compliance === "Ready"
                        ? "text-emerald-700"
                        : r.compliance === "Review"
                          ? "text-brand-orange"
                          : "text-amber-700")
                    }
                  >
                    {r.compliance}
                  </td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubProfileUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / subcontractors / northstar-mechanical">
      <div className="border-b border-slate-100 px-4 py-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Subcontractor Detail
            </p>
            <p className="mt-0.5 text-[15px] font-semibold text-brand-navy">Northstar Mechanical</p>
            <p className="mt-0.5 text-[11px] text-brand-muted">MEP · Trade partner</p>
          </div>
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            Approved
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Overview", "Projects", "Contracts", "Compliance", "Performance"].map((t, i) => (
            <span
              key={t}
              className={
                "rounded-md px-2.5 py-1 text-[10px] font-semibold " +
                (i === 0
                  ? "bg-brand-navy text-white"
                  : "border border-brand-line bg-white text-brand-muted")
              }
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1.1fr_0.9fr] sm:p-4">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ["Active Projects", "3"],
              ["Open Contracts", "4"],
              ["Compliance", "98%"],
              ["Performance", "92%"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/50 px-2.5 py-2.5">
                <p className="text-[9px] text-brand-muted">{l}</p>
                <p className="mt-1 text-[15px] font-bold text-brand-navy">{v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Projects</p>
            <ul className="mt-2 space-y-1.5">
              {["Riverside Medical Center", "Harbor Office Complex", "North Campus Expansion"].map((p) => (
                <li
                  key={p}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#FAFBFD] px-2.5 py-2"
                >
                  <span className="text-[11px] font-semibold text-brand-navy">{p}</span>
                  <span className="text-[9px] font-semibold text-emerald-700">Active</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
              Contract Information
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                ["Contract value", "$2.4M"],
                ["Committed cost", "$1.8M"],
                ["Start date", "Mar 01, 2026"],
                ["End date", "Nov 30, 2026"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg bg-brand-soft/60 px-2.5 py-2">
                  <p className="text-[9px] text-brand-muted">{l}</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
              Compliance Summary
            </p>
            <ul className="mt-2 space-y-1.5">
              {[
                ["COI", "Current", "text-emerald-700"],
                ["Prequalification", "Approved", "text-emerald-700"],
                ["Required Documents", "Complete", "text-emerald-700"],
              ].map(([l, v, c]) => (
                <li key={l} className="flex items-center justify-between rounded-lg border border-slate-100 px-2.5 py-2">
                  <span className="text-[11px] text-brand-muted">{l}</span>
                  <span className={`text-[11px] font-semibold ${c}`}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Performance</p>
            <ul className="mt-2 space-y-1.5">
              {[
                ["Schedule", "92%"],
                ["Quality", "95%"],
                ["Safety", "90%"],
              ].map(([l, v]) => (
                <li key={l} className="flex items-center justify-between rounded-lg border border-slate-100 px-2.5 py-2">
                  <span className="text-[11px] text-brand-muted">{l}</span>
                  <span className="text-[11px] font-semibold text-brand-navy">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-2.5">
            <p className="text-[10px] font-semibold text-brand-orange">Alerts</p>
            <p className="mt-1 text-[11px] text-brand-navy">No open compliance issues</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function SubReadinessUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / subcontractors / readiness">
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Compliance Readiness
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Northstar Mechanical</p>
          </div>
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
            Ready
          </span>
        </div>
        <ul className="space-y-2">
          {[
            ["Prequalification", "Approved", true],
            ["Insurance", "Current", true],
            ["Required Documents", "Complete", true],
            ["Project Assignment", "Eligible", true],
          ].map(([l, v, ok]) => (
            <li
              key={String(l)}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-3"
            >
              <span className="text-[12px] font-semibold text-brand-navy">{l}</span>
              <span
                className={
                  "text-[11px] font-semibold " + (ok ? "text-emerald-700" : "text-brand-orange")
                }
              >
                {v}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function SubInsuranceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / subcontractors / insurance" dark>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Insurance &amp; COI
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">Northstar Mechanical</p>
          </div>
          <span className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
            Current
          </span>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="text-[11px] font-semibold text-white">General Liability</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                ["Policy Number", "GL-48291"],
                ["Coverage", "$2,000,000"],
                ["Effective", "Jan 01, 2026"],
                ["Expires", "Dec 31, 2026"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2">
                  <p className="text-[9px] text-slate-400">{l}</p>
                  <p className="mt-0.5 text-[11px] font-semibold text-slate-100">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Expiration Radar
            </p>
            <div className="relative flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-brand-blue/25" />
              <div className="absolute inset-3 rounded-full border border-brand-blue/35" />
              <div className="absolute inset-6 rounded-full border border-brand-orange/40" />
              <div className="rounded-full bg-brand-blue px-3 py-2 text-center text-[10px] font-bold text-white">
                COI
              </div>
            </div>
          </div>
        </div>
        <ul className="mt-3 space-y-2">
          {[
            ["Workers Compensation", "Expires in 24 days", "REVIEW SOON", "text-brand-orange"],
            ["Auto Liability", "Current", "CURRENT", "text-emerald-300"],
          ].map(([l, d, s, c]) => (
            <li
              key={l}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
            >
              <div>
                <p className="text-[12px] font-semibold text-white">{l}</p>
                <p className="text-[10px] text-slate-400">{d}</p>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wide ${c}`}>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function SubLienUI() {
  const rows = [
    { sub: "Northstar Mechanical", period: "Aug 2026", type: "Conditional", status: "Received" },
    { sub: "Summit Electrical", period: "Aug 2026", type: "Unconditional", status: "Pending" },
    { sub: "Apex Concrete", period: "Aug 2026", type: "Conditional", status: "Received" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverside / lien-waivers">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Lien Waiver Register
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Project location · CA
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {["All", "Pending", "Received", "Missing"].map((f, i) => (
            <span
              key={f}
              className={
                "rounded-md px-2.5 py-1 text-[10px] font-semibold " +
                (i === 0
                  ? "bg-brand-navy text-white"
                  : "border border-brand-line bg-white text-brand-muted")
              }
            >
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[520px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Subcontractor", "Period", "Type", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sub} className="border-b border-slate-100 last:border-0 bg-white">
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.sub}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.period}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.type}</td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (r.status === "Received" ? "text-emerald-700" : "text-brand-orange")
                    }
                  >
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-brand-muted">
          Lien waivers and notices follow project location requirements.
        </p>
      </div>
    </BrowserFrame>
  );
}

export function SubAlertsUI() {
  const alerts = [
    {
      level: "HIGH",
      title: "Insurance certificate expired",
      sub: "Apex Concrete",
      detail: "Expired 2 days ago",
      tone: "text-brand-orange border-brand-orange/30 bg-brand-orange/[0.06]",
    },
    {
      level: "MEDIUM",
      title: "COI expires in 14 days",
      sub: "Summit Electrical",
      detail: "Renewal required",
      tone: "text-amber-700 border-amber-200 bg-amber-50/80",
    },
    {
      level: "MEDIUM",
      title: "Prequalification review required",
      sub: "Harbor Steel",
      detail: "Approval pending",
      tone: "text-amber-700 border-amber-200 bg-amber-50/80",
    },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / compliance / alerts">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Compliance Alerts
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">3 items need attention</p>
          </div>
        </div>
      </div>
      <div className="space-y-2.5 p-3 sm:p-4">
        {alerts.map((a) => (
          <div key={a.title} className={`rounded-xl border px-3.5 py-3 ${a.tone}`}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wide">{a.level}</p>
                <p className="mt-1 text-[13px] font-semibold text-brand-navy">{a.title}</p>
                <p className="mt-0.5 text-[11px] text-brand-muted">
                  {a.sub} · {a.detail}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["View requirement", "Review", "Resolve"].map((b) => (
                  <span
                    key={b}
                    className="rounded-md border border-brand-line bg-white px-2 py-1 text-[9px] font-semibold text-brand-navy"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function SubApprovalFlowUI() {
  const steps = [
    "Subcontractor",
    "Prequalification",
    "Compliance Review",
    "Insurance Verification",
    "Project Approval",
    "Ready for Work",
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        Approval &amp; Risk Control
      </p>
      <ol className="mt-5 space-y-2.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 bg-brand-orange/10 font-mono text-[10px] font-bold text-brand-orange">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 rounded-xl border border-white/12 bg-white/[0.04] px-3.5 py-2.5">
              <p className="text-[13px] font-semibold text-white">{s}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden text-slate-500 sm:inline" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-brand-orange/35 bg-brand-orange/10 px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Not Eligible</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-200">
            Prequalification approval required before assignment.
          </p>
        </div>
        <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-amber-300">Payment Hold</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-200">
            Required COI is expired.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Compliance suite (COMPLY / INS / LIEN) marketing mockups */

export function CompOverviewUI() {
  const rows = [
    {
      req: "COI",
      sub: "Northstar Mechanical",
      project: "Riverside Medical Center",
      status: "Current",
      exp: "Dec 31, 2026",
      tone: "text-emerald-700",
    },
    {
      req: "Prequalification",
      sub: "Summit Electrical",
      project: "Harbor Office Complex",
      status: "Approved",
      exp: "—",
      tone: "text-emerald-700",
    },
    {
      req: "Lien Waiver",
      sub: "Apex Concrete",
      project: "Riverside Medical Center",
      status: "Pending",
      exp: "Sep 18, 2026",
      tone: "text-brand-orange",
    },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / compliance">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Compliance Overview
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Portfolio compliance status</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Live view
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Compliance Status", "94%", "text-emerald-700"],
            ["Requirements", "48", "text-brand-navy"],
            ["Need Attention", "5", "text-brand-orange"],
            ["Expiring Soon", "3", "text-amber-700"],
          ].map(([l, v, c]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-2.5 py-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[16px] font-bold ${c}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[640px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Requirement", "Subcontractor", "Project", "Status", "Expiration"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.req + r.sub}
                  className={
                    "border-b border-slate-100 last:border-0 " +
                    (i === 2 ? "bg-brand-orange/[0.04]" : "bg-white")
                  }
                >
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.req}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.sub}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.project}</td>
                  <td className={`whitespace-nowrap px-2.5 py-2.5 font-semibold ${r.tone}`}>{r.status}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.exp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CompHealthUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / compliance / health">
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Compliance Health
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Overall · 94% Ready</p>
          </div>
          <span className="rounded-md border border-brand-navy/15 bg-brand-navy px-2.5 py-1.5 text-[10px] font-semibold text-white">
            View Compliance Details
          </span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Approved", "32", "text-emerald-700"],
            ["Pending", "8", "text-brand-navy"],
            ["Expiring Soon", "5", "text-brand-orange"],
            ["Missing", "3", "text-amber-700"],
          ].map(([l, v, c]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-white px-3 py-3">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[18px] font-bold ${c}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
            Project Compliance
          </p>
          <ul className="mt-2.5 space-y-2">
            {[
              ["Riverside Medical Center", "92% Ready"],
              ["Harbor Office Complex", "97% Ready"],
              ["North Campus Expansion", "88% Ready"],
            ].map(([p, s]) => (
              <li
                key={p}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#FAFBFD] px-3 py-2.5"
              >
                <span className="text-[12px] font-semibold text-brand-navy">{p}</span>
                <span className="text-[11px] font-semibold text-emerald-700">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CompRequirementsUI() {
  const items = [
    ["Subcontractor Prequalification", "APPROVED", "text-emerald-700"],
    ["Certificate of Insurance", "CURRENT", "text-emerald-700"],
    ["Required Documents", "COMPLETE", "text-emerald-700"],
    ["Lien Waiver", "PENDING", "text-brand-orange"],
    ["Compliance Review", "IN REVIEW", "text-brand-navy"],
  ];
  const legend = [
    ["Complete", "Ready for project activity."],
    ["Pending", "Action is still required."],
    ["Expiring", "Review before the expiration date."],
    ["Missing", "Required information has not been provided."],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverside / requirements">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Project Requirements
        </p>
        <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1.15fr_0.85fr] sm:p-4">
        <ul className="space-y-2">
          {items.map(([l, s, c]) => (
            <li
              key={l}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5"
            >
              <span className="text-[12px] font-semibold text-brand-navy">{l}</span>
              <span className={`text-[10px] font-bold uppercase tracking-wide ${c}`}>{s}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-slate-200 bg-[#FAFBFD] p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
            Requirement status
          </p>
          <ul className="mt-3 space-y-2.5">
            {legend.map(([t, d]) => (
              <li key={t}>
                <p className="text-[12px] font-semibold text-brand-navy">{t}</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-brand-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CompSubReadinessUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / compliance / subcontractors / northstar">
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Subcontractor Compliance
            </p>
            <p className="mt-0.5 text-[15px] font-semibold text-brand-navy">Northstar Mechanical</p>
          </div>
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
            Ready
          </span>
        </div>
        <ul className="space-y-2">
          {[
            ["Prequalification", "Approved"],
            ["Insurance", "Current"],
            ["Required Documents", "Complete"],
            ["Lien Waivers", "2 / 2 Received"],
            ["Active Projects", "3"],
            ["Performance", "92%"],
          ].map(([l, v]) => (
            <li
              key={l}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5 py-2.5"
            >
              <span className="text-[12px] text-brand-muted">{l}</span>
              <span className="text-[12px] font-semibold text-brand-navy">{v}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 inline-flex rounded-md border border-brand-navy/15 bg-brand-navy px-3 py-2 text-[10px] font-semibold text-white">
          View Subcontractor
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CompInsuranceUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / compliance / insurance" dark>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Insurance Certificates
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-white">Northstar Mechanical</p>
          </div>
          <span className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white">
            Review Insurance
          </span>
        </div>
        <ul className="space-y-2">
          {[
            ["General Liability", "$2,000,000", "Expires Dec 31, 2026", "CURRENT", "text-emerald-300"],
            ["Workers Compensation", "$1,000,000", "Expires Oct 04, 2026", "REVIEW SOON", "text-brand-orange"],
            ["Auto Liability", "$1,000,000", "Expires Dec 31, 2026", "CURRENT", "text-emerald-300"],
          ].map(([t, cov, exp, s, c]) => (
            <li
              key={t}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[12px] font-semibold text-white">{t}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    {cov} · {exp}
                  </p>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wide ${c}`}>{s}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
          {["CURRENT", "REVIEW SOON", "EXPIRED"].map((s, i) => (
            <span key={s} className="flex items-center gap-2 text-[10px] font-semibold text-slate-300">
              {i > 0 ? <span className="text-slate-500">→</span> : null}
              {s}
            </span>
          ))}
        </div>
        <p className="mt-3 rounded-lg border border-brand-orange/30 bg-brand-orange/10 px-3 py-2 text-[11px] font-medium text-brand-orange">
          3 certificates require review
        </p>
      </div>
    </BrowserFrame>
  );
}

export function CompLienUI() {
  const rows = [
    { sub: "Northstar Mechanical", period: "Aug 2026", type: "Conditional", status: "Received" },
    { sub: "Summit Electrical", period: "Aug 2026", type: "Unconditional", status: "Pending" },
    { sub: "Apex Concrete", period: "Aug 2026", type: "Conditional", status: "Received" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverside / lien-waivers">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Lien Waiver Register
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          </div>
          <span className="rounded-md border border-brand-line bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
            Project Location · Texas
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {["All", "Pending", "Received", "Missing"].map((f, i) => (
            <span
              key={f}
              className={
                "rounded-md px-2.5 py-1 text-[10px] font-semibold " +
                (i === 0
                  ? "bg-brand-navy text-white"
                  : "border border-brand-line bg-white text-brand-muted")
              }
            >
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[520px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Subcontractor", "Period", "Type", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sub} className="border-b border-slate-100 last:border-0 bg-white">
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.sub}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.period}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.type}</td>
                  <td
                    className={
                      "whitespace-nowrap px-2.5 py-2.5 font-semibold " +
                      (r.status === "Received" ? "text-emerald-700" : "text-brand-orange")
                    }
                  >
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-brand-muted">
          Requirements may vary by project location.
        </p>
      </div>
    </BrowserFrame>
  );
}

export function CompAlertsUI() {
  const alerts = [
    {
      level: "HIGH",
      title: "Expired Certificate of Insurance",
      meta: "Apex Concrete · Riverside Medical Center",
      action: "Review Insurance",
      tone: "border-brand-orange/30 bg-brand-orange/[0.06]",
    },
    {
      level: "MEDIUM",
      title: "COI expires in 14 days",
      meta: "Summit Electrical · Harbor Office Complex",
      action: "Review",
      tone: "border-amber-200 bg-amber-50/80",
    },
    {
      level: "MEDIUM",
      title: "Prequalification review required",
      meta: "Harbor Steel · North Campus Expansion",
      action: "Review",
      tone: "border-amber-200 bg-amber-50/80",
    },
    {
      level: "LOW",
      title: "Lien waiver pending",
      meta: "Northstar Mechanical · Riverside Medical Center",
      action: "Review",
      tone: "border-slate-200 bg-white",
    },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / compliance / alerts">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Compliance Alerts
            </p>
            <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">5 items need attention</p>
          </div>
          <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[10px] font-semibold text-brand-navy">
            View All Alerts
          </span>
        </div>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        {alerts.map((a) => (
          <div key={a.title} className={`rounded-xl border px-3.5 py-3 ${a.tone}`}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wide text-brand-muted">{a.level}</p>
                <p className="mt-1 text-[13px] font-semibold text-brand-navy">{a.title}</p>
                <p className="mt-0.5 text-[11px] text-brand-muted">{a.meta}</p>
              </div>
              <span className="text-[10px] font-semibold text-brand-orange">{a.action} →</span>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function CompDocsUI() {
  const docs = [
    ["Certificate of Insurance", "Current", "Reviewed"],
    ["Prequalification", "Approved", "Uploaded"],
    ["W-9", "Received", "Uploaded"],
    ["Lien Waiver", "Pending", "—"],
    ["Compliance Review", "Completed", "Reviewed"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / compliance / documents">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Compliance Documents
        </p>
        <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Summit Electrical</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["Uploaded", "Reviewed", "Current", "Expired"].map((s, i) => (
            <span
              key={s}
              className={
                "rounded-md px-2.5 py-1 text-[10px] font-semibold " +
                (i === 0
                  ? "bg-brand-navy text-white"
                  : "border border-brand-line bg-white text-brand-muted")
              }
            >
              {s}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {docs.map(([name, status, meta]) => (
            <li
              key={name}
              className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5"
            >
              <div>
                <p className="text-[12px] font-semibold text-brand-navy">{name}</p>
                <p className="mt-0.5 text-[10px] text-brand-muted">{meta}</p>
              </div>
              <span
                className={
                  "text-[10px] font-bold uppercase tracking-wide " +
                  (status === "Pending" ? "text-brand-orange" : "text-emerald-700")
                }
              >
                {status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function CompApprovalFlowUI() {
  const steps = [
    "Subcontractor",
    "Prequalification",
    "Compliance Review",
    "Insurance Check",
    "Project Approval",
    "Ready for Work",
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        Approval &amp; Readiness
      </p>
      <ol className="mt-5 space-y-2.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 bg-brand-orange/10 font-mono text-[10px] font-bold text-brand-orange">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 rounded-xl border border-white/12 bg-white/[0.04] px-3.5 py-2.5">
              <p className="text-[13px] font-semibold text-white">{s}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden text-slate-500 sm:inline" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-brand-orange/35 bg-brand-orange/10 px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Not Ready</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-200">
            Required compliance item is incomplete. Action required before assignment.
          </p>
        </div>
        <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-3.5 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-amber-300">Payment Review</p>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-200">
            Required insurance documentation is expired.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Workforce & Timesheets (TIME) marketing mockups */

export function WfOverviewUI() {
  const rows = [
    { worker: "Michael Carter", crew: "Electrical Crew A", project: "Riverside Medical Center", hrs: "42h", status: "Active", ot: false },
    { worker: "James Wilson", crew: "Concrete Crew B", project: "Harbor Office Complex", hrs: "46h", status: "Overtime", ot: true },
    { worker: "Daniel Brooks", crew: "MEP Crew C", project: "North Campus Expansion", hrs: "38h", status: "Active", ot: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Workforce Overview</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["Active Workers", "248"],
            ["Active Crews", "32"],
            ["Hours This Week", "7,842"],
            ["Overtime Hours", "684"],
            ["Certifications Expiring", "12"],
            ["Projects", "18"],
          ].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-2.5 py-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[14px] font-bold ${i === 3 || i === 4 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mb-3 rounded-xl border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[11px] font-semibold text-brand-navy">12 certifications expiring soon</p>
            <span className="text-[10px] font-semibold text-brand-orange">View Certifications →</span>
          </div>
        </div>
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Workforce Activity</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[560px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Crew", "Project", "Hours", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.worker} className={"border-b border-slate-100 last:border-0 " + (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")}>
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.worker}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.crew}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.project}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-navy">{r.hrs}</td>
                  <td className={"whitespace-nowrap px-2.5 py-2.5 font-semibold " + (r.ot ? "text-brand-orange" : "text-emerald-700")}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfDirectoryUI() {
  const rows = [
    { w: "Michael Carter", trade: "Electrician", cls: "Electrical", project: "Riverside Medical Center", status: "Active" },
    { w: "James Wilson", trade: "Carpenter", cls: "Concrete", project: "Harbor Office Complex", status: "Active" },
    { w: "Daniel Brooks", trade: "Pipefitter", cls: "MEP", project: "North Campus Expansion", status: "Active" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / directory">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Worker Directory</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <div className="min-w-[120px] flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-brand-muted">Search workers…</div>
          {["All", "Active", "Inactive", "Certification Expiring"].map((f, i) => (
            <span key={f} className={"rounded-md px-2.5 py-1 text-[10px] font-semibold " + (i === 0 ? "bg-brand-navy text-white" : "border border-brand-line bg-white text-brand-muted")}>{f}</span>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[580px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Trade", "Classification", "Project", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.w} className="border-b border-slate-100 last:border-0 bg-white">
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.w}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.trade}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.cls}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.project}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-emerald-700">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfProfileUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / workers / emp-1042">
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Worker Profile</p>
        <p className="mt-0.5 text-[15px] font-semibold text-brand-navy">Michael Carter</p>
        <p className="text-[11px] text-brand-muted">Employee # EMP-1042</p>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        <div className="space-y-2">
          {[
            ["Trade", "Electrician"],
            ["Classification", "Journeyman"],
            ["Pay Type", "Hourly"],
            ["Assigned Project", "Riverside Medical Center"],
            ["Crew", "Electrical Crew A"],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between rounded-lg border border-slate-100 bg-[#FAFBFD] px-3 py-2">
              <span className="text-[11px] text-brand-muted">{l}</span>
              <span className="text-[11px] font-semibold text-brand-navy">{v}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Compliance</p>
            <ul className="mt-2 space-y-1.5">
              {[["I-9", "Verified"], ["E-Verify", "Completed"], ["OSHA 10", "Current"], ["OSHA 30", "Current"]].map(([l, v]) => (
                <li key={l} className="flex justify-between text-[11px]">
                  <span className="text-brand-muted">{l}</span>
                  <span className="font-semibold text-emerald-700">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Certifications</p>
            <ul className="mt-2 space-y-1.5">
              {[["Electrical License", "Expires Nov 18, 2026"], ["Safety Certification", "Expires Jan 04, 2027"]].map(([l, v]) => (
                <li key={l} className="rounded-lg bg-brand-soft/60 px-2.5 py-2">
                  <p className="text-[11px] font-semibold text-brand-navy">{l}</p>
                  <p className="text-[10px] text-brand-muted">{v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfCrewUI() {
  const members = [
    ["Michael Carter", "Foreman"],
    ["Robert Hayes", "Electrician"],
    ["Thomas Reed", "Electrician"],
    ["Daniel Brooks", "Apprentice"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / crews / electrical-a" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Crew</p>
        <p className="mt-0.5 text-[15px] font-semibold text-white">Electrical Crew A</p>
        <p className="mt-0.5 text-[11px] text-slate-400">Project · Riverside Medical Center</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Foreman", "Michael Carter"], ["Members", "12 Workers"], ["This Week", "482 Hours"], ["Overtime", "42 Hours"]].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-1 text-[12px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-slate-400">Certifications · 11 Current · 1 Expiring</p>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Crew Members</p>
          <ul className="mt-2 space-y-1.5">
            {members.map(([n, r]) => (
              <li key={n} className="flex items-center justify-between rounded-lg border border-white/10 px-2.5 py-2">
                <span className="text-[11px] font-semibold text-white">{n}</span>
                <span className="text-[10px] text-slate-400">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfProjectAssignUI() {
  const crews = [
    { name: "Electrical", workers: 12, hrs: "482h", status: "Active", certs: "Current" },
    { name: "Concrete", workers: 18, hrs: "624h", status: "Active", certs: "1 Expiring" },
    { name: "MEP", workers: 9, hrs: "318h", status: "Active", certs: "Current" },
    { name: "Sitework", workers: 15, hrs: "540h", status: "Active", certs: "Current" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverside / workforce">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Project</p>
        <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
      </div>
      <div className="p-3 sm:p-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Crews</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {crews.map((c) => (
            <li key={c.name} className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13px] font-semibold text-brand-navy">{c.name}</p>
                <span className="text-[10px] font-semibold text-brand-orange">View Crew →</span>
              </div>
              <p className="mt-2 text-[11px] text-brand-muted">{c.workers} workers · {c.hrs}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">{c.status}</span>
                <span className="rounded-md bg-brand-soft px-2 py-0.5 text-[9px] font-semibold text-brand-muted">{c.certs}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function WfLaborHoursUI() {
  const projects = [
    ["Riverside Medical Center", "2,184 hrs"],
    ["Harbor Office Complex", "1,842 hrs"],
    ["North Campus Expansion", "1,426 hrs"],
    ["Other Projects", "2,502 hrs"],
  ];
  const bars = [88, 74, 58, 100];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / labor">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Labor Summary · This Week</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Regular Hours", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Total", "7,954"]].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-3 py-3">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[16px] font-bold ${i === 1 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-24 items-end gap-2 rounded-xl border border-slate-200 bg-white px-3 pb-3 pt-4">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-brand-blue/70" style={{ height: `${h}%` }} />
              <span className="text-[8px] text-brand-muted">{["Reg", "OT", "DT", "Tot"][i]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Project Labor</p>
          <ul className="mt-2 space-y-1.5">
            {projects.map(([p, h]) => (
              <li key={p} className="flex justify-between rounded-lg bg-[#FAFBFD] px-2.5 py-2 text-[11px]">
                <span className="font-semibold text-brand-navy">{p}</span>
                <span className="text-brand-muted">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfTimesheetUI() {
  const days = [
    ["Monday", "8 Regular", "0 OT"],
    ["Tuesday", "8 Regular", "0 OT"],
    ["Wednesday", "8 Regular", "2 OT"],
    ["Thursday", "8 Regular", "1 OT"],
    ["Friday", "8 Regular", "0 OT"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / timesheets">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Week Ending September 13, 2026</p>
        <p className="mt-0.5 text-[13px] font-semibold text-brand-navy">Michael Carter · Riverside Medical Center</p>
        <p className="text-[10px] text-brand-muted">Cost Code · 03-100 Concrete</p>
      </div>
      <div className="p-3 sm:p-4">
        <ul className="space-y-1.5">
          {days.map(([d, reg, ot]) => (
            <li key={d} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 bg-[#FAFBFD] px-3 py-2">
              <span className="text-[11px] font-semibold text-brand-navy">{d}</span>
              <span className="text-[10px] text-brand-muted">{reg} · {ot}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
          <div>
            <p className="text-[11px] font-semibold text-brand-navy">Total · 40 Regular · 3 Overtime</p>
            <p className="text-[10px] font-semibold text-brand-orange">Status · SUBMITTED</p>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-md border border-brand-line px-2 py-1 text-[9px] font-semibold text-brand-muted">Save Draft</span>
            <span className="rounded-md bg-brand-navy px-2 py-1 text-[9px] font-semibold text-white">Submit</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfTimesheetApprovalUI() {
  const steps = ["Draft", "Submitted", "Approved", "Processed"];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / timesheets / review" dark>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className={"rounded-md px-2.5 py-1 text-[10px] font-semibold " + (i === 1 ? "bg-brand-orange text-white" : "border border-white/15 text-slate-300")}>{s}</span>
              {i < steps.length - 1 ? <span className="text-slate-500">↓</span> : null}
            </span>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Timesheet Review</p>
          <p className="mt-1 text-[14px] font-semibold text-white">Michael Carter</p>
          <p className="text-[11px] text-slate-400">Week Ending Sep 13</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[["Regular", "40h"], ["Overtime", "3h"], ["Double Time", "0h"]].map(([l, v]) => (
              <div key={l} className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                <p className="text-[9px] text-slate-400">{l}</p>
                <p className="text-[12px] font-bold text-white">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-300">Project · Riverside Medical Center</p>
          <p className="text-[10px] font-semibold text-brand-orange">Status · Submitted</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-semibold text-white">Approve</span>
            <span className="rounded-md border border-white/20 px-3 py-1.5 text-[10px] font-semibold text-white">Return for Review</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfCertificationsUI() {
  const rows = [
    { w: "Michael Carter", cert: "Electrical License", exp: "Nov 18, 2026", status: "Current", tone: "text-emerald-700" },
    { w: "James Wilson", cert: "OSHA 30", exp: "Sep 22, 2026", status: "Expiring Soon", tone: "text-brand-orange" },
    { w: "Daniel Brooks", cert: "Safety Certification", exp: "Sep 08, 2026", status: "Expired", tone: "text-amber-700" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / certifications">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Certification Status</p>
          <span className="text-[10px] font-semibold text-brand-orange">Review Certifications →</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {[["Current", "186"], ["Expiring Soon", "12"], ["Expired", "4"]].map(([l, v], i) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-brand-soft/50 px-2 py-2 text-center">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`text-[14px] font-bold ${i === 1 ? "text-brand-orange" : i === 2 ? "text-amber-700" : "text-emerald-700"}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[520px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Certification", "Expires", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.w + r.cert} className="border-b border-slate-100 last:border-0 bg-white">
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.w}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.cert}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.exp}</td>
                  <td className={`whitespace-nowrap px-2.5 py-2.5 font-semibold ${r.tone}`}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WfPayrollSummaryUI() {
  const rows = [
    { w: "Michael Carter", reg: "40", ot: "3", dt: "0", cls: "Electrician" },
    { w: "James Wilson", reg: "40", ot: "6", dt: "0", cls: "Carpenter" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / workforce / payroll-summary" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Payroll Summary</p>
        <p className="mt-0.5 text-[12px] text-slate-300">Period · Sep 07 – Sep 13, 2026</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[["Workers", "124"], ["Regular Hours", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Fringe", "$18,420"], ["Status", "READY FOR REVIEW"]].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
          <table className="min-w-[480px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-white/10 text-[9px] uppercase tracking-wide text-slate-400">
                {["Worker", "Regular", "OT", "DT", "Classification"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.w} className="border-b border-white/10 last:border-0">
                  <td className="whitespace-nowrap px-2.5 py-2 font-semibold text-white">{r.w}</td>
                  <td className="px-2.5 py-2 text-slate-300">{r.reg}</td>
                  <td className="px-2.5 py-2 text-slate-300">{r.ot}</td>
                  <td className="px-2.5 py-2 text-slate-300">{r.dt}</td>
                  <td className="whitespace-nowrap px-2.5 py-2 text-slate-300">{r.cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="mt-3 inline-block text-[10px] font-semibold text-brand-orange">Review Payroll Summary →</span>
      </div>
    </BrowserFrame>
  );
}

export function WfCostFlowUI() {
  const costs = [
    ["Electrical", "$84,240"],
    ["Concrete", "$62,480"],
    ["MEP", "$51,920"],
  ];
  const steps = ["Worker", "Timesheet", "Approval", "Actual Labor Cost", "Project Cost"];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <ol className="mb-5 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-lg border border-brand-line bg-[#FAFBFD] px-2.5 py-1.5 text-[11px] font-semibold text-brand-navy">{s}</span>
            {i < steps.length - 1 ? <span className="text-brand-muted">↓</span> : null}
          </li>
        ))}
      </ol>
      <div className="rounded-xl border border-slate-200 bg-[#FAFBFD] p-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Riverside Medical Center · Labor Cost</p>
        <ul className="mt-2 space-y-1.5">
          {costs.map(([t, v]) => (
            <li key={t} className="flex justify-between rounded-lg bg-white px-3 py-2 text-[11px]">
              <span className="font-semibold text-brand-navy">{t}</span>
              <span className="text-brand-muted">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Time / Labor (TIME module) — timesheets, cost codes, approval */

export function TimeOverviewUI() {
  const rows = [
    { w: "Michael Carter", proj: "Riverside Medical Center", cc: "03-100", reg: "40h", ot: "3h", status: "Submitted", tone: "text-brand-orange" },
    { w: "James Wilson", proj: "Harbor Office Complex", cc: "06-200", reg: "40h", ot: "6h", status: "Approved", tone: "text-emerald-700" },
    { w: "Daniel Brooks", proj: "North Campus Expansion", cc: "22-100", reg: "38h", ot: "0h", status: "Draft", tone: "text-brand-muted" },
  ];
  const bars = [72, 85, 68, 90, 78, 82, 88];
  return (
    <BrowserFrame url="app.vertexcms.com / time">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Time &amp; Labor</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Regular Hours", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Pending Approval", "28"]].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-2.5 py-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[14px] font-bold ${i === 1 || i === 3 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mb-3 flex h-16 items-end gap-1 rounded-xl border border-slate-200 bg-white px-3 pb-2 pt-3">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-brand-blue/60" style={{ height: `${h}%` }} />
          ))}
        </div>
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Time Entries</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[620px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Project", "Cost Code", "Regular", "OT", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.w} className={"border-b border-slate-100 last:border-0 " + (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")}>
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.w}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.proj}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.cc}</td>
                  <td className="px-2.5 py-2.5 text-brand-navy">{r.reg}</td>
                  <td className="px-2.5 py-2.5 text-brand-navy">{r.ot}</td>
                  <td className={`whitespace-nowrap px-2.5 py-2.5 font-semibold ${r.tone}`}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TimeWeeklyUI() {
  const days = [
    ["Mon", "8", "0", "0"],
    ["Tue", "8", "0", "0"],
    ["Wed", "8", "2", "0"],
    ["Thu", "8", "1", "0"],
    ["Fri", "8", "0", "0"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / time / timesheets / weekly">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Weekly Timesheet</p>
        <p className="mt-0.5 text-[13px] font-semibold text-brand-navy">Week Ending September 13, 2026</p>
        <p className="text-[10px] text-brand-muted">Michael Carter · Riverside Medical Center · Cost Code 03-100</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[320px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Day", "Reg", "OT", "DT"].map((h) => (
                  <th key={h} className="px-3 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map(([d, r, o, dt]) => (
                <tr key={d} className="border-b border-slate-100 bg-white">
                  <td className="px-3 py-2 font-semibold text-brand-navy">{d}</td>
                  <td className="px-3 py-2 text-brand-muted">{r}</td>
                  <td className="px-3 py-2 text-brand-muted">{o}</td>
                  <td className="px-3 py-2 text-brand-muted">{dt}</td>
                </tr>
              ))}
              <tr className="bg-brand-soft/50 font-semibold">
                <td className="px-3 py-2 text-brand-navy">Total</td>
                <td className="px-3 py-2 text-brand-navy">40</td>
                <td className="px-3 py-2 text-brand-orange">3</td>
                <td className="px-3 py-2 text-brand-navy">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Status · Submitted</p>
          <div className="flex gap-1.5">
            <span className="rounded-md border border-brand-line px-2 py-1 text-[9px] font-semibold text-brand-muted">Save Draft</span>
            <span className="rounded-md bg-brand-navy px-2 py-1 text-[9px] font-semibold text-white">Submit</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TimeEntryUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / time / entries">
      <div className="grid gap-3 p-3 sm:grid-cols-[1.1fr_0.9fr] sm:p-4">
        <div className="rounded-xl border border-slate-200 bg-white p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Time Entry</p>
          <ul className="mt-3 space-y-2">
            {[["Worker", "Michael Carter"], ["Work Date", "Sep 09, 2026"], ["Project", "Riverside Medical Center"], ["Cost Code", "03-100 Concrete"], ["Work Classification", "Journeyman"], ["Regular", "8.0 hrs"], ["Overtime", "2.0 hrs"], ["Double Time", "0.0 hrs"], ["Fringe Rate", "$8.50"], ["Status", "Draft"]].map(([l, v]) => (
              <li key={l} className="flex justify-between border-b border-slate-100 pb-2 last:border-0">
                <span className="text-[11px] text-brand-muted">{l}</span>
                <span className={"text-[11px] font-semibold " + (l === "Status" ? "text-brand-orange" : "text-brand-navy")}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-[#FAFBFD] p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Project Context</p>
          <ul className="mt-3 space-y-2">
            {[["Project", "Riverside Medical Center"], ["Cost Code", "03-100"], ["Classification", "Journeyman"]].map(([l, v]) => (
              <li key={l} className="rounded-lg bg-white px-2.5 py-2">
                <p className="text-[9px] text-brand-muted">{l}</p>
                <p className="text-[11px] font-semibold text-brand-navy">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TimeLaborBreakdownUI() {
  const bars = [88, 22, 8];
  return (
    <BrowserFrame url="app.vertexcms.com / time / labor-breakdown" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Labor Hours</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Regular", "7,158 hrs"], ["Overtime", "684 hrs"], ["Double Time", "112 hrs"], ["Total", "7,954 hrs"]].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[14px] font-bold ${i === 1 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-24 items-end gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-3 pt-4">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-md bg-brand-blue/70" style={{ height: `${h}%` }} />
              <span className="text-[8px] text-slate-400">{["Reg", "OT", "DT"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TimeProjectLaborUI() {
  const projects = [
    { name: "Riverside Medical Center", reg: "1,962", ot: "184", dt: "38", total: "2,184" },
    { name: "Harbor Office Complex", reg: "1,698", ot: "112", dt: "32", total: "1,842" },
    { name: "North Campus Expansion", reg: "1,318", ot: "88", dt: "20", total: "1,426" },
    { name: "Eastside Renovation", reg: "912", ot: "52", dt: "20", total: "984" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / time / project-labor">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Project Labor</p>
          <span className="text-[10px] font-semibold text-brand-orange">View Project Labor →</span>
        </div>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        {projects.map((p, i) => (
          <div key={p.name} className={"rounded-xl border border-slate-200 p-3 " + (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")}>
            <p className="text-[12px] font-semibold text-brand-navy">{p.name}</p>
            <div className="mt-2 grid grid-cols-4 gap-2 text-[10px]">
              {[["Regular", p.reg], ["OT", p.ot], ["DT", p.dt], ["Total", p.total]].map(([l, v]) => (
                <div key={l}>
                  <p className="text-brand-muted">{l}</p>
                  <p className="font-semibold text-brand-navy">{v} hrs</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function TimeCostCodeUI() {
  const rows = [
    { cc: "03-100", desc: "Concrete", reg: "840", ot: "62", total: "902" },
    { cc: "06-200", desc: "Carpentry", reg: "612", ot: "48", total: "660" },
    { cc: "09-900", desc: "Finishes", reg: "480", ot: "36", total: "516" },
    { cc: "22-100", desc: "Plumbing", reg: "520", ot: "38", total: "558" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / time / cost-codes">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Cost Code Labor</p>
        <p className="mt-0.5 text-[13px] font-semibold text-brand-navy">Riverside Medical Center</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["All Cost Codes", "Labor"].map((f, i) => (
            <span key={f} className={"rounded-md px-2.5 py-1 text-[10px] font-semibold " + (i === 0 ? "bg-brand-navy text-white" : "border border-brand-line text-brand-muted")}>{f}</span>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[480px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Cost Code", "Description", "Regular", "OT", "Total"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.cc} className="border-b border-slate-100 last:border-0 bg-white">
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.cc}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.desc}</td>
                  <td className="px-2.5 py-2.5 text-brand-muted">{r.reg}</td>
                  <td className="px-2.5 py-2.5 text-brand-muted">{r.ot}</td>
                  <td className="px-2.5 py-2.5 font-semibold text-brand-navy">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TimeWorkflowUI() {
  const stages = [
    ["Draft", "Time is being prepared."],
    ["Submitted", "Ready for review."],
    ["Approved", "Reviewed by the appropriate project team."],
    ["Processed", "Ready for the next payroll-related workflow."],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / time / review" dark>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {stages.map(([s], i) => (
            <span key={s} className="flex items-center gap-2">
              <span className={"rounded-md px-2.5 py-1 text-[10px] font-semibold " + (i === 1 ? "bg-brand-orange text-white" : "border border-white/15 text-slate-300")}>{s}</span>
              {i < stages.length - 1 ? <span className="text-slate-500">↓</span> : null}
            </span>
          ))}
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <ul className="space-y-2">
            {stages.map(([t, d]) => (
              <li key={t} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <p className="text-[11px] font-semibold text-white">{t}</p>
                <p className="text-[10px] text-slate-400">{d}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Timesheet Review</p>
            <p className="mt-1 text-[13px] font-semibold text-white">Michael Carter</p>
            <p className="text-[10px] text-slate-400">Week Ending Sep 13, 2026</p>
            <p className="mt-2 text-[11px] text-slate-300">Regular 40h · OT 3h · DT 0h</p>
            <p className="text-[10px] text-slate-400">Riverside Medical Center</p>
            <p className="mt-1 text-[10px] font-semibold text-brand-orange">Submitted</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-semibold text-white">Approve</span>
              <span className="rounded-md border border-white/20 px-3 py-1.5 text-[10px] font-semibold text-white">Return for Review</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function TimeApprovalQueueUI() {
  const rows = [
    { w: "Michael Carter", p: "Riverside Medical Center", hrs: "43h" },
    { w: "James Wilson", p: "Harbor Office Complex", hrs: "46h" },
    { w: "Daniel Brooks", p: "North Campus Expansion", hrs: "38h" },
    { w: "Sarah Mitchell", p: "Eastside Renovation", hrs: "41h" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / time / approvals">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Timesheets Pending Review</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["All", "My Projects", "Pending", "Approved", "Returned"].map((f, i) => (
            <span key={f} className={"rounded-md px-2 py-1 text-[9px] font-semibold " + (i === 2 ? "bg-brand-navy text-white" : "border border-brand-line text-brand-muted")}>{f}</span>
          ))}
        </div>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        {rows.map((r, i) => (
          <div key={r.w} className={"flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 px-3 py-2.5 " + (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")}>
            <div>
              <p className="text-[12px] font-semibold text-brand-navy">{r.w}</p>
              <p className="text-[10px] text-brand-muted">{r.p} · {r.hrs}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-brand-orange">Submitted</span>
              <span className="rounded-md border border-brand-line px-2 py-1 text-[9px] font-semibold text-brand-navy">Review</span>
              <span className="rounded-md bg-brand-navy px-2 py-1 text-[9px] font-semibold text-white">Approve</span>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function TimeCostConnectionUI() {
  const steps = ["Time Entry", "Timesheet", "Approval", "Approved Labor", "Actual Project Cost"];
  const costs = [
    ["Electrical", "$84,240"],
    ["Concrete", "$62,480"],
    ["MEP", "$51,920"],
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <ol className="mb-4 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-lg border border-white/15 bg-white/[0.05] px-2.5 py-1.5 text-[10px] font-semibold text-white">{s}</span>
            {i < steps.length - 1 ? <span className="text-slate-500">↓</span> : null}
          </li>
        ))}
      </ol>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Project Cost · Riverside Medical Center</p>
        <ul className="mt-2 space-y-1.5">
          {costs.map(([t, v]) => (
            <li key={t} className="flex justify-between text-[11px]">
              <span className="text-slate-300">{t}</span>
              <span className="font-semibold text-white">{v}</span>
            </li>
          ))}
          <li className="flex justify-between border-t border-white/10 pt-2 text-[11px] font-semibold">
            <span className="text-white">Total Labor</span>
            <span className="text-brand-orange">$198,640</span>
          </li>
        </ul>
        <p className="mt-2 text-[9px] text-slate-500">Based on approved labor activity.</p>
      </div>
    </div>
  );
}

export function TimePayrollSummaryUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / time / payroll-summary">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Payroll Time Summary</p>
        <p className="mt-0.5 text-[12px] text-brand-muted">Period · Sep 07 – Sep 13, 2026</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[["Workers", "124"], ["Regular Hours", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Work Classifications", "18"], ["Status", "READY FOR REVIEW"]].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-2.5 py-2">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <span className="mt-4 inline-block text-[10px] font-semibold text-brand-orange">View Payroll Summary →</span>
      </div>
    </BrowserFrame>
  );
}

function TimeMobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-shell mx-auto w-[220px] sm:w-[236px]" aria-hidden="true">
      <div className="mx-auto mt-2.5 h-1.5 w-16 rounded-full bg-slate-300" />
      <div className="min-h-[380px] px-3.5 pb-2 pt-2.5">{children}</div>
      <div className="flex justify-between border-t border-slate-100 px-3 py-2.5 text-[8px] text-brand-muted">
        {["Time", "Projects", "Submit", "More"].map((t, i) => (
          <span key={t} className={i === 0 ? "font-semibold text-brand-navy" : ""}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function TimeMobileEntryUI() {
  return (
    <div className="flex justify-center py-2">
      <TimeMobileFrame>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Time Entry</p>
        <p className="mt-1 text-[12px] font-semibold text-brand-navy">Today · Sep 09</p>
        <div className="mt-3 space-y-2">
          {[["Project", "Riverside Medical Center"], ["Cost Code", "03-100"], ["Regular", "8.0"], ["Overtime", "2.0"], ["Double Time", "0"], ["Notes", "Concrete placement"]].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-slate-200 bg-brand-soft/50 px-2.5 py-2">
              <p className="text-[8px] text-brand-muted">{l}</p>
              <p className="text-[11px] font-semibold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-1.5">
          <span className="flex-1 rounded-md border border-brand-line py-2 text-center text-[9px] font-semibold text-brand-muted">Save Draft</span>
          <span className="flex-1 rounded-md bg-brand-navy py-2 text-center text-[9px] font-semibold text-white">Submit</span>
        </div>
      </TimeMobileFrame>
    </div>
  );
}

export function TimeSummaryUI() {
  const projects = [
    ["Riverside Medical Center", 88],
    ["Harbor Office Complex", 72],
    ["North Campus Expansion", 58],
    ["Eastside Renovation", 42],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / time / summary">
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[["Total Hours", "7,954"], ["Regular", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Pending Approval", "28"], ["Approved", "7,426"]].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-white px-2.5 py-2.5">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-1 text-[13px] font-bold ${i === 2 || i === 4 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Labor by Project</p>
        <div className="space-y-2">
          {projects.map(([p, w]) => (
            <div key={p} className="flex items-center gap-3">
              <span className="w-[140px] shrink-0 truncate text-[10px] font-semibold text-brand-navy">{p}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-soft">
                <div className="h-full rounded-full bg-brand-blue/70" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/** Payroll Readiness (PAYROLL + TIME) marketing mockups */

export function PrOverviewUI() {
  const rows = [
    { w: "Michael Carter", cls: "Electrician", reg: "40h", ot: "3h", dt: "0h", status: "Approved", tone: "text-emerald-700" },
    { w: "James Wilson", cls: "Carpenter", reg: "40h", ot: "6h", dt: "0h", status: "Approved", tone: "text-emerald-700" },
    { w: "Daniel Brooks", cls: "Pipefitter", reg: "38h", ot: "0h", dt: "0h", status: "Approved", tone: "text-emerald-700" },
    { w: "Sarah Mitchell", cls: "Laborer", reg: "40h", ot: "2h", dt: "1h", status: "Pending Review", tone: "text-brand-orange" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Payroll Readiness</p>
            <p className="mt-0.5 text-[12px] font-semibold text-brand-navy">Payroll Period · Sep 07 – Sep 13, 2026</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Payroll Readiness</p>
            <p className="text-[14px] font-bold text-emerald-700">92%</p>
            <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">Ready for Review</p>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[["Workers", "124"], ["Approved Hours", "7,954"], ["Regular", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Pending Review", "18"]].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-2 py-2">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className={`mt-0.5 text-[13px] font-bold ${i >= 3 && i <= 5 ? "text-brand-orange" : "text-brand-navy"}`}>{v}</p>
            </div>
          ))}
        </div>
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Workforce Payroll Summary</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[580px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Classification", "Regular", "OT", "DT", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.w} className={"border-b border-slate-100 last:border-0 " + (i === 3 ? "bg-brand-orange/[0.04]" : "bg-white")}>
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.w}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.cls}</td>
                  <td className="px-2.5 py-2.5">{r.reg}</td>
                  <td className="px-2.5 py-2.5">{r.ot}</td>
                  <td className="px-2.5 py-2.5">{r.dt}</td>
                  <td className={`whitespace-nowrap px-2.5 py-2.5 font-semibold ${r.tone}`}>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PrWorkflowUI() {
  const steps = [
    ["Time Entry", "Record project labor."],
    ["Timesheet", "Organize hours by worker and project."],
    ["Submitted", "Send the timesheet for review."],
    ["Approved", "Confirm the hours are ready to move forward."],
    ["Payroll Summary", "Organize approved workforce information by payroll period."],
    ["Ready for Review", "Give the next workflow a clear, organized starting point."],
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <ol className="space-y-2.5">
        {steps.map(([t, d], i) => (
          <li key={t} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-orange/40 bg-brand-orange/10 font-mono text-[10px] font-bold text-brand-orange">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 rounded-xl border border-brand-line bg-[#FAFBFD] px-3.5 py-2.5">
              <p className="text-[13px] font-semibold text-brand-navy">{t}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{d}</p>
            </div>
            {i < steps.length - 1 ? <span className="hidden text-brand-muted sm:inline">↓</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PrPeriodUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / period">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Payroll Period</p>
        <p className="mt-0.5 text-[14px] font-semibold text-brand-navy">Sep 07 – Sep 13, 2026</p>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">Status · Ready for Review</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[["Workers", "124"], ["Regular Hours", "7,158"], ["Overtime", "684"], ["Double Time", "112"], ["Total Hours", "7,954"]].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-slate-200 bg-brand-soft/40 px-2.5 py-2">
              <p className="text-[9px] text-brand-muted">{l}</p>
              <p className="mt-0.5 text-[12px] font-bold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Approval Status</p>
          <ul className="mt-2 space-y-1.5">
            {[["Approved", "7,426 hrs", "text-emerald-700"], ["Pending", "528 hrs", "text-brand-orange"], ["Returned", "96 hrs", "text-amber-700"]].map(([l, v, c]) => (
              <li key={l} className="flex justify-between text-[11px]">
                <span className="text-brand-muted">{l}</span>
                <span className={`font-semibold ${c}`}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <span className="mt-3 inline-block text-[10px] font-semibold text-brand-orange">Review Pending Time →</span>
      </div>
    </BrowserFrame>
  );
}

export function PrWorkerPayUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / workers / emp-1042">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Worker Pay Profile</p>
        <p className="mt-0.5 text-[15px] font-semibold text-brand-navy">Michael Carter</p>
        <p className="text-[11px] text-brand-muted">Employee # EMP-1042</p>
        <ul className="mt-4 space-y-2">
          {[["Trade", "Electrician"], ["Classification", "Journeyman"], ["Pay Type", "Hourly"], ["Pay Rate", "$42.00/hr"], ["Union", "Local 118"], ["Status", "Active"]].map(([l, v]) => (
            <li key={l} className="flex justify-between rounded-lg border border-slate-100 bg-[#FAFBFD] px-3 py-2">
              <span className="text-[11px] text-brand-muted">{l}</span>
              <span className="text-[11px] font-semibold text-brand-navy">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function PrLaborBreakdownUI() {
  const bars = [88, 22, 8, 95];
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / labor" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Labor Hours</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Regular", "7,158 hrs"], ["Overtime", "684 hrs"], ["Double Time", "112 hrs"], ["Total", "7,954 hrs"]].map(([l, v], i) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2.5">
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className={`mt-1 text-[13px] font-bold ${i === 1 ? "text-brand-orange" : "text-white"}`}>{v}</p>
            </div>
          ))}
        </div>
        <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Weekly Labor Trend</p>
        <div className="flex h-20 items-end gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 pb-2 pt-3">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-brand-blue/60" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PrClassificationUI() {
  const summary = [
    ["Journeyman Electrician", "42 workers", "2,184 hrs"],
    ["Apprentice Electrician", "18 workers", "846 hrs"],
    ["Foreman", "12 workers", "612 hrs"],
    ["Laborer", "31 workers", "1,842 hrs"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / classification">
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_1fr] sm:p-4">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Work Classification</p>
          <p className="mt-2 text-[12px] font-semibold text-brand-navy">Michael Carter</p>
          <ul className="mt-2 space-y-1 text-[10px] text-brand-muted">
            <li>Project · Riverside Medical Center</li>
            <li>Classification · Journeyman Electrician</li>
            <li>Regular 40h · OT 3h · DT 0h</li>
            <li className="font-semibold text-emerald-700">Approved</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-[#FAFBFD] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Classification Summary</p>
          <ul className="mt-2 space-y-1.5">
            {summary.map(([c, w, h]) => (
              <li key={c} className="rounded-lg bg-white px-2.5 py-2">
                <p className="text-[11px] font-semibold text-brand-navy">{c}</p>
                <p className="text-[10px] text-brand-muted">{w} · {h}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PrFringeUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / labor-detail">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Labor Detail</p>
        <ul className="mt-3 space-y-2">
          {[["Worker", "Michael Carter"], ["Classification", "Journeyman Electrician"], ["Regular Hours", "40"], ["Overtime", "3"], ["Fringe Rate", "$8.50"], ["Project", "Riverside Medical Center"], ["Status", "Approved"]].map(([l, v]) => (
            <li key={l} className="flex justify-between rounded-lg border border-slate-100 bg-[#FAFBFD] px-3 py-2">
              <span className="text-[11px] text-brand-muted">{l}</span>
              <span className={"text-[11px] font-semibold " + (l === "Status" ? "text-emerald-700" : "text-brand-navy")}>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function PrSummaryUI() {
  const rows = [
    { w: "Michael Carter", cls: "Electrician", reg: "40", ot: "3", dt: "0", status: "Approved" },
    { w: "James Wilson", cls: "Carpenter", reg: "40", ot: "6", dt: "0", status: "Approved" },
    { w: "Daniel Brooks", cls: "Pipefitter", reg: "38", ot: "0", dt: "0", status: "Approved" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / summary">
      <div className="border-b border-slate-100 px-4 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Payroll Summary</p>
        <p className="mt-0.5 text-[12px] text-brand-muted">Period · Sep 07 – Sep 13, 2026</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Workers", "124"], ["Regular Hours", "7,158"], ["Overtime", "684"], ["Total Hours", "7,954"]].map(([l, v]) => (
            <div key={l} className="rounded-lg bg-brand-soft/50 px-2 py-1.5">
              <p className="text-[8px] text-brand-muted">{l}</p>
              <p className="text-[11px] font-bold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Worker Summary</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[480px] w-full text-left text-[10px]">
            <thead>
              <tr className="border-b border-slate-100 bg-brand-soft/70 text-[9px] uppercase tracking-wide text-brand-muted">
                {["Worker", "Classification", "Regular", "OT", "DT", "Status"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-2.5 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.w} className="border-b border-slate-100 last:border-0 bg-white">
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-brand-navy">{r.w}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 text-brand-muted">{r.cls}</td>
                  <td className="px-2.5 py-2.5">{r.reg}</td>
                  <td className="px-2.5 py-2.5">{r.ot}</td>
                  <td className="px-2.5 py-2.5">{r.dt}</td>
                  <td className="whitespace-nowrap px-2.5 py-2.5 font-semibold text-emerald-700">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-brand-navy px-3 py-1.5 text-[10px] font-semibold text-white">Review Summary</span>
          <span className="rounded-md border border-brand-line px-3 py-1.5 text-[10px] font-semibold text-brand-navy">View Details</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PrReviewUI() {
  const issues = [
    "18 Timesheets Pending Approval",
    "6 Worker Records Need Review",
    "4 Classification Records Need Review",
    "3 Missing Labor Details",
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / review" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Payroll Review</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-3 text-center">
            <p className="text-[9px] text-slate-400">Ready</p>
            <p className="text-[22px] font-bold text-emerald-300">92%</p>
          </div>
          <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/10 px-3 py-3 text-center">
            <p className="text-[9px] text-slate-400">Needs Attention</p>
            <p className="text-[22px] font-bold text-brand-orange">8%</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">Needs Attention</p>
          <ul className="mt-2 space-y-1.5">
            {issues.map((i) => (
              <li key={i} className="text-[11px] text-slate-300">{i}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-semibold text-white">Review Issues</span>
          <span className="rounded-md border border-white/20 px-3 py-1.5 text-[10px] font-semibold text-white">View Payroll Summary</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PrProjectLaborUI() {
  const steps = ["Worker", "Time", "Project", "Cost Code", "Approval", "Payroll Readiness"];
  const labor = [["Electrical", "2,184 hrs"], ["Concrete", "1,842 hrs"], ["MEP", "1,426 hrs"]];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6" aria-hidden="true">
      <ol className="mb-4 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-lg border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[10px] font-semibold text-brand-navy">{s}</span>
            {i < steps.length - 1 ? <span className="text-brand-muted">↓</span> : null}
          </li>
        ))}
      </ol>
      <div className="rounded-xl border border-slate-200 bg-[#FAFBFD] p-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] font-semibold text-brand-navy">Riverside Medical Center · Approved Labor</p>
          <span className="text-[10px] font-semibold text-brand-orange">View Project Labor →</span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {labor.map(([t, h]) => (
            <li key={t} className="flex justify-between rounded-lg bg-white px-3 py-2 text-[11px]">
              <span className="font-semibold text-brand-navy">{t}</span>
              <span className="text-brand-muted">{h}</span>
            </li>
          ))}
          <li className="flex justify-between border-t border-brand-line pt-2 text-[11px] font-semibold">
            <span className="text-brand-navy">Total</span>
            <span className="text-brand-navy">5,452 hrs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function PrDataQualityUI() {
  const ok = [
    "Worker information complete",
    "Classification assigned",
    "Timesheet approved",
    "Regular hours recorded",
    "Overtime hours reviewed",
  ];
  const warn = [
    ["Missing classification", "James Wilson"],
    ["Timesheet pending approval", "Sarah Mitchell"],
    ["Worker record requires review", "Daniel Brooks"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / payroll-readiness / check">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Payroll Readiness Check</p>
        <ul className="mt-3 space-y-1.5">
          {ok.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[11px] text-emerald-700">
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-orange">Needs attention</p>
        <ul className="space-y-2">
          {warn.map(([issue, who]) => (
            <li key={issue} className="rounded-lg border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-2">
              <p className="text-[11px] font-semibold text-brand-navy">! {issue}</p>
              <p className="text-[10px] text-brand-muted">{who}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

/** AI Assistant (AI module) marketing mockups */

function AiSourceChips({ sources, dark = false }: { sources: string[]; dark?: boolean }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {sources.map((s) => (
        <span
          key={s}
          className={
            "rounded-md px-2 py-0.5 text-[9px] font-semibold " +
            (dark
              ? "border border-white/15 bg-white/10 text-slate-300"
              : "border border-brand-line bg-white text-brand-muted")
          }
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export function AiHeroUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-slate-200">
            Riverside Medical Center ▾
          </div>
          <span className="text-[10px] font-semibold text-brand-orange">AI Assistant</span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2.5 text-[12px] text-slate-200">
          What&apos;s putting the project at risk this week?
        </div>
        <div className="ml-auto mt-3 max-w-[95%] rounded-2xl rounded-tr-md border border-brand-orange/25 bg-brand-dark/50 px-3.5 py-3">
          <p className="text-[11px] font-semibold text-brand-orange">Three areas need attention:</p>
          <ul className="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-100">
            <li>Schedule is currently 3 days behind.</li>
            <li>Cost variance is 2.4% above the current baseline.</li>
            <li>28 punch items remain open.</li>
          </ul>
          <p className="mb-1 mt-3 text-[9px] font-semibold uppercase text-slate-400">Sources</p>
          <AiSourceChips sources={["Projects", "Budget & Job Cost", "Punch", "Daily Logs"]} dark />
          <span className="mt-2 inline-block text-[10px] font-semibold text-brand-orange">View Sources →</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiWorkspaceUI() {
  const recent = ["Project Status Review", "Cost Review", "RFI Summary", "Weekly Field Review"];
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / workspace" dark>
      <div className="grid lg:grid-cols-[130px_1fr]">
        <aside className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">AI Assistant</p>
          <p className="mt-2 rounded-md border border-brand-orange/30 bg-brand-orange/10 px-2 py-1 text-[9px] font-semibold text-brand-orange">
            + New Conversation
          </p>
          <p className="mb-1 mt-3 text-[9px] font-semibold uppercase tracking-wide text-slate-500">Recent</p>
          <ul className="space-y-1">
            {recent.map((c, i) => (
              <li
                key={c}
                className={
                  "rounded-md px-2 py-1.5 text-[10px] " +
                  (i === 0 ? "bg-brand-orange/15 font-semibold text-white" : "text-slate-400")
                }
              >
                {c}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-3">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-[12px] font-semibold text-white">AI Assistant</p>
            <span className="text-[10px] text-slate-400">Riverside Medical Center</span>
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[11px] text-slate-200">
            Give me a quick summary of this week&apos;s project status.
          </div>
          <div className="ml-auto mt-3 max-w-[95%] rounded-2xl rounded-tr-md border border-brand-orange/25 bg-brand-dark/50 px-3 py-3">
            <p className="text-[11px] leading-relaxed text-slate-100">
              Riverside Medical Center is progressing, but three areas require attention.
            </p>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {[["Schedule", "3 days behind"], ["Financial", "2.4% cost variance"], ["Field", "28 open punch"]].map(
                ([l, v]) => (
                  <div key={l} className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5">
                    <p className="text-[8px] font-bold uppercase text-brand-orange">{l}</p>
                    <p className="text-[9px] text-slate-300">{v}</p>
                  </div>
                )
              )}
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-200">
              Schedule pressure is primarily associated with open coordination items. Cost movement is currently
              above the project baseline. Field teams also have outstanding punch items that should continue to be
              reviewed.
            </p>
            <p className="mb-1 mt-3 text-[9px] font-semibold uppercase text-slate-400">Sources</p>
            <AiSourceChips sources={["Projects", "Daily Logs", "Budget & Job Cost", "Punch"]} dark />
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-[10px] font-semibold text-brand-orange">View Project →</span>
              <span className="text-[10px] text-slate-400">View Sources →</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiHowItWorksUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">AI Assistant</p>
        <div className="mt-3 max-w-[88%] rounded-2xl rounded-tl-md bg-brand-soft px-3 py-2.5 text-[11px] text-brand-navy">
          Which RFIs are still affecting progress?
        </div>
        <div className="ml-auto mt-2 max-w-[92%] rounded-2xl rounded-tr-md border border-brand-orange/20 bg-white px-3 py-2.5 shadow-soft">
          <p className="text-[11px] leading-relaxed text-brand-navy">
            7 RFIs remain open on Riverside Medical Center. Three are affecting East Wing coordination.
          </p>
          <AiSourceChips sources={["RFIs", "Schedule", "Documents"]} />
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiGroundedUI() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Question</p>
      <p className="mt-1 text-[13px] font-semibold text-white">Why is the project currently behind schedule?</p>
      <div className="mt-4 rounded-xl border border-brand-orange/25 bg-brand-dark/40 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">Answer</p>
        <p className="mt-2 text-[12px] leading-relaxed text-slate-200">
          The project is currently tracking 3 days behind schedule. Recent daily logs indicate delayed material
          delivery, while open RFIs are affecting coordination in the East Wing.
        </p>
        <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Supporting records
        </p>
        <AiSourceChips sources={["Daily Logs", "RFIs", "Project Schedule"]} dark />
        <span className="mt-3 inline-block text-[10px] font-semibold text-brand-orange">View Records →</span>
      </div>
    </div>
  );
}

export function AiGroundedSourcesUI() {
  const sources = [
    { type: "Project", title: "Current Schedule", sub: "3 days behind" },
    { type: "RFI", title: "RFI-018", sub: "Mechanical coordination" },
    { type: "RFI", title: "RFI-024", sub: "Door hardware clarification" },
    { type: "Daily Log", title: "Sep 09, 2026", sub: "East Wing coordination" },
    { type: "Drawing", title: "A-204", sub: "Current revision" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / sources" dark>
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-semibold uppercase text-slate-400">AI conversation</p>
          <div className="mt-3 max-w-[95%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[11px] text-slate-200">
            Why is the project behind schedule?
          </div>
          <div className="mt-2 rounded-xl border border-brand-orange/25 bg-brand-dark/50 px-3 py-2.5">
            <p className="text-[11px] leading-relaxed text-slate-100">
              The project is currently tracking 3 days behind schedule. Recent project activity shows several
              open coordination items that may be contributing to schedule pressure.
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase text-slate-400">Sources</p>
          <ul className="mt-3 space-y-2">
            {sources.map((s) => (
              <li key={s.title} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                <p className="text-[9px] font-bold uppercase text-brand-orange">{s.type}</p>
                <p className="text-[11px] font-semibold text-white">{s.title}</p>
                <p className="text-[10px] text-slate-400">{s.sub}</p>
                <span className="mt-1 inline-block text-[9px] font-semibold text-brand-orange">View record →</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiMultiModuleUI() {
  const modules = ["Projects", "Budget & Job Cost", "Change Orders", "Daily Logs", "Documents", "RFIs"];
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / cross-module">
      <div className="p-4 sm:p-5">
        <div className="rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5">
          <p className="text-[9px] font-bold uppercase text-brand-orange">Question</p>
          <p className="text-[11px] font-medium text-brand-navy">
            Are we at risk of exceeding the current budget because of schedule delays?
          </p>
        </div>
        <div className="my-3 flex justify-center text-brand-muted" aria-hidden="true">
          ↓
        </div>
        <div className="rounded-lg border border-brand-orange/25 bg-brand-orange/[0.04] px-3 py-2.5">
          <p className="text-[9px] font-bold uppercase text-brand-orange">AI Analysis</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {modules.map((m) => (
              <span key={m} className="rounded border border-brand-line bg-white px-2 py-0.5 text-[9px] text-brand-navy">
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="my-3 flex justify-center text-brand-muted" aria-hidden="true">
          ↓
        </div>
        <div className="rounded-lg border border-brand-line bg-white px-3 py-2.5">
          <p className="text-[9px] font-bold uppercase text-brand-orange">Answer</p>
          <p className="mt-1 text-[11px] leading-relaxed text-brand-navy">
            Current cost variance is 2.4%. Several active change orders and schedule-related activities should be
            reviewed before drawing conclusions about additional cost exposure.
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiDrawingUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / drawing">
      <div className="p-4 sm:p-5">
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-brand-soft px-3 py-2 text-[11px] text-brand-navy">
          What changed between Drawing A-204 Rev 05 and Rev 06?
        </div>
        <div className="ml-auto mt-3 max-w-[95%] rounded-xl border border-brand-orange/20 bg-white px-3 py-3 shadow-soft">
          <p className="text-[11px] leading-relaxed text-brand-navy">
            Revision 06 includes updated door hardware coordination and revised mechanical references.
          </p>
          <p className="mb-1 mt-3 text-[9px] font-semibold uppercase text-brand-muted">Source Documents</p>
          <AiSourceChips sources={["A-204 Rev 05", "A-204 Rev 06"]} />
          <p className="mb-1 mt-2 text-[9px] font-semibold uppercase text-brand-muted">Changes</p>
          <ul className="space-y-0.5 text-[10px] text-brand-muted">
            <li>+ Door hardware note</li>
            <li>+ Mechanical reference</li>
            <li>+ Coordination detail</li>
          </ul>
          <span className="mt-2 inline-block text-[10px] font-semibold text-brand-orange">View Drawing →</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiFinancialUI() {
  const rows = [
    ["Concrete", "$1.20M", "$1.25M", "+4.2%"],
    ["Electrical", "$820K", "$846K", "+3.1%"],
    ["Mechanical", "$640K", "$651K", "+1.7%"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / financial">
      <div className="p-4 sm:p-5">
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-brand-soft px-3 py-2 text-[11px] text-brand-navy">
          Where are we seeing the largest cost variance?
        </div>
        <div className="ml-auto mt-3 max-w-[95%] rounded-xl border border-brand-orange/20 bg-white px-3 py-3">
          <p className="text-[11px] leading-relaxed text-brand-navy">
            Concrete and electrical cost categories are currently showing the largest movement against the project
            baseline.
          </p>
          <table className="mt-3 w-full text-[10px]">
            <thead>
              <tr className="border-b border-brand-line text-left text-brand-muted">
                <th className="pb-1 pr-2">Category</th>
                <th className="pb-1 pr-2">Budget</th>
                <th className="pb-1 pr-2">Actual</th>
                <th className="pb-1">Variance</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([cat, bud, act, var_]) => (
                <tr key={cat} className="border-b border-brand-line/60">
                  <td className="py-1.5 font-medium text-brand-navy">{cat}</td>
                  <td className="py-1.5 text-brand-muted">{bud}</td>
                  <td className="py-1.5 text-brand-muted">{act}</td>
                  <td className="py-1.5 font-semibold text-brand-orange">{var_}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <span className="mt-2 inline-block text-[10px] font-semibold text-brand-orange">
            Review Budget & Job Cost →
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiFieldUI() {
  const records = [
    ["Daily Logs", "12 entries"],
    ["Punch", "28 open"],
    ["Photos", "12 recent"],
    ["T&M", "3 draft entries"],
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / field" dark>
      <div className="p-4 sm:p-5">
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[11px] text-slate-200">
          What happened in the field yesterday?
        </div>
        <div className="ml-auto mt-3 max-w-[95%] rounded-xl border border-brand-orange/25 bg-brand-dark/50 px-3 py-3">
          <p className="text-[11px] leading-relaxed text-slate-100">
            12 daily log entries were recorded. The East Wing had 22 workers on site. Material delivery was
            confirmed and three punch items were updated.
          </p>
          <p className="mb-1 mt-3 text-[9px] font-semibold uppercase text-slate-400">Connected records</p>
          <div className="grid grid-cols-2 gap-1.5">
            {records.map(([l, v]) => (
              <div key={l} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
                <p className="text-[9px] text-slate-400">{l}</p>
                <p className="text-[10px] font-semibold text-white">{v}</p>
              </div>
            ))}
          </div>
          <span className="mt-2 inline-block text-[10px] font-semibold text-brand-orange">View Field Activity →</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiDraftConfirmUI() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">AI Action</p>
      <p className="mt-1 text-[14px] font-semibold text-white">Create RFI Draft</p>
      <p className="mb-2 mt-3 text-[10px] font-semibold uppercase text-slate-400">Based on</p>
      <AiSourceChips sources={["RFI context", "Drawing A-204", "Daily Log Sep 09"]} dark />
      <div className="mt-4 rounded-xl border border-brand-orange/25 bg-brand-dark/40 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase text-brand-orange">Draft</p>
        <p className="mt-2 text-[11px] text-slate-300">
          <span className="font-semibold text-white">Subject: </span>Door hardware coordination
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
          &ldquo;Please confirm the revised door hardware requirements shown in the latest drawing revision.&rdquo;
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md border border-white/20 px-3 py-2 text-[10px] font-semibold text-slate-300">
          Review Draft
        </span>
        <span className="rounded-md bg-brand-navy px-3 py-2 text-[10px] font-semibold text-white">
          Confirm & Create
        </span>
        <span className="rounded-md border border-white/20 px-3 py-2 text-[10px] font-semibold text-slate-400">
          Cancel
        </span>
      </div>
    </div>
  );
}

export function AiHistoryUI() {
  const convos = [
    { title: "Project Status Review", when: "Today" },
    { title: "Budget Variance", when: "Yesterday" },
    { title: "RFI Summary", when: "Sep 09" },
    { title: "Drawing Revision Review", when: "Sep 08" },
    { title: "Weekly Field Summary", when: "Sep 07" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / history">
      <div className="grid sm:grid-cols-[160px_1fr]">
        <aside className="border-b border-brand-line p-3 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-semibold uppercase text-brand-orange">AI Assistant</p>
          <div className="mt-2 rounded-md border border-brand-line bg-[#FAFBFD] px-2 py-1.5 text-[10px] text-brand-muted">
            Search conversations…
          </div>
          <p className="mt-2 rounded-md bg-brand-navy px-2 py-1 text-center text-[9px] font-semibold text-white">
            + New conversation
          </p>
          <p className="mb-1 mt-3 text-[9px] font-semibold uppercase text-brand-muted">Riverside Medical Center ▾</p>
          <ul className="space-y-1">
            {convos.map((c, i) => (
              <li
                key={c.title}
                className={
                  "rounded-md px-2 py-1.5 " +
                  (i === 0 ? "border border-brand-orange/30 bg-brand-orange/[0.06]" : "")
                }
              >
                <p className="text-[10px] font-semibold text-brand-navy">{c.title}</p>
                <p className="text-[9px] text-brand-muted">{c.when}</p>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex items-center justify-center p-6 text-[11px] text-brand-muted">
          Select a conversation to continue
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AiConfirmUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / ai-assistant / confirm">
      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/[0.06] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">AI Action</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Update project status</p>
          <p className="mt-3 text-[12px] text-brand-muted">AI wants to change project status from</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px]">
            <span className="rounded-md border border-brand-line bg-white px-2.5 py-1 font-semibold text-brand-navy">
              At Risk
            </span>
            <span className="text-brand-muted">to</span>
            <span className="rounded-md border border-brand-orange/30 bg-white px-2.5 py-1 font-semibold text-brand-orange">
              Needs Attention
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-md border border-brand-line bg-white px-4 py-2 text-[11px] font-semibold text-brand-muted">
              Cancel
            </span>
            <span className="rounded-md bg-brand-navy px-4 py-2 text-[11px] font-semibold text-white">
              Confirm Change
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/** Project Intelligence (AI_INTEL module) marketing mockups */

export function PiHeroUI() {
  const suggestions = [
    "What is putting this project at risk?",
    "Where are costs trending above budget?",
    "Which RFIs are affecting progress?",
    "What is causing the schedule variance?",
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / project-intelligence" dark>
      <div className="border-b border-white/10 px-4 py-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[9px] font-bold tracking-[0.12em] text-slate-400">VERTEX CMS</span>
          <span className="text-[10px] text-slate-400">Riverside Medical Center</span>
        </div>
        <p className="mt-1 text-[13px] font-semibold text-white">Project Intelligence</p>
      </div>
      <div className="p-3 sm:p-4">
        <div className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-[11px] text-slate-400">
          Ask anything about this project…
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {suggestions.map((s) => (
            <span
              key={s}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[11px] text-slate-200">
            What is the current project status?
          </div>
          <div className="rounded-xl border border-brand-orange/25 bg-brand-dark/50 px-3.5 py-3">
            <p className="text-[11px] leading-relaxed text-slate-100">
              Riverside Medical Center is currently tracking 3 days behind schedule. Seven RFIs remain open,
              while current cost variance is 2.4%. Recent field activity indicates several coordination items
              require attention.
            </p>
            <AiSourceChips
              sources={["Project", "Budget & Job Cost", "RFIs", "Daily Logs", "Schedule"]}
              dark
            />
            <span className="mt-2 inline-block text-[10px] font-semibold text-brand-orange">
              View supporting records →
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PiWorkspaceUI() {
  const recent = [
    "Project status",
    "Cost variance",
    "Open RFIs",
    "Schedule delay",
    "Field activity",
    "Project risks",
  ];
  const support = [
    { label: "Schedule", value: "3 days behind" },
    { label: "RFIs", value: "7 open" },
    { label: "Daily Logs", value: "Recent coordination issues" },
    { label: "Documents", value: "Current project references" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / project-intelligence / workspace" dark>
      <div className="grid lg:grid-cols-[130px_1fr_145px]">
        <aside className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">
            Project Intelligence
          </p>
          <p className="mb-2 mt-2 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
            Recent questions
          </p>
          <ul className="space-y-1">
            {recent.map((q, i) => (
              <li
                key={q}
                className={
                  "rounded-md px-2 py-1.5 text-[10px] " +
                  (i === 3 ? "bg-brand-orange/15 font-semibold text-white" : "text-slate-400")
                }
              >
                {q}
              </li>
            ))}
          </ul>
        </aside>
        <div className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
          <p className="mb-3 text-[11px] font-semibold text-white">Ask your project</p>
          <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[11px] text-slate-200">
            Why are we currently behind schedule?
          </div>
          <div className="mt-3 rounded-xl border border-brand-orange/25 bg-brand-dark/50 px-3 py-3">
            <p className="text-[11px] leading-relaxed text-slate-100">
              The project is currently tracking 3 days behind schedule. Recent project information indicates
              open RFIs and delayed coordination items are contributing to the variance.
            </p>
            <p className="mb-2 mt-3 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
              Supporting information
            </p>
            <ul className="space-y-1.5">
              {support.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-start justify-between gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5"
                >
                  <span className="text-[10px] font-semibold text-slate-300">{label}</span>
                  <span className="text-right text-[10px] text-slate-400">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="p-3">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Project Context</p>
          <p className="mt-1 text-[11px] font-semibold text-white">Riverside Medical Center</p>
          <div className="mt-2 rounded-md border border-brand-orange/30 bg-brand-orange/10 px-2 py-1 text-[10px] font-semibold text-brand-orange">
            Needs Attention
          </div>
          <ul className="mt-3 space-y-1.5 text-[10px]">
            {[["Schedule", "-3 days"], ["Cost Variance", "2.4%"], ["Open RFIs", "7"], ["Safety", "92"], ["Punch", "28"]].map(
              ([l, v]) => (
                <li key={l} className="flex justify-between text-slate-400">
                  <span>{l}</span>
                  <span className="font-semibold text-slate-200">{v}</span>
                </li>
              )
            )}
          </ul>
        </aside>
      </div>
    </BrowserFrame>
  );
}

export function PiHowItWorksUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / project-intelligence">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Project Intelligence
        </p>
        <div className="mt-3 max-w-[88%] rounded-2xl rounded-tl-md bg-brand-soft px-3 py-2.5 text-[11px] text-brand-navy">
          Where are costs trending above budget?
        </div>
        <div className="ml-auto mt-2 max-w-[92%] rounded-2xl rounded-tr-md border border-brand-orange/20 bg-white px-3 py-2.5 shadow-soft">
          <p className="text-[11px] leading-relaxed text-brand-navy">
            Current cost variance is 2.4%, with the largest variance in concrete and electrical work.
          </p>
          <AiSourceChips sources={["Budget & Job Cost", "Concrete", "Electrical"]} />
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PiConnectedUI() {
  const modules = [
    "Projects",
    "Budget & Job Cost",
    "RFIs",
    "Daily Logs",
    "Drawings",
    "Documents",
    "Punch",
    "Safety",
    "Schedule",
  ];
  return (
    <div
      className="rounded-2xl border border-brand-line bg-white p-5 sm:p-6"
      aria-hidden="true"
    >
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
        {modules.slice(0, 3).map((m) => (
          <div
            key={m}
            className="rounded-lg border border-brand-line bg-[#FAFBFD] px-2 py-2 text-center text-[10px] font-medium text-brand-navy"
          >
            {m}
          </div>
        ))}
      </div>
      <div className="my-2 flex items-center justify-center gap-2">
        <div className="h-px flex-1 bg-brand-line" aria-hidden="true" />
        <div className="rounded-lg border-2 border-brand-orange/40 bg-brand-orange/[0.08] px-4 py-2 text-center">
          <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">Project Intelligence</p>
        </div>
        <div className="h-px flex-1 bg-brand-line" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {modules.slice(3, 6).map((m) => (
          <div
            key={m}
            className="rounded-lg border border-brand-line bg-[#FAFBFD] px-2 py-2 text-center text-[10px] font-medium text-brand-navy"
          >
            {m}
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {modules.slice(6).map((m) => (
          <div
            key={m}
            className="rounded-lg border border-brand-line bg-[#FAFBFD] px-2 py-2 text-center text-[10px] font-medium text-brand-navy"
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PiGroundedUI() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Question</p>
      <p className="mt-1 text-[13px] font-semibold text-white">What is driving the current cost variance?</p>
      <div className="mt-4 rounded-xl border border-brand-orange/25 bg-brand-dark/40 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">AI Response</p>
        <p className="mt-2 text-[12px] leading-relaxed text-slate-200">
          Current cost variance is 2.4%. The largest variance is associated with concrete and electrical work
          based on current job-cost information.
        </p>
        <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Supporting records
        </p>
        <AiSourceChips sources={["Budget & Job Cost", "Concrete", "Electrical"]} dark />
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
          {[["Current Budget", "$4.50M"], ["Projected Cost", "$4.82M"], ["Variance", "+2.4%"]].map(([l, v]) => (
            <div key={l}>
              <p className="text-[9px] text-slate-400">{l}</p>
              <p className="text-[11px] font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
        <span className="mt-3 inline-block text-[10px] font-semibold text-brand-orange">View Cost Details →</span>
      </div>
    </div>
  );
}

export function PiStatusUI() {
  const metrics = [
    { label: "Schedule", value: "3 days behind", warn: true },
    { label: "Cost", value: "2.4% variance", warn: true },
    { label: "RFIs", value: "7 open", warn: false },
    { label: "Safety", value: "92", warn: false },
    { label: "Punch", value: "28 open", warn: false },
    { label: "Daily Logs", value: "Current", warn: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / project-intelligence / status">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Project Status</p>
        <p className="mt-1 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {metrics.map(({ label, value, warn }) => (
            <div
              key={label}
              className={
                "rounded-lg border px-3 py-2 " +
                (warn ? "border-brand-orange/25 bg-brand-orange/[0.04]" : "border-brand-line bg-[#FAFBFD]")
              }
            >
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
              <p className={"mt-0.5 text-[12px] font-semibold " + (warn ? "text-brand-orange" : "text-brand-navy")}>
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-brand-line bg-white px-3 py-3">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">AI Summary</p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-brand-muted">
            Several coordination items are contributing to schedule pressure. Review open RFIs and recent field
            updates for the latest context.
          </p>
        </div>
        <span className="mt-3 inline-block text-[11px] font-semibold text-brand-orange">Review Project →</span>
      </div>
    </BrowserFrame>
  );
}

export function PiConfirmUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / project-intelligence / confirm">
      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/[0.06] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">AI Action</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Update Project Status</p>
          <p className="mt-3 text-[12px] text-brand-muted">AI suggests changing status from</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[12px]">
            <span className="rounded-md border border-brand-line bg-white px-2.5 py-1 font-semibold text-brand-navy">
              On Track
            </span>
            <span className="text-brand-muted">to</span>
            <span className="rounded-md border border-brand-orange/30 bg-white px-2.5 py-1 font-semibold text-brand-orange">
              Needs Attention
            </span>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-brand-muted">
            <span className="font-semibold text-brand-navy">Reason: </span>
            Current schedule variance and open coordination items indicate increased project risk.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-md border border-brand-line bg-white px-4 py-2 text-[11px] font-semibold text-brand-muted">
              Cancel
            </span>
            <span className="rounded-md bg-brand-navy px-4 py-2 text-[11px] font-semibold text-white">
              Confirm Change
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/** Predictive Insights (AI_INTEL module) marketing mockups */

function PredSeverityBadge({
  level,
}: {
  level: "HIGH" | "MEDIUM" | "LOW" | "high" | "medium" | "low" | "monitor" | "ops";
}) {
  const normalized =
    level === "high" ? "HIGH" : level === "medium" ? "MEDIUM" : level === "low" ? "LOW" : level;
  const styles = {
    HIGH: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
    MEDIUM: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    LOW: "border-white/15 bg-white/[0.06] text-slate-300",
    monitor: "border-white/15 bg-white/[0.06] text-slate-300",
    ops: "border-white/15 bg-white/[0.06] text-slate-300",
  };
  return (
    <span
      className={
        "rounded-md border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide " +
        styles[normalized as keyof typeof styles]
      }
    >
      {normalized}
    </span>
  );
}

function PredTrendArrow({ direction }: { direction: "up" | "down" | "flat" }) {
  const map = {
    up: { glyph: "↗", cls: "text-brand-orange" },
    down: { glyph: "↘", cls: "text-slate-300" },
    flat: { glyph: "→", cls: "text-slate-400" },
  };
  const { glyph, cls } = map[direction];
  return <span className={"text-[11px] font-bold " + cls}>{glyph}</span>;
}

export function PredHeroUI() {
  const metrics = [
    { label: "Project Health", value: "At Risk", warn: true },
    { label: "Cost Forecast", value: "+$320K variance", warn: true },
    { label: "Schedule Forecast", value: "+8 days", warn: true },
    { label: "Open Risk Signals", value: "7", warn: false },
    { label: "Critical Signals", value: "2", warn: true },
  ];
  const trends = [
    { label: "Cost trend", direction: "up" as const, status: "Increasing" },
    { label: "Schedule trend", direction: "up" as const, status: "Increasing" },
    { label: "Labor performance", direction: "flat" as const, status: "Stable" },
    { label: "Open issue trend", direction: "up" as const, status: "Increasing" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights" dark>
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-orange">Project Intelligence</p>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[12px] font-semibold text-white">Riverside Medical Center</p>
          <PredSeverityBadge level="HIGH" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:p-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className={
              "rounded-lg border px-2.5 py-2 " +
              (m.warn ? "border-brand-orange/25 bg-brand-orange/[0.06]" : "border-white/10 bg-white/[0.04]")
            }
          >
            <p className="text-[8px] text-slate-400">{m.label}</p>
            <p className={"mt-0.5 text-[12px] font-bold " + (m.warn ? "text-brand-orange" : "text-white")}>
              {m.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-3 mb-3 grid grid-cols-2 gap-2 sm:mx-4 sm:mb-4 sm:grid-cols-4">
        {trends.map((t) => (
          <div key={t.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <p className="text-[8px] text-slate-400">{t.label}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <PredTrendArrow direction={t.direction} />
              <p className="text-[10px] font-semibold text-white">{t.status}</p>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function PredShowcaseUI() {
  const signals = [
    { label: "Cost signals", value: "12 active", trend: "up" as const },
    { label: "Schedule signals", value: "8 active", trend: "up" as const },
    { label: "Field signals", value: "5 active", trend: "flat" as const },
    { label: "Workflow signals", value: "9 active", trend: "up" as const },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / signals" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-orange">Signal Analysis</p>
        <p className="mt-0.5 text-[12px] font-semibold text-white">Connected project workflows</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3 sm:p-4">
        {signals.map((s) => (
          <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <p className="text-[9px] text-slate-400">{s.label}</p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <p className="text-[12px] font-bold text-white">{s.value}</p>
              <PredTrendArrow direction={s.trend} />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-3 mb-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:mx-4 sm:mb-4">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Pattern detected</p>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-200">
          Cost and schedule signals are trending together — review coordination items and commitments.
        </p>
      </div>
    </BrowserFrame>
  );
}

export function PredRiskUI() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" aria-hidden="true">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Insight</p>
      <p className="mt-1 text-[14px] font-semibold text-white">Schedule variance increasing</p>
      <span className="mt-2 inline-block rounded-md border border-brand-orange/40 bg-brand-orange/15 px-2 py-0.5 text-[9px] font-bold uppercase text-brand-orange">
        At Risk
      </span>
      <div className="mt-4 rounded-xl border border-brand-orange/25 bg-brand-dark/40 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">Summary</p>
        <p className="mt-2 text-[12px] leading-relaxed text-slate-200">
          Riverside Medical Center is currently tracking 3 days behind schedule. Recent activity shows open
          coordination items that may be contributing to schedule pressure.
        </p>
        <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Supporting information
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[["Schedule", "3 days behind"], ["Open RFIs", "7"], ["Recent Daily Logs", "12"], ["Open Punch", "28"]].map(
            ([l, v]) => (
              <div key={l} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
                <p className="text-[8px] text-slate-400">{l}</p>
                <p className="text-[10px] font-semibold text-white">{v}</p>
              </div>
            )
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-[10px] font-semibold text-brand-orange">Review Related Records →</span>
          <span className="text-[10px] text-slate-400">Dismiss Insight</span>
        </div>
      </div>
    </div>
  );
}

export function PredDetailUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / detail">
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-brand-line p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Insight Detail</p>
          <p className="mt-1 text-[13px] font-semibold text-brand-navy">Schedule Variance</p>
          <ul className="mt-3 space-y-2 text-[11px]">
            {[["Priority", "High"], ["Current", "-3 days"], ["Previous", "-1 day"], ["Trend", "Increasing"]].map(
              ([l, v]) => (
                <li key={l} className="flex justify-between border-b border-brand-line/60 pb-1.5">
                  <span className="text-brand-muted">{l}</span>
                  <span className={"font-semibold " + (l === "Priority" ? "text-brand-orange" : "text-brand-navy")}>
                    {v}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Related Project Information
          </p>
          <ul className="mt-3 space-y-2">
            {[
              ["RFIs", "7 Open"],
              ["Daily Logs", "Recent updates available"],
              ["Projects", "Current schedule"],
              ["Punch", "28 Open"],
            ].map(([l, v]) => (
              <li key={l} className="flex items-center justify-between rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2">
                <span className="text-[11px] font-medium text-brand-navy">{l}</span>
                <span className="text-[10px] text-brand-muted">{v}</span>
              </li>
            ))}
          </ul>
          <span className="mt-3 inline-block text-[10px] font-semibold text-brand-orange">View Project Context →</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PredPriorityUI() {
  const items = [
    { severity: "HIGH" as const, title: "Schedule risk", detail: "+8 days projected", action: "Review" },
    { severity: "HIGH" as const, title: "Cost variance", detail: "+$320K projected", action: "Review" },
    { severity: "MEDIUM" as const, title: "Open RFIs", detail: "7 unresolved", action: "View details" },
    { severity: "MEDIUM" as const, title: "Submittal cycle", detail: "Trending slower", action: "View details" },
    { severity: "LOW" as const, title: "Safety observations", detail: "Stable", action: "View details" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / priorities" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[12px] font-semibold text-white">Risk Priorities</p>
        <p className="text-[10px] text-slate-400">Riverside Medical Center</p>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
          >
            <div className="min-w-0 flex-1">
              <PredSeverityBadge level={item.severity} />
              <p className="mt-1.5 text-[11px] font-semibold text-white">{item.title}</p>
              <p className="text-[10px] text-slate-400">{item.detail}</p>
            </div>
            <span className="shrink-0 rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-1.5 text-[9px] font-semibold text-brand-orange">
              {item.action}
            </span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function PredHealthUI() {
  const rows = [
    { label: "Overall", value: "Needs Attention", warn: true },
    { label: "Cost", value: "Moderate Risk", warn: true },
    { label: "Schedule", value: "High Risk", warn: true },
    { label: "Field Activity", value: "Stable", warn: false },
    { label: "Open RFIs", value: "7", warn: false },
    { label: "Submittals", value: "12 pending", warn: false },
    { label: "Change Orders", value: "4 active", warn: false },
    { label: "Safety", value: "Stable", warn: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / health" dark>
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-orange">Project Health</p>
        <p className="mt-0.5 text-[12px] font-semibold text-white">Riverside Medical Center</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4 sm:p-4">
        {rows.map(({ label, value, warn }) => (
          <div
            key={label}
            className={
              "rounded-lg border px-2.5 py-2 " +
              (warn ? "border-brand-orange/25 bg-brand-orange/[0.06]" : "border-white/10 bg-white/[0.04]")
            }
          >
            <p className="text-[8px] text-slate-400">{label}</p>
            <p className={"mt-0.5 text-[11px] font-semibold " + (warn ? "text-brand-orange" : "text-white")}>
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-3 mb-3 flex items-center justify-between rounded-lg border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-2.5 sm:mx-4 sm:mb-4">
        <div>
          <p className="text-[9px] text-slate-400">Risk trend</p>
          <p className="text-[12px] font-bold text-brand-orange">Increasing</p>
        </div>
        <PredTrendArrow direction="up" />
      </div>
    </BrowserFrame>
  );
}

export function PredForecastUI() {
  const costRows = [
    { label: "Original Budget", current: "$4.50M", forecast: "—", variance: "—" },
    { label: "Current Cost", current: "$4.82M", forecast: "—", variance: "+$320K to date" },
    { label: "Forecast Cost", current: "—", forecast: "$5.14M", variance: "+$320K projected" },
  ];
  const scheduleRows = [
    { label: "Baseline", current: "180 days", forecast: "—", variance: "—" },
    { label: "Current Forecast", current: "—", forecast: "188 days", variance: "+8 days" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / forecast" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[12px] font-semibold text-white">Cost & Schedule Forecast</p>
        <p className="text-[10px] text-slate-400">Riverside Medical Center</p>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">Cost</p>
        <div className="mt-2 overflow-hidden rounded-lg border border-white/10">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.04] px-2 py-1.5 text-[8px] font-semibold uppercase text-slate-400">
            <span>Metric</span>
            <span>Current</span>
            <span>Forecast</span>
            <span>Variance</span>
          </div>
          {costRows.map((r) => (
            <div key={r.label} className="grid grid-cols-4 border-b border-white/10 px-2 py-2 text-[10px] last:border-0">
              <span className="text-slate-300">{r.label}</span>
              <span className="font-semibold text-white">{r.current}</span>
              <span className="font-semibold text-slate-200">{r.forecast}</span>
              <span className={"font-semibold " + (r.variance.includes("+") ? "text-brand-orange" : "text-slate-400")}>
                {r.variance}
              </span>
            </div>
          ))}
        </div>
        <p className="mb-2 mt-4 text-[9px] font-bold uppercase tracking-wide text-brand-orange">Schedule</p>
        <div className="overflow-hidden rounded-lg border border-white/10">
          <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.04] px-2 py-1.5 text-[8px] font-semibold uppercase text-slate-400">
            <span>Metric</span>
            <span>Current</span>
            <span>Forecast</span>
            <span>Variance</span>
          </div>
          {scheduleRows.map((r) => (
            <div key={r.label} className="grid grid-cols-4 border-b border-white/10 px-2 py-2 text-[10px] last:border-0">
              <span className="text-slate-300">{r.label}</span>
              <span className="font-semibold text-white">{r.current}</span>
              <span className="font-semibold text-slate-200">{r.forecast}</span>
              <span className={"font-semibold " + (r.variance.includes("+") ? "text-brand-orange" : "text-slate-400")}>
                {r.variance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PredEarlyWarningUI() {
  const warnings = [
    { severity: "HIGH" as const, title: "Cost pressure", body: "Material and commitment trends indicate increasing cost pressure." },
    { severity: "HIGH" as const, title: "Schedule pressure", body: "Current activity suggests the project may be trending behind schedule." },
    { severity: "MEDIUM" as const, title: "Workflow bottleneck", body: "Open items across project workflows may create downstream delays." },
    { severity: "MEDIUM" as const, title: "Field performance", body: "Recent field activity shows a change that may require attention." },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / warnings" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[12px] font-semibold text-white">Early Warning Signals</p>
        <p className="text-[10px] text-slate-400">Riverside Medical Center · 4 active</p>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        {warnings.map((w) => (
          <div key={w.title} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <PredSeverityBadge level={w.severity} />
            <p className="mt-1.5 text-[11px] font-semibold text-white">{w.title}</p>
            <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">{w.body}</p>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function PredSignalActionUI() {
  const steps = [
    { label: "Signal", value: "Schedule risk increasing", accent: false },
    { label: "Insight", value: "Recent activity and open items suggest a potential delay.", accent: false },
    { label: "Source Records", value: "Daily Logs · RFIs · Submittals · Drawings", accent: true },
    { label: "Team Action", value: "Review the affected work and assign follow-up.", accent: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / action">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Signal to Action</p>
        <div className="mt-4 space-y-0">
          {steps.map((step, i) => (
            <div key={step.label}>
              <div className={"rounded-lg border px-3 py-3 " + (step.accent ? "border-brand-orange/30 bg-brand-orange/[0.04]" : "border-brand-line bg-[#FAFBFD]")}>
                <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">{step.label}</p>
                <p className="mt-1 text-[11px] font-medium leading-relaxed text-brand-navy">{step.value}</p>
              </div>
              {i < steps.length - 1 ? (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <span className="text-[12px] text-brand-muted">↓</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <span className="rounded-md bg-brand-navy px-3 py-2 text-[10px] font-semibold text-white">Review Records</span>
          <span className="rounded-md border border-brand-line bg-white px-3 py-2 text-[10px] font-semibold text-brand-muted">
            Assign Follow-up
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PredTrendUI() {
  const trends = [
    { label: "Cost Trend", direction: "up" as const, status: "Increasing" },
    { label: "Schedule Trend", direction: "up" as const, status: "Increasing" },
    { label: "Open Items", direction: "flat" as const, status: "Stable" },
    { label: "Field Activity", direction: "down" as const, status: "Improving" },
  ];
  const bars = [42, 58, 65, 72, 68, 78, 85];
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / trends" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[12px] font-semibold text-white">Project Trend Overview</p>
        <p className="text-[10px] text-slate-400">Riverside Medical Center</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4 sm:p-4">
        {trends.map((t) => (
          <div key={t.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <p className="text-[8px] text-slate-400">{t.label}</p>
            <div className="mt-1 flex items-center gap-1.5">
              <PredTrendArrow direction={t.direction} />
              <p className="text-[10px] font-semibold text-white">{t.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-3 mb-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 sm:mx-4">
        <p className="text-[9px] text-slate-400">Risk signal trend (7 weeks)</p>
        <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
          {bars.map((h, i) => (
            <div
              key={i}
              className={"flex-1 rounded-sm " + (i >= 5 ? "bg-brand-orange/70" : "bg-white/20")}
              style={{ height: `${h * 0.35}px` }}
            />
          ))}
        </div>
      </div>
      <div className="mx-3 mb-3 flex items-center justify-between rounded-lg border border-brand-orange/25 bg-brand-orange/[0.06] px-3 py-2 sm:mx-4 sm:mb-4">
        <p className="text-[10px] text-slate-300">Overall Health</p>
        <p className="text-[12px] font-bold text-brand-orange">Needs Attention</p>
      </div>
    </BrowserFrame>
  );
}

export function PredControlUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / predictive-insights / insight">
      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Insight</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Schedule Risk Detected</p>
          <p className="mt-3 text-[12px] text-brand-muted">Recommended next step:</p>
          <p className="mt-1 text-[12px] leading-relaxed text-brand-navy">
            Review open RFIs and recent field updates.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-md bg-brand-navy px-4 py-2 text-[11px] font-semibold text-white">
              Review Records
            </span>
            <span className="rounded-md border border-brand-line bg-white px-4 py-2 text-[11px] font-semibold text-brand-muted">
              Dismiss
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/** Automation (AI module) marketing mockups */

function AutoStatusBadge({ status }: { status: "pending" | "approved" | "completed" | "failed" }) {
  const styles = {
    pending: "border-brand-orange/40 bg-brand-orange/15 text-brand-orange",
    approved: "border-white/20 bg-white/10 text-slate-200",
    completed: "border-white/15 bg-white/[0.06] text-slate-300",
    failed: "border-red-400/30 bg-red-400/10 text-red-300",
  };
  const labels = {
    pending: "Pending Review",
    approved: "Approved",
    completed: "Completed",
    failed: "Failed",
  };
  return (
    <span className={"rounded-md border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide " + styles[status]}>
      {labels[status]}
    </span>
  );
}

export function AutoHeroUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / automation" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-slate-200">
            Riverside Medical Center ▾
          </span>
          <span className="text-[10px] font-semibold text-brand-orange">Automation · AI Actions</span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.06] px-3 py-3">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">Suggested Action</p>
              <p className="mt-1 text-[13px] font-semibold text-white">Create RFI from unresolved field issue</p>
            </div>
            <span className="rounded-md border border-brand-orange/40 bg-brand-orange/15 px-2 py-0.5 text-[8px] font-bold uppercase text-brand-orange">
              Requires approval
            </span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              ["Source", "Daily Log — Sep 09"],
              ["Action type", "Create RFI"],
              ["Affected record", "Daily Log #DL-2847"],
              ["Activity status", "Awaiting review"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2">
                <p className="text-[8px] text-slate-400">{label}</p>
                <p className="text-[10px] font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold text-slate-200">
              Review Action
            </span>
            <span className="rounded-md bg-brand-orange px-3 py-1.5 text-[10px] font-semibold text-white">
              Confirm & Run
            </span>
            <span className="rounded-md border border-white/15 px-3 py-1.5 text-[10px] font-semibold text-slate-400">
              Cancel
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
          <p className="text-[9px] text-slate-400">Automation status</p>
          <p className="text-[10px] font-semibold text-white">1 pending · 3 completed today</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AutoHowItWorksUI() {
  const steps = [
    { label: "Trigger", detail: "Daily Log submitted" },
    { label: "AI Recommendation", detail: "Create RFI" },
    { label: "Review", detail: "User reviews action" },
    { label: "Approval", detail: "Confirm & Run" },
    { label: "Completed", detail: "Action logged" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / automation / flow">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Automation flow</p>
        <div className="mt-4 flex flex-col gap-0 sm:flex-row sm:items-start sm:gap-1">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 flex-col items-center sm:min-w-0">
              <div
                className={
                  "w-full rounded-lg border px-2 py-2.5 text-center " +
                  (i === steps.length - 1
                    ? "border-brand-orange/30 bg-brand-orange/[0.06]"
                    : "border-brand-line bg-[#FAFBFD]")
                }
              >
                <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">{step.label}</p>
                <p className="mt-1 text-[10px] font-medium text-brand-navy">{step.detail}</p>
              </div>
              {i < steps.length - 1 ? (
                <span className="py-1 text-[11px] text-brand-muted sm:hidden" aria-hidden="true">
                  ↓
                </span>
              ) : null}
              {i < steps.length - 1 ? (
                <span className="hidden px-0.5 pt-3 text-[11px] text-brand-muted sm:inline" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AutoShowcaseUI() {
  const rows = [
    { action: "Create RFI — Daily Log", status: "pending" as const, project: "Riverside Medical Center", trigger: "Daily Log", time: "09:42" },
    { action: "Update Project Status — Schedule", status: "approved" as const, project: "Riverside Medical Center", trigger: "Schedule", time: "09:31" },
    { action: "Create Follow-up Task — Safety", status: "completed" as const, project: "Riverside Medical Center", trigger: "Safety", time: "09:18" },
    { action: "Generate Document Summary — Documents", status: "completed" as const, project: "Riverside Medical Center", trigger: "Documents", time: "08:55" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / automation / queue" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[12px] font-semibold text-white">Automation Queue</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {["Pending", "Completed", "Failed"].map((tab, i) => (
            <span
              key={tab}
              className={
                "rounded-md px-2 py-0.5 text-[9px] font-medium " +
                (i === 0 ? "bg-brand-orange/20 text-brand-orange" : "border border-white/10 text-slate-400")
              }
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <div className="min-w-[480px]">
          <div className="grid grid-cols-[1fr_100px_80px_70px] gap-2 border-b border-white/10 pb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">
            <span>Action</span>
            <span>Project</span>
            <span>Trigger</span>
            <span>Status</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.action}
              className="grid grid-cols-[1fr_100px_80px_70px] items-center gap-2 border-b border-white/10 py-2.5 text-[10px] last:border-0"
            >
              <div>
                <p className="font-semibold text-white">{row.action}</p>
                <p className="text-[9px] text-slate-400">{row.time}</p>
              </div>
              <span className="truncate text-slate-300">{row.project.split(" ")[0]}…</span>
              <span className="text-slate-400">{row.trigger}</span>
              <AutoStatusBadge status={row.status} />
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AutoApprovalUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / automation / approve">
      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/[0.04] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Automation Action</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Create RFI from Daily Log</p>
          <div className="mt-4 space-y-3 text-[12px]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Reason</p>
              <p className="mt-1 leading-relaxed text-brand-navy">
                Unresolved material delivery issue identified in today&apos;s field report.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Affected record</p>
              <p className="mt-1 font-medium text-brand-navy">Daily Log — Sep 09, 2026</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Proposed action</p>
              <p className="mt-1 font-medium text-brand-navy">Create RFI</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md border border-brand-line bg-white px-3 py-2 text-[11px] font-semibold text-brand-navy">
              Review Details
            </span>
            <span className="rounded-md bg-brand-navy px-3 py-2 text-[11px] font-semibold text-white">
              Approve & Run
            </span>
            <span className="rounded-md border border-brand-line bg-white px-3 py-2 text-[11px] font-semibold text-brand-muted">
              Cancel
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AutoActivityLogUI() {
  const rows = [
    { time: "09:42", project: "Riverside Medical Center", trigger: "Daily Log", action: "Create RFI", approvedBy: "James Miller", status: "Completed" },
    { time: "09:31", project: "Riverside Medical Center", trigger: "Safety", action: "Create Task", approvedBy: "Sarah Lee", status: "Completed" },
    { time: "09:18", project: "Riverside Medical Center", trigger: "Documents", action: "Summarize Document", approvedBy: "System", status: "Completed" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / automation / activity-log">
      <div className="border-b border-brand-line px-4 py-2.5">
        <p className="text-[12px] font-semibold text-brand-navy">Activity Log</p>
        <p className="text-[10px] text-brand-muted">Riverside Medical Center · Today</p>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <div className="min-w-[520px]">
          <div className="grid grid-cols-[48px_1fr_72px_96px_80px_72px] gap-2 border-b border-brand-line pb-1.5 text-[8px] font-semibold uppercase tracking-wide text-brand-muted">
            <span>Time</span>
            <span>Project</span>
            <span>Trigger</span>
            <span>Action</span>
            <span>Approved By</span>
            <span>Status</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.time + row.action}
              className="grid grid-cols-[48px_1fr_72px_96px_80px_72px] items-center gap-2 border-b border-brand-line/60 py-2 text-[10px] last:border-0"
            >
              <span className="font-mono text-brand-muted">{row.time}</span>
              <span className="truncate font-medium text-brand-navy">{row.project.split(" ")[0]}…</span>
              <span className="text-brand-muted">{row.trigger}</span>
              <span className="font-medium text-brand-navy">{row.action}</span>
              <span className="truncate text-brand-muted">{row.approvedBy}</span>
              <span className="font-semibold text-brand-navy">{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function AutoGovernanceUI() {
  const settings = [
    { label: "Approval Required", value: "ON", on: true },
    { label: "Activity Logging", value: "ON", on: true },
    { label: "Destructive Actions", value: "Disabled", on: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / automation / settings" dark>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Automation Settings</p>
        <ul className="mt-4 space-y-2">
          {settings.map((s) => (
            <li
              key={s.label}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
            >
              <span className="text-[11px] text-slate-300">{s.label}</span>
              <span
                className={
                  "rounded-md px-2 py-0.5 text-[10px] font-bold " +
                  (s.on ? "bg-brand-orange/20 text-brand-orange" : "border border-white/15 text-slate-400")
                }
              >
                {s.value}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[10px] leading-relaxed text-slate-400">
          Supported actions only · Permission-scoped · Human confirmation required
        </p>
      </div>
    </BrowserFrame>
  );
}

/** Document Intelligence (AI + DOC modules) marketing mockups */

function DiSourceChips({ sources, dark = false }: { sources: string[]; dark?: boolean }) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {sources.map((s) => (
        <span
          key={s}
          className={
            "rounded-md px-2 py-0.5 text-[9px] font-semibold " +
            (dark
              ? "border border-white/15 bg-white/10 text-slate-300"
              : "border border-brand-line bg-white text-brand-muted")
          }
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export function DiHeroUI() {
  const categories = ["Specifications", "Contracts", "Reports", "Submittals"];
  const recent = ["Structural Spec – Rev 06", "Mechanical Spec – Rev 04", "Project Manual – Rev 03"];
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-slate-200">
            Riverside Medical Center ▾
          </span>
          <span className="text-[10px] font-semibold text-brand-orange">Document Intelligence</span>
        </div>
        <div className="mt-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-[11px] text-slate-400">
          Search or ask about project documents…
        </div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_160px] sm:p-4">
        <div>
          <p className="text-[11px] font-semibold text-white">Structural Specification – Rev 06</p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[["Type", "Specification"], ["Revision", "Rev 06"], ["Status", "Current"], ["Uploaded", "Sep 08"]].map(
              ([l, v]) => (
                <div key={l} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
                  <p className="text-[8px] text-slate-400">{l}</p>
                  <p className="text-[10px] font-semibold text-white">{v}</p>
                </div>
              )
            )}
          </div>
          <div className="mt-3 rounded-lg border border-brand-orange/25 bg-brand-dark/50 px-3 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">AI Summary</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-200">
              Updated structural requirements for East Wing coordination, revised steel tolerances, and new
              reference to drawing S-204.
            </p>
            <p className="mb-1 mt-2 text-[9px] font-semibold uppercase text-slate-400">Key Topics</p>
            <DiSourceChips sources={["Structural Steel", "Coordination", "Tolerances", "S-204"]} dark />
            <p className="mb-1 mt-2 text-[9px] font-semibold uppercase text-slate-400">Related</p>
            <DiSourceChips sources={["RFI-018", "RFI-024", "SUB-031"]} dark />
          </div>
        </div>
        <aside className="space-y-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
            <p className="text-[9px] font-semibold uppercase text-slate-400">Categories</p>
            <ul className="mt-1 space-y-1">
              {categories.map((c, i) => (
                <li key={c} className={"text-[10px] " + (i === 0 ? "font-semibold text-brand-orange" : "text-slate-400")}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
            <p className="text-[9px] font-semibold uppercase text-slate-400">Recent</p>
            <ul className="mt-1 space-y-1">
              {recent.map((r) => (
                <li key={r} className="text-[10px] text-slate-400">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </BrowserFrame>
  );
}

export function DiQaUI() {
  const questions = [
    "What does the latest specification say about fire-rated doors?",
    "Which documents reference the revised mechanical scope?",
    "What changed between the previous and current specification?",
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence / ask" dark>
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {questions.map((q, i) => (
            <span
              key={q}
              className={
                "rounded-md border px-2 py-1 text-[9px] " +
                (i === 0 ? "border-brand-orange/30 bg-brand-orange/10 text-brand-orange" : "border-white/10 text-slate-400")
              }
            >
              {q.length > 42 ? q.slice(0, 42) + "…" : q}
            </span>
          ))}
        </div>
        <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-3 py-2 text-[11px] text-slate-200">
          What does the latest specification say about fire-rated doors?
        </div>
        <div className="mt-3 rounded-xl border border-brand-orange/25 bg-brand-dark/50 px-3.5 py-3">
          <p className="text-[11px] leading-relaxed text-slate-100">
            Section 08 71 00 requires door hardware to meet specified accessibility and fire-rating requirements.
            Referenced drawing A-204 includes updated door schedule details.
          </p>
          <p className="mb-1 mt-2 text-[9px] font-semibold uppercase text-slate-400">Source documents</p>
          <DiSourceChips sources={["Project Specifications – Rev 06", "Section 08 71 00", "Drawing A-204"]} dark />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-white/10 px-2 py-0.5 text-[9px] text-slate-300">
              Page ref · §08 71 00
            </span>
            <span className="text-[9px] text-emerald-400/90">High relevance</span>
            <span className="text-[10px] font-semibold text-brand-orange">View source →</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DiSummaryUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence / summary">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Document</p>
        <p className="mt-1 text-[14px] font-semibold text-brand-navy">Project Specifications – Rev 06</p>
        <div className="mt-4 rounded-xl border border-brand-orange/20 bg-brand-orange/[0.04] px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">AI Summary</p>
          <p className="mt-2 text-[12px] leading-relaxed text-brand-navy">
            Updated requirements for fire protection, electrical coordination, and mechanical equipment
            installation.
          </p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Key Topics</p>
            <ul className="mt-2 space-y-1">
              {["Fire Protection", "Electrical", "Mechanical", "Site Coordination"].map((t) => (
                <li key={t} className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-1.5 text-[11px] text-brand-navy">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Important Changes</p>
            <ul className="mt-2 space-y-1">
              {[
                "Updated equipment requirements",
                "Revised installation notes",
                "New coordination requirements",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-[11px] text-brand-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DiExtractUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence / extract">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Document</p>
        <p className="mt-1 text-[13px] font-semibold text-brand-navy">Specification Section 08 71 00</p>
        <div className="mt-4 space-y-2">
          {[
            { label: "Requirement", value: "Door hardware must meet specified accessibility requirements." },
            { label: "Reference", value: "Section 08 71 00" },
            { label: "Related Drawing", value: "A-204" },
            { label: "Related Submittal", value: "SUB-042" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">{label}</p>
              <p className="mt-0.5 text-[11px] text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DiCompareUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence / compare" dark>
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <span className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-slate-300">
            REVISION 05
          </span>
          <span className="text-[11px] text-slate-500">vs</span>
          <span className="rounded-lg border border-brand-orange/40 bg-brand-orange/10 px-3 py-1.5 text-[11px] font-semibold text-brand-orange">
            REVISION 06
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["12 changes", "4 new requirements", "3 modified sections", "5 updated references"].map((s) => (
            <span key={s} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] text-slate-300">
              + {s}
            </span>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3">
          <p className="text-[10px] font-semibold text-brand-orange">Section 03 30 00</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-white/10 px-2.5 py-2">
              <p className="text-[8px] uppercase text-slate-500">Previous</p>
              <p className="text-[10px] text-slate-400">Standard concrete finish requirements.</p>
            </div>
            <div className="rounded-md border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-2">
              <p className="text-[8px] uppercase text-brand-orange">Current</p>
              <p className="text-[10px] text-slate-200">Updated finish requirements and revised tolerance.</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DiSearchUI() {
  const filters = ["Document Type", "Project", "Revision", "Date", "Discipline", "Status"];
  const results = [
    { n: "Project Specifications – Rev 06", m: "Section 07 10 00" },
    { n: "Architectural Notes", m: "Drawing A-301" },
    { n: "Submittal Package 024", m: "Waterproofing Materials" },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence / search">
      <div className="p-4 sm:p-5">
        <div className="rounded-xl border border-brand-orange/30 bg-white px-3 py-2.5 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Search</p>
          <p className="mt-1 text-[13px] font-semibold text-brand-navy">
            documents related to waterproofing requirements
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {filters.map((f, i) => (
            <span
              key={f}
              className={
                "rounded-md px-2 py-0.5 text-[9px] font-medium " +
                (i === 0 ? "bg-brand-orange/10 text-brand-orange" : "border border-brand-line text-brand-muted")
              }
            >
              {f}
            </span>
          ))}
        </div>
        <ul className="mt-3 space-y-2">
          {results.map((r, i) => (
            <li
              key={r.n}
              className={
                "rounded-lg border px-3 py-2.5 " +
                (i === 0 ? "border-brand-orange/35 bg-brand-orange/[0.04]" : "border-brand-line bg-[#FAFBFD]")
              }
            >
              <p className="text-[11px] font-semibold text-brand-navy">
                {String(i + 1).padStart(2, "0")} · {r.n}
              </p>
              <p className="text-[10px] text-brand-muted">{r.m}</p>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function DiContextUI() {
  const connected = ["RFI-018", "RFI-024", "SUB-031", "Drawing S-204", "Change Order CO-007"];
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence / context">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Document</p>
        <p className="mt-1 text-[14px] font-semibold text-brand-navy">Structural Specification – Rev 06</p>
        <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
          Connected Records
        </p>
        <ul className="space-y-1.5">
          {connected.map((r) => (
            <li
              key={r}
              className="flex items-center justify-between rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2"
            >
              <span className="text-[11px] font-medium text-brand-navy">{r}</span>
              <span className="text-[10px] text-brand-orange">Open →</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg border border-brand-orange/20 bg-brand-orange/[0.04] px-3 py-2">
          <p className="text-[10px] text-brand-muted">
            Document insights stay connected to project workflows and records.
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function DiHowItWorksUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / document-intelligence">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Document Intelligence
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-brand-navy px-2 py-1 text-[9px] font-semibold text-white">1</span>
          <span className="text-[11px] text-brand-navy">Documents connected</span>
          <span className="text-brand-muted">→</span>
          <span className="rounded-md bg-brand-orange/10 px-2 py-1 text-[9px] font-semibold text-brand-orange">4</span>
          <span className="text-[11px] text-brand-navy">Ask & discover</span>
        </div>
        <div className="mt-3 rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2 text-[11px] text-brand-muted">
          Summaries, search, and extracted requirements — grounded in project documents.
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

/** CRM (Business Growth module) marketing mockups */

export function CrmHeroUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / crm" dark>
      <div className="border-b border-white/10 px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-semibold text-brand-orange">CRM</span>
          <span className="text-[10px] text-slate-400">Riverside Medical Center</span>
        </div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_140px] sm:p-4">
        <div>
          <p className="text-[13px] font-semibold text-white">Apex Construction Group</p>
          <p className="mt-0.5 text-[10px] text-slate-400">Contact · Sarah Chen · VP Development</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ["Relationship", "Active Customer"],
              ["Opportunity", "Proposal"],
              ["Project", "Riverside Medical Center"],
              ["Owner", "James Miller"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2">
                <p className="text-[8px] text-slate-400">{label}</p>
                <p className="text-[10px] font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Recent activity</p>
            <p className="mt-1 text-[10px] text-slate-300">Follow-up call completed · Proposal sent</p>
            <p className="mt-1 text-[9px] text-slate-400">Next follow-up · Sep 14 · Opportunity value · $24.5M</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.06] px-2.5 py-2">
            <p className="text-[8px] text-slate-400">Status</p>
            <p className="text-[11px] font-bold text-brand-orange">Active</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <p className="text-[8px] text-slate-400">Last activity</p>
            <p className="text-[10px] font-semibold text-white">Today</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <p className="text-[8px] text-slate-400">Next follow-up</p>
            <p className="text-[10px] font-semibold text-white">Sep 14</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CrmWorkflowUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / crm / opportunity / new">
      <div className="p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Opportunity record</p>
        <p className="mt-1 text-[14px] font-semibold text-brand-navy">Northline Office Renovation</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            ["Company", "Northline Commercial"],
            ["Stage", "Qualified"],
            ["Value", "$8.2M"],
            ["Owner", "Sarah Lee"],
            ["Expected close", "Oct 30, 2026"],
            ["Connected project", "—"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Next step</p>
          <p className="mt-1 text-[11px] text-brand-navy">Schedule site walkthrough with estimating team</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CrmWorkspaceUI() {
  const stages = ["New", "Qualified", "Proposal", "Negotiation", "Won", "Lost"];
  const opportunities = [
    { name: "Riverside Medical Center Expansion", company: "Apex Construction Group", value: "$24.5M", type: "Healthcare", owner: "J. Miller", close: "Nov 15", stage: 2 },
    { name: "Northline Office Renovation", company: "Northline Commercial", value: "$8.2M", type: "Commercial", owner: "S. Lee", close: "Oct 30", stage: 1 },
    { name: "Harbor Point Retail Build", company: "Harbor Point Development", value: "$12.1M", type: "Retail", owner: "M. Torres", close: "Dec 05", stage: 3 },
    { name: "Westgate Commercial Development", company: "Westgate Partners", value: "$18.4M", type: "Commercial", owner: "J. Miller", close: "Jan 20", stage: 0 },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / crm / pipeline">
      <div className="border-b border-brand-line px-4 py-2.5">
        <p className="text-[12px] font-semibold text-brand-navy">Business Pipeline</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Active Opportunities", "12"],
            ["Open Leads", "5"],
            ["Pipeline Value", "$63.2M"],
            ["Follow-ups Due", "3"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2">
              <p className="text-[8px] text-brand-muted">{label}</p>
              <p className="text-[12px] font-bold text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto p-3 sm:p-4">
        <div className="mb-3 flex min-w-[640px] gap-1.5">
          {stages.map((stage, i) => (
            <div
              key={stage}
              className={
                "min-w-[5.5rem] shrink-0 rounded-lg border px-2 py-1.5 text-center " +
                (i === 2 ? "border-brand-orange/40 bg-brand-orange/5" : "border-brand-line bg-white")
              }
            >
              <p className={"text-[9px] font-semibold " + (i === 2 ? "text-brand-orange" : "text-brand-navy")}>{stage}</p>
            </div>
          ))}
        </div>
        <div className="min-w-[640px] space-y-2">
          {opportunities.map((opp) => (
            <div
              key={opp.name}
              className={
                "rounded-lg border px-3 py-2.5 " +
                (opp.stage === 2 ? "border-brand-orange/30 bg-brand-orange/[0.03]" : "border-brand-line bg-[#FAFBFD]")
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold text-brand-navy">{opp.name}</p>
                  <p className="text-[9px] text-brand-muted">{opp.company} · {opp.type}</p>
                </div>
                <span className="rounded-md border border-brand-line bg-white px-2 py-0.5 text-[8px] font-semibold text-brand-navy">
                  {stages[opp.stage]}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-3 text-[9px] text-brand-muted">
                <span>{opp.value}</span>
                <span>Owner · {opp.owner}</span>
                <span>Close · {opp.close}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CrmCustomerUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / crm / companies / apex-construction">
      <div className="grid sm:grid-cols-[1fr_180px]">
        <div className="border-b border-brand-line p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Company profile</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Apex Construction Group</p>
          <p className="mt-1 text-[11px] text-brand-muted">General contractor · Active customer</p>
          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Primary contacts</p>
            <ul className="mt-2 space-y-1.5">
              {[
                ["Sarah Chen", "VP Development"],
                ["David Park", "Project Director"],
              ].map(([name, role]) => (
                <li key={name} className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2 text-[11px]">
                  <span className="font-semibold text-brand-navy">{name}</span>
                  <span className="text-brand-muted"> · {role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Active projects</p>
            <p className="mt-2 rounded-md border border-brand-orange/30 bg-brand-orange/[0.04] px-2.5 py-2 text-[11px] font-medium text-brand-navy">
              Riverside Medical Center
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Opportunities</p>
          <p className="mt-2 text-[12px] font-semibold text-brand-navy">$24.5M · Proposal</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Recent activity</p>
          <ul className="mt-2 space-y-1.5 text-[10px] text-brand-muted">
            <li>Proposal sent · Today</li>
            <li>Follow-up call · Sep 09</li>
            <li>Site visit logged · Sep 05</li>
          </ul>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Follow-ups</p>
          <p className="mt-1 text-[11px] font-medium text-brand-orange">Sep 14 · Pricing review</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Team</p>
          <p className="mt-1 text-[11px] text-brand-navy">James Miller · Owner</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CrmOpportunityUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / crm / opportunities / riveride-expansion" dark>
      <div className="border-b border-white/10 px-4 py-3">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-orange">Opportunity detail</p>
        <p className="mt-0.5 text-[13px] font-semibold text-white">Riverside Medical Center Expansion</p>
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {[
          ["Status", "Proposal"],
          ["Customer", "Apex Construction Group"],
          ["Project", "Riverside Medical Center"],
          ["Value", "$24.5M"],
          ["Next action", "Pricing review · Sep 14"],
          ["Owner", "James Miller"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
            <p className="text-[8px] text-slate-400">{label}</p>
            <p className={"text-[11px] font-semibold " + (label === "Value" ? "text-brand-orange" : "text-white")}>
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-3 mb-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:mx-4 sm:mb-4">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">Recent activity</p>
        <p className="mt-1 text-[10px] text-slate-300">Proposal sent · Follow-up scheduled · Connected to project record</p>
      </div>
    </BrowserFrame>
  );
}

/** Website Builder (Business Growth module) marketing mockups */

function WbMiniSite({ variant = "modern" }: { variant?: "modern" | "corporate" | "portfolio" }) {
  const heroBg =
    variant === "corporate"
      ? "bg-brand-navy"
      : variant === "portfolio"
        ? "bg-slate-700"
        : "bg-gradient-to-br from-brand-navy to-[#0A2744]";
  return (
    <div className="overflow-hidden rounded-md border border-brand-line bg-white text-left">
      <div className={"px-2 py-2 " + heroBg}>
        <div className="h-1 w-8 rounded bg-brand-orange/80" />
        <div className="mt-1.5 h-1.5 w-3/4 rounded bg-white/30" />
        <div className="mt-1 h-1 w-1/2 rounded bg-white/20" />
      </div>
      <div className="grid grid-cols-3 gap-1 p-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded border border-brand-line bg-[#FAFBFD] p-1">
            <div className="h-4 rounded bg-slate-200" />
            <div className="mt-1 h-1 w-full rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WbHeroUI() {
  const nav = ["Website", "Pages", "Portfolio", "Branding", "SEO", "Domain"];
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder" dark className="min-h-[380px]">
      <div className="grid min-h-[340px] grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr]">
        <aside className="border-r border-white/10 bg-[#061525] p-2">
          <p className="text-[8px] font-bold uppercase tracking-wide text-brand-orange">Website Builder</p>
          <ul className="mt-2 space-y-0.5">
            {nav.map((item, i) => (
              <li
                key={item}
                className={
                  "rounded px-2 py-1 text-[9px] " +
                  (i === 0 ? "bg-brand-orange/20 font-semibold text-brand-orange" : "text-slate-400")
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded border border-white/10 bg-white/[0.04] px-2 py-1.5 text-[8px]">
            <p className="text-slate-400">Template</p>
            <p className="font-semibold text-white">Modern Contractor</p>
            <p className="mt-1 text-slate-400">Domain</p>
            <p className="text-slate-300">northline.cms-sites.io</p>
            <span className="mt-1 inline-block rounded bg-brand-orange/20 px-1.5 py-0.5 text-[7px] font-bold text-brand-orange">
              DRAFT
            </span>
          </div>
        </aside>
        <div className="flex flex-col bg-[#0A1F35]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-3 py-2">
            <div className="flex gap-1">
              {["Desktop", "Mobile"].map((v, i) => (
                <span
                  key={v}
                  className={
                    "rounded px-2 py-0.5 text-[8px] font-semibold " +
                    (i === 0 ? "bg-white/15 text-white" : "text-slate-400")
                  }
                >
                  {v}
                </span>
              ))}
            </div>
            <div className="flex gap-1">
              {["Preview", "Save", "Publish"].map((btn, i) => (
                <span
                  key={btn}
                  className={
                    "rounded px-2 py-0.5 text-[8px] font-semibold " +
                    (btn === "Publish" ? "bg-brand-orange text-white" : "border border-white/20 text-slate-300")
                  }
                >
                  {btn}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-white">
              <div className="flex items-center justify-between border-b border-brand-line px-2 py-1.5">
                <div className="h-2 w-12 rounded bg-brand-navy" />
                <div className="flex gap-2 text-[7px] text-brand-muted">
                  <span>Services</span>
                  <span>Projects</span>
                  <span>Contact</span>
                </div>
              </div>
              <div className="bg-brand-navy px-3 py-4">
                <div className="h-2 w-2/3 rounded bg-white/30" />
                <div className="mt-2 h-1.5 w-1/2 rounded bg-white/20" />
                <span className="mt-3 inline-block rounded bg-brand-orange px-2 py-0.5 text-[7px] font-semibold text-white">
                  Request a Bid
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 p-2">
                {["Services", "Projects", "About"].map((s) => (
                  <div key={s} className="rounded border border-brand-line p-1.5">
                    <p className="text-[7px] font-semibold text-brand-navy">{s}</p>
                    <div className="mt-1 h-3 rounded bg-[#FAFBFD]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbTemplatePreviewUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / templates / modern-contractor">
      <div className="border-b border-brand-line px-4 py-2.5">
        <p className="text-[11px] text-brand-muted">Template Gallery → Modern Contractor → Full Preview</p>
        <div className="mt-2 flex gap-2">
          {["Desktop", "Mobile"].map((v, i) => (
            <span
              key={v}
              className={
                "rounded-md px-2 py-0.5 text-[9px] font-semibold " +
                (i === 0 ? "bg-brand-orange/10 text-brand-orange" : "text-brand-muted")
              }
            >
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-[1fr_120px]">
        <div className="overflow-hidden rounded-lg border border-brand-line">
          <WbMiniSite variant="modern" />
        </div>
        <div className="space-y-2">
          <span className="block w-full rounded-md bg-brand-navy py-2 text-center text-[10px] font-semibold text-white">
            Select Template
          </span>
          <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] px-2 py-2 text-[9px]">
            <p className="font-semibold text-brand-orange">Template selected</p>
            <p className="text-brand-muted">Draft website created</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbEditorUI() {
  const pages = ["Home", "About", "Services", "Projects", "Team", "Contact"];
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / editor">
      <div className="grid min-h-[300px] grid-cols-[100px_1fr_130px]">
        <aside className="border-r border-brand-line bg-[#FAFBFD] p-2">
          <p className="text-[8px] font-bold uppercase text-brand-muted">Pages</p>
          <ul className="mt-1 space-y-0.5">
            {pages.map((p, i) => (
              <li key={p} className={"rounded px-1.5 py-1 text-[9px] " + (i === 0 ? "bg-brand-orange/10 font-semibold text-brand-orange" : "text-brand-navy")}>
                {p}
              </li>
            ))}
          </ul>
        </aside>
        <div className="border-r border-brand-line bg-white p-2">
          <div className="rounded border border-brand-line">
            <div className="bg-brand-navy px-2 py-3">
              <p className="text-[9px] font-bold text-white">Northline Construction</p>
              <p className="mt-1 text-[8px] text-slate-300">Commercial construction & project delivery</p>
            </div>
            <div className="p-2 text-[8px] text-brand-muted">Live preview · Home</div>
          </div>
        </div>
        <aside className="p-2">
          <p className="text-[8px] font-bold uppercase text-brand-orange">Section Editor</p>
          <p className="mt-1 text-[10px] font-semibold text-brand-navy">Hero</p>
          {["Headline", "Supporting text", "CTA label", "CTA link"].map((f) => (
            <div key={f} className="mt-2 rounded border border-brand-line bg-[#FAFBFD] px-1.5 py-1 text-[8px] text-brand-muted">
              {f}
            </div>
          ))}
          <span className="mt-3 block rounded bg-brand-navy py-1.5 text-center text-[9px] font-semibold text-white">
            Save Changes
          </span>
        </aside>
      </div>
    </BrowserFrame>
  );
}

export function WbSectionEditorUI() {
  const sections = ["Hero", "Services", "Portfolio", "About", "Team", "Testimonials", "Certifications", "Contact"];
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / sections">
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Page sections · Home</p>
        <ul className="mt-3 space-y-1.5">
          {sections.map((s, i) => (
            <li key={s} className="flex items-center justify-between rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2">
              <span className="text-[11px] font-medium text-brand-navy">{s}</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-brand-muted">{i < 6 ? "Visible" : "Hidden"}</span>
                <span className="text-[10px] text-brand-muted">⋮⋮</span>
              </div>
            </li>
          ))}
        </ul>
        <span className="mt-4 inline-block rounded-md bg-brand-navy px-4 py-2 text-[10px] font-semibold text-white">
          Save changes
        </span>
      </div>
    </BrowserFrame>
  );
}

export function WbCmsImportUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / import" dark>
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-wide text-brand-orange">Vertex CMS</p>
          {[
            ["Projects", "Portfolio"],
            ["Team", "About / Team"],
            ["Safety / TRIR", "Trust / Certifications"],
            ["Company information", "Website content"],
          ].map(([src, tgt]) => (
            <div key={src} className="mt-2 flex items-center gap-2 text-[9px]">
              <span className="rounded border border-white/15 bg-white/[0.06] px-2 py-1 text-slate-300">{src}</span>
              <span className="text-slate-500">↓</span>
              <span className="text-slate-400">{tgt}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.06] p-3">
          <span className="rounded bg-brand-orange px-3 py-1.5 text-[10px] font-semibold text-white">Import from CMS</span>
          <ul className="mt-3 space-y-1.5">
            {["Projects", "Team", "Company", "Safety / TRIR"].map((opt) => (
              <li key={opt} className="rounded border border-white/15 bg-white/[0.04] px-2 py-1.5 text-[10px] text-white">
                {opt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbPortfolioUI() {
  const projects = [
    { name: "Riverside Medical Center", type: "Commercial", value: "$4.8M", selected: true },
    { name: "Northline Office Complex", type: "Commercial", value: "$2.6M", selected: true },
    { name: "Harbor Point Development", type: "Mixed Use", value: "$7.2M", selected: false },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / portfolio">
      <div className="border-b border-brand-line px-4 py-2">
        <div className="flex flex-wrap gap-2">
          {["Select projects", "Import selected", "Published portfolio"].map((btn, i) => (
            <span
              key={btn}
              className={
                "rounded-md px-2 py-1 text-[9px] font-semibold " +
                (i === 1 ? "bg-brand-navy text-white" : "border border-brand-line text-brand-muted")
              }
            >
              {btn}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className={
              "rounded-lg border p-2 " +
              (p.selected ? "border-brand-orange/35 bg-brand-orange/[0.03]" : "border-brand-line bg-white")
            }
          >
            <div className="flex items-start justify-between">
              <span className={"text-[10px] " + (p.selected ? "text-brand-orange" : "text-brand-muted")}>
                {p.selected ? "☑" : "☐"}
              </span>
            </div>
            <div className="mt-1 h-10 rounded bg-slate-200" />
            <p className="mt-2 text-[10px] font-semibold text-brand-navy">{p.name}</p>
            <p className="text-[9px] text-brand-muted">{p.type} · {p.value}</p>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function WbBrandingUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / branding">
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-brand-line p-4 sm:border-b-0 sm:border-r">
          {[
            ["Company Logo", "Upload logo"],
            ["Brand Colors", "Primary · Secondary · Accent"],
            ["Typography", "Font selection"],
            ["Favicon", "Upload favicon"],
          ].map(([label, hint]) => (
            <div key={label} className="mb-3 rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5">
              <p className="text-[10px] font-semibold text-brand-navy">{label}</p>
              <p className="mt-1 text-[9px] text-brand-muted">{hint}</p>
            </div>
          ))}
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase text-brand-muted">Preview</p>
          <div className="mt-2 overflow-hidden rounded-lg border border-brand-line">
            <WbMiniSite variant="modern" />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbSeoUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / seo">
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase text-brand-muted">Page · Home</p>
        <div className="mt-3 space-y-3">
          <div>
            <p className="text-[9px] font-semibold uppercase text-brand-muted">SEO Title</p>
            <p className="mt-1 rounded border border-brand-line bg-[#FAFBFD] px-2 py-1.5 text-[11px] text-brand-navy">
              Northline Construction | Commercial Construction
            </p>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase text-brand-muted">Meta Description</p>
            <p className="mt-1 rounded border border-brand-line bg-[#FAFBFD] px-2 py-1.5 text-[10px] leading-relaxed text-brand-navy">
              Commercial construction and project delivery services from Northline Construction.
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-brand-line px-3 py-2">
            <span className="text-[10px] text-brand-muted">SEO status</span>
            <span className="rounded bg-brand-orange/10 px-2 py-0.5 text-[9px] font-bold text-brand-orange">Ready</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbPublishUI() {
  const steps = ["Edit", "Save", "Preview", "Approve", "Publish"];
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / publish" dark>
      <div className="p-4">
        <div className="flex flex-wrap items-center justify-center gap-1">
          {steps.map((s, i) => (
            <span key={s} className="flex items-center gap-1">
              <span className={"rounded px-2 py-1 text-[9px] font-semibold " + (i === steps.length - 1 ? "bg-brand-orange text-white" : "border border-white/15 text-slate-300")}>
                {s}
              </span>
              {i < steps.length - 1 ? <span className="text-slate-500">↓</span> : null}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {["Desktop", "Mobile"].map((v, i) => (
            <span key={v} className={"rounded px-2 py-0.5 text-[9px] " + (i === 0 ? "bg-white/15 text-white" : "text-slate-400")}>{v}</span>
          ))}
        </div>
        <div className="mx-auto mt-4 max-w-xs rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
          <p className="text-[10px] text-slate-400">Website status</p>
          <p className="mt-1 text-[14px] font-bold text-brand-orange">PUBLISHED</p>
          <span className="mt-2 inline-block rounded bg-brand-orange px-4 py-1.5 text-[10px] font-semibold text-white">
            Publish Website
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbDomainUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / domain">
      <div className="p-4">
        <div className="rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5">
          <p className="text-[9px] text-brand-muted">Current domain</p>
          <p className="text-[12px] font-semibold text-brand-navy">northline.cms-sites.io</p>
        </div>
        <span className="mt-3 inline-block rounded-md border border-brand-line bg-white px-3 py-2 text-[10px] font-semibold text-brand-navy">
          Add Custom Domain
        </span>
        <div className="mt-4 rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] px-3 py-2.5">
          <p className="text-[9px] text-brand-muted">Custom domain</p>
          <p className="text-[12px] font-semibold text-brand-navy">www.northlineconstruction.com</p>
        </div>
        <ol className="mt-4 grid gap-1 sm:grid-cols-5">
          {["Add domain", "Configure DNS", "Verify domain", "Activate SSL", "Publish"].map((s, i) => (
            <li key={s} className="rounded border border-brand-line bg-white px-2 py-1.5 text-center text-[8px] font-semibold text-brand-navy">
              {String(i + 1).padStart(2, "0")} {s}
            </li>
          ))}
        </ol>
      </div>
    </BrowserFrame>
  );
}

export function WbDnsUI() {
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / dns">
      <div className="p-4">
        <div className="space-y-2 text-[10px]">
          <div className="rounded border border-brand-line bg-[#FAFBFD] px-3 py-2">
            <p className="font-semibold text-brand-navy">CNAME</p>
            <p className="text-brand-muted">www → sites.cms.io</p>
          </div>
          <div className="rounded border border-brand-line bg-[#FAFBFD] px-3 py-2">
            <p className="font-semibold text-brand-navy">A RECORD</p>
            <p className="text-brand-muted">@ → required target</p>
          </div>
          <div className="rounded border border-brand-line bg-[#FAFBFD] px-3 py-2">
            <p className="font-semibold text-brand-navy">TXT</p>
            <p className="text-brand-muted">Verification token</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[9px] font-semibold text-amber-700">
            DNS verification pending
          </span>
          <span className="rounded border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[9px] font-semibold text-brand-navy">
            DNS verified ✓
          </span>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function WbSslUI() {
  const steps = [
    { label: "Domain", status: "VERIFIED", done: true },
    { label: "SSL", status: "ACTIVE", done: true },
    { label: "Website", status: "LIVE", done: true },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / website-builder / ssl" dark>
      <div className="p-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {steps.map((s, i) => (
            <span key={s.label} className="flex items-center gap-2">
              <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.06] px-3 py-2 text-center">
                <p className="text-[8px] text-slate-400">{s.label}</p>
                <p className="text-[11px] font-bold text-brand-orange">{s.status}</p>
              </div>
              {i < steps.length - 1 ? <span className="text-slate-500">↓</span> : null}
            </span>
          ))}
        </div>
        <ul className="mx-auto mt-4 max-w-xs space-y-1.5 text-[10px] text-slate-300">
          <li>HTTPS enabled</li>
          <li>SSL active</li>
          <li>Primary domain · www.northlineconstruction.com</li>
          <li>www redirect configured</li>
        </ul>
      </div>
    </BrowserFrame>
  );
}

export function WbContactLeadUI() {
  const fields = ["Name", "Email", "Phone", "Message", "Project Type"];
  return (
    <BrowserFrame url="app.vertexcms.com / website / contact → crm" dark>
      <div className="grid gap-3 p-3 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white p-3">
          <p className="text-[9px] font-bold uppercase text-brand-muted">Public website</p>
          <p className="mt-1 text-[11px] font-semibold text-brand-navy">Contact form</p>
          <div className="mt-2 space-y-1.5">
            {fields.map((f) => (
              <div key={f} className="rounded border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[9px] text-brand-muted">
                {f}
              </div>
            ))}
          </div>
          <span className="mt-2 inline-block rounded bg-brand-orange px-3 py-1 text-[9px] font-semibold text-white">
            Send Inquiry
          </span>
        </div>
        <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.06] p-3">
          <p className="text-[9px] font-bold uppercase text-brand-orange">Vertex CMS CRM</p>
          <p className="mt-1 text-[11px] font-semibold text-white">New Lead</p>
          <div className="mt-2 space-y-1 text-[9px] text-slate-300">
            {fields.map((f) => (
              <p key={f}>{f}: —</p>
            ))}
          </div>
          <p className="mt-2 text-[10px] font-semibold text-brand-orange">Status: New</p>
        </div>
      </div>
      <div className="mx-3 mb-3 flex items-center justify-center gap-2 text-[9px] text-slate-400 sm:mx-4">
        <span>Website inquiry</span>
        <span>↓</span>
        <span>Vertex CMS</span>
        <span>↓</span>
        <span className="text-brand-orange">CRM Lead</span>
      </div>
    </BrowserFrame>
  );
}

/** Leads (Business Growth module) marketing mockups */

const LEADS_NAV = ["Pipeline", "My Leads", "Follow-ups", "Sources", "Won / Lost"];

function LeadBadge({
  label,
  tone = "muted",
}: {
  label: string;
  tone?: "muted" | "orange" | "navy" | "ok" | "warn" | "lost";
}) {
  const cls =
    tone === "orange"
      ? "border-brand-orange/35 bg-brand-orange/10 text-brand-orange"
      : tone === "navy"
        ? "border-brand-navy/20 bg-brand-navy text-white"
        : tone === "ok"
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : tone === "warn"
            ? "border-amber-200 bg-amber-50 text-amber-800"
            : tone === "lost"
              ? "border-brand-line bg-[#F4F7FB] text-brand-muted"
              : "border-brand-line bg-white text-brand-navy";
  return (
    <span className={"inline-flex rounded-sm border px-1.5 py-0.5 text-[8px] font-semibold " + cls}>{label}</span>
  );
}

function LeadsShell({
  url,
  activeNav,
  children,
  dark = false,
}: {
  url: string;
  activeNav: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <BrowserFrame url={url} dark={dark}>
      <div className={dark ? "bg-[#0A1F35]" : "bg-[#F7F9FC]"}>
        <div
          className={
            "flex items-center justify-between border-b px-4 py-2.5 " +
            (dark ? "border-white/10 bg-white/[0.03]" : "border-brand-line bg-white")
          }
        >
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-brand-navy text-[8px] font-bold text-white">
              VC
            </span>
            <div>
              <p className={"text-[11px] font-semibold " + (dark ? "text-white" : "text-brand-navy")}>Leads</p>
              <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Business Growth</p>
            </div>
          </div>
          <span
            className={
              "hidden rounded-sm border px-2 py-1 text-[8px] font-semibold sm:inline " +
              (dark ? "border-white/15 text-slate-300" : "border-brand-line bg-[#FAFBFD] text-brand-muted")
            }
          >
            Northline Construction
          </span>
        </div>
        <div className="grid lg:grid-cols-[132px_minmax(0,1fr)]">
          <div className={"border-b p-2.5 lg:border-b-0 lg:border-r " + (dark ? "border-white/10" : "border-brand-line bg-white")}>
            <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
              {LEADS_NAV.map((item) => (
                <li
                  key={item}
                  className={
                    "shrink-0 rounded-md px-2 py-1.5 text-[9px] font-semibold " +
                    (item === activeNav
                      ? "bg-brand-orange/10 text-brand-orange"
                      : dark
                        ? "text-slate-400"
                        : "text-brand-muted")
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function LeadsHeroUI() {
  const rows = [
    { company: "Riverside Medical Center", contact: "Sarah Chen", value: "$2.4M", source: "Referral", owner: "A. Morgan", status: "Qualified", action: "Sep 14 call", prob: "70%", last: "Today", attention: true },
    { company: "Northline Commercial", contact: "David Park", value: "$1.8M", source: "Website", owner: "J. Lee", status: "Proposal", action: "Send SOV draft", prob: "55%", last: "Yesterday", attention: true },
    { company: "Harbor Point Development", contact: "Maria Santos", value: "$3.1M", source: "Partner", owner: "A. Morgan", status: "Contacted", action: "Qualify fit", prob: "40%", last: "Sep 09", attention: false },
    { company: "Westgate Retail Group", contact: "Tom Walsh", value: "$980K", source: "Repeat", owner: "S. Reed", status: "New", action: "First outreach", prob: "20%", last: "Sep 10", attention: false },
    { company: "Summit Industrial", contact: "Lisa Nguyen", value: "$1.2M", source: "Inbound", owner: "J. Lee", status: "Negotiation", action: "Review terms", prob: "65%", last: "Sep 08", attention: false },
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads" activeNav="Pipeline" dark>
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["New", "Contacted", "Qualified", "Proposal", "Negotiation", "Won", "Lost"].map((stage, i) => (
            <span
              key={stage}
              className={
                "rounded-sm border px-2 py-1 text-[8px] font-semibold " +
                (i === 2 ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange" : "border-white/10 text-slate-300")
              }
            >
              {stage}
            </span>
          ))}
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[620px]">
            <div className="grid grid-cols-[1.2fr_0.7fr_0.5fr_0.55fr_0.5fr_0.55fr_0.7fr_0.4fr] gap-1 border-b border-white/10 pb-1.5 text-[7px] font-semibold uppercase tracking-wide text-slate-400">
              <span>Lead</span>
              <span>Contact</span>
              <span>Value</span>
              <span>Source</span>
              <span>Owner</span>
              <span>Status</span>
              <span>Next follow-up</span>
              <span>Prob.</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.company}
                className={
                  "grid grid-cols-[1.2fr_0.7fr_0.5fr_0.55fr_0.5fr_0.55fr_0.7fr_0.4fr] items-center gap-1 border-b border-white/10 py-2 text-[9px] last:border-0 " +
                  (row.attention ? "bg-brand-orange/[0.06]" : "")
                }
              >
                <span className={"font-semibold " + (row.attention ? "text-brand-orange" : "text-white")}>{row.company}</span>
                <span className="text-slate-300">{row.contact}</span>
                <span className="font-semibold text-white">{row.value}</span>
                <span className="text-slate-400">{row.source}</span>
                <span className="text-slate-300">{row.owner}</span>
                <span className="text-slate-300">{row.status}</span>
                <span className={row.attention ? "font-semibold text-brand-orange" : "text-slate-400"}>{row.action}</span>
                <span className="text-slate-400">{row.prob}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsWorkspaceUI() {
  const columns = [
    {
      stage: "New",
      items: [{ company: "Westgate Retail Group", contact: "Tom Walsh", value: "$980K", source: "Repeat", owner: "S. Reed", action: "First outreach", last: "Sep 10", attention: false }],
    },
    {
      stage: "Contacted",
      items: [{ company: "Harbor Point Development", contact: "Maria Santos", value: "$3.1M", source: "Partner", owner: "A. Morgan", action: "Qualify fit", last: "Sep 09", attention: false }],
    },
    {
      stage: "Qualified",
      items: [{ company: "Riverside Medical Center", contact: "Sarah Chen", value: "$2.4M", source: "Referral", owner: "A. Morgan", action: "Sep 14 call", last: "Today", attention: true }],
    },
    {
      stage: "Proposal",
      items: [{ company: "Northline Commercial", contact: "David Park", value: "$1.8M", source: "Website", owner: "J. Lee", action: "Send SOV draft", last: "Yesterday", attention: true }],
    },
    {
      stage: "Negotiation",
      items: [{ company: "Summit Industrial", contact: "Lisa Nguyen", value: "$1.2M", source: "Inbound", owner: "J. Lee", action: "Review terms", last: "Sep 08", attention: false }],
    },
    {
      stage: "Won",
      items: [{ company: "Cedar Clinic TI", contact: "Priya Shah", value: "$640K", source: "Referral", owner: "A. Morgan", action: "Create project", last: "Sep 07", attention: false }],
    },
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / pipeline" activeNav="Pipeline">
      <div className="p-3 sm:p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Active Leads", "18"],
            ["Qualified Leads", "7"],
            ["Pipeline Value", "$8.4M"],
            ["Closing This Month", "3"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-brand-line bg-white px-2.5 py-2">
              <p className="text-[8px] text-brand-muted">{label}</p>
              <p className="text-[12px] font-bold text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["All Leads", "My Leads", "Stage", "Source", "Owner", "Date"].map((f, i) => (
            <span
              key={f}
              className={
                "rounded-sm border px-2 py-1 text-[8px] font-semibold " +
                (i === 0 ? "border-brand-navy bg-brand-navy text-white" : "border-brand-line bg-white text-brand-muted")
              }
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-3 overflow-x-auto">
          <div className="flex min-w-[720px] gap-2">
            {columns.map((col) => (
              <div key={col.stage} className="min-w-[132px] flex-1">
                <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wide text-brand-muted">{col.stage}</p>
                <div className="space-y-2">
                  {col.items.map((item) => (
                    <div
                      key={item.company}
                      className={
                        "rounded-lg border px-2.5 py-2 " +
                        (item.attention ? "border-brand-orange/35 bg-brand-orange/[0.04]" : "border-brand-line bg-white")
                      }
                    >
                      <p className={"text-[10px] font-semibold " + (item.attention ? "text-brand-orange" : "text-brand-navy")}>
                        {item.company}
                      </p>
                      <p className="text-[8px] text-brand-muted">{item.contact}</p>
                      <p className="mt-1.5 text-[9px] font-semibold text-brand-navy">{item.value}</p>
                      <div className="mt-1 space-y-0.5 text-[8px] text-brand-muted">
                        <p>{item.source} · {item.owner}</p>
                        <p>{item.action}</p>
                        <p>Last · {item.last}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsWorkflowUI() {
  return (
    <LeadsShell url="app.vertexcms.com / leads / harbor-point" activeNav="Pipeline">
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Lead detail</p>
        <p className="mt-1 text-[14px] font-semibold text-brand-navy">Harbor Point Development</p>
        <p className="text-[11px] text-brand-muted">Mixed-use · Contacted · Owner · Alex Morgan</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Capture", "Qualify", "Follow up", "Convert"].map((s, i) => (
            <span
              key={s}
              className={
                "rounded-sm border px-2 py-1 text-[8px] font-semibold " +
                (i === 1 ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange" : "border-brand-line text-brand-muted")
              }
            >
              0{i + 1} {s}
            </span>
          ))}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            ["Project type", "Mixed-use"],
            ["Location", "Harbor District"],
            ["Estimated value", "$3.1M"],
            ["Expected start", "Q1 2027"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-brand-line bg-white px-3 py-2.5">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Next step</p>
          <p className="mt-1 text-[11px] text-brand-navy">Complete qualification review before assigning estimating</p>
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsDetailUI() {
  return (
    <LeadsShell url="app.vertexcms.com / leads / riverside-medical" activeNav="My Leads">
      <div className="grid sm:grid-cols-[1fr_168px]">
        <div className="border-b border-brand-line p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Lead profile</p>
          <p className="mt-1 text-[14px] font-semibold text-brand-navy">Riverside Medical Center</p>
          <p className="text-[11px] text-brand-muted">Medical Center Expansion · Qualified</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ["Company", "Apex Group"],
              ["Contact", "Sarah Chen"],
              ["Project type", "Healthcare"],
              ["Location", "Austin, TX"],
              ["Est. value", "$2.4M"],
              ["Expected start", "Q1 2027"],
              ["Source", "Referral"],
              ["Owner", "Alex Morgan"],
              ["Probability", "70%"],
              ["Go / no-go", "Go"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-brand-line bg-white px-2.5 py-2">
                <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Notes</p>
          <p className="mt-1 rounded-md border border-brand-line bg-white px-2.5 py-2 text-[10px] text-brand-muted">
            Owner wants GMP pricing after schematic set. Site constraints on east wing.
          </p>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-orange">Next follow-up</p>
          <p className="mt-1 text-[11px] font-semibold text-brand-navy">Sep 14 · Discovery call</p>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">Recent activity</p>
          <ul className="mt-2 space-y-1.5 text-[10px] text-brand-muted">
            <li>Inquiry received</li>
            <li>Lead assigned</li>
            <li>Qualification completed</li>
            <li>Follow-up scheduled</li>
          </ul>
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsActivityUI() {
  const events = [
    ["Today · 9:14 AM", "Call completed", "Discovery call with Sarah Chen"],
    ["Today · 8:40 AM", "Follow-up scheduled", "Sep 14 · Owner: Alex Morgan"],
    ["Sep 10", "Project details updated", "Value set to $2.4M · Austin, TX"],
    ["Sep 09", "Note added", "GMP requested after schematic set"],
    ["Sep 08", "Lead assigned", "Owner · Alex Morgan"],
    ["Sep 08", "Status changed", "New → Qualified"],
    ["Sep 07", "New inquiry received", "Referral · Apex Group"],
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / riverside-medical / activity" activeNav="My Leads" dark>
      <div className="p-4">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-orange">Activity</p>
        <p className="mt-1 text-[13px] font-semibold text-white">Riverside Medical Center</p>
        <ol className="mt-3 space-y-2">
          {events.map(([when, title, detail]) => (
            <li key={title + when} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
              <p className="text-[8px] text-slate-400">{when}</p>
              <p className="text-[11px] font-semibold text-white">{title}</p>
              <p className="text-[10px] text-slate-300">{detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </LeadsShell>
  );
}

export function LeadsDarkStoryUI() {
  return (
    <LeadsShell url="app.vertexcms.com / leads" activeNav="Pipeline" dark>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["Active", "18"],
            ["Qualified", "7"],
            ["Pipeline", "$8.4M"],
            ["Follow-ups", "6"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-2">
              <p className="text-[8px] text-slate-400">{k}</p>
              <p className="text-[12px] font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-brand-orange/30 bg-brand-orange/[0.06] px-3 py-3">
          <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Needs attention</p>
          <p className="mt-1 text-[12px] font-semibold text-white">Riverside Medical Center · Qualified</p>
          <p className="mt-0.5 text-[10px] text-slate-300">Follow up with Sarah · Due Sep 14 · $2.4M</p>
        </div>
        <ul className="mt-3 space-y-1.5">
          {[
            ["Northline Commercial", "Proposal · $1.8M"],
            ["Harbor Point Development", "Contacted · $3.1M"],
            ["Summit Industrial", "Negotiation · $1.2M"],
          ].map(([name, meta]) => (
            <li key={name} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
              <span className="text-[11px] font-semibold text-white">{name}</span>
              <span className="text-[10px] text-slate-400">{meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </LeadsShell>
  );
}

export function LeadsQualifyUI() {
  return (
    <LeadsShell url="app.vertexcms.com / leads / harbor-point / qualify" activeNav="Pipeline">
      <div className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Qualification</p>
            <p className="mt-1 text-[13px] font-semibold text-brand-navy">Harbor Point Development</p>
          </div>
          <LeadBadge label="Needs Review" tone="warn" />
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            ["Project type", "Mixed-use"],
            ["Location", "Harbor District"],
            ["Est. contract value", "$3.1M"],
            ["Expected start", "Q1 2027"],
            ["Project stage", "Schematic"],
            ["Lead source", "Partner"],
            ["Decision maker", "Maria Santos"],
            ["Probability", "40%"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-brand-line bg-white px-2.5 py-2">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
              <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <LeadBadge label="Qualified" tone="ok" />
          <LeadBadge label="Needs Review" tone="warn" />
          <LeadBadge label="Not a Fit" tone="lost" />
        </div>
        <p className="mt-3 text-[10px] text-brand-muted">Go / no-go: review delivery capacity before advancing to proposal.</p>
      </div>
    </LeadsShell>
  );
}

export function LeadsFollowUpUI() {
  const rows = [
    { lead: "Riverside Medical Center", task: "Follow up with Sarah Chen", owner: "Sarah", due: "Sep 14", status: "Qualified", last: "Today", state: "Due" },
    { lead: "Northline Commercial", task: "Send proposal draft", owner: "J. Lee", due: "Sep 12", status: "Proposal", last: "Yesterday", state: "Overdue" },
    { lead: "Harbor Point Development", task: "Complete qualification", owner: "A. Morgan", due: "Sep 16", status: "Contacted", last: "Sep 09", state: "Upcoming" },
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / follow-ups" activeNav="Follow-ups">
      <div className="p-4">
        <p className="text-[12px] font-semibold text-brand-navy">Follow-ups</p>
        <div className="mt-3 space-y-2">
          {rows.map((row) => (
            <div
              key={row.lead}
              className={
                "rounded-lg border px-3 py-2.5 " +
                (row.state === "Overdue"
                  ? "border-amber-200 bg-amber-50/60"
                  : row.state === "Due"
                    ? "border-brand-orange/35 bg-brand-orange/[0.04]"
                    : "border-brand-line bg-white")
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold text-brand-navy">{row.task}</p>
                  <p className="text-[9px] text-brand-muted">{row.lead}</p>
                </div>
                <LeadBadge
                  label={row.state}
                  tone={row.state === "Overdue" ? "warn" : row.state === "Due" ? "orange" : "muted"}
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-3 text-[9px] text-brand-muted">
                <span>Owner · {row.owner}</span>
                <span>Due · {row.due}</span>
                <span>Status · {row.status}</span>
                <span>Last contact · {row.last}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsNotesUI() {
  const items = [
    ["Call", "Sep 11 · 9:14 AM", "Discovery call completed. Owner confirmed Q1 start."],
    ["Note", "Sep 10 · 4:02 PM", "Site constraints on east wing. Need estimating input."],
    ["Meeting", "Sep 09 · 11:00 AM", "Internal qualification review with Alex Morgan."],
    ["Follow-up", "Sep 08 · 2:20 PM", "Next conversation scheduled for Sep 14."],
    ["Internal", "Sep 08 · 10:05 AM", "Assign to healthcare pursuit team."],
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / riverside-medical / history" activeNav="My Leads">
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Lead history</p>
        <p className="mt-1 text-[13px] font-semibold text-brand-navy">Riverside Medical Center</p>
        <ul className="mt-3 space-y-2">
          {items.map(([type, when, body]) => (
            <li key={when} className="rounded-lg border border-brand-line bg-white px-3 py-2.5">
              <div className="flex items-center justify-between gap-2">
                <LeadBadge label={type} tone={type === "Follow-up" ? "orange" : "muted"} />
                <span className="text-[8px] text-brand-muted">{when}</span>
              </div>
              <p className="mt-1.5 text-[11px] text-brand-navy">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </LeadsShell>
  );
}

export function LeadsPriorityUI() {
  const rows = [
    { lead: "Riverside Medical Center", value: "$2.4M", stage: "Qualified", prob: "70%", next: "Sep 14 call", owner: "A. Morgan", close: "Oct 24", tag: "High Priority" },
    { lead: "Northline Commercial", value: "$1.8M", stage: "Proposal", prob: "55%", next: "Send SOV", owner: "J. Lee", close: "Oct 30", tag: "Needs Follow-up" },
    { lead: "Summit Industrial", value: "$1.2M", stage: "Negotiation", prob: "65%", next: "Review terms", owner: "J. Lee", close: "Nov 02", tag: "At Risk" },
    { lead: "Harbor Point Development", value: "$3.1M", stage: "Contacted", prob: "40%", next: "Qualify fit", owner: "A. Morgan", close: "Nov 18", tag: "Recently Qualified" },
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / priority" activeNav="Pipeline">
      <div className="overflow-x-auto p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          <LeadBadge label="High Priority" tone="orange" />
          <LeadBadge label="Needs Follow-up" tone="warn" />
          <LeadBadge label="At Risk" tone="lost" />
          <LeadBadge label="Recently Qualified" tone="ok" />
        </div>
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[1.3fr_0.5fr_0.6fr_0.4fr_0.8fr_0.5fr_0.5fr] gap-1 border-b border-brand-line pb-1.5 text-[8px] font-semibold uppercase tracking-wide text-brand-muted">
            <span>Lead</span>
            <span>Value</span>
            <span>Stage</span>
            <span>Prob.</span>
            <span>Next action</span>
            <span>Owner</span>
            <span>Close</span>
          </div>
          {rows.map((row) => (
            <div key={row.lead} className="grid grid-cols-[1.3fr_0.5fr_0.6fr_0.4fr_0.8fr_0.5fr_0.5fr] items-center gap-1 border-b border-brand-line/80 py-2 text-[10px] last:border-0">
              <span>
                <span className="font-semibold text-brand-navy">{row.lead}</span>
                <span className="mt-0.5 block text-[8px] text-brand-orange">{row.tag}</span>
              </span>
              <span className="font-semibold text-brand-navy">{row.value}</span>
              <span className="text-brand-muted">{row.stage}</span>
              <span className="text-brand-navy">{row.prob}</span>
              <span className="text-brand-muted">{row.next}</span>
              <span className="text-brand-muted">{row.owner}</span>
              <span className="text-brand-muted">{row.close}</span>
            </div>
          ))}
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsHandoffUI() {
  const steps = ["Lead", "Qualified", "Estimate / Proposal", "Awarded", "Project"];
  return (
    <LeadsShell url="app.vertexcms.com / leads / cedar-clinic / convert" activeNav="Won / Lost">
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Handoff</p>
        <p className="mt-1 text-[13px] font-semibold text-brand-navy">Cedar Clinic TI · Won</p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {steps.map((s, i) => (
            <span key={s} className="flex items-center gap-1.5">
              <span
                className={
                  "rounded-sm border px-2 py-1 text-[8px] font-semibold " +
                  (i >= 3 ? "border-brand-orange/40 bg-brand-orange/10 text-brand-orange" : "border-brand-line bg-white text-brand-navy")
                }
              >
                {s}
              </span>
              {i < steps.length - 1 ? <span className="text-[8px] text-brand-muted">→</span> : null}
            </span>
          ))}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-brand-line bg-white px-3 py-2.5">
            <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">From lead</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-navy">$640K · Tenant improvement</p>
            <p className="text-[9px] text-brand-muted">Win recorded · Sep 07</p>
          </div>
          <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] px-3 py-2.5">
            <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-orange">Create project</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-navy">Cedar Clinic TI</p>
            <p className="text-[9px] text-brand-muted">Carry company, value, and owner into delivery</p>
          </div>
        </div>
      </div>
    </LeadsShell>
  );
}

export function LeadsPipelineDashUI() {
  const stages = [
    ["New", "4", "w-[28%]"],
    ["Contacted", "3", "w-[22%]"],
    ["Qualified", "7", "w-[48%]"],
    ["Proposal", "2", "w-[16%]"],
    ["Negotiation", "2", "w-[16%]"],
    ["Won", "5", "w-[36%]"],
    ["Lost", "3", "w-[20%]"],
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / pipeline-view" activeNav="Pipeline">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            ["Total pipeline", "$8.4M"],
            ["Qualified pipeline", "$5.1M"],
            ["Won", "$2.9M"],
            ["Lost", "$1.1M"],
            ["Expected close", "$3.6M"],
            ["Active leads", "18"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-brand-line bg-white px-2.5 py-2">
              <p className="text-[8px] text-brand-muted">{k}</p>
              <p className="text-[12px] font-bold text-brand-navy">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Leads by stage</p>
        <ul className="mt-2 space-y-1.5">
          {stages.map(([label, count, width]) => (
            <li key={label} className="flex items-center gap-2">
              <span className="w-20 text-[9px] text-brand-muted">{label}</span>
              <div className="h-1.5 flex-1 rounded-full bg-brand-line">
                <div className={"h-full rounded-full bg-brand-navy " + width} />
              </div>
              <span className="w-4 text-right text-[9px] font-semibold text-brand-navy">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </LeadsShell>
  );
}

export function LeadsSourcesUI() {
  const sources = [
    ["Website", "8", "3", "38%", "$1.8M"],
    ["Referral", "6", "4", "67%", "$3.0M"],
    ["Repeat client", "4", "3", "75%", "$1.6M"],
    ["Partner", "3", "1", "33%", "$3.1M"],
    ["Inbound inquiry", "5", "2", "40%", "$1.2M"],
    ["Other", "2", "0", "—", "$0.4M"],
  ];
  return (
    <LeadsShell url="app.vertexcms.com / leads / sources" activeNav="Sources">
      <div className="overflow-x-auto p-4">
        <p className="text-[12px] font-semibold text-brand-navy">Lead sources</p>
        <div className="mt-3 min-w-[420px]">
          <div className="grid grid-cols-5 gap-1 border-b border-brand-line pb-1.5 text-[8px] font-semibold uppercase tracking-wide text-brand-muted">
            <span>Source</span>
            <span>Leads</span>
            <span>Qualified</span>
            <span>Conversion</span>
            <span>Pipeline</span>
          </div>
          {sources.map((row) => (
            <div key={row[0]} className="grid grid-cols-5 items-center gap-1 border-b border-brand-line/80 py-2 text-[10px] last:border-0">
              <span className="font-semibold text-brand-navy">{row[0]}</span>
              <span className="text-brand-muted">{row[1]}</span>
              <span className="text-brand-muted">{row[2]}</span>
              <span className="text-brand-navy">{row[3]}</span>
              <span className="font-semibold text-brand-navy">{row[4]}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9px] text-brand-muted">Website inquiries create lead records from the connected company website.</p>
      </div>
    </LeadsShell>
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

/** Customer Portals (Business Growth module) — four documented portal experiences */

const CP_PROJECT = "Riverside Medical Center";

function CpPortalShell({
  role,
  roleLabel,
  url,
  nav,
  activeNav,
  children,
}: {
  role: string;
  roleLabel: string;
  url: string;
  nav: string[];
  activeNav: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F7F9FC]">
      <div className="flex items-center justify-between border-b border-brand-line bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-navy text-[10px] font-bold text-white">
            VC
          </div>
          <div>
            <p className="text-[11px] font-semibold text-brand-navy">Vertex CMS</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{roleLabel}</p>
          </div>
        </div>
        <span className="hidden rounded-sm border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[9px] font-semibold text-brand-muted sm:inline">
          {CP_PROJECT}
        </span>
      </div>
      <div className="grid lg:grid-cols-[168px_minmax(0,1fr)]">
        <div className="border-b border-brand-line bg-white p-3 lg:border-b-0 lg:border-r">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Portal</p>
          <p className="mt-0.5 text-[12px] font-bold text-brand-navy">{role}</p>
          <p className="mt-1 text-[9px] text-brand-muted">Assigned scope only</p>
          <ul className="mt-3 space-y-0.5">
            {nav.map((item) => (
              <li
                key={item}
                className={
                  "rounded-md px-2 py-1.5 text-[10px] font-semibold " +
                  (item === activeNav ? "bg-brand-orange/10 text-brand-orange" : "text-brand-muted")
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function CpPortalContent({ detailed = false }: { detailed?: boolean }) {
  const milestones = [
    { name: "Foundation complete", date: "Aug 12", done: true },
    { name: "Structural steel", date: "Sep 28", done: true },
    { name: "MEP rough-in", date: "Oct 18", done: false },
    { name: "Substantial completion", date: "Dec 06", done: false },
  ];
  const documents = [
    { name: "Architectural Set — Rev C", type: "Drawings", date: "Sep 04" },
    { name: "Weekly Progress Report", type: "Report", date: "Sep 08" },
    { name: "Approved Submittal — Curtain Wall", type: "Submittal", date: "Sep 06" },
  ];
  const upcoming = [
    { item: "Owner walkthrough", date: "Sep 14" },
    { item: "Ceiling inspection", date: "Sep 19" },
    { item: "Pay application review", date: "Sep 22" },
  ];

  return (
    <div className="bg-[#F7F9FC]">
      <div className="flex items-center justify-between border-b border-brand-line bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-navy text-[10px] font-bold text-white">
            NL
          </div>
          <div>
            <p className="text-[11px] font-semibold text-brand-navy">Northline Construction</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Client Portal</p>
          </div>
        </div>
        <span className="rounded-sm border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
          On Track
        </span>
      </div>

      <div className="border-b border-brand-line bg-white px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Project</p>
        <p className="mt-0.5 text-[14px] font-bold text-brand-navy">Riverside Medical Center</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div className="min-w-[120px] flex-1">
            <div className="mb-1 flex items-center justify-between text-[9px]">
              <span className="font-semibold text-brand-muted">Overall progress</span>
              <span className="font-bold text-brand-navy">68%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-brand-line">
              <div className="h-full w-[68%] rounded-full bg-brand-orange" />
            </div>
          </div>
          <div className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2">
            <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">Current phase</p>
            <p className="text-[11px] font-semibold text-brand-navy">Interior build-out</p>
          </div>
        </div>
      </div>

      <div className={"grid gap-0 " + (detailed ? "lg:grid-cols-[1fr_220px]" : "")}>
        <div className="p-4">
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Recent project update</p>
            <p className="mt-1.5 text-[11px] font-semibold text-brand-navy">MEP rough-in progressing on Level 3</p>
            <p className="mt-1 text-[10px] leading-relaxed text-brand-muted">
              Mechanical and electrical rough-in is underway on the third floor. Structural steel inspection passed
              last week and ceiling grid installation begins Sep 16.
            </p>
            <p className="mt-2 text-[9px] text-brand-muted">Posted Sep 08 · Project team</p>
          </div>

          {detailed ? (
            <>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-brand-line bg-white p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Milestones</p>
                  <ul className="mt-2 space-y-1.5">
                    {milestones.map((m) => (
                      <li key={m.name} className="flex items-center justify-between text-[10px]">
                        <span className={m.done ? "text-brand-navy" : "text-brand-muted"}>{m.name}</span>
                        <span className={m.done ? "font-semibold text-emerald-600" : "text-brand-muted"}>
                          {m.done ? "Complete" : m.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-brand-line bg-white p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Upcoming</p>
                  <ul className="mt-2 space-y-1.5">
                    {upcoming.map((u) => (
                      <li key={u.item} className="flex items-center justify-between text-[10px]">
                        <span className="text-brand-navy">{u.item}</span>
                        <span className="text-brand-muted">{u.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-3 rounded-lg border border-brand-line bg-white p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Documents</p>
                <ul className="mt-2 space-y-1.5">
                  {documents.map((doc) => (
                    <li
                      key={doc.name}
                      className="flex items-center justify-between rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2 text-[10px]"
                    >
                      <div>
                        <p className="font-semibold text-brand-navy">{doc.name}</p>
                        <p className="text-[9px] text-brand-muted">
                          {doc.type} · {doc.date}
                        </p>
                      </div>
                      <span className="text-brand-orange">View</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-brand-line bg-white p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Documents</p>
                <p className="mt-1 text-[10px] font-semibold text-brand-navy">Architectural Set — Rev C</p>
                <p className="text-[9px] text-brand-muted">Drawings · Sep 04</p>
              </div>
              <div className="rounded-lg border border-brand-line bg-white p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Next milestone</p>
                <p className="mt-1 text-[10px] font-semibold text-brand-navy">MEP rough-in</p>
                <p className="text-[9px] text-brand-muted">Target · Oct 18</p>
              </div>
            </div>
          )}
        </div>

        {detailed ? (
          <div className="border-t border-brand-line bg-white p-4 lg:border-l lg:border-t-0">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Project overview</p>
            <ul className="mt-2 space-y-2 text-[10px] text-brand-muted">
              <li>
                <span className="font-semibold text-brand-navy">Location</span>
                <br />
                Austin, TX
              </li>
              <li>
                <span className="font-semibold text-brand-navy">Contract value</span>
                <br />
                $4.8M
              </li>
              <li>
                <span className="font-semibold text-brand-navy">Approved billing</span>
                <br />
                Pay App #6 · $842K
              </li>
            </ul>
            <div className="mt-4 rounded-md border border-brand-orange/25 bg-brand-orange/[0.04] px-2.5 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Awaiting approval</p>
              <p className="mt-1 text-[10px] font-semibold text-brand-navy">Change Order CO-014</p>
              <p className="text-[9px] text-brand-muted">Owner review · Due Sep 12</p>
            </div>
            <div className="mt-3 rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Recent activity</p>
              <ul className="mt-1.5 space-y-1 text-[9px] text-brand-muted">
                <li>Progress update published</li>
                <li>Drawing set Rev C shared</li>
                <li>Pay application submitted</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function CpHeroUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical">
      <CpPortalShell
        role="Client Portal"
        roleLabel="Project workspace"
        url="portal.vertexcms.com"
        nav={["Overview", "Updates", "Documents", "RFIs", "Submittals", "Approvals", "Contacts"]}
        activeNav="Overview"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Project</p>
              <p className="text-[14px] font-bold text-brand-navy">{CP_PROJECT}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
                On Track
              </span>
              <span className="rounded-sm border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[9px] font-semibold text-brand-navy">
                68% complete
              </span>
            </div>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-brand-line">
            <div className="h-full w-[68%] rounded-full bg-brand-orange" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-orange/30 bg-brand-orange/[0.04] p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Pending approvals</p>
              <p className="mt-1 text-[11px] font-semibold text-brand-navy">Pay App #07 · Change Order #12</p>
              <p className="mt-1 text-[10px] text-brand-muted">2 items awaiting review</p>
            </div>
            <div className="rounded-lg border border-brand-line bg-white p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Open items</p>
              <p className="mt-1 text-[11px] font-semibold text-brand-navy">RFI-204 · SUB-118</p>
              <p className="mt-1 text-[10px] text-brand-muted">1 RFI · 1 submittal in review</p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              ["Documents", "12 shared"],
              ["RFIs", "3 visible"],
              ["Submittals", "5 in review"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-brand-line bg-[#FAFBFD] p-2.5">
                <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">{label}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-brand-navy">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Recent update</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-navy">MEP rough-in progressing on Level 3</p>
            <p className="mt-1 text-[10px] text-brand-muted">Posted Sep 08 · Project team</p>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Recent activity</p>
            <ul className="mt-2 space-y-1.5 text-[10px] text-brand-muted">
              <li>Document shared · Architectural Set Rev C</li>
              <li>Approval requested · Pay Application #07</li>
              <li>Submittal submitted · Curtain wall system</li>
            </ul>
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpOwnerPortalUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / owner / pay-apps">
      <CpPortalShell
        role="Owner Portal"
        roleLabel="Owner access"
        url="portal.vertexcms.com"
        nav={["Overview", "Budget", "Schedule", "Photos", "Pay Applications", "Change Orders", "Invoices", "Warranty"]}
        activeNav="Pay Applications"
      >
        <div className="space-y-3">
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold text-brand-navy">Pay Application #07</p>
                <p className="text-[10px] text-brand-muted">Period ending Aug 31 · G702/G703 attached</p>
              </div>
              <span className="rounded-sm bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-700">Pending</span>
            </div>
            <p className="mt-2 text-[18px] font-bold text-brand-navy">$892,400</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-sm bg-brand-navy px-3 py-1.5 text-[10px] font-semibold text-white">Approve</span>
              <span className="rounded-sm border border-brand-line px-3 py-1.5 text-[10px] font-semibold text-brand-navy">Reject</span>
            </div>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold text-brand-navy">Change Order #12</p>
                <p className="text-[10px] text-brand-muted">Ceiling grid revision · Level 3</p>
              </div>
              <span className="rounded-sm bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-700">Pending</span>
            </div>
            <p className="mt-2 text-[14px] font-bold text-brand-navy">$48,200</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-sm bg-brand-navy px-3 py-1.5 text-[10px] font-semibold text-white">Approve</span>
              <span className="rounded-sm border border-brand-line px-3 py-1.5 text-[10px] font-semibold text-brand-navy">Reject</span>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-line bg-[#FAFBFD] p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Read-only budget</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">$4.8M committed</p>
            </div>
            <div className="rounded-lg border border-brand-line bg-[#FAFBFD] p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Draw request</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">DR-04 submitted</p>
            </div>
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpSubPortalUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / sub / scope">
      <CpPortalShell
        role="Subcontractor Portal"
        roleLabel="Assigned scope"
        url="portal.vertexcms.com"
        nav={["My Scope", "Bids", "Submittals", "COI", "Lien Waiver", "Invoices", "RFIs", "Schedule"]}
        activeNav="My Scope"
      >
        <div className="space-y-3">
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">My scope</p>
            <p className="mt-1 text-[12px] font-bold text-brand-navy">MEP Rough-in · Levels 2–3</p>
            <p className="text-[10px] text-brand-muted">{CP_PROJECT}</p>
          </div>
          <ul className="space-y-2">
            {[
              ["Bid PKG-118", "Draft → Submitted", "Submitted Sep 09"],
              ["Lien Waiver LW-044", "Ready to sign", "E-sign pending"],
              ["COI — General Liability", "Uploaded", "Valid through Dec 2026"],
              ["Invoice INV-2201", "Payment status", "Approved · $86,400"],
            ].map(([title, status, meta]) => (
              <li key={title} className="flex items-center justify-between rounded-lg border border-brand-line bg-white px-3 py-2.5">
                <div>
                  <p className="text-[11px] font-semibold text-brand-navy">{title}</p>
                  <p className="text-[9px] text-brand-muted">{meta}</p>
                </div>
                <span className="text-[10px] font-semibold text-brand-orange">{status}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-brand-line bg-[#FAFBFD] p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">RFI-198</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-navy">Ceiling coordination · Awaiting response</p>
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpVendorPortalUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / vendor / po-1048">
      <CpPortalShell
        role="Vendor Portal"
        roleLabel="Purchase orders"
        url="portal.vertexcms.com"
        nav={["Purchase Orders", "Delivery", "Invoices", "ASN", "Acknowledgments"]}
        activeNav="Purchase Orders"
      >
        <div className="space-y-3">
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold text-brand-navy">PO-1048 · Formwork materials</p>
                <p className="text-[10px] text-brand-muted">{CP_PROJECT}</p>
              </div>
              <span className="rounded-sm bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-700">Ack pending</span>
            </div>
            <p className="mt-2 text-[16px] font-bold text-brand-navy">$28,100</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-brand-line bg-[#FAFBFD] p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Delivered quantity</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">840 units</p>
            </div>
            <div className="rounded-lg border border-brand-line bg-[#FAFBFD] p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Delivery date</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">Sep 10, 2026</p>
            </div>
          </div>
          <ul className="space-y-2 text-[10px]">
            <li className="flex justify-between rounded-md border border-brand-line bg-white px-3 py-2">
              <span className="text-brand-navy">PO acknowledgment</span>
              <span className="font-semibold text-amber-700">Pending</span>
            </li>
            <li className="flex justify-between rounded-md border border-brand-line bg-white px-3 py-2">
              <span className="text-brand-navy">Invoice submission</span>
              <span className="font-semibold text-emerald-600">Submitted</span>
            </li>
            <li className="flex justify-between rounded-md border border-brand-line bg-white px-3 py-2">
              <span className="text-brand-navy">ASN</span>
              <span className="font-semibold text-brand-blue">Shipped</span>
            </li>
          </ul>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpArchitectPortalUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / architect / submittals">
      <CpPortalShell
        role="Architect Portal"
        roleLabel="Design review"
        url="portal.vertexcms.com"
        nav={["RFIs", "Submittals", "Drawings", "Revisions"]}
        activeNav="Submittals"
      >
        <div className="space-y-3">
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">RFI-204</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-navy">Curtain wall anchor detail</p>
            <p className="mt-1 text-[10px] text-brand-muted">Response submitted · Sep 08</p>
          </div>
          <div className="rounded-lg border border-brand-orange/25 bg-brand-orange/[0.04] p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Submittal SUB-118</p>
                <p className="mt-1 text-[11px] font-bold text-brand-navy">Curtain wall system</p>
              </div>
              <span className="rounded-sm bg-blue-50 px-2 py-0.5 text-[9px] font-semibold text-brand-blue">In review</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-brand-navy px-2.5 py-1 text-[9px] font-semibold text-white">Stamp</span>
              <span className="rounded-sm border border-brand-line bg-white px-2.5 py-1 text-[9px] font-semibold text-brand-navy">Add notes</span>
              <span className="rounded-sm border border-brand-line bg-white px-2.5 py-1 text-[9px] font-semibold text-brand-navy">Approve</span>
            </div>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Drawing revision</p>
            <p className="mt-1 text-[11px] font-semibold text-brand-navy">A-301 · Revision 06</p>
            <p className="mt-1 text-[10px] text-brand-muted">Pending approval · Notifies project team on stamp</p>
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpEsignUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / sub / lien-waiver">
      <div className="bg-[#F7F9FC] p-4">
        <div className="rounded-lg border border-brand-line bg-white p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Lien waiver · E-sign</p>
          <p className="mt-2 text-[14px] font-bold text-brand-navy">LW-044 · Conditional progress waiver</p>
          <p className="mt-1 text-[11px] text-brand-muted">{CP_PROJECT} · MEP Rough-in scope</p>
          <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-3">
            <p className="text-[11px] font-semibold text-emerald-800">Signed</p>
            <p className="mt-1 text-[10px] text-emerald-700">John Smith · Sep 09, 2026 · 2:14 PM</p>
          </div>
          <ul className="mt-4 space-y-2 border-t border-brand-line pt-4 text-[10px]">
            <li className="flex justify-between"><span className="text-brand-muted">IP address</span><span className="font-mono text-brand-navy">Recorded</span></li>
            <li className="flex justify-between"><span className="text-brand-muted">Timestamp</span><span className="font-mono text-brand-navy">2026-09-09T14:14:22Z</span></li>
            <li className="flex justify-between"><span className="text-brand-muted">Certificate</span><span className="font-semibold text-brand-navy">Stored</span></li>
            <li className="flex justify-between"><span className="text-brand-muted">Delivery</span><span className="text-brand-navy">Email-to-sign</span></li>
          </ul>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CpShowcaseUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical">
      <CpPortalContent detailed />
    </BrowserFrame>
  );
}

export function CpPortalScreenUI() {
  const sections = [
    { label: "Project Overview", active: false },
    { label: "Current Phase", active: false },
    { label: "Recent Updates", active: true },
    { label: "Milestones", active: false },
    { label: "Documents", active: false },
    { label: "Upcoming", active: false },
  ];

  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical">
      <div className="bg-[#F7F9FC]">
        <div className="flex items-center justify-between border-b border-brand-line bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand-navy text-[10px] font-bold text-white">
              NL
            </div>
            <div>
              <p className="text-[11px] font-semibold text-brand-navy">Northline Construction</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Client Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-sm border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[9px] font-semibold text-brand-muted sm:inline">
              Riverside Medical Center
            </span>
            <span className="rounded-sm border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
              On Track
            </span>
          </div>
        </div>

        <div className="border-b border-brand-line bg-white px-4 py-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Project</p>
              <p className="text-[15px] font-bold text-brand-navy">Riverside Medical Center</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Progress</p>
              <p className="text-[18px] font-bold text-brand-navy">68%</p>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-line">
            <div className="h-full w-[68%] rounded-full bg-brand-orange" />
          </div>
        </div>

        <div className="overflow-x-auto border-b border-brand-line bg-white px-2 [scrollbar-width:thin]">
          <div className="flex min-w-max gap-1 py-2">
            {sections.map((s) => (
              <span
                key={s.label}
                className={
                  "shrink-0 rounded-md px-3 py-1.5 text-[10px] font-semibold " +
                  (s.active
                    ? "bg-brand-orange/10 text-brand-orange"
                    : "text-brand-muted hover:bg-[#FAFBFD]")
                }
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_240px]">
          <div className="space-y-3 p-4">
            <div className="rounded-lg border border-brand-line bg-white p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Project overview</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-brand-muted">
                42,000 SF medical office expansion with phased occupancy. Interior build-out is active on Levels 2–3
                while exterior punch continues on the south wing.
              </p>
            </div>
            <div className="rounded-lg border border-brand-line bg-white p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Current phase</p>
              <p className="mt-1 text-[12px] font-semibold text-brand-navy">Interior build-out</p>
              <p className="mt-1 text-[10px] text-brand-muted">MEP rough-in · Ceiling grid prep · Level 3</p>
            </div>
            <div className="rounded-lg border border-brand-orange/25 bg-brand-orange/[0.04] p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Recent updates</p>
              <p className="mt-1 text-[11px] font-semibold text-brand-navy">MEP rough-in progressing on Level 3</p>
              <p className="mt-1 text-[10px] leading-relaxed text-brand-muted">
                Structural steel inspection passed. Mechanical and electrical rough-in is underway with ceiling grid
                installation scheduled for Sep 16.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-brand-line bg-white p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Milestones</p>
                <ul className="mt-2 space-y-1 text-[10px]">
                  <li className="flex justify-between">
                    <span className="text-brand-navy">Foundation complete</span>
                    <span className="text-emerald-600">Done</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-brand-navy">Structural steel</span>
                    <span className="text-emerald-600">Done</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-brand-muted">MEP rough-in</span>
                    <span className="text-brand-muted">Oct 18</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-brand-line bg-white p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Documents</p>
                <ul className="mt-2 space-y-1.5 text-[10px]">
                  <li className="rounded border border-brand-line bg-[#FAFBFD] px-2 py-1.5">
                    <span className="font-semibold text-brand-navy">Architectural Set — Rev C</span>
                  </li>
                  <li className="rounded border border-brand-line bg-[#FAFBFD] px-2 py-1.5">
                    <span className="font-semibold text-brand-navy">Weekly Progress Report</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-line bg-white p-4 lg:border-l lg:border-t-0">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Upcoming</p>
            <ul className="mt-2 space-y-2">
              {[
                ["Owner walkthrough", "Sep 14"],
                ["Ceiling inspection", "Sep 19"],
                ["Pay application review", "Sep 22"],
              ].map(([item, date]) => (
                <li key={item} className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2 text-[10px]">
                  <p className="font-semibold text-brand-navy">{item}</p>
                  <p className="text-[9px] text-brand-muted">{date}</p>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Approved financial</p>
              <p className="mt-1 text-[11px] font-semibold text-brand-navy">Pay App #6</p>
              <p className="text-[10px] text-brand-muted">$842,000 · Approved Aug 28</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function CpPermissionsUI() {
  const roles = ["Owner", "Client", "Architect"];
  const rows = [
    { perm: "Project Overview", levels: ["Full", "Full", "View"] },
    { perm: "Documents", levels: ["Full", "Full", "Full"] },
    { perm: "RFIs", levels: ["View", "View", "Full"] },
    { perm: "Approvals", levels: ["Full", "Full", "Full"] },
  ];
  return (
    <BrowserFrame url="app.vertexcms.com / projects / riverside-medical / portal-access">
      <div className="bg-[#F7F9FC] p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Portal access</p>
            <p className="text-[13px] font-bold text-brand-navy">{CP_PROJECT}</p>
          </div>
          <span className="rounded-sm bg-brand-navy px-2.5 py-1 text-[9px] font-semibold text-white">Manage access</span>
        </div>
        <div className="overflow-x-auto rounded-lg border border-brand-line bg-white">
          <div className="min-w-[420px]">
            <div className="grid grid-cols-4 gap-1 border-b border-brand-line bg-[#FAFBFD] px-3 py-2 text-[8px] font-semibold uppercase tracking-wide text-brand-muted">
              <span>Permission</span>
              {roles.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
            {rows.map((row) => (
              <div
                key={row.perm}
                className="grid grid-cols-4 items-center gap-1 border-b border-brand-line/80 px-3 py-2.5 text-[10px] last:border-0"
              >
                <span className="font-semibold text-brand-navy">{row.perm}</span>
                {row.levels.map((level, i) => (
                  <span
                    key={`${row.perm}-${roles[i]}`}
                    className={
                      "w-fit rounded-sm border px-2 py-0.5 text-[9px] font-semibold " +
                      (level === "Full"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-brand-line bg-[#FAFBFD] text-brand-muted")
                    }
                  >
                    {level === "Full" ? "Full Access" : "View"}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[9px] text-brand-muted">
          Subcontractor and Vendor portals use assigned scope — not tenant-wide visibility.
        </p>
      </div>
    </BrowserFrame>
  );
}

export function CpActivityUI() {
  const items = [
    { type: "Update", title: "Project update posted", detail: "MEP rough-in progressing on Level 3", when: "Sep 08 · 9:14 AM" },
    { type: "Document", title: "Document shared", detail: "Architectural Set — Rev C", when: "Sep 07 · 4:02 PM" },
    { type: "RFI", title: "RFI updated", detail: "RFI-204 · Response submitted", when: "Sep 08 · 11:30 AM" },
    { type: "Submittal", title: "Submittal submitted", detail: "SUB-118 · Curtain wall system", when: "Sep 06 · 2:45 PM" },
    { type: "Approval", title: "Approval requested", detail: "Pay Application #07 · $892,400", when: "Sep 05 · 10:00 AM" },
    { type: "Comment", title: "Comment added", detail: "Change Order #12 · Owner review note", when: "Sep 04 · 3:18 PM" },
  ];
  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical / activity">
      <CpPortalShell
        role="Client Portal"
        roleLabel="Project activity"
        url="portal.vertexcms.com"
        nav={["Overview", "Updates", "Documents", "RFIs", "Submittals", "Approvals", "Activity"]}
        activeNav="Activity"
      >
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.when + item.title} className="rounded-lg border border-brand-line bg-white px-3 py-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="rounded-sm bg-brand-orange/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-brand-orange">
                    {item.type}
                  </span>
                  <p className="mt-1.5 text-[11px] font-semibold text-brand-navy">{item.title}</p>
                  <p className="mt-0.5 text-[10px] text-brand-muted">{item.detail}</p>
                </div>
                <span className="shrink-0 text-[8px] text-brand-muted">{item.when}</span>
              </div>
            </li>
          ))}
        </ul>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpApprovalsUI() {
  const rows = [
    { item: "Pay Application #07", type: "Pay Application", by: "Project team", due: "Sep 14", status: "Pending", comment: "G702/G703 attached" },
    { item: "Change Order #12", type: "Change Request", by: "A. Morgan", due: "Sep 12", status: "Pending", comment: "Ceiling grid revision" },
    { item: "SUB-118", type: "Submittal Review", by: "MEP Sub", due: "Sep 10", status: "Changes Requested", comment: "Revise anchor detail" },
    { item: "A-301 Rev 06", type: "Project Document", by: "Design team", due: "Sep 09", status: "Approved", comment: "Stamped Sep 08" },
  ];
  const statusTone = (s: string) =>
    s === "Approved"
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : s === "Changes Requested"
        ? "text-amber-800 bg-amber-50 border-amber-200"
        : "text-amber-700 bg-amber-50 border-amber-200";
  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical / approvals">
      <CpPortalShell
        role="Owner Portal"
        roleLabel="Pending decisions"
        url="portal.vertexcms.com"
        nav={["Overview", "Budget", "Schedule", "Pay Applications", "Change Orders", "Approvals"]}
        activeNav="Approvals"
      >
        <div className="overflow-x-auto">
          <div className="min-w-[480px]">
            <div className="grid grid-cols-[1.1fr_0.7fr_0.6fr_0.5fr_0.7fr] gap-1 border-b border-brand-line pb-1.5 text-[8px] font-semibold uppercase tracking-wide text-brand-muted">
              <span>Item</span>
              <span>Requested by</span>
              <span>Due</span>
              <span>Status</span>
              <span>Comment</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-[1.1fr_0.7fr_0.6fr_0.5fr_0.7fr] items-start gap-1 border-b border-brand-line/80 py-2.5 text-[10px] last:border-0"
              >
                <span>
                  <span className="font-semibold text-brand-navy">{row.item}</span>
                  <span className="mt-0.5 block text-[8px] text-brand-muted">{row.type}</span>
                </span>
                <span className="text-brand-muted">{row.by}</span>
                <span className="text-brand-muted">{row.due}</span>
                <span className={"w-fit rounded-sm border px-1.5 py-0.5 text-[8px] font-semibold " + statusTone(row.status)}>
                  {row.status}
                </span>
                <span className="text-brand-muted">{row.comment}</span>
              </div>
            ))}
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpDocumentsUI() {
  const docs = [
    { name: "Architectural Plans — Rev C", type: "Plans", updated: "Sep 04", access: "View" },
    { name: "Project Specifications", type: "Specifications", updated: "Aug 28", access: "View" },
    { name: "Master Schedule — Sep", type: "Schedules", updated: "Sep 01", access: "View" },
    { name: "Weekly Progress Report", type: "Project Reports", updated: "Sep 08", access: "View" },
    { name: "SUB-118 · Curtain Wall", type: "Submittals", updated: "Sep 06", access: "View" },
  ];
  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical / documents">
      <CpPortalShell
        role="Client Portal"
        roleLabel="Shared documents"
        url="portal.vertexcms.com"
        nav={["Overview", "Updates", "Documents", "RFIs", "Submittals", "Approvals"]}
        activeNav="Documents"
      >
        <div className="mb-3 flex flex-wrap gap-1.5">
          {["All", "Recent", "Shared"].map((tab, i) => (
            <span
              key={tab}
              className={
                "rounded-sm border px-2 py-1 text-[9px] font-semibold " +
                (i === 0 ? "border-brand-orange/40 bg-brand-orange/10 text-brand-navy" : "border-brand-line bg-white text-brand-muted")
              }
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[420px]">
            <div className="grid grid-cols-[1.2fr_0.6fr_0.5fr_0.4fr] gap-1 border-b border-brand-line pb-1.5 text-[8px] font-semibold uppercase tracking-wide text-brand-muted">
              <span>Document</span>
              <span>Type</span>
              <span>Updated</span>
              <span>Access</span>
            </div>
            {docs.map((doc) => (
              <div
                key={doc.name}
                className="grid grid-cols-[1.2fr_0.6fr_0.5fr_0.4fr] items-center gap-1 border-b border-brand-line/80 py-2.5 text-[10px] last:border-0"
              >
                <span className="font-semibold text-brand-navy">{doc.name}</span>
                <span className="text-brand-muted">{doc.type}</span>
                <span className="text-brand-muted">{doc.updated}</span>
                <span className="font-semibold text-brand-orange">{doc.access}</span>
              </div>
            ))}
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpFullPortalUI() {
  const nav = ["Overview", "Updates", "Documents", "RFIs", "Submittals", "Open Items", "Approvals"];
  return (
    <BrowserFrame url="portal.vertexcms.com / riverside-medical">
      <CpPortalShell
        role="Client Portal"
        roleLabel="Full project workspace"
        url="portal.vertexcms.com"
        nav={nav}
        activeNav="Overview"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Project status</p>
              <p className="text-[13px] font-bold text-brand-navy">{CP_PROJECT}</p>
            </div>
            <span className="rounded-sm border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-700">
              On Track · 68%
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-brand-line">
            <div className="h-full w-[68%] rounded-full bg-brand-orange" />
          </div>
          <div className="grid gap-3 lg:grid-cols-[1fr_200px]">
            <div className="space-y-3">
              <div className="rounded-lg border border-brand-line bg-white p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Recent updates</p>
                <p className="mt-1 text-[11px] font-semibold text-brand-navy">MEP rough-in progressing on Level 3</p>
                <p className="mt-1 text-[10px] text-brand-muted">Structural inspection passed · Sep 08</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-brand-line bg-white p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Documents</p>
                  <p className="mt-1 text-[11px] font-semibold text-brand-navy">12 shared</p>
                  <p className="text-[9px] text-brand-muted">Plans · Specs · Reports</p>
                </div>
                <div className="rounded-lg border border-brand-line bg-white p-3">
                  <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Open items</p>
                  <p className="mt-1 text-[11px] font-semibold text-brand-navy">RFI-204 · SUB-118</p>
                  <p className="text-[9px] text-brand-muted">2 items in review</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="rounded-lg border border-brand-orange/25 bg-brand-orange/[0.04] p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-orange">Approvals</p>
                <p className="mt-1 text-[10px] font-semibold text-brand-navy">Pay App #07</p>
                <p className="text-[9px] text-brand-muted">Pending · Due Sep 14</p>
              </div>
              <div className="rounded-lg border border-brand-line bg-[#FAFBFD] p-3">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Project info</p>
                <ul className="mt-1.5 space-y-1 text-[9px] text-brand-muted">
                  <li>Austin, TX · $4.8M</li>
                  <li>Phase · Interior build-out</li>
                  <li>Next milestone · MEP rough-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

export function CpOwnerWarrantyUI() {
  return (
    <BrowserFrame url="portal.vertexcms.com / owner / warranty">
      <CpPortalShell
        role="Owner Portal"
        roleLabel="Warranty"
        url="portal.vertexcms.com"
        nav={["Overview", "Budget", "Schedule", "Photos", "Pay Applications", "Change Orders", "Invoices", "Warranty"]}
        activeNav="Warranty"
      >
        <div className="space-y-3">
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Warranty claim</p>
            <p className="mt-1 text-[13px] font-bold text-brand-navy">{CP_PROJECT}</p>
            <p className="mt-1 text-[10px] text-brand-muted">Assigned project · Owner Portal</p>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Description</p>
            <p className="mt-2 rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-2 text-[10px] leading-relaxed text-brand-navy">
              Roof sealant at south wing requires attention after occupancy.
            </p>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-3">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-muted">Photos</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["Photo 1", "Photo 2", "Photo 3"].map((label) => (
                <div
                  key={label}
                  className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-brand-line bg-[#FAFBFD] text-[9px] font-semibold text-brand-muted"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5">
            <p className="text-[10px] text-brand-muted">Ready to send to the project record</p>
            <span className="rounded-sm bg-brand-navy px-3 py-1.5 text-[10px] font-semibold text-white">Submit</span>
          </div>
        </div>
      </CpPortalShell>
    </BrowserFrame>
  );
}

