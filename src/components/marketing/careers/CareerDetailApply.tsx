"use client";

import { useId } from "react";
import type { CareerJob } from "@/lib/marketing/careers/content";

export type CareerApplyState = "idle" | "applying" | "success" | "error";

type Props = {
  job: CareerJob;
  label: string;
  applyingLabel: string;
  demoSuccessLabel: string;
  errorLabel: string;
  pendingLabel: string;
  demoSupporting?: string;
  fullWidth?: boolean;
  compact?: boolean;
  state: CareerApplyState;
  onApply: () => void;
  onRetry: () => void;
};

const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-[13px] font-semibold text-white transition duration-200 hover:bg-[#0c2d4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

function isExternal(url: string) {
  return /^https?:\/\//i.test(url);
}

export function CareerDetailApply({
  job,
  label,
  applyingLabel,
  demoSuccessLabel,
  errorLabel,
  pendingLabel,
  demoSupporting,
  fullWidth,
  compact,
  state,
  onApply,
  onRetry,
}: Props) {
  const statusId = useId();
  const widthClass = fullWidth ? "w-full sm:w-auto" : "";
  const ariaLabel = `${label}: ${job.title}`;

  if (job.applicationUrl) {
    const external = isExternal(job.applicationUrl);
    return (
      <a
        href={job.applicationUrl}
        aria-label={ariaLabel}
        className={`${buttonClass} ${widthClass}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );
  }

  const canDemoApply = Boolean(job.demoContent);
  const busy = state === "applying";
  const done = state === "success";
  const disabled = busy || done || !canDemoApply;

  const statusText =
    state === "success"
      ? demoSuccessLabel
      : state === "error"
        ? errorLabel
        : !canDemoApply
          ? pendingLabel
          : null;

  return (
    <div>
      {!compact && job.demoContent && demoSupporting ? (
        <p className="mb-4 max-w-md text-[14px] leading-[1.8] text-brand-muted">{demoSupporting}</p>
      ) : null}
      <button
        type="button"
        className={`${buttonClass} ${widthClass}`}
        aria-label={ariaLabel}
        aria-describedby={statusText ? statusId : undefined}
        aria-busy={busy}
        disabled={disabled}
        onClick={canDemoApply ? onApply : undefined}
      >
        {busy ? applyingLabel : label}
      </button>
      {statusText ? (
        <p id={statusId} className="mt-3 max-w-md text-[13px] leading-relaxed text-brand-muted" role="status" aria-live="polite">
          {state === "error" ? (
            <>
              {errorLabel}{" "}
              <button
                type="button"
                className="font-semibold text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                onClick={onRetry}
              >
                {label}
              </button>
            </>
          ) : (
            statusText
          )}
        </p>
      ) : null}
    </div>
  );
}
