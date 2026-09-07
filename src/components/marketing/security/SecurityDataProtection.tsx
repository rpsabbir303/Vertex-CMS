import { Reveal } from "@/components/Reveal";
import { dataProtection } from "@/lib/marketing/security/content";
import { StatusPill } from "./StatusPill";

export function SecurityDataProtection() {
  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <EncryptedDataVisual />
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow">Protection</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">{dataProtection.title}</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted sm:text-base">
              {dataProtection.supporting}
            </p>

            <ul className="mt-8 space-y-4 border-t border-brand-line pt-6">
              {dataProtection.controls.map((control) => (
                <li key={control.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[13px] font-semibold text-brand-navy">{control.title}</p>
                    <p className="mt-1 font-mono text-[13px] text-brand-muted">{control.value}</p>
                  </div>
                  <StatusPill status={control.status} />
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {dataProtection.notes.map((note) => (
                <div key={note.title} className="rounded-lg border border-brand-line bg-white p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[13px] font-semibold text-brand-navy">{note.title}</p>
                    <StatusPill status={note.status} />
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{note.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EncryptedDataVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-line bg-brand-navy text-white shadow-product">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div>
          <p className="text-[12px] font-semibold">Data layer</p>
          <p className="text-[11px] text-slate-400">Encrypted · tenant-scoped</p>
        </div>
        <span className="rounded-sm border border-white/15 bg-white/5 px-2 py-1 font-mono text-[10px] text-brand-orange">
          AES-256
        </span>
      </div>
      <div className="space-y-3 p-5">
        {[
          { key: "tenant_id", value: "••••-scoped", tag: "isolation" },
          { key: "payload", value: "enc://block-7f2a…", tag: "at rest" },
          { key: "transit", value: "TLS 1.3 channel", tag: "in transit" },
          { key: "scan", value: "ClamAV · clear", tag: "files" },
        ].map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[88px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3"
          >
            <span className="font-mono text-[11px] text-slate-400">{row.key}</span>
            <span className="truncate font-mono text-[12px] text-slate-100">{row.value}</span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{row.tag}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-5 py-3 text-[11px] text-slate-400">
        Soft delete where applicable · financial records voided, not destroyed
      </div>
    </div>
  );
}
