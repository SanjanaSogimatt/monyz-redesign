import { Reveal } from "./Reveal";
import { Band, Corners, Microtext, Rosette } from "./Guilloche";
import { stats } from "@/lib/content";

/** The proof points printed as a banknote. */
export function BanknoteStats() {
  return (
    <Reveal variant="both" className="mx-auto mt-6 max-w-wrap">
      <div className="card relative overflow-hidden p-2">
        <div className="relative overflow-hidden rounded-2xl border border-mint-line bg-ink-deep py-10 px-6 md:py-12 md:px-16">
          <Corners className="text-mint-soft" inset="inset-3" />
          <Rosette size={360} petals={22} rings={10} className="pointer-events-none absolute -right-16 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 text-mint-line md:block" />
          <Band className="h-6 w-full text-mint-line" />

          <div className="mt-6 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-mint-soft">
            <span>Monyz · Series 2026</span>
            <span>Nº MNZ 100K 0010</span>
          </div>

          <dl className="relative mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-4xl font-bold tracking-tight text-mint md:text-5xl">{s.value}</dd>
                <dd className="mt-2 max-w-[200px] text-sm text-paper-70">{s.label}</dd>
              </div>
            ))}
          </dl>

          <Microtext className="mt-10 text-mint-line" />
          <Band className="mt-4 h-6 w-full text-mint-line" />
        </div>
      </div>

    </Reveal>
  );
}
