"use client";
import { useEffect, useRef } from "react";

/**
 * Adds `is-in` once when the element enters the viewport (skill B7).
 * variant "rise": rises 32px and fades in.
 * variant "draw": SVG line work inside draws itself (pathLength=1 paths).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "draw" | "both";
  as?: "div" | "section" | "li" | "article";
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const v = variant === "both" ? "reveal draw" : variant === "draw" ? "draw" : "reveal";
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`${v} ${className}`} style={{ transitionDelay: `${delay}ms`, ["--d" as string]: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
