"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import { useMarketing } from "./MarketingProviders";
import { ROUTES } from "@/lib/marketing/navigation";
import { COOKIE_CATEGORY_IDS } from "@/lib/marketing/cookieConsent";

export function CookiePreferencesModal() {
  const { t } = useMarketing();
  const {
    preferencesOpen,
    draftPreferences,
    saveStatus,
    closePreferences,
    setDraftPreference,
    savePreferences,
  } = useCookieConsent();

  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!preferencesOpen) return;

    firstFocusRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closePreferences();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closePreferences, preferencesOpen]);

  if (!preferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4 print:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-brand-navy/40 backdrop-blur-[1px]"
        aria-label={t.cookie.cancel}
        onClick={closePreferences}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-[71] flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-brand-line bg-white shadow-soft sm:max-h-[85vh] sm:rounded-2xl"
      >
        <div className="border-b border-brand-line px-5 py-5 sm:px-6">
          <h2 id={titleId} className="font-display text-xl font-bold tracking-tight text-brand-navy">
            {t.cookie.preferencesTitle}
          </h2>
          <p id={descId} className="mt-2 text-[14px] leading-relaxed text-brand-muted">
            {t.cookie.preferencesDescription}
          </p>
          <p className="mt-3 text-[12px] text-brand-muted">
            <Link
              href={ROUTES.legalCookies}
              className="font-medium text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {t.legal.nav.cookies}
            </Link>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="space-y-4">
            {COOKIE_CATEGORY_IDS.map((categoryId) => {
              const meta = t.cookie.categories[categoryId];
              const required = categoryId === "necessary";
              const enabled = draftPreferences[categoryId];

              return (
                <li
                  key={categoryId}
                  className="rounded-xl border border-brand-line/80 bg-[#FAFBFD] px-4 py-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[14px] font-semibold text-brand-navy">{meta.name}</h3>
                        {required ? (
                          <span className="rounded-sm bg-brand-navy/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-navy">
                            {t.cookie.requiredLabel}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-brand-muted">{meta.description}</p>
                    </div>

                    {required ? (
                      <span
                        className="shrink-0 text-[12px] font-semibold text-brand-muted"
                        aria-label={`${meta.name} — ${t.cookie.requiredLabel}`}
                      >
                        {t.cookie.onLabel}
                      </span>
                    ) : (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={enabled}
                        aria-label={`${meta.name} — ${enabled ? t.cookie.onLabel : t.cookie.offLabel}`}
                        disabled={saveStatus === "saving"}
                        className={`relative inline-flex h-7 w-12 shrink-0 rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                          enabled
                            ? "border-brand-orange bg-brand-orange"
                            : "border-brand-line bg-white"
                        }`}
                        onClick={() => setDraftPreference(categoryId, !enabled)}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition ${
                            enabled ? "translate-x-6" : "translate-x-1"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {saveStatus === "saved" ? (
            <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-[13px] text-emerald-800" role="status">
              {t.cookie.saved}
            </p>
          ) : null}
          {saveStatus === "error" ? (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-[13px] text-red-800" role="alert">
              {t.cookie.error}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-brand-line bg-white px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            ref={firstFocusRef}
            type="button"
            className="btn-secondary px-5 py-3 text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            onClick={closePreferences}
            disabled={saveStatus === "saving"}
          >
            {t.cookie.cancel}
          </button>
          <button
            type="button"
            className="btn-primary px-5 py-3 text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            onClick={() => void savePreferences()}
            disabled={saveStatus === "saving"}
            aria-busy={saveStatus === "saving"}
          >
            {saveStatus === "saving" ? t.cookie.saving : t.cookie.save}
          </button>
        </div>
      </div>
    </div>
  );
}
