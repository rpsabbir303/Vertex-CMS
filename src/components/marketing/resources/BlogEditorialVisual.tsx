import Image from "next/image";
import type { ResourceRecord } from "@/lib/marketing/resources/types";

type Variant = "featured" | "integrated" | "thumbnail";

type Props = {
  resource: Pick<ResourceRecord, "id" | "topic" | "title" | "image">;
  variant: Variant;
  /** Prefer eager load for above-the-fold / initially visible thumbnails (html.to.design capture). */
  priority?: boolean;
};

/**
 * Real article photography for Resource Hub blog previews.
 * Uses curated Unsplash construction imagery from `@/lib/images` via catalog data.
 * Renders as next/image → <img> (not CSS background-image).
 */
export function BlogEditorialVisual({ resource, variant, priority = false }: Props) {
  const image = resource.image;
  if (!image?.src) return null;

  if (variant === "integrated") {
    return (
      <figure className="relative overflow-hidden border border-brand-line/80 bg-[#F4F7FB]">
        <div className="relative aspect-[16/10] w-full min-h-[140px] sm:min-h-[160px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>
        <figcaption className="sr-only">{image.alt}</figcaption>
      </figure>
    );
  }

  const featured = variant === "featured";

  if (variant === "thumbnail") {
    return (
      <figure className="relative h-[3.75rem] w-[4.75rem] shrink-0 overflow-hidden border border-brand-line/80 bg-[#F4F7FB] sm:h-[4.25rem] sm:w-[5.25rem]">
        <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="96px"
            className="object-cover"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
        <figcaption className="sr-only">{image.alt}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="relative mt-6 overflow-hidden border border-brand-line/80 bg-[#F4F7FB]">
      <div className="relative aspect-[16/9] w-full min-h-[200px] sm:min-h-[260px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
          priority={featured || priority}
        />
      </div>
      <figcaption className="sr-only">{image.alt}</figcaption>
    </figure>
  );
}
