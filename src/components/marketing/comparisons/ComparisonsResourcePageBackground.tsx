import { ResourcePageAtmosphere } from "../resources/blog-detail/abstracts/ResourcePageAtmosphere";
import { AxisLine, AxisPath, Node } from "../resources/blog-detail/abstracts/primitives";

type Props = {
  className?: string;
};

/** Section anchor Y positions in spine viewBox (0–5400) — stretch with page height. */
const ANCHOR_Y = [280, 880, 1480, 2080, 2680, 3280, 3880, 4480, 5080] as const;

const LEFT_X = 14;
const RIGHT_X = 1426;
const MID_X = 720;

function WorkflowSectionBridge({ y, index }: { y: number; index: number }) {
  const elbow = index % 2 === 0 ? 200 : 260;
  const jog = index % 3 === 0 ? 36 : 28;
  return (
    <>
      <AxisPath
        d={`M${LEFT_X} ${y} H${MID_X - elbow} V${y + jog} H${MID_X + elbow} V${y} H${RIGHT_X}`}
        ambient={false}
        quiet={false}
      />
      <Node cx={LEFT_X} cy={y} active={index % 2 === 0} />
      <Node cx={MID_X - elbow} cy={y + jog} active={index % 3 === 1} />
      <Node cx={MID_X + elbow} cy={y} />
      <Node cx={RIGHT_X} cy={y} active={index % 2 === 1} />
    </>
  );
}

/** Full-page workflow spine — lines and nodes only (no floating labels). */
function ComparisonsPageWorkflowSpine() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden select-none md:block"
      data-design-layer="ComparisonsPageWorkflowSpine"
      aria-hidden="true"
    >
      <svg
        className="absolute left-1/2 top-0 h-full w-full max-w-[1440px] -translate-x-1/2 opacity-[0.5] lg:opacity-[0.58] xl:opacity-[0.62]"
        viewBox="0 0 1440 5400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AxisLine x1={LEFT_X} y1={24} x2={LEFT_X} y2={5376} ambient={false} quiet={false} />
        <AxisLine x1={RIGHT_X} y1={24} x2={RIGHT_X} y2={5376} ambient={false} quiet={false} />
        <AxisLine x1={MID_X} y1={120} x2={MID_X} y2={5280} ambient quiet />

        <Node cx={LEFT_X} cy={24} active />
        <AxisPath d={`M${LEFT_X} 52 H52`} ambient={false} quiet />
        <Node cx={LEFT_X} cy={88} />
        <AxisPath d={`M${LEFT_X} 120 H48`} ambient quiet />

        <AxisPath d={`M${RIGHT_X - 14} 32 H${MID_X + 120}`} ambient={false} quiet />
        <Node cx={RIGHT_X - 14} cy={32} active />
        <Node cx={RIGHT_X - 14} cy={100} />
        <AxisPath d={`M${RIGHT_X - 14} 100 H${MID_X + 80}`} ambient quiet />

        {ANCHOR_Y.map((y, index) => (
          <g key={y}>
            <WorkflowSectionBridge y={y} index={index} />
            <AxisLine x1={LEFT_X} y1={y} x2={LEFT_X} y2={y + 520} ambient quiet />
            <AxisLine x1={RIGHT_X} y1={y} x2={RIGHT_X} y2={y + 520} ambient quiet />
          </g>
        ))}

        <AxisLine x1={182} y1={0} x2={182} y2={5400} ambient quiet />
        <AxisLine x1={1248} y1={0} x2={1248} y2={5400} ambient quiet />
        {ANCHOR_Y.map((y, i) => (
          <g key={`gutter-${y}`}>
            <Node cx={182} cy={y} active={i % 4 === 0} />
            <Node cx={1248} cy={y} active={i % 4 === 2} />
            <AxisPath d={`M182 ${y} H${MID_X - 120}`} ambient quiet />
            <AxisPath d={`M${MID_X + 120} ${y} H1248`} ambient quiet />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Text-free margin fragments (replaces label-bearing resource gutter SVGs). */
const MARGIN_BAND_TOPS = [80, 780, 1480, 2180, 2880, 3580, 4280, 4980];

function ComparisonsTextFreeMarginBands() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 hidden md:block" aria-hidden="true">
      {MARGIN_BAND_TOPS.map((top, band) => (
        <svg
          key={top}
          className="absolute left-[max(0px,calc(50%-720px))] opacity-[0.34] lg:opacity-[0.4]"
          style={{ top }}
          width={88}
          height={280}
          viewBox="0 0 88 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AxisLine x1={14} y1={16} x2={14} y2={260} ambient quiet />
          <Node cx={14} cy={48 + (band % 3) * 40} active />
          <Node cx={14} cy={120 + (band % 2) * 32} />
          <Node cx={14} cy={200} active={band % 2 === 0} />
          <AxisPath d={`M14 ${80 + (band % 4) * 12} H${48 + (band % 2) * 8}`} ambient quiet />
          <AxisPath d={`M14 ${160 + (band % 3) * 10} H52`} ambient quiet />
        </svg>
      ))}
      {MARGIN_BAND_TOPS.map((top, band) => (
        <svg
          key={`r-${top}`}
          className="absolute right-[max(0px,calc(50%-720px))] opacity-[0.32] lg:opacity-[0.38]"
          style={{ top: top + 40 }}
          width={92}
          height={260}
          viewBox="0 0 92 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AxisLine x1={78} y1={20} x2={78} y2={240} ambient quiet />
          <Node cx={78} cy={52 + (band % 2) * 36} active />
          <Node cx={78} cy={140} />
          <AxisPath d={`M78 ${100 + band * 3} H36`} ambient quiet />
          <AxisPath d={`M78 ${180} H40`} ambient quiet />
        </svg>
      ))}
    </div>
  );
}

function ComparisonsMobileAbstractStrip() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-24 px-4 md:hidden"
      data-design-layer="ComparisonsMobileAbstractStrip"
      aria-hidden="true"
    >
      <svg className="mx-auto block h-8 w-full max-w-sm opacity-80" viewBox="0 0 320 32" fill="none">
        <AxisLine x1={8} y1={20} x2={312} y2={20} quiet />
        <Node cx={40} cy={20} active />
        <Node cx={120} cy={20} />
        <Node cx={200} cy={20} active />
        <Node cx={280} cy={20} />
        <AxisPath d="M40 20 H120" ambient quiet />
        <AxisPath d="M200 20 H280" ambient quiet />
      </svg>
    </div>
  );
}

/** Page-wide resource abstract for Comparisons — atmosphere + structural spine (no text labels). */
export function ComparisonsResourcePageBackground({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <ResourcePageAtmosphere />
      <ComparisonsMobileAbstractStrip />
      <ComparisonsPageWorkflowSpine />
      <ComparisonsTextFreeMarginBands />
    </div>
  );
}
