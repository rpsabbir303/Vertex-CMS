import "@/app/customers/customers-typography.css";
import "@/app/customers/customers-visual.css";

export function CustomersTypographyRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="customers-typography min-h-screen scroll-smooth font-sans antialiased">{children}</div>
  );
}
