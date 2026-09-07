import type { LegalDocument } from "@/lib/marketing/legal/content";
import { LegalDocumentMeta } from "./LegalDocumentMeta";

type Props = {
  document: LegalDocument;
};

export function LegalHeader({ document }: Props) {
  return (
    <header className="border-b border-brand-line/80 pb-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Legal</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {document.title}
      </h1>
      {document.description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted sm:text-base">
          {document.description}
        </p>
      ) : null}
      <LegalDocumentMeta document={document} />
    </header>
  );
}
