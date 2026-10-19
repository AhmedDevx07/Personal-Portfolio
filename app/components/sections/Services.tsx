"use client";

import React from "react";
import { services } from "@/app/data/services";
import * as LucideIcons from "lucide-react";
import { Wrench, LucideIcon, ArrowUpRight, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const serviceTags: Record<number, string[]> = {
  1: ["React.js", "Next.js", "Clean Architecture", "Component Systems"],
  2: ["Mobile-First", "Tailwind CSS", "Fluid UI", "Cross-Browser"],
  3: ["SSR / SSG", "Code Splitting", "Image Optimization", "Core Web Vitals"],
  4: ["MERN Architecture", "RESTful APIs", "MongoDB Schemas", "JWT Security"],
  5: ["Figma to Code", "Pixel Accuracy", "Micro-Interactions", "Responsive"],
  6: ["Semantic HTML", "Metadata Strategy", "Page Speed", "Search Indexing"],
};

const Services: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "45px 45px",
          }}
        />
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn delay={0}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(189,255,105,0.1)]">
              <Wrench className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[2.5px]">
                What I Can Build
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Technical{" "}
              <span className="text-primary italic">Capabilities</span>{" "}
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              From responsive user interfaces to full-stack applications, I
              build practical web solutions using React, Next.js, Node.js, and
              MongoDB.
            </p>
          </div>
        </FadeIn>

        {/* Top 2 Primary Featured Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-7">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent =
              (LucideIcons[
                service.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.Code2;
            const tags = serviceTags[service.id] || [];

            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div
                  onClick={() => scrollToSection("contact")}
                  className="relative bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/50 rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 group h-full overflow-hidden backdrop-blur-xl cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_15px_45px_-12px_rgba(189,255,105,0.18)] flex flex-col justify-between"
                >
                  {/* Subtle Top Gradient Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  <div className="relative z-10">
                    <div className="mb-7 flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(189,255,105,0.3)] transition-all duration-500">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-black transition-colors duration-300" />
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-white/30 group-hover:text-primary transition-colors">
                          0{service.id}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3.5 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities Tags */}
                  <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70 bg-white/[0.03] border border-white/10 rounded-lg group-hover:border-primary/25 group-hover:text-primary transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Corner Glow Effect */}
                  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Secondary Services (Grid of 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent =
              (LucideIcons[
                service.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.Code2;
            const tags = serviceTags[service.id] || [];

            return (
              <FadeIn key={service.id} delay={250 + index * 80}>
                <div
                  onClick={() => scrollToSection("contact")}
                  className="relative bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/50 rounded-[2.2rem] p-7 transition-all duration-500 group h-full flex flex-col justify-between backdrop-blur-xl cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_rgba(189,255,105,0.15)] overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  <div>
                    <div className="mb-6 flex justify-between items-center">
                      <div className="w-13 h-13 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:rotate-6 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-sm">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-black transition-colors duration-300" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-white/30 group-hover:text-primary transition-colors">
                          0{service.id}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light mb-5">
                      {service.description}
                    </p>
                  </div>

                  {/* Micro Tags */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[9px] font-semibold text-white/60 bg-white/[0.03] border border-white/5 rounded-md group-hover:text-primary group-hover:border-primary/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
