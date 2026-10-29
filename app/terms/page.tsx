import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Terms | Monyz", robots: { index: false } };

export default function Terms() {
  return (
    <SimplePage kicker="Legal" title="Terms of use">
      <p>Draft placeholder. Replace with the Monyz terms of use before launch.</p>
    </SimplePage>
  );
}
