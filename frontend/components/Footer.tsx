import { portfolioData } from "@/lib/data";
import { Heart } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-[#D2D2D7] bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#86868B]">
          © {year}{" "}
          <span className="text-[#1D1D1F] font-semibold">{personal.name}</span>. All rights reserved.
        </p>
        <p className="text-sm text-[#86868B] flex items-center gap-1">
          Built with <Heart size={13} className="text-red-500 fill-red-500" /> using Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
