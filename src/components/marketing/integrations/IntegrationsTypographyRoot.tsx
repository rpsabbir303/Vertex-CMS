import "@/app/integrations/integrations-typography.css";
import "@/app/integrations/integrations-backgrounds.css";
import "@/app/integrations/integrations-detail.css";

/** Server wrapper — typography scope for /integrations routes (replaces nested app layout segment). */
export function IntegrationsTypographyRoot({ children }: { children: React.ReactNode }) {
  return <div className="integrations-typography font-sans antialiased">{children}</div>;
}
