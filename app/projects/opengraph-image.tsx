import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { capitalize, numberToWord } from "@/lib/numberWords";
import { OG_SIZE, ogCard } from "@/lib/ogCard";

// Dedicated share card for /projects, since the page sets its own openGraph
// and would otherwise not inherit the root card. Count derived from the data.
const shippedWord = numberToWord(projects.filter((p) => !p.wip).length);

export const alt = `Projects — ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    ogCard({
      badge: "Available for work",
      title: "Projects",
      subtitle: `${siteConfig.name} — ${siteConfig.title}`,
      tagline: `${capitalize(shippedWord)} working applications, built with AI agents and kept honest with tests.`,
    }),
    { ...size },
  );
}
