import { AxisLine, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import type { WebinarHeroVisual } from "@/lib/marketing/resources/webinar";

type Props = { className?: string };

export function WebinarHeroSessionPreview({
  variant,
  className = "",
}: {
  variant: WebinarHeroVisual;
  className?: string;
}) {
  return (
    <div
      className={`rounded-sm border border-brand-line/80 bg-gradient-to-br from-[#FAFBFD] via-white to-[#EEF4FA] px-3 py-4 shadow-[0_8px_24px_-14px_rgba(8,35,63,0.18)] sm:px-4 sm:py-5 ${className}`}
      data-design-layer="WebinarHeroSessionPreview"
    >
      {variant === "platform-modules" ? <PlatformModulesPreview /> : null}
      {variant === "ai-assistant" ? <AiAssistantPreview /> : null}
      {variant === "job-cost-close" ? <JobCostClosePreview /> : null}
    </div>
  );
}

function PlatformModulesPreview() {
  return (
    <svg className="mx-auto block h-auto w-full max-w-[320px]" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none">
      <Eyebrow x={12} y={16} text="VERTEXBUILD SESSION" />
      <UiBlock x={16} y={32} w={64} h={20} label="PROJECT" />
      <UiBlock x={88} y={32} w={56} h={20} label="FIELD" />
      <UiBlock x={152} y={32} w={68} h={20} label="FINANCIAL" />
      <UiBlock x={228} y={32} w={76} h={20} label="COMPLIANCE" />
      <AxisLine x1={160} y1={52} x2={160} y2={168} ambient />
      <Node cx={160} cy={68} active />
      <rect x={100} y={76} width={120} height={64} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FFFFFF" />
      <UiBlock x={112} y={88} w={96} h={18} label="LIVE SESSION" emphasis />
      <AxisLine x1={120} y1={108} x2={200} y2={108} ambient quiet />
      <UiBlock x={112} y={116} w={96} h={16} label="Platform tour" />
      <Node cx={160} cy={168} active />
      <UiBlock x={108} y={172} w={104} h={20} label="INTELLIGENCE" emphasis />
    </svg>
  );
}

function AiAssistantPreview() {
  return (
    <svg className="mx-auto block h-auto w-full max-w-[300px]" viewBox="0 0 300 188" xmlns="http://www.w3.org/2000/svg" fill="none">
      <Eyebrow x={12} y={16} text="PROJECT CONTEXT" />
      <UiBlock x={16} y={34} w={88} h={22} label="ACTIVE PROJECT" />
      <AxisLine x1={150} y1={56} x2={150} y2={168} ambient />
      <Node cx={150} cy={72} active />
      <rect x={72} y={80} width={156} height={52} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FFFFFF" />
      <UiBlock x={84} y={90} w={132} h={16} label="Document intelligence" />
      <UiBlock x={84} y={110} w={100} h={16} label="Project questions" />
      <ArrowDown x={150} y={132} />
      <Node cx={150} cy={152} active />
      <UiBlock x={96} y={156} w={108} h={22} label="ASSISTANT" emphasis />
    </svg>
  );
}

function JobCostClosePreview() {
  return (
    <svg className="mx-auto block h-auto w-full max-w-[300px]" viewBox="0 0 300 188" xmlns="http://www.w3.org/2000/svg" fill="none">
      <Eyebrow x={12} y={16} text="PERIOD CLOSE" />
      <UiBlock x={16} y={34} w={72} h={22} label="FIELD" />
      <AxisLine x1={150} y1={56} x2={150} y2={168} ambient />
      <ArrowDown x={150} y={60} />
      <Node cx={150} cy={76} active />
      <UiBlock x={96} y={80} w={108} h={22} label="JOB COST" />
      <ArrowDown x={150} y={100} />
      <Node cx={150} cy={116} />
      <UiBlock x={78} y={120} w={144} h={22} label="BILLING CONTEXT" />
      <ArrowDown x={150} y={140} />
      <Node cx={150} cy={156} active />
      <UiBlock x={88} y={160} w={124} h={22} label="FINANCE HANDOFF" emphasis />
    </svg>
  );
}

export function WebinarCoversWorkflowAbstract({
  labels,
  className = "",
}: {
  labels: string[];
  className?: string;
}) {
  const steps = labels.slice(0, 5);
  const ys = [28, 58, 88, 118, 148];
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarCoversWorkflowAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[200px]" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={100} y1={16} x2={100} y2={164} ambient />
        {steps.map((label, i) => {
          const y = ys[i] ?? 28 + i * 30;
          const short = label.length > 14 ? `${label.slice(0, 12)}…` : label;
          return (
            <g key={`${label}-${i}`}>
              <Node cx={100} cy={y} active={i === 0 || i === steps.length - 1} />
              <UiBlock x={24} y={y + 4} w={152} h={20} label={short} />
              {i < steps.length - 1 ? <ArrowDown x={100} y={y + 24} /> : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function WebinarOverviewContextAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarOverviewContextAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[200px]" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={56} y={8} w={88} h={22} label="SESSION" emphasis />
        <AxisLine x1={100} y1={30} x2={100} y2={100} ambient quiet />
        <Node cx={100} cy={44} active />
        <UiBlock x={40} y={48} w={120} h={18} label="Operating record" />
        <Node cx={100} cy={88} />
        <UiBlock x={48} y={92} w={104} h={18} label="Workflow context" />
      </svg>
    </div>
  );
}

export function WebinarFormatAbstract({ kind, className = "" }: { kind: string; className?: string }) {
  const label = kind.length > 22 ? `${kind.slice(0, 20)}…` : kind;
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarFormatAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[220px]" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x={24} y={16} width={172} height={88} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FFFFFF" />
        <UiBlock x={36} y={28} w={148} h={22} label={label.toUpperCase()} emphasis />
        <AxisLine x1={44} y1={58} x2={176} y2={58} ambient quiet />
        <UiBlock x={36} y={66} w={120} h={18} label="VertexBuild" />
        <UiBlock x={36} y={88} w={96} h={16} label="Session format" />
        <Node cx={188} cy={108} active />
      </svg>
    </div>
  );
}

export function WebinarRegistrationFlowAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="WebinarRegistrationFlowAbstract" aria-hidden="true">
      <svg className="mx-auto block h-auto w-full max-w-[240px]" viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={72} y={12} w={96} h={22} label="WEBINAR" emphasis />
        <AxisLine x1={120} y1={34} x2={120} y2={140} ambient />
        <ArrowDown x={120} y={38} />
        <Node cx={120} cy={52} active />
        <UiBlock x={68} y={56} w={104} h={20} label="SESSION" />
        <ArrowDown x={120} y={76} />
        <Node cx={120} cy={92} active />
        <UiBlock x={56} y={96} w={128} h={22} label="VERTEXBUILD" emphasis />
      </svg>
    </div>
  );
}

export function WebinarDetailGutterAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 select-none opacity-70 xl:block ${className}`}
      data-design-layer="WebinarDetailGutterAbstract"
      aria-hidden="true"
    >
      <svg className="h-[120px] w-[72px]" viewBox="0 0 72 120" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={36} y1={8} x2={36} y2={112} ambient quiet />
        <Node cx={36} cy={28} active />
        <Node cx={36} cy={60} />
        <Node cx={36} cy={92} active />
      </svg>
    </div>
  );
}
