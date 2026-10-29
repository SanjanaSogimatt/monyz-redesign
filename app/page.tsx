import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { TaglineReveal } from "@/components/TaglineReveal";
import { BookingForm } from "@/components/BookingForm";
import { FounderPhoto } from "@/components/FounderPhoto";
import { Footer } from "@/components/Footer";
import { HeroScene } from "@/components/HeroScene";
import { OfferCards } from "@/components/OfferCards";
import { BanknoteStats } from "@/components/BanknoteStats";
import { FollowLine } from "@/components/FollowLine";
import { Corners, Microtext, Rosette } from "@/components/Guilloche";
import { hero, clients, problem, tagline, steps, founder, faqs, booking } from "@/lib/content";

const socialIcons = { linkedin: LinkedinLogo, x: XLogo, instagram: InstagramLogo, tiktok: TiktokLogo, youtube: YoutubeLogo };

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Nav />
      <main id="main">

        {/* ───────────── Hero: the banknote ───────────── */}
        <section id="top" className="p-2">
          <div className="relative isolate overflow-hidden rounded-3xl border border-mint-line bg-[#142F1A]">
            <Corners className="z-10 text-mint-soft" inset="inset-4" />
            <div className="relative z-10 mx-auto max-w-wrap px-6 pt-24 md:px-8">
              <div className="mt-16 flex items-start justify-between gap-8">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-mint-line bg-ink-deep/40 py-1 px-3 text-sm text-paper-70 backdrop-blur-sm">
                    <span aria-hidden className="h-2 w-2 rounded-full bg-mint" />
                    {hero.eyebrow}
                  </p>
                  <h1 className="hero-gradient mt-6 max-w-hero text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">
                    {hero.headline[0]}
                    <br className="hidden sm:block" /> {hero.headline[1]}
                  </h1>
                  <p className="mt-6 max-w-hero text-lg text-paper-70">{hero.sub}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href="#book" className="btn-primary">
                      {hero.cta} <ArrowRight size={16} weight="bold" aria-hidden />
                    </a>
                    <span className="text-sm text-paper-70">{hero.ctaNote}</span>
                  </div>
                </div>
                <div className="hidden shrink-0 flex-col items-end gap-2 text-right font-mono text-xs uppercase tracking-widest text-mint-soft lg:flex">
                  <span>Series 2026</span>
                  <span>Nº MNZ 100K+</span>
                  <span className="text-paper-30">Top 10 · Favikon fintech</span>
                </div>
              </div>
            </div>
            <HeroScene />
          </div>
        </section>

        <div className="relative">
        <FollowLine />
        {/* ───────────── Client logos: quiet row ───────────── */}
        <section id="trust" aria-label="Clients" className="px-4 pt-16 md:px-8">
          <p className="text-center text-sm text-paper-70">Payments teams already working with Monyz</p>
          <ul className="mx-auto mt-8 grid max-w-wrap grid-cols-3 items-center justify-items-center gap-y-8 md:grid-cols-6">
            {clients.map((c) => (
              <li key={c.name} className={`text-2xl text-paper/80 transition duration-300 ease-out hover:text-paper ${c.style}`}>
                {c.name}
              </li>
            ))}
          </ul>
        </section>

        {/* ───────────── Problem → solution + banknote stats ───────────── */}
        <section id="why" className="px-4 py-24 md:px-8">
          <div className="mx-auto grid max-w-wrap gap-6 lg:grid-cols-2">
            <Reveal className="card p-8 md:p-12">
              <p className="kicker text-paper-70">{problem.kicker}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{problem.title}</h2>
              <p className="mt-6 text-lg text-paper-70">{problem.body}</p>
            </Reveal>
            <Reveal delay={120} className="relative overflow-hidden rounded-3xl bg-mint p-8 text-ink-deep md:p-12">
              <Rosette size={300} petals={16} rings={7} className="pointer-events-none absolute -bottom-24 -right-24 h-[300px] w-[300px] text-ink-deep/10" />
              <p className="relative font-mono text-xs uppercase tracking-widest">{problem.solutionKicker}</p>
              <h2 className="relative mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Attention and introductions from one trusted source</h2>
              <p className="relative mt-6 text-lg">{problem.solution}</p>
            </Reveal>
          </div>
          <BanknoteStats />
        </section>

        {/* ───────────── Tagline reveal on paper (B11) ───────────── */}
        <section aria-label="Our promise" className="paper relative overflow-hidden px-4 py-24 md:px-8">
          <Microtext className="absolute inset-x-0 top-6 text-ink/20" />
          <div className="py-24">
            <TaglineReveal
              text={tagline}
              accent={["know", "your", "name"]}
              backdrop={<Rosette size={640} petals={30} rings={12} strokeWidth={0.5} className="h-[640px] w-[640px] text-ink/10" />}
            />
          </div>
          <Microtext className="absolute inset-x-0 bottom-6 text-ink/20" />
        </section>

        {/* ───────────── Offers: Option B cards ───────────── */}
        <section id="offers" className="px-4 py-24 md:px-8">
          <div className="mx-auto max-w-wrap">
            <Reveal className="max-w-hero">
              <p className="kicker">Three ways in</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Pick the lever your growth needs most</h2>
            </Reveal>
            <OfferCards decor="rosette" />
          </div>
        </section>

        {/* ───────────── How it works ───────────── */}
        <section id="process" className="px-4 py-24 md:px-8">
          <div className="mx-auto max-w-wrap">
            <Reveal className="max-w-hero">
              <p className="kicker">How it works</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">From first call to closed deals in three steps</h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 100} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mint font-mono text-lg font-bold text-mint">
                      {i + 1}
                    </span>
                    {i < steps.length - 1 && <span aria-hidden className="hidden h-px flex-1 border-t border-dashed border-mint-soft md:block" />}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-paper-70">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── Founder: banknote portrait ───────────── */}
        <section id="arthur" className="relative overflow-hidden bg-ink px-4 py-24 md:px-8">
          <div className="relative mx-auto grid max-w-wrap items-center gap-16 lg:grid-cols-2">
            <Reveal variant="both">
              <FounderPhoto />
            </Reveal>
            <Reveal delay={120}>
              <p className="kicker">Meet the founder</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">The voice payments listens to</h2>
              {founder.bio.map((b) => (
                <p key={b} className="mt-6 text-lg text-paper-70">{b}</p>
              ))}
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${founder.name} on social media`}>
                {founder.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-mint-line py-2 px-3 text-sm text-paper-70 transition duration-300 ease-out hover:border-mint-soft hover:bg-mint-hover hover:text-paper active:scale-[0.98]"
                      >
                        <Icon size={16} weight="fill" aria-hidden />
                        {s.label}
                        <ArrowUpRight size={12} aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section id="faq" className="px-4 py-24 md:px-8">
          <div className="mx-auto grid max-w-wrap gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="kicker">FAQ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Questions before the call</h2>
              <p className="mt-6 text-lg text-paper-70">
                Anything else, ask us on the call or write to{" "}
                <a href="mailto:hello@monyz.co" className="text-mint underline decoration-mint-line underline-offset-4 hover:decoration-mint">hello@monyz.co</a>.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-col gap-3">
              {faqs.map((f) => (
                <details key={f.q} className="card group p-6 transition duration-300 ease-out open:border-mint-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus size={20} className="shrink-0 text-mint transition duration-500 ease-out group-open:rotate-45" aria-hidden />
                  </summary>
                  <p className="mt-4 text-paper-70">{f.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </section>

        {/* ───────────── Final CTA: the cheque ───────────── */}
        <section id="book" className="px-4 pb-24 md:px-8">
          <Reveal className="card mx-auto grid max-w-wrap gap-6 p-2 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="kicker">{booking.kicker}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{booking.title}</h2>
              <p className="mt-6 text-lg text-paper-70">{booking.body}</p>
              <ul className="mt-8 flex flex-col gap-3">
                {booking.reversal.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-ink-deep">
                      <Check size={12} weight="bold" aria-hidden />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <BookingForm />
          </Reveal>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
