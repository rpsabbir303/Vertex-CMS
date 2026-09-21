import { AxisLine, AxisPath, Eyebrow, Node, UiBlock } from "./primitives";

type Props = {
  className?: string;
};

/**
 * RelatedKnowledgeAbstract — connected resource network (same system language).
 */
export function RelatedKnowledgeAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="ResourceRelatedAbstract"
      data-axis-stage="related"
      aria-hidden="true"
    >
      <svg className="block h-auto w-full max-w-[184px]" viewBox="0 0 184 196" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisPath d="M48 48 L88 72" ambient />
        <AxisPath d="M136 48 L88 72" ambient />
        <Node cx={48} cy={48} />
        <Node cx={136} cy={48} />
        <Eyebrow x={28} y={40} text="FIELD" />
        <Eyebrow x={112} y={40} text="FINANCIAL" />
        <Node cx={88} cy={72} active />
        <UiBlock x={52} y={80} w={72} h={22} label="RESOURCES" />
        <AxisLine x1={88} y1={102} x2={88} y2={128} ambient quiet />
        <Node cx={88} cy={128} active />
        <UiBlock x={24} y={136} w={40} h={18} label="BLOG" />
        <UiBlock x={72} y={136} w={44} h={18} label="GUIDE" />
        <UiBlock x={124} y={136} w={52} h={18} label="TEMPLATE" />
        <AxisPath d="M88 128 L44 145" ambient quiet />
        <AxisPath d="M88 128 L88 145" ambient quiet />
        <AxisPath d="M88 128 L132 145" ambient quiet />
        <Eyebrow x={68} y={178} text="SHARED CONTEXT" anchor="middle" />
      </svg>
    </div>
  );
}
