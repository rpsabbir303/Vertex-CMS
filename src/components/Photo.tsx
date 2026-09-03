import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: "light" | "dark" | "navy" | "soft" | "none";
  objectPosition?: string;
};

const overlays = {
  light: "bg-gradient-to-r from-brand-soft/95 via-brand-soft/80 to-brand-soft/40",
  dark: "bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40",
  navy: "bg-gradient-to-t from-brand-navy/90 via-brand-navy/55 to-brand-navy/25",
  soft: "bg-white/70",
  none: "",
};

export function Photo({
  src,
  alt,
  className = "",
  priority,
  overlay = "none",
  objectPosition = "center",
}: Props) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      {overlay !== "none" && (
        <div className={`absolute inset-0 ${overlays[overlay]}`} aria-hidden="true" />
      )}
    </div>
  );
}

export function BlueprintTexture({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.07] ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20,110,245,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(20,110,245,0.9) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
  );
}
