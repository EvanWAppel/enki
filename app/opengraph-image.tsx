import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { OG_SIZE, ogCard } from "@/lib/ogCard";

// Branded share card rendered when evanappel.me is posted to Slack, LinkedIn,
// an ATS, etc. Statically generated at build time.
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    ogCard({
      badge: "Available for work",
      title: siteConfig.name,
      subtitle: siteConfig.title,
      tagline: "I build software with AI agents, and I keep it honest with tests.",
    }),
    { ...size },
  );
}
