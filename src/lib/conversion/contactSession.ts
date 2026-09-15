import type { ContactInquiryType } from "./types";

const CONTACT_SUCCESS_KEY = "vertex_contact_success_v1";

export type ContactSuccessPayload = {
  email: string;
  company?: string;
  inquiryType: ContactInquiryType;
};

export function setContactSuccess(payload: ContactSuccessPayload) {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(CONTACT_SUCCESS_KEY, JSON.stringify(payload));
}

export function getContactSuccess(): ContactSuccessPayload | null {
  if (typeof sessionStorage === "undefined") return null;
  const raw = sessionStorage.getItem(CONTACT_SUCCESS_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ContactSuccessPayload;
    if (!parsed.email || !parsed.inquiryType) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearContactSuccess() {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(CONTACT_SUCCESS_KEY);
}
