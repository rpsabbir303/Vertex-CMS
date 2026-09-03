"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { marketingContent, type MarketingContent, type MarketingLocale } from "@/lib/marketing/content";

type Value = {
  locale: MarketingLocale;
  setLocale: (l: MarketingLocale) => void;
  t: MarketingContent;
};

const Ctx = createContext<Value | null>(null);

export function MarketingProviders({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<MarketingLocale>("en");
  return <Ctx.Provider value={{ locale, setLocale, t: marketingContent[locale] }}>{children}</Ctx.Provider>;
}

export function useMarketing() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    if (process.env.NODE_ENV === "development") {
      return { locale: "en" as MarketingLocale, setLocale: () => {}, t: marketingContent.en };
    }
    throw new Error("useMarketing must be used within MarketingProviders");
  }
  return ctx;
}
