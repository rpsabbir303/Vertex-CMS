"use client";

import type { LegalSection as LegalSectionType } from "@/lib/marketing/legal/content";
import { useLegalUi } from "./useLegalUi";

type Props = {
  section: LegalSectionType;
};

function isPlaceholderParagraph(text: string): boolean {
  return (
    text.startsWith("[") &&
    (text.includes("to be provided") ||
      text.includes("Legal section") ||
      text.includes("Approved Terms") ||
      text.includes("Approved Privacy") ||
      text.includes("Approved Data Processing") ||
      text.includes("Approved Cookie Policy") ||
      text.includes("Approved content"))
  );
}

export function LegalSection({ section }: Props) {
  const { ui } = useLegalUi();
  const placeholderBadge = ui.placeholderBadge;

  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-b border-brand-line/70 py-10 last:border-b-0"
    >
      <h2 className="font-display text-xl font-bold tracking-tight text-brand-navy sm:text-[1.35rem]">
        {section.title}
      </h2>
      {section.placeholder ? (
        <p className="mt-3 inline-flex rounded-sm border border-dashed border-brand-line bg-[#FAFBFD] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
          {placeholderBadge}
        </p>
      ) : null}
      <div className="legal-prose-body mt-5 space-y-4 text-[15px] leading-[1.8] text-brand-navy/85">
        {section.body.map((paragraph, index) => {
          const isPlaceholder = isPlaceholderParagraph(paragraph);
          return (
            <p
              key={`${section.id}-p-${index}`}
              className={
                isPlaceholder
                  ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 font-medium italic text-brand-muted"
                  : undefined
              }
            >
              {paragraph}
            </p>
          );
        })}
        {section.subsections?.map((sub, subIndex) => (
          <div key={`${section.id}-sub-${subIndex}`} className="space-y-3 pt-2">
            <h3 className="text-[16px] font-semibold tracking-tight text-brand-navy">{sub.title}</h3>
            {sub.body?.map((paragraph, pIndex) => (
              <p key={`${section.id}-sub-${subIndex}-p-${pIndex}`}>{paragraph}</p>
            ))}
            {sub.lists?.map((list, listIndex) => {
              const ListTag = list.ordered ? "ol" : "ul";
              return (
                <ListTag
                  key={`${section.id}-sub-${subIndex}-list-${listIndex}`}
                  className={`ml-1 space-y-2 pl-5 ${list.ordered ? "list-decimal" : "list-disc"}`}
                >
                  {list.items.map((item, itemIndex) => (
                    <li key={`${section.id}-sub-${subIndex}-li-${itemIndex}`} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ListTag>
              );
            })}
          </div>
        ))}
        {section.lists?.map((list, listIndex) => {
          const ListTag = list.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={`${section.id}-list-${listIndex}`}
              className={`ml-1 space-y-2 pl-5 ${
                list.ordered ? "list-decimal" : "list-disc"
              } ${list.placeholder ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 text-brand-muted" : ""}`}
            >
              {list.items.map((item, itemIndex) => (
                <li key={`${section.id}-list-${listIndex}-${itemIndex}`} className="pl-1">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        })}
        {section.tables?.map((table, tableIndex) => (
          <figure
            key={`${section.id}-table-${tableIndex}`}
            className={
              table.placeholder
                ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] p-4"
                : "overflow-x-auto"
            }
          >
            {table.caption ? (
              <figcaption className="mb-3 text-[13px] font-medium text-brand-muted">{table.caption}</figcaption>
            ) : null}
            <table className="w-full min-w-[280px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-brand-line">
                  {table.headers.map((header, headerIndex) => (
                    <th
                      key={`${section.id}-table-${tableIndex}-h-${headerIndex}`}
                      scope="col"
                      className="px-3 py-2.5 font-semibold text-brand-navy"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={`${section.id}-table-${tableIndex}-r-${rowIndex}`} className="border-b border-brand-line/70">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${section.id}-table-${tableIndex}-r-${rowIndex}-c-${cellIndex}`}
                        className={`px-3 py-2.5 align-top ${
                          table.placeholder ? "italic text-brand-muted" : "text-brand-navy/85"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        ))}
      </div>
    </section>
  );
}

/** @deprecated Use LegalSection — kept for existing imports */
export const LegalSectionBlock = LegalSection;
