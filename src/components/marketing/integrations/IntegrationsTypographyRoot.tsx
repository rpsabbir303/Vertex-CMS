import { integrationsDisplayFont, integrationsSansFont } from "@/lib/marketing/integrations/fonts";
import "@/app/integrations/integrations-typography.css";
import "@/app/integrations/integrations-backgrounds.css";
import "@/app/integrations/integrations-detail.css";

/** Server wrapper — typography scope for /integrations routes (replaces nested app layout segment). */
export function IntegrationsTypographyRoot({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`integrations-typography ${integrationsDisplayFont.variable} ${integrationsSansFont.variable} font-sans antialiased`}
    >
      {children}
    </div>
  );
}
