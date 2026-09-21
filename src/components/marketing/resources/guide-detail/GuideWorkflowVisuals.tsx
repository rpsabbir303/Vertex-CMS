import type { GuideSectionWorkflowVariant } from "@/lib/marketing/resources/guide";
import { AxisLine, AxisPath, ArrowDown, Eyebrow, MicroFragment, Node, UiBlock } from "../blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Hero rail — cost codes → portfolio financials */
export function GuideHeroWorkflowAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="GuideHeroWorkflowAbstract"
      aria-hidden="true"
    >
      <svg className="mx-auto block h-auto w-full max-w-[300px]" viewBox="0 0 288 248" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx={220} cy={100} r={64} fill="#E8F0F8" opacity={0.45} />
        <MicroFragment x={8} y={8} label="PROJECT" w={58} />
        <MicroFragment x={200} y={36} label="ENTITY" w={56} />
        <MicroFragment x={12} y={200} label="PORTFOLIO" w={64} />

        <AxisLine x1={80} y1={24} x2={80} y2={220} />
        <Node cx={80} cy={48} active />
        <Node cx={80} cy={98} active />
        <Node cx={80} cy={148} />
        <Node cx={80} cy={198} active />
        <ArrowDown x={80} y={72} />
        <ArrowDown x={80} y={122} />
        <ArrowDown x={80} y={172} />

        <Eyebrow x={98} y={32} text="COST CODES" />
        <UiBlock x={98} y={38} w={118} h={24} label="Cost code" />
        <Eyebrow x={98} y={82} text="BUDGET" />
        <UiBlock x={98} y={88} w={112} h={24} label="Budget lines" />
        <Eyebrow x={98} y={132} text="COMMITMENTS" />
        <UiBlock x={98} y={138} w={120} h={24} label="Commitments" />
        <Eyebrow x={98} y={182} text="JOB COST" />
        <UiBlock x={98} y={188} w={104} h={24} label="Actuals" />
        <AxisPath d="M218 102 H252" />
        <Node cx={252} cy={102} active />
        <UiBlock x={186} y={114} w={92} h={22} label="Portfolio financials" />
      </svg>
    </div>
  );
}

/** Large stage visualization — primary guide anchor (not a photo hero). */
export function GuideStageWorkflowVisual({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="GuideStageWorkflowVisual"
      aria-hidden="true"
    >
      <div className="rounded-sm border border-brand-line/80 bg-gradient-to-b from-[#FAFBFD] to-[#EEF4FA] px-4 py-6 sm:px-8 sm:py-8">
        <svg className="mx-auto block h-auto w-full max-w-2xl" viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" fill="none">
          <Eyebrow x={40} y={20} text="CONNECTED FINANCIAL WORKFLOW" />
          <AxisLine x1={260} y1={32} x2={260} y2={168} ambient />
          <Node cx={260} cy={48} active />
          <UiBlock x={200} y={52} w={120} h={26} label="COST CODES" />
          <Node cx={260} cy={78} active />
          <UiBlock x={208} y={82} w={104} h={26} label="BUDGET" />
          <Node cx={260} cy={108} />
          <UiBlock x={196} y={112} w={128} h={26} label="COMMITMENTS" />
          <Node cx={260} cy={138} active />
          <UiBlock x={210} y={142} w={100} h={26} label="JOB COST" />
          <Node cx={260} cy={168} active />
          <UiBlock x={178} y={172} w={164} h={26} label="PORTFOLIO FINANCIALS" emphasis />

          <AxisPath d="M80 48 H200" ambient quiet />
          <Eyebrow x={24} y={44} text="PROJECT" />
          <Node cx={80} cy={48} />
          <AxisPath d="M320 48 H440" ambient quiet />
          <Eyebrow x={448} y={44} text="ENTITY" />
          <Node cx={440} cy={48} />
          <AxisPath d="M320 168 H440" ambient quiet />
          <Eyebrow x={448} y={164} text="PORTFOLIO" />
          <Node cx={440} cy={168} />
        </svg>
      </div>
    </div>
  );
}

export function GuideSectionWorkflowAbstract({
  variant,
  className = "",
}: {
  variant: GuideSectionWorkflowVariant;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none my-3 select-none sm:my-3.5 ${className}`}
      data-design-layer="GuideSectionWorkflowAbstract"
      data-variant={variant}
      aria-hidden="true"
    >
      {variant === "structure-stack" ? <StructureStack /> : null}
      {variant === "codes-budget" ? <CodesBudget /> : null}
      {variant === "commitment-flow" ? <CommitmentFlow /> : null}
      {variant === "portfolio-hub" ? <PortfolioHub /> : null}
      {variant === "implementation" ? <ImplementationPath /> : null}
      {variant === "platform" ? <PlatformHub /> : null}
      {variant === "generic-stack" ? <StructureStack /> : null}
    </div>
  );
}

function StructureStack() {
  return (
    <svg className="block h-auto w-full max-w-[148px]" viewBox="0 0 148 168" xmlns="http://www.w3.org/2000/svg" fill="none">
      {["PROJECT", "COST CODE", "BUDGET", "COMMITMENT", "ACTUAL"].map((label, i) => {
        const y = 18 + i * 30;
        return (
          <g key={label}>
            {i > 0 ? <AxisLine x1={74} y1={y - 12} x2={74} y2={y - 4} ambient /> : null}
            {i > 0 && i < 4 ? <Node cx={74} cy={y - 8} active={i === 2} /> : null}
            <UiBlock x={34} y={y} w={80} h={22} label={label} />
          </g>
        );
      })}
    </svg>
  );
}

function CodesBudget() {
  return (
    <svg className="block h-auto w-full max-w-[340px]" viewBox="0 0 340 44" xmlns="http://www.w3.org/2000/svg" fill="none">
      <AxisLine x1={12} y1={30} x2={328} y2={30} ambient quiet />
      <Node cx={48} cy={30} active />
      <Node cx={170} cy={30} />
      <Node cx={292} cy={30} active />
      <Eyebrow x={12} y={14} text="COST CODES" />
      <Eyebrow x={128} y={14} text="BUDGET" />
      <Eyebrow x={248} y={14} text="JOB COST" />
    </svg>
  );
}

function CommitmentFlow() {
  return (
    <svg className="block h-auto w-full max-w-[200px]" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" fill="none">
      <UiBlock x={64} y={8} w={72} h={22} label="Commitment" />
      <AxisLine x1={100} y1={30} x2={100} y2={44} ambient />
      <Node cx={100} cy={44} active />
      <AxisLine x1={100} y1={48} x2={100} y2={62} ambient />
      <UiBlock x={52} y={66} w={96} h={22} label="Job cost" />
    </svg>
  );
}

function PortfolioHub() {
  return (
    <svg className="block h-auto w-full max-w-[240px]" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" fill="none">
      <UiBlock x={84} y={4} w={72} h={22} label="PORTFOLIO" emphasis />
      <AxisPath d="M120 26 L48 52" ambient />
      <AxisPath d="M120 26 L120 52" ambient />
      <AxisPath d="M120 26 L192 52" ambient />
      <UiBlock x={16} y={56} w={64} h={20} label="Project A" />
      <UiBlock x={88} y={56} w={64} h={20} label="Project B" />
      <UiBlock x={160} y={56} w={64} h={20} label="Project C" />
      <Node cx={120} cy={88} active />
      <UiBlock x={68} y={92} w={104} h={22} label="Visibility" />
    </svg>
  );
}

function ImplementationPath() {
  return (
    <svg className="block h-auto w-full max-w-[280px]" viewBox="0 0 280 48" xmlns="http://www.w3.org/2000/svg" fill="none">
      <AxisLine x1={16} y1={32} x2={264} y2={32} ambient quiet />
      <Eyebrow x={16} y={14} text="INPUT" />
      <Eyebrow x={108} y={14} text="PROCESS" />
      <Eyebrow x={208} y={14} text="OUTCOME" />
      <Node cx={48} cy={32} active />
      <Node cx={140} cy={32} />
      <Node cx={232} cy={32} active />
    </svg>
  );
}

function PlatformHub() {
  return (
    <svg className="block h-auto w-full max-w-[268px]" viewBox="0 0 268 132" xmlns="http://www.w3.org/2000/svg" fill="none">
      <UiBlock x={82} y={2} w={104} h={24} label="VERTEXBUILD" emphasis />
      <AxisLine x1={134} y1={26} x2={134} y2={38} ambient />
      <Node cx={134} cy={38} active />
      <AxisPath d="M134 38 L46 54" ambient />
      <AxisPath d="M134 38 L222 54" ambient />
      <UiBlock x={10} y={60} w={72} h={20} label="FINANCIAL" />
      <UiBlock x={186} y={60} w={72} h={20} label="PROJECT" />
      <Node cx={134} cy={94} active />
      <UiBlock x={80} y={102} w={108} h={22} label="INTELLIGENCE" />
    </svg>
  );
}

/** Article gutter — financial workflow (tertiary). */
export function GuideGutterAbstract({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      data-design-layer="GuideGutterAbstract"
      aria-hidden="true"
    >
      <svg
        className="absolute left-0 top-4 hidden h-[320px] w-[72px] opacity-[0.22] xl:block xl:opacity-[0.28]"
        viewBox="0 0 72 320"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Eyebrow x={4} y={16} text="COST CODE" />
        <AxisLine x1={14} y1={24} x2={14} y2={140} ambient />
        <Node cx={14} cy={52} active />
        <Eyebrow x={4} y={132} text="BUDGET" />
        <Node cx={14} cy={168} active />
        <Eyebrow x={4} y={212} text="COMMITMENT" />
      </svg>
      <svg
        className="absolute right-[19rem] top-6 hidden h-[280px] w-[68px] opacity-[0.2] xl:block xl:opacity-[0.26]"
        viewBox="0 0 68 280"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Eyebrow x={4} y={16} text="FINANCIAL VIEW" />
        <AxisLine x1={48} y1={24} x2={48} y2={120} ambient />
        <Node cx={48} cy={48} active />
        <Eyebrow x={4} y={152} text="REPORTING" />
        <Node cx={48} cy={176} active />
      </svg>
    </div>
  );
}

/** Related resources — guide ecosystem network */
export function GuideRelatedAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="GuideRelatedAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[184px]" viewBox="0 0 184 196" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisPath d="M48 48 L88 72" ambient />
        <AxisPath d="M136 48 L88 72" ambient />
        <Eyebrow x={28} y={40} text="GUIDE" />
        <Eyebrow x={112} y={40} text="BLOG" />
        <Node cx={88} cy={72} active />
        <UiBlock x={52} y={80} w={72} h={22} label="RESOURCES" />
        <UiBlock x={24} y={136} w={52} h={18} label="TEMPLATE" />
        <UiBlock x={88} y={136} w={52} h={18} label="WEBINAR" />
        <AxisPath d="M88 102 L48 145" ambient quiet />
        <AxisPath d="M88 102 L116 145" ambient quiet />
      </svg>
    </div>
  );
}
