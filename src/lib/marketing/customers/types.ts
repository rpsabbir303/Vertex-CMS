/** Customer proof content — populate from Marketing Site CMS when approved. */



/** Hero ecosystem map — demo sample references only (not verified customers). */
export type HeroEcosystemCustomer = {
  id: string;
  line1: string;
  line2?: string;
  segment?: string;
  isDemo?: boolean;
};

export type CustomerLogo = {

  id: string;

  name: string;

  src?: string;

  alt: string;

  isDemo?: boolean;

  showName?: boolean;

  featured?: boolean;

  /** Text wordmark lines for demo logos (no third-party marks). */

  wordmarkLines?: [string, string?];

};



export type CaseStudyCapability = {
  name: string;
  context: string;
  href?: string;
};

export type CaseStudyExploreLink = {
  label: string;
  href: string;
};

export type CaseStudyNarrativeStage = {
  step: string;
  title: string;
  description: string;
};

export type CaseStudyWorkflowStep = {
  label: string;
};

export type CaseStudyRecord = {
  slug: string;
  customerName: string;
  contractorType: string;
  projectType?: string;
  headline: string;
  summary: string;
  customerContext?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
  featured?: boolean;
  isDemo?: boolean;
  /** Editorial construction imagery — context only, not verified customer projects. */
  imageSrc?: string;
  imageAlt?: string;
  workflowSteps?: CaseStudyWorkflowStep[];
  capabilities?: CaseStudyCapability[];
  exploreLinks?: CaseStudyExploreLink[];
  narrativeStages?: CaseStudyNarrativeStage[];
};



export type CustomerTestimonialRecord = {

  id: string;

  quote: string;

  name: string;

  role: string;

  company: string;

  isDemo?: boolean;

  relatedMetricId?: string;

};



export type RoiMetricRecord = {

  id: string;

  label: string;

  value: string;

  context: string;

  customerName?: string;

  relatedTestimonialId?: string;

  isDemo?: boolean;

  demoDisclaimer?: string;

};


