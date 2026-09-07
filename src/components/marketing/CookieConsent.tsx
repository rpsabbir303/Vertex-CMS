"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTES } from "@/lib/marketing/navigation";
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
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-brand-line bg-white/95 p-4 shadow-[0_-6px_24px_rgba(6,21,37,0.08)] backdrop-blur-sm print:hidden sm:p-5"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="site-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <p className="text-sm leading-relaxed text-brand-muted">
            {state === "preferences" ? t.cookie.manage : t.cookie.message}
          </p>
          <p className="mt-2 text-[12px] text-brand-muted">
            <Link href={ROUTES.legalPrivacy} className="font-medium text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2 text-brand-line" aria-hidden="true">
              ·
            </span>
            <Link href={ROUTES.legalCookies} className="font-medium text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline">
              Cookie Policy
            </Link>
          </p>
        </div>
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
