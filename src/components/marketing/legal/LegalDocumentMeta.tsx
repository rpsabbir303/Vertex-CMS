import type { LegalDocument } from "@/lib/marketing/legal/content";
import { LEGAL_META_PENDING } from "@/lib/marketing/legal/content";

type Props = {
  document: LegalDocument;
};

export function LegalDocumentMeta({ document }: Props) {
  return (
    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-brand-line/80 py-4 text-[13px]">
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Last updated
        </dt>
        <dd className="mt-1 font-medium text-brand-navy">
          {document.lastUpdated ?? (
            <span className="italic text-brand-muted">{LEGAL_META_PENDING}</span>
          )}
        </dd>
      </div>
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Version
        </dt>
        <dd className="mt-1 font-medium text-brand-navy">
          {document.version ?? (
            <span className="italic text-brand-muted">{LEGAL_META_PENDING}</span>
          )}
        </dd>
      </div>
    </dl>
  );
}
