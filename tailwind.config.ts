import type { Config } from "tailwindcss";

/**
 * Design tokens.
 * Spacing is LOCKED to the landing-page-design scale: any class outside it
 * (p-5, gap-7, mt-14...) simply will not exist.
 */
const spacing = {
  0: "0px",
  px: "1px",
  0.5: "2px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    spacing,
    extend: {
      colors: {
        ink: { DEFAULT: "#17321F", deep: "#0E1F13", card: "#0F241A", raised: "#1D3D27" },
        sage: "#4E7657",
        mint: { DEFAULT: "#02FE93", soft: "rgba(117,250,157,0.62)", line: "rgba(117,250,157,0.16)", hover: "rgba(117,250,157,0.06)" },
        paper: { DEFAULT: "#F4FBF6", 70: "rgba(244,251,246,0.72)", 30: "rgba(244,251,246,0.30)" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        hero: "680px",
        wrap: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
