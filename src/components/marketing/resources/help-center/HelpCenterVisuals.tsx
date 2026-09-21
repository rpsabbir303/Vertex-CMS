import { AxisLine, AxisPath, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import type { HelpDocCategoryId } from "@/lib/marketing/resources/types";

type Props = { className?: string };

const PREVIEW_LABELS: Partial<Record<HelpDocCategoryId, string[]>> = {
  "getting-started": ["SETUP", "WORKSPACE"],
  projects: ["DOCS", "SCHEDULE"],
  financials: ["JOB COST", "BILLING"],
  "field-operations": ["LOG", "FIELD"],
  account: ["ROLES", "AUTH"],
};

export function HelpDocPreviewMiniVisual({ categoryId }: { categoryId: HelpDocCategoryId }) {
  const labels = PREVIEW_LABELS[categoryId] ?? ["DOC", "TOPIC"];
  return (
    <svg className="mx-auto h-auto w-full max-w-[7.5rem]" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" fill="none">
      <UiBlock x={12} y={8} w={96} h={28} label={labels[0] ?? "DOC"} emphasis />
      <AxisLine x1={60} y1={36} x2={60} y2={52} ambient quiet />
      <Node cx={60} cy={56} active />
      <UiBlock x={24} y={62} w={72} h={24} label={labels[1] ?? "TOPIC"} />
      <AxisPath d="M60 86 H36 M60 86 H84" ambient quiet />
      <circle cx="36" cy="86" r="2" fill="#FF6A00" opacity="0.8" />
      <circle cx="84" cy="86" r="2" fill="#3B6F9A" opacity="0.45" />
    </svg>
  );
}
/** Documentation-focused hero visual — not a duplicate knowledge-area map. */
export function HelpCenterHeroDocumentationVisual({ className = "" }: Props) {
  return (
    <div
      className={`relative rounded-sm border border-brand-line/75 bg-gradient-to-br from-white via-[#FAFCFE] to-[#EEF4FA] px-4 py-6 sm:px-6 sm:py-7 ${className}`}
      data-design-layer="HelpCenterHeroDocumentationVisual"
      data-abstract="documentation-hero"
    >
      <svg className="mx-auto block h-auto w-full max-w-[300px]" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={24} y={20} w={112} h={52} label="DOC" emphasis />
        <UiBlock x={164} y={28} w={112} h={36} label="MODULE" />
        <AxisPath d="M136 46 H164" ambient />
        <Node cx={150} cy={46} active />
        <AxisLine x1={80} y1={72} x2={80} y2={108} ambient quiet />
        <UiBlock x={48} y={112} w={96} h={40} label="WORKFLOW" />
        <AxisPath d="M144 132 H196" ambient />
        <Node cx={196} cy={132} />
        <UiBlock x={200} y={116} w={76} h={32} label="TOPIC" />
        <AxisLine x1={220} y1={148} x2={220} y2={172} ambient quiet />
        <UiBlock x={168} y={176} w={120} h={36} label="GUIDANCE" emphasis />
        <AxisLine x1={48} y1={152} x2={48} y2={188} ambient quiet />
        <Node cx={48} cy={192} active />
        <circle cx={252} cy={52} r="2.5" fill="#FF6A00" opacity="0.85" />
        <circle cx={28} cy={128} r="2" fill="#3B6F9A" opacity="0.5" />
      </svg>
    </div>
  );
}

/** Hero-only ambient — kept at section edges. */
export function HelpCenterSectionAmbient({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      data-design-layer="HelpCenterSectionAmbient"
      data-abstract="section"
      aria-hidden="true"
    >
      <svg className="absolute -right-6 top-6 hidden h-28 w-20 opacity-[0.12] lg:block" viewBox="0 0 80 112" fill="none">
        <AxisLine x1={40} y1={8} x2={40} y2={104} ambient quiet />
        <Node cx={40} cy={36} active />
      </svg>
      <svg className="absolute -left-4 bottom-8 hidden h-20 w-16 opacity-[0.1] xl:block" viewBox="0 0 64 80" fill="none">
        <AxisLine x1={8} y1={40} x2={56} y2={40} ambient quiet />
        <Node cx={32} cy={40} />
      </svg>
    </div>
  );
}

/** Per-category margin abstract — never behind the reading column. */
export function HelpCenterCategoryEdgeAbstract({ variant = 0, className = "" }: Props & { variant?: number }) {
  const flip = variant % 2 === 1;
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 ${flip ? "left-0" : "right-0"} w-[min(28%,11rem)] overflow-hidden opacity-[0.11] ${className}`}
      data-abstract="category-edge"
      aria-hidden="true"
    >
      <svg className={`absolute ${flip ? "left-2" : "right-2"} top-1/2 h-40 w-24 -translate-y-1/2`} viewBox="0 0 96 160" fill="none">
        <AxisLine x1={48} y1={12} x2={48} y2={148} ambient quiet />
        <AxisPath d={flip ? "M48 48 H12 M48 88 H84" : "M48 48 H84 M48 88 H12"} ambient />
        <Node cx={48} cy={48} active />
        <Node cx={flip ? 12 : 84} cy={88} />
      </svg>
    </div>
  );
}

/** @deprecated Landing uses HelpCenterHeroDocumentationVisual — kept for imports that may reference the name. */
export function HelpCenterProductKnowledgeVisual(props: Props) {
  return <HelpCenterHeroDocumentationVisual {...props} />;
}
