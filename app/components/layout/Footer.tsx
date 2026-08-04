"use client";

import React from "react";
import { Mail, MapPin, Heart, Code } from "lucide-react";
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

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Logo & Info Section */}
          <FadeIn delay={0}>
            <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-primary animate-pulse" />
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-2xl md:text-3xl font-bold text-white italic tracking-tight hover:opacity-80 transition-opacity"
                >
                  Muhammad<span className="text-primary">Ahmed</span>
                </button>
              </div>

              <div className="w-full space-y-3 max-w-[280px] md:max-w-none">
                <a className="group flex items-center gap-3 p-3.5 bg-white/[0.03] border border-primary/10 rounded-2xl hover:bg-white/[0.08] hover:border-primary/20 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary group-hover:text-black" />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm group-hover:text-white transition-colors truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="group flex items-center gap-3 p-3.5 bg-white/[0.03] border border-primary/10 rounded-2xl hover:bg-white/[0.08] hover:border-primary/20 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors">
                    <MapPin className="w-4 h-4 text-primary group-hover:text-black" />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm group-hover:text-white transition-colors truncate">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-primary/80">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 max-w-[250px] mx-auto md:mx-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-primary group-hover:w-3 transition-all duration-300" />
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
              <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-widest text-primary/80">
                Connect
              </h4>
              <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-[240px] md:max-w-none">
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
                        className="w-12 h-12 flex items-center justify-center bg-white/[0.03] border border-primary/10 rounded-xl hover:bg-primary hover:border-primary transition-all duration-500 group"
                      >
                        <Icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                      </a>
                    ) : null;
                  })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={300}>
          <div className="pt-10 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              <p className="text-white/60 text-[9px] font-black uppercase tracking-[4px] text-center md:text-left">
                © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
              </p>

              <div className="px-6 py-2.5 bg-white/[0.02] border border-primary/20 rounded-full flex items-center gap-3">
                <span className="text-white/60 text-[8px] font-black uppercase tracking-[2px]">
                  Built with
                </span>
                <Heart className="w-3 h-3 text-primary fill-primary animate-pulse" />
                <span className="text-white/60 text-[8px] font-black uppercase tracking-[2px]">
                  in Karachi
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
