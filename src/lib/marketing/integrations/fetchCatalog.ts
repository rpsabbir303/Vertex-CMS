import { INTEGRATIONS_CATALOG } from "./catalog";
import type { IntegrationsCatalogError, IntegrationsCatalogResult } from "./types";

export async function fetchIntegrationsCatalog(options?: {
  signal?: AbortSignal;
  forceError?: boolean;
}): Promise<IntegrationsCatalogResult> {
  if (options?.signal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  if (options?.forceError) {
    throw {
      message: "We couldn't load integrations right now.",
      retryable: true,
    } satisfies IntegrationsCatalogError;
  }

  return {
    items: [...INTEGRATIONS_CATALOG],
    loadedAt: Date.now(),
  };
}

export function isIntegrationsCatalogError(err: unknown): err is IntegrationsCatalogError {
  return (
    typeof err === "object" &&
    err !== null &&
    "message" in err &&
    typeof (err as IntegrationsCatalogError).message === "string"
  );
}
