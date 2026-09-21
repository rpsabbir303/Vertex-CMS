import type { BlogContentBlock } from "@/lib/marketing/resources/types";

type Props = { blocks: BlogContentBlock[] };

/** Documentation body — structured sections without blog-specific workflow inserts. */
export function DocumentationArticleBody({ blocks }: Props) {
  const sections = groupByH2Sections(blocks);

  return (
    <div className="documentation-article-body" data-design-layer="content">
      {sections.map((section) => (
        <section
          key={section.headingId ?? `lead-${section.sectionIndex}`}
          className={
            section.headingId
              ? "border-t border-brand-line/40 py-5 first:border-t-0 first:pt-0 sm:py-6"
              : "space-y-4 pb-5 sm:space-y-5"
          }
        >
          {section.blocks.map((block, index) => (
            <DocBlock
              key={`${block.type}-${section.headingId ?? "lead"}-${index}`}
              block={block}
              sectionNumber={section.headingId ? section.sectionIndex + 1 : undefined}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

function DocBlock({ block, sectionNumber }: { block: BlogContentBlock; sectionNumber?: number }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-[15.5px] leading-[1.72] text-brand-navy/90 sm:text-[16px]">{block.text}</p>;
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
          className="scroll-mt-28 font-display text-[1.08rem] font-bold leading-snug text-brand-navy sm:text-[1.15rem]"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.68] text-brand-navy/90 marker:text-brand-blue">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-5 text-[15px] leading-[1.68] text-brand-navy/90 marker:font-semibold">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "callout":
      return <DocCallout title={block.title} text={block.text} />;
    case "quote":
      return (
        <blockquote className="border-l-2 border-brand-blue/40 pl-4 text-[15px] leading-relaxed text-brand-navy/90">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

function DocCallout({ title, text }: { title?: string; text: string }) {
  const label = (title ?? "NOTE").toUpperCase();
  const accent =
    label === "WARNING"
      ? "border-brand-orange/70 bg-[#FFF8F3]"
      : label === "IMPORTANT"
        ? "border-brand-navy/30 bg-[#F4F7FB]"
        : label === "TIP"
          ? "border-brand-blue/35 bg-[#F7FAFD]"
          : "border-brand-blue/25 bg-[#FAFCFE]";

  return (
    <aside className={`border-l-[3px] px-4 py-3.5 sm:px-5 sm:py-4 ${accent}`} data-design-layer="DocCallout">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{label}</p>
      <p className="mt-1.5 text-[14.5px] leading-[1.65] text-brand-navy/90">{text}</p>
    </aside>
  );
}

type Section = {
  sectionIndex: number;
  headingId?: string;
  blocks: BlogContentBlock[];
};

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
