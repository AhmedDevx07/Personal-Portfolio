"use client";

import React from "react";
import { services } from "@/app/data/services";
import * as LucideIcons from "lucide-react";
import { Wrench, LucideIcon, ArrowUpRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* 1. Improved Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
              <Wrench className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[3px]">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              Built for innovation, <br />
              <span className="text-primary italic">Designed for results.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming complex technical challenges into seamless digital
              experiences through a modern tech stack.
            </p>
          </div>
        </FadeIn>

        {/* Top Featured Services (Refined Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent =
              (LucideIcons[
                service.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="relative bg-white/[0.02] border border-primary/10 rounded-[3rem] p-10 hover:border-primary/50 transition-all duration-700 group h-full overflow-hidden backdrop-blur-xl">
                  {/* Subtle Top Light effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="mb-10 flex justify-between items-start">
                      <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 border border-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-700">
                        <IconComponent className="w-10 h-10 text-primary group-hover:text-black transition-colors duration-500" />
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-lg leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Corner Blur Effect */}
                  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Secondary Services (Refined Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent =
              (LucideIcons[
                service.icon as keyof typeof LucideIcons
              ] as LucideIcon) || LucideIcons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="relative bg-white/[0.01] border border-primary/10 rounded-[2rem] p-8 hover:bg-white/[0.03] hover:border-primary/30 transition-all duration-500 group h-full flex flex-col backdrop-blur-sm">
                  <div className="mb-6 flex justify-between items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-primary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light line-clamp-3">
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
