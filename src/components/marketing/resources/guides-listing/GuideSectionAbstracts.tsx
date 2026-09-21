import { AxisLine, AxisPath, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Hero — connected construction operations workflow. */
export function GuideHeroConnectedOperationsAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="GuideHeroConnectedOperationsAbstract"
      aria-hidden="true"
    >
      <svg className="mx-auto block h-auto w-full max-w-[280px]" viewBox="0 0 280 248" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx={200} cy={88} r={56} fill="#E8F0F8" opacity={0.4} />
        <AxisLine x1={72} y1={20} x2={72} y2={228} ambient />
        <Node cx={72} cy={40} active />
        <UiBlock x={96} y={32} w={120} h={22} label="PROJECT SETUP" />
        <ArrowDown x={72} y={58} />
        <Node cx={72} cy={78} active />
        <UiBlock x={96} y={70} w={128} h={22} label="FIELD OPERATIONS" />
        <ArrowDown x={72} y={96} />
        <Node cx={72} cy={116} />
        <UiBlock x={96} y={108} w={124} h={22} label="FINANCIAL CONTROL" />
        <ArrowDown x={72} y={134} />
        <Node cx={72} cy={154} active />
        <UiBlock x={96} y={146} w={104} h={22} label="COMPLIANCE" />
        <ArrowDown x={72} y={172} />
        <Node cx={72} cy={192} active />
        <UiBlock x={88} y={184} w={136} h={24} label="CONNECTED OPERATIONS" emphasis />
        <AxisPath d="M200 116 H240" ambient quiet />
        <Node cx={240} cy={116} />
      </svg>
    </div>
  );
}

/** Getting Started — workspace configuration path. */
export function GuideGettingStartedAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="GuideGettingStartedAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/70 bg-white/80 px-3 py-5 sm:px-4 sm:py-6">
        <svg className="mx-auto block h-auto w-full max-w-[200px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
          <AxisLine x1={100} y1={16} x2={100} y2={184} ambient />
          <Node cx={100} cy={32} active />
          <UiBlock x={52} y={36} w={96} h={22} label="WORKSPACE" />
          <ArrowDown x={100} y={54} />
          <Node cx={100} cy={72} />
          <UiBlock x={64} y={76} w={72} h={22} label="ROLES" />
          <ArrowDown x={100} y={94} />
          <Node cx={100} cy={112} active />
          <UiBlock x={36} y={116} w={128} h={22} label="PROJECT TEMPLATES" />
          <ArrowDown x={100} y={134} />
          <Node cx={100} cy={152} active />
          <UiBlock x={48} y={156} w={104} h={22} label="ACTIVE PROJECT" emphasis />
        </svg>
      </div>
    </div>
  );
}

/** Financials section — cost through reporting. */
export function GuideFinancialsCategoryAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="GuideFinancialsCategoryAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/70 bg-gradient-to-b from-[#FAFBFD] to-[#EEF4FA] px-3 py-5 sm:px-5 sm:py-7">
        <svg className="mx-auto block h-auto w-full max-w-[220px]" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" fill="none">
          <Eyebrow x={12} y={14} text="JOB COST PATH" />
          <AxisLine x1={110} y1={28} x2={110} y2={200} ambient />
          <Node cx={110} cy={40} active />
          <UiBlock x={52} y={44} w={116} h={22} label="COST CODES" />
          <ArrowDown x={110} y={62} />
          <Node cx={110} cy={78} />
          <UiBlock x={68} y={82} w={84} h={22} label="BUDGET" />
          <ArrowDown x={110} y={100} />
          <Node cx={110} cy={116} active />
          <UiBlock x={52} y={120} w={116} h={22} label="COMMITMENTS" />
          <ArrowDown x={110} y={138} />
          <Node cx={110} cy={154} />
          <UiBlock x={68} y={158} w={84} h={22} label="JOB COST" />
          <ArrowDown x={110} y={176} />
          <Node cx={110} cy={192} active />
          <UiBlock x={28} y={196} w={164} h={22} label="FINANCIAL REPORTING" emphasis />
        </svg>
      </div>
    </div>
  );
}

/** Compliance section — subcontractor to project ready. */
export function GuideComplianceCategoryAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="GuideComplianceCategoryAbstract" aria-hidden="true">
      <div className="rounded-sm border border-brand-line/70 bg-[#FAFBFD] px-3 py-5 sm:px-4 sm:py-6">
        <svg className="mx-auto block h-auto w-full max-w-[220px]" viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" fill="none">
          <AxisLine x1={110} y1={20} x2={110} y2={190} ambient />
          <Node cx={110} cy={36} active />
          <UiBlock x={44} y={40} w={132} h={22} label="SUBCONTRACTOR" />
          <ArrowDown x={110} y={58} />
          <Node cx={110} cy={76} />
          <UiBlock x={68} y={80} w={84} h={22} label="DOCUMENTS" />
          <ArrowDown x={110} y={98} />
          <Node cx={110} cy={116} active />
          <UiBlock x={52} y={120} w={116} h={22} label="VERIFICATION" />
          <ArrowDown x={110} y={138} />
          <Node cx={110} cy={156} />
          <UiBlock x={64} y={160} w={92} h={22} label="COMPLIANCE" />
          <ArrowDown x={110} y={178} />
          <Node cx={110} cy={196} active />
          <UiBlock x={48} y={188} w={124} h={22} label="PROJECT READY" emphasis />
        </svg>
      </div>
    </div>
  );
}
