const LINE = "rgba(180, 120, 120, 0.45)";
const LINE_SOFT = "rgba(8, 35, 63, 0.12)";

type CardKind = "post" | "review" | "thread";

function SourceIcon({ kind }: { kind: CardKind }) {
  if (kind === "review") {
    return <span className="text-[12px] leading-none text-[#E8B923]">★</span>;
  }
  if (kind === "thread") {
    return <span className="inline-block h-[9px] w-[9px] rounded-[2px] bg-[#F0A020]" />;
  }
  return <span className="inline-block h-[7px] w-[7px] rotate-45 bg-[#7BB3E8]" />;
}

function SnippetCard({
  kind,
  source,
  time,
  body,
  className,
}: {
  kind: CardKind;
  source: string;
  time: string;
  body: string;
  className: string;
}) {
  return (
    <article className={`security-snippet absolute bg-white ${className}`}>
      <div className="flex items-center gap-1.5">
        <SourceIcon kind={kind} />
        <p className="text-[12px] font-semibold text-[#1C2B3A]">{source}</p>
        <p className="ml-auto text-[11px] text-[#9AA3AD]">{time}</p>
      </div>
      <p className="mt-2 text-[12px] leading-[1.55] text-[#6B7380]">{body}</p>
      {kind === "review" ? (
        <>
          <div className="mt-3 space-y-1.5">
            <div className="h-[7px] w-[92%] rounded-[2px] bg-[#EEF1F4]" />
            <div className="h-[7px] w-[68%] rounded-[2px] bg-[#F4F6F8]" />
          </div>
          <div className="mt-2.5 flex gap-[2px]" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[11px] leading-none text-[#E8B923]">
                ★
              </span>
            ))}
          </div>
        </>
      ) : null}
    </article>
  );
}

function ErrorChip({ note, className }: { note: string; className: string }) {
  return (
    <div className={`security-chip absolute bg-white ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-1 text-[11px] font-semibold text-[#E07070]">
          <span className="text-[9px]" aria-hidden="true">
            ▲
          </span>
          Error
        </p>
        <span className="text-[11px] text-[#E07070]/80" aria-hidden="true">
          ×
        </span>
      </div>
      <p className="mt-1 text-[10px] leading-snug text-[#E07070]/90">{note}</p>
    </div>
  );
}

export function SecurityScatterField() {
  return (
    <>
      <div className="security-scatter relative mt-12 hidden h-[500px] lg:block" aria-hidden="true">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
          <path d="M 150 70 C 200 30, 260 28, 330 55" stroke={LINE} strokeWidth="1.1" />
          <path d="M 430 90 C 490 40, 540 38, 620 70" stroke={LINE_SOFT} strokeWidth="1" />
          <path d="M 200 175 C 250 120, 300 118, 360 160" stroke={LINE} strokeWidth="1" strokeDasharray="3 5" />
          <path d="M 470 195 C 540 150, 600 155, 680 200" stroke={LINE_SOFT} strokeWidth="1" />
          <path d="M 720 230 C 760 210, 800 240, 840 265" stroke={LINE} strokeWidth="1" strokeDasharray="4 6" />
          <path d="M 260 330 C 330 290, 390 305, 450 345" stroke={LINE_SOFT} strokeWidth="1" />
          <path d="M 560 350 C 640 320, 720 300, 800 320" stroke={LINE} strokeWidth="1" />
        </svg>

        <ErrorChip note="Endpoint disconnected" className="left-[6%] top-[10%]" />
        <SnippetCard
          kind="post"
          source="Data Protection"
          time="6h ago"
          body="TLS 1.3 in transit, AES-256 at rest, and a camera of controls that stay tenant-scoped. Not flashy — a documented platform baseline."
          className="left-[23%] top-[2%] w-[255px]"
        />
        <ErrorChip note="Data escaped" className="left-[50%] top-[12%]" />
        <SnippetCard
          kind="review"
          source="Access Security"
          time="3h ago"
          body="MFA, RBAC, session controls."
          className="left-[66%] top-[3%] w-[225px]"
        />

        <SnippetCard
          kind="review"
          source="Compliance"
          time="3h ago"
          body="Workflow support, not certification."
          className="left-[16%] top-[34%] w-[215px]"
        />
        <SnippetCard
          kind="review"
          source="AI Governance"
          time="8h ago"
          body="Human confirmation before writes."
          className="left-[40%] top-[36%] w-[230px]"
        />
        <ErrorChip note="Quote reached" className="left-[64%] top-[34%]" />
        <SnippetCard
          kind="thread"
          source="Reliability / DR"
          time="8h ago"
          body="99.9% uptime, RPO ≤15 min, RTO ≤1 hr are recovery objectives — targets, not historical guarantees. Built for operational continuity."
          className="left-[72%] top-[48%] w-[240px]"
        />

        <SnippetCard
          kind="thread"
          source="Tenant isolation"
          time="12h ago"
          body="Scoped data boundaries keep tenant records from mixing across organizations. For reviewers, this is the isolation model the platform is designed around."
          className="left-[3%] top-[62%] w-[265px]"
        />
        <ErrorChip note="Data unavailable" className="left-[32%] top-[70%]" />
        <SnippetCard
          kind="post"
          source="Security Contact"
          time="14h ago"
          body="Evaluation and sales inquiries — not a channel for incident reporting. Small win, but overdue."
          className="left-[46%] top-[62%] w-[220px]"
        />
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden" aria-hidden="true">
        <ErrorChip note="Endpoint disconnected" className="!relative !left-auto !top-auto w-[150px]" />
        <SnippetCard
          kind="post"
          source="Data Protection"
          time="6h ago"
          body="TLS 1.3 in transit and AES-256 at rest — a documented platform baseline."
          className="!relative !left-auto !top-auto w-full"
        />
        <SnippetCard
          kind="review"
          source="Access Security"
          time="3h ago"
          body="MFA, RBAC, session controls."
          className="!relative !left-auto !top-auto w-full"
        />
        <SnippetCard
          kind="thread"
          source="Reliability / DR"
          time="8h ago"
          body="99.9% uptime, RPO ≤15 min, RTO ≤1 hr are recovery objectives — not historical guarantees."
          className="!relative !left-auto !top-auto w-full"
        />
      </div>
    </>
  );
}
