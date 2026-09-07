"use client";

import { featuresPerspectives } from "@/lib/marketing/features/content";

export function FeaturesPerspectiveNav() {
  return (
    <nav
      aria-label="Explore features by perspective"
      className="sticky top-[4.5rem] z-30 border-b border-brand-line bg-white/95 backdrop-blur-sm"
    >
      <div className="site-shell py-3">
        <div
          role="tablist"
          aria-label="Feature perspectives"
          className="flex gap-1 overflow-x-auto rounded-lg border border-brand-line bg-[#FAFBFD] p-1 [scrollbar-width:thin]"
        >
          {featuresPerspectives.map((item) => (
            <a
              key={item.id}
              href={item.href}
              role="tab"
              className="flex min-w-[9rem] flex-1 items-center gap-3 rounded-md px-3 py-2.5 text-left transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
            >
              <span className="font-mono text-[11px] font-semibold text-brand-orange">{item.number}</span>
              <span className="text-[13px] font-semibold text-brand-navy">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
