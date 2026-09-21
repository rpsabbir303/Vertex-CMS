/**
 * Features page presentation copy + re-exports from the Master Feature Register data model.
 */

export {
  TENANT_MODULES,
  PLATFORM_SERVICES,
  ENTERPRISE_CAPABILITIES,
  AI_CAPABILITIES,
  FEATURE_ROLES,
  FEATURE_LIBRARY,
  CURATED_FEATURE_IDS,
  MODULE_GROUPS,
  WORKFLOW_MAP,
  planLabel,
  getModuleById,
  getModulesByGroup,
  getFeatureBySlug,
  featureSlug,
  type TenantModule,
  type FeatureRecord,
  type RoleProfile,
  type PreviewKey,
  type PlanTier,
} from "./register";

export const featuresPageMeta = {
  title: "Features | VertexBuild",
  description:
    "Explore VertexBuild through six platform areas—project management, financial management, field operations, compliance and workforce, AI and intelligence, and business growth.",
  canonical: "/features",
};

export const featuresHero = {
  eyebrow: "Features",
  headline: "One platform for every construction workflow.",
  supporting:
    "Bring project management, financials, field operations, compliance and intelligence together in one connected construction platform.",
};

export const featuresPerspectives = [
  { id: "modules", label: "By Module", href: "#features-modules", number: "01" },
  { id: "ai", label: "By AI Capability", href: "#features-ai", number: "02" },
  { id: "roles", label: "By Role", href: "#features-roles", number: "03" },
] as const;

export const featuresCta = {
  eyebrow: "Ready to explore VertexBuild?",
  headline: "See the platform in action.",
  supporting: "Start a free trial or book a demo to explore how VertexBuild fits your team.",
};

export const heroEcosystemNodes = [
  "Projects",
  "Financials",
  "Field",
  "CRM",
  "AI",
  "Documents",
  "Workflows",
] as const;
