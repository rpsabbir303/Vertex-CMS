import type { ResumeFileMeta } from "./types";

export function formatResumeFileSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "";
  const mb = bytes / (1024 * 1024);
  if (mb >= 0.95) return `${mb.toFixed(1)} MB`;
  const kb = bytes / 1024;
  return `${Math.round(kb)} KB`;
}

export function formatResumeTypeLabel(file: ResumeFileMeta): string {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf") || file.type === "application/pdf") return "PDF";
  if (name.endsWith(".docx")) return "DOCX";
  if (name.endsWith(".doc")) return "DOC";
  return "File";
}

export function formatResumeMetaLine(file: ResumeFileMeta): string {
  const type = formatResumeTypeLabel(file);
  const size = formatResumeFileSize(file.size);
  return size ? `${type} · ${size}` : type;
}
