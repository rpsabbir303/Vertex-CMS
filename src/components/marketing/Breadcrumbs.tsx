import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="site-shell py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-brand-muted">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-navy">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-brand-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
