import { AxisLine, AxisPath, Eyebrow, Node } from "./primitives";

type Props = {
  className?: string;
  mode?: "rails" | "strip" | "full";
};

/**
 * MediaContextAbstract — continuation around featured media (never over the photo).
 */
export function MediaContextAbstract({ className = "", mode = "full" }: Props) {
  const showRails = mode === "rails" || mode === "full";
  const showStrip = mode === "strip" || mode === "full";

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="MediaContextAbstract"
      data-axis-stage="media"
      aria-hidden="true"
    >
      {showRails ? (
        <>
          <div className="absolute inset-y-0 left-0 hidden w-20 sm:block">
            <svg className="h-full w-full" viewBox="0 0 80 140" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg" fill="none">
              <Eyebrow x={4} y={48} text="FIELD ACTIVITY" />
              <Node cx={12} cy={64} active />
              <AxisLine x1={12} y1={64} x2={72} y2={64} ambient />
            </svg>
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-24 sm:block">
            <svg className="h-full w-full" viewBox="0 0 96 140" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg" fill="none">
              <AxisLine x1={72} y1={64} x2={12} y2={64} ambient />
              <Node cx={72} cy={64} active />
              <Eyebrow x={4} y={48} text="FINANCIAL VISIBILITY" />
            </svg>
          </div>
          {/* Top bridge from hero */}
          <svg
            className="absolute -top-6 left-1/2 hidden h-8 w-6 -translate-x-1/2 opacity-45 sm:block"
            viewBox="0 0 24 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <AxisLine x1={12} y1={0} x2={12} y2={28} ambient />
            <Node cx={12} cy={28} active />
          </svg>
        </>
      ) : null}

      {showStrip ? (
        <div className="mt-2.5">
          <svg className="mx-auto block h-9 w-full max-w-4xl opacity-85" viewBox="0 0 720 36" xmlns="http://www.w3.org/2000/svg" fill="none">
            <AxisLine x1={16} y1={24} x2={704} y2={24} ambient quiet />
            <Node cx={80} cy={24} active />
            <Node cx={250} cy={24} />
            <Node cx={430} cy={24} active />
            <Node cx={620} cy={24} />
            <Eyebrow x={36} y={12} text="FIELD ACTIVITY" />
            <Eyebrow x={168} y={12} text="SHARED RECORD" />
            <Eyebrow x={380} y={12} text="JOB COST" />
            <Eyebrow x={530} y={12} text="FINANCIAL VIEW" />
            <AxisPath d="M80 24 L250 24" ambient quiet />
            <AxisPath d="M430 24 L620 24" ambient quiet />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
