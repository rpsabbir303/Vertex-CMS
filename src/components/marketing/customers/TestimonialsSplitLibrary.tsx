"use client";

import { useMemo, useState } from "react";

import { getTestimonialContextMetadata } from "@/lib/marketing/customers/catalog";
import type { CustomerTestimonialRecord } from "@/lib/marketing/customers/types";

import { SplitTestimonialStory } from "./SplitTestimonialStory";

type Props = {
  testimonials: CustomerTestimonialRecord[];
  featuredEyebrow: string;
};

function categoryFor(testimonial: CustomerTestimonialRecord): string | undefined {
  return getTestimonialContextMetadata(testimonial).contractorType;
}

export function TestimonialsSplitLibrary({ testimonials, featuredEyebrow }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const t of testimonials) {
      const type = categoryFor(t);
      if (type) set.add(type);
    }
    return Array.from(set).sort();
  }, [testimonials]);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return testimonials;
    return testimonials.filter((t) => categoryFor(t) === activeCategory);
  }, [activeCategory, testimonials]);

  const catalogIndexById = useMemo(() => {
    const map = new Map<string, number>();
    testimonials.forEach((t, i) => map.set(t.id, i));
    return map;
  }, [testimonials]);

  return (
    <div className="mt-8 min-w-0">
      {categories.length > 1 ? (
        <nav
          className="flex flex-wrap gap-2 border-b border-brand-line pb-4"
          aria-label="Filter testimonials by contractor type"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
              activeCategory === "all"
                ? "border-brand-orange bg-brand-orange/10 text-black"
                : "border-brand-line bg-white text-brand-muted hover:border-[#c5d2df] hover:text-black"
            }`}
          >
            All perspectives
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                activeCategory === cat
                  ? "border-brand-orange bg-brand-orange/10 text-black"
                  : "border-brand-line bg-white text-brand-muted hover:border-[#c5d2df] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      ) : null}

      {filtered.length === 0 ? (
        <p className="mt-8 text-[14px] text-brand-muted">No testimonials match this filter.</p>
      ) : (
        <div className="mt-10 flex flex-col gap-16 lg:mt-12 lg:gap-28" role="list">
          {filtered.map((t) => {
            const catalogIndex = catalogIndexById.get(t.id) ?? 0;
            const isFeatured = catalogIndex === 0;
            const imageOnLeft = catalogIndex % 2 === 1;

            return (
              <div key={t.id} className="min-w-0" role="listitem">
                {isFeatured ? (
                  <p className="cust-eyebrow mb-5">{featuredEyebrow}</p>
                ) : null}
                <SplitTestimonialStory
                  testimonial={t}
                  catalogIndex={catalogIndex}
                  imageOnLeft={imageOnLeft}
                  emphasis={isFeatured ? "featured" : "default"}
                  priorityImage={isFeatured}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
