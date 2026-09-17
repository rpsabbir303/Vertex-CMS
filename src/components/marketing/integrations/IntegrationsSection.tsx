import type { ReactNode } from "react";

/**
 * Integrations section wrapper — content stays visible (no IntersectionObserver / opacity:0).
 * Optional one-shot CSS entrance under .integrations-typography.
 */
export function IntegrationsSection({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <div
      className={`integrations-section w-full min-w-0 ${className}`}
      style={delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
