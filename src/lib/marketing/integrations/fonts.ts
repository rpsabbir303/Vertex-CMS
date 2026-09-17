import { DM_Sans, DM_Serif_Display } from "next/font/google";

/** Integrations route typography — scoped via `app/integrations/layout.tsx`. */
export const integrationsDisplayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-integrations-display",
  display: "swap",
});

export const integrationsSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-integrations-sans",
  display: "swap",
});
