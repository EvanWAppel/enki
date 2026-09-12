import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="contact-section">
      <p className="eyebrow">03 / Get in touch</p>
      <div className="contact-layout">
        <div><h2>Good work starts<br />with a conversation.</h2><p>I’m open to new opportunities. Have a role or a project in mind? Let’s talk.</p></div>
        <div className="contact-links">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={22} aria-hidden /></a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={19} aria-hidden /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={19} aria-hidden /></a>
        </div>
      </div>
    </SectionWrapper>
  );
}
