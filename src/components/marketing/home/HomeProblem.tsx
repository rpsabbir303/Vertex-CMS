import { Reveal } from "@/components/Reveal";

const FRAGMENTS = [
  "Spreadsheet",
  "Accounting",
  "Email",
  "PDFs",
  "Scheduling",
  "Field Apps",
  "Storage",
  "Reports",
] as const;

const OLD = [
  "Scattered data",
  "Delayed financial visibility",
  "Manual reporting",
  "Different teams using different information",
  "Problems discovered too late",
] as const;

const NEW = [
  "One connected platform",
  "Real-time visibility",
  "Shared project information",
  "Integrated financial control",
  "AI-powered insights",
] as const;

export function HomeProblem() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="home-label">The Old Way</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            Stop chasing updates.
            <span className="block text-slate-300">Start seeing the whole picture.</span>
          </h2>
          <p className="home-body mx-auto mt-5 max-w-2xl">
            Construction data shouldn&apos;t be scattered across spreadsheets, inboxes, PDFs and disconnected tools.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Fragmented systems */}
          <div className="home-panel relative min-h-[340px] overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
              <svg className="h-full w-full">
                <line x1="12%" y1="20%" x2="40%" y2="55%" stroke="#64748b" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="70%" y1="18%" x2="45%" y2="48%" stroke="#64748b" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="20%" y1="70%" x2="55%" y2="42%" stroke="#64748b" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="82%" y1="68%" x2="58%" y2="40%" stroke="#64748b" strokeWidth="1" strokeDasharray="4 6" />
              </svg>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Disconnected tools</p>
            <div className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {FRAGMENTS.map((f, i) => (
                <div
                  key={f}
                  className="rounded-lg border border-red-400/20 bg-red-400/[0.06] px-3 py-3"
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
                >
                  <p className="text-[12px] font-semibold text-slate-200">{f}</p>
                  <p className="mt-1 text-[10px] text-red-300/80">{i % 2 === 0 ? "Out of sync" : "No source of truth"}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6 space-y-2.5">
              <p className="text-[13px] font-semibold text-white">The Old Way</p>
              {OLD.map((item) => (
                <p key={item} className="flex items-start gap-2 text-[13px] text-slate-400">
                  <span className="mt-0.5 text-red-400" aria-hidden="true">
                    ✕
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Connected Vertex */}
          <div className="home-panel relative min-h-[340px] overflow-hidden p-5 sm:p-6">
            <div
              className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-blue/20 blur-3xl"
              aria-hidden="true"
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-blue">One connected system</p>
            <div className="relative mt-6 rounded-xl border border-brand-blue/25 bg-brand-blue/10 p-4">
              <p className="font-display text-xl font-bold text-white">VertexBuild</p>
              <p className="mt-1 text-[12px] text-slate-300">Projects · Financials · Field · Compliance · AI</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["Live portfolio", "Shared financials", "Field sync", "AI insights"].map((t) => (
                  <div key={t} className="rounded-lg border border-white/10 bg-[#040b14]/50 px-3 py-2 text-[11px] text-slate-200">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-6 space-y-2.5">
              <p className="text-[13px] font-semibold text-white">The Vertex Way</p>
              {NEW.map((item) => (
                <p key={item} className="flex items-start gap-2 text-[13px] text-slate-300">
                  <span className="mt-0.5 text-emerald-400" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
