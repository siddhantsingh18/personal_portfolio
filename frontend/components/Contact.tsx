"use client";
import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    valueKey: "email" as const,
    href: (value: string) => `mailto:${value}`,
    isLink: true,
  },
  {
    icon: Phone,
    label: "Phone",
    valueKey: "phone" as const,
    href: (value: string) => `tel:${value.replace(/\s/g, "")}`,
    isLink: true,
  },
  {
    icon: MapPin,
    label: "Location",
    valueKey: "location" as const,
    href: () => "",
    isLink: false,
  },
];

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl text-[#1D1D1F] text-sm placeholder:text-[#86868B] focus:outline-none focus:border-[#0071E3] focus:bg-white transition-all duration-200";

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#0071E3] uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F]">Contact Me</h2>
          <p className="text-[#86868B] mt-3 max-w-lg mx-auto">
            I&apos;m actively looking for internship and full-time opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-[#F5F5F7] border border-[#D2D2D7] rounded-2xl p-6">
              <h3 className="font-bold text-[#1D1D1F] mb-5">Contact Info</h3>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, valueKey, href, isLink }) => {
                  const value = personal[valueKey];
                  const content = (
                    <>
                      <div className="w-9 h-9 bg-[#e8f1fd] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0071E3] transition-colors">
                        <Icon size={15} className="text-[#0071E3] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-[#86868B]">{label}</p>
                        <p className="text-sm font-medium text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors break-all">
                          {value}
                        </p>
                      </div>
                    </>
                  );

                  if (isLink) {
                    return (
                      <a key={label} href={href(value)} className="flex items-start gap-3 group">
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={label} className="flex items-start gap-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#F5F5F7] border border-[#D2D2D7] rounded-2xl p-6">
              <h3 className="font-bold text-[#1D1D1F] mb-4">Social Links</h3>
              <div className="flex gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-[#D2D2D7] rounded-xl text-sm font-medium text-[#1D1D1F] hover:border-[#0071E3] hover:text-[#0071E3] transition-all"
                >
                  <LinkedinIcon size={15} />
                  LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-[#D2D2D7] rounded-xl text-sm font-medium text-[#1D1D1F] hover:border-[#0071E3] hover:text-[#0071E3] transition-all"
                >
                  <GithubIcon size={15} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="bg-[#e8f1fd] border border-[#0071E3]/20 rounded-2xl p-5">
              <p className="text-sm text-[#0071E3] font-semibold mb-1">🟢 Available for work</p>
              <p className="text-xs text-[#1D1D1F]/70 leading-relaxed">
                Open to internships, full-time roles, and freelance projects in full-stack development.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#F5F5F7] border border-[#D2D2D7] rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#1D1D1F] mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-[#1D1D1F] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-[#1D1D1F] mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity / Project Collaboration"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#1D1D1F] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "success" && (
                  <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 font-medium">
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {status === "error" && errorMsg && (
                  <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                    ❌ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0071E3] text-white font-semibold rounded-xl hover:bg-[#0051a8] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
