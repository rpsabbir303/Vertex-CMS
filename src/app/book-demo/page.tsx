import type { Metadata } from "next";
import { BookDemoForm } from "@/components/conversion/BookDemoForm";

export const metadata: Metadata = {
  title: "Book a Demo | Vertex CMS",
  description: "See how Vertex CMS fits your business. Request a product demonstration for your team.",
};

export default function BookDemoPage() {
  return <BookDemoForm />;
}
