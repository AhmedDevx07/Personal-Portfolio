"use client";

import React from "react";
import { Briefcase, Calendar, GraduationCap, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

interface JourneyItem {
  year: string;
  title: string;
  status?: string;
  desc: string;
  icon: React.ReactNode;
}

interface TechItem {
  name: string;
  icon: React.ElementType;
}

const TechAndJourney: React.FC = () => {
  const journeyData: JourneyItem[] = [
    {
      year: "2026",
      title: "Advanced Full-Stack Architecture",
      status: "Ongoing",
      desc: "Building production-ready, SaaS-grade MERN applications with a focus on high-end UI/UX, optimized performance, and scalable state management.",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      year: "2026",
      title: "Backend Development & APIs",
      status: "Ongoing",
      desc: "Deep diving into Node.js, Express, and complex MongoDB schema designs. Engineering secure RESTful APIs and real-time database integrations.",
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      year: "2025",
      title: "Frontend Development Mastery",
      desc: "Mastered React.js, Next.js, and Tailwind CSS. Specialized in creating interactive web experiences with Framer Motion.",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      year: "2024",
      title: "Began Coding Journey",
      desc: "Started with the core fundamentals of the web: HTML5, CSS3, and Modern JavaScript. Developed a passion for building clean, functional user interfaces.",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  const techStack: TechItem[] = [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Firebase", icon: SiFirebase },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Mongodb", icon: SiMongodb },
  ];

  return (
    <section className="pt-24 relative overflow-hidden">
      {/* Background Grid - Thora aur subtle kiya hai */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn delay={100}>
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-bold text-primary uppercase tracking-[2px]">
                Expertise & Roadmap
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Technical <span className="text-primary italic">Arsenal</span> &{" "}
              <span className="relative">
                Journey
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-primary/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: TECH STACK GRID */}
          <div className="lg:col-span-7">
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/[0.02] border border-primary/10 hover:border-primary/40 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)]"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                    <skill.icon className="text-4xl text-primary/70 transition-all duration-500 group-hover:text-primary group-hover:scale-110" />
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/50 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: TIMELINE WITH BETTER HIERARCHY */}
          <div className="lg:col-span-5">
            <FadeIn delay={400}>
              <div className="relative pl-8 space-y-8 ml-4">
                {/* Custom Line - Fades out at bottom */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/20 to-transparent" />

                {journeyData.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[45px] top-1 w-8 h-8 rounded-full border border-primary/30 bg-black flex items-center justify-center text-primary z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                      {item.icon}
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 bg-white/5 rounded text-primary font-mono text-[10px] font-bold tracking-widest">
                          {item.year}
                        </span>
                        {item.status && (
                          <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                            {item.status}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/40 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAndJourney;
