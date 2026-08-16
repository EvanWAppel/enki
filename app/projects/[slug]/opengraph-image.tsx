import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { OG_SIZE, ogCard } from "@/lib/ogCard";

const detailProjects = projects.filter((p) => p.detail);

export const alt = `Project — ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return detailProjects.map((p) => ({ slug: p.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.id === slug);
  const title = project ? project.title.split(":")[0] : "Projects";
  const tagline = project?.proves ?? project?.description ?? "";

  return new ImageResponse(
    ogCard({
      badge: "Available for work",
      title,
      subtitle: `${siteConfig.name} — ${siteConfig.title}`,
      tagline,
    }),
    { ...size },
  );
}
