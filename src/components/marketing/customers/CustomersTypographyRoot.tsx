import "@/app/customers/customers-typography.css";
import "@/app/customers/customers-visual.css";
import { customersDisplayFont, customersSansFont } from "@/lib/marketing/customers/fonts";

export function CustomersTypographyRoot({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`customers-typography scroll-smooth ${customersDisplayFont.variable} ${customersSansFont.variable} min-h-screen font-sans antialiased`}
    >
      {children}
    </div>
  );
}
