import { AxisLine, AxisPath, Eyebrow, Node, UiBlock } from "../resources/blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Premium comparison framework tree for Comparisons hub hero. */
export function ComparisonHeroVisual({ className = "" }: Props) {
  const branches = [
    { y: 88, label: "CAPABILITIES" },
    { y: 112, label: "WORKFLOWS" },
    { y: 136, label: "FINANCIALS" },
    { y: 160, label: "FIELD OPS" },
    { y: 184, label: "TEAM FIT" },
  ];

  return (
    <div
      className={`w-full max-w-[380px] rounded-sm border border-brand-line/80 bg-white shadow-[0_10px_32px_-18px_rgba(15,23,42,0.18)] ${className}`}
      data-design-layer="ComparisonHeroVisual"
      aria-hidden="true"
    >
      <div className="border-b border-brand-line/70 bg-[#F7F9FC] px-3 py-2.5">
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[#111827]/70">
          Comparison framework
        </span>
      </div>
      <svg className="block h-auto w-full" viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={24} y={20} w={104} h={24} label="VERTEXBUILD" emphasis />
        <AxisLine x1={76} y1={44} x2={76} y2={208} ambient />
        <Node cx={76} cy={56} active />
        {branches.map((b, i) => (
          <g key={b.label}>
            <AxisPath d={`M76 ${b.y - 4} H108`} ambient quiet />
            <Node cx={112} cy={b.y} active={i === 0 || i === branches.length - 1} />
            <UiBlock x={120} y={b.y - 8} w={i === 3 ? 88 : 96} h={18} label={b.label} emphasis={i === 0} />
          </g>
        ))}
        <AxisLine x1={24} y1={216} x2={356} y2={216} ambient quiet />
        <Eyebrow x={24} y={222} text="COMPARISON PATHS" />
        <UiBlock x={200} y={208} w={72} h={16} label="Platform A" />
        <AxisPath d="M276 216 H300" ambient quiet />
        <Node cx={308} cy={216} active />
        <UiBlock x={316} y={208} w={48} h={16} label="B" />
      </svg>
    </div>
  );
}
