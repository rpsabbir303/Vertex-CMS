"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { ArrowRight } from "@/components/Icons";

type Variant = "primary" | "secondary";
type CtaState = "default" | "loading" | "disabled";

type Props = {
  href: string;
  label: string;
  description: string;
  variant?: Variant;
  disabled?: boolean;
  className?: string;
};

/**
 * Pricing card CTA — button-based navigation with visible interaction states.
 */
export function PricingPlanCta({ href, label, description, variant = "secondary", disabled, className = "" }: Props) {
  const router = useRouter();
  const [state, setState] = useState<CtaState>("default");

  const isDisabled = disabled || state === "disabled";
  const isLoading = state === "loading";

  const handleClick = useCallback(() => {
    if (isDisabled || isLoading) return;
    setState("loading");
    router.push(href);
  }, [href, isDisabled, isLoading, router]);

  const base =
    variant === "primary"
      ? "btn-primary w-full"
      : "btn-secondary w-full border-brand-line bg-brand-soft text-brand-navy hover:border-brand-navy/20";

  return (
    <button
      type="button"
      aria-label={description}
      aria-busy={isLoading}
      aria-disabled={isDisabled || isLoading}
      disabled={isDisabled || isLoading}
      onClick={handleClick}
      className={`${base} ${
        isLoading ? "cursor-wait opacity-80" : isDisabled ? "cursor-not-allowed opacity-50" : "active:scale-[0.99]"
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${className}`}
    >
      {isLoading ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
            aria-hidden="true"
          />
          <span>Loading…</span>
        </>
      ) : (
        <>
          {label}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </>
      )}
    </button>
  );
}
