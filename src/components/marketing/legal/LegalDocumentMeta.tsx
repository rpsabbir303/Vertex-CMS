"use client";

import type { LegalDocument } from "@/lib/marketing/legal/content";
import { useLegalUi } from "./useLegalUi";

type Props = {
  document: LegalDocument;
};

export function LegalDocumentMeta({ document }: Props) {
  const { ui } = useLegalUi();

  if (!document.lastUpdated && !document.version) {
    return null;
  }

  return (
    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-brand-line/80 py-4 text-[13px]">
      {document.lastUpdated ? (
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            {ui.lastUpdated}
          </dt>
          <dd className="mt-1 font-medium text-brand-navy">{document.lastUpdated}</dd>
        </div>
      ) : null}
      {document.version ? (
        <div>
          <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            {ui.version}
          </dt>
          <dd className="mt-1 font-medium text-brand-navy">{document.version}</dd>
        </div>
      ) : null}
    </dl>
  );
}
