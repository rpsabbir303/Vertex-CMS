/**
 * Extension types for professional experience — not collected until CMS/API approves fields.
 * Wire `ProfessionalExperienceSection` when `careersApplicationConfig.enableProfessionalExperienceFields` is true.
 */

export type ProfessionalExperienceEntry = {
  role: string;
  company: string;
  /** Open decision — free text or structured range when product defines schema. */
  duration?: string;
};

export type ProfessionalExperienceFormValues = {
  currentRole: string;
  currentCompany: string;
  yearsOfExperience: string;
  previousEntries: ProfessionalExperienceEntry[];
};

export const emptyProfessionalExperience: ProfessionalExperienceFormValues = {
  currentRole: "",
  currentCompany: "",
  yearsOfExperience: "",
  previousEntries: [],
};
