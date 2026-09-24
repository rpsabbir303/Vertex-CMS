import { careersApplicationConfig } from "@/lib/marketing/careers/application/config";
import { careerApplyInputClass } from "@/lib/marketing/careers/application/formStyles";
import type { ProfessionalExperienceFormValues } from "@/lib/marketing/careers/application/professionalExperienceTypes";

import { ApplicationFormField } from "./ApplicationFormField";
import { JobApplicationSection } from "./JobApplicationSection";

type FieldCopy = {
  currentRole: string;
  currentCompany: string;
  yearsOfExperience: string;
  previousRole: string;
  previousCompany: string;
  intro?: string;
};

type Props = {
  sectionId: string;
  title: string;
  copy: FieldCopy;
  values: ProfessionalExperienceFormValues;
  onChange: (values: ProfessionalExperienceFormValues) => void;
};

export function ProfessionalExperienceSection({ sectionId, title, copy, values, onChange }: Props) {
  if (!careersApplicationConfig.enableProfessionalExperienceFields) {
    return null;
  }

  const previous = values.previousEntries[0] ?? { role: "", company: "" };

  const setPrevious = (patch: Partial<{ role: string; company: string }>) => {
    onChange({
      ...values,
      previousEntries: [{ ...previous, ...patch }],
    });
  };

  return (
    <JobApplicationSection id={sectionId} title={title} description={copy.intro}>
      <ApplicationFormField id="apply-current-role" label={copy.currentRole}>
        <input
          id="apply-current-role"
          className={careerApplyInputClass()}
          value={values.currentRole}
          onChange={(e) => onChange({ ...values, currentRole: e.target.value })}
          autoComplete="organization-title"
        />
      </ApplicationFormField>
      <ApplicationFormField id="apply-current-company" label={copy.currentCompany}>
        <input
          id="apply-current-company"
          className={careerApplyInputClass()}
          value={values.currentCompany}
          onChange={(e) => onChange({ ...values, currentCompany: e.target.value })}
          autoComplete="organization"
        />
      </ApplicationFormField>
      <ApplicationFormField id="apply-years-exp" label={copy.yearsOfExperience}>
        <input
          id="apply-years-exp"
          className={careerApplyInputClass()}
          value={values.yearsOfExperience}
          onChange={(e) => onChange({ ...values, yearsOfExperience: e.target.value })}
        />
      </ApplicationFormField>
      <div className="grid gap-6 border-t border-brand-navy/8 pt-6 sm:grid-cols-2">
        <ApplicationFormField id="apply-previous-role" label={copy.previousRole}>
          <input
            id="apply-previous-role"
            className={careerApplyInputClass()}
            value={previous.role}
            onChange={(e) => setPrevious({ role: e.target.value })}
          />
        </ApplicationFormField>
        <ApplicationFormField id="apply-previous-company" label={copy.previousCompany}>
          <input
            id="apply-previous-company"
            className={careerApplyInputClass()}
            value={previous.company}
            onChange={(e) => setPrevious({ company: e.target.value })}
          />
        </ApplicationFormField>
      </div>
    </JobApplicationSection>
  );
}
