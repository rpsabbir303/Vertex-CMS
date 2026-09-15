import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MarketingPageShell } from "@/components/marketing/MarketingPageShell";
import type { LegalDocId } from "@/lib/marketing/legal/content";
import {
  getLegalDocument,
  getLegalPendingBannerBody,
  isLegalDocumentContentPending,
} from "@/lib/marketing/legal/content";
import { ROUTES } from "@/lib/marketing/navigation";
import { LegalContentPendingBanner } from "./LegalContentPendingBanner";
import { LegalDemoNotice } from "./LegalDemoNotice";
import { LegalHeader } from "./LegalHeader";
import { LegalLocaleNotice } from "./LegalLocaleNotice";
import { LegalNavigation } from "./LegalNavigation";
import { LegalOnThisPage } from "./LegalOnThisPage";
import { LegalCookiePreferences } from "./LegalCookiePreferences";
import { LegalRelatedLinks } from "./LegalRelatedLinks";
import { LegalSection } from "./LegalSection";

type Props = {
  docId: LegalDocId;
};

export function LegalLayout({ docId }: Props) {
  const document = getLegalDocument(docId);
  const contentPending = isLegalDocumentContentPending(document);

  return (
    <MarketingPageShell documentMode showPlaceholder={false}>
      <div className="legal-document-page bg-[#FAFBFD] print:bg-white">
        <div className="print:hidden">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Legal", href: ROUTES.legalTerms },
              { label: document.title },
            ]}
          />
        </div>

        <div className="site-shell pb-16 pt-2 lg:pb-24 print:max-w-none print:px-0 print:pb-8">
          <div className="grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[200px_minmax(0,1fr)_190px] xl:gap-14">
            <aside className="lg:sticky lg:top-28 lg:self-start print:hidden">
              <LegalNavigation current={docId} />
            </aside>

            <article className="legal-document-article min-w-0 rounded-xl border border-brand-line/80 bg-white px-5 py-8 shadow-[0_1px_2px_rgba(6,21,37,0.04)] sm:px-8 sm:py-10 lg:px-10 print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none">
              <LegalHeader document={document} />

              <LegalLocaleNotice />

              {document.demoContent ? <LegalDemoNotice /> : null}

              {contentPending ? (
                <LegalContentPendingBanner body={getLegalPendingBannerBody(docId)} />
              ) : null}

              <LegalOnThisPage sections={document.sections} variant="inline" />

              <div className="legal-prose mt-2 max-w-[42rem]">
                {document.sections.map((section) => (
                  <LegalSection key={section.id} section={section} />
                ))}
              </div>

              {docId === "cookies" ? <LegalCookiePreferences /> : null}

              <LegalRelatedLinks current={docId} />
            </article>

            <aside className="hidden xl:sticky xl:top-28 xl:block xl:self-start print:hidden">
              <LegalOnThisPage sections={document.sections} variant="sidebar" />
            </aside>
          </div>
        </div>
      </div>
    </MarketingPageShell>
  );
}
