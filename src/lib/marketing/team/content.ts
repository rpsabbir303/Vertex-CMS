/**
 * Vertex CMS SaaS Team page.
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
  title: "Team | Vertex CMS",
  description: "Leadership, key roles, and careers at Vertex CMS.",
  canonical: "/company/team",
};

export const teamHero = {
  eyebrow: "Meet the team",
  headline: "The people behind Vertex CMS.",
  supporting: null as string | null,
};

/** Set demo flags to false when Vertex publishes approved team profiles. */
export const teamConfig = {
  /** Sample profiles for UI review — not real employees. */
  useDemoMembers: true,
};

export const teamDirectoryCopy = {
  eyebrow: "02",
  headline: "Our team",
  filterAriaLabel: "Filter team by department",
  filterAll: "All",
  demoNotice: "Demo content — sample team profiles for UI review, not real employees.",
} as const;

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

export const buildingSection = {
  eyebrow: "How we build",
  headline: "How the team builds Vertex CMS",
  pillars: [
    {
      id: "people",
      label: "People",
      body: null as string | null,
    },
    {
      id: "product",
      label: "Product",
      body: "Construction management software connecting projects, financials, field operations, compliance, workforce, and intelligence.",
    },
    {
      id: "industry",
      label: "Industry knowledge",
      body: null as string | null,
    },
    {
      id: "technology",
      label: "Technology",
      body: null as string | null,
    },
  ],
};

export const careersCta = {
  eyebrow: "Join the team",
  headline: "Build the future of construction software.",
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
  leadership: "Leadership profiles will appear here when published from Vertex CMS.",
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
