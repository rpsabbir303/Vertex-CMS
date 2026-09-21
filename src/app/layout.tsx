import type { Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Providers } from "@/components/website/Providers";
import { marketingContent } from "@/lib/marketing/content";
import "./globals.css";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "block",
  preload: true,
  adjustFontFallback: true,
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "block",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: marketingContent.en.meta.title,
  description: marketingContent.en.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
