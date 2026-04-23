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
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <FadeIn delay={0}>
            <div>
              <div className="flex items-center gap-2">
                <Code className="w-6 h-6 text-primary animate-pulse" />
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-3xl font-bold bg-white  italic bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight cursor-pointer"
                >
                  Muhammad<span className="text-primary italic">Ahmed</span>
                </button>
              </div>
              <br />
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 bg-white/5 border border-primary/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-4 h-4 text-primary " />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors ">
                    {PERSONAL_INFO.email}
                  </span>
                </a>
                <div className="group flex items-center gap-3 p-3 bg-white/5 border border-primary/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-xl">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-xl">
                Connect With Me
              </h4>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Let's connect and create someting amazing together
              </p>
              <div className="flex flex-wrap gap-3">
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
                        <Icon className="w-6 h-6 text-white/40 group-hover:text-black transition-colors" />
                      </a>
                    ) : null;
                  })}
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-[10px] font-black uppercase tracking-[4px]">
                © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
              </p>
              <div className="px-8 py-3 bg-white/[0.02] border border-white/5 rounded-full flex items-center gap-3">
                <span className="text-white/50 text-[9px] font-black uppercase tracking-[2px]">
                  Built with
                </span>
                <Heart className="w-3 h-3 text-primary fill-primary animate-pulse animate-pulse" />
                <span className="text-white/50 text-[9px] font-black uppercase tracking-[2px]">
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
