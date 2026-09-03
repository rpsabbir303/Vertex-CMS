export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const REQUEST_BID_HREF = "/contact#request-a-bid";

/** Anchor IDs used across pages — keep in sync with page section elements. */
export const PAGE_ANCHORS = {
  featured: "featured",
  categories: "categories",
  safety: "safety",
  serviceArea: "service-area",
  requestBid: "request-a-bid",
} as const;

/** Mega menu IA — for reference and future CMS-driven nav; Header visual is unchanged. */
export const MEGA_MENU = {
  about: {
    main: { label: "About", href: "/about" },
    links: [
      { label: "Our Company", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Safety & Quality", href: `/about#${PAGE_ANCHORS.safety}` },
      { label: "Certifications", href: "/certifications" },
    ],
  },
  services: {
    main: { label: "Services", href: "/services" },
    /** Service category labels are demo content — all link to /services for now. */
    categories: [
      "Commercial Construction",
      "Preconstruction",
      "Civil & Infrastructure",
      "Renovation & Remodeling",
      "Tenant Improvements",
      "Construction Management",
    ],
  },
  projects: {
    main: { label: "Projects", href: "/projects" },
    links: [
      { label: "Featured Projects", href: `/projects#${PAGE_ANCHORS.featured}` },
      { label: "All Projects", href: "/projects" },
      { label: "Project Categories", href: `/projects#${PAGE_ANCHORS.categories}` },
    ],
  },
  company: {
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Certifications", href: "/certifications" },
      { label: "Safety & Quality", href: `/about#${PAGE_ANCHORS.safety}` },
      { label: "Service Areas", href: `/about#${PAGE_ANCHORS.serviceArea}` },
    ],
  },
} as const;

export const FOOTER_LINKS = {
  company: [
    { labelKey: "about" as const, href: "/about" },
    { labelKey: "services" as const, href: "/services" },
    { labelKey: "projects" as const, href: "/projects" },
    { labelKey: "team" as const, href: "/team" },
    { labelKey: "contact" as const, href: "/contact" },
  ],
  projects: [
    { labelKey: "featuredProjects" as const, href: `/projects#${PAGE_ANCHORS.featured}` },
    { labelKey: "allProjects" as const, href: "/projects" },
  ],
  trust: [
    { labelKey: "testimonials" as const, href: "/testimonials" },
    { labelKey: "certifications" as const, href: "/certifications" },
    { labelKey: "safetyQuality" as const, href: `/about#${PAGE_ANCHORS.safety}` },
  ],
  contact: [
    { labelKey: "contactUs" as const, href: "/contact" },
    { labelKey: "requestBid" as const, href: REQUEST_BID_HREF },
  ],
} as const;

/** Returns which primary nav item is active for a given pathname. */
export function getActiveNavHref(pathname: string): string {
  if (pathname === "/") return "/";
  if (pathname.startsWith("/projects")) return "/projects";
  if (pathname.startsWith("/about")) return "/about";
  if (pathname.startsWith("/services")) return "/services";
  if (pathname.startsWith("/team")) return "/team";
  if (pathname.startsWith("/contact")) return "/contact";
  return "";
}
