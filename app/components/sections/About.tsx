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
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full w-fit mx-auto lg:mx-0">
                <Terminal className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-[2px]">
                  Full-Stack Developer
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
                    className="text-lg text-white/50 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <button
                className="inline-flex items-center gap-3 bg-primary hover:bg-white text-black rounded-2xl px-10 py-5 text-sm font-bold transition-all duration-500 w-fit group shadow-xl shadow-primary/10"
                onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-500" />
                Download CV
              </button>
            </FadeIn>
          </div>

          {/* RIGHT: Feature Cards */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Decorative Blur Background */}
              <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="col-span-2 relative group overflow-hidden">
                <div className="relative bg-white/[0.03] border border-primary/10 rounded-[2rem] p-8 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                      <Cpu className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Modern Stack
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        MERN & Next.js specialist for high-performance apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm h-full">
                  <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 border border-primary/10 group-hover:bg-primary transition-all duration-500">
                    <Sparkles className="w-6 h-6 text-primary group-hover:text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Clean UI
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    User-centric design with smooth animations.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm h-full">
                  <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 border border-primary/10 group-hover:bg-primary transition-all duration-500">
                    <Zap className="w-6 h-6 text-primary group-hover:text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Efficiency
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Optimized code for maximum speed.
                  </p>
                </div>
              </div>

              <div className="col-span-2 relative">
                <div className="relative bg-white/[0.03] border border-primary/10 rounded-[2rem] p-8 hover:border-primary/40 transition-all duration-500 backdrop-blur-sm h-full">
                  <div className="flex justify-around items-center gap-4">
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-primary italic leading-none">
                        100%
                      </p>
                      <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                        Satisfaction
                      </p>
                    </div>
                    <div className="w-px h-10 bg-primary/20" />
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-primary italic leading-none">
                        Fast
                      </p>
                      <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
                        Delivery
                      </p>
                    </div>
                    <div className="w-px h-10 bg-primary/20" />
                    <div className="space-y-1">
                      <p className="text-2xl font-black text-primary italic leading-none">
                        24/7
                      </p>
                      <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest">
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
