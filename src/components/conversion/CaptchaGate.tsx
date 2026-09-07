"use client";

import { CAPTCHA_ENABLED, type CaptchaGateValue, type CaptchaUiStatus } from "@/lib/auth/captcha";

type Props = {
  value: CaptchaGateValue;
  onChange: (value: CaptchaGateValue) => void;
  error?: string;
  disabled?: boolean;
};

/**
 * Bot-check gate for signup.
 * When no provider is configured, acknowledgment advances Challenge → Verified for UI preview only.
 * This does NOT claim a third-party CAPTCHA provider verified the user.
 */
export function CaptchaGate({ value, onChange, error, disabled }: Props) {
  const status: CaptchaUiStatus = value.status;

  if (CAPTCHA_ENABLED) {
    return (
      <div className="rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-3 text-[13px] text-brand-muted">
        CAPTCHA provider widget mounts here when configured.
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg border px-4 py-3 ${
        error || status === "failed"
          ? "border-red-300 bg-red-50"
          : status === "verified"
            ? "border-emerald-200 bg-emerald-50/60"
            : "border-brand-line bg-[#FAFBFD]"
      }`}
      data-captcha-status={status}
    >
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
        Bot protection · {status === "verified" ? "Verified" : status === "failed" ? "Failure" : "Challenge"}
      </p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-brand-navy/80">
        A CAPTCHA provider is not connected yet. Complete this step to continue the signup preview — this is not
        third-party provider verification.
      </p>
      <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-[13px] text-brand-navy">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-brand-line text-brand-orange focus:ring-brand-orange"
          checked={status === "verified"}
          disabled={disabled}
          onChange={(e) =>
            onChange({
              status: e.target.checked ? "verified" : "challenge",
            })
          }
        />
        <span>I’m not a robot (preview bot check — provider not configured).</span>
      </label>
      {(error || status === "failed") && (
        <p className="mt-2 text-[12px] font-medium text-red-600" role="alert">
          {error ?? "Complete the bot check to continue."}
        </p>
      )}
    </div>
  );
}
