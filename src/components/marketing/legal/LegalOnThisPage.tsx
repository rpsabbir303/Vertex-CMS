"use client";

import { useEffect, useState } from "react";
import type { LegalSection } from "@/lib/marketing/legal/content";
import { useLegalUi } from "./useLegalUi";

type Props = {
  sections: LegalSection[];
  /** Compact horizontal list for mobile/tablet */
  variant?: "sidebar" | "inline";
};

export function LegalOnThisPage({ sections, variant = "sidebar" }: Props) {
  const { ui } = useLegalUi();
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length <= 1) {
    return null;
  }

  if (variant === "inline") {
    return (
      <nav aria-label="On this page" className="mb-8 xl:hidden print:hidden">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          {ui.onThisPage}
        </p>
        <ul className="-mx-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  className={`inline-flex max-w-[14rem] truncate rounded-md border px-3 py-1.5 text-[12px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                    isActive
                      ? "border-brand-orange/40 bg-brand-orange/5 font-semibold text-brand-navy"
                      : "border-brand-line bg-white text-brand-muted hover:text-brand-navy"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page" className="hidden xl:block print:hidden">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{ui.onThisPage}</p>
      <ul className="mt-4 max-h-[70vh] space-y-1 overflow-y-auto border-l border-brand-line">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`-ml-px block border-l-2 py-1.5 pl-3 text-[12px] leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                  isActive
                    ? "border-brand-orange font-semibold text-brand-navy"
                    : "border-transparent text-brand-muted hover:border-brand-line hover:text-brand-navy"
                }`}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
