import type { Metadata } from "next";
import { ROUTES } from "./navigation";

export type MarketingPageConfig = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
};

const base = "Vertex CMS";

export const MARKETING_PAGES: Record<string, MarketingPageConfig> = {
  solutions: {
    title: `Construction Software Solutions | ${base}`,
    description: "Construction software solutions for general contractors, subcontractors, and project teams.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }],
  },
  pricing: {
    title: `Pricing | ${base}`,
    description:
      "Compare Vertex CMS plans for construction teams. Start a free trial or book a demo to find the right package.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Pricing" }],
  },
  productTour: {
    title: `${base} Product Tour`,
    description: "Explore the Vertex CMS platform with screenshots and walkthroughs.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Product Tour" }],
  },
  customers: {
    title: `${base} Customers`,
    description: "Customer stories, testimonials, and construction team success.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Customers" }],
  },
  resources: {
    title: `${base} Resources`,
    description: "Blog, guides, templates, webinars, and help documentation.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources" }],
  },
  resourcesBlog: {
    title: `Blog | ${base} Resources`,
    description: "Construction management insights and product updates.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Blog" }],
  },
  resourcesGuides: {
    title: `Guides | ${base} Resources`,
    description: "Guides for construction operations and Vertex CMS.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Guides" }],
  },
  resourcesTemplates: {
    title: `Templates | ${base} Resources`,
    description: "Construction templates and downloadable resources.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Templates" }],
  },
  resourcesWebinars: {
    title: `Webinars | ${base} Resources`,
    description: "Vertex CMS webinars and live sessions.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Webinars" }],
  },
  resourcesHelp: {
    title: `Help Center | ${base}`,
    description: "Documentation and help for Vertex CMS.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Help Center" }],
  },
  integrations: {
    title: `${base} Integrations`,
    description: "Integrations and partner connections for Vertex CMS.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Integrations" }],
  },
  comparisons: {
    title: `Construction Software Comparisons | ${base}`,
    description: "Compare Vertex CMS with other construction management platforms.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons" }],
  },
  comparisonProcore: {
    title: `Vertex CMS vs Procore | ${base}`,
    description: "Compare Vertex CMS and Procore for construction management.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons", href: ROUTES.comparisons }, { label: "Procore" }],
  },
  comparisonBuildertrend: {
    title: `Vertex CMS vs Buildertrend | ${base}`,
    description: "Compare Vertex CMS and Buildertrend.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons", href: ROUTES.comparisons }, { label: "Buildertrend" }],
  },
  comparisonCmic: {
    title: `Vertex CMS vs CMiC | ${base}`,
    description: "Compare Vertex CMS and CMiC.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons", href: ROUTES.comparisons }, { label: "CMiC" }],
  },
  security: {
    title: `Security & Trust | ${base}`,
    description: "Security, compliance, and data protection at Vertex CMS.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Security & Trust" }],
  },
  company: {
    title: `Company | ${base}`,
    description: "About Vertex CMS and our team.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Company" }],
  },
  careers: {
    title: `Careers | ${base}`,
    description: "Careers at Vertex Software.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Company", href: ROUTES.company }, { label: "Careers" }],
  },
  legalDpa: {
    title: `Data Processing Agreement | ${base}`,
    description: "Vertex CMS data processing agreement.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "DPA" }],
  },
  legalCookies: {
    title: `Cookie Policy | ${base}`,
    description: "Vertex CMS cookie policy.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Cookie Policy" }],
  },
  signup: {
    title: `Sign Up | ${base}`,
    description: "Start your Vertex CMS free trial.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Sign Up" }],
  },
  demo: {
    title: `Book a Demo | ${base}`,
    description: "Schedule a Vertex CMS product demonstration.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Book a Demo" }],
  },
  requestQuote: {
    title: `Request a Quote | ${base}`,
    description: "Request pricing for Vertex CMS.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Request Quote" }],
  },
};

export function marketingMetadata(key: keyof typeof MARKETING_PAGES): Metadata {
  const page = MARKETING_PAGES[key];
  return { title: page.title, description: page.description };
}
