"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Subtle scroll-linked float for product callout chips */
export function FloatChip({
  children,
  className = "",
  intensity = 12,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const mid = window.innerHeight / 2;
        const offset = ((rect.top + rect.height / 2 - mid) / mid) * intensity;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={`will-change-transform transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
}
