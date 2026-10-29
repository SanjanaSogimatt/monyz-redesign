import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/#top" className={`inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-paper ${className}`} aria-label="Monyz home">
      <span aria-hidden className="h-3 w-3 rounded-full bg-mint" />
      monyz
    </Link>
  );
}
