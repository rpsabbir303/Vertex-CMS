"use client";

import { useLegalUi } from "./useLegalUi";

export function LegalDemoNotice() {
  const { ui } = useLegalUi();

  return (
    <div
      className="mb-8 rounded-lg border border-brand-line/80 bg-[#FAFBFD] px-4 py-3.5 sm:px-5"
      role="note"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        {ui.demoNoticeTitle}
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-brand-navy/80">{ui.demoNoticeBody}</p>
    </div>
  );
}
