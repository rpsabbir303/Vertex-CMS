"use client";

import { useEffect, useState } from "react";
import { HUB_MODULES } from "@/lib/marketing/features/hub";

export function FeaturesStickyNav() {
  const [active, setActive] = useState(HUB_MODULES[0].id);

  useEffect(() => {
    const ids = HUB_MODULES.map((m) => m.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActive(id);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.12, 0.28, 0.45] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="feature-categories"
      aria-label="Platform areas"
      className="sticky top-[4.5rem] z-30 scroll-mt-28 border-b border-brand-line/80 bg-[#F4F7FA]"
      data-design-layer="FeatureCategoryNav"
    >
      <div className="feat-shell">
        <ul className="flex gap-0 overflow-x-auto [scrollbar-width:thin]">
          {HUB_MODULES.map((mod) => {
            const selected = active === mod.id;
            return (
              <li key={mod.id} className="shrink-0">
                <a
                  href={"#" + mod.id}
                  onClick={() => setActive(mod.id)}
                  aria-current={selected ? "true" : undefined}
                  className={
                    "flex items-center gap-2 border-b-2 px-3 py-3.5 font-sans text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange/40 sm:px-4 " +
                    (selected
                      ? "border-brand-orange text-brand-navy"
                      : "border-transparent text-brand-muted hover:text-brand-navy")
                  }
                >
                  <span className={"font-sans tabular-nums text-[10px] font-bold " + (selected ? "text-brand-orange" : "text-brand-muted/70")}>
                    {mod.number}
                  </span>
                  <span className="whitespace-nowrap">{mod.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
