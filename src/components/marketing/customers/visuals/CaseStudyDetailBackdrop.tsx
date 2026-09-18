import { CustomerAbstractGrid } from "./CustomerAbstractGrid";

export type CaseStudyBackdropVariant =
  | "hero"
  | "context"
  | "challenge"
  | "approach"
  | "capabilities"
  | "results"
  | "quote"
  | "explore"
  | "related";

type Props = {
  variant: CaseStudyBackdropVariant;
};

const SVG_BASE = {
  width: "100%",
  height: "100%",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none" as const,
};

export function CaseStudyDetailBackdrop({ variant }: Props) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      data-design-layer="CaseStudyDetailBackdrop"
      data-capture="figma-decor"
    >
      {variant === "hero" ? <HeroBackdrop /> : null}
      {variant === "context" ? <ContextBackdrop /> : null}
      {variant === "challenge" ? <ChallengeBackdrop /> : null}
      {variant === "approach" ? <ApproachBackdrop /> : null}
      {variant === "capabilities" ? <CapabilitiesBackdrop /> : null}
      {variant === "results" ? <ResultsBackdrop /> : null}
      {variant === "explore" ? <ExploreBackdrop /> : null}
      {variant === "related" ? <RelatedBackdrop /> : null}
    </div>
  );
}

function HeroBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.65} heightRatio={0.95} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 520" {...SVG_BASE}>
        <line x1={200} y1={80} x2={200} y2={440} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={200} y1={120} x2={360} y2={120} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={360} y1={120} x2={360} y2={200} stroke="#B7C8D8" strokeWidth={1} opacity={0.6} />
        <circle cx={200} cy={440} r={3} fill="#FF6A00" opacity={0.55} />
        <circle cx={360} cy={200} r={3} fill="#146EF5" opacity={0.4} />
        <polyline points="1000,100 1100,100 1100,180" fill="none" stroke="#DCE5EF" strokeWidth={1} />
        <circle cx={1100} cy={180} r={2.5} fill="#FF6A00" opacity={0.45} />
      </svg>
    </>
  );
}

function ContextBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.35} heightRatio={0.9} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 360" {...SVG_BASE}>
        <line x1={80} y1={40} x2={400} y2={40} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={80} cy={40} r={2.5} fill="#146EF5" opacity={0.35} />
      </svg>
    </>
  );
}

function ChallengeBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.4} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full max-lg:opacity-80" viewBox="0 0 1320 400" {...SVG_BASE}>
        <line x1={1100} y1={60} x2={1100} y2={340} stroke="#DCE5EF" strokeWidth={1} strokeDasharray="4 6" />
        <line x1={1020} y1={120} x2={1180} y2={120} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={1100} cy={120} r={3} fill="#FF6A00" opacity={0.5} />
        <polyline points="1180,280 1100,280 1100,340" fill="none" stroke="#DCE5EF" strokeWidth={1} />
      </svg>
    </>
  );
}

function ApproachBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.45} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 480" {...SVG_BASE}>
        <line x1={120} y1={80} x2={120} y2={400} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={120} y1={200} x2={280} y2={200} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={280} y1={200} x2={280} y2={320} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <circle cx={120} cy={80} r={3} fill="#146EF5" opacity={0.35} />
        <circle cx={280} cy={320} r={3} fill="#FF6A00" opacity={0.45} />
      </svg>
    </>
  );
}

function CapabilitiesBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.3} heightRatio={0.88} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 420" {...SVG_BASE}>
        <line x1={60} y1={100} x2={1260} y2={100} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={60} y1={280} x2={1260} y2={280} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={660} cy={190} r={2.5} fill="#146EF5" opacity={0.3} />
      </svg>
    </>
  );
}

function ResultsBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.5} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 440" {...SVG_BASE}>
        <line x1={100} y1={320} x2={1220} y2={320} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={100} y1={320} x2={100} y2={120} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={400} y1={320} x2={400} y2={300} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <line x1={800} y1={320} x2={800} y2={290} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <circle cx={100} cy={320} r={3} fill="#FF6A00" opacity={0.5} />
      </svg>
    </>
  );
}

function ExploreBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.25} heightRatio={0.85} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 280" {...SVG_BASE}>
        <line x1={200} y1={140} x2={1120} y2={140} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={660} cy={140} r={3} fill="#146EF5" opacity={0.3} />
      </svg>
    </>
  );
}

function RelatedBackdrop() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.4} heightRatio={0.9} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 400" {...SVG_BASE}>
        <polyline points="100,60 180,60 180,120" fill="none" stroke="#DCE5EF" strokeWidth={1} />
        <polyline points="1220,340 1140,340 1140,280" fill="none" stroke="#DCE5EF" strokeWidth={1} />
      </svg>
    </>
  );
}
