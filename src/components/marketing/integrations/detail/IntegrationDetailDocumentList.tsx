type Props = {
  items: string[];
  ordered?: boolean;
};

export function IntegrationDetailDocumentList({ items, ordered }: Props) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="max-w-3xl space-y-0 border border-brand-line/80">
      {items.map((line, index) => (
        <li
          key={line}
          className={
            "px-5 py-4 text-[14px] leading-relaxed text-brand-muted sm:px-6 " +
            (index > 0 ? "border-t border-brand-line/70" : "") +
            (ordered ? " list-decimal list-inside sm:list-outside sm:pl-10" : " list-none flex gap-3")
          }
        >
          {!ordered && (
            <span className="text-brand-blue" aria-hidden="true">
              —
            </span>
          )}
          <span className={ordered ? "" : "min-w-0 flex-1"}>{line}</span>
        </li>
      ))}
    </Tag>
  );
}
