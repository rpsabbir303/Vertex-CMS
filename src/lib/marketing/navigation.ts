/** Canonical SaaS marketing routes — single source of truth for nav, mega menu, and footer. */

export const ROUTES = {
  home: "/",
  features: "/features",
  solutions: "/solutions",
  solutionsGeneralContractors: "/solutions/general-contractors",
  solutionsSpecialtyContractors: "/solutions/specialty-contractors",
  solutionsOwners: "/solutions/owners",
  solutionsCommercial: "/solutions/commercial",
  solutionsResidential: "/solutions/residential",
  solutionsCivil: "/solutions/civil",
  pricing: "/pricing",
  productTour: "/product-tour",
  customers: "/customers",
  /** Base path for case study detail pages only — listing lives at /customers#case-studies */
  customersCaseStudies: "/customers/case-studies",
  resources: "/resources",
  resourcesBlog: "/resources/blog",
  resourcesGuides: "/resources/guides",
  resourcesTemplates: "/resources/templates",
  resourcesWebinars: "/resources/webinars",
  resourcesHelp: "/resources/help",
  integrations: "/integrations",
  comparisons: "/comparisons",
  comparisonProcore: "/comparisons/procore",
  comparisonBuildertrend: "/comparisons/buildertrend",
  comparisonCmic: "/comparisons/cmic",
  security: "/security",
  securityDataProtection: "/security/data-protection",
  securityAccessSecurity: "/security/access-security",
  securityCompliance: "/security/compliance",
  securityAiGovernance: "/security/ai-governance",
  securityReliability: "/security/reliability",
  securityContact: "/security/contact",
  company: "/company",
  about: "/company/about",
  team: "/company/team",
  careers: "/company/careers",
  contact: "/contact",
  contactSuccess: "/contact/success",
  legalTerms: "/terms",
  legalPrivacy: "/privacy",
  legalDpa: "/dpa",
  legalCookies: "/cookie-policy",
  signup: "/signup",
  login: "/login",
  signIn: "/sign-in",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  mfa: "/mfa",
  invite: "/invite",
  verifyEmail: "/verify-email",
  onboarding: "/onboarding",
  demo: "/book-demo",
  requestQuote: "/request-quote",
} as const;

export const CTAS = {
  demo: { label: "Book a Demo", href: ROUTES.demo },
  trial: { label: "Start Free Trial", href: ROUTES.signup },
  quote: { label: "Request Quote", href: `${ROUTES.requestQuote}?plan=enterprise` },
  sales: { label: "Contact Sales", href: `${ROUTES.requestQuote}?plan=enterprise` },
  login: { label: "Login", href: ROUTES.login },
  exploreFeatures: { label: "Explore All Features", href: ROUTES.features },
  explorePlatform: { label: "Explore the Platform", href: "#platform" },
} as const;

export type MegaMenuCategory = {
  id: string;
  title: string;
  href: string;
  links: { label: string; href: string }[];
};

/** Product / Features — six capability groups (marketing discovery, not full module register). */
export const FEATURES_MEGA_MENU: MegaMenuCategory[] = [
  {
    id: "project-management",
    title: "Project Management",
    href: `${ROUTES.features}/project-management`,
    links: [
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Scheduling", href: `${ROUTES.features}/scheduling` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
      { label: "RFIs", href: `${ROUTES.features}/rfis` },
      { label: "Submittals", href: `${ROUTES.features}/submittals` },
      { label: "Change Orders", href: `${ROUTES.features}/change-orders` },
    ],
  },
  {
    id: "financial-management",
    title: "Financial Management",
    href: `${ROUTES.features}#financial-management`,
    links: [
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
      { label: "Native Accounting", href: `${ROUTES.features}/native-accounting` },
      { label: "Billing", href: `${ROUTES.features}/billing` },
      { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
      { label: "WIP", href: `${ROUTES.features}/wip` },
      { label: "Cash Flow", href: `${ROUTES.features}/cash-flow` },
    ],
  },
  {
    id: "field-operations",
    title: "Field Operations",
    href: `${ROUTES.features}#field-operations`,
    links: [
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Drawings", href: `${ROUTES.features}/drawings` },
      { label: "Punch", href: `${ROUTES.features}/punch` },
      { label: "T&M", href: `${ROUTES.features}/t-and-m` },
      { label: "Safety", href: `${ROUTES.features}/safety` },
      { label: "Mobile", href: `${ROUTES.features}/mobile` },
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Workforce",
    href: `${ROUTES.features}#compliance`,
    links: [
      { label: "Subcontractors", href: `${ROUTES.features}/subcontractors` },
      { label: "Compliance", href: `${ROUTES.features}/compliance` },
      { label: "Workforce", href: `${ROUTES.features}/workforce` },
      { label: "Time", href: `${ROUTES.features}/time` },
      { label: "Payroll Readiness", href: `${ROUTES.features}/payroll-readiness` },
    ],
  },
  {
    id: "ai",
    title: "AI & Intelligence",
    href: `${ROUTES.features}#ai`,
    links: [
      { label: "AI Assistant", href: `${ROUTES.features}/ai-assistant` },
      { label: "Project Intelligence", href: `${ROUTES.features}/project-intelligence` },
      { label: "Predictive Insights", href: `${ROUTES.features}/predictive-insights` },
      { label: "Document Intelligence", href: `${ROUTES.features}/document-intelligence` },
      { label: "Automation", href: `${ROUTES.features}/automation` },
    ],
  },
  {
    id: "growth",
    title: "Business Growth",
    href: `${ROUTES.features}#growth`,
    links: [
      { label: "CRM", href: `${ROUTES.features}/crm` },
      { label: "Leads", href: `${ROUTES.features}/leads` },
      { label: "Website Builder", href: `${ROUTES.features}/website-builder` },
      { label: "Customer Portals", href: `${ROUTES.features}/customer-portals` },
    ],
  },
];

export const SOLUTIONS_MEGA_MENU: MegaMenuCategory[] = [
  {
    id: "by-business",
    title: "By Business",
    href: `${ROUTES.solutions}#finder`,
    links: [
      { label: "General Contractors", href: ROUTES.solutionsGeneralContractors },
      { label: "Specialty Contractors", href: ROUTES.solutionsSpecialtyContractors },
      { label: "Owners & Clients", href: ROUTES.solutionsOwners },
    ],
  },
  {
    id: "by-project-type",
    title: "By Project Type",
    href: `${ROUTES.solutions}#project-types`,
    links: [
      { label: "Commercial", href: ROUTES.solutionsCommercial },
      { label: "Residential", href: ROUTES.solutionsResidential },
      { label: "Civil / Infrastructure", href: ROUTES.solutionsCivil },
    ],
  },
  {
    id: "by-role",
    title: "By Role",
    href: `${ROUTES.solutions}#roles`,
    links: [
      { label: "Project Manager", href: `${ROUTES.solutions}#role-project-manager` },
      { label: "Estimator", href: `${ROUTES.solutions}#role-estimator` },
      { label: "Superintendent", href: `${ROUTES.solutions}#role-superintendent` },
      { label: "Controller / Accountant", href: `${ROUTES.solutions}#role-controller` },
      { label: "Safety", href: `${ROUTES.solutions}#role-safety` },
      { label: "Executive", href: `${ROUTES.solutions}#role-executive` },
    ],
  },
];

export const RESOURCES_MEGA_MENU: MegaMenuCategory[] = [
  {
    id: "content",
    title: "Content",
    href: ROUTES.resources,
    links: [
      { label: "Blog", href: ROUTES.resourcesBlog },
      { label: "Guides", href: ROUTES.resourcesGuides },
      { label: "Templates", href: ROUTES.resourcesTemplates },
      { label: "Webinars", href: ROUTES.resourcesWebinars },
      { label: "Help Center / Docs", href: ROUTES.resourcesHelp },
    ],
  },
  {
    id: "customers",
    title: "Customers",
    href: ROUTES.customers,
    links: [
      { label: "Customers", href: ROUTES.customers },
      { label: "Customer Ecosystem", href: `${ROUTES.customers}#customer-ecosystem` },
      { label: "Case Studies", href: `${ROUTES.customers}#case-studies` },
      { label: "Testimonials", href: `${ROUTES.customers}#testimonials` },
      { label: "Measurable Results", href: `${ROUTES.customers}#results` },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    href: ROUTES.productTour,
    links: [
      { label: "Product Tour", href: ROUTES.productTour },
      { label: "Integrations", href: ROUTES.integrations },
      { label: "Comparisons", href: ROUTES.comparisons },
      { label: "Security & Trust", href: ROUTES.security },
    ],
  },
];

export const COMPANY_MEGA_MENU: MegaMenuCategory[] = [
  {
    id: "company",
    title: "Company",
    href: ROUTES.company,
    links: [
      { label: "About", href: ROUTES.about },
      { label: "Team", href: ROUTES.team },
      { label: "Careers", href: ROUTES.careers },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
];

export type NavMegaType = "features" | "solutions" | "resources" | "company" | false;

export const PRIMARY_NAV: {
  label: string;
  href: string;
  mega: NavMegaType;
}[] = [
  { label: "Product / Features", href: ROUTES.features, mega: "features" },
  { label: "Solutions", href: ROUTES.solutions, mega: "solutions" },
  { label: "Resources", href: ROUTES.resources, mega: "resources" },
  { label: "Company", href: ROUTES.company, mega: "company" },
  { label: "Pricing", href: ROUTES.pricing, mega: false },
];

export const FOOTER_COLUMNS = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: ROUTES.features },
      { label: "Product Tour", href: ROUTES.productTour },
      { label: "Integrations", href: ROUTES.integrations },
      { label: "Pricing", href: ROUTES.pricing },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "General Contractors", href: ROUTES.solutionsGeneralContractors },
      { label: "Specialty Contractors", href: ROUTES.solutionsSpecialtyContractors },
      { label: "Owners & Clients", href: ROUTES.solutionsOwners },
      { label: "Commercial", href: ROUTES.solutionsCommercial },
      { label: "Residential", href: ROUTES.solutionsResidential },
      { label: "Civil / Infrastructure", href: ROUTES.solutionsCivil },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Customers", href: ROUTES.customers },
      { label: "Blog", href: ROUTES.resourcesBlog },
      { label: "Guides", href: ROUTES.resourcesGuides },
      { label: "Templates", href: ROUTES.resourcesTemplates },
      { label: "Webinars", href: ROUTES.resourcesWebinars },
      { label: "Help Center", href: ROUTES.resourcesHelp },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: ROUTES.about },
      { label: "Team", href: ROUTES.team },
      { label: "Careers", href: ROUTES.careers },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
  trust: {
    title: "Trust / Legal",
    links: [
      { label: "Security & Trust", href: ROUTES.security },
      { label: "Privacy", href: ROUTES.legalPrivacy },
      { label: "Terms", href: ROUTES.legalTerms },
      { label: "DPA", href: ROUTES.legalDpa },
      { label: "Cookie Policy", href: ROUTES.legalCookies },
    ],
  },
  contact: {
    title: "Contact / Sales",
    links: [
      { label: "Contact Sales", href: ROUTES.contact },
      { label: "Request Quote", href: `${ROUTES.requestQuote}?plan=enterprise` },
      { label: "Book a Demo", href: ROUTES.demo },
      { label: "Login", href: ROUTES.login },
      { label: "Start Free Trial", href: ROUTES.signup },
    ],
  },
} as const;

export function getMarketingActiveNav(pathname: string): string {
  if (pathname === ROUTES.home) return ROUTES.home;
  if (pathname.startsWith(ROUTES.features)) return ROUTES.features;
  if (pathname.startsWith(ROUTES.solutions)) return ROUTES.solutions;
  if (pathname.startsWith(ROUTES.pricing)) return ROUTES.pricing;
  if (
    pathname.startsWith(ROUTES.resources) ||
    pathname.startsWith(ROUTES.customers) ||
    pathname.startsWith(ROUTES.integrations) ||
    pathname.startsWith(ROUTES.comparisons) ||
    pathname.startsWith(ROUTES.security) ||
    pathname.startsWith(ROUTES.productTour)
  ) {
    return ROUTES.resources;
  }
  if (
    pathname.startsWith(ROUTES.company) ||
    pathname.startsWith(ROUTES.about) ||
    pathname.startsWith(ROUTES.team) ||
    pathname.startsWith(ROUTES.careers) ||
    pathname.startsWith(ROUTES.contact)
  ) {
    return ROUTES.company;
  }
  return "";
}

export type CompanyPageId = "about" | "team" | "careers" | "contact";

export const COMPANY_PAGE_LINKS: { id: CompanyPageId; label: string; href: string }[] = [
  { id: "about", label: "About", href: ROUTES.about },
  { id: "team", label: "Team", href: ROUTES.team },
  { id: "careers", label: "Careers", href: ROUTES.careers },
  { id: "contact", label: "Contact", href: ROUTES.contact },
];

/** @deprecated Use FEATURES_MEGA_MENU */
export const MEGA_MENU = FEATURES_MEGA_MENU;
