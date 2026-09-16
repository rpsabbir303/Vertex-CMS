import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-security-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-security-sans",
  display: "swap",
});

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`security-font-scope ${dmSerifDisplay.variable} ${dmSans.variable} font-sans antialiased`}>
      {children}
    </div>
  );
}
