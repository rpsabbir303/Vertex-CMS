"use client";

import type { ReactNode } from "react";
import {
  AIConsole,
  ConnectedExperienceUI,
  FinanceUI,
  PhoneUI,
  ProjectWorkspace,
  WorkforceUI,
} from "@/components/mockups/ProductMockups";

const PREVIEW_MAP: Record<string, { node: ReactNode; dark?: boolean }> = {
  "project-management": { node: <ProjectWorkspace /> },
  "financial-management": { node: <FinanceUI />, dark: true },
  "field-operations": { node: <PhoneUI variant="home" raised /> },
  compliance: { node: <WorkforceUI /> },
  ai: { node: <AIConsole />, dark: true },
  growth: { node: <ConnectedExperienceUI /> },
};

type Props = {
  categoryId: string;
  className?: string;
};

export function MegaMenuPreview({ categoryId, className = "" }: Props) {
  const preview = PREVIEW_MAP[categoryId] ?? PREVIEW_MAP["project-management"];

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-brand-line/80 bg-[#FAFAF8] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`pointer-events-none origin-top-left scale-[0.52] sm:scale-[0.58] lg:scale-[0.62] xl:scale-[0.66] ${
          preview.dark ? "bg-brand-navy p-1" : "p-1"
        }`}
      >
        {preview.node}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </div>
  );
}
