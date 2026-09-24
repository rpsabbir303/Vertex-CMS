export type ApplicationStepParam = "information" | "review";

export type ApplicationViewStep = "application" | "review";

/** Query param is the source of truth for HTML-to-Figma and direct loads. */
export function parseApplicationStepParam(raw: string | null | undefined): ApplicationStepParam {
  if (raw === "review") return "review";
  return "information";
}

export function applicationStepParamToView(step: ApplicationStepParam): ApplicationViewStep {
  return step === "review" ? "review" : "application";
}

export function applicationStepQuery(step: ApplicationStepParam): string {
  return step === "review" ? "step=review" : "step=information";
}

export function careerApplyUrlWithStep(applyPath: string, step: ApplicationStepParam): string {
  return `${applyPath}?${applicationStepQuery(step)}`;
}
