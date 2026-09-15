"use client";

import { LEGAL_NAV, type LegalDocId } from "@/lib/marketing/legal/content";
import { useLegalUi } from "./useLegalUi";
import type { LegalNavItem } from "./LegalNavLink";

/** Localized legal nav items — single source for hrefs and labels. */
export function useLegalNavItems(): LegalNavItem[] {
  const { ui } = useLegalUi();
  return LEGAL_NAV.map((item) => ({
    id: item.id,
    href: item.href,
    label: ui.nav[item.id],
  }));
}

export function useLegalNavLabel(docId: LegalDocId): string {
  const { ui } = useLegalUi();
  return ui.nav[docId];
}
