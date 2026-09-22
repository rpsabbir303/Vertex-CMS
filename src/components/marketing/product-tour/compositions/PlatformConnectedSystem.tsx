"use client";

import { AxisLine, AxisPath, Node, UiBlock } from "@/components/marketing/resources/blog-detail/abstracts/primitives";

type Props = {
  activeStep: number;
  onSelect: (step: number) => void;
};

const NODES = [
  { step: 0, label: "PROJECT", x: 180, y: 28, btnClass: "left-1/2 top-[6%] -translate-x-1/2" },
  { step: 1, label: "DOCUMENTS", x: 52, y: 108, btnClass: "left-[8%] top-[32%]" },
  { step: 3, label: "FINANCIAL", x: 308, y: 108, btnClass: "right-[8%] top-[32%]" },
  { step: 2, label: "FIELD", x: 180, y: 168, btnClass: "left-1/2 top-[52%] -translate-x-1/2" },
  { step: 4, label: "REPORTING", x: 180, y: 248, btnClass: "left-1/2 top-[76%] -translate-x-1/2" },
] as const;

export function PlatformConnectedSystem({ activeStep, onSelect }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[640px]" data-design-layer="PlatformConnectedSystem" data-abstract="platform-system">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 360 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <UiBlock x={128} y={96} w={104} h={32} label="PLATFORM" emphasis />
        <AxisLine x1={180} y1={52} x2={180} y2={92} ambient />
        <AxisPath d="M180 92 L180 120 M72 108 H128 M232 108 H288 M180 128 V160 M180 200 V232" ambient />
        <Node cx={180} cy={52} active={activeStep === 0} />
        <Node cx={72} cy={108} active={activeStep === 1} />
        <Node cx={288} cy={108} active={activeStep === 3} />
        <Node cx={180} cy={168} active={activeStep === 2} />
        <Node cx={180} cy={248} active={activeStep === 4} />
        <circle cx={180} cy={112} r="4" fill="#FF6A00" opacity={0.85} />
      </svg>

      <div className="relative aspect-[360/280] w-full">
        {NODES.map((node) => {
          const active = activeStep === node.step;
          return (
            <button
              key={node.step}
              type="button"
              onClick={() => onSelect(node.step)}
              aria-current={active ? "step" : undefined}
              className={`absolute ${node.btnClass} z-[1] min-w-[7.5rem] rounded-sm border px-3 py-2 text-center transition motion-reduce:transition-none ${
                active
                  ? "border-brand-navy bg-brand-navy text-white shadow-[0_8px_24px_-12px_rgba(10,39,68,0.45)]"
                  : "border-brand-line/80 bg-white/95 text-black opacity-75 hover:opacity-100"
              }`}
            >
              <span className="block text-[9px] font-bold tracking-[0.14em]">{node.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
