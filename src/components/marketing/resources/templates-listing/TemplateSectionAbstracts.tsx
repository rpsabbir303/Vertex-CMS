import { AxisLine, AxisPath, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";

type Props = { className?: string };

export function TemplateHeroWorkflowAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateHeroWorkflowAbstract" aria-hidden="true">
      <svg className="mx-auto block h-auto w-full max-w-[280px]" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={96} y={8} w={88} h={24} label="TEMPLATE" emphasis />
        <AxisLine x1={140} y1={32} x2={140} y2={212} ambient />
        <ArrowDown x={140} y={48} />
        <Node cx={140} cy={64} active />
        <UiBlock x={100} y={68} w={80} h={22} label="PROJECT" />
        <ArrowDown x={140} y={88} />
        <Node cx={140} cy={104} active />
        <UiBlock x={104} y={108} w={72} h={22} label="FIELD" />
        <ArrowDown x={140} y={128} />
        <Node cx={140} cy={144} />
        <UiBlock x={96} y={148} w={88} h={22} label="FINANCIAL" />
        <ArrowDown x={140} y={168} />
        <Node cx={140} cy={184} active />
        <UiBlock x={68} y={188} w={144} h={24} label="STANDARDIZED WORKFLOW" emphasis />
      </svg>
    </div>
  );
}

/** Featured template — template panel with field sections. */
export function TemplateFeaturedPanelAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateFeaturedPanelAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/80 bg-gradient-to-br from-[#FFFEFB] via-white to-[#EEF4FA] px-4 py-6 sm:px-6 sm:py-8">
        <svg className="mx-auto block h-auto w-full max-w-md" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" fill="none">
          <Eyebrow x={16} y={18} text="FIELD LOG TEMPLATE" />
          <rect x={48} y={32} width={264} height={168} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FAFBFD" />
          <UiBlock x={64} y={48} w={72} h={20} label="FIELD LOG" emphasis />
          <UiBlock x={144} y={48} w={64} h={20} label="PROJECT" />
          <UiBlock x={224} y={48} w={72} h={20} label="COST CODE" />
          <AxisLine x1={64} y1={84} x2={296} y2={84} ambient quiet />
          <UiBlock x={64} y={92} w={88} h={18} label="Weather" />
          <UiBlock x={160} y={92} w={88} h={18} label="Crew" />
          <UiBlock x={256} y={92} w={40} h={18} label="Status" />
          <AxisLine x1={64} y1={120} x2={296} y2={120} ambient quiet />
          <UiBlock x={64} y={128} w={232} h={18} label="Work performed" />
          <UiBlock x={64} y={152} w={232} h={18} label="Equipment" />
          <UiBlock x={64} y={176} w={232} h={18} label="Notes" />
          <AxisPath d="M320 100 L340 100" ambient />
          <Node cx={348} cy={100} active />
        </svg>
      </div>
    </div>
  );
}

export function TemplateProjectOpsAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateProjectOpsAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/70 bg-white/85 px-3 py-5">
        <svg className="mx-auto block h-auto w-full max-w-[200px]" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" fill="none">
          <UiBlock x={64} y={8} w={72} h={22} label="TEMPLATE" emphasis />
          <AxisPath d="M100 30 L52 56" ambient />
          <AxisPath d="M100 30 L148 56" ambient />
          <UiBlock x={24} y={60} w={56} h={20} label="RFI" />
          <UiBlock x={120} y={60} w={56} h={20} label="PUNCH" />
          <AxisPath d="M52 80 L100 104" ambient quiet />
          <AxisPath d="M148 80 L100 104" ambient quiet />
          <Node cx={100} cy={108} active />
          <UiBlock x={52} y={116} w={96} h={22} label="PROJECT" emphasis />
        </svg>
      </div>
    </div>
  );
}

export function TemplateFieldOpsAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateFieldOpsAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/70 bg-[#FAFBFD] px-3 py-5">
        <svg className="mx-auto block h-auto w-full max-w-[200px]" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" fill="none">
          <AxisLine x1={100} y1={16} x2={100} y2={164} ambient />
          <Node cx={100} cy={32} active />
          <UiBlock x={56} y={36} w={88} h={22} label="DAILY LOG" />
          <Node cx={100} cy={72} />
          <UiBlock x={64} y={76} w={72} h={22} label="CREW" />
          <Node cx={100} cy={112} active />
          <UiBlock x={52} y={116} w={96} h={22} label="EQUIPMENT" />
          <Node cx={100} cy={152} active />
          <UiBlock x={68} y={156} w={64} h={22} label="FIELD" emphasis />
        </svg>
      </div>
    </div>
  );
}

/** Template hub network — template → project + field → financial */
export function TemplateSystemHubAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateSystemHubAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[180px]" viewBox="0 0 180 160" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={58} y={8} w={64} h={22} label="TEMPLATE" emphasis />
        <AxisLine x1={90} y1={30} x2={90} y2={52} ambient />
        <Node cx={90} cy={56} active />
        <AxisPath d="M90 56 L40 88" ambient />
        <AxisPath d="M90 56 L140 88" ambient />
        <UiBlock x={12} y={92} w={56} h={20} label="PROJECT" />
        <UiBlock x={112} y={92} w={56} h={20} label="FIELD" />
        <AxisPath d="M40 112 L90 136" ambient quiet />
        <AxisPath d="M140 112 L90 136" ambient quiet />
        <Node cx={90} cy={140} active />
        <UiBlock x={52} y={144} w={76} h={18} label="FINANCIAL" />
      </svg>
    </div>
  );
}
