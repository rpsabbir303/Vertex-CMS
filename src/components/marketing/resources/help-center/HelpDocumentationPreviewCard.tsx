import { getHelpDocLearnTopics } from "@/lib/marketing/resources/help";
import type { HelpDocArticleRecord, HelpDocCategoryId } from "@/lib/marketing/resources/types";

import { HelpDocPreviewMiniVisual } from "./HelpCenterVisuals";

type Props = {
  doc: HelpDocArticleRecord;
  categoryId: HelpDocCategoryId;
};

/** In-page documentation content preview — not a link or teaser for another route. */
export function HelpDocumentationPreviewCard({ doc, categoryId }: Props) {
  const learnTopics = getHelpDocLearnTopics(doc);
  const headline = doc.description.trim() || doc.title;
  const showSubtitle = doc.title.trim() !== headline;

  return (
    <article
      className="relative overflow-hidden border border-brand-line/90 bg-gradient-to-br from-white via-[#FCFDFE] to-[#F4F8FC]"
      data-design-layer="HelpDocumentationPreviewCard"
    >
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(7.5rem,9.5rem)]">
        <div className="min-w-0 p-5 sm:p-6 lg:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Documentation</p>
          <h3 className="mt-2 font-display text-[1.22rem] font-bold leading-snug text-brand-navy sm:text-[1.35rem]">{headline}</h3>
          {showSubtitle ? (
            <p className="mt-3 text-[14.5px] leading-[1.65] text-brand-muted sm:text-[15px]">{doc.title}</p>
          ) : null}

          {learnTopics.length > 0 ? (
            <div className="mt-5 border-t border-brand-line/70 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy">What you&apos;ll learn</p>
              <ul className="mt-3 space-y-2">
                {learnTopics.map((topic) => (
                  <li key={topic} className="flex gap-2.5 text-[13.5px] leading-snug text-brand-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange/90" aria-hidden="true" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div
          className="border-t border-brand-line/60 bg-[#F7FAFD]/80 p-4 lg:border-l lg:border-t-0 lg:flex lg:flex-col lg:justify-center"
          data-abstract="doc-preview"
          aria-hidden="true"
        >
          <HelpDocPreviewMiniVisual categoryId={categoryId} />
        </div>
      </div>
    </article>
  );
}
