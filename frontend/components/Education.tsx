"use client";
import { portfolioData } from "@/lib/data";
import { Award } from "lucide-react";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-widest mb-2">My Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F]">Education & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-6 flex items-center gap-2">
              🎓 Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#D2D2D7] rounded-2xl p-5 hover:border-[#0071E3] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{edu.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1D1D1F] text-sm leading-snug mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-[#0071E3] text-sm font-medium">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-[#86868B]">{edu.period}</span>
                        <span className="w-1 h-1 bg-[#D2D2D7] rounded-full" />
                        <span className="text-xs font-semibold text-[#1D1D1F]">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-[#1D1D1F] mb-6 flex items-center gap-2">
              🏆 Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#D2D2D7] rounded-2xl p-5 hover:border-[#0071E3] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1D1D1F] text-sm leading-snug mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-[#0071E3] text-sm font-medium">{cert.issuer}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-[#86868B]">{cert.date}</span>
                        {cert.id && (
                          <>
                            <span className="w-1 h-1 bg-[#D2D2D7] rounded-full" />
                            <span className="text-xs text-[#86868B] font-mono break-all">ID: {cert.id}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Award size={16} className="text-[#0071E3] flex-shrink-0 mt-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
