/**
 * Approved integration catalog — BRD-documented capabilities and named integrations only.
 * Do not add partner names, logos, or claims without approval.
 */
import type { IntegrationRecord } from "./types";

export const INTEGRATIONS_CATALOG: readonly IntegrationRecord[] = [
  {
    id: "cap-public-rest-api",
    slug: "public-rest-api",
    name: "Public REST API",
    kind: "capability",
    categoryId: "platform",
    shortDescription: "Public API access for enterprise integrations.",
    availability: "AVAILABLE",
    monogram: "API",
    featured: true,
    detailSummary:
      "Documented public REST API access supports enterprise integrations with Vertex CMS. Specific endpoints and scopes are defined in product documentation.",
    detail: {
      overview:
        "Documented public REST API access supports enterprise integrations with Vertex CMS. Specific endpoints and scopes are defined in product documentation.",
      overviewPoints: [
        "Documented public REST API access supports enterprise integrations with Vertex CMS.",
        "Specific endpoints and scopes are defined in product documentation.",
      ],
      howItWorks: {
        directionLabel: "Documented API access between connected systems and Vertex CMS",
        layers: [
          { label: "Connected systems", detail: "Enterprise integrations" },
          { label: "Public REST API", detail: "Documented endpoints and scopes" },
          { label: "Vertex CMS", detail: "Platform operating record" },
        ],
        steps: [
          {
            title: "Connect",
            body: "Enterprise integrations use documented public REST API access with Vertex CMS.",
          },
          {
            title: "Exchange",
            body: "Information moves according to endpoints and scopes defined in product documentation.",
          },
          {
            title: "Extend",
            body: "Connected systems participate in the documented enterprise integration scope for Vertex CMS.",
          },
        ],
      },
      dataExchangeSummary:
        "Enterprise integration access is described through documented API endpoints and scopes in product documentation.",
      dataExchangedGroups: [
        {
          label: "Documented API access",
          items: [
            "Enterprise integration access through endpoints and scopes defined in product documentation.",
          ],
        },
      ],
      benefits: [
        {
          title: "Documented enterprise access",
          description:
            "Public REST API access is documented to support enterprise integrations with Vertex CMS.",
        },
        {
          title: "Defined endpoints and scopes",
          description: "Specific endpoints and scopes are defined in product documentation rather than ad hoc access.",
        },
      ],
      capabilities: ["Public REST API access", "Enterprise integrations with Vertex CMS"],
      technicalNotes: ["Specific endpoints and scopes are defined in product documentation."],
    },
  },
  {
    id: "cap-outbound-webhooks",
    slug: "outbound-webhooks",
    name: "Outbound Webhooks",
    kind: "capability",
    categoryId: "platform",
    shortDescription: "Outbound webhooks for event-driven connections to external systems.",
    availability: "AVAILABLE",
    monogram: "WH",
    featured: true,
    detailSummary:
      "Outbound webhooks allow external systems to receive events from Vertex CMS according to supported integration configuration.",
    detail: {
      overview:
        "Outbound webhooks allow external systems to receive events from Vertex CMS according to supported integration configuration.",
      overviewPoints: [
        "Outbound webhooks support event-driven connections to external systems.",
        "External systems receive events from Vertex CMS according to supported integration configuration.",
      ],
      howItWorks: {
        directionLabel: "Vertex CMS → Connected system",
        layers: [
          { label: "Vertex CMS", detail: "Event source" },
          { label: "Outbound Webhooks", detail: "Documented integration capability" },
          { label: "External systems", detail: "Receiving systems" },
        ],
        steps: [
          {
            title: "Connect",
            body: "Supported integration configuration defines how outbound webhooks are used with Vertex CMS.",
          },
          {
            title: "Exchange",
            body: "External systems receive events from Vertex CMS according to that supported configuration.",
          },
          {
            title: "Extend",
            body: "External systems remain connected through the documented outbound webhook capability.",
          },
        ],
      },
      dataExchangeSummary:
        "External systems may receive events from Vertex CMS according to supported integration configuration.",
      dataExchangedGroups: [
        {
          label: "Events",
          direction: "vertex-out",
          items: ["Events from Vertex CMS according to supported integration configuration."],
        },
      ],
      benefits: [
        {
          title: "Event-driven connections",
          description: "Outbound webhooks support event-driven connections to external systems.",
        },
        {
          title: "Configuration-defined delivery",
          description:
            "Event delivery follows supported integration configuration documented for Vertex CMS.",
        },
      ],
      capabilities: ["Outbound webhooks", "Event-driven connections to external systems"],
      workflows: ["Event-driven connections to external systems"],
    },
  },
  {
    id: "cap-integration-marketplace",
    slug: "integration-marketplace",
    name: "Integration Marketplace",
    kind: "capability",
    categoryId: "platform",
    shortDescription: "Integration marketplace for discovering and managing approved connections.",
    availability: "COMING_SOON",
    monogram: "MP",
    featured: true,
    detailSummary:
      "The integration marketplace is documented as part of the Vertex CMS integration program for discovering approved connections.",
    detail: {
      overview:
        "The integration marketplace is documented as part of the Vertex CMS integration program for discovering approved connections.",
      overviewPoints: [
        "Documented program surface for discovering approved connections within Vertex CMS.",
        "Part of the broader Vertex CMS integration program—not a separate product area.",
      ],
    },
  },
  {
    id: "cap-accounting-integrations",
    slug: "accounting-integrations",
    name: "Accounting Integrations",
    kind: "capability",
    categoryId: "accounting",
    shortDescription: "Accounting integration support documented for connecting financial systems with Vertex CMS.",
    availability: "COMING_SOON",
    monogram: "AC",
    detail: {
      overview: "Accounting integration support documented for connecting financial systems with Vertex CMS.",
      overviewPoints: [
        "Documents accounting integration support for connecting financial systems with Vertex CMS.",
        "Represents a capability area—not a single named accounting product.",
      ],
    },
  },
  {
    id: "int-quickbooks",
    slug: "quickbooks",
    name: "QuickBooks",
    kind: "integration",
    categoryId: "accounting",
    shortDescription: "Optional accounting sync with QuickBooks, as documented for Vertex CMS.",
    availability: "COMING_SOON",
    monogram: "QB",
    detail: {
      overview: "Optional accounting sync with QuickBooks, as documented for Vertex CMS.",
      overviewPoints: ["Optional accounting sync with QuickBooks, as documented for Vertex CMS."],
    },
  },
  {
    id: "int-sage",
    slug: "sage",
    name: "Sage",
    kind: "integration",
    categoryId: "accounting",
    shortDescription: "Optional accounting sync with Sage, as documented for Vertex CMS.",
    availability: "COMING_SOON",
    monogram: "SG",
    detail: {
      overview: "Optional accounting sync with Sage, as documented for Vertex CMS.",
      overviewPoints: ["Optional accounting sync with Sage, as documented for Vertex CMS."],
    },
  },
  {
    id: "int-docusign",
    slug: "docusign",
    name: "DocuSign",
    kind: "integration",
    categoryId: "e-signature",
    shortDescription: "E-signature integration documented for DocuSign with Vertex CMS.",
    availability: "COMING_SOON",
    monogram: "DS",
    detail: {
      overview: "E-signature integration documented for DocuSign with Vertex CMS.",
      overviewPoints: ["E-signature integration documented for DocuSign with Vertex CMS."],
    },
  },
  {
    id: "cap-payment-rails",
    slug: "payment-rails",
    name: "Payment Rails",
    kind: "capability",
    categoryId: "other",
    shortDescription: "Payment rails integration capability documented for Vertex CMS.",
    availability: "COMING_SOON",
    monogram: "PR",
    detail: {
      overview: "Payment rails integration capability documented for Vertex CMS.",
      overviewPoints: ["Payment rails integration capability documented for Vertex CMS."],
    },
  },
];

export function getIntegrationBySlug(slug: string): IntegrationRecord | undefined {
  return INTEGRATIONS_CATALOG.find((item) => item.slug === slug);
}

export function getAllCatalogSlugs(): string[] {
  return INTEGRATIONS_CATALOG.map((item) => item.slug);
}

export function getAvailableIntegrations(): IntegrationRecord[] {
  return INTEGRATIONS_CATALOG.filter((item) => item.availability === "AVAILABLE");
}

export function getComingSoonIntegrations(): IntegrationRecord[] {
  return INTEGRATIONS_CATALOG.filter((item) => item.availability === "COMING_SOON");
}

export function getFeaturedIntegrations(): IntegrationRecord[] {
  return INTEGRATIONS_CATALOG.filter((item) => item.featured === true);
}

export function getRelatedIntegrations(current: IntegrationRecord, limit = 5): IntegrationRecord[] {
  return INTEGRATIONS_CATALOG.filter(
    (item) => item.id !== current.id && item.categoryId === current.categoryId,
  ).slice(0, limit);
}
