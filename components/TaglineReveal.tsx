"use client";
import { useEffect, useRef } from "react";

/**
 * Skill B11: words start muted and light up one at a time, in reading order,
 * as the block scrolls past a trigger line. One scroll listener, throttled
 * through requestAnimationFrame, and only attached while the block is near
 * the viewport (IntersectionObserver gate).
 */
export function TaglineReveal({ text, accent = [], backdrop }: { text: string; accent?: string[]; backdrop?: React.ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const spin = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLSpanElement>(".tw"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("on"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the top hits 85% of the viewport, completes when the bottom hits 45%.
      const start = vh * 0.85;
      const end = vh * 0.45;
      const progress = (start - r.top) / (start - end + r.height);
      const lit = Math.round(Math.min(1, Math.max(0, progress)) * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
      if (spin.current) spin.current.style.transform = `translate(-50%, -50%) rotate(${(progress * 60).toFixed(2)}deg)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const gate = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      } else {
        window.removeEventListener("scroll", onScroll);
        update();
      }
    });
    gate.observe(root);
    return () => {
      gate.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const clean = (w: string) => w.replace(/[.,]/g, "").toLowerCase();
  return (
    <div className="relative">
      {backdrop && (
        <div ref={spin} aria-hidden className="pointer-events-none absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%)" }}>
          {backdrop}
        </div>
      )}
    <p ref={ref} className="relative mx-auto max-w-hero text-4xl font-semibold tracking-tight md:text-6xl">
      {text.split(" ").map((w, i) => (
        <span key={i} className={`tw ${accent.includes(clean(w)) ? "accent" : ""}`}>
          {w}{" "}
        </span>
      ))}
    </p>
    </div>
  );
}
