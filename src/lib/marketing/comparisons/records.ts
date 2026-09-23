import { CTAS, ROUTES } from "@/lib/marketing/navigation";

import type { ComparisonSlug } from "./catalog";
import { COMPARISON_DEMO_DATA } from "./demo-data";
import {
  COMPARISON_FRAMEWORK_FLOW,
  COMPARISON_FRAMEWORK_PILLARS,
  COMPARISON_STRATEGIC_DIFFERENCE,
} from "./shared";

export type ComparisonDetailRecord = {
  slug: ComparisonSlug;
  index: string;
  name: string;
  summary: string;
  focusTags: readonly string[];
  href: string;
  hero: {
    eyebrow: string;
    headline: string;
    supporting: string;
    scope: string[];
  };
  overview: {
    headline: string;
    supporting: string;
    dimensions: Array<{ index: string; title: string; body: string }>;
  };
  capability: {
    eyebrow: string;
    headline: string;
    supporting: string;
    areas: Array<{
      id: string;
      title: string;
      frameworkDescription: string;
      vertexBuild: string;
      competitor: string;
      comparisonContext: string;
    }>;
  };
  workflows: {
    eyebrow: string;
    headline: string;
    supporting: string;
    domains: Array<{
      id: string;
      title: string;
      frameworkDescription: string;
      vertexBuild: string;
      competitor: string;
      comparisonContext: string;
    }>;
  };
  operatingModel: {
    eyebrow: string;
    headline: string;
    supporting: string;
    vertexBuild: string;
    competitor: string;
    comparisonContext: string;
  };
  strategicDifference: {
    eyebrow: string;
    headline: string;
    supporting: string;
    stages: readonly string[];
    closingLabel: string;
    supportingDetail: string;
  };
  whoItsFor: {
    eyebrow: string;
    headline: string;
    audiences: Array<{
      title: string;
      body: string;
      consideration: string;
      comparisonContext: string;
    }>;
  };
  researchSteps: Array<{ index: string; title: string; body: string }>;
  cta: {
    headline: string;
    supporting: string;
    primary: (typeof CTAS)["trial"];
    secondary: (typeof CTAS)["demo"];
    tertiary: (typeof CTAS)["sales"];
  };
  seo: {
    title: string;
    description: string;
  };
};

const DIRECTORY_INDEX: Record<ComparisonSlug, { index: string; name: string }> = {
  procore: { index: "01", name: "Procore" },
  buildertrend: { index: "02", name: "Buildertrend" },
  cmic: { index: "03", name: "CMiC" },
};

function buildComparisonRecord(slug: ComparisonSlug): ComparisonDetailRecord {
  const meta = DIRECTORY_INDEX[slug];
  const demo = COMPARISON_DEMO_DATA[slug];
  const href = `${ROUTES.comparisons}/${slug}`;
  const competitor = meta.name;

  return {
    slug,
    index: meta.index,
    name: competitor,
    summary: demo.directorySummary,
    focusTags: demo.focusTags,
    href,
    hero: {
      eyebrow: "Comparison",
      headline: `VertexBuild vs ${competitor}`,
      supporting: demo.heroSupporting,
      scope: ["Capabilities", "Workflows", "Operating model", "Team fit"],
    },
    overview: {
      headline: "Comparison overview",
      supporting: demo.overviewSupporting,
      dimensions: demo.overviewDimensions.map((d) => ({ ...d })),
    },
    capability: {
      eyebrow: "Capability comparison",
      headline: "Look across the capabilities that matter.",
      supporting: demo.capabilitySupporting,
      areas: demo.capabilities.map((row) => ({ ...row })),
    },
    workflows: {
      eyebrow: "Workflow comparison",
      headline: "Review connected workflow domains.",
      supporting: demo.workflowSupporting,
      domains: demo.workflows.map((row) => ({ ...row })),
    },
    operatingModel: {
      eyebrow: "Operating model",
      headline: "Operating model context",
      supporting: demo.operatingModel.supporting,
      vertexBuild: demo.operatingModel.vertexBuild,
      competitor: demo.operatingModel.competitor,
      comparisonContext: demo.operatingModel.comparisonContext,
    },
    strategicDifference: {
      ...COMPARISON_STRATEGIC_DIFFERENCE,
      supporting: demo.strategicDifference.supporting,
      supportingDetail: demo.strategicDifference.supportingDetail,
    },
    whoItsFor: {
      eyebrow: "Who it's for",
      headline: "Start with the way your team works.",
      audiences: demo.audiences.map((a) => ({ ...a })),
    },
    researchSteps: demo.researchSteps.map((s) => ({ ...s })),
    cta: {
      headline: "Ready to move from research to action?",
      supporting: "Explore VertexBuild through a free trial, product demo, or conversation with the team.",
      primary: CTAS.trial,
      secondary: CTAS.demo,
      tertiary: CTAS.sales,
    },
    seo: {
      title: `VertexBuild vs ${competitor} | Construction Management Comparison | VertexBuild`,
      description: demo.seoDescription,
    },
  };
}

export const COMPARISON_RECORDS: Record<ComparisonSlug, ComparisonDetailRecord> = {
  procore: buildComparisonRecord("procore"),
  buildertrend: buildComparisonRecord("buildertrend"),
  cmic: buildComparisonRecord("cmic"),
};

export const COMPARISON_SLUGS = Object.keys(COMPARISON_RECORDS) as ComparisonSlug[];

export function comparisonHref(slug: ComparisonSlug): string {
  return COMPARISON_RECORDS[slug].href;
}

export function getComparisonRecord(slug: string): ComparisonDetailRecord | undefined {
  if (!(slug in COMPARISON_RECORDS)) return undefined;
  return COMPARISON_RECORDS[slug as ComparisonSlug];
}

export function getComparisonDirectoryFromRecords(): Array<
  Pick<ComparisonDetailRecord, "slug" | "index" | "name" | "summary" | "focusTags" | "href">
> {
  return COMPARISON_SLUGS.map((slug) => {
    const r = COMPARISON_RECORDS[slug];
    return {
      slug: r.slug,
      index: r.index,
      name: r.name,
      summary: r.summary,
      focusTags: r.focusTags,
      href: r.href,
    };
  });
}

export { COMPARISON_FRAMEWORK_FLOW, COMPARISON_FRAMEWORK_PILLARS };
