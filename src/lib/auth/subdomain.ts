/**
 * Subdomain allocation for tenant provisioning (preview mock).
 * Production uniqueness is enforced by the tenant API — replace this module.
 */

import { previewSubdomainFromCompany } from "./session";

const REGISTRY_KEY = "vertex_cms_preview_subdomain_registry";
const RESERVED = new Set(["admin", "www", "api", "app", "taken", "vertex", "cms"]);

function readRegistry(): Set<string> {
  if (typeof window === "undefined") return new Set(RESERVED);
  try {
    const raw = sessionStorage.getItem(REGISTRY_KEY);
    const list = raw ? (JSON.parse(raw) as string[]) : [];
    return new Set([...Array.from(RESERVED), ...list]);
  } catch {
    return new Set(Array.from(RESERVED));
  }
}

function writeRegistry(set: Set<string>) {
  if (typeof window === "undefined") return;
  const custom = Array.from(set).filter((s) => !RESERVED.has(s));
  sessionStorage.setItem(REGISTRY_KEY, JSON.stringify(custom));
}

export function claimSubdomain(slug: string): void {
  const reg = readRegistry();
  reg.add(slug);
  writeRegistry(reg);
}

export function releaseSubdomain(slug: string): void {
  if (RESERVED.has(slug)) return;
  const reg = readRegistry();
  reg.delete(slug);
  writeRegistry(reg);
}

/**
 * Generate a unique workspace slug from company name.
 * On collision, appends -2, -3, … (provisioning strategy — not user input).
 */
export function allocateUniqueSubdomain(companyName: string): {
  ok: true;
  subdomain: string;
} | {
  ok: false;
  error: string;
  attempted: string;
  retryable: boolean;
} {
  const base = previewSubdomainFromCompany(companyName);
  const reg = readRegistry();

  // Preview QA paths — not production behavior
  if (/^fail[- ]?provision[- ]?permanent$/i.test(companyName.trim())) {
    return {
      ok: false,
      error: "We couldn’t complete your workspace setup.",
      attempted: base,
      retryable: false,
    };
  }

  if (/^fail[- ]?provision$/i.test(companyName.trim()) || base === "fail-provision") {
    return {
      ok: false,
      error: "We couldn’t finish setting up your workspace.",
      attempted: base,
      retryable: true,
    };
  }

  for (let i = 0; i < 50; i++) {
    const candidate = i === 0 ? base : `${base}-${i + 1}`.slice(0, 48);
    if (!reg.has(candidate)) {
      claimSubdomain(candidate);
      return { ok: true, subdomain: candidate };
    }
  }

  return {
    ok: false,
    error: "This workspace address is already in use.",
    attempted: base,
    retryable: false,
  };
}

export { previewSubdomainFromCompany };
