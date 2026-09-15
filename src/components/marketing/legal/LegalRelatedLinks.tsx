"use client";

import type { LegalDocId } from "@/lib/marketing/legal/content";
import { LegalNavigation } from "./LegalNavigation";

type Props = {
  current: LegalDocId;
};

/** Document-footer legal navigation — same links as sidebar, compact inline treatment. */
export function LegalRelatedLinks({ current }: Props) {
  return (
    <div className="mt-14 border-t border-brand-line pt-8 print:mt-10">
      <LegalNavigation current={current} variant="footer" />
    </div>
  );
}

/** @deprecated Prefer LegalRelatedLinks */
export function LegalFooterLinks() {
  return <LegalRelatedLinks current="terms" />;
}
