import type { ResourceType } from "@/lib/marketing/resources/types";

type Props = { type: ResourceType; className?: string };

/** Inline SVG icons for html.to.design — no external assets. */
export function ResourceTypeIcon({ type, className = "h-5 w-5" }: Props) {
  const stroke = "currentColor";
  switch (type) {
    case "blog":
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="2" width="14" height="16" rx="1" stroke={stroke} strokeWidth="1.25" />
          <path d="M6 6h8M6 10h8M6 14h5" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case "guide":
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 4h12v12H4V4z" stroke={stroke} strokeWidth="1.25" />
          <path d="M7 7h6M7 10h6M7 13h4" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
          <path d="M4 4v12" stroke={stroke} strokeWidth="1.25" />
        </svg>
      );
    case "template":
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="6" height="6" rx="0.5" stroke={stroke} strokeWidth="1.25" />
          <rect x="11" y="3" width="6" height="6" rx="0.5" stroke={stroke} strokeWidth="1.25" />
          <rect x="3" y="11" width="14" height="6" rx="0.5" stroke={stroke} strokeWidth="1.25" />
        </svg>
      );
    case "webinar":
      return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2" y="5" width="13" height="10" rx="1" stroke={stroke} strokeWidth="1.25" />
          <path d="M15 8l3-1.5v7L15 12" stroke={stroke} strokeWidth="1.25" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
