"use client";
import { useState, useEffect } from "react";
import { portfolioData } from "@/lib/data";
import { MapPin, Mail, Download, ArrowDown } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";


export default function Hero() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  
  useEffect(() => {
    const current = personal.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % personal.roles.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, personal.roles]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-16 pb-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0071E3]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0071E3]/8 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#D2D2D7] rounded-full text-sm text-[#86868B] mb-8 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for internships & opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-[#0071E3]">Siddhant Singh</span>
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl text-[#86868B] font-medium mb-6 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center gap-1 px-2">
          <span>{displayed}</span>
          <span className="w-0.5 h-7 bg-[#0071E3] animate-blink inline-block flex-shrink-0" />
        </div>

        <p className="text-base sm:text-lg text-[#86868B] max-w-2xl mx-auto mb-8 leading-relaxed">
          {personal.bio}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#86868B] mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#0071E3] flex-shrink-0" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1.5 max-w-full">
            <Mail size={14} className="text-[#0071E3] flex-shrink-0" />
            <span className="break-all">{personal.email}</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-[#0071E3] text-white font-semibold rounded-full hover:bg-[#0051a8] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 bg-white border border-[#D2D2D7] text-[#1D1D1F] font-semibold rounded-full hover:border-[#0071E3] hover:text-[#0071E3] transition-all duration-200 text-center"
          >
            Get In Touch
          </a>
          <a
            href={personal.resumeUrl}
            download="Siddhant_Singh_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3 bg-[#F5F5F7] border border-[#D2D2D7] text-[#1D1D1F] font-semibold rounded-full hover:bg-[#E8E8ED] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-[#D2D2D7] rounded-full text-[#86868B] hover:text-[#0071E3] hover:border-[#0071E3] transition-all duration-200 hover:shadow-sm"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-[#D2D2D7] rounded-full text-[#86868B] hover:text-[#0071E3] hover:border-[#0071E3] transition-all duration-200 hover:shadow-sm"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 bg-white border border-[#D2D2D7] rounded-full text-[#86868B] hover:text-[#0071E3] hover:border-[#0071E3] transition-all duration-200 hover:shadow-sm"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#86868B] hover:text-[#0071E3] transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
