import { CTAS, ROUTES } from "@/lib/marketing/navigation";

export const integrationsLandingMeta = {
  title: "Integrations | Vertex CMS",
  description:
    "Connect Vertex CMS to the systems your business runs on. Explore documented platform capabilities and integrations for accounting, e-signature, and more.",
  canonical: ROUTES.integrations,
};

export const INTEGRATIONS_PAGE = {
  hero: {
    eyebrow: "Integrations",
    headline: "Connect Vertex CMS to the systems your business already runs on.",
    supporting:
      "Integrations extend Vertex CMS by allowing connected systems to exchange information with the platform so teams can work from shared project context instead of disconnected tools.",
    primaryCta: { label: "Explore Integrations", href: ROUTES.integrations },
    secondaryCta: { label: "Explore Vertex Platform", href: ROUTES.features },
  },
  ecosystem: {
    eyebrow: "Connected ecosystem",
    headline: "One operating layer for project, financial, field, and growth workflows.",
    body: "External systems connect through an integration layer into Vertex CMS, where project, financial, field, and growth workflows share a common record. Each connection defines how information moves according to its documented scope.",
  },
  discovery: {
    eyebrow: "Discover",
    headline: "Find integrations by category",
    supporting:
      "Browse available integrations by category or search by name when integrations are listed in the catalog.",
    searchPlaceholder: "Search integrations",
    emptyCategory: "No integrations are currently listed in this category.",
    emptySearch: "No integrations match your search.",
    emptyLimited:
      "Additional partner connections are added to the directory as they are approved. Explore documented capabilities below or speak with our team about your stack.",
    clearSearch: "Clear search",
  },
  featured: {
    eyebrow: "Capabilities",
    headline: "Key integration capabilities",
    supporting:
      "Platform capabilities documented for Vertex CMS—distinct from named third-party integrations in the directory.",
  },
  library: {
    eyebrow: "Directory",
    headline: "Integration library",
    supporting: "Documented platform capabilities and third-party integrations with clear availability.",
  },
  howItWorks: {
    eyebrow: "How it works",
    headline: "Connect. Exchange. Extend.",
    steps: [
      {
        step: "01",
        title: "Connect",
        body: "Choose the system or integration you want to connect when it is available for your organization.",
      },
      {
        step: "02",
        title: "Exchange",
        body: "Relevant information can move between the connected system and Vertex CMS according to the integration.",
      },
      {
        step: "03",
        title: "Extend",
        body: "Keep your broader business ecosystem connected while extending Vertex CMS.",
      },
    ] as const,
  },
  comingSoon: {
    eyebrow: "Roadmap",
    headline: "Coming soon",
    supporting:
      "Documented integrations and capabilities planned for publication—distinct from items available today.",
    primaryCta: { label: "Book a Demo", href: CTAS.demo.href },
    secondaryCta: { label: "Explore Available Integrations", href: ROUTES.integrations },
    requestInfo: { label: "Request Quote", href: CTAS.quote.href },
  },
  finalCta: {
    headline: "Build a more connected operation.",
    supporting:
      "Vertex CMS can become part of the broader technology ecosystem that supports project, financial, field, and growth workflows.",
    primary: { label: "Explore Platform", href: ROUTES.features },
    secondary: { label: "Book a Demo", href: CTAS.demo.href },
    tertiary: { label: "Start Free Trial", href: CTAS.trial.href },
  },
} as const;

/** Hero network nodes — documented category concepts, not partner brands. */
export const HERO_NETWORK_NODES = [
  { id: "n-top", label: "Accounting", angle: 0 },
  { id: "n-tr", label: "E-Sign", angle: 60 },
  { id: "n-br", label: "Productivity", angle: 120 },
  { id: "n-b", label: "Platform API", angle: 180 },
  { id: "n-bl", label: "Payments", angle: 240 },
  { id: "n-tl", label: "Other", angle: 300 },
] as const;

export const WORKFLOW_OUTPUTS = [
  "Projects",
  "Financials",
  "Field",
  "Growth",
] as const;

export function integrationDetailPath(slug: string): string {
  return `${ROUTES.integrations}/${slug}`;
}
