import type { MetadataRoute } from "next";
import { LEGAL_NAV } from "@/lib/marketing/legal/content";
import { ROUTES } from "@/lib/marketing/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.vertexcms.com";

  const staticPaths = [
    ROUTES.home,
    ROUTES.pricing,
    ROUTES.features,
    ROUTES.solutions,
    ROUTES.company,
    ROUTES.team,
    ROUTES.about,
    ROUTES.contact,
    ROUTES.security,
    ROUTES.careers,
    ROUTES.demo,
    ROUTES.requestQuote,
    ...LEGAL_NAV.map((d) => d.href),
  ];

  return staticPaths.map((path) => {
    const isLegal = LEGAL_NAV.some((d) => d.href === path);
    return {
      url: `${base}${path === "/" ? "" : path}`,
      changeFrequency: isLegal ? ("monthly" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : isLegal ? 0.5 : 0.7,
    };
  });
}
