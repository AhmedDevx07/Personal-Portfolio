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
    <section className="py-20 relative overf ">
      {/* Dynamic Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-4">
              Technical <span className="text-primary italic">Arsenal</span> &{" "}
              Professional <span className="text-primary italic">Journey</span>
            </h2>

            <p className="text-white/50 text-base max-w-2xl mx-auto">
              My technical expertise and the roadmap of my professional growth
              as a developer.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: TECH STACK GRID (Bento Style) */}
          <div className="lg:col-span-7">
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/[0.03] border border-primary/10 hover:border-primary/30 rounded-[1.5rem] p-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Subtle Glow on Hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <skill.icon className="text-4xl text-primary transition-transform duration-500 group-hover:scale-110" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: COMPACT VERTICAL TIMELINE */}
          <div className="lg:col-span-5">
            <FadeIn delay={400}>
              <div className="relative pl-10 border-l-2 border-primary/10 space-y-5 ml-4">
                {journeyData.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot/Icon */}
                    <div className="absolute -left-[57px] top-0 w-10 h-10 rounded-xl border border-primary/10 bg-[#0A0A0A] flex items-center justify-center text-primary shadow-2xl group transition-all duration-500">
                      <div className="absolute  inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.icon}
                    </div>

                    {/* Journey Card */}
                    <div className="group bg-white/[0.02] border border-primary/10 p-6 rounded-[2rem] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-primary font-mono text-[10px] font-bold tracking-[2px] uppercase">
                          {item.year}
                        </span>
                        {item.status && (
                          <span className="text-[8px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 animate-pulse">
                            {item.status}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed font-medium">
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
