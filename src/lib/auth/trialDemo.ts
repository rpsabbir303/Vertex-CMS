/**
 * Preview-only trial demo controls (sessionStorage).
 * Does not affect production — no real subscription status changes.
 */

/** Preview login credentials that route to trial expired (QA only). */
export const TRIAL_EXPIRED_DEMO = {
  email: "expired@company.com",
  password: "expiredtrial",
} as const;

export function isTrialExpiredDemoMode(mode: string | null | undefined): boolean {
  return mode === "demo";
}
