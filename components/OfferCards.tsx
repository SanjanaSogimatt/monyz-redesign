import Image from "next/image";
import { ArrowRight, Coins, Handshake, Megaphone } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { Rosette } from "./Guilloche";
import { offers } from "@/lib/content";

const icons = { megaphone: Megaphone, handshake: Handshake, coins: Coins };
const petals = [18, 24, 12];

/**
 * Three ways in, Option B: big outlined numerals, content anchored at the
 * bottom, the card fills mint on hover.
 * decor="rosette"   banknote rosette half off the top right corner (B1, default)
 * decor="engraving" faint engraving behind the content (B2)
 * decor="none"      plain (B)
 */
export function OfferCards({ decor = "rosette" }: { decor?: "rosette" | "engraving" | "none" }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {offers.map((o, i) => {
        const Icon = icons[o.icon];
        return (
          <Reveal key={o.n} delay={i * 120} className="h-full">
          <article
            className={`offer group h-full relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-colors duration-300 ease-out lg:min-h-[540px] ${
              o.soon ? "soon border-dashed border-mint-line" : "border-mint-line bg-ink hover:border-mint hover:bg-mint focus-within:border-mint focus-within:bg-mint"
            }`}
          >
            {decor === "engraving" && (
              <Image src={o.image} alt="" fill sizes="(min-width: 1024px) 400px, 100vw" className="offer-engraving object-cover" />
            )}
            {decor === "rosette" && (
              <Rosette
                size={320}
                petals={petals[i]}
                rings={9}
                strokeWidth={0.7}
                className="offer-rosette pointer-events-none absolute -right-[110px] -top-[90px] h-[320px] w-[320px]"
              />
            )}

            <div className="relative flex items-start justify-between">
              <span className="offer-num text-9xl font-semibold tracking-tighter" aria-hidden>
                {o.n}
              </span>
              <span className="offer-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-hover text-mint transition-colors duration-300 ease-out">
                <Icon size={24} weight="duotone" aria-hidden />
              </span>
            </div>

            <div className="relative mt-16">
              <p className="offer-tag flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-mint">
                <span className="sr-only">Option {o.n}: </span>
                {o.tag}
                {o.soon && <span className="rounded-full border border-mint-soft py-1 px-3 text-mint">Coming soon</span>}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{o.title}</h3>
              <p className="offer-body mt-3 text-paper-70">{o.body}</p>
              <a href="#book" className="offer-link mt-6 inline-flex items-center gap-2 font-semibold text-mint">
                {o.soon ? "Ask about it on your call" : "Talk about this on your call"}
                <ArrowRight size={16} weight="bold" aria-hidden className="transition duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
          </article>
          </Reveal>
        );
      })}
    </div>
  );
}
