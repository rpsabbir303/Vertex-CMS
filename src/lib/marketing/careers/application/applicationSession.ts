import type { ApplicationConfirmationPayload, JobApplicationDraft } from "./types";

const CONFIRMATION_KEY = "vb-career-application-confirmation";
const DUPLICATE_PREFIX = "vb-career-application-submitted:";
const DRAFT_PREFIX = "vb-career-application-draft:";

function canUseSessionStorage(): boolean {
  return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
}

export function draftStorageKey(jobSlug: string): string {
  return `${DRAFT_PREFIX}${jobSlug}`;
}

export function saveApplicationDraft(jobSlug: string, draft: JobApplicationDraft): void {
  if (!canUseSessionStorage()) return;
  try {
    sessionStorage.setItem(draftStorageKey(jobSlug), JSON.stringify(draft));
  } catch {
    /* quota / private mode — ignore */
  }
}

export function loadApplicationDraft(jobSlug: string): JobApplicationDraft | null {
  if (!canUseSessionStorage()) return null;
  try {
    const raw = sessionStorage.getItem(draftStorageKey(jobSlug));
    if (!raw) return null;
    return JSON.parse(raw) as JobApplicationDraft;
  } catch {
    return null;
  }
}

export function clearApplicationDraft(jobSlug: string): void {
  if (!canUseSessionStorage()) return;
  sessionStorage.removeItem(draftStorageKey(jobSlug));
}

export function setApplicationConfirmation(payload: ApplicationConfirmationPayload): void {
  if (!canUseSessionStorage()) return;
  sessionStorage.setItem(CONFIRMATION_KEY, JSON.stringify(payload));
}

export function getApplicationConfirmation(): ApplicationConfirmationPayload | null {
  if (!canUseSessionStorage()) return null;
  try {
    const raw = sessionStorage.getItem(CONFIRMATION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ApplicationConfirmationPayload;
  } catch {
    return null;
  }
}

export function clearApplicationConfirmation(): void {
  if (!canUseSessionStorage()) return;
  sessionStorage.removeItem(CONFIRMATION_KEY);
}

export function duplicateStorageKey(jobId: string, normalizedEmail: string): string {
  return `${DUPLICATE_PREFIX}${jobId}:${normalizedEmail}`;
}

export function hasDuplicateApplication(jobId: string, normalizedEmail: string): boolean {
  if (!canUseSessionStorage()) return false;
  return sessionStorage.getItem(duplicateStorageKey(jobId, normalizedEmail)) === "1";
}

export function markDuplicateApplication(jobId: string, normalizedEmail: string): void {
  if (!canUseSessionStorage()) return;
  sessionStorage.setItem(duplicateStorageKey(jobId, normalizedEmail), "1");
}
