import type { JobApplicationFormValues } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeApplicationEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateJobApplication(values: JobApplicationFormValues): Partial<Record<keyof JobApplicationFormValues | "resume", string>> {
  const errors: Partial<Record<keyof JobApplicationFormValues | "resume", string>> = {};

  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(normalizeApplicationEmail(values.email))) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Enter a phone number.";
  if (!values.location.trim()) errors.location = "Enter your location.";
  if (values.linkedInUrl.trim() && !isValidUrl(values.linkedInUrl.trim())) {
    errors.linkedInUrl = "Enter a valid LinkedIn URL (https://…).";
  }
  if (values.portfolioUrl.trim() && !isValidUrl(values.portfolioUrl.trim())) {
    errors.portfolioUrl = "Enter a valid portfolio URL (https://…).";
  }
  if (!values.privacyConsent) errors.privacyConsent = "Privacy consent is required to apply.";
  if (!values.vacancyTermsAck) errors.vacancyTermsAck = "Confirm you are applying for this vacancy.";

  return errors;
}
