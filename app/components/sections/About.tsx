"use client";

import React from "react";
import {
  Download,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/app/utils/constants";
import FadeIn from "../animations/FadeIn";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient decorative glow */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[450px] h-[450px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT: Content & Bio */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-primary/25 bg-primary/10 rounded-full shadow-[0_0_20px_rgba(189,255,105,0.1)] backdrop-blur-md">
                  <Terminal className="w-3.5 h-3.5 text-primary animate-pulse" />
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-[2.5px]">
                    FULL STACK DEVELOPER
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/10 bg-white/[0.03] rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-[10px] font-semibold text-white/70 tracking-wider">
                    Open to Full-Time Roles
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.12]">
                Building <span className="text-primary italic">solutions</span>{" "}
                that make a difference.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-4">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base text-white/75 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Key competencies tags */}
            <FadeIn delay={250}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                {[
                  "Full-Stack Development",
                  "REST API Development",
                  "React & Next.js",
                  "Responsive UI Development",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-white/70"
                  >
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="pt-2 flex justify-center lg:justify-start">
                <button
                  className="group relative inline-flex items-center gap-3 bg-primary hover:bg-white text-black rounded-2xl px-9 py-4.5 text-sm font-extrabold transition-all duration-500 shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span>Download CV</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Bento Cards */}
          <FadeIn delay={300}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 relative">
              {/* Central Glow Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 blur-[110px] rounded-full pointer-events-none" />

              {/* Card 1: Tech Ecosystem (Large) */}
              <div className="col-span-2 group">
                <div className="relative bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/50 rounded-[2.2rem] p-7 sm:p-8 transition-all duration-500 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-[0_10px_35px_-10px_rgba(189,255,105,0.15)] hover:-translate-y-1">
                  {/* Subtle Top Gradient Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 relative z-10 mb-5">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/25 group-hover:rotate-6 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_20px_rgba(189,255,105,0.15)]">
                      <Cpu className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                          Architecture
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Tech Ecosystem
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed font-light mb-5">
                    Building full-stack applications with MongoDB, Express.js,
                    React.js, Node.js, and Next.js — focused on clean
                    architecture, efficient state management, and scalable
                    backend systems.
                  </p>

                  {/* Micro Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
                    {[
                      "MongoDB",
                      "Express.js",
                      "React.js",
                      "Node.js",
                      "Next.js",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70 bg-white/[0.04] border border-white/10 rounded-md group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: Aesthetic (Small) */}
              <div className="col-span-2 sm:col-span-1 group">
                <div className="h-full relative bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/50 rounded-[2.2rem] p-7 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between overflow-hidden hover:shadow-[0_10px_35px_-10px_rgba(189,255,105,0.15)] hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:rotate-6 transition-all duration-500 mb-5 shadow-[0_0_20px_rgba(189,255,105,0.12)]">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest block mb-1">
                      Design Focus
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Aesthetic Precision
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                      Designing modern, responsive, and user-friendly interfaces
                      with a strong focus on clean UI, consistency, and seamless
                      user experience across all devices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Performance (Small) */}
              <div className="col-span-2 sm:col-span-1 group">
                <div className="h-full relative bg-white/[0.025] hover:bg-white/[0.04] border border-primary/20 hover:border-primary/50 rounded-[2.2rem] p-7 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between overflow-hidden hover:shadow-[0_10px_35px_-10px_rgba(189,255,105,0.15)] hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:rotate-6 transition-all duration-500 mb-5 shadow-[0_0_20px_rgba(189,255,105,0.12)]">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest block mb-1">
                      Engineering
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Performance First
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-light">
                      Developing optimized web applications with fast load
                      times, efficient API handling, and performance best
                      practices in both React and Next.js.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Stats Bar */}
              <div className="col-span-2">
                <div className="relative bg-white/[0.025] hover:bg-white/[0.04] border border-primary/25 rounded-[2.2rem] p-6 backdrop-blur-xl overflow-hidden transition-all duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
                  <div className="grid grid-cols-3 gap-3 relative z-10">
                    <div className="text-center group/stat">
                      <p className="text-2xl sm:text-3xl font-black text-primary italic leading-none group-hover/stat:scale-105 transition-transform duration-300">
                        30+
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-bold text-white/70 uppercase tracking-widest mt-2">
                        Projects Built
                      </p>
                    </div>

                    <div className="text-center border-x border-primary/20 group/stat">
                      <p className="text-2xl sm:text-3xl font-black text-primary italic leading-none group-hover/stat:scale-105 transition-transform duration-300">
                        MERN
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-bold text-white/70 uppercase tracking-widest mt-2">
                        Core Stack
                      </p>
                    </div>

                    <div className="text-center group/stat">
                      <p className="text-2xl sm:text-3xl font-black text-primary italic leading-none group-hover/stat:scale-105 transition-transform duration-300">
                        Clean
                      </p>
                      <p className="text-[9px] sm:text-[10px] font-bold text-white/70 uppercase tracking-widest mt-2">
                        Code Practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
