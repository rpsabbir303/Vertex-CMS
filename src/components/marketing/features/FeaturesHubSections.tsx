import { HUB_MODULES } from "@/lib/marketing/features/hub";
import { AiInteraction } from "./ecosystem/AiInteraction";
import { FieldOfficeBridge } from "./ecosystem/FieldOfficeBridge";
import { FinancialControlCenter } from "./ecosystem/FinancialControlCenter";
import { GrowthPipeline } from "./ecosystem/GrowthPipeline";
import { ProjectCommandCenter } from "./ecosystem/ProjectCommandCenter";
import { WorkforceControl } from "./ecosystem/WorkforceControl";

export function FeaturesHubSections() {
  return (
    <>
      {HUB_MODULES.map((section) => {
        switch (section.id) {
          case "project-management":
            return <ProjectCommandCenter key={section.id} section={section} />;
          case "financial-management":
            return <FinancialControlCenter key={section.id} section={section} />;
          case "field-operations":
            return <FieldOfficeBridge key={section.id} section={section} />;
          case "compliance":
            return <WorkforceControl key={section.id} section={section} />;
          case "ai":
            return <AiInteraction key={section.id} section={section} />;
          case "growth":
            return <GrowthPipeline key={section.id} section={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
