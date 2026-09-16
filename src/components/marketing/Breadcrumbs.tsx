import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  tone = "light",
  editorialAlign = false,
}: {
  items: Crumb[];
  tone?: "light" | "dark";
  /** Match Security editorial page width (no site-shell max-width). */
  editorialAlign?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <nav
      aria-label="Breadcrumb"
      className={
        (editorialAlign ? "w-full min-w-0 py-4 " : "site-shell py-4 ") + (dark ? "border-b border-white/10 bg-black" : "")
      }
    >
      <ol className={"flex flex-wrap items-center gap-2 text-sm " + (dark ? "text-neutral-500" : "text-brand-muted")}>
        {items.map((item, i) => (
          <li
            key={item.label}
            className={`flex max-w-full items-center gap-2 ${item.href ? "" : "max-sm:basis-full"}`}
          >
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className={dark ? "text-neutral-400 hover:text-white" : "hover:text-brand-navy"}>
                {item.label}
              </Link>
            ) : (
              <span className={"break-words font-medium " + (dark ? "text-white" : "text-brand-navy")}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
