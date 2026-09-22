import { AxisLine, AxisPath, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";

type Props = { className?: string };

/** Premium live-session visual for Webinars hero — discovery / webinar experience. */
export function WebinarHeroLiveSessionVisual({ className = "" }: Props) {
  return (
    <div
      className={`w-full max-w-[360px] rounded-sm border border-brand-line/80 bg-white shadow-[0_8px_28px_-18px_rgba(15,23,42,0.16)] ${className}`}
      data-design-layer="WebinarHeroLiveSessionVisual"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-brand-line/70 bg-[#F7F9FC] px-3 py-2">
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#111827]">
          vertexbuild.com / live
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-sm bg-brand-orange/12 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          Live
        </span>
      </div>
      <svg className="block h-auto w-full" viewBox="0 0 360 232" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect x={16} y={16} width={328} height={128} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FFFFFF" />
        <Eyebrow x={28} y={28} text="BROADCAST" />
        <UiBlock x={28} y={44} w={152} h={22} label="Session in progress" emphasis />
        <AxisLine x1={28} y1={74} x2={332} y2={74} ambient quiet />
        <UiBlock x={28} y={84} w={120} h={18} label="Platform walkthrough" />
        <UiBlock x={156} y={84} w={64} h={18} label="Live Q&A" />
        <UiBlock x={252} y={84} w={68} h={18} label="Insights" />
        <circle cx={304} cy={118} r={16} stroke="#C5D4E4" strokeWidth={1} fill="#F4F7FB" />
        <path d="M299 112v12l10-6-10-6z" fill="#000000" opacity={0.8} />

        <rect x={16} y={156} width={196} height={64} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#F7F9FC" />
        <Eyebrow x={28} y={166} text="SESSION AGENDA" />
        <UiBlock x={28} y={182} w={78} h={18} label="Operations" />
        <UiBlock x={112} y={182} w={88} h={18} label="Field workflow" />
        <Node cx={188} cy={191} active />

        <rect x={224} y={156} width={120} height={64} rx={2} stroke="#C5D4E4" strokeWidth={1} fill="#FFFFFF" />
        <Eyebrow x={236} y={166} text="ATTENDEE" />
        <UiBlock x={236} y={182} w={96} h={18} label="Questions" />
        <AxisPath d="M284 200 H332" ambient quiet />
        <Node cx={332} cy={200} active />

        <AxisLine x1={180} y1={148} x2={180} y2={156} ambient quiet />
        <Node cx={180} cy={152} active />
      </svg>
    </div>
  );
}
