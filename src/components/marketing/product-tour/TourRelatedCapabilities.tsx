import {
  getAiTourCapabilities,
  getFieldTourCapabilities,
  getFinancialTourCapabilities,
  getPlatformTourCapabilities,
  type TourWorkflowId,
} from "@/lib/marketing/product-tour/featureLinks";

import { TourCapabilityAIPipeline } from "./compositions/tour-capability-nav/TourCapabilityAIPipeline";
import { TourCapabilityEditorialList } from "./compositions/tour-capability-nav/TourCapabilityEditorialList";
import { TourCapabilityFinancialRail } from "./compositions/tour-capability-nav/TourCapabilityFinancialRail";

type Props = {
  workflow: TourWorkflowId;
};

/** Contextual Product Tour → Feature Library navigation (one pattern per workflow). */
export function TourRelatedCapabilities({ workflow }: Props) {
  switch (workflow) {
    case "platform":
      return (
        <TourCapabilityEditorialList
          title="Related capabilities"
          titleId="tour-capabilities-platform"
          items={getPlatformTourCapabilities()}
          variant="platform"
        />
      );
    case "financial":
      return <TourCapabilityFinancialRail items={getFinancialTourCapabilities()} />;
    case "field":
      return (
        <TourCapabilityEditorialList
          title="Field capabilities"
          titleId="tour-capabilities-field"
          items={getFieldTourCapabilities()}
          variant="field"
        />
      );
    case "ai":
      return <TourCapabilityAIPipeline items={getAiTourCapabilities()} />;
    default:
      return null;
  }
}
