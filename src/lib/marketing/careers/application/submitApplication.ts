import { getJobBySlug } from "@/lib/marketing/careers/content";
import type { CareerJob } from "@/lib/marketing/careers/content";

import {
  clearApplicationDraft,
  hasDuplicateApplication,
  markDuplicateApplication,
  setApplicationConfirmation,
} from "./applicationSession";
import type { ApplicationSubmitResult, JobApplicationFormValues, ResumeFileMeta } from "./types";
import { normalizeApplicationEmail, validateJobApplication } from "./validation";

export type SubmitApplicationInput = {
  jobSlug: string;
  values: JobApplicationFormValues;
  resume: ResumeFileMeta | null;
  resumeValidated: boolean;
};

function referenceId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `APP-${Date.now().toString(36).toUpperCase()}`;
}

/**
 * Submission boundary for recruitment applications.
 * Wire to CMS/API when backend is available — no invented endpoints.
 */
export async function submitJobApplication(input: SubmitApplicationInput): Promise<ApplicationSubmitResult> {
  const job = getJobBySlug(input.jobSlug);
  if (!job) {
    return {
      ok: false,
      errorCode: "vacancy_unavailable",
      message: "This vacancy is no longer available.",
    };
  }

  const fieldErrors = validateJobApplication(input.values);
  if (!input.resume || !input.resumeValidated) {
    fieldErrors.resume = fieldErrors.resume ?? "Upload a valid resume to continue.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      errorCode: "validation",
      message: "Review the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const email = normalizeApplicationEmail(input.values.email);
  if (hasDuplicateApplication(job.id, email)) {
    return {
      ok: false,
      errorCode: "duplicate",
      message: "An application for this vacancy already exists with this email address.",
    };
  }

  await new Promise((r) => setTimeout(r, 900));

  const recheck = getJobBySlug(input.jobSlug);
  if (!recheck) {
    return {
      ok: false,
      errorCode: "vacancy_unavailable",
      message: "This vacancy closed before your application could be submitted.",
    };
  }

  const submittedAt = Date.now();
  const ref = referenceId();

  markDuplicateApplication(job.id, email);
  setApplicationConfirmation({
    referenceId: ref,
    submittedAt,
    jobSlug: job.slug,
    jobTitle: job.title,
    jobLocation: job.location,
    applicantEmail: email,
  });
  clearApplicationDraft(job.slug);

  return {
    ok: true,
    referenceId: ref,
    submittedAt,
    job: { slug: job.slug, title: job.title, location: job.location },
  };
}

export function jobUnavailableMessage(job: CareerJob | null | undefined): string {
  if (!job) return "This position could not be found.";
  if (job.status === "closed") return "This vacancy is closed and no longer accepting applications.";
  if (job.status === "draft") return "This vacancy is not published.";
  return "This vacancy is not available for applications.";
}
