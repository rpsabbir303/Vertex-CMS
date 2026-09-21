import { ResourcePageAtmosphere } from "./ResourcePageAtmosphere";

type Props = {
  className?: string;
  /** @deprecated Grid removed — atmosphere only */
  softenCenter?: boolean;
};

/** @deprecated Use ResourceAbstractSystem / ResourcePageAtmosphere */
export function ResourcePageAbstract({ className = "" }: Props) {
  return <ResourcePageAtmosphere className={className} />;
}
