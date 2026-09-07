/**
 * Vertex CMS SaaS Team page content.
 *
 * RULES:
 * - Do NOT invent employee names, photos, bios, titles, or achievements.
 * - null fields render as editable placeholders for the content team.
 * - Replace placeholders with approved Vertex personnel data when available.
 */

export type TeamMember = {
  id: string;
  /** null → show editable name placeholder */
  name: string | null;
  /** null → show editable role placeholder */
  role: string | null;
  /** null → show photo placeholder block */
  image: string | null;
  /** null → show editable bio placeholder */
  bio: string | null;
  /** null → hide LinkedIn control */
  linkedin: string | null;
  category: "leadership" | "key-role";
  /** Featured leadership profile (larger editorial treatment) */
  featured?: boolean;
};

export type KeyRole = {
  id: string;
  /** null → editable role title */
  title: string | null;
  /** null → editable description */
  description: string | null;
};

export const teamPageMeta = {
  title: "Team | Vertex CMS",
  description: "Leadership, key roles, and careers at Vertex CMS.",
  canonical: "/company/team",
};

export const teamHero = {
  eyebrow: "Meet the team",
  headline: "The people behind Vertex CMS.",
  /** No approved intro copy in project docs — editable placeholder */
  supporting: null as string | null,
  supportingPlaceholder: "[Approved Team introduction copy]",
};

/**
 * Leadership profiles — content-ready slots.
 * Populate with approved Vertex leadership data; leave null for placeholders.
 */
export const leadershipMembers: TeamMember[] = [
  {
    id: "leadership-1",
    name: null,
    role: null,
    image: null,
    bio: null,
    linkedin: null,
    category: "leadership",
    featured: true,
  },
  {
    id: "leadership-2",
    name: null,
    role: null,
    image: null,
    bio: null,
    linkedin: null,
    category: "leadership",
  },
  {
    id: "leadership-3",
    name: null,
    role: null,
    image: null,
    bio: null,
    linkedin: null,
    category: "leadership",
  },
];

/**
 * Key organizational roles — role-focused, not named employees.
 * Titles/descriptions are null until Vertex documents them.
 */
export const keyRoles: KeyRole[] = [
  { id: "role-1", title: null, description: null },
  { id: "role-2", title: null, description: null },
  { id: "role-3", title: null, description: null },
  { id: "role-4", title: null, description: null },
];

export const buildingSection = {
  eyebrow: "How we build",
  headline: "How the team builds Vertex CMS",
  /** Supported product framing only — no undocumented culture claims */
  pillars: [
    {
      id: "people",
      label: "People",
      body: "[Approved copy: people behind the product]",
    },
    {
      id: "product",
      label: "Product",
      body: "Construction management software connecting projects, financials, field operations, compliance, workforce, and intelligence.",
    },
    {
      id: "industry",
      label: "Industry knowledge",
      body: "[Approved copy: construction industry expertise]",
    },
    {
      id: "technology",
      label: "Technology",
      body: "[Approved copy: technology and platform approach]",
    },
  ],
};

export const careersCta = {
  eyebrow: "Join the team",
  /** Design-copy suggestion — replace when Vertex provides approved careers headline */
  headline: "Build the future of construction software.",
  supportingPlaceholder: "[Approved careers introduction]",
  ctaLabel: "View Open Roles",
  ctaHref: "/company/careers",
  note: "Open roles are listed on the Careers page when published.",
};

export const PLACEHOLDERS = {
  name: "[Leadership Name]",
  role: "[Leadership Role]",
  photo: "[Leadership Photo]",
  bio: "[Leadership Bio]",
  keyRole: "[Key Role]",
  keyRoleDescription: "[Role Description]",
} as const;
