"use client";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+", icon: Rocket },
  { label: "Internships", value: "2", icon: Users },
  { label: "Certifications", value: "4+", icon: Zap },
  { label: "Tech Stack", value: "15+", icon: Code2 },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F]">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-[#86868B] text-base sm:text-lg leading-relaxed">
              I&apos;m a <span className="text-[#1D1D1F] font-semibold">final year B.Tech CSE student</span> at
              Invertis University with a CGPA of 7.9, deeply passionate about building
              full-stack web applications that solve real problems.
            </p>
            <p className="text-[#86868B] text-base sm:text-lg leading-relaxed">
              My focus is on the <span className="text-[#1D1D1F] font-semibold">MERN stack</span> — React, Node.js,
              Express, and MongoDB — along with modern tools like Next.js, TailwindCSS, and TypeScript.
              I love integrating AI APIs to create smarter, more impactful applications.
            </p>
            <p className="text-[#86868B] text-base sm:text-lg leading-relaxed">
              I&apos;ve completed two internships and built multiple production-ready projects including
              an AI interview platform and an AI resume analyzer. I&apos;m actively seeking
              <span className="text-[#1D1D1F] font-semibold"> internship and full-time opportunities</span> where
              I can contribute and grow.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Open to Work", "Full Stack", "MERN Stack", "AI Integration"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#e8f1fd] text-[#0071E3] text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="bg-white border border-[#D2D2D7] rounded-2xl p-6 hover:border-[#0071E3] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#e8f1fd] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0071E3] transition-colors duration-300">
                  <Icon size={20} className="text-[#0071E3] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-[#1D1D1F] mb-1">{value}</div>
                <div className="text-sm text-[#86868B]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
