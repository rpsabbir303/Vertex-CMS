/**
 * Recruitment application configuration.
 * Open annexure decisions (file-size cap, cover-letter mode, retention) stay configurable here.
 */

export type CoverLetterInputMode = "textarea" | "upload";

export const careersApplicationConfig = {
  /** Annexure: optional max size — only enforced when configured. */
  resumeMaxBytes:
    typeof process.env.NEXT_PUBLIC_CAREERS_RESUME_MAX_BYTES === "string" &&
    process.env.NEXT_PUBLIC_CAREERS_RESUME_MAX_BYTES.trim() !== ""
      ? Number(process.env.NEXT_PUBLIC_CAREERS_RESUME_MAX_BYTES)
      : undefined,

  /** Open decision: textarea vs upload — default textarea; switch when product approves upload. */
  coverLetterInput: "textarea" as CoverLetterInputMode,

  supportedResumeExtensions: ["pdf", "doc", "docx"] as const,

  /**
   * Annexure does not define employment-history fields. Enable only when CMS/API model is approved.
   * @see professionalExperienceTypes.ts
   */
  /** Presentation-only experience block — optional fields, not required by UX-CA-01 validation. */
  enableProfessionalExperienceFields: true,
};
