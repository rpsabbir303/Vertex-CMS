import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <nav
      aria-label="Breadcrumb"
      className={"site-shell py-4 " + (dark ? "border-b border-white/10 bg-black" : "")}
    >
      <ol className={"flex flex-wrap items-center gap-2 text-sm " + (dark ? "text-neutral-500" : "text-brand-muted")}>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className={dark ? "text-neutral-400 hover:text-white" : "hover:text-brand-navy"}>
                {item.label}
              </Link>
            ) : (
              <span className={"font-medium " + (dark ? "text-white" : "text-brand-navy")}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
