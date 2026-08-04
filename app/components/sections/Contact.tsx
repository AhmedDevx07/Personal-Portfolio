"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/app/utils/constants";
import FadeIn from "../animations/FadeIn";
import emailjs from "@emailjs/browser";
import { IconType } from "react-icons";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_hauu2c9",
        "template_cco809g",
        templateParams,
        "NdkPmTmibn7Jm54o2",
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent! I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({
            type: "error",
            message: "Failed to send. Please try again later.",
          });
          setLoading(false);
        },
      );

    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  const socialIcons: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <FadeIn delay={0}>
          <div className="text-center mb-12 md:mb-20 px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4 md:mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[3px]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-tight">
              Let&apos;s build something{" "}
              <span className="text-primary italic">great together.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start max-w-5xl mx-auto lg:max-w-none">
          <FadeIn delay={100}>
            <div className="relative group bg-white/[0.02] border border-primary/20 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl mx-auto w-full">
              {/* Added ref={formRef} */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/60 uppercase tracking-widest ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/[0.05] border border-primary/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/60 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/[0.05] border border-primary/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-white/60 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3.5 bg-white/[0.05] border border-primary/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40 transition-all text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-black uppercase text-[11px] tracking-widest rounded-xl hover:bg-white transition-all duration-500 overflow-hidden active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status.message && (
                  <div
                    className={`text-center text-[10px] font-bold mt-2 ${status.type === "success" ? "text-primary" : "text-red-400"}`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Right: Info Cards */}
          <div className="space-y-6 md:space-y-8 w-full max-w-[500px] mx-auto lg:mx-0">
            <FadeIn delay={200}>
              <div className="space-y-6 text-center lg:text-left">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Available for new opportunities
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                    Based in Karachi, Pakistan, but working with clients
                    globally. Whether you have a specific project in mind or
                    just want to bridge the gap between an idea and a digital
                    reality&mdash;let&apos;s connect and make it happen.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 p-5 bg-white/[0.02] border border-primary/20 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all">
                      <Mail className="w-5 h-5 text-primary group-hover:text-black" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-white/60 uppercase tracking-[2px] mb-0.5">
                        Email Me
                      </p>
                      <a className="text-sm md:text-base text-white hover:text-primary transition-colors truncate block max-w-[200px] sm:max-w-none">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-white/[0.02] border border-primary/20 rounded-2xl hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-black" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-white/60 uppercase tracking-[2px] mb-0.5">
                        Location
                      </p>
                      <p className="text-sm md:text-base text-white">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-[9px] font-bold text-white/60 uppercase tracking-[3px] mb-4">
                    Social Discovery
                  </p>
                  <div className="flex justify-center lg:justify-start gap-3">
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
                            aria-label={`Visit my ${platform} profile`}
                            className="w-12 h-12 flex items-center justify-center bg-white/[0.03] border border-primary/20 rounded-xl hover:bg-primary hover:border-primary duration-300 transition-all group"
                          >
                            <Icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
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
