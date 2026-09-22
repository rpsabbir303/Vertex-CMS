import type { Metadata } from "next";
import { ROUTES } from "./navigation";

export type MarketingPageConfig = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
};

const base = "VertexBuild";

export const MARKETING_PAGES: Record<string, MarketingPageConfig> = {
  solutions: {
    title: `Construction Software Solutions | ${base}`,
    description:
      "Find the VertexBuild solution that fits your construction business, project type, or role — connected project, financial, field, workforce, and intelligence workflows.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Solutions" }],
  },
  pricing: {
    title: `Pricing | ${base}`,
    description:
      "Compare VertexBuild plans for construction teams. Start a free trial or book a demo to find the right package.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Pricing" }],
  },
  features: {
    title: `Features | ${base}`,
    description:
      "Explore VertexBuild by module, AI capability, and role — the connected construction management platform for projects, financials, field, compliance, and intelligence.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Features" }],
  },
  productTour: {
    title: `Product Tour | ${base}`,
    description:
      "Explore how VertexBuild connects project, field, financial, and intelligence workflows — interactive platform, financial, field, and AI tour experiences.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Product Tour" }],
  },
  customers: {
    title: `${base} Customers`,
    description:
      "Customer success stories, testimonials, logo wall, and verified outcomes from construction teams using VertexBuild.",
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
    description:
      "Structured workflow guidance for project, financial, field, and compliance operations in VertexBuild.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Guides" }],
  },
  resourcesTemplates: {
    title: `Templates | ${base} Resources`,
    description:
      "Ready-to-use worksheets and checklists for project, field, and operational workflows in VertexBuild.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Templates" }],
  },
  resourcesWebinars: {
    title: `Webinars | ${base} Resources`,
    description:
      "Live and on-demand VertexBuild sessions on project operations, field workflows, financial control, and connected construction technology.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Webinars" }],
  },
  resourcesHelp: {
    title: `Help Center | ${base}`,
    description: "Documentation and help for VertexBuild.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Resources", href: ROUTES.resources }, { label: "Help Center" }],
  },
  integrations: {
    title: `${base} Integrations`,
    description: "Integrations and partner connections for VertexBuild.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Integrations" }],
  },
  comparisons: {
    title: `Construction Software Comparisons | ${base}`,
    description: "Compare VertexBuild with other construction management platforms.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons" }],
  },
  comparisonProcore: {
    title: `VertexBuild vs Procore | ${base}`,
    description: "Compare VertexBuild and Procore for construction management.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons", href: ROUTES.comparisons }, { label: "Procore" }],
  },
  comparisonBuildertrend: {
    title: `VertexBuild vs Buildertrend | ${base}`,
    description: "Compare VertexBuild and Buildertrend.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons", href: ROUTES.comparisons }, { label: "Buildertrend" }],
  },
  comparisonCmic: {
    title: `VertexBuild vs CMiC | ${base}`,
    description: "Compare VertexBuild and CMiC.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Comparisons", href: ROUTES.comparisons }, { label: "CMiC" }],
  },
  security: {
    title: `Security & Trust | ${base}`,
    description:
      "Security, data protection, controlled access, compliance readiness, and operational reliability for VertexBuild.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Security & Trust" }],
  },
  company: {
    title: `Company | ${base}`,
    description: "About VertexBuild and our team.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Company" }],
  },
  about: {
    title: `About | ${base}`,
    description:
      "VertexBuild is the connected operating platform for construction — project management, financials, field operations, compliance, and intelligence in one system.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Company", href: ROUTES.company },
      { label: "About" },
    ],
  },
  team: {
    title: `Team | ${base}`,
    description: "Leadership, key roles, and careers at VertexBuild.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Company", href: ROUTES.company },
      { label: "Team" },
    ],
  },
  careers: {
    title: `Careers | ${base}`,
    description:
      "Join VertexBuild — build construction management software that connects projects, financials, field operations, and intelligence.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Company", href: ROUTES.company },
      { label: "Careers" },
    ],
  },
  legalDpa: {
    title: `Data Processing Addendum | ${base}`,
    description: "Data Processing Addendum for VertexBuild customer data processing arrangements.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Legal", href: ROUTES.legalTerms },
      { label: "DPA" },
    ],
  },
  legalCookies: {
    title: `Cookie Policy | ${base}`,
    description: "Cookie Policy for the VertexBuild website, including cookie consent requirements.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Legal", href: ROUTES.legalTerms },
      { label: "Cookie Policy" },
    ],
  },
  legalTerms: {
    title: `Terms of Service | ${base}`,
    description: "VertexBuild terms of service for use of the platform.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Legal", href: ROUTES.legalTerms },
      { label: "Terms of Service" },
    ],
  },
  legalPrivacy: {
    title: `Privacy Policy | ${base}`,
    description: "VertexBuild privacy policy describing how personal information is handled.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Legal", href: ROUTES.legalTerms },
      { label: "Privacy Policy" },
    ],
  },
  signup: {
    title: `Sign Up | ${base}`,
    description: "Start your VertexBuild free trial.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Sign Up" }],
  },
  demo: {
    title: `Book a Demo | ${base}`,
    description: "See how VertexBuild fits your business. Request a product demonstration for your team.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Book a Demo" }],
  },
  requestQuote: {
    title: `Request a Quote | ${base}`,
    description: "Request an enterprise quote for VertexBuild based on your organization requirements.",
    breadcrumbs: [{ label: "Home", href: ROUTES.home }, { label: "Request Quote" }],
  },
  contact: {
    title: `Contact | ${base}`,
    description:
      "Contact VertexBuild with general company and product inquiries. Send a message and our team will route your request appropriately.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Company", href: ROUTES.company },
      { label: "Contact" },
    ],
  },
  contactSuccess: {
    title: `Inquiry Received | ${base}`,
    description:
      "Your VertexBuild inquiry was submitted successfully and will be routed appropriately.",
    breadcrumbs: [
      { label: "Home", href: ROUTES.home },
      { label: "Company", href: ROUTES.company },
      { label: "Contact", href: ROUTES.contact },
      { label: "Inquiry Received" },
    ],
  },
};

export function marketingMetadata(key: keyof typeof MARKETING_PAGES): Metadata {
  const page = MARKETING_PAGES[key];
  return { title: page.title, description: page.description };
}
