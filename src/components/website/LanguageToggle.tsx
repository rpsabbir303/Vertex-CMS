"use client";

import { useLanguage } from "./LanguageProvider";
import type { Locale } from "@/lib/website/tenantData";

export function LanguageToggle({ light = false }: { light?: boolean }) {
  const { locale, setLocale } = useLanguage();

  const btn = (lang: Locale, label: string) => (
    <button
      type="button"
      className={`px-2 py-1 text-xs font-semibold transition ${
        locale === lang
          ? light
            ? "text-brand-orange"
            : "text-brand-navy"
          : light
            ? "text-slate-400 hover:text-white"
            : "text-brand-muted hover:text-brand-navy"
      }`}
      aria-pressed={locale === lang}
      onClick={() => setLocale(lang)}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language">
      {btn("en", "EN")}
      <span className={`text-xs ${light ? "text-slate-600" : "text-brand-line"}`}>|</span>
      {btn("es", "ES")}
    </div>
  );
}
