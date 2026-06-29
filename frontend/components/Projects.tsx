"use client";
import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

type IconComponent = React.ComponentType<{ size?: number }>;

function isValidLink(url: string) {
  return Boolean(url && url !== "#");
}

function ProjectLink({
  href,
  label,
  icon: Icon,
  variant,
}: {
  href: string;
  label: string;
  icon: IconComponent;
  variant: "outline" | "primary";
}) {
  const enabled = isValidLink(href);

  const baseClass =
    variant === "primary"
      ? "flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#0071E3] rounded-lg text-sm font-medium text-white hover:bg-[#0051a8] transition-all"
      : "flex-1 flex items-center justify-center gap-1.5 py-2 border border-[#D2D2D7] rounded-lg text-sm font-medium text-[#1D1D1F] hover:border-[#0071E3] hover:text-[#0071E3] transition-all";

  const disabledClass =
    variant === "primary"
      ? "flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#0071E3]/40 rounded-lg text-sm font-medium text-white/80 cursor-not-allowed"
      : "flex-1 flex items-center justify-center gap-1.5 py-2 border border-[#D2D2D7] rounded-lg text-sm font-medium text-[#86868B] cursor-not-allowed opacity-60";

  if (!enabled) {
    return (
      <span className={disabledClass} title={`${label} link coming soon`} aria-disabled="true">
        <Icon size={14} />
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
    >
      <Icon size={14} />
      {label}
    </a>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-widest mb-2">What I&apos;ve Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F]">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#F5F5F7] border border-[#D2D2D7] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              {project.image ? (
                <div className="relative w-full min-h-[9rem] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center min-h-[9rem]`}>
                  <span className="text-5xl">{project.emoji}</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-[#1D1D1F] leading-snug">{project.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-white border border-[#D2D2D7] rounded-full text-[#86868B] whitespace-nowrap flex-shrink-0">
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-[#86868B] mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-xs text-[#86868B]">
                      <CheckCircle2 size={13} className="text-[#0071E3] flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white border border-[#D2D2D7] rounded-md text-xs font-medium text-[#1D1D1F]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <ProjectLink href={project.github} label="Code" icon={GithubIcon} variant="outline" />
                  <ProjectLink href={project.live} label="Live" icon={ExternalLink} variant="primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
