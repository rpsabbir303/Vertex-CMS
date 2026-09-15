"use client";

import { useLegalUi } from "./useLegalUi";

type Props = {
  /** Override default banner body for document-specific pending copy */
  body?: string;
};

export function LegalContentPendingBanner({ body }: Props) {
  const { ui } = useLegalUi();

  return (
    <div
      className="mb-8 rounded-lg border border-dashed border-brand-orange/35 bg-brand-orange/[0.04] px-4 py-4 sm:px-5"
      role="status"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
        {ui.pendingBannerTitle}
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-brand-navy/85">{body ?? ui.pendingBannerBody}</p>
    </div>
  );
}
