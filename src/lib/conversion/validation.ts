import { isValidEmail, validateRequired } from "@/lib/auth/validation";
import type {
  ContactInquiryInput,
  ConversionResult,
  DemoRequestInput,
  QuoteRequestInput,
} from "./types";

export function validateDemoRequest(input: DemoRequestInput): ConversionResult<void> {
  const fieldErrors: Record<string, string> = {};
  const nameErr = validateRequired(input.name, "Full name");
  const companyErr = validateRequired(input.company, "Company");
  const roleErr = validateRequired(input.role, "Role");
  const sizeErr = validateRequired(input.companySize, "Company size");
  const typeErr = validateRequired(input.projectType, "Project type");
  if (nameErr) fieldErrors.name = nameErr;
  if (companyErr) fieldErrors.company = companyErr;
  if (roleErr) fieldErrors.role = roleErr;
  if (sizeErr) fieldErrors.companySize = sizeErr;
  if (typeErr) fieldErrors.projectType = typeErr;
  if (!isValidEmail(input.email)) fieldErrors.email = "Please enter a valid work email.";
  if (Object.keys(fieldErrors).length) {
    return { ok: false, error: "Please correct the highlighted fields.", fieldErrors };
  }
  return { ok: true, data: undefined };
}

export function validateContactInquiry(input: ContactInquiryInput): ConversionResult<void> {
  const fieldErrors: Record<string, string> = {};
  const nameErr = validateRequired(input.name, "Full name");
  const typeErr = validateRequired(input.inquiryType, "Inquiry type");
  const messageErr = validateRequired(input.message, "Message");
  if (nameErr) fieldErrors.name = nameErr;
  if (typeErr) fieldErrors.inquiryType = typeErr;
  if (messageErr) fieldErrors.message = messageErr;
  if (input.message.trim().length > 0 && input.message.trim().length < 10) {
    fieldErrors.message = "Please provide a bit more detail (at least 10 characters).";
  }
  if (!isValidEmail(input.email)) fieldErrors.email = "Please enter a valid work email.";
  if (Object.keys(fieldErrors).length) {
    return { ok: false, error: "Please correct the highlighted fields.", fieldErrors };
  }
  return { ok: true, data: undefined };
}

export function validateQuoteRequest(input: QuoteRequestInput): ConversionResult<void> {
  const fieldErrors: Record<string, string> = {};
  const nameErr = validateRequired(input.name, "Full name");
  const companyErr = validateRequired(input.company, "Company");
  const roleErr = validateRequired(input.role, "Role");
  const orgErr = validateRequired(input.organizationSize, "Organization size");
  const usersErr = validateRequired(input.estimatedUsers, "Estimated users");
  const volumeErr = validateRequired(input.projectVolume, "Project volume");
  const ssoErr = validateRequired(input.ssoNeeds, "SSO requirement");
  const timingErr = validateRequired(input.implementationTiming, "Implementation timing");
  if (nameErr) fieldErrors.name = nameErr;
  if (companyErr) fieldErrors.company = companyErr;
  if (roleErr) fieldErrors.role = roleErr;
  if (orgErr) fieldErrors.organizationSize = orgErr;
  if (usersErr) fieldErrors.estimatedUsers = usersErr;
  if (volumeErr) fieldErrors.projectVolume = volumeErr;
  if (ssoErr) fieldErrors.ssoNeeds = ssoErr;
  if (timingErr) fieldErrors.implementationTiming = timingErr;
  if (!isValidEmail(input.email)) fieldErrors.email = "Please enter a valid work email.";
  if (Object.keys(fieldErrors).length) {
    return { ok: false, error: "Please correct the highlighted fields.", fieldErrors };
  }
  return { ok: true, data: undefined };
}
