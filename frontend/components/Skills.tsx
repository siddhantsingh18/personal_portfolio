"use client";
import { portfolioData } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "Programming Languages": "💻",
  "Frameworks & Libraries": "⚛️",
  "Databases": "🗄️",
  "Tools & Platforms": "🛠️",
  "Visualization": "📊",
  "Languages": "🌐",
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F]">Skills & Technologies</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-[#F5F5F7] border border-[#D2D2D7] rounded-2xl p-6 hover:border-[#0071E3] hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[category] || "🔧"}</span>
                <h3 className="font-semibold text-[#1D1D1F] text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-[#D2D2D7] rounded-lg text-xs font-medium text-[#1D1D1F] group-hover:border-[#0071E3]/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
