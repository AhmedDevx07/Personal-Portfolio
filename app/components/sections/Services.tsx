"use client";

import React from "react";
import { services } from "@/app/data/services";
import * as LucideIcons from "lucide-react";
import { Wrench, LucideIcon } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Subtle Pattern */}
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
              <Wrench className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[2px]">
                Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Built for innovation, <br />
              <span className="text-primary italic">Designed for results.</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
              Transforming complex technical challenges into seamless digital
              experiences through a modern tech stack and user-centric approach.
            </p>
          </div>
        </FadeIn>

        {/* Top Featured Services (Big Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent =
              (LucideIcons[
                service.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="relative bg-white/[0.03] border border-primary/10 rounded-[2.5rem] p-10 hover:border-primary/40 transition-all duration-500 group h-full overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <div className="mb-8 flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-black transition-colors " />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Optional: Visual separator for premium feel */}
                    <div className="h-px w-full bg-linear-to-r from-primary/30 to-transparent mb-6" />
                  </div>

                  {/* Hover Background Glow */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Secondary Services (Small Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent =
              (LucideIcons[
                service.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="relative bg-white/[0.02] border border-primary/10 rounded-[2rem] p-8 hover:bg-primary/[0.05] hover:border-primary/20 transition-all duration-500 group h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                      <IconComponent className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                      {service.description}
                    </p>
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
