import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { Footer } from "./Footer";

export function SimplePage({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="px-4 pt-8 md:px-8">
        <div className="mx-auto flex max-w-wrap items-center justify-between">
          <Logo />
          <Link href="/" className="btn-ghost text-sm">
            <ArrowLeft size={16} aria-hidden /> Back to home
          </Link>
        </div>
      </header>
      <main id="main" className="px-4 py-24 md:px-8">
        <article className="mx-auto max-w-hero">
          <p className="kicker">{kicker}</p>
          <h1 className="hero-gradient mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <div className="mt-8 flex flex-col gap-4 text-lg text-paper-70">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
