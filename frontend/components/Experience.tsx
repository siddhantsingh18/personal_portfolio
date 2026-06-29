"use client";
import { portfolioData } from "@/lib/data";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-widest mb-2">Work History</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F]">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-[#D2D2D7]" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 w-16 items-start justify-center pt-5">
                  <div className="w-4 h-4 bg-[#0071E3] rounded-full border-4 border-white shadow-md ring-1 ring-[#D2D2D7]" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-[#D2D2D7] rounded-2xl p-6 hover:border-[#0071E3] hover:shadow-md transition-all duration-300 max-sm:border-l-4 max-sm:border-l-[#0071E3]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-[#0071E3]" />
                        <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wide">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1D1D1F]">{exp.role}</h3>
                      <p className="text-[#0071E3] font-semibold">{exp.company}</p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#F5F5F7] border border-[#D2D2D7] rounded-full text-xs text-[#86868B] font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-[#86868B] leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#0071E3] flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#1D1D1F] mb-5">Achievements & Hackathons</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-[#D2D2D7] rounded-xl p-4 hover:border-[#0071E3] transition-all"
              >
                <span className="text-xl">🏅</span>
                <p className="text-sm text-[#86868B] leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
