import React from "react";
import { Linkedin, Github, Mail, MapPin, ArrowUpRight, ChevronDown } from "lucide-react";
import { Badge } from "../ui/badge";

const HeroAbout = ({ data }) => {
  const { personal, skills } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
        {/* Abstract orbital graphic */}
        <div className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-[400px] md:w-[520px] h-[400px] md:h-[520px] opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 520 520" className="w-full h-full animate-spin-slow">
            <circle cx="260" cy="260" r="250" fill="none" stroke="#78716C" strokeWidth="0.6" />
            <circle cx="260" cy="260" r="210" fill="none" stroke="#78716C" strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="260" cy="260" r="170" fill="none" stroke="#78716C" strokeWidth="0.6" />
            <circle cx="260" cy="260" r="130" fill="none" stroke="#78716C" strokeWidth="0.6" strokeDasharray="4 8" />
            <circle cx="260" cy="260" r="90" fill="none" stroke="#78716C" strokeWidth="0.6" />
            <circle cx="260" cy="260" r="4" fill="#78716C" />
          </svg>
        </div>

        <div className="max-w-[1200px] w-full mx-auto relative z-10">
          <div className="animate-fadeIn">
            <div className="flex items-center gap-2 mb-8">
              <MapPin size={14} className="text-[#A8A29E]" />
              <span className="text-[13px] text-[#A8A29E] tracking-wide">
                {personal.location}
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-light tracking-[-0.04em] text-[#1C1917] leading-[0.95]">
              {personal.name}
            </h1>

            <p className="mt-5 text-xl md:text-2xl font-light text-[#57534E] tracking-[-0.01em]">
              {personal.title}
            </p>

            <p className="mt-4 text-[15px] text-[#78716C] max-w-lg leading-relaxed">
              {personal.tagline}
            </p>

            <div className="flex items-center gap-3 mt-10 flex-wrap">
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-white text-[13px] font-medium rounded-full hover:bg-[#292524] transition-colors duration-200"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E7E5E4] text-[#1C1917] text-[13px] font-medium rounded-full hover:border-[#A8A29E] transition-colors duration-200"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E7E5E4] text-[#1C1917] text-[13px] font-medium rounded-full hover:border-[#A8A29E] transition-colors duration-200"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={20} className="text-[#D6D3D1]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F5F2]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[12px] text-[#A8A29E] tracking-[0.2em] uppercase mb-10">
            About
          </p>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
            <div>
              {personal.about.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-[17px] md:text-lg text-[#44403C] leading-[1.75] font-light ${
                    i > 0 ? "mt-6" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[13px] font-medium text-[#1C1917] mb-3 tracking-wide">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white border border-[#E7E5E4] text-[#57534E] text-[11px] font-normal hover:bg-white px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
