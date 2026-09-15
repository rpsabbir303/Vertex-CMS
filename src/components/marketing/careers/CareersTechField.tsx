import { CareersSvgField } from "./CareersSvgField";

type Props = {
  tone?: "light" | "navy";
  intensity?: "quiet" | "medium" | "strong";
  paths?: boolean;
  className?: string;
};

/** Section overlay field — inline SVG grid/dots/paths (Figma-importable). */
export function CareersTechField({ tone = "light", paths = true, className }: Props) {
  const quiet = tone === "light";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <CareersSvgField tone={tone} showDots={quiet} showPaths={paths} />
    </div>
  );
}
