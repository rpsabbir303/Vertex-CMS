"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { content, type Content } from "@/lib/website/content";
import type { Locale } from "@/lib/website/tenantData";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: content[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Graceful fallback during Fast Refresh to avoid blank/error pages in dev.
    if (process.env.NODE_ENV === "development") {
      return { locale: "en" as Locale, setLocale: () => {}, t: content.en };
    }
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
