import { featuresDisplayFont, featuresSansFont } from "@/lib/marketing/features/fonts";

export function FeaturesTypographyScope({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`feat-font-scope ${featuresDisplayFont.variable} ${featuresSansFont.variable} min-h-screen font-sans antialiased`}
    >
      {children}
    </div>
  );
}
