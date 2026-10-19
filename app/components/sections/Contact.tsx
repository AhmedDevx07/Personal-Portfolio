"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Check,
  Copy,
  User,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
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
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            message: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({
            type: "error",
            message:
              "Failed to send message. Please try again or email directly.",
          });
          setLoading(false);
        },
      );

    setTimeout(() => setStatus({ type: "", message: "" }), 6000);
  };

  const socialIcons: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <FadeIn delay={0}>
          <div className="text-center mb-16 px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(189,255,105,0.1)]">
              <MessageSquare className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[2.5px]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-tight">
              Let&apos;s build something{" "}
              <span className="text-primary italic">great together.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto font-light leading-relaxed">
              Looking for a developer for your team, interested in collaborating
              on a project, or just want to connect? I’d love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start max-w-5xl mx-auto lg:max-w-none">
          {/* Left: Modern Glassmorphism Form */}
          <FadeIn delay={100}>
            <div className="relative bg-white/[0.025] hover:bg-white/[0.035] border border-primary/20 hover:border-primary/40 rounded-[2.2rem] p-7 sm:p-9 md:p-10 shadow-2xl backdrop-blur-xl mx-auto w-full transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 relative z-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center gap-1.5 ml-1">
                      <User className="w-3 h-3 text-primary" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-primary/15 hover:border-primary/35 focus:border-primary rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-light"
                      placeholder="e.g. Muhammad Ahmed"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center gap-1.5 ml-1">
                      <Mail className="w-3 h-3 text-primary" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-primary/15 hover:border-primary/35 focus:border-primary rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-light"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center gap-1.5 ml-1">
                    <MessageSquare className="w-3 h-3 text-primary" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-primary/15 hover:border-primary/35 focus:border-primary rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-light resize-none"
                    placeholder="Tell me about your project, timeline, or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-black font-extrabold uppercase text-[11px] tracking-widest rounded-xl hover:bg-white hover:shadow-[0_0_25px_rgba(189,255,105,0.3)] transition-all duration-300 overflow-hidden active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Transmitting...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {status.message && (
                  <div
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold mt-3 ${
                      status.type === "success"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Right: Info Cards & Quick Connect */}
          <div className="space-y-6 w-full max-w-[500px] mx-auto lg:mx-0">
            <FadeIn delay={200}>
              <div className="space-y-6 text-center lg:text-left">
                {/* Availability Badge & Header */}
                <div className="space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Open to Full-Time Roles
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Let's build something meaningful.
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">
                    Based in Karachi, Pakistan, I'm a MERN Stack and Next.js
                    Developer interested in building responsive web
                    applications, REST APIs, and AI-powered features. I'm open
                    to suitable on-site and remote opportunities and look
                    forward to connecting with development teams.
                  </p>
                </div>

                {/* Contact Direct Cards */}
                <div className="grid grid-cols-1 gap-3.5">
                  {/* Email with Direct Copy Action */}
                  <div className="flex items-center justify-between p-4 sm:p-5 bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/40 rounded-2xl transition-all duration-300 group backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm shrink-0">
                        <Mail className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-white/50 uppercase tracking-[2px] mb-0.5">
                          Email Me
                        </p>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-sm sm:text-base text-white hover:text-primary transition-colors truncate block max-w-[180px] sm:max-w-none font-medium"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 hover:border-primary/40 hover:bg-primary hover:text-black text-white/80 text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 active:scale-95 cursor-pointer shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-primary group-hover:text-black" />
                          <span className="text-[10px] uppercase tracking-wider">
                            Copied
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 opacity-70" />
                          <span className="text-[10px] uppercase tracking-wider">
                            Copy
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Location Card */}
                  <div className="flex items-center gap-4 p-4 sm:p-5 bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/40 rounded-2xl transition-all duration-300 group backdrop-blur-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm shrink-0">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-[2px] mb-0.5">
                        Location
                      </p>
                      <p className="text-sm sm:text-base text-white font-medium">
                        {PERSONAL_INFO.location}
                        <span className="text-xs text-white/50 font-normal ml-2">
                          (UTC +5 PKT)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Discovery */}
                <div className="pt-2">
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-[2.5px] mb-3.5">
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
                            className="w-12 h-12 flex items-center justify-center bg-white/[0.03] border border-primary/20 rounded-xl hover:bg-primary hover:border-primary duration-300 transition-all group hover:-translate-y-1 shadow-sm"
                          >
                            <Icon className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
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
