"use client";

import { useCallback, useEffect, useState } from "react";

import type { ProductTourSectionId } from "@/lib/marketing/product-tour/content";
import { useProductTour } from "./ProductTourContext";

export function useTourSteps(sectionId: ProductTourSectionId, stepCount: number) {
  const { markSectionComplete } = useProductTour();
  const [step, setStep] = useState(0);

  const isFirst = step === 0;
  const isLast = step === stepCount - 1;

  const goNext = useCallback(() => {
    setStep((s) => {
      const next = Math.min(s + 1, stepCount - 1);
      if (next === stepCount - 1) markSectionComplete(sectionId);
      return next;
    });
  }, [markSectionComplete, sectionId, stepCount]);

  const goPrev = useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    if (step === stepCount - 1) markSectionComplete(sectionId);
  }, [markSectionComplete, sectionId, step, stepCount]);

  return { step, setStep, isFirst, isLast, goNext, goPrev };
}
