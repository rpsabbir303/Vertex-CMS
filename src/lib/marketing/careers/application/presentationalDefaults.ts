/**
 * Marketing-site presentational defaults for open roles flagged `demoContent`.
 * Not submitted to production APIs — used only to render a complete application preview.
 */

import type { JobApplicationFormValues, ResumeFileMeta } from "./types";
import type { ProfessionalExperienceFormValues } from "./professionalExperienceTypes";

export const presentationalApplicationValues: JobApplicationFormValues = {
  fullName: "Sarah Mitchell",
  email: "sarah.mitchell@example.com",
  phone: "+1 (415) 555-0187",
  location: "San Francisco, CA",
  linkedInUrl: "https://www.linkedin.com/in/sarah-mitchell",
  portfolioUrl: "https://sarahmitchell.design",
  coverLetter: `I'm excited to apply for the Senior Product Designer position at VertexBuild. Over the past seven years, I've designed B2B SaaS products focused on complex workflows, collaboration, and data-driven decision making.

In my current role, I lead product design from early discovery through prototyping, testing, and final implementation. I work closely with product managers and engineers to turn complex requirements into clear and scalable user experiences.

VertexBuild's approach to connecting project management, financial operations, field workflows, and intelligence is especially interesting to me. I would be excited to bring my experience in enterprise product design and design systems to the team.

Thank you for considering my application. I look forward to the opportunity to discuss how I could contribute to VertexBuild.`,
  privacyConsent: true,
  vacancyTermsAck: true,
};

export const presentationalProfessionalExperience: ProfessionalExperienceFormValues = {
  currentRole: "Senior Product Designer",
  currentCompany: "Northstar Digital",
  yearsOfExperience: "7 years",
  previousEntries: [
    {
      role: "Product Designer",
      company: "Atlas Software",
    },
  ],
};

/** ~2.4 MB */
export const presentationalResumeFile: ResumeFileMeta = {
  name: "Sarah_Mitchell_Resume.pdf",
  size: 2516582,
  type: "application/pdf",
  lastModified: Date.now(),
};

export function hasMeaningfulDraftValues(values: Partial<JobApplicationFormValues> | undefined): boolean {
  if (!values) return false;
  return Boolean(
    values.fullName?.trim() ||
      values.email?.trim() ||
      values.phone?.trim() ||
      values.location?.trim(),
  );
}
