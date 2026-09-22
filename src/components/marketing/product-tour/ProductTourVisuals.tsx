import { AxisLine, AxisPath, Node, UiBlock } from "@/components/marketing/resources/blog-detail/abstracts/primitives";

type Props = { className?: string };

export function ProductTourHeroWorkflow({ className = "" }: Props) {
  return (
    <div
      className={`relative border border-brand-line/80 bg-gradient-to-br from-white via-[#FAFCFE] to-[#EEF4FA] p-4 sm:p-5 ${className}`}
      data-design-layer="ProductTourHeroWorkflow"
      data-abstract="hero-workflow"
    >
      <svg className="mx-auto block h-auto w-full max-w-[360px]" viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={118} y={16} w={124} h={28} label="PROJECT" emphasis />
        <AxisLine x1={180} y1={44} x2={180} y2={64} ambient />
        <Node cx={180} cy={68} active />
        <UiBlock x={118} y={72} w={124} h={26} label="FIELD" />
        <AxisLine x1={180} y1={98} x2={180} y2={118} ambient />
        <Node cx={180} cy={122} active />
        <UiBlock x={118} y={126} w={124} h={26} label="FINANCIAL" />
        <AxisLine x1={180} y1={152} x2={180} y2={172} ambient />
        <Node cx={180} cy={176} active />
        <UiBlock x={108} y={180} w={144} h={28} label="INTELLIGENCE" emphasis />
        <UiBlock x={24} y={48} w={72} h={36} label="DOCS" />
        <UiBlock x={264} y={52} w={72} h={32} label="JOB COST" />
        <AxisPath d="M96 66 H118" ambient />
        <AxisPath d="M242 68 H264" ambient />
        <UiBlock x={28} y={228} w={80} h={32} label="DAILY LOG" />
        <UiBlock x={252} y={232} w={80} h={28} label="REPORT" />
        <AxisPath d="M68 228 V200 M68 200 H118" ambient quiet />
        <AxisPath d="M292 232 V204 M292 204 H252" ambient quiet />
        <circle cx="180" cy="68" r="3" fill="#FF6A00" opacity="0.9" />
        <circle cx="180" cy="122" r="2.5" fill="#FF6A00" opacity="0.75" />
      </svg>
    </div>
  );
}

export function PlatformSectionAbstract() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden opacity-[0.08]" aria-hidden="true">
      <svg className="mx-auto h-full w-full max-w-4xl" viewBox="0 0 800 96" preserveAspectRatio="none">
        <AxisPath d="M400 0 V96 M120 48 H680" ambient />
        <Node cx={400} cy={48} active />
        <Node cx={120} cy={48} />
        <Node cx={680} cy={48} />
      </svg>
    </div>
  );
}

export function FinancialSectionAbstract() {
  return (
    <svg className="pointer-events-none absolute left-0 right-0 top-0 h-16 w-full opacity-[0.14]" viewBox="0 0 1200 64" preserveAspectRatio="none" aria-hidden="true">
      <AxisPath d="M0 32 H1200" ambient />
      <Node cx={200} cy={32} active />
      <Node cx={600} cy={32} />
      <Node cx={1000} cy={32} />
    </svg>
  );
}

export function FieldSectionAbstract() {
  return (
    <svg className="pointer-events-none absolute right-6 top-16 hidden h-40 w-16 opacity-[0.12] lg:block" viewBox="0 0 64 160" aria-hidden="true">
      <AxisLine x1={32} y1={8} x2={32} y2={152} ambient quiet />
      <Node cx={32} cy={40} active />
      <Node cx={32} cy={120} />
      <AxisPath d="M32 80 H56" ambient />
    </svg>
  );
}

export function AISectionAbstract() {
  return (
    <svg className="pointer-events-none absolute left-8 top-20 hidden h-32 w-40 opacity-[0.1] lg:block" viewBox="0 0 160 128" aria-hidden="true">
      <AxisPath d="M8 64 H56 M56 64 H104 M104 64 H152" ambient />
      <Node cx={56} cy={64} active />
      <Node cx={104} cy={64} />
    </svg>
  );
}

export function TourSectionAbstract({ variant }: { variant: "platform" | "financial" | "field" | "ai" | "cta" }) {
  if (variant === "financial") {
    return (
      <svg className="pointer-events-none absolute right-4 top-8 hidden h-28 w-24 opacity-[0.12] lg:block" viewBox="0 0 96 112" fill="none" aria-hidden="true">
        <AxisPath d="M12 56 H84 M48 20 V92" ambient />
        <Node cx={12} cy={56} active />
        <Node cx={84} cy={56} />
      </svg>
    );
  }
  if (variant === "field") {
    return (
      <svg className="pointer-events-none absolute left-4 top-12 hidden h-24 w-20 opacity-[0.11] lg:block" viewBox="0 0 80 96" fill="none" aria-hidden="true">
        <AxisLine x1={40} y1={8} x2={40} y2={88} ambient quiet />
        <Node cx={40} cy={28} active />
        <Node cx={40} cy={68} />
        <AxisPath d="M40 48 H68" ambient />
      </svg>
    );
  }
  if (variant === "ai") {
    return (
      <svg className="pointer-events-none absolute right-6 bottom-10 hidden h-20 w-32 opacity-[0.1] lg:block" viewBox="0 0 128 80" fill="none" aria-hidden="true">
        <AxisPath d="M8 40 H48 M48 40 H88 M88 40 H120" ambient />
        <Node cx={48} cy={40} active />
        <Node cx={88} cy={40} />
      </svg>
    );
  }
  if (variant === "cta") {
    return (
      <svg className="mx-auto h-16 w-40 opacity-80" viewBox="0 0 160 64" fill="none" aria-hidden="true">
        <AxisPath d="M20 32 H140" ambient />
        <Node cx={50} cy={32} active />
        <Node cx={110} cy={32} />
      </svg>
    );
  }
  return (
    <svg className="pointer-events-none absolute right-8 top-10 hidden h-24 w-20 opacity-[0.1] lg:block" viewBox="0 0 80 96" fill="none" aria-hidden="true">
      <AxisLine x1={40} y1={12} x2={40} y2={84} ambient quiet />
      <Node cx={40} cy={32} active />
    </svg>
  );
}
