import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Monyz: turn fintech attention into signed deals";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#0E1F13", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, color: "#F4FBF6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 600 }}>
          <div style={{ width: 20, height: 20, borderRadius: 999, background: "#02FE93" }} />
          monyz
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 600, lineHeight: 1, letterSpacing: -2 }}>
          <span>Turn fintech attention</span>
          <span style={{ color: "#02FE93" }}>into signed deals</span>
        </div>
        <div style={{ fontSize: 28, color: "rgba(244,251,246,0.72)" }}>Growth accelerator for payments companies</div>
      </div>
    ),
    size
  );
}
