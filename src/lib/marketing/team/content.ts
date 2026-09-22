/**
 * VertexBuild SaaS Team page.
 *
 * Documented requirement: display CMS-sourced company/team members.
 * Demo profiles (`demoTeamMembers`, `teamConfig.useDemoMembers`) are for UI review only.
 * Do NOT import tenant demo team data (`src/lib/website/tenantData.ts`).
 */

import { ROUTES } from "@/lib/marketing/navigation";
import { demoTeamMembers } from "./demoMembers";

export type TeamMember = {
  id: string;
  /** Required for a published profile. Null/empty members are not rendered. */
  name: string | null;
  role: string | null;
  department?: string | null;
  image: string | null;
  bio: string | null;
  linkedin: string | null;
  category: "leadership" | "member";
  featured?: boolean;
  /** Sample profile for UI review — not a real Vertex employee */
  demoContent?: boolean;
};

export type KeyRole = {
  id: string;
  /** Role title only — never a person name. */
  title: string | null;
  description: string | null;
};

export type TeamDirectory = {
  members: TeamMember[];
  roles: KeyRole[];
};

export const teamPageMeta = {
  title: "Team | VertexBuild",
  description: "Leadership, key roles, and careers at VertexBuild.",
  canonical: "/company/team",
};

export const teamHero = {
  label: "The people behind VertexBuild",
  headlineLines: ["The people building", "VertexBuild."] as const,
  /** @deprecated Use headlineLines — kept for legacy components */
  headline: "The people building VertexBuild.",
  supporting:
    "VertexBuild brings product design, engineering, construction operations, and customer understanding together to build connected construction-management software.",
  /** Portrait ids for hero human-network visual (existing team assets only). */
  networkMemberIds: [
    "demo-mara-ellison",
    "demo-julian-voss",
    "demo-elena-cho",
    "demo-imani-cole",
    "demo-amara-bennett",
  ] as const,
} as const;

export const teamGallerySection = {
  label: "Full team",
  headline: "The people behind the platform",
  intro: "Product, engineering, operations, and customer experience — building connected construction-management software.",
} as const;

export const teamIntroSection = {
  statementLine1: "Construction software is not just about features.",
  statementLine2: "It is about understanding how work moves.",
} as const;

export const leadershipSection = {
  label: "Leadership",
  headlineLines: ["The people", "building the", "product direction."] as const,
  intro:
    "Leaders connect construction workflow knowledge, product design, engineering discipline, and customer impact to one platform vision.",
  directionStack: ["Product", "Construction", "Technology", "Customer impact"] as const,
  timelineSteps: ["Vision", "Product", "Engineering", "Operations", "Customer"] as const,
} as const;

/** Maps leadership timeline steps to published member ids (existing data only). */
export const leadershipTimelineLinks = [
  { step: "Vision" as const, memberId: "demo-mara-ellison", index: "01" },
  { step: "Product" as const, memberId: "demo-julian-voss", index: "02" },
  { step: "Engineering" as const, memberId: "demo-priya-raman", index: "03" },
] as const;

export const onePlatformSection = {
  headline: "Different disciplines. One platform.",
  intro: "Product, engineering, field, financial, and customer roles converge on one connected system.",
  platformLabel: "VertexBuild",
} as const;

export const darkWorkflowSection = {
  headline: "Built around how construction actually works.",
  body: "We translate complex project, field, and financial workflows into connected software experiences — so teams work from one operating record instead of scattered tools.",
  stack: ["Project", "Field", "Documents", "Financial", "Intelligence"] as const,
} as const;

/** @deprecated Legacy section exports — used by unused team components only */
export const productConnectionSection = {
  eyebrow: "Collaboration",
  headline: onePlatformSection.headline,
  intro: onePlatformSection.intro,
  platformLabel: onePlatformSection.platformLabel,
} as const;

/** @deprecated Legacy section exports — used by unused team components only */
export const productStorySection = {
  eyebrow: "Product story",
  headline: darkWorkflowSection.headline,
  body: darkWorkflowSection.body,
} as const;

export const teamIndexSection = {
  label: "The team",
  headline: "The people inside the system",
  intro: "People across product, engineering, operations, and customer experience.",
} as const;

export const thinkingSection = {
  headline: "How we think about building.",
} as const;

export const TEAM_DEPARTMENT_BANDS = [
  { index: "01", title: "Product", department: "Product" },
  { index: "02", title: "Engineering", department: "Engineering" },
  { index: "03", title: "Customer experience", department: "Customer Experience" },
  { index: "04", title: "Operations", department: "Operations" },
] as const;

/** Editorial moments between department bands — uses existing member bios, not invented quotes. */
export const teamEditorialMoments = [
  { afterDepartment: "Product", memberId: "demo-elena-cho" },
  { afterDepartment: "Engineering", memberId: "demo-kenji-okada" },
  { afterDepartment: "Customer Experience", memberId: "demo-amara-bennett" },
] as const;

export type PlatformDisciplineId = "product" | "engineering" | "field" | "financial" | "customer";

export const platformDisciplines: Array<{ id: PlatformDisciplineId; label: string }> = [
  { id: "product", label: "Product" },
  { id: "engineering", label: "Engineering" },
  { id: "field", label: "Field" },
  { id: "financial", label: "Financial" },
  { id: "customer", label: "Customer" },
];

/** Member ids grouped by discipline where existing roles/departments support it. */
export const platformDisciplineMemberIds: Record<PlatformDisciplineId, readonly string[]> = {
  product: ["demo-julian-voss", "demo-elena-cho", "demo-nathan-brooks"],
  engineering: ["demo-priya-raman", "demo-imani-cole", "demo-rafael-duarte", "demo-sofia-lindqvist", "demo-kenji-okada"],
  field: ["demo-sofia-lindqvist", "demo-owen-hart"],
  financial: ["demo-rafael-duarte", "demo-nathan-brooks"],
  customer: ["demo-amara-bennett"],
};

/** Set demo flags to false when Vertex publishes approved team profiles. */
export const teamConfig = {
  /** Sample profiles for UI review — not real employees. */
  useDemoMembers: true,
};

export const teamDirectoryCopy = {
  eyebrow: "02",
  headline: "Our team",
  intro: "Product, engineering, operations, and customer-focused people building VertexBuild.",
  featuredLabel: "Featured team",
  filterAriaLabel: "Filter team by department",
  filterAll: "All",
  demoNotice: "Demo content — sample team profiles for UI review, not real employees.",
} as const;

/** Filter chips map to existing member `department` values — no new data. */
export const TEAM_DEPARTMENT_FILTERS = [
  { id: "all", label: "All", department: null as string | null },
  { id: "product", label: "Product", department: "Product" },
  { id: "engineering", label: "Engineering", department: "Engineering" },
  { id: "customer", label: "Customer experience", department: "Customer Experience" },
  { id: "operations", label: "Operations", department: "Operations" },
] as const;

/**
 * CMS-sourced Vertex company team members.
 * Leave empty until the CMS publishes approved profiles.
 */
export const approvedTeamMembers: TeamMember[] = [];

export function getLocalTeamMembers(): TeamMember[] {
  return teamConfig.useDemoMembers ? demoTeamMembers : approvedTeamMembers;
}

/**
 * Approved organizational role descriptions — not employee profiles.
 * Leave empty until Vertex publishes approved role copy.
 */
export const approvedKeyRoles: KeyRole[] = [];

/** Demo pillar copy for UI review — replace when Vertex publishes approved building copy. */
export const teamBuildStorySection = {
  eyebrow: "How we build",
  headline: "How the team builds VertexBuild",
  stack: ["Construction", "Product", "Engineering", "Customer impact"] as const,
} as const;

export const buildingSection = {
  eyebrow: "How we build",
  headline: "How the team builds VertexBuild",
  demoContent: true,
  pillars: [
    {
      id: "people",
      label: "People",
      body: "We bring product, design, engineering, and customer perspectives together to build software around the realities of construction work.",
    },
    {
      id: "product",
      label: "Product",
      body: "Construction management software connecting projects, financials, field operations, compliance, workforce, and intelligence.",
    },
    {
      id: "industry",
      label: "Industry knowledge",
      body: "We design around the workflows construction teams rely on every day — from project coordination and field operations to financial control and workforce management.",
    },
    {
      id: "technology",
      label: "Technology",
      body: "We combine thoughtful product design, modern technology, and connected systems to create a platform that teams can rely on across their work.",
    },
  ],
};

export const teamBuildPrinciples = [
  { index: 1, label: "Construction context first", body: buildingSection.pillars[2]!.body },
  { index: 2, label: "Connected workflows", body: buildingSection.pillars[1]!.body },
  { index: 3, label: "Human decisions stay central", body: buildingSection.pillars[0]!.body },
  { index: 4, label: "Useful complexity, not unnecessary complexity", body: buildingSection.pillars[3]!.body },
] as const;

export const buildSystemPipeline = [
  "Customer need",
  "Product design",
  "Engineering",
  "Construction logic",
  "Product system",
  "Customer",
] as const;

export const buildSystemDisciplines = [
  { id: "product", label: "Product", description: buildingSection.pillars[1]!.body },
  { id: "engineering", label: "Engineering", description: buildingSection.pillars[3]!.body },
  { id: "construction", label: "Construction", description: buildingSection.pillars[2]!.body },
  { id: "financial", label: "Financial", description: buildingSection.pillars[1]!.body },
  { id: "field", label: "Field operations", description: buildingSection.pillars[2]!.body },
  { id: "customer", label: "Customer experience", description: buildingSection.pillars[0]!.body },
] as const;

export const careersCta = {
  eyebrow: "Join the team",
  headline: "Build the future of construction software.",
  supporting: "Work on connected construction technology with people who understand project, field, and financial operations.",
  ctaLabel: "View Open Roles",
  ctaHref: ROUTES.careers,
  note: "Open roles are listed on the Careers page when published.",
};

export const TEAM_PENDING = {
  label: "Approved content pending",
  photo: "Photo pending",
  hero: "An approved team introduction has not been published yet.",
  pillar: "Approved copy has not been published yet.",
  careers: "An approved careers introduction has not been published yet.",
  leadership: "Leadership profiles will appear here when published from VertexBuild.",
  keyRoles: "Approved role descriptions will appear here when published. This is not a list of employees.",
  keyRolesNote: "Organizational roles — not employee profiles.",
  loadError: "Team profiles are temporarily unavailable. Please try again.",
} as const;

export function isPublishedMember(member: TeamMember): member is TeamMember & { name: string } {
  return Boolean(member.name?.trim());
}

export function isPublishedRole(role: KeyRole): role is KeyRole & { title: string } {
  return Boolean(role.title?.trim());
}

export function getPublishedMembers(members: TeamMember[]): Array<TeamMember & { name: string }> {
  return members.filter(isPublishedMember);
}

export function getPublishedRoles(roles: KeyRole[]): Array<KeyRole & { title: string }> {
  return roles.filter(isPublishedRole);
}

export function splitLeadership(members: TeamMember[]) {
  const published = getPublishedMembers(members).filter((member) => member.category === "leadership");
  const featured = published.find((member) => member.featured) ?? published[0] ?? null;
  const secondary = featured ? published.filter((member) => member.id !== featured.id) : [];
  return { featured, secondary };
}

export function getDirectoryMembers(members: TeamMember[]) {
  return getPublishedMembers(members).filter((member) => member.category === "member");
}

export function hasDemoTeamContent(members: TeamMember[]) {
  return members.some((member) => member.demoContent);
}

export function getMembersByDepartment(members: TeamMember[], department: string) {
  return getDirectoryMembers(members).filter((m) => m.department === department);
}

export function resolveMemberById(members: TeamMember[], id: string) {
  return getPublishedMembers(members).find((m) => m.id === id) ?? null;
}

export function resolveDisciplineMembers(members: TeamMember[], disciplineId: PlatformDisciplineId) {
  const ids = platformDisciplineMemberIds[disciplineId];
  const published = getPublishedMembers(members);
  return ids.map((id) => published.find((m) => m.id === id)).filter(Boolean) as Array<TeamMember & { name: string }>;
}
