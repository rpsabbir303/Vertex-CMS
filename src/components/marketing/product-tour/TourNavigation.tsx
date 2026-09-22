"use client";

import { TOUR_NAV_ITEMS } from "@/lib/marketing/product-tour/content";
import { useProductTour } from "./ProductTourContext";

export function TourNavigation() {
  const { activeSection, completedSections, scrollToSection } = useProductTour();

  return (
    <nav
      className="sticky top-[var(--marketing-header-offset,4rem)] z-30 border-b border-brand-line/80 bg-white/95 backdrop-blur-sm"
      aria-label="Product tour sections"
    >
      <div className="site-shell py-3">
        <div
          className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
        >
          {TOUR_NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const isComplete = completedSections.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => scrollToSection(item.id)}
                className={`flex shrink-0 items-center gap-2 rounded-sm border px-3 py-2.5 text-left transition motion-reduce:transition-none sm:px-4 ${
                  isActive
                    ? "border-brand-navy bg-brand-navy text-white"
                    : isComplete
                      ? "border-brand-blue/30 bg-[#F4F8FC] text-black hover:border-brand-blue/50"
                      : "border-brand-line/80 bg-white text-black hover:border-brand-line"
                }`}
              >
                <span
                  className={`text-[10px] font-bold tabular-nums tracking-wide ${
                    isActive ? "text-brand-orange" : "text-brand-orange"
                  }`}
                >
                  {String(item.index).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em]">{item.label}</span>
                {isComplete ? (
                  <span className={`text-[10px] font-semibold ${isActive ? "text-white/80" : "text-[#111827]"}`} aria-label="Completed">
                    ✓
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
