import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export function TenantPageLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-brand-navy">
      <Header />
      <main className="w-full min-w-0 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
