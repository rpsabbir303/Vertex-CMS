"use client";

import { useState } from "react";

import { DEMO_VIDEO_TIMELINE } from "@/lib/marketing/product-tour/content";

export function DemoVideoTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mt-10 border-t border-brand-line/70 pt-8" data-design-layer="DemoVideoTimeline">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/70">What you&apos;ll see</p>
      <div className="relative mt-6 overflow-x-auto pb-2">
        <svg
          className="pointer-events-none absolute left-0 right-0 top-[1.15rem] hidden h-px sm:block"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="0" x2="100%" y2="0" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
        <ol className="flex min-w-[640px] gap-4 sm:min-w-0 sm:grid sm:grid-cols-4 sm:gap-3">
          {DEMO_VIDEO_TIMELINE.map((item) => {
            const isActive = active === item.index;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onMouseEnter={() => setActive(item.index)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(item.index)}
                  onBlur={() => setActive(null)}
                  className={`block rounded-sm border px-3 py-4 transition motion-reduce:transition-none ${
                    isActive
                      ? "border-brand-blue/40 bg-[#EEF4FA] shadow-sm"
                      : "border-brand-line/70 bg-white hover:border-brand-line"
                  }`}
                >
                  <span className="text-[10px] font-bold tabular-nums text-brand-orange">{String(item.index).padStart(2, "0")}</span>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-black">{item.label}</p>
                  <p className="mt-2 text-[12px] leading-snug text-[#111827]">{item.description}</p>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
