"use client";

import type { ReactNode } from "react";
import {
  AIConsole,
  AccountingUI,
  CollaborationUI,
  ConnectedExperienceUI,
  DocsUI,
  EstimateUI,
  FinanceUI,
  PhoneUI,
  PortfolioAnalytics,
  ProcurementUI,
  ProjectWorkspace,
  SafetyUI,
  ScheduleUI,
  WorkforceUI,
} from "@/components/mockups/ProductMockups";
import type { PreviewKey } from "@/lib/marketing/features/register";

const PREVIEWS: Record<PreviewKey, { node: ReactNode; dark?: boolean }> = {
  project: { node: <ProjectWorkspace /> },
  finance: { node: <FinanceUI />, dark: true },
  field: { node: <PhoneUI variant="home" raised /> },
  workforce: { node: <WorkforceUI /> },
  ai: { node: <AIConsole />, dark: true },
  connected: { node: <ConnectedExperienceUI /> },
  estimate: { node: <EstimateUI /> },
  safety: { node: <SafetyUI /> },
  docs: { node: <DocsUI /> },
  schedule: { node: <ScheduleUI /> },
  accounting: { node: <AccountingUI />, dark: true },
  procurement: { node: <ProcurementUI /> },
  collaboration: { node: <CollaborationUI /> },
  reports: { node: <PortfolioAnalytics /> },
};

type Props = {
  preview: PreviewKey;
  dark?: boolean;
  className?: string;
  scale?: "md" | "lg";
  /** Premium browser/app chrome around the product mockup */
  framed?: boolean;
};

export function FeatureProductPreview({
  preview,
  dark,
  className = "",
  scale = "lg",
  framed = false,
}: Props) {
  const entry = PREVIEWS[preview] ?? PREVIEWS.project;
  const isDark = dark ?? entry.dark;
  const scaleClass =
    scale === "lg"
      ? "origin-top-left scale-[0.52] sm:scale-[0.58] lg:scale-[0.68]"
      : "origin-top-left scale-[0.45] sm:scale-[0.52] lg:scale-[0.58]";

  const body = (
    <div className={`pointer-events-none ${scaleClass} ${isDark ? "bg-brand-navy p-1.5" : "p-1.5"}`}>
      {entry.node}
    </div>
  );

  if (framed) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-brand-line/80 bg-white shadow-[0_20px_50px_-28px_rgba(8,35,63,0.35)] ${className}`}
        aria-hidden="true"
      >
        <div
          className={
            "flex items-center gap-2 border-b px-3.5 py-2.5 " +
            (isDark ? "border-white/10 bg-[#061525]" : "border-brand-line/70 bg-[#F7F9FC]")
          }
        >
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/90" />
          </span>
          <div
            className={
              "ml-2 flex-1 truncate rounded-md border px-3 py-1 text-[10px] font-medium " +
              (isDark
                ? "border-white/10 bg-white/5 text-slate-400"
                : "border-brand-line bg-white text-brand-muted")
            }
          >
            app.vertexcms.com
          </div>
        </div>
        <div className={`relative overflow-hidden ${isDark ? "bg-brand-navy" : "bg-[#FAFBFD]"}`}>
          {body}
          <div
            className={
              "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent " +
              (isDark ? "from-[#061525]" : "from-[#FAFBFD]")
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-brand-line bg-[#FAFBFD] ${className}`}
      aria-hidden="true"
    >
      {body}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FAFBFD] to-transparent" />
    </div>
  );
}
