import { AxisLine, AxisPath, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import { ResourcePageAtmosphere } from "../blog-detail/abstracts/ResourcePageAtmosphere";

type Props = { className?: string };

/** Page-wide ambient for Guides listing — connected product knowledge system. */
export function GuideAbstractSystem({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <ResourcePageAtmosphere />
      <div className="absolute inset-0 select-none" data-design-layer="GuideListingAbstractSystem">
        <svg
          className="absolute -left-2 top-[28%] hidden h-[200px] w-[120px] opacity-[0.18] lg:block lg:opacity-[0.24]"
          viewBox="0 0 120 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <AxisLine x1={24} y1={16} x2={24} y2={180} ambient />
          <Node cx={24} cy={48} active />
          <Node cx={24} cy={108} />
          <Node cx={24} cy={168} active />
          <AxisPath d="M24 48 H72" ambient quiet />
          <UiBlock x={76} y={40} w={36} h={16} label="FIELD" />
        </svg>
        <svg
          className="absolute right-0 top-[42%] hidden h-[180px] w-[100px] opacity-[0.16] xl:block xl:opacity-[0.22]"
          viewBox="0 0 100 180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <AxisLine x1={70} y1={20} x2={70} y2={160} ambient />
          <Node cx={70} cy={52} active />
          <Node cx={70} cy={120} />
          <UiBlock x={8} y={44} w={52} h={16} label="FINANCIAL" />
        </svg>
      </div>
    </div>
  );
}
