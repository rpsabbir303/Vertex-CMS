/** Full-width white shell for Integrations routes (header + main + footer). */
export function IntegrationsExperienceFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="int-experience-root flex min-h-screen flex-col bg-white text-brand-navy">
      <div className="int-experience-surface relative flex min-h-0 min-w-0 flex-1 flex-col bg-white">{children}</div>
    </div>
  );
}
