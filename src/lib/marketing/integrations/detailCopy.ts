import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { IntegrationRecord } from "./types";

export const INTEGRATION_DETAIL_COPY = {
  overviewHeadline: "What this integration does",
  howItWorksHeadline: "How it works",
  dataExchangedHeadline: "Data exchanged",
  capabilitiesHeadline: "Capabilities",
  capabilitiesWorkflowsHeadline: "Capabilities & supported workflows",
  workflowsHeadline: "Supported workflows",
  technicalHeadline: "Technical information",
  limitationsHeadline: "Limitations",
  documentationHeadline: "Documentation",
  benefitsHeadline: "Benefits",
  requirementsHeadline: "Requirements",
  additionalHeadline: "Additional information",
  availabilityHeadline: "Availability",
  relatedHeadline: "Explore more integrations",
  backLabel: "Back to Integrations",
  connectionContextHeadline: "Connection with VertexBuild",
  comingSoonStatus:
    "This entry is documented for VertexBuild but is not yet available for activation. Contact our team for current availability.",
  availableStatus:
    "This integration or capability is documented as available for VertexBuild according to the current catalog.",
  typeCapability: "Platform capability",
  typeIntegration: "Third-party integration",
  closingHeadlineAvailable: "Take the next step with VertexBuild",
  closingHeadlineComingSoon: "Discuss documented integrations",
  closingBodyAvailable: "Explore the platform and speak with our team about documented connections.",
  closingBodyComingSoon: "Book a demo or request information about documented capabilities and integrations.",
  notFoundTitle: "Integration not found",
  notFoundBody: "This integration is not listed in the current VertexBuild catalog.",
} as const;

export function detailConnectionLabels(item: IntegrationRecord) {
  if (item.kind === "capability") {
    return {
      source: "CONNECTED SYSTEM",
      sourceSub: "External tools and services",
      connection: item.name.toUpperCase(),
      connectionDisplay: item.name,
      connectionSub: "Platform capability",
      destination: "VertexBuild",
      destinationSub: "Shared operating record",
    };
  }
  return {
    source: "EXTERNAL SYSTEM",
    sourceSub: "Partner or business system",
    connection: item.name.toUpperCase(),
    connectionDisplay: item.name,
    connectionSub: "Integration connection",
    destination: "VertexBuild",
    destinationSub: "Shared operating record",
  };
}

export function detailOverviewBody(item: IntegrationRecord): string {
  return item.detail?.overview ?? item.detailSummary ?? item.shortDescription;
}

export function detailPrimaryCtas(item: IntegrationRecord) {
  const comingSoon = item.availability === "COMING_SOON";
  if (comingSoon) {
    return {
      primary: { label: "Request Quote", href: CTAS.quote.href },
      secondary: { label: "Book a Demo", href: CTAS.demo.href },
      tertiary: { label: "Explore Available Integrations", href: ROUTES.integrations },
    };
  }
  return {
    primary: { label: "Explore Platform", href: ROUTES.features },
    secondary: { label: "Book a Demo", href: CTAS.demo.href },
    tertiary: { label: "Start Free Trial", href: CTAS.trial.href },
  };
}

export function detailClosingCtas(item: IntegrationRecord) {
  return detailPrimaryCtas(item);
}

export function integrationsDiscoverHref(_categoryId?: IntegrationRecord["categoryId"]): string {
  return `${ROUTES.integrations}#discover`;
}
