export function SecurityCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="security-ds relative w-full overflow-x-hidden" data-figma-section="security-page-body">
      {children}
    </div>
  );
}
