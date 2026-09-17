import type { IntegrationRecord } from "./types";

export type IntegrationDetailVisibility = {
  showHowItWorks: boolean;
  showDataExchanged: boolean;
  showBenefits: boolean;
  showRequirements: boolean;
  showCapabilities: boolean;
  showWorkflows: boolean;
  showTechnicalNotes: boolean;
  showCapabilitiesBlock: boolean;
  showLimitations: boolean;
  showDocumentation: boolean;
  showAdditional: boolean;
};

export function getIntegrationDetailVisibility(item: IntegrationRecord): IntegrationDetailVisibility {
  const d = item.detail;

  const how = d?.howItWorks;
  const showHowItWorks = Boolean(
    how?.directionLabel?.trim() ||
      (how?.layers && how.layers.length > 0) ||
      (how?.steps && how.steps.length > 0),
  );

  const showDataExchanged = Boolean(
    d?.dataExchangeSummary?.trim() ||
      (d?.dataExchanged && d.dataExchanged.length > 0) ||
      (d?.dataExchangedGroups && d.dataExchangedGroups.length > 0),
  );

  const showBenefits = Boolean(d?.benefits && d.benefits.length > 0);
  const showRequirements = Boolean((d?.requirements && d.requirements.length > 0) || d?.requirementsNote?.trim());
  const showCapabilities = Boolean(d?.capabilities && d.capabilities.length > 0);
  const showWorkflows = Boolean(d?.workflows && d.workflows.length > 0);
  const showTechnicalNotes = Boolean(d?.technicalNotes && d.technicalNotes.length > 0);
  const showLimitations = Boolean(d?.limitations && d.limitations.length > 0);
  const showDocumentation = Boolean(d?.documentationLinks && d.documentationLinks.length > 0);
  const showAdditional = Boolean(d?.additionalSections && d.additionalSections.length > 0);

  const showCapabilitiesBlock = showCapabilities || showWorkflows || showTechnicalNotes;

  return {
    showHowItWorks,
    showDataExchanged,
    showBenefits,
    showRequirements,
    showCapabilities,
    showWorkflows,
    showTechnicalNotes,
    showCapabilitiesBlock,
    showLimitations,
    showDocumentation,
    showAdditional,
  };
}
