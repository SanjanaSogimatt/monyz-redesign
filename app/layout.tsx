import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://monyz.co"),
  title: "Monyz | Growth accelerator for payments and fintech companies",
  description:
    "Monyz turns fintech attention into signed deals. Media distribution through Arthur Bedel's 100K+ audience, plus introductions to the executives who buy.",
  openGraph: {
    title: "Monyz | Turn fintech attention into signed deals",
    description: "Media distribution and executive introductions for payments companies.",
    url: "https://monyz.co",
    siteName: "Monyz",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Monyz | Turn fintech attention into signed deals" },
};

export const viewport: Viewport = { themeColor: "#0E1F13" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-mint focus:py-2 focus:px-3 focus:text-sm focus:font-semibold focus:text-ink-deep">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
