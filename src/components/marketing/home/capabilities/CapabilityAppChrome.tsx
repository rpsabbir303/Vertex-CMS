import type { ReactNode } from "react";
import type { CapabilityId } from "./data";

const SIDEBAR: { id: CapabilityId | "home"; label: string }[] = [
  { id: "home", label: "Portfolio" },
  { id: "preconstruction", label: "Precon" },
  { id: "project-management", label: "Projects" },
  { id: "financial-control", label: "Financials" },
  { id: "field-operations", label: "Field" },
  { id: "ai-intelligence", label: "AI" },
  { id: "closeout", label: "Closeout" },
];

type Props = {
  activeId: CapabilityId;
  url: string;
  children: ReactNode;
};

export function CapabilityAppChrome({ activeId, url, children }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071526] shadow-[0_32px_80px_-36px_rgba(0,0,0,0.85)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="ml-1 flex min-w-0 flex-1 items-center gap-2">
          <span className="hidden shrink-0 rounded-md bg-brand-blue px-2 py-0.5 text-[10px] font-bold text-white sm:inline">
            VX
          </span>
          <span className="truncate rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">{url}</span>
        </div>
        <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-300 sm:inline">
          Live
        </span>
      </div>

      <div className="grid min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] lg:grid-cols-[148px_1fr]">
        <aside className="hidden border-r border-white/10 bg-[#050f1c] p-3 lg:block" aria-hidden="true">
          <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Vertex CMS</p>
          <ul className="mt-3 space-y-1">
            {SIDEBAR.map((item) => {
              const active = item.id === activeId || (item.id === "home" && activeId === "project-management");
              return (
                <li key={item.label}>
                  <div
                    className={`rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                      active ? "bg-brand-blue/15 text-white" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="min-w-0 p-3 sm:p-4 lg:p-5">{children}</div>
      </div>
    </div>
  );
}

export function Metric({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "orange" | "green" | "blue";
}) {
  const tones = {
    default: "text-white",
    orange: "text-brand-orange",
    green: "text-emerald-300",
    blue: "text-brand-blue",
  };
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <p className="text-[10px] text-slate-500">{label}</p>
      <p className={`mt-1 text-sm font-bold ${tones[tone]}`}>{value}</p>
    </div>
  );
}

export function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/[0.03] p-3 ${className}`}>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{title}</p>
      {children}
    </div>
  );
}
