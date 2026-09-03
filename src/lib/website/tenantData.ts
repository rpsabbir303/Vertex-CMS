import { photos } from "@/lib/images";

export type Locale = "en" | "es";

/** Demo tenant company profile — replace with CMS Company Profile data. */
export const company = {
  name: "Summit Construction Group",
  tagline: "General Contractor",
  description:
    "Building quality projects with experience, accountability, and a commitment to doing the work right.",
  phone: "(512) 555-0142",
  email: "info@summitconstruction.com",
  address: "1200 Commerce Drive, Suite 400, Austin, TX 78701",
  serviceAreaLabel: "Texas & Surrounding Region",
  /** Set to a year string when configured in CMS; hidden on site when null. */
  established: null as string | null,
  /** Demo stat — replace with CMS data. Hidden when null. */
  projectsDelivered: "Sample · demo" as string | null,
  projectTypes: "Commercial · Civil · Residential",
  logoInitials: "SC",
} as const;

export type Service = {
  id: string;
  number: string;
  image: string;
  slug: string;
};

export type Project = {
  id: string;
  name: string;
  type: string;
  location: string;
  status: string;
  image: string;
  description: string;
  featured: boolean;
  slug: string;
  scope?: string;
  gallery?: string[];
  /** Extended case-study narrative for featured project story section. */
  narrative?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  project: string;
};

export type SafetyMetric = {
  id: string;
  label: string;
  value: string;
  note: string;
};

export type ProcessStep = {
  id: string;
  number: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  image?: string;
  description: string;
};

export type AboutContent = {
  story: string;
  mission: string;
  values: { id: string; title: string; description: string }[];
};

/** Tenant page visibility — disable optional pages when CMS has no content. */
export const tenantPages = {
  testimonials: true,
  certifications: true,
} as const;

/** Demo services — replace with CMS Services module data. */
export const serviceIds = [
  "commercial",
  "preconstruction",
  "civil",
  "renovation",
  "tenant-improvements",
  "construction-management",
] as const;

export const serviceMeta: Service[] = [
  { id: "commercial", number: "01", image: photos.aerial, slug: "commercial-construction" },
  { id: "preconstruction", number: "02", image: photos.planning, slug: "preconstruction" },
  { id: "civil", number: "03", image: photos.crane, slug: "civil-infrastructure" },
  { id: "renovation", number: "04", image: photos.steelFrame, slug: "renovation-remodeling" },
  { id: "tenant-improvements", number: "05", image: photos.blueprint, slug: "tenant-improvements" },
  { id: "construction-management", number: "06", image: photos.superintendent, slug: "construction-management" },
];

/** Demo projects — replace with CMS Projects module data. */
export const projects: Project[] = [
  {
    id: "riverfront-office",
    name: "Riverfront Office Complex",
    type: "Commercial",
    location: "Austin, TX",
    status: "Completed",
    image: photos.aerial,
    description:
      "A 12-story Class A office tower delivered with disciplined coordination across structure, MEP, and finishes.",
    featured: true,
    slug: "riverfront-office-complex",
    scope: "Ground-up commercial construction",
    gallery: [photos.aerial, photos.steelFrame, photos.planning],
    narrative:
      "Designed and delivered as a modern workplace destination, the project required careful coordination across design, procurement, field execution, and closeout.",
  },
  {
    id: "northside-medical",
    name: "Northside Medical Center",
    type: "Healthcare",
    location: "Dallas, TX",
    status: "Completed",
    image: photos.steelFrame,
    description:
      "Hospital wing expansion requiring phased construction, safety compliance, and occupied-facility coordination.",
    featured: true,
    slug: "northside-medical-center",
  },
  {
    id: "oakwood-residential",
    name: "Oakwood Residential",
    type: "Residential",
    location: "Houston, TX",
    status: "Completed",
    image: photos.crane,
    description:
      "Multifamily residential development with structured scheduling and quality-focused field execution.",
    featured: true,
    slug: "oakwood-residential",
  },
];

export const featuredStoryProjectId = "riverfront-office";

/** Demo team — replace with CMS Team module data. */
export const teamMembers: TeamMember[] = [
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    role: "President",
    bio: "Leads company strategy, client relationships, and project delivery standards across all market sectors.",
    image: photos.collaboration,
  },
  {
    id: "jordan-lee",
    name: "Jordan Lee",
    role: "Project Executive",
    bio: "Oversees complex commercial projects from preconstruction through closeout with a focus on accountability.",
    image: photos.planning,
  },
  {
    id: "michael-carter",
    name: "Michael Carter",
    role: "Senior Superintendent",
    bio: "Brings decades of field leadership to schedule execution, safety culture, and quality control.",
    image: photos.superintendent,
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    role: "Project Manager",
    bio: "Coordinates project teams, subcontractors, and documentation to keep work moving with clarity.",
    image: photos.safety,
  },
];

/** Demo testimonials — replace with CMS Testimonials data. */
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Strong communication, disciplined execution, and a team that stayed focused from start to finish.",
    name: "David Chen",
    company: "Riverside Development Partners",
    project: "Riverfront Office Complex",
  },
  {
    id: "testimonial-2",
    quote:
      "They understood the complexity of working in an occupied healthcare environment and delivered with care.",
    name: "Maria Gonzalez",
    company: "Northside Health System",
    project: "Northside Medical Center",
  },
];

/** Demo safety metrics — replace with CMS Safety module data. */
export const safetyMetrics: SafetyMetric[] = [
  { id: "trir", label: "TRIR", value: "0.82", note: "Sample data" },
  { id: "training", label: "Safety Training", value: "96%", note: "Sample data" },
  { id: "inspections", label: "Inspections", value: "142", note: "YTD · sample" },
  { id: "toolbox", label: "Toolbox Talks", value: "318", note: "YTD · sample" },
];

export const processStepIds = [
  "preconstruction",
  "procurement",
  "construction",
  "safety-quality",
  "closeout",
] as const;

export const processSteps: ProcessStep[] = processStepIds.map((id, i) => ({
  id,
  number: String(i + 1).padStart(2, "0"),
}));

/** Demo service area cities — replace with CMS-configured locations. */
export const serviceAreaCities = ["Austin", "Dallas", "Houston", "San Antonio"] as const;

/** Demo about content — replace with CMS About page data. */
export const aboutContent: AboutContent = {
  story:
    "Summit Construction Group was founded on a simple belief: quality construction requires experienced people, clear communication, and disciplined execution. From our earliest projects to today's most complex builds, that commitment has guided every decision we make.",
  mission:
    "Deliver construction projects with integrity, accountability, and a relentless focus on safety and quality — building lasting relationships with the clients and communities we serve.",
  values: [
    {
      id: "integrity",
      title: "Integrity",
      description: "We do what we say and stand behind our work on every project.",
    },
    {
      id: "safety",
      title: "Safety First",
      description: "Every person on our sites goes home safely — non-negotiable.",
    },
    {
      id: "quality",
      title: "Quality",
      description: "Disciplined processes and attention to detail in every trade.",
    },
    {
      id: "partnership",
      title: "Partnership",
      description: "Collaboration with owners, designers, and trade partners from day one.",
    },
  ],
};

/**
 * Demo certifications — replace with CMS Certifications data.
 * Demo placeholder content only; not real credentials.
 */
export const certifications: Certification[] = [
  {
    id: "osha-demo",
    name: "OSHA Safety Program",
    issuer: "Demo · Sample Credential",
    description: "Placeholder for tenant safety program certification.",
  },
  {
    id: "quality-demo",
    name: "Quality Management",
    issuer: "Demo · Sample Credential",
    description: "Placeholder for quality management system credential.",
  },
  {
    id: "contractor-demo",
    name: "Licensed General Contractor",
    issuer: "Demo · Sample Credential",
    description: "Placeholder for state licensing and registration.",
  },
];

export function getProjectBySlug(slug: string, allProjects: Project[] = projects): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getProjectTypes(allProjects: Project[] = projects): string[] {
  return Array.from(new Set(allProjects.map((p) => p.type)));
}

export function getFeaturedProjects(allProjects: Project[] = projects): Project[] {
  const featured = allProjects.filter((p) => p.featured);
  return featured.length > 0 ? featured.slice(0, 3) : allProjects.slice(0, 3);
}

export function getFeaturedStoryProject(allProjects: Project[] = projects): Project | undefined {
  return allProjects.find((p) => p.id === featuredStoryProjectId) ?? allProjects[0];
}
