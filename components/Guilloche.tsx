/**
 * Banknote line work generated with math, so it stays razor sharp at any size
 * and weighs almost nothing. Every path uses pathLength=1 so the `.draw`
 * class can animate it in with stroke-dashoffset.
 */

const f = (n: number) => n.toFixed(1);

function polarPath(cx: number, cy: number, r: (t: number) => number, steps = 720) {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const rr = r(t);
    d += `${i ? "L" : "M"}${f(cx + rr * Math.cos(t))} ${f(cy + rr * Math.sin(t))}`;
  }
  return d + "Z";
}

/** Concentric wavy rings, the classic rosette on a note. */
export function Rosette({
  size = 320,
  petals = 18,
  rings = 9,
  className = "",
  strokeWidth = 0.6,
}: {
  size?: number;
  petals?: number;
  rings?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const c = size / 2;
  const paths: string[] = [];
  for (let i = 0; i < rings; i++) {
    const base = c * (0.32 + (0.6 * i) / rings);
    const amp = c * 0.06;
    const phase = (i * Math.PI) / rings;
    paths.push(polarPath(c, c, (t) => base + amp * Math.sin(petals * t + phase)));
    paths.push(polarPath(c, c, (t) => base + amp * Math.sin(petals * t + phase + Math.PI)));
  }
  // inner flower
  paths.push(polarPath(c, c, (t) => c * 0.22 * Math.abs(Math.cos((petals / 3) * t)) + c * 0.06));
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} />
      ))}
    </svg>
  );
}

/** A woven band of interlaced sine waves, used as note borders. */
export function Band({ className = "", lines = 6, waves = 24 }: { className?: string; lines?: number; waves?: number }) {
  const W = 1000;
  const H = 40;
  const paths: string[] = [];
  for (let l = 0; l < lines; l++) {
    const phase = (l / lines) * Math.PI;
    let d = "";
    for (let x = 0; x <= W; x += 4) {
      const y = H / 2 + (H / 2 - 2) * Math.sin((x / W) * waves * Math.PI * 2 + phase);
      d += `${x ? "L" : "M"}${x} ${f(y)}`;
    }
    paths.push(d);
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth={0.8} vectorEffect="non-scaling-stroke">
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/** Quarter fan ornament for note corners. Rotate with CSS for each corner. */
export function Corner({ className = "" }: { className?: string }) {
  const lines: string[] = [];
  for (let i = 0; i <= 16; i++) {
    const a = (i / 16) * (Math.PI / 2);
    lines.push(`M4 4 L${f(4 + 56 * Math.cos(a))} ${f(4 + 56 * Math.sin(a))}`);
  }
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth={0.6}>
      {lines.map((d, i) => (
        <path key={i} d={d} pathLength={1} />
      ))}
      <path d="M4 44 Q4 4 44 4" strokeWidth={1.2} pathLength={1} />
      <path d="M4 60 Q4 4 60 4" strokeWidth={0.8} pathLength={1} />
    </svg>
  );
}

/** Tiny repeated mono text, the security microprint on a note (SVG so it sits below the type scale on purpose). */
export function Microtext({ text = "FOLLOW THE MONEY · MONYZ · ", className = "" }: { text?: string; className?: string }) {
  return (
    <svg aria-hidden className={`block h-2 w-full ${className}`} viewBox="0 0 2000 10" preserveAspectRatio="xMinYMid slice">
      <text x="0" y="8" fill="currentColor" fontSize="8" letterSpacing="2" fontFamily="var(--font-geist-mono), monospace">
        {text.repeat(30)}
      </text>
    </svg>
  );
}

/** Four corner ornaments, absolutely placed inside a relative parent. */
export function Corners({ className = "text-mint-soft", inset = "inset-2" }: { className?: string; inset?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${inset} ${className}`}>
      <Corner className="absolute left-0 top-0 h-12 w-12" />
      <Corner className="absolute right-0 top-0 h-12 w-12 rotate-90" />
      <Corner className="absolute bottom-0 right-0 h-12 w-12 rotate-180" />
      <Corner className="absolute bottom-0 left-0 h-12 w-12 -rotate-90" />
    </div>
  );
}
