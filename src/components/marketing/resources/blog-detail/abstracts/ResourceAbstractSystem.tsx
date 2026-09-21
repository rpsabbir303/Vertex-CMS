import { ResourcePageAtmosphere } from "./ResourcePageAtmosphere";
import { ResourceOuterPageAbstract } from "./ResourceOuterPageAbstract";

type Props = {
  className?: string;
};

/**
 * ResourceAbstractSystem — page-wide ambient layer (atmosphere + outer margin fragments).
 * Reusable across Blog / Guide / Webinar / Template detail pages.
 */
export function ResourceAbstractSystem({ className = "" }: Props) {
  return (
    <>
      <ResourcePageAtmosphere className={className} />
      <ResourceOuterPageAbstract />
    </>
  );
}

export { ResourcePageAtmosphere } from "./ResourcePageAtmosphere";
export { ResourceOuterPageAbstract } from "./ResourceOuterPageAbstract";
export { ResourceHeroAmbient } from "./ResourceHeroAmbient";
export { ResourceHeroMediaBridge } from "./ResourceHeroMediaBridge";
export { ResourceRailAmbient } from "./ResourceRailAmbient";
export { ResourceRelatedAmbient } from "./ResourceRelatedAmbient";
export { ResourceCtaAmbient } from "./ResourceCtaAmbient";
