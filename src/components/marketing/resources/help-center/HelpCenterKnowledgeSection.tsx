import { getHelpCategoryCoverageTopics, helpDocCategoryAnchor } from "@/lib/marketing/resources/help";
import type { HelpDocArticleRecord, HelpDocCategoryId } from "@/lib/marketing/resources/types";

import { HelpDocumentationPreviewCard } from "./HelpDocumentationPreviewCard";
import { HelpCenterCategoryEdgeAbstract } from "./HelpCenterVisuals";

type Props = {
  index: number;
  categoryId: HelpDocCategoryId;
  title: string;
  description: string;
  docs: HelpDocArticleRecord[];
  tone?: "light" | "cool";
};

function CategoryIntro({
  anchor,
  num,
  title,
  description,
  coverage,
}: {
  anchor: string;
  num: string;
  title: string;
  description: string;
  coverage: string[];
}) {
  return (
    <header className="min-w-0 lg:sticky lg:top-28" data-design-layer="content">
      <p className="text-[11px] font-semibold tabular-nums tracking-wide text-brand-orange">{num}</p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{title}</p>
      <h2
        id={`${anchor}-heading`}
        className="mt-2 font-display text-[1.5rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[1.65rem] lg:text-[1.75rem]"
      >
        {title}
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-brand-muted">{description}</p>
      {coverage.length >= 1 ? (
        <div className="mt-6 border-t border-brand-line/70 pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy">Topics in this area</p>
          <ul className="mt-3 space-y-2">
            {coverage.map((topic) => (
              <li key={topic} className="flex gap-2 text-[13px] leading-snug text-brand-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange/80" aria-hidden="true" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

function DocumentationColumn({ docs, categoryId }: { docs: HelpDocArticleRecord[]; categoryId: HelpDocCategoryId }) {
  if (!docs.length) {
    return <p className="text-[14px] text-brand-muted">Documentation for this area will appear here when published.</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      {docs.map((doc) => (
        <HelpDocumentationPreviewCard key={doc.id} doc={doc} categoryId={categoryId} />
      ))}
    </div>
  );
}

export function HelpCenterKnowledgeSection({ index, categoryId, title, description, docs, tone = "light" }: Props) {
  const anchor = helpDocCategoryAnchor(categoryId);
  const num = String(index).padStart(2, "0");
  const coverage = getHelpCategoryCoverageTopics(description);
  const bg = tone === "cool" ? "bg-[#EEF4FA]/45" : "bg-white";
  const layoutReversed = index % 2 === 0;

  return (
    <section
      id={anchor}
      className={`relative scroll-mt-28 border-b border-brand-line/60 ${bg}`}
      aria-labelledby={`${anchor}-heading`}
      data-design-layer="HelpCenterKnowledgeSection"
    >
      <HelpCenterCategoryEdgeAbstract variant={index % 3} className="hidden lg:block" />
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className={`min-w-0 ${layoutReversed ? "lg:order-2" : ""}`}>
            <CategoryIntro anchor={anchor} num={num} title={title} description={description} coverage={coverage} />
          </div>
          <div className={`min-w-0 ${layoutReversed ? "lg:order-1" : ""}`} data-design-layer="content">
            <DocumentationColumn docs={docs} categoryId={categoryId} />
          </div>
        </div>
      </div>
    </section>
  );
}
