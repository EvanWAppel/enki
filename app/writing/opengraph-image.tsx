import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { OG_SIZE, ogCard } from "@/lib/ogCard";

// Dedicated share card for /writing, since the page sets its own openGraph.
export const alt = `Writing — ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    ogCard({
      badge: "Available for work",
      title: "Writing",
      subtitle: `${siteConfig.name} — ${siteConfig.title}`,
      tagline:
        "Essays on data engineering, applied AI, and the craft of building software.",
    }),
    { ...size },
  );
}
