import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          <div>
            <p className="eyebrow mb-7">{siteConfig.title}</p>
            <h1 className="hero-title">Thoughtful systems.<br /><em>Useful software.</em></h1>
            <p className="hero-intro">I’m {siteConfig.name}. I turn complex data into clear decisions, and build software that holds up in the real world.</p>
            <p className="hero-description">A decade in data. A hands-on approach to applied AI. From pipelines to products, I pair the speed of agentic tools with the discipline of good engineering.</p>
            <div className="flex flex-wrap items-center gap-5 mt-8">
              <Button href="#projects">Explore my work <ArrowDown size={16} aria-hidden /></Button>
              <Link href="/how-i-work" className="text-sm font-medium inline-flex items-center gap-2 hover:text-accent">How I work <ArrowUpRight size={16} aria-hidden /></Link>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image src={siteConfig.photo} alt={`Photo of ${siteConfig.name}`} fill sizes="(max-width: 767px) 80vw, 340px" className="object-cover" preload />
            </div>
            <figcaption><span className="availability-dot" aria-hidden /> Available for work <ArrowUpRight size={14} className="ml-auto" aria-hidden /></figcaption>
          </figure>
        </div>
        <div className="hero-facts">
          <div><strong>10+ years</strong><span>Turning data into decisions</span></div>
          <div><strong>30 projects</strong><span>Leading a SAS-to-Python migration</span></div>
          <div><strong>100 analysts</strong><span>Python &amp; Git technical authority</span></div>
        </div>
      </div>
    </section>
  );
}
