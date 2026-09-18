import { CustomerAbstractGrid } from "./CustomerAbstractGrid";

export type CustomersBackdropVariant =
  | "hero"
  | "logoWall"
  | "featured"
  | "caseStudies"
  | "testimonials"
  | "results"
  | "finalCta";

type Props = {
  variant: CustomersBackdropVariant;
};

const SVG_COMMON = {
  width: "100%",
  height: "100%",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none" as const,
};

/** Page-wide abstract SaaS geometry — real DOM/SVG for Figma html.to.design capture. */
export function CustomersSectionBackdrop({ variant }: Props) {
  return (
    <div
      className="cust-section-backdrop pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      data-design-layer="CustomersSectionBackdrop"
      data-capture="figma-decor"
    >
      <PageSpine />
      {variant === "hero" ? <HeroLayer /> : null}
      {variant === "logoWall" ? <LogoWallLayer /> : null}
      {variant === "featured" ? <FeaturedStoryLayer /> : null}
      {variant === "caseStudies" ? <CaseStudiesLayer /> : null}
      {variant === "testimonials" ? <TestimonialsLayer /> : null}
      {variant === "results" ? <ResultsLayer /> : null}
      {variant === "finalCta" ? <FinalCtaLayer /> : null}
    </div>
  );
}

function PageSpine() {
  return (
    <svg className="absolute inset-0 h-full w-full max-lg:hidden" viewBox="0 0 1320 400" {...SVG_COMMON}>
      <line x1={1080} y1={0} x2={1080} y2={400} stroke="#DCE5EF" strokeWidth={1} strokeDasharray="6 8" opacity={0.85} />
      <circle cx={1080} cy={48} r={3} fill="#146EF5" opacity={0.35} />
      <circle cx={1080} cy={200} r={2.5} fill="#FF6A00" opacity={0.55} />
      <circle cx={1080} cy={352} r={3} fill="#146EF5" opacity={0.25} />
    </svg>
  );
}

function HeroLayer() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.7} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 520" {...SVG_COMMON}>
        <line x1={180} y1={420} x2={180} y2={120} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={180} y1={120} x2={420} y2={120} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={420} y1={120} x2={420} y2={40} stroke="#B7C8D8" strokeWidth={1} opacity={0.6} />
        <circle cx={180} cy={420} r={4} fill="#FF6A00" opacity={0.7} />
        <circle cx={420} cy={40} r={3} fill="#146EF5" opacity={0.45} />
        <rect x={960} y={80} width={120} height={72} fill="none" stroke="#E8EEF5" strokeWidth={1} rx={4} />
        <line x1={1020} y1={152} x2={1020} y2={220} stroke="#DCE5EF" strokeWidth={1} />
        <circle cx={1020} cy={228} r={3} fill="#FF6A00" opacity={0.5} />
      </svg>
    </>
  );
}

function LogoWallLayer() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.5} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 480" {...SVG_COMMON}>
        <line x1={120} y1={60} x2={520} y2={60} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={800} y1={60} x2={1200} y2={60} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={660} y1={60} x2={660} y2={420} stroke="#E8EEF5" strokeWidth={1} strokeDasharray="4 6" />
        <circle cx={120} cy={60} r={3} fill="#146EF5" opacity={0.4} />
        <circle cx={520} cy={60} r={2.5} fill="#FF6A00" opacity={0.45} />
        <circle cx={800} cy={60} r={3} fill="#146EF5" opacity={0.35} />
        <circle cx={1200} cy={60} r={2.5} fill="#146EF5" opacity={0.3} />
        <line x1={660} y1={200} x2={920} y2={200} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={660} y1={280} x2={880} y2={280} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={660} cy={200} r={2} fill="#FF6A00" opacity={0.4} />
        <circle cx={660} cy={280} r={2} fill="#146EF5" opacity={0.35} />
      </svg>
    </>
  );
}

function FeaturedStoryLayer() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.4} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 560" {...SVG_COMMON}>
        <polyline
          points="80,100 80,460"
          fill="none"
          stroke="#DCE5EF"
          strokeWidth={1}
        />
        <line x1={80} y1={100} x2={240} y2={100} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={80} y1={220} x2={200} y2={220} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={80} y1={340} x2={220} y2={340} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={80} y1={460} x2={260} y2={460} stroke="#DCE5EF" strokeWidth={1} />
        <circle cx={80} cy={100} r={3} fill="#146EF5" opacity={0.4} />
        <circle cx={80} cy={220} r={2.5} fill="#FF6A00" opacity={0.5} />
        <circle cx={80} cy={340} r={2.5} fill="#146EF5" opacity={0.35} />
        <circle cx={80} cy={460} r={3} fill="#FF6A00" opacity={0.45} />
        <rect x={620} y={120} width={1} height={320} fill="#E8EEF5" />
        <line x1={620} y1={200} x2={720} y2={200} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={620} y1={320} x2={760} y2={320} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={620} y1={440} x2={700} y2={440} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={720} cy={200} r={2} fill="#146EF5" opacity={0.3} />
        <circle cx={760} cy={320} r={2} fill="#FF6A00" opacity={0.35} />
      </svg>
    </>
  );
}

function CaseStudiesLayer() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.55} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 640" {...SVG_COMMON}>
        <line x1={40} y1={180} x2={1280} y2={180} stroke="#DCE5EF" strokeWidth={1} opacity={0.7} />
        <line x1={40} y1={420} x2={1280} y2={420} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={40} y1={180} x2={40} y2={420} stroke="#E8EEF5" strokeWidth={1} strokeDasharray="5 7" opacity={0.5} />
        <line x1={1280} y1={180} x2={1280} y2={420} stroke="#E8EEF5" strokeWidth={1} strokeDasharray="5 7" opacity={0.5} />
        <circle cx={40} cy={180} r={2.5} fill="#146EF5" opacity={0.35} />
        <circle cx={1280} cy={420} r={2.5} fill="#FF6A00" opacity={0.4} />
        <circle cx={660} cy={300} r={3} fill="#146EF5" opacity={0.25} />
        <polyline points="1100,80 1180,80 1180,140" fill="none" stroke="#DCE5EF" strokeWidth={1} />
        <polyline points="140,500 60,500 60,440" fill="none" stroke="#DCE5EF" strokeWidth={1} />
      </svg>
    </>
  );
}

function TestimonialsLayer() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.35} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 480" {...SVG_COMMON}>
        <line x1={120} y1={140} x2={1200} y2={140} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={120} y1={320} x2={1200} y2={320} stroke="#DCE5EF" strokeWidth={1} opacity={0.6} />
        <line x1={440} y1={140} x2={440} y2={320} stroke="#E8EEF5" strokeWidth={1} strokeDasharray="4 6" />
        <line x1={880} y1={140} x2={880} y2={320} stroke="#E8EEF5" strokeWidth={1} strokeDasharray="4 6" />
        <circle cx={440} cy={140} r={2.5} fill="#FF6A00" opacity={0.45} />
        <circle cx={880} cy={140} r={2.5} fill="#FF6A00" opacity={0.4} />
        <circle cx={660} cy={320} r={3} fill="#146EF5" opacity={0.3} />
      </svg>
    </>
  );
}

function ResultsLayer() {
  return (
    <>
      <CustomerAbstractGrid cellSize={28} strength={0.5} heightRatio={0.92} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 520" {...SVG_COMMON}>
        <line x1={100} y1={380} x2={1220} y2={380} stroke="#DCE5EF" strokeWidth={1} />
        <line x1={100} y1={380} x2={100} y2={120} stroke="#E8EEF5" strokeWidth={1} />
        <line x1={280} y1={380} x2={280} y2={360} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <line x1={520} y1={380} x2={520} y2={340} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <line x1={760} y1={380} x2={760} y2={350} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <line x1={1000} y1={380} x2={1000} y2={330} stroke="#B7C8D8" strokeWidth={1} opacity={0.5} />
        <circle cx={100} cy={380} r={3} fill="#FF6A00" opacity={0.5} />
        <circle cx={520} cy={340} r={2} fill="#146EF5" opacity={0.35} />
        <circle cx={1000} cy={330} r={2} fill="#146EF5" opacity={0.3} />
        <path
          d="M1000 330 Q660 260 280 200 T100 120"
          fill="none"
          stroke="#DCE5EF"
          strokeWidth={1}
          opacity={0.65}
        />
      </svg>
    </>
  );
}

function FinalCtaLayer() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1320 360" {...SVG_COMMON} opacity={0.9}>
      <polyline points="200,40 660,180 1120,40" fill="none" stroke="#FFFFFF" strokeWidth={1} opacity={0.12} />
      <polyline points="200,320 660,180 1120,320" fill="none" stroke="#FFFFFF" strokeWidth={1} opacity={0.1} />
      <line x1={660} y1={40} x2={660} y2={320} stroke="#FFFFFF" strokeWidth={1} opacity={0.08} />
      <circle cx={660} cy={180} r={5} fill="#FF6A00" opacity={0.85} />
      <circle cx={200} cy={40} r={3} fill="#146EF5" opacity={0.5} />
      <circle cx={1120} cy={40} r={3} fill="#146EF5" opacity={0.5} />
      <circle cx={200} cy={320} r={3} fill="#FFFFFF" opacity={0.25} />
      <circle cx={1120} cy={320} r={3} fill="#FFFFFF" opacity={0.25} />
      <rect x={640} y={160} width={40} height={40} fill="none" stroke="#FFFFFF" strokeWidth={1} opacity={0.15} rx={4} />
    </svg>
  );
}
