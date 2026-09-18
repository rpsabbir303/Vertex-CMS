import "@/app/billing/billing-setup.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-billing-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-billing-sans",
  display: "swap",
});

export default function BillingSetupDesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`billing-font-scope ${dmSerifDisplay.variable} ${dmSans.variable} font-sans antialiased`}>
      {children}
    </div>
  );
}
