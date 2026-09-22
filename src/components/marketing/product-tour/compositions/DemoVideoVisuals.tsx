import { AxisLine, AxisPath, Node } from "@/components/marketing/resources/blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Line-art behind demo frame — platform → field → financial → intelligence. */
export function DemoVideoBackdrop({ className = "" }: Props) {
  return (
    <svg
      className={`pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,420px)] w-[min(100%,920px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] ${className}`}
      viewBox="0 0 920 420"
      fill="none"
      aria-hidden="true"
      data-abstract="demo-video-backdrop"
    >
      <AxisLine x1={460} y1={40} x2={460} y2={120} ambient quiet />
      <text x={460} y={32} textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600">
        PROJECT
      </text>
      <AxisPath d="M200 200 H460 M460 200 H720" ambient quiet />
      <text x={200} y={192} textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="var(--font-sans)" fontWeight="600">
        FIELD
      </text>
      <text x={460} y={192} textAnchor="middle" fill="#0A2744" fontSize="9" fontFamily="var(--font-sans)" fontWeight="700">
        PLATFORM
      </text>
      <text x={720} y={192} textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="var(--font-sans)" fontWeight="600">
        FINANCIAL
      </text>
      <Node cx={460} cy={120} active />
      <Node cx={200} cy={200} />
      <Node cx={720} cy={200} />
      <AxisLine x1={460} y1={200} x2={460} y2={280} ambient quiet />
      <text x={460} y={300} textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="var(--font-sans)" fontWeight="600">
        INTELLIGENCE
      </text>
      <Node cx={460} cy={280} active />
      <circle cx={460} cy={120} r="3" fill="#FF6A00" opacity="0.75" />
      <circle cx={460} cy={280} r="2.5" fill="#FF6A00" opacity="0.6" />
    </svg>
  );
}

export function DemoVideoVerticalFlow({ className = "" }: Props) {
  return (
    <svg className={`mx-auto h-24 w-8 opacity-20 sm:hidden ${className}`} viewBox="0 0 32 96" aria-hidden="true">
      <AxisLine x1={16} y1={8} x2={16} y2={88} ambient quiet />
      <Node cx={16} cy={20} active />
      <Node cx={16} cy={48} />
      <Node cx={16} cy={76} active />
    </svg>
  );
}
