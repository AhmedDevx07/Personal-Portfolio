"use client";

import React from "react";
import { Download, Terminal, Cpu, Sparkles, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/app/utils/constants";
import FadeIn from "../animations/FadeIn";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Content & Stats */}
          <div className="flex flex-col gap-10 text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full w-fit mx-auto lg:mx-0">
                <Terminal className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-[2px]">
                  Frontend Developer
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
                Crafting digital{" "}
                <span className="text-primary italic">experiences</span> that
                matter.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-2">
                {PERSONAL_INFO.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-white/60 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <button
                className="inline-flex items-center gap-3 bg-primary hover:bg-white text-black rounded-2xl px-10 py-5 text-sm font-bold transition-all duration-500 w-fit group shadow-xl shadow-primary/10 cursor-pointer"
                onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-500" />
                Download CV
              </button>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Central Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

              {/* Card 1: Tech Stack (Large) */}
              <div className="col-span-2 group">
                <div className="bg-white/[0.02] border border-primary/10 rounded-[2rem] p-8 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 group-hover:rotate-6 transition-transform">
                      <Cpu className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Tech Ecosystem
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        Working with the MERN stack and Next.js to build modern,
                        scalable web applications, with a focus on performance,
                        clean architecture, and effective state management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Aesthetic (Small) */}
              <div className="col-span-1 group">
                <div className="h-full bg-white/[0.02] border border-primary/10 rounded-[2rem] p-6 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:rotate-6 transition-all duration-500 mb-4">
                    <Sparkles className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Aesthetic Precision
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {" "}
                    Designing clean, modern, and visually appealing user
                    interfaces with a strong focus on usability, consistency,
                    and responsive design.
                  </p>
                </div>
              </div>

              {/* Card 3: Performance (Small) */}
              <div className="col-span-1 group">
                <div className="h-full bg-white/[0.02] border border-primary/10 rounded-[2rem] p-6 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-2xl  bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:rotate-6 transition-all duration-500 mb-4">
                    <Zap className="w-6 h-6 text-primary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Performance First
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {" "}
                    Building optimized web applications with efficient
                    rendering, fast load times, and a focus on performance best
                    practices in React and Next.js.
                  </p>
                </div>
              </div>

              {/* Card 4: Stats Bar */}
              <div className="col-span-2">
                <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-6 backdrop-blur-xl">
                  <div className="flex justify-around items-center">
                    <div className="text-center">
                      <p className="text-2xl font-black text-primary italic leading-none">
                        100%
                      </p>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-2">
                        Quality
                      </p>
                    </div>
                    <div className="w-px h-8 bg-primary/20" />
                    <div className="text-center">
                      <p className="text-2xl font-black text-primary italic leading-none">
                        Fast
                      </p>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-2">
                        Response
                      </p>
                    </div>
                    <div className="w-px h-8 bg-primary/20" />
                    <div className="text-center">
                      <p className="text-2xl font-black text-primary italic leading-none">
                        24/7
                      </p>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-2">
                        Support
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
