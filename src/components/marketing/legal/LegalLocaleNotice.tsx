"use client";

import { useLegalUi } from "./useLegalUi";

export function LegalLocaleNotice() {
  const { ui, locale } = useLegalUi();

  if (locale !== "es") return null;

  return (
    <div
      className="mb-6 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-4 py-3 text-[13px] leading-relaxed text-brand-navy/85"
      role="note"
    >
      {ui.localeNotice}
    </div>
  );
}
