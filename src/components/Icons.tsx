import { company } from "@/lib/website/tenantData";

export function ChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CompanyLogo({ light = false }: { light?: boolean }) {
  const nameParts = company.name.split(" ");
  const displayName = nameParts.length > 2 ? `${nameParts[0]} ${nameParts[1]}` : company.name;

  return (
    <a href="/" className="group inline-flex shrink-0 items-center gap-3" aria-label={`${company.name} home`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-orange/40 bg-brand-navy transition group-hover:border-brand-orange">
        <span className="font-display text-sm font-bold tracking-tight text-white">{company.logoInitials}</span>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-bold tracking-tight ${light ? "text-white" : "text-brand-navy"}`}>
          {displayName}
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.14em] ${light ? "text-slate-400" : "text-brand-muted"}`}>
          {company.tagline}
        </span>
      </span>
    </a>
  );
}

export function VertexLogo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <a href="/" className="group inline-flex items-center gap-2.5" aria-label="VertexBuild home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue shadow-sm transition group-hover:bg-[#0f5fd9]">
        <span className="text-[11px] font-bold tracking-tight text-white">VX</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-orange" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className={`block text-sm font-bold tracking-tight ${light ? "text-white" : "text-brand-navy"}`}>
            VertexBuild
          </span>
          <span className={`block text-[10px] font-medium ${light ? "text-slate-400" : "text-brand-muted"}`}>
            Construction Management
          </span>
        </span>
      )}
    </a>
  );
}
