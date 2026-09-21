import { AxisLine, AxisPath, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import { ResourcePageAtmosphere } from "../blog-detail/abstracts/ResourcePageAtmosphere";

type Props = { className?: string };

export function TemplateAbstractSystem({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <ResourcePageAtmosphere />
      <div className="absolute inset-0 select-none" data-design-layer="TemplateListingAbstractSystem">
        <svg
          className="absolute -left-2 top-[32%] hidden h-[180px] w-[100px] opacity-[0.17] lg:block lg:opacity-[0.22]"
          viewBox="0 0 100 180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <UiBlock x={8} y={8} w={52} h={18} label="TEMPLATE" />
          <AxisLine x1={34} y1={28} x2={34} y2={160} ambient />
          <Node cx={34} cy={52} active />
          <Node cx={34} cy={120} />
        </svg>
        <svg
          className="absolute right-0 top-[48%] hidden h-[160px] w-[90px] opacity-[0.15] xl:block xl:opacity-[0.2]"
          viewBox="0 0 90 160"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <AxisPath d="M44 16 L44 140" ambient />
          <Node cx={44} cy={48} active />
          <UiBlock x={8} y={52} w={48} h={16} label="WORKFLOW" />
        </svg>
      </div>
    </div>
  );
}
