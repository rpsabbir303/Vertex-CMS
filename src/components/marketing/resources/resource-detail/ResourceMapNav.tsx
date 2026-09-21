"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { ResourceMapItem } from "../blog-detail/ResourceDetailContextRail";

export type LibraryLinkItem = {
  href: string;
  index: number;
  label: string;
};

type Props = {
  mapItems: ResourceMapItem[];
  mapTitle: string;
  mapAriaLabel: string;
  /** Blog uses simple anchors; guides use numbered markers + optional scroll spy. */
  variant?: "simple" | "guide";
  scrollSpy?: boolean;
  libraryTitle?: string;
  libraryItems?: LibraryLinkItem[];
};

/**
 * Sticky guide navigation with optional scroll-spy active section highlighting.
 */
export function ResourceMapNav({
  mapItems,
  mapTitle,
  mapAriaLabel,
  variant = "simple",
  scrollSpy = false,
  libraryTitle,
  libraryItems,
}: Props) {
  const isGuideNav = variant === "guide";
  const [activeId, setActiveId] = useState<string | null>(mapItems[0]?.id ?? null);

  useEffect(() => {
    if (!scrollSpy || mapItems.length === 0) return;

    const sectionEls = mapItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [scrollSpy, mapItems]);

  return (
    <>
      <nav
        aria-label={mapAriaLabel}
        className="relative border border-brand-line bg-white px-4 py-4"
      >
        {isGuideNav ? (
          <div className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-brand-line/80" aria-hidden="true" />
        ) : null}
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">{mapTitle}</p>
        <ol className={`relative mt-3 space-y-2.5 ${isGuideNav ? "pl-1" : ""}`}>
          {mapItems.map((item) => {
            const isActive = isGuideNav && scrollSpy && activeId === item.id;
            return (
              <li key={item.id} className={isGuideNav ? "relative pl-4" : undefined}>
                {isGuideNav ? (
                  <span
                    className={`absolute left-0 top-[0.45rem] h-2 w-2 rounded-full border transition ${
                      isActive ? "border-brand-orange bg-brand-orange" : "border-brand-blue/40 bg-white"
                    }`}
                    aria-hidden="true"
                  />
                ) : null}
                <a
                  href={`#${item.id}`}
                  onClick={() => scrollSpy && setActiveId(item.id)}
                  className={`group flex gap-2.5 text-[13px] leading-snug transition ${
                    isActive ? "font-semibold text-brand-blue" : "text-brand-navy hover:text-brand-blue"
                  }`}
                >
                  <span
                    className={`shrink-0 tabular-nums text-[11px] font-semibold ${
                      isActive ? "text-brand-orange" : "text-brand-orange/90"
                    }`}
                  >
                    {String(item.index).padStart(2, "0")}
                  </span>
                  <span className={isActive ? "" : "group-hover:underline"}>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {libraryItems && libraryItems.length > 0 && libraryTitle ? (
        <div className="border border-brand-line bg-[#FAFBFD] px-4 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">{libraryTitle}</p>
          <ol className="mt-3 space-y-2.5">
            {libraryItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex gap-2.5 text-[13px] leading-snug text-brand-navy transition hover:text-brand-blue"
                >
                  <span className="shrink-0 tabular-nums text-[11px] font-semibold text-brand-orange/90">
                    {String(item.index).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </>
  );
}
