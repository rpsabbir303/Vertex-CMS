import type { ReactNode } from "react";
import Image from "next/image";

/** Compact app chrome shared by all four showcase mockups */
export function ShowcaseChrome({
  path,
  activeNav,
  children,
  dark = false,
}: {
  path: string;
  activeNav: string;
  children: ReactNode;
  dark?: boolean;
}) {
  const nav = ["Projects", "Financials", "Field", "AI", "Reports"];

  return (
    <div
      className={`flex h-full min-h-[240px] flex-col overflow-hidden rounded-[1.25rem] border ${
        dark ? "border-white/10 bg-[#0B1F3A] text-white" : "border-slate-200/90 bg-white text-[#08233F]"
      }`}
    >
      <div
        className={`flex items-center gap-2 border-b px-3 py-2 ${
          dark ? "border-white/10 bg-white/5" : "border-slate-100 bg-[#F8FAFC]"
        }`}
      >
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
        <div
          className={`ml-1 flex-1 truncate rounded-md px-2 py-1 text-[10px] ${
            dark ? "bg-white/10 text-slate-300" : "bg-white text-[#667085] shadow-sm"
          }`}
        >
          app.vertexcms.com / {path}
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[88px_1fr]">
        <aside
          className={`border-r p-2 ${
            dark ? "border-white/10 bg-white/[0.03]" : "border-slate-100 bg-[#F5F8FC]/70"
          }`}
        >
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#146EF5] text-[8px] font-bold text-white">
              VX
            </span>
            <span className={`text-[9px] font-semibold ${dark ? "text-white" : "text-[#08233F]"}`}>Vertex</span>
          </div>
          <ul className="space-y-0.5">
            {nav.map((item) => {
              const active = item === activeNav;
              return (
                <li
                  key={item}
                  className={`rounded-md px-1.5 py-1.5 text-[9px] ${
                    active
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
              );
            })}
          </ul>
        </aside>
        <div className="min-w-0 overflow-hidden p-3">{children}</div>
      </div>
    </div>
  );
}

/**
 * Replaceable mockup slot.
 * Pass `imageSrc` (e.g. "/showcase/mockup01.png") to swap in a final screenshot later.
 * Until then, the React mockup children render.
 */
export function ShowcaseSlot({
  imageSrc,
  imageAlt,
  children,
}: {
  imageSrc?: string | null;
  imageAlt: string;
  children: ReactNode;
}) {
  if (imageSrc) {
    return (
      <div className="relative h-full min-h-[240px] overflow-hidden rounded-[1.25rem] border border-slate-200/90 bg-white">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 50vw" />
      </div>
    );
  }
  return <>{children}</>;
}
