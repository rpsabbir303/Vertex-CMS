import { DM_Sans, DM_Serif_Display } from "next/font/google";

/** Features landing typography — scoped via `FeaturesTypographyScope`. */
export const featuresDisplayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-features-display",
  display: "swap",
});

export const featuresSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-features-sans",
  display: "swap",
});
