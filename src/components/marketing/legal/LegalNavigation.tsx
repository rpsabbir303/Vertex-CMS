"use client";

import { useEffect, useRef } from "react";
import type { LegalDocId } from "@/lib/marketing/legal/content";
import { LegalNavLink } from "./LegalNavLink";
import { useLegalNavItems } from "./useLegalNavItems";
import { useLegalUi } from "./useLegalUi";

type Props = {
  current: LegalDocId;
  /** sidebar = desktop column; mobile = horizontal pills; footer = document footer links */
  variant?: "sidebar" | "mobile" | "footer" | "all";
};

export function LegalNavigation({ current, variant = "all" }: Props) {
  const { ui } = useLegalUi();
  const items = useLegalNavItems();
  const mobileListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (variant !== "mobile" && variant !== "all") return;
    const active = mobileListRef.current?.querySelector('[aria-current="page"]');
    active?.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
  }, [current, variant]);

  if (variant === "footer") {
    return (
      <nav aria-label={ui.navigationAriaLabel} className="print:hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{ui.relatedHeading}</p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
          {items.map((item) => (
            <li key={item.id}>
              <LegalNavLink
                href={item.href}
                label={item.label}
                active={item.id === current}
                variant="footer"
              />
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  const showMobile = variant === "mobile" || variant === "all";
  const showSidebar = variant === "sidebar" || variant === "all";

  return (
    <>
      {showMobile ? (
        <nav aria-label={ui.navigationAriaLabel} className="mb-8 lg:hidden print:hidden">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            {ui.eyebrow}
          </p>
          <ul
            ref={mobileListRef}
            className="-mx-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
          >
            {items.map((item) => (
              <li key={item.id} className="shrink-0">
                <LegalNavLink
                  href={item.href}
                  label={item.label}
                  active={item.id === current}
                  variant="pill"
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {showSidebar ? (
        <nav aria-label={ui.navigationAriaLabel} className="hidden lg:block print:hidden">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{ui.eyebrow}</p>
          <ul className="mt-4 space-y-1 border-l border-brand-line">
            {items.map((item) => (
              <li key={item.id}>
                <LegalNavLink
                  href={item.href}
                  label={item.label}
                  active={item.id === current}
                  variant="sidebar"
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
