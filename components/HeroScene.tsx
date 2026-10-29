import Image from "next/image";

/**
 * The engraved skyline with "money" moving between landmarks.
 * The overlay SVG shares the image's 2560 x 1024 coordinate space, so every
 * route, beep and glint stays pinned to the drawing at any screen size.
 */

type Pt = [number, number];
// Landmark tops, in image pixels.
const P = {
  dome: [230, 563] as Pt,
  spire: [70, 512] as Pt,
  bigBen: [1114, 538] as Pt,
  gherkin: [1715, 550] as Pt,
  tower: [2144, 335] as Pt,
  christ: [2490, 435] as Pt,
};

const routes: { from: Pt; to: Pt; lift: number }[] = [
  { from: P.dome, to: P.tower, lift: 380 },
  { from: P.bigBen, to: P.christ, lift: 330 },
  { from: P.gherkin, to: P.spire, lift: 300 },
  { from: P.tower, to: P.bigBen, lift: 260 },
];

const arc = ({ from, to, lift }: (typeof routes)[number]) => {
  const cx = (from[0] + to[0]) / 2;
  const cy = Math.min(from[1], to[1]) - lift;
  return `M${from[0]} ${from[1]} Q${cx} ${cy} ${to[0]} ${to[1]}`;
};

// Deterministic "random" glints on the water.
const glints = Array.from({ length: 28 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return { x: Math.round(r(1) * 2460), y: Math.round(840 + r(2) * 170), w: Math.round(30 + r(3) * 80), d: (r(4) * 5).toFixed(2) };
});

const CYCLE = 8; // seconds per route loop

export function HeroScene() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Crop away the top of the sky: the section background continues it seamlessly. */}
      <div className="hero-mask relative left-1/2 aspect-[2560/860] w-full min-w-[900px] -translate-x-1/2">
        <div className="absolute inset-x-0 bottom-0 aspect-[2560/1024]">
          <Image
            src="/skyline.jpg"
            alt="Engraved night skyline of a harbour city, drawn like a banknote vignette"
            fill
            priority
            sizes="(min-width: 900px) 100vw, 900px"
            className="object-cover"
          />
          <svg viewBox="0 0 2560 1024" className="hero-fx absolute inset-0 h-full w-full" aria-hidden fill="none">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="halo">
                <feGaussianBlur stdDeviation="24" />
              </filter>
            </defs>

            {/* Moon halo */}
            <circle className="moon" cx="2285" cy="273" r="70" fill="#02FE93" filter="url(#halo)" />

            {/* Faint permanent routes */}
            {routes.map((r, i) => (
              <path key={`r${i}`} d={arc(r)} stroke="rgba(117,250,157,0.14)" strokeWidth="1.5" strokeDasharray="4 10" />
            ))}

            {/* Moving payments */}
            {routes.map((r, i) => (
              <g key={`m${i}`} style={{ ["--delay" as string]: `${(i * CYCLE) / routes.length}s`, ["--cycle" as string]: `${CYCLE}s` }}>
                <path className="trail" d={arc(r)} pathLength={1} stroke="#02FE93" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                <circle className="beep" cx={r.to[0]} cy={r.to[1]} r="22" stroke="#02FE93" strokeWidth="2" />
                <circle className="beep-dot" cx={r.to[0]} cy={r.to[1]} r="5" fill="#02FE93" filter="url(#glow)" />
              </g>
            ))}

            {/* Water glints */}
            {glints.map((g, i) => (
              <line key={`g${i}`} className="glint" x1={g.x} x2={g.x + g.w} y1={g.y} y2={g.y} stroke="#B9FFD9" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${g.d}s` }} />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
