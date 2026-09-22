import { AxisLine, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import { ResourcePageAtmosphere } from "../blog-detail/abstracts/ResourcePageAtmosphere";

type Props = { className?: string };

export function BlogAbstractSystem({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <ResourcePageAtmosphere />
      <div className="absolute inset-0 select-none" data-design-layer="BlogListingAbstractSystem">
        <svg
          className="absolute right-4 top-[22%] hidden h-[140px] w-[100px] opacity-[0.14] lg:block lg:opacity-[0.2]"
          viewBox="0 0 100 140"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <UiBlock x={10} y={12} w={56} h={16} label="ARTICLE" />
          <AxisLine x1={38} y1={32} x2={38} y2={128} ambient />
          <Node cx={38} cy={48} active />
          <Node cx={38} cy={96} />
        </svg>
      </div>
    </div>
  );
}
