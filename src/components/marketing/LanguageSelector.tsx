"use client";

import { useMarketing } from "./MarketingProviders";

type Props = {
  light?: boolean;
  /** Compact EN/ES labels for header; full labels for footer/mobile */
  compact?: boolean;
};

export function LanguageSelector({ light = false, compact = false }: Props) {
  const { locale, setLocale, t } = useMarketing();

  return (
    <div
      className={`inline-flex shrink-0 rounded-sm border p-0.5 text-[11px] font-semibold uppercase tracking-wide ${
        light ? "border-white/20 text-slate-300" : "border-brand-line text-brand-muted"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={`rounded-sm px-2 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-blue ${
            locale === l
              ? light
                ? "bg-white/15 text-white"
                : "bg-brand-navy text-white"
              : light
                ? "hover:text-white"
                : "hover:text-brand-navy"
          }`}
          aria-pressed={locale === l}
        >
          {compact ? l.toUpperCase() : l === "en" ? t.footer.english : t.footer.spanish}
        </button>
      ))}
    </div>
  );
}
