import type { CareerJob } from "@/lib/marketing/careers/content";

import type { ProfessionalExperienceFormValues } from "./professionalExperienceTypes";

export type JobApplicationFormValues = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedInUrl: string;
  portfolioUrl: string;
  coverLetter: string;
  privacyConsent: boolean;
  vacancyTermsAck: boolean;
};

export type ResumeFileMeta = {
  name: string;
  size: number;
  type: string;
  lastModified: number;
};

export type JobApplicationDraft = {
  values: JobApplicationFormValues;
  /** Populated when professional experience collection is enabled and approved. */
  professionalExperience?: ProfessionalExperienceFormValues;
  resume: ResumeFileMeta | null;
  updatedAt: number;
};

export type ApplicationSubmitErrorCode =
  | "validation"
  | "vacancy_unavailable"
  | "duplicate"
  | "session_expired"
  | "resume_invalid"
  | "network"
  | "unknown";

export type ApplicationSubmitResult =
  | {
      ok: true;
      referenceId: string;
      submittedAt: number;
      job: Pick<CareerJob, "slug" | "title" | "location">;
    }
  | {
      ok: false;
      errorCode: ApplicationSubmitErrorCode;
      message: string;
      fieldErrors?: Partial<Record<keyof JobApplicationFormValues | "resume", string>>;
    };

export type ApplicationConfirmationPayload = {
  referenceId: string;
  submittedAt: number;
  jobSlug: string;
  jobTitle: string;
  jobLocation?: string;
  applicantEmail: string;
};
