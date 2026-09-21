import { AxisLine, AxisPath, ArrowDown, Eyebrow, Node, UiBlock } from "./primitives";

export type ArticleWorkflowVariant =
  | "field-break"
  | "shared-context"
  | "handoff"
  | "platform";

type Props = {
  variant: ArticleWorkflowVariant;
  className?: string;
};

/**
 * ArticleWorkflowAbstract — section-specific compositions sharing one grammar.
 * Sits inside the article composition (not far outer gutters).
 */
export function ArticleWorkflowAbstract({ variant, className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none my-3 select-none sm:my-3.5 ${className}`}
      data-design-layer="ArticleWorkflowAbstract"
      data-axis-stage={`article-${variant}`}
      aria-hidden="true"
    >
      {variant === "field-break" ? <FieldBreakSvg /> : null}
      {variant === "shared-context" ? <SharedContextSvg /> : null}
      {variant === "handoff" ? <HandoffWorkflowAbstract /> : null}
      {variant === "platform" ? <PlatformConvergenceAbstract /> : null}
    </div>
  );
}

function FieldBreakSvg() {
  return (
    <svg className="block h-auto w-full max-w-[148px]" viewBox="0 0 148 132" xmlns="http://www.w3.org/2000/svg" fill="none">
      <Eyebrow x={74} y={12} text="FIELD ACTIVITY" anchor="middle" />
      <UiBlock x={22} y={18} w={104} h={22} label="Field log" />
      <AxisLine x1={74} y1={40} x2={74} y2={50} />
      <Node cx={74} cy={50} active />
      <ArrowDown x={74} y={60} />
      <Eyebrow x={74} y={72} text="PROJECT RECORD" anchor="middle" />
      <UiBlock x={18} y={78} w={112} h={22} label="Shared record" />
      <AxisLine x1={74} y1={100} x2={74} y2={110} />
      <Node cx={74} cy={110} />
      <Eyebrow x={74} y={126} text="FINANCIAL VIEW" anchor="middle" />
    </svg>
  );
}

function SharedContextSvg() {
  return (
    <svg className="block h-auto w-full max-w-[360px]" viewBox="0 0 360 44" xmlns="http://www.w3.org/2000/svg" fill="none">
      <AxisLine x1={12} y1={30} x2={348} y2={30} quiet />
      <Node cx={44} cy={30} active />
      <Node cx={180} cy={30} />
      <Node cx={316} cy={30} active />
      <Eyebrow x={12} y={14} text="FIELD LOG" />
      <Eyebrow x={128} y={14} text="SHARED CONTEXT" />
      <Eyebrow x={256} y={14} text="PROJECT RECORD" />
    </svg>
  );
}

export function HandoffWorkflowAbstract({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`block h-auto w-full max-w-[156px] ${className}`}
      viewBox="0 0 156 140"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-design-layer="HandoffWorkflowAbstract"
      aria-hidden="true"
    >
      <UiBlock x={12} y={4} w={132} h={24} label="Superintendent" />
      <AxisLine x1={78} y1={28} x2={78} y2={40} />
      <Node cx={78} cy={40} active />
      <ArrowDown x={78} y={50} />
      <UiBlock x={12} y={54} w={132} h={24} label="Project manager" />
      <AxisLine x1={78} y1={78} x2={78} y2={90} />
      <Node cx={78} cy={90} active />
      <ArrowDown x={78} y={100} />
      <UiBlock x={22} y={104} w={112} h={24} label="Accounting" emphasis />
    </svg>
  );
}

export function PlatformConvergenceAbstract({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`block h-auto w-full max-w-[268px] ${className}`}
      viewBox="0 0 268 132"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-design-layer="PlatformConvergenceAbstract"
      aria-hidden="true"
    >
      <UiBlock x={82} y={2} w={104} h={24} label="VERTEXBUILD" emphasis />
      <AxisLine x1={134} y1={26} x2={134} y2={38} />
      <Node cx={134} cy={38} active />
      <AxisPath d="M134 38 L46 54" />
      <AxisPath d="M134 38 L134 54" />
      <AxisPath d="M134 38 L222 54" />
      <Node cx={46} cy={54} />
      <Node cx={134} cy={54} active />
      <Node cx={222} cy={54} />
      <UiBlock x={10} y={60} w={72} h={20} label="PROJECT" />
      <UiBlock x={98} y={60} w={72} h={20} label="FIELD" />
      <UiBlock x={186} y={60} w={72} h={20} label="FINANCIAL" />
      <AxisPath d="M46 80 L134 94" />
      <AxisPath d="M134 80 L134 94" />
      <AxisPath d="M222 80 L134 94" />
      <Node cx={134} cy={94} active />
      <UiBlock x={80} y={102} w={108} h={22} label="INTELLIGENCE" />
    </svg>
  );
}

/**
 * ArticleGutterAbstract — Level-2 connectors near the content grid (not far edges).
 */
export function ArticleGutterAbstract({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      data-design-layer="ResourceArticleAbstract"
      aria-hidden="true"
    >
      <svg
        className="absolute left-0 top-4 hidden h-[340px] w-[72px] opacity-[0.24] xl:block xl:opacity-[0.3]"
        viewBox="0 0 72 340"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Eyebrow x={4} y={18} text="FIELD LOG" />
        <AxisLine x1={14} y1={28} x2={14} y2={120} ambient />
        <Node cx={14} cy={52} active />
        <AxisLine x1={14} y1={52} x2={14} y2={200} ambient quiet />
        <Eyebrow x={4} y={132} text="PROJECT RECORD" />
        <Node cx={14} cy={148} active />
        <AxisPath d="M14 148 H48" ambient quiet />
        <Eyebrow x={4} y={212} text="JOB COST" />
        <Node cx={14} cy={228} />
        <AxisLine x1={14} y1={228} x2={14} y2={300} ambient quiet />
        <Node cx={14} cy={268} active />
      </svg>

      <svg
        className="absolute right-[19rem] top-6 hidden h-[320px] w-[68px] opacity-[0.22] xl:block xl:opacity-[0.28]"
        viewBox="0 0 68 320"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Eyebrow x={4} y={18} text="FINANCIAL VIEW" />
        <AxisLine x1={48} y1={28} x2={48} y2={140} ambient />
        <Node cx={48} cy={52} active />
        <AxisLine x1={48} y1={52} x2={48} y2={220} ambient quiet />
        <Eyebrow x={4} y={152} text="REPORTING" />
        <Node cx={48} cy={168} active />
        <AxisPath d="M48 168 H16" ambient quiet />
        <Node cx={48} cy={240} />
        <Eyebrow x={8} y={280} text="INTELLIGENCE" />
      </svg>
    </div>
  );
}

export function articleWorkflowForIndex(sectionIndex: number): ArticleWorkflowVariant | null {
  const map: ArticleWorkflowVariant[] = ["field-break", "shared-context", "handoff", "platform"];
  return map[sectionIndex] ?? null;
}
