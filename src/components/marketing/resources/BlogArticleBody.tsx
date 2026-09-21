import type { BlogContentBlock } from "@/lib/marketing/resources/types";

import {
  ArticleWorkflowAbstract,
  articleWorkflowForIndex,
  type ArticleWorkflowVariant,
} from "./blog-detail/abstracts";

type Props = {
  blocks: BlogContentBlock[];
};

type Section = {
  sectionIndex: number;
  headingId?: string;
  blocks: BlogContentBlock[];
};

/**
 * Renders structured Blog Detail body blocks.
 * Compact SaaS section rhythm — content unchanged; workflow visuals sit inside composition.
 */
export function BlogArticleBody({ blocks }: Props) {
  const sections = groupByH2Sections(blocks);

  if (sections.length <= 1 && sections[0] && !sections[0].headingId) {
    return (
      <div className="blog-article-body space-y-4 sm:space-y-5" data-design-layer="content">
        {blocks.map((block, index) => (
          <BlogBlock key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
    );
  }

  return (
    <div className="blog-article-body" data-design-layer="content">
      {sections.map((section) => (
        <ArticleSection key={section.headingId ?? `lead-${section.sectionIndex}`} section={section} />
      ))}
    </div>
  );
}

function ArticleSection({ section }: { section: Section }) {
  const { sectionIndex, blocks } = section;
  const hasH2 = blocks.some((b) => b.type === "heading" && b.level === 2);
  const visual = hasH2 ? articleWorkflowForIndex(sectionIndex) : null;
  const sideRail = visual === "field-break" || visual === "handoff";

  return (
    <section
      className={
        hasH2
          ? "relative border-t border-brand-line/40 py-5 first:border-t-0 first:pt-0 sm:py-6"
          : "space-y-4 pb-5 sm:space-y-5 sm:pb-6"
      }
      data-design-layer="content"
      data-axis-stage={visual ? `section-${visual}` : undefined}
    >
      {hasH2 ? (
        <div className={sideRail ? "sm:flex sm:items-start sm:justify-between sm:gap-5" : undefined}>
          <div className="min-w-0 flex-1">
            {blocks
              .filter((b) => b.type === "heading" && b.level === 2)
              .slice(0, 1)
              .map((block, index) => (
                <BlogBlock key={`h2-${index}`} block={block} sectionNumber={sectionIndex + 1} />
              ))}
          </div>
          {visual && sideRail ? (
            <div className="mt-3 hidden shrink-0 sm:mt-0 sm:block sm:w-[9rem]">
              <ArticleWorkflowAbstract variant={visual as ArticleWorkflowVariant} className="my-0" />
            </div>
          ) : null}
        </div>
      ) : null}

      {visual && !sideRail ? (
        <div className="mt-3 hidden sm:block">
          <ArticleWorkflowAbstract variant={visual as ArticleWorkflowVariant} className="my-0" />
        </div>
      ) : null}

      <div className={`space-y-4 sm:space-y-5 ${hasH2 ? "mt-4" : ""}`}>
        {blocks
          .filter((b) => !(hasH2 && b.type === "heading" && b.level === 2))
          .map((block, index) => (
            <BlogBlock key={`${block.type}-${index}`} block={block} />
          ))}
      </div>
    </section>
  );
}

function BlogBlock({ block, sectionNumber }: { block: BlogContentBlock; sectionNumber?: number }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[15.5px] leading-[1.75] text-brand-navy/90 sm:text-[16px]">{block.text}</p>;
    case "heading":
      if (block.level === 2) {
        return (
          <h2
            id={block.id}
            className="scroll-mt-28 font-display text-[1.35rem] font-bold leading-snug tracking-tight text-brand-navy sm:text-[1.55rem]"
          >
            {typeof sectionNumber === "number" ? (
              <span className="mr-2.5 inline-block align-middle text-[11px] font-semibold tabular-nums tracking-[0.08em] text-brand-orange sm:text-[12px]">
                {String(sectionNumber).padStart(2, "0")}
              </span>
            ) : null}
            {block.text}
          </h2>
        );
      }
      return (
        <h3
          id={block.id}
          className="scroll-mt-28 font-display text-[1.1rem] font-bold leading-snug tracking-tight text-brand-navy sm:text-[1.2rem]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[15.5px] leading-[1.7] text-brand-navy/90 marker:text-brand-blue sm:text-[16px]">
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-5 text-[15.5px] leading-[1.7] text-brand-navy/90 marker:font-semibold marker:text-brand-navy sm:text-[16px]">
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-brand-orange pl-4 text-[15.5px] font-medium leading-[1.65] text-brand-navy sm:pl-5 sm:text-[16px]">
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="border border-brand-line bg-[#F7F9FC] px-4 py-3.5 sm:px-5 sm:py-4">
          {block.title ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{block.title}</p>
          ) : null}
          <p className={`text-[14.5px] leading-[1.65] text-brand-navy/90 sm:text-[15px] ${block.title ? "mt-1.5" : ""}`}>
            {block.text}
          </p>
        </aside>
      );
    case "image":
      return (
        <figure className="overflow-hidden border border-brand-line bg-[#F4F7FB]">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img src={block.src} alt={block.alt} className="h-full w-full object-cover" loading="eager" decoding="async" />
          </div>
          {block.caption ? (
            <figcaption className="border-t border-brand-line px-4 py-2.5 text-[12.5px] leading-relaxed text-brand-muted sm:px-5">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    default:
      return null;
  }
}

function groupByH2Sections(blocks: BlogContentBlock[]): Section[] {
  const sections: Section[] = [];
  let current: BlogContentBlock[] = [];
  let sectionIndex = -1;

  const push = () => {
    if (current.length === 0) return;
    const heading = current.find((b) => b.type === "heading" && b.level === 2) as
      | Extract<BlogContentBlock, { type: "heading" }>
      | undefined;
    sections.push({
      sectionIndex: sectionIndex < 0 ? 0 : sectionIndex,
      headingId: heading?.id,
      blocks: current,
    });
    current = [];
  };

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 2) {
      push();
      sectionIndex += 1;
      current = [block];
    } else {
      current.push(block);
    }
  }
  push();
  return sections;
}
