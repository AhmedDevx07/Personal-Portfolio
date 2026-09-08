"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "@/app/utils/constants";
import FadeIn from "../animations/FadeIn";
import ahmedimg from "@/public/ahmed.jpg";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-2">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-7xl px-5 sm:px-8 lg:px-12 py-20 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* left column */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="inline-flex mb-5 px-5 py-2 border border-primary/20 bg-primary/5 rounded-full w-fit mx-auto lg:mx-0">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[2px]">
                  {PERSONAL_INFO.title}
                  <span className="mx-1 opacity-70">|</span>
                  Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-6">
                Building <span className="text-primary italic">Scalable</span>{" "}
                <br />
                Web Applications
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-base md:text-lg text-white/60 max-w-[500px] mx-auto lg:mx-0 mb-6 leading-relaxed">
                I build scalable, production-ready web applications using
                MongoDB, Express.js, React.js, Node.js & Next.js. Focused on
                clean architecture, seamless user experience, and delivering
                real-world solutions.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              {/* className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16" */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto px-6 py-4 bg-primary text-black hover:bg-white font-extrabold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_20px_rgba(173,255,47,0.3)] cursor-pointer"
                >
                  Explore My Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto px-5 py-4 bg-primary/5 border border-primary/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
                >
                  Schedule a Talk
                </button>
              </div>
            </FadeIn>

            {/* STATS ROW */}
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10">
                {STATS.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-primary font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* right column */}
          <FadeIn delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-[4/5] group">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-gradient-to-r from-primary/20 via-primary/10 to-primary animate-[spin_8s_linear_infinite] rounded-2xl"></div>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl m-[1.5px] h-[calc(100%-2px)]">
                  <Image
                    src={ahmedimg}
                    alt="Muhammad Ahmed"
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Technology Logos */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={300}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-primary/20 rounded-full px-6 py-3">
                      {[
                        SiMongodb,
                        SiExpress,
                        SiReact,
                        SiNodedotjs,
                        SiNextdotjs,
                      ].map((Icon, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 flex items-center justify-center hover:scale-125 transition-transform duration-300"
                        >
                          <Icon className="w-full h-full text-primary animate-pulse" />
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/* Scroll Indictor  */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-10 h-10 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
