import type { LegalSection } from "../content";

/** Reusable demo disclaimer paragraph for section intros where helpful. */
export const DEMO_SAMPLE_NOTE =
  "This section contains sample language for layout review only. It does not describe actual contractual, privacy, or product obligations.";

export function demoSection(
  id: string,
  title: string,
  body: string[],
  extra?: Pick<LegalSection, "lists" | "tables" | "subsections">
): LegalSection {
  return { id, title, body, ...extra };
}
