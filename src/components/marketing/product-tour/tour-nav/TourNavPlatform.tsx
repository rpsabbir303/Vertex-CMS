"use client";

type Node = { index: number; label: string; short: string };

type Props = {
  nodes: Node[];
  activeStep: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
};

/** Platform: node selection + subtle step controls. */
export function TourNavPlatform({ nodes, activeStep, onSelect, onPrev, onNext, isFirst, isLast }: Props) {
  return (
    <div className="mt-6 border-t border-brand-line/70 pt-5" data-design-layer="content">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/70">Explore connected modules</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {nodes.map((node) => {
          const active = node.index === activeStep;
          return (
            <button
              key={node.index}
              type="button"
              onClick={() => onSelect(node.index)}
              aria-current={active ? "step" : undefined}
              className={`rounded-sm border px-3 py-2 text-left transition ${
                active
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-brand-line/80 bg-white text-black hover:border-brand-blue/40"
              }`}
            >
              <span className={`block text-[10px] font-bold tabular-nums ${active ? "text-brand-orange" : "text-brand-orange"}`}>
                {String(node.index + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.08em]">{node.short}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button type="button" disabled={isFirst} onClick={onPrev} className="text-[11px] font-semibold text-[#111827] enabled:text-black">
          ← Previous
        </button>
        <button type="button" disabled={isLast} onClick={onNext} className="text-[11px] font-semibold text-brand-blue enabled:hover:underline">
          Next →
        </button>
      </div>
    </div>
  );
}
