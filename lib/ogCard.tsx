import type { ReactElement } from "react";

// Shared 1200x630 share-card layout for the file-based opengraph-image routes.
// Styles are inline because next/og (satori) renders a CSS subset, not Tailwind,
// and every element with more than one child must set display: flex.
export const OG_SIZE = { width: 1200, height: 630 };

interface OgCardProps {
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
}

export function ogCard({ badge, title, subtitle, tagline }: OgCardProps): ReactElement {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        padding: "80px",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Availability badge */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            border: "1px solid #2563eb",
            borderRadius: "9999px",
            padding: "12px 26px",
            color: "#93c5fd",
            fontSize: "26px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#22c55e",
            }}
          />
          {badge}
        </div>
      </div>

      {/* Title + subtitle */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "96px", fontWeight: 700, letterSpacing: "-3px" }}>
          {title}
        </div>
        <div style={{ fontSize: "44px", color: "#a3a3a3", marginTop: "8px" }}>
          {subtitle}
        </div>
      </div>

      {/* Tagline + URL */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#d4d4d4",
            maxWidth: "1000px",
            lineHeight: 1.4,
          }}
        >
          {tagline}
        </div>
        <div style={{ display: "flex", fontSize: "28px", color: "#2563eb", marginTop: "26px" }}>
          evanappel.me
        </div>
      </div>
    </div>
  );
}
