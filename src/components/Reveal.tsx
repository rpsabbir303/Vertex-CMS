"use client";

import { useEffect, useRef } from "react";

/**
 * Structural wrapper kept for layout consistency.
 * Content is always visible (no opacity:0 entrance) so HTML-to-Figma can capture it.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("visible");
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal visible w-full min-w-0 ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
