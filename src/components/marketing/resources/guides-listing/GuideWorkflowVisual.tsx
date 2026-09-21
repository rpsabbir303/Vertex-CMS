import { AxisLine, AxisPath, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Guides listing hero — vertical financial workflow (reused). */
export { GuideHeroWorkflowAbstract } from "../guide-detail/GuideWorkflowVisuals";

/** Featured guide spotlight — horizontal cost-code → portfolio flow. */
export function GuideFeaturedWorkflowVisual({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="GuideFeaturedWorkflowVisual"
      aria-hidden="true"
    >
      <div className="rounded-sm border border-brand-line/80 bg-gradient-to-br from-[#FAFBFD] via-white to-[#EEF4FA] px-4 py-6 sm:px-6 sm:py-8">
        <svg className="mx-auto block h-auto w-full" viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" fill="none">
          <Eyebrow x={16} y={18} text="FINANCIAL WORKFLOW" />
          <AxisLine x1={220} y1={36} x2={220} y2={196} ambient />
          <Node cx={220} cy={52} active />
          <UiBlock x={168} y={56} w={104} h={24} label="COST CODES" />
          <ArrowDown x={220} y={76} />
          <Node cx={220} cy={92} active />
          <UiBlock x={180} y={96} w={80} h={24} label="BUDGET" />
          <ArrowDown x={220} y={116} />
          <Node cx={220} cy={132} />
          <UiBlock x={164} y={136} w={112} h={24} label="COMMITMENTS" />
          <ArrowDown x={220} y={156} />
          <Node cx={220} cy={172} active />
          <UiBlock x={176} y={176} w={88} h={24} label="JOB COST" />
          <AxisPath d="M308 172 H380" ambient />
          <Node cx={380} cy={172} active />
          <UiBlock x={300} y={184} w={120} h={24} label="PORTFOLIO FINANCIALS" emphasis />

          <AxisPath d="M48 52 H168" ambient quiet />
          <Eyebrow x={16} y={48} text="PROJECT" />
          <Node cx={48} cy={52} />
          <AxisPath d="M272 52 H392" ambient quiet />
          <Eyebrow x={400} y={48} text="ENTITY" />
          <Node cx={392} cy={52} />
        </svg>
      </div>
    </div>
  );
}

/** Library section — resource relationship network. */
export function GuideLibraryNetworkAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="GuideLibraryNetworkAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[160px]" viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={52} y={8} w={56} h={20} label="GUIDES" emphasis />
        <AxisPath d="M80 28 L40 52" ambient />
        <AxisPath d="M80 28 L120 52" ambient />
        <AxisPath d="M80 28 L80 52" ambient />
        <Node cx={80} cy={56} active />
        <UiBlock x={12} y={60} w={48} h={18} label="BLOG" />
        <UiBlock x={56} y={60} w={48} h={18} label="GUIDE" />
        <UiBlock x={100} y={60} w={48} h={18} label="TEMPLATE" />
        <AxisPath d="M80 78 L48 108" ambient quiet />
        <AxisPath d="M80 78 L112 108" ambient quiet />
        <UiBlock x={24} y={112} w={48} h={18} label="WEBINAR" />
        <UiBlock x={88} y={112} w={48} h={18} label="WORKFLOW" />
      </svg>
    </div>
  );
}
