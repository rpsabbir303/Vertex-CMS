"use client";

import { useEffect, useState } from "react";
import { useMarketing } from "./MarketingProviders";

type ConsentState = "initial" | "accepted" | "preferences";

const STORAGE_KEY = "vertex-cms-cookie-consent";

export function CookieConsent() {
  const { t } = useMarketing();
  const [state, setState] = useState<ConsentState | "hidden">("hidden");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (saved === "accepted" || saved === "preferences") {
      setState("hidden");
    } else {
      setState("initial");
    }
  }, []);

  if (state === "hidden") return null;

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setState("hidden");
  };

  const savePreferences = () => {
    localStorage.setItem(STORAGE_KEY, "preferences");
    setState("hidden");
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-brand-line bg-white p-4 shadow-[0_-8px_30px_rgba(8,35,63,0.12)] sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="site-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="min-w-0 text-sm leading-relaxed text-brand-muted">
          {state === "preferences" ? t.cookie.manage : t.cookie.message}
        </p>
        <div className="flex w-full shrink-0 flex-wrap gap-2 sm:w-auto sm:justify-end">
          {state === "initial" && (
            <button
              type="button"
              className="btn-secondary px-4 py-2.5 text-[12px]"
              onClick={() => setState("preferences")}
            >
              {t.cookie.preferences}
            </button>
          )}
          {state === "preferences" ? (
            <button type="button" className="btn-primary px-4 py-2.5 text-[12px]" onClick={savePreferences}>
              Save Preferences
            </button>
          ) : (
            <button type="button" className="btn-primary px-4 py-2.5 text-[12px]" onClick={accept}>
              {t.cookie.accept}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
