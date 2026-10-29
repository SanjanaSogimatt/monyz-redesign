"use client";
import { useEffect, useState } from "react";
import { ArrowRight, WarningCircle } from "@phosphor-icons/react";
import { booking, BOOKING_EMAIL } from "@/lib/content";
import { Band, Rosette } from "./Guilloche";

type Errors = Partial<Record<"name" | "email" | "company" | "interest", string>>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** The booking form, printed as a cheque made out to the visitor. */
export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }));
  }, []);

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    if (!name) e.name = "Add your full name.";
    if (!email) e.email = "Add your work email.";
    else if (!EMAIL_RE.test(email)) e.email = "That email looks incomplete. Check the @ and domain.";
    if (!company) e.company = "Add your company name.";
    if (!data.get("interest")) e.interest = "Pick the option closest to what you need.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      // TODO: replace with a real endpoint (API route, Calendly, HubSpot...).
      await new Promise((r) => setTimeout(r, 1200));
      setSentTo(String(data.get("email")));
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  const label = "font-mono text-xs uppercase tracking-widest text-ink/70";
  const field =
    "w-full border-0 border-b bg-transparent py-2 text-lg text-ink-deep placeholder:text-ink/30 transition duration-300 ease-out focus:outline-none focus:border-ink-deep";
  const border = (k: keyof Errors) => (errors[k] ? "border-[#B42318]" : "border-ink/30 hover:border-ink/60");
  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 flex items-center gap-1 text-sm text-[#B42318]">
        <WarningCircle size={16} aria-hidden /> {errors[k]}
      </p>
    ) : null;

  return (
    <div className="paper relative overflow-hidden rounded-2xl">
      <Rosette size={420} petals={28} rings={8} className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-ink/10" />
      <Band className="h-4 w-full text-ink/20" />

      {status === "sent" ? (
        <div role="status" className="relative flex min-h-[480px] flex-col items-start justify-center gap-4 p-8 md:p-12">
          <span className="rotate-[-6deg] rounded-xl border-2 border-[#1E7A4C] py-2 px-4 font-mono text-xl font-bold uppercase tracking-widest text-[#1E7A4C]">
            Received
          </span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">Request sent</h3>
          <p className="max-w-[420px] text-ink/70">
            We will email <span className="font-semibold text-ink-deep">{sentTo}</span> within two business days to pick a time for your call.
          </p>
          <button type="button" onClick={() => setStatus("idle")} className="rounded-full border border-ink/30 py-2 px-3 text-base font-semibold transition duration-300 ease-out hover:bg-ink/5 active:scale-[0.98]">
            Write another cheque
          </button>
        </div>
      ) : (
        <form noValidate onSubmit={onSubmit} aria-busy={status === "sending"} className="relative flex flex-col gap-8 p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span aria-hidden className="h-3 w-3 rounded-full bg-ink-deep" /> monyz
            </span>
            <span className={label}>Nº MNZ 0001 · {date || "Today"}</span>
          </div>

          <div>
            <label htmlFor="name" className={label}>Pay to the order of</label>
            <input id="name" name="name" autoComplete="name" placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={`${field} ${border("name")}`} />
            {err("name")}
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={label}>Work email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={`${field} ${border("email")}`} />
              {err("email")}
            </div>
            <div>
              <label htmlFor="company" className={label}>Company</label>
              <input id="company" name="company" autoComplete="organization" placeholder="Company name" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} className={`${field} ${border("company")}`} />
              {err("company")}
            </div>
          </div>

          <fieldset aria-describedby={errors.interest ? "interest-error" : undefined}>
            <legend className={label}>For</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {booking.interests.map((opt) => (
                <label key={opt} className="cursor-pointer">
                  <input type="radio" name="interest" value={opt} className="peer sr-only" />
                  <span className="inline-flex rounded-full border border-ink/30 py-2 px-3 text-sm transition duration-300 ease-out hover:border-ink/60 peer-checked:border-ink-deep peer-checked:bg-ink-deep peer-checked:font-semibold peer-checked:text-mint peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-ink-deep">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
            {err("interest")}
          </fieldset>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="rounded-xl border border-ink/30 py-2 px-4">
              <p className={label}>Amount</p>
              <p className="font-mono text-xl font-bold">One intro call · 20 min</p>
            </div>
            <div className="text-right">
              <svg viewBox="0 0 160 40" className="ml-auto h-10 w-[160px] text-ink-deep" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 28c10-18 18-22 20-12s-6 18-2 14 10-20 16-18-2 16 4 14 8-12 12-10 0 10 6 8 10-14 16-12-4 12 2 12 14-8 22-10 18-2 34-4" />
              </svg>
              <p className="border-t border-ink/30 pt-1 text-xs text-ink/70">Arthur Bedel, Monyz</p>
            </div>
          </div>

          {status === "failed" && (
            <p role="alert" className="flex items-center gap-2 rounded-xl border border-[#B42318] py-3 px-4 text-sm text-[#B42318]">
              <WarningCircle size={16} aria-hidden /> Request not sent. Check your connection and try again, or email {BOOKING_EMAIL}.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-ink-deep py-2 px-3 text-base font-semibold text-mint transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <span className="h-4 w-20 animate-pulse rounded-full bg-mint/30" aria-hidden />
                  <span className="sr-only">Sending request</span>
                </>
              ) : (
                <>
                  Book my intro call <ArrowRight size={16} weight="bold" aria-hidden />
                </>
              )}
            </button>
            <span className="text-sm text-ink/70">Reply within two business days</span>
          </div>

          <p aria-hidden className="font-mono text-sm tracking-widest text-ink/50">⑆ 100000 ⑆ 0001 ⑈ FOLLOW THE MONEY ⑈</p>
        </form>
      )}
    </div>
  );
}
