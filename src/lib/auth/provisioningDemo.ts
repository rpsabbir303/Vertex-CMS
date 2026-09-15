/**
 * Preview-only provisioning demo controls (sessionStorage).
 * Does not affect production — no real tenants created.
 */

const DEMO_RETRY_KEY = "vertex_cms_provision_demo_retry";

export type ProvisionDemoRetryOutcome = "default" | "success" | "fail-retryable" | "fail-non-retryable";

export function setProvisionDemoRetry(outcome: ProvisionDemoRetryOutcome): void {
  if (typeof window === "undefined") return;
  if (outcome === "default") {
    sessionStorage.removeItem(DEMO_RETRY_KEY);
    return;
  }
  sessionStorage.setItem(DEMO_RETRY_KEY, outcome);
}

export function getProvisionDemoRetry(): ProvisionDemoRetryOutcome {
  if (typeof window === "undefined") return "default";
  const raw = sessionStorage.getItem(DEMO_RETRY_KEY);
  if (
    raw === "success" ||
    raw === "fail-retryable" ||
    raw === "fail-non-retryable"
  ) {
    return raw;
  }
  return "default";
}

export function clearProvisionDemoRetry(): void {
  setProvisionDemoRetry("default");
}

/** Company names that trigger preview provisioning outcomes (QA only). */
export const PROVISION_DEMO_COMPANY = {
  retryableFail: "fail provision",
  nonRetryableFail: "fail provision permanent",
} as const;
