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
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.45] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="features-explorer"
      aria-label="Feature categories"
      className="sticky top-[4.5rem] z-30 scroll-mt-28 border-b border-brand-line/80 bg-[#F7F8FA]/95 backdrop-blur-md"
    >
      <div className="site-shell">
        <ul className="-mx-1 flex gap-1.5 overflow-x-auto py-3 [scrollbar-width:thin]">
          {HUB_MODULES.map((mod) => {
            const selected = active === mod.id;
            return (
              <li key={mod.id} className="shrink-0">
                <a
                  href={"#" + mod.id}
                  onClick={() => setActive(mod.id)}
                  aria-current={selected ? "true" : undefined}
                  className={
                    "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                    (selected
                      ? "border-brand-orange/45 bg-white text-brand-navy shadow-soft"
                      : "border-transparent text-brand-muted hover:border-brand-line hover:bg-white/80 hover:text-brand-navy")
                  }
                >
                  <span className={"font-mono text-[10px] font-bold " + (selected ? "text-brand-orange" : "text-brand-muted/70")}>
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
