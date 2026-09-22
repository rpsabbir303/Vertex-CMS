"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { PRODUCT_TOUR_SECTION_IDS, type ProductTourSectionId, TOUR_NAV_ITEMS } from "@/lib/marketing/product-tour/content";

type ProductTourContextValue = {
  activeSection: ProductTourSectionId;
  completedSections: Set<ProductTourSectionId>;
  markSectionComplete: (id: ProductTourSectionId) => void;
  scrollToSection: (id: ProductTourSectionId) => void;
};

const ProductTourContext = createContext<ProductTourContextValue | null>(null);

export function ProductTourProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<ProductTourSectionId>("platform");
  const [completedSections, setCompletedSections] = useState<Set<ProductTourSectionId>>(() => new Set());

  const markSectionComplete = useCallback((id: ProductTourSectionId) => {
    setCompletedSections((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const scrollToSection = useCallback((id: ProductTourSectionId) => {
    const el = document.getElementById(PRODUCT_TOUR_SECTION_IDS[id]);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const ids = TOUR_NAV_ITEMS.map((item) => PRODUCT_TOUR_SECTION_IDS[item.id]);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const match = TOUR_NAV_ITEMS.find((item) => PRODUCT_TOUR_SECTION_IDS[item.id] === visible.target.id);
        if (match) setActiveSection(match.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.12, 0.25, 0.4] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const value = useMemo(
    () => ({ activeSection, completedSections, markSectionComplete, scrollToSection }),
    [activeSection, completedSections, markSectionComplete, scrollToSection],
  );

  return <ProductTourContext.Provider value={value}>{children}</ProductTourContext.Provider>;
}

export function useProductTour() {
  const ctx = useContext(ProductTourContext);
  if (!ctx) throw new Error("useProductTour must be used within ProductTourProvider");
  return ctx;
}
