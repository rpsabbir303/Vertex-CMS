/**
 * CAPTCHA / bot-check configuration for signup conversion.
 *
 * No CAPTCHA provider is installed in this repo.
 * Do not claim provider verification until a real integration exists.
 */

export type CaptchaProviderId = null;

/** Documented UI states: Challenge → Verified | Failure */
export type CaptchaUiStatus = "challenge" | "verified" | "failed";

/** Set when a real provider (e.g. Turnstile) is wired — currently none. */
export const CAPTCHA_PROVIDER: CaptchaProviderId = null;

export const CAPTCHA_ENABLED = CAPTCHA_PROVIDER != null;

export const CAPTCHA_BACKEND_GAP =
  "CAPTCHA / bot-prevention provider integration (challenge token verify on signup)";

export type CaptchaGateValue = {
  status: CaptchaUiStatus;
  /** Only set when a real provider returns a token */
  providerToken?: string;
};
