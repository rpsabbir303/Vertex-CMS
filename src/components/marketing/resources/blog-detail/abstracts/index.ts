export { ResourceAbstractSystem, ResourcePageAtmosphere, ResourceOuterPageAbstract, ResourceHeroAmbient, ResourceHeroMediaBridge, ResourceRailAmbient } from "./ResourceAbstractSystem";
export { ResourcePageAbstract } from "./ResourcePageAbstract";
export { HeroWorkflowAbstract, HeroWorkflowAbstractMobile } from "./HeroWorkflowAbstract";
export { MediaContextAbstract } from "./MediaContextAbstract";
export {
  ArticleWorkflowAbstract,
  ArticleGutterAbstract,
  HandoffWorkflowAbstract,
  PlatformConvergenceAbstract,
  articleWorkflowForIndex,
  type ArticleWorkflowVariant,
} from "./ArticleWorkflowAbstract";
export { RelatedKnowledgeAbstract } from "./RelatedKnowledgeAbstract";
export { ResourceCTAAbstract } from "./ResourceCTAAbstract";
export { ResourceCtaAmbient } from "./ResourceCtaAmbient";
export { ResourceRelatedAmbient } from "./ResourceRelatedAmbient";
export { AxisContinuationMark } from "./primitives";
export { ABSTRACT } from "./tokens";

/** @deprecated aliases for transitional imports */
export { MediaContextAbstract as MediaWorkflowAbstract } from "./MediaContextAbstract";
export { ResourceCTAAbstract as FinalCTAAbstract } from "./ResourceCTAAbstract";
export {
  ArticleWorkflowAbstract as SectionWorkflowAbstract,
  articleWorkflowForIndex as sectionAbstractForIndex,
} from "./ArticleWorkflowAbstract";
export type { ArticleWorkflowVariant as SectionAbstractVariant } from "./ArticleWorkflowAbstract";
