import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddhant Singh | Full Stack Developer",
  description:
    "Final year B.Tech CSE student & Full Stack Developer specializing in MERN stack, Next.js, and AI-integrated web applications.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Next.js", "Siddhant Singh", "Portfolio"],
  authors: [{ name: "Siddhant Singh" }],
  openGraph: {
    title: "Siddhant Singh | Full Stack Developer",
    description: "MERN Stack Developer & B.Tech CSE Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F5F5F7] text-[#1D1D1F] antialiased">{children}</body>
    </html>
  );
}
