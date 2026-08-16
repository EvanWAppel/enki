import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { OG_SIZE, ogCard } from "@/lib/ogCard";

// Dedicated share card for /how-i-work, since the page sets its own openGraph.
export const alt = `How I Work — ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    ogCard({
      badge: "Available for work",
      title: "How I work",
      subtitle: `${siteConfig.name} — ${siteConfig.title}`,
      tagline: "Building with AI agents, kept honest with tests: the RECL loop and a verification-first discipline.",
    }),
    { ...size },
  );
}
