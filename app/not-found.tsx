import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <Logo />
      <p className="font-mono text-9xl font-bold tracking-tight text-mint">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">This money trail went cold</h1>
      <p className="max-w-hero text-lg text-paper-70">The page you followed has moved or never existed. The homepage still knows where everything is.</p>
      <Link href="/" className="btn-primary">
        Back to the homepage <ArrowRight size={16} weight="bold" aria-hidden />
      </Link>
    </main>
  );
}
