import {
  hasMeaningfulDraftValues,
  presentationalApplicationValues,
  presentationalProfessionalExperience,
  presentationalResumeFile,
} from "./presentationalDefaults";
import { loadApplicationDraft } from "./applicationSession";
import type { JobApplicationFormValues, ResumeFileMeta } from "./types";
import {
  emptyProfessionalExperience,
  type ProfessionalExperienceFormValues,
} from "./professionalExperienceTypes";
import type { CareerJob } from "@/lib/marketing/careers/content";

export type InitialResumeUploadState = {
  status: "empty" | "uploading" | "scanning" | "valid" | "error";
  progress: number;
  file: ResumeFileMeta | null;
};

const emptyValues: JobApplicationFormValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedInUrl: "",
  portfolioUrl: "",
  coverLetter: "",
  privacyConsent: false,
  vacancyTermsAck: false,
};

export type InitialApplicationBundle = {
  values: JobApplicationFormValues;
  professionalExperience: ProfessionalExperienceFormValues;
  resume: InitialResumeUploadState;
};

function presentationalBundle(): InitialApplicationBundle {
  return {
    values: { ...emptyValues, ...presentationalApplicationValues },
    professionalExperience: { ...emptyProfessionalExperience, ...presentationalProfessionalExperience },
    resume: { status: "valid", progress: 100, file: presentationalResumeFile },
  };
}

function bundleFromDraft(
  values: JobApplicationFormValues,
  professionalExperience?: ProfessionalExperienceFormValues,
  resume?: ResumeFileMeta | null,
): InitialApplicationBundle {
  return {
    values: { ...emptyValues, ...values },
    professionalExperience: professionalExperience
      ? { ...emptyProfessionalExperience, ...professionalExperience }
      : emptyProfessionalExperience,
    resume: resume
      ? { status: "valid", progress: 100, file: resume }
      : { status: "empty", progress: 0, file: null },
  };
}

/** Synchronous initial state — avoids post-mount flip for importers and direct URL loads. */
export function resolveInitialApplicationState(job: CareerJob, readBrowserDraft: boolean): InitialApplicationBundle {
  if (readBrowserDraft && typeof window !== "undefined") {
    const draft = loadApplicationDraft(job.slug);
    if (hasMeaningfulDraftValues(draft?.values)) {
      return bundleFromDraft(draft!.values, draft?.professionalExperience, draft?.resume ?? null);
    }
  }

  if (job.demoContent) {
    return presentationalBundle();
  }

  return {
    values: { ...emptyValues },
    professionalExperience: { ...emptyProfessionalExperience },
    resume: { status: "empty", progress: 0, file: null },
  };
}

export { emptyValues };
