export function ChartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5M10 19V9M16 19V13M22 19V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LedgerIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function FieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12V21M12 12L4 8M12 12L20 8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L20 7V12C20 16.5 16.5 20 12 21C7.5 20 4 16.5 4 12V7L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AIIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12H15M12 9V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function FolderIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7H9L11 9H21V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function DollarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7V17M9.5 9.5C9.5 8.4 10.6 8 12 8C13.4 8 14.5 8.5 14.5 10C14.5 11.5 12 11.5 12 13.5C12 15 13.1 15.5 14.5 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3V7M16 3V7M4 10H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const CAPABILITY_ICONS = {
  "project-management": FolderIcon,
  "financial-control": DollarIcon,
  "field-operations": FieldIcon,
  "scheduling": CalendarIcon,
  "safety-compliance": ShieldIcon,
  "ai-intelligence": AIIcon,
} as const;

export function CapabilityIcon({ id, className }: { id: keyof typeof CAPABILITY_ICONS; className?: string }) {
  const Icon = CAPABILITY_ICONS[id];
  return <Icon className={className} />;
}

const VALUE_ICONS = {
  chart: ChartIcon,
  ledger: LedgerIcon,
  field: FieldIcon,
  shield: ShieldIcon,
  ai: AIIcon,
} as const;

export function ValueIcon({ type, className }: { type: keyof typeof VALUE_ICONS; className?: string }) {
  const Icon = VALUE_ICONS[type];
  return <Icon className={className} />;
}
