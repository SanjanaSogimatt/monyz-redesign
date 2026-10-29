import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { Microtext } from "./Guilloche";
import { founder, nav, BOOKING_EMAIL } from "@/lib/content";

/** Metricra style footer: link columns over the engraved skyline. */
export function Footer({ simple = false }: { simple?: boolean }) {
  const col = "flex flex-col gap-3 text-sm text-paper-70";
  const link = "transition duration-300 ease-out hover:text-mint";
  return (
    <footer className="p-2">
      <div className="relative isolate overflow-hidden rounded-3xl border border-mint-line bg-[#142F1A]">
        <div className="relative z-10 grid gap-12 px-6 pt-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-16">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-[280px] text-sm text-paper-70">Every beep tells a story. We make sure the right people hear yours.</p>
          </div>
          {!simple && (
            <nav aria-label="Footer" className={col}>
              <p className="font-semibold text-paper">Navigation</p>
              {nav.map((n) => (
                <a key={n.id} href={`/#${n.id}`} className={link}>{n.label}</a>
              ))}
            </nav>
          )}
          <div className={col}>
            <p className="font-semibold text-paper">Follow Arthur</p>
            {founder.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={link}>{s.label}</a>
            ))}
          </div>
          <div className={col}>
            <p className="font-semibold text-paper">Company</p>
            <a href={`mailto:${BOOKING_EMAIL}`} className={link}>{BOOKING_EMAIL}</a>
            <Link href="/privacy" className={link}>Privacy policy</Link>
            <Link href="/terms" className={link}>Terms</Link>
            <span>© {new Date().getFullYear()} Monyz</span>
          </div>
        </div>

        <div className="relative mt-12 aspect-[2560/700] w-full min-w-[700px] left-1/2 -translate-x-1/2">
          <div className="absolute inset-x-0 bottom-0 aspect-[2560/1024]">
            <Image src="/skyline.jpg" alt="" fill sizes="100vw" className="-scale-x-100 object-cover opacity-70" />
          </div>
          <Microtext className="absolute inset-x-0 top-0 text-mint-line" />
        </div>
      </div>
    </footer>
  );
}
