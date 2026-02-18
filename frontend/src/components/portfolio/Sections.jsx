import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";
import { Badge } from "../ui/badge";

const useInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ExperienceSection = ({ experience }) => (
  <section id="experience" className="py-24 md:py-32 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto">
      <Reveal>
        <p className="text-[12px] text-[#A8A29E] tracking-[0.2em] uppercase mb-10">
          Experience
        </p>
        <h2 className="text-4xl md:text-[3.2rem] font-light text-[#1C1917] tracking-[-0.03em] leading-tight mb-16">
          Where I've worked
        </h2>
      </Reveal>

      <div className="space-y-0">
        {experience.map((exp, i) => (
          <Reveal key={i} delay={i * 150}>
            <div
              className={`grid md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-12 ${
                i < experience.length - 1 ? "border-b border-[#F5F5F4]" : ""
              }`}
            >
              <div className="md:pt-1">
                <p className="text-[13px] text-[#78716C]">{exp.period}</p>
                <p className="text-[13px] text-[#A8A29E] mt-1">{exp.location}</p>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-[#1C1917] tracking-[-0.01em]">
                  {exp.role}
                </h3>
                <p className="text-[15px] text-[#57534E] mt-1">{exp.company}</p>
                <ul className="mt-6 space-y-4">
                  {exp.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="text-[14px] text-[#57534E] leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-[6px] before:h-[1px] before:bg-[#D6D3D1]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F5F2]">
    <div className="max-w-[1200px] mx-auto">
      <Reveal>
        <p className="text-[12px] text-[#A8A29E] tracking-[0.2em] uppercase mb-10">
          Projects
        </p>
        <h2 className="text-4xl md:text-[3.2rem] font-light text-[#1C1917] tracking-[-0.03em] leading-tight mb-16">
          Things I've built
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Reveal key={i} delay={i * 100}>
            <div
              className={`group bg-white border border-[#E7E5E4] rounded-xl p-7 md:p-8 hover:border-[#D6D3D1] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(28,25,23,0.04)] transition-[border-color,transform,box-shadow] duration-300 h-full flex flex-col ${
                project.subtle ? "opacity-80" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-medium text-[#1C1917]">
                    {project.name}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D6D3D1] hover:text-[#1C1917] transition-colors duration-200"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
                <span className="text-[11px] text-[#A8A29E] whitespace-nowrap ml-4 mt-0.5">
                  {project.period}
                </span>
              </div>

              <p className="text-[13px] text-[#78716C] mb-1">{project.subtitle}</p>

              <div className="flex items-center gap-1.5 mb-4 text-[12px]">
                <span className="text-[#57534E]">{project.role}</span>
                {project.context && (
                  <>
                    <span className="text-[#D6D3D1]">·</span>
                    <span className="text-[#A8A29E]">{project.context}</span>
                  </>
                )}
              </div>

              <p className="text-[13px] text-[#57534E] leading-[1.7] mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-[#F5F5F4] text-[#78716C] text-[10px] font-normal hover:bg-[#F5F5F4] border-0 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ personal }) => (
  <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto text-center">
      <Reveal>
        <p className="text-[12px] text-[#A8A29E] tracking-[0.2em] uppercase mb-10">
          Contact
        </p>
        <h2 className="text-4xl md:text-[3.2rem] font-light text-[#1C1917] tracking-[-0.03em] leading-tight mb-5">
          Let's connect
        </h2>
        <p className="text-[15px] text-[#78716C] font-light max-w-md mx-auto mb-12 leading-relaxed">
          Open to new opportunities in product management.<br />
          Let's build something meaningful together.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-white text-[13px] font-medium rounded-full hover:bg-[#292524] transition-colors duration-200"
          >
            <Mail size={15} />
            Get in touch
            <ArrowUpRight size={13} />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#E7E5E4] text-[#1C1917] text-[13px] font-medium rounded-full hover:border-[#A8A29E] transition-colors duration-200"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#E7E5E4] text-[#1C1917] text-[13px] font-medium rounded-full hover:border-[#A8A29E] transition-colors duration-200"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

const Footer = ({ personal }) => (
  <footer className="py-8 px-6 md:px-12 border-t border-[#F5F5F4]">
    <div className="max-w-[1200px] mx-auto flex items-center justify-between">
      <p className="text-[12px] text-[#A8A29E]">
        \u00a9 {new Date().getFullYear()} {personal.name}
      </p>
      <div className="flex items-center gap-5">
        <a
          href={personal.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D6D3D1] hover:text-[#1C1917] transition-colors duration-200"
        >
          <Linkedin size={15} />
        </a>
        <a
          href={personal.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D6D3D1] hover:text-[#1C1917] transition-colors duration-200"
        >
          <Github size={15} />
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="text-[#D6D3D1] hover:text-[#1C1917] transition-colors duration-200"
        >
          <Mail size={15} />
        </a>
      </div>
    </div>
  </footer>
);

const Sections = ({ data }) => {
  return (
    <>
      <ExperienceSection experience={data.experience} />
      <ProjectsSection projects={data.projects} />
      <ContactSection personal={data.personal} />
      <Footer personal={data.personal} />
    </>
  );
};

export default Sections;
