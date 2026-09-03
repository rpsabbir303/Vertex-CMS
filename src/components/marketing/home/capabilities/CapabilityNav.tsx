"use client";

import { useEffect, useRef, useState } from "react";
import { CAPABILITIES, type CapabilityId } from "./data";

type Props = {
  activeId: CapabilityId;
  onSelect: (id: CapabilityId) => void;
};

export function CapabilityNav({ activeId, onSelect }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const [indicator, setIndicator] = useState({ top: 12, height: 36 });

  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[activeId];
    if (!list || !item) return;
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    setIndicator({
      top: itemRect.top - listRect.top + 10,
      height: Math.max(28, Math.min(itemRect.height - 16, 48)),
    });
  }, [activeId]);

  return (
    <div className="relative">
      <div className="absolute bottom-2 left-0 top-2 w-px bg-white/10" aria-hidden="true" />
      <div
        className="absolute left-0 w-0.5 rounded-full bg-brand-orange transition-[top,height] duration-500 ease-out"
        style={{ top: indicator.top, height: indicator.height }}
        aria-hidden="true"
      />

      <ul ref={listRef} className="relative space-y-1" role="tablist" aria-label="Capabilities">
        {CAPABILITIES.map((cap) => {
          const active = cap.id === activeId;
          return (
            <li
              key={cap.id}
              ref={(el) => {
                itemRefs.current[cap.id] = el;
              }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`capability-preview-${cap.id}`}
                id={`capability-tab-${cap.id}`}
                onClick={() => onSelect(cap.id)}
                className={`group flex w-full flex-col rounded-lg px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                  active ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                }`}
              >
                <span className="flex items-baseline gap-3">
                  <span
                    className={`font-display text-[12px] font-semibold tabular-nums ${
                      active ? "text-brand-orange" : "text-slate-600"
                    }`}
                  >
                    {cap.number}
                  </span>
                  <span
                    className={`text-[15px] font-semibold sm:text-base ${
                      active ? "text-white" : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {cap.title}
                  </span>
                </span>
                <span
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="mt-2 block pl-8 text-[13px] leading-relaxed text-slate-400">
                      {cap.description}
                    </span>
                    <span className="mt-2 block pl-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                      {cap.story}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
