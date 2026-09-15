"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchPricingCatalog,
  getPricingStructureFallback,
  refreshPricingForPeriod,
  PricingLoadError,
} from "./loader";
import type { PricingCatalog, PricingPeriod } from "./types";

export type PricingCatalogStatus = "loading" | "loaded" | "error";

export function usePricingCatalog(options?: { forceError?: boolean }) {
  const [status, setStatus] = useState<PricingCatalogStatus>("loading");
  const [catalog, setCatalog] = useState<PricingCatalog | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [retrying, setRetrying] = useState(false);
  const [period, setPeriodState] = useState<PricingPeriod>("monthly");
  const [periodLoading, setPeriodLoading] = useState(false);
  const loadInFlight = useRef(false);
  const forceErrorRef = useRef(options?.forceError);
  forceErrorRef.current = options?.forceError;

  const load = useCallback(async (isRetry = false) => {
    if (loadInFlight.current) return;
    loadInFlight.current = true;

    if (isRetry) setRetrying(true);
    else setStatus("loading");

    setErrorMessage(null);

    try {
      const data = await fetchPricingCatalog({ forceError: forceErrorRef.current });
      setCatalog(data);
      setStatus("loaded");
    } catch (err) {
      setCatalog(null);
      setStatus("error");
      setErrorMessage(
        err instanceof PricingLoadError
          ? err.message
          : "Pricing is temporarily unavailable. Please try again."
      );
    } finally {
      loadInFlight.current = false;
      setRetrying(false);
    }
  }, []);

  useEffect(() => {
    void load(false);
  }, [load, options?.forceError]);

  const setPeriod = useCallback(
    async (next: PricingPeriod) => {
      if (next === period || status !== "loaded") {
        setPeriodState(next);
        return;
      }

      setPeriodState(next);
      setPeriodLoading(true);
      await refreshPricingForPeriod(next);
      setPeriodLoading(false);
    },
    [period, status]
  );

  const structureFallback = getPricingStructureFallback();

  const isInitialLoading = status === "loading" && !retrying;
  const isPriceLoading = isInitialLoading || periodLoading || retrying;

  return {
    status,
    catalog: status === "loaded" ? catalog : status === "error" ? structureFallback : null,
    structureFallback,
    errorMessage,
    retrying,
    retry: () => load(true),
    pricesUnavailable: status === "error",
    isInitialLoading,
    isPriceLoading,
    period,
    setPeriod,
    periodLoading,
  };
}
