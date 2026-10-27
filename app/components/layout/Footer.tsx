"use client";

import React from "react";
import { Mail, MapPin, Heart, Code, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/app/utils/constants";
import FadeIn from "../animations/FadeIn";
import { scrollToSection } from "@/app/hooks/useScrollSpy";
import { IconType } from "react-icons";

const Footer: React.FC = () => {
  const socialIcons: Record<string, IconType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Top Subtle Neon Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent z-10" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Logo & Info Section */}
          <FadeIn delay={0}>
            <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-primary/10 border border-primary/25 rounded-xl">
                  <Code className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <button
                  onClick={scrollToTop}
                  className="text-2xl md:text-3xl font-bold text-white italic tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
                >
                  Muhammad<span className="text-primary italic">Ahmed</span>
                </button>
              </div>

              <div className="w-full space-y-2.5 max-w-[290px] md:max-w-none">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 bg-white/[0.025] hover:bg-white/[0.06] border border-primary/15 hover:border-primary/40 rounded-2xl transition-all duration-300"
                >
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm group-hover:text-white transition-colors truncate font-light">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="group flex items-center gap-3 p-3 bg-white/[0.025] hover:bg-white/[0.06] border border-primary/15 hover:border-primary/40 rounded-2xl transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm group-hover:text-white transition-colors truncate font-light">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[3px] text-primary">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 max-w-[250px] mx-auto md:mx-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2.5 text-white/70 hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-primary group-hover:w-3.5 transition-all duration-300" />
                      <span className="text-xs md:text-sm font-medium">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Social Section */}
          <FadeIn delay={200}>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-[3px] text-primary">
                Connect
              </h4>
              <p className="text-white/65 text-xs sm:text-sm mb-6 leading-relaxed max-w-[260px] md:max-w-none font-light">
                Let&apos;s bridge the gap between your ideas and digital reality.
              </p>
              <div className="flex gap-3">
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
                        className="w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-primary/20 hover:border-primary rounded-xl hover:bg-primary transition-all duration-300 group hover:-translate-y-1 shadow-sm"
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                      </a>
                    ) : null;
                  })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-[3px] text-center sm:text-left">
                © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()} • ALL RIGHTS RESERVED
              </p>

              <div className="flex items-center gap-4">
                <div className="px-5 py-2 bg-white/[0.025] border border-primary/20 rounded-full flex items-center gap-2.5">
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-[2px]">
                    Built with
                  </span>
                  <Heart className="w-3 h-3 text-primary fill-primary animate-pulse" />
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-[2px]">
                    in Karachi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
