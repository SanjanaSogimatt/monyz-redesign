import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Privacy policy | Monyz", robots: { index: false } };

export default function Privacy() {
  return (
    <SimplePage kicker="Legal" title="Privacy policy">
      <p>Draft placeholder. Replace with the Monyz privacy policy before launch.</p>
      <p>Covers what we collect through the booking form (name, work email, company, area of interest), why we collect it, how long we keep it and how to ask us to delete it.</p>
    </SimplePage>
  );
}
