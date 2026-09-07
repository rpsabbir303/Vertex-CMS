"use client";

import { useEffect, useState } from "react";
import { HUB_MODULES } from "@/lib/marketing/features/hub";

export function FeaturesModuleNav() {
  const [active, setActive] = useState(HUB_MODULES[0].id);

  useEffect(() => {
    const els = HUB_MODULES.map((m) => document.getElementById(m.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActive(id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="features-module-nav"
      aria-label="Feature modules"
      className="sticky top-[4.5rem] z-30 border-b border-brand-line bg-white/95 backdrop-blur-sm"
    >
      <div className="site-shell">
        <ul className="-mx-1 flex gap-1 overflow-x-auto py-3 [scrollbar-width:thin]">
          {HUB_MODULES.map((mod) => {
            const selected = active === mod.id;
            return (
              <li key={mod.id} className="shrink-0">
                <a
                  href={"#" + mod.id}
                  className={
                    "inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                    (selected
                      ? "border-brand-orange bg-brand-orange/5 text-brand-navy"
                      : "border-brand-line bg-white text-brand-muted hover:text-brand-navy")
                  }
                  aria-current={selected ? "true" : undefined}
                  onClick={() => setActive(mod.id)}
                >
                  <span className="font-mono text-[10px] text-brand-orange">{mod.number}</span>
                  <span>{mod.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
