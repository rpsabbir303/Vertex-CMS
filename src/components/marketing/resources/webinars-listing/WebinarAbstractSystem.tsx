import { AxisLine, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import { ResourcePageAtmosphere } from "../blog-detail/abstracts/ResourcePageAtmosphere";

type Props = { className?: string };

export function WebinarAbstractSystem({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <ResourcePageAtmosphere />
      <div className="absolute inset-0 select-none" data-design-layer="WebinarListingAbstractSystem">
        <svg
          className="absolute -left-2 top-[30%] hidden h-[170px] w-[90px] opacity-[0.16] lg:block lg:opacity-[0.22]"
          viewBox="0 0 90 170"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <UiBlock x={8} y={8} w={52} h={18} label="SESSION" />
          <AxisLine x1={34} y1={28} x2={34} y2={150} ambient />
          <Node cx={34} cy={52} active />
          <Node cx={34} cy={120} />
        </svg>
      </div>
    </div>
  );
}
