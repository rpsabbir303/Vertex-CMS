"use client";

import { INTEGRATION_CATEGORIES } from "@/lib/marketing/integrations/categories";
import type { IntegrationCategoryId } from "@/lib/marketing/integrations/types";

type Props = {
  selected: IntegrationCategoryId | "all";
  onSelect: (id: IntegrationCategoryId | "all") => void;
  counts?: Partial<Record<IntegrationCategoryId | "all", number>>;
};

export function IntegrationCategoryNavigation({ selected, onSelect, counts }: Props) {
  return (
    <nav className="min-w-0" aria-label="Integration categories">
      <p className="int-ui-label mb-3 text-brand-muted">Index</p>
      <ul
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:rounded-sm lg:border lg:border-brand-line/80 lg:bg-white lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        {INTEGRATION_CATEGORIES.map((cat) => {
          const isSelected = selected === cat.id;
          const count = counts?.[cat.id];
          return (
            <li key={cat.id} className="shrink-0 lg:shrink">
              <button
                type="button"
                onClick={() => onSelect(cat.id)}
                aria-current={isSelected ? "true" : undefined}
                data-selected={isSelected ? "true" : "false"}
                className="int-cat-index-btn relative min-w-[148px] lg:min-w-0"
              >
                <span
                  className={`absolute bottom-1.5 left-0 top-1.5 w-0.5 rounded-[1px] ${
                    isSelected ? "bg-brand-orange" : "bg-transparent"
                  }`}
                  aria-hidden="true"
                />
                <span>{cat.label}</span>
                {typeof count === "number" && count > 0 && (
                  <span className="font-sans text-[10px] tabular-nums text-brand-muted/80">{count}</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
