import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";

const selected = projects.filter((project) => !project.wip && project.showcase != null)
  .sort((a, b) => a.showcase! - b.showcase!).slice(0, 3);

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="selected-section">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Selected work</p><h2>Built with purpose.</h2></div>
        <Link href="/projects" className="section-link">All projects <ArrowRight size={17} aria-hidden /></Link>
      </div>
      <div className="selected-grid">
        {selected.map((project, index) => (
          <article key={project.id} className="selected-project">
            <Link href={`/projects/${project.id}`} className="project-preview" aria-label={`Read about ${project.title}`}>
              <span className="project-number">0{index + 1}</span>
              {project.screenshot && <Image src={project.screenshot} alt={`${project.title} application preview`} fill sizes="(max-width: 767px) 90vw, 360px" className="object-contain p-5 pt-10" />}
              <span className="project-open"><ArrowUpRight size={18} aria-hidden /></span>
            </Link>
            <p className="eyebrow mt-6 mb-3">{project.roleTags?.[0] ?? "Software engineering"}</p>
            <h3><Link href={`/projects/${project.id}`}>{project.title.split(":")[0]} <ArrowUpRight size={20} aria-hidden /></Link></h3>
            <p className="project-summary">{project.proves ?? project.description}</p>
            <p className="project-stack">{project.tech.slice(0, 4).join(" / ")}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
