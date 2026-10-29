"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Scrollspy: mark the section currently in view as the current nav item.
  useEffect(() => {
    const sections = ["top", ...nav.map((n) => n.id), "book"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "top" ? "" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const step = Math.min(60, 400 / nav.length);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          aria-label="Main"
          className="flex w-full max-w-wrap items-center justify-between gap-6 rounded-full border border-mint-line bg-ink-deep/70 py-2 pl-6 pr-2 backdrop-blur-xl md:w-auto md:max-w-none"
        >
          <Logo />
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "location" : undefined}
                  className={`rounded-full py-2 px-3 text-sm transition duration-300 ease-out hover:text-paper ${
                    active === n.id ? "bg-mint-hover text-paper" : "text-paper-70"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="hidden rounded-full bg-mint py-2 px-3 text-sm font-semibold text-ink-deep transition duration-300 ease-out hover:bg-[#5BFFB5] active:scale-[0.98] md:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-mint-hover md:hidden"
          >
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-paper transition duration-500 ease-out ${open ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-paper transition duration-500 ease-out ${open ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-ink-deep/95 px-6 backdrop-blur-2xl transition-opacity duration-500 ease-out md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-4">
          {[...nav, { id: "book", label: "Book a call" }].map((n, i) => (
            <li
              key={n.id}
              className={`transition duration-500 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * step}ms` : "0ms" }}
            >
              <a
                href={`#${n.id}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`text-4xl font-semibold tracking-tight ${n.id === "book" ? "text-mint" : active === n.id ? "text-paper" : "text-paper-70"}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
