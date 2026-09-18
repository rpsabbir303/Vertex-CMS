import { DM_Sans, DM_Serif_Display } from "next/font/google";

export const customersDisplayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-customers-display",
  display: "swap",
});

export const customersSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-customers-sans",
  display: "swap",
});
