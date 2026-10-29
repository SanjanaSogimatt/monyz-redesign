"use client";
import { useEffect, useRef, useState } from "react";

/**
 * "Follow the money": one mint line in the left gutter that draws itself down
 * the page as you scroll, with a glowing coin at its head.
 * Scroll work is throttled through requestAnimationFrame (skill B7).
 */
export function FollowLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const host = svgRef.current?.parentElement;
    if (!host) return;
    const measure = () => setH(host.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    const host = svgRef.current?.parentElement;
    if (!path || !dot || !host || !h) return;
    const total = path.getTotalLength();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = host.getBoundingClientRect().top + window.scrollY;
      const p = reduce ? 1 : Math.min(1, Math.max(0, (window.scrollY + window.innerHeight * 0.6 - top) / h));
      path.style.strokeDashoffset = String(total * (1 - p));
      const pt = path.getPointAtLength(total * p);
      dot.setAttribute("cx", String(pt.x));
      dot.setAttribute("cy", String(pt.y));
    };
    path.style.strokeDasharray = String(total);
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [h]);

  // Gentle wave down the gutter.
  let d = "";
  if (h) {
    for (let y = 0; y <= h; y += 8) {
      const x = 40 + 12 * Math.sin(y / 140);
      d += `${y ? "L" : "M"}${x.toFixed(1)} ${y}`;
    }
  }

  return (
    <svg ref={svgRef} aria-hidden className="pointer-events-none absolute left-0 top-0 z-10 hidden w-24 min-[1400px]:block" style={{ height: h }} viewBox={`0 0 96 ${h || 1}`} fill="none">
      <path d={d} stroke="rgba(117,250,157,0.08)" strokeWidth="2" />
      <path ref={pathRef} d={d} stroke="#02FE93" strokeWidth="2" strokeLinecap="round" />
      <circle ref={dotRef} r="6" fill="#02FE93" style={{ filter: "drop-shadow(0 0 8px #02FE93)" }} />
    </svg>
  );
}
