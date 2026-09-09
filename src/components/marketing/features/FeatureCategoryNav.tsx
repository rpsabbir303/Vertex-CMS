import Link from "next/link";
import { HUB_MODULES } from "@/lib/marketing/features/hub";
import {
  categoryNavHref,
  getFeatureCategoryNavItems,
} from "@/lib/marketing/features/categories";

type Props = {
  activeCategoryId: string;
};

export function FeatureCategoryNav({ activeCategoryId }: Props) {
  const items = getFeatureCategoryNavItems();

  return (
    <nav
      aria-label="Feature categories"
      className="sticky top-[4.5rem] z-30 border-b border-brand-line/80 bg-white/95 backdrop-blur-md"
    >
      <div className="site-shell">
        <ul className="-mx-1 flex gap-1.5 overflow-x-auto py-3 [scrollbar-width:thin]">
          {items.map((cat) => {
            const selected = cat.id === activeCategoryId;
            // Prefer hub titles when present so Features-landing naming stays familiar
            const hubTitle = HUB_MODULES.find((m) => m.id === cat.id)?.title;
            return (
              <li key={cat.id} className="shrink-0">
                <Link
                  href={categoryNavHref(cat.id)}
                  aria-current={selected ? "page" : undefined}
                  className={
                    "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                    (selected
                      ? "border-brand-orange/45 bg-brand-orange/5 text-brand-navy shadow-soft"
                      : "border-transparent text-brand-muted hover:border-brand-line hover:bg-[#FAFBFD] hover:text-brand-navy")
                  }
                >
                  <span
                    className={
                      "font-mono text-[10px] font-bold " +
                      (selected ? "text-brand-orange" : "text-brand-muted/70")
                    }
                  >
                    {cat.number}
                  </span>
                  <span className="whitespace-nowrap">{hubTitle ?? cat.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
