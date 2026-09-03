import Link from "next/link";
import { Header } from "@/components/website/Header";
import { Footer } from "@/components/website/Footer";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-brand-navy">
      <Header />
      <main className="flex w-full flex-1 items-center">
        <div className="site-shell py-20 text-center">
          <p className="eyebrow">{title}</p>
          <h1 className="display-title mt-4 text-3xl sm:text-4xl">{title}</h1>
          <p className="body-copy mx-auto mt-4 max-w-lg">{description}</p>
          <Link href="/" className="btn-primary mt-8 inline-flex">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
