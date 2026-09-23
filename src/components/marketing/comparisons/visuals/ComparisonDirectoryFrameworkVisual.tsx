import { AxisLine, AxisPath, Eyebrow, Node, UiBlock } from "../../resources/blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Single shared framework visual for Supported Comparisons directory. */
export function ComparisonDirectoryFrameworkVisual({ className = "" }: Props) {
  return (
    <div
      className={`border border-brand-line/80 bg-white px-4 py-5 sm:px-5 sm:py-6 ${className}`}
      data-design-layer="ComparisonDirectoryFrameworkVisual"
      aria-hidden="true"
    >
      <p className="text-center font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#111827]/55">
        Comparison framework
      </p>
      <svg className="mx-auto mt-3 block h-auto w-full max-w-[200px]" viewBox="0 0 200 168" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={72} y={8} w={56} h={20} label="COMPARE" emphasis />
        <AxisLine x1={100} y1={28} x2={100} y2={52} ambient quiet />
        <Node cx={100} cy={36} active />
        <AxisPath d="M100 52 H48" ambient quiet />
        <UiBlock x={16} y={56} w={64} h={18} label="CAPABILITIES" />
        <Node cx={48} cy={65} active />
        <AxisPath d="M100 52 H100 H152" ambient quiet />
        <UiBlock x={68} y={56} w={64} h={18} label="WORKFLOWS" />
        <Node cx={100} cy={65} />
        <AxisPath d="M100 52 H152" ambient quiet />
        <UiBlock x={120} y={56} w={64} h={18} label="TEAM FIT" />
        <Node cx={152} cy={65} active />
        <AxisLine x1={100} y1={78} x2={100} y2={108} ambient quiet />
        <Node cx={100} cy={88} />
        <Eyebrow x={58} y={112} text="DOCUMENTED" />
        <UiBlock x={52} y={126} w={96} h={20} label="EVIDENCE" emphasis />
      </svg>
    </div>
  );
}
