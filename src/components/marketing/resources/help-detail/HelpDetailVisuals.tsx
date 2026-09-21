import { AxisLine, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import type { HelpDocCategoryId } from "@/lib/marketing/resources/types";

type Props = { className?: string };

export function HelpDocHeroKnowledgeAbstract({ className = "" }: Props) {
  return (
    <div
      className={`rounded-sm border border-brand-line/80 bg-gradient-to-br from-[#FAFBFD] via-white to-[#EEF4FA] px-3 py-4 sm:px-4 sm:py-5 ${className}`}
      data-design-layer="HelpDocHeroKnowledgeAbstract"
      data-abstract="help-hero"
    >
      <svg className="mx-auto block h-auto w-full max-w-[300px]" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        <Eyebrow x={12} y={16} text="PRODUCT KNOWLEDGE" />
        <UiBlock x={96} y={32} w={108} h={22} label="KNOWLEDGE" emphasis />
        <AxisLine x1={150} y1={54} x2={150} y2={176} ambient />
        <ArrowDown x={150} y={58} />
        <Node cx={150} cy={72} active />
        <UiBlock x={102} y={76} w={96} h={20} label="PRODUCT AREA" />
        <ArrowDown x={150} y={94} />
        <Node cx={150} cy={108} />
        <UiBlock x={108} y={112} w={84} h={20} label="WORKFLOW" />
        <ArrowDown x={150} y={130} />
        <Node cx={150} cy={144} active />
        <UiBlock x={114} y={148} w={72} h={20} label="ACTION" />
        <ArrowDown x={150} y={166} />
        <UiBlock x={102} y={170} w={96} h={22} label="OUTCOME" emphasis />
      </svg>
    </div>
  );
}

const CATEGORY_WORKFLOW: Partial<Record<HelpDocCategoryId, string[]>> = {
  "getting-started": ["WORKSPACE", "PROJECT", "CHECKLIST"],
  projects: ["WORKSPACE", "PROJECT", "DOCUMENTS", "SCHEDULE"],
  financials: ["JOB COST", "BILLING", "REPORTING"],
  "field-operations": ["DAILY LOG", "FIELD", "HANDOFF"],
  account: ["USERS", "ROLES", "SECURITY"],
};

export function HelpDocSectionWorkflowAbstract({
  categoryId,
  className = "",
}: {
  categoryId: HelpDocCategoryId;
  className?: string;
}) {
  const labels = CATEGORY_WORKFLOW[categoryId] ?? ["CONTEXT", "WORKFLOW", "ACTION"];
  const ys = [24, 54, 84, 114];
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="HelpDocSectionWorkflowAbstract"
      data-abstract="help-section"
      aria-hidden="true"
    >
      <svg className="block h-auto w-full max-w-[180px]" viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={90} y1={12} x2={90} y2={128} ambient quiet />
        {labels.slice(0, 4).map((label, i) => {
          const y = ys[i] ?? 24 + i * 30;
          const short = label.length > 12 ? `${label.slice(0, 10)}…` : label;
          return (
            <g key={`${label}-${i}`}>
              <Node cx={90} cy={y} active={i === 0 || i === labels.length - 1} />
              <UiBlock x={28} y={y + 4} w={124} h={18} label={short} />
              {i < labels.length - 1 ? <ArrowDown x={90} y={y + 22} /> : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function HelpDocRelatedNetworkAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="HelpDocRelatedNetworkAbstract"
      data-abstract="help-related"
      aria-hidden="true"
    >
      <svg className="block h-auto w-full max-w-[160px]" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={44} y={8} w={72} h={20} label="DOCS" emphasis />
        <AxisLine x1={80} y1={28} x2={80} y2={100} ambient quiet />
        <Node cx={80} cy={44} active />
        <Node cx={40} cy={72} />
        <Node cx={120} cy={72} />
        <AxisLine x1={40} y1={72} x2={80} y2={44} ambient quiet />
        <AxisLine x1={120} y1={72} x2={80} y2={44} ambient quiet />
        <UiBlock x={16} y={76} w={48} h={16} label="AREA" />
        <UiBlock x={96} y={76} w={48} h={16} label="TOPIC" />
      </svg>
    </div>
  );
}
