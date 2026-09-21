import { AxisLine, AxisPath, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";

type Props = { className?: string };

export function WebinarHeroWorkflowAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarHeroWorkflowAbstract" aria-hidden="true">
      <svg className="mx-auto block h-auto w-full max-w-[280px]" viewBox="0 0 280 248" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={88} y={8} w={104} h={24} label="LIVE SESSION" emphasis />
        <AxisLine x1={140} y1={32} x2={140} y2={220} ambient />
        <ArrowDown x={140} y={48} />
        <Node cx={140} cy={64} active />
        <UiBlock x={72} y={68} w={136} h={22} label="PROJECT OPERATIONS" />
        <ArrowDown x={140} y={88} />
        <Node cx={140} cy={104} active />
        <UiBlock x={88} y={108} w={104} h={22} label="FIELD WORKFLOW" />
        <ArrowDown x={140} y={128} />
        <Node cx={140} cy={144} />
        <UiBlock x={80} y={148} w={120} h={22} label="FINANCIAL CONTROL" />
        <ArrowDown x={140} y={168} />
        <Node cx={140} cy={184} active />
        <UiBlock x={68} y={188} w={144} h={24} label="ACTIONABLE INSIGHT" emphasis />
        <AxisPath d="M220 104 H252" ambient quiet />
        <Node cx={252} cy={104} />
      </svg>
    </div>
  );
}

/** Featured session — module tour panels. */
export function WebinarFeaturedSessionAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarFeaturedSessionAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/80 bg-gradient-to-br from-[#FAFBFD] via-white to-[#EEF4FA] px-4 py-6 sm:px-6 sm:py-8">
        <svg className="mx-auto block h-auto w-full max-w-md" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" fill="none">
          <Eyebrow x={16} y={18} text="SESSION MODULES" />
          <UiBlock x={24} y={36} w={72} h={22} label="PROJECT" />
          <UiBlock x={108} y={36} w={64} h={22} label="FIELD" />
          <UiBlock x={184} y={36} w={72} h={22} label="FINANCIAL" />
          <UiBlock x={268} y={36} w={72} h={22} label="COMPLIANCE" />
          <AxisLine x1={180} y1={58} x2={180} y2={168} ambient />
          <Node cx={180} cy={72} active />
          <rect x={120} y={80} width={120} height={72} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FFFFFF" />
          <UiBlock x={132} y={92} w={96} h={20} label="LIVE SESSION" emphasis />
          <AxisLine x1={140} y1={116} x2={220} y2={116} ambient quiet />
          <UiBlock x={132} y={124} w={96} h={18} label="Platform tour" />
          <Node cx={180} cy={168} active />
          <UiBlock x={124} y={172} w={112} h={22} label="INTELLIGENCE" emphasis />
        </svg>
      </div>
    </div>
  );
}

export function WebinarKnowledgeHubAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarKnowledgeHubAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[180px]" viewBox="0 0 180 168" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={52} y={8} w={76} h={22} label="WEBINAR" emphasis />
        <AxisLine x1={90} y1={30} x2={90} y2={52} ambient />
        <Node cx={90} cy={56} active />
        <AxisPath d="M90 56 L36 88" ambient />
        <AxisPath d="M90 56 L90 88" ambient />
        <AxisPath d="M90 56 L144 88" ambient />
        <UiBlock x={8} y={92} w={56} h={18} label="PROJECT" />
        <UiBlock x={62} y={92} w={56} h={18} label="FIELD" />
        <UiBlock x={116} y={92} w={56} h={18} label="FINANCIAL" />
        <AxisPath d="M90 110 L90 140" ambient quiet />
        <Node cx={90} cy={144} active />
        <UiBlock x={48} y={148} w={84} h={18} label="INTELLIGENCE" />
      </svg>
    </div>
  );
}
