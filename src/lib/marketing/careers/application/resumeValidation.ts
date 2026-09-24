import { careersApplicationConfig } from "./config";

export type ResumeValidationError =
  | "unsupported_type"
  | "too_large"
  | "empty"
  | "corrupt"
  | "scan_failed";

export type ResumeValidationResult =
  | { ok: true }
  | { ok: false; code: ResumeValidationError };

const MIME_ALLOW = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function extensionOf(name: string): string {
  const parts = name.split(".");
  return parts.length > 1 ? (parts.pop()?.toLowerCase() ?? "") : "";
}

export function validateResumeFile(file: File): ResumeValidationResult {
  if (!file.size) return { ok: false, code: "empty" };

  const ext = extensionOf(file.name);
  if (!careersApplicationConfig.supportedResumeExtensions.includes(ext as (typeof careersApplicationConfig.supportedResumeExtensions)[number])) {
    return { ok: false, code: "unsupported_type" };
  }

  if (file.type && !MIME_ALLOW.has(file.type) && file.type !== "application/octet-stream") {
    return { ok: false, code: "unsupported_type" };
  }

  const max = careersApplicationConfig.resumeMaxBytes;
  if (typeof max === "number" && Number.isFinite(max) && file.size > max) {
    return { ok: false, code: "too_large" };
  }

  return { ok: true };
}

/** Lightweight header check — not a full parser. */
export async function verifyResumeNotCorrupt(file: File): Promise<ResumeValidationResult> {
  const ext = extensionOf(file.name);
  const buf = await file.slice(0, 8).arrayBuffer();
  const bytes = new Uint8Array(buf);

  if (ext === "pdf") {
    const header = String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3], bytes[4]);
    if (!header.startsWith("%PDF")) return { ok: false, code: "corrupt" };
    return { ok: true };
  }

  if (ext === "docx") {
    if (bytes[0] !== 0x50 || bytes[1] !== 0x4b) return { ok: false, code: "corrupt" };
    return { ok: true };
  }

  if (ext === "doc") {
    if (bytes[0] !== 0xd0 || bytes[1] !== 0xcf) return { ok: false, code: "corrupt" };
    return { ok: true };
  }

  return { ok: true };
}
