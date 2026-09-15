/**
 * About page copy assembled from existing approved marketing sources.
 * Do not add undocumented company facts (history, funding, locations, headcount, awards).
 *
 * Sources:
 * - src/lib/marketing/content.ts (hero, problem, platform, financials, field, ai, growth)
 * - src/lib/marketing/solutions/data.ts
 * - src/lib/marketing/features/hub.ts, landing.ts, register.ts
 * - src/lib/marketing/features/predictiveInsightsDetail.ts, cashFlowDetail.ts,
 *   safetyDetail.ts, mobileDetail.ts, customerPortalsDetail.ts
 * - src/lib/marketing/security/content.ts
 */

import { ROUTES } from "@/lib/marketing/navigation";
import { HUB_MODULES } from "@/lib/marketing/features/hub";
import { featuresLandingAI, featuresLandingHero } from "@/lib/marketing/features/landing";
import { AI_CAPABILITIES } from "@/lib/marketing/features/register";
import { predictiveInsightsFeatureDetail } from "@/lib/marketing/features/predictiveInsightsDetail";
import { cashFlowFeatureDetail } from "@/lib/marketing/features/cashFlowDetail";
import { safetyFeatureDetail } from "@/lib/marketing/features/safetyDetail";
import { mobileFeatureDetail } from "@/lib/marketing/features/mobileDetail";
import { SOLUTION_BUSINESS_SECTION, SOLUTION_DETAILS } from "@/lib/marketing/solutions/data";
import { aiGovernance } from "@/lib/marketing/security/content";

export const aboutIdentity = {
  eyebrow: "Platform Overview",
  headline: "One platform. Every part of the construction operation.",
  paragraphs: [
    featuresLandingHero.supporting,
    "Connect the information, people and workflows that keep every project moving.",
    SOLUTION_BUSINESS_SECTION.supporting,
  ],
} as const;

export const aboutChallenge = {
  eyebrow: "The Challenge",
  headline: "Construction shouldn't feel this disconnected.",
  items: [
    {
      number: "01",
      title: "Disconnected Tools",
      description: "Project information lives across too many systems.",
    },
    {
      number: "02",
      title: "Delayed Financial Visibility",
      description: "Know project performance before problems become expensive.",
    },
    {
      number: "03",
      title: "Manual Processes",
      description: "Reduce repetitive work and disconnected workflows.",
    },
    {
      number: "04",
      title: "Operational Friction",
      description: "Keep office, field and financial teams working from the same information.",
    },
  ],
  /** Labels taken from existing problem / platform / financials / AI copy. */
  flow: ["Disconnected", "Connected", "Visible", "Intelligent"] as const,
} as const;

export const aboutAudiences = {
  eyebrow: SOLUTION_BUSINESS_SECTION.eyebrow,
  headline: SOLUTION_BUSINESS_SECTION.headline,
  supporting: SOLUTION_BUSINESS_SECTION.supporting,
  items: [
    {
      number: "01",
      id: "general-contractors" as const,
      label: SOLUTION_DETAILS["general-contractors"].label,
      body: SOLUTION_DETAILS["general-contractors"].body,
      href: SOLUTION_DETAILS["general-contractors"].href,
      cta: SOLUTION_DETAILS["general-contractors"].cta.label,
    },
    {
      number: "02",
      id: "specialty-contractors" as const,
      label: SOLUTION_DETAILS["specialty-contractors"].label,
      body: SOLUTION_DETAILS["specialty-contractors"].body,
      href: SOLUTION_DETAILS["specialty-contractors"].href,
      cta: SOLUTION_DETAILS["specialty-contractors"].cta.label,
    },
    {
      number: "03",
      id: "owners" as const,
      label: SOLUTION_DETAILS.owners.label,
      body: SOLUTION_DETAILS.owners.body,
      href: SOLUTION_DETAILS.owners.href,
      cta: SOLUTION_DETAILS.owners.cta.label,
    },
  ],
} as const;

export const aboutPlatformMap = {
  eyebrow: "One connected platform",
  headline: "These areas operate as one system — not separate products.",
  supporting: "Connect the information, people and workflows that keep every project moving.",
  center: "Vertex CMS",
  groups: HUB_MODULES.map((mod) => ({
    number: mod.number,
    id: mod.id,
    title: mod.id === "growth" ? "Growth" : mod.title,
    description: mod.description,
    href: mod.id === "project-management" ? `${ROUTES.features}/project-management` : `${ROUTES.features}#${mod.id}`,
  })),
} as const;

export const aboutLayers = {
  eyebrow: "Platform structure",
  headline: "An interconnected operating ecosystem.",
  supporting:
    "Identity, data, and platform layers work together under tenant-scoped isolation.",
  items: [
    {
      number: "01",
      title: "Super Admin",
      body: "AI governance controls in Super Admin.",
    },
    {
      number: "02",
      title: "Company / Tenant",
      body: "The public Features experience covers Tenant (Company) modules — the company workspace for connected construction operations, with tenant-scoped data.",
    },
    {
      number: "03",
      title: "Company Client / External",
      body: "Customer Portals give owners and clients a controlled view of assigned projects — visibility and collaboration without full tenant workspace access.",
    },
    {
      number: "04",
      title: "Mobile App",
      body: mobileFeatureDetail.meta.description,
    },
  ],
} as const;

export const aboutIntelligence = {
  eyebrow: "Project intelligence",
  headline: "Turn project data into better decisions.",
  supporting: predictiveInsightsFeatureDetail.howItWorks.body,
  flow: ["Project Data", "Connected Platform", "Intelligence", "Decision Support"] as const,
  domains: [
    {
      title: "Cost",
      body: predictiveInsightsFeatureDetail.intro.cards[0].body,
    },
    {
      title: "Cash",
      body: cashFlowFeatureDetail.meta.description,
    },
    {
      title: "Schedule",
      body: predictiveInsightsFeatureDetail.intro.cards[1].body,
    },
    {
      title: "Safety",
      body: safetyFeatureDetail.hero.supporting,
    },
  ],
  note: "Predictive Insights helps teams identify emerging cost, schedule, and performance risks. It does not guarantee outcomes or forecast accuracy.",
} as const;

export const aboutAi = {
  eyebrow: featuresLandingAI.eyebrow,
  headline: featuresLandingAI.headline,
  supporting: featuresLandingAI.supporting,
  capabilities: AI_CAPABILITIES.map((item) => ({
    title: item.name,
    body: item.description,
  })),
  governance: [
    aiGovernance.points[0],
    aiGovernance.points[2],
    aiGovernance.points[1],
  ],
  note: featuresLandingAI.note,
  href: featuresLandingAI.cta.href,
  cta: featuresLandingAI.cta.label,
} as const;

export const aboutLifecycle = {
  eyebrow: "Construction operation",
  headline: "From project work to intelligence — on the same record.",
  supporting: featuresLandingHero.supporting,
  operational: [
    "Project Management",
    "Financial Management",
    "Field Operations",
    "Compliance & Workforce",
    "AI & Intelligence",
  ] as const,
  growth: ["Website", "Lead", "CRM", "Opportunity", "Project", "Financials", "Operations"] as const,
} as const;

export const aboutConnected = {
  eyebrow: "Connected by design",
  headline: "Construction shouldn't feel this disconnected.",
  statement:
    "Bring project management, financials, field operations, compliance and intelligence together in one connected construction platform.",
  supporting: "Connect the information, people and workflows that keep every project moving.",
} as const;

export const aboutCapabilities = {
  eyebrow: "Capabilities",
  headline: "Core capability groups built for construction operations.",
  supporting: "This is an overview of the platform groups — not the full feature library.",
  exploreLabel: "Explore",
  items: aboutPlatformMap.groups,
} as const;
