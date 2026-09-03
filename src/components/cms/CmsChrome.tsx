import type { ReactNode } from "react";

export function CmsChrome({
  title,
  nav,
  children,
  dark = false,
}: {
  title: string;
  nav: string[];
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        dark ? "border-white/10 bg-[#0B1F3A]" : "border-slate-200/90 bg-white"
      }`}
    >
      <div
        className={`flex items-center gap-2 border-b px-3 py-2.5 sm:px-4 ${
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
            dark ? "bg-white/10 text-slate-300" : "bg-white text-[#667085] shadow-sm"
          }`}
        >
          app.vertexcms.com / {title}
        </div>
      </div>
      <div className="grid sm:grid-cols-[148px_1fr]">
        <aside
          className={`hidden border-r p-3 sm:block ${
            dark ? "border-white/10 bg-white/[0.03]" : "border-slate-100 bg-[#F5F8FC]/60"
          }`}
        >
          <div className="mb-4 flex items-center gap-2 px-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#146EF5] text-[9px] font-bold text-white">
              VX
            </span>
            <span className={`text-xs font-semibold ${dark ? "text-white" : "text-[#08233F]"}`}>Vertex CMS</span>
          </div>
          <ul className="space-y-0.5">
            {nav.map((item, i) => (
              <li
                key={item}
                className={`rounded-lg px-2.5 py-2 text-[11px] ${
                  i === 0
                    ? dark
                      ? "bg-white/10 font-semibold text-white"
                      : "bg-white font-semibold text-[#146EF5] shadow-sm"
                    : dark
                      ? "text-slate-400"
                      : "text-[#667085]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <div className={dark ? "text-white" : ""}>{children}</div>
      </div>
    </div>
  );
}

export function Kpi({
  label,
  value,
  tone = "navy",
}: {
  label: string;
  value: string;
  tone?: "navy" | "blue" | "orange" | "green";
}) {
  const tones = {
    navy: "text-[#08233F]",
    blue: "text-[#146EF5]",
    orange: "text-[#FF6A00]",
    green: "text-emerald-600",
  };
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-3">
      <p className="text-[10px] text-[#667085]">{label}</p>
      <p className={`mt-1 text-sm font-bold ${tones[tone]}`}>{value}</p>
    </div>
  );
}
