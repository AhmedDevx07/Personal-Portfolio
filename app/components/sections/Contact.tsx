"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/app/utils/constants";
import FadeIn from "../animations/FadeIn";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Status {
  type: "success" | "error" | "";
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>({ type: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email" });
      return;
    }

    setStatus({
      type: "success",
      message: "Message sent! I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  const socialIcons: Record<string, any> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[3px]">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Let's build something{" "}
              <span className="text-primary italic">great.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Form */}
          <FadeIn delay={100}>
            <div className="relative group bg-white/[0.03] border border-primary/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                      placeholder="Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                      placeholder="123@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-primary text-black font-bold rounded-2xl hover:bg-white transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                   
                </button>

                {status.message && (
                  <div
                    className={`text-center text-sm font-bold mt-4 ${status.type === "success" ? "text-primary" : "text-red-400"}`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Right: Info Cards */}
          <div className="space-y-8">
            <FadeIn delay={200}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  Available for new opportunities
                </h3>
                <p className="text-white/50 font-light leading-relaxed max-w-md">
                  Karachi base hoon magar globally kaam karta hoon. Agar koi
                  idea hai toh discuss karte hain!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-primary/30 transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <Mail className="w-6 h-6 text-primary group-hover:text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-[2px] mb-1">
                        Email Me
                      </p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-lg text-white hover:text-primary transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-primary/30 transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-[2px] mb-1">
                        Location
                      </p>
                      <p className="text-lg text-white hover:text-primary transition-colors">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[3px] mb-6">
                    Social Discovery
                  </p>
                  <div className="flex gap-4">
                    {Object.entries(SOCIAL_LINKS)
                      .slice(0, 3)
                      .map(([platform, url]) => {
                        const Icon = socialIcons[platform];
                        return Icon ? (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 flex items-center justify-center bg-white/[0.03] border border-primary/10 rounded-2xl hover:bg-primary hover:border-primary transition-all duration-500 group"
                          >
                            <Icon className="w-6 h-6 text-white/50 group-hover:text-black transition-colors" />
                          </a>
                        ) : null;
                      })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
