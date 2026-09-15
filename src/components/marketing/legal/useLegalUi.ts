"use client";

import { useMarketing } from "@/components/marketing/MarketingProviders";

/** Localized UI chrome for legal document pages (not legal copy). */
export function useLegalUi() {
  const { t, locale } = useMarketing();
  return { ui: t.legal, locale };
}
