"use client";

import React, { useState } from "react";
import * as Icons from "lucide-react";
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
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiRedux,
  SiFigma,
  SiGithub,
  SiPostman,
  SiGooglegemini,
  SiMui,
  SiStyledcomponents,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import FadeIn from "../animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  tag: string;
}

const skillIcons: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 className="w-7 h-7 sm:w-8 sm:h-8" />,
  CSS: <SiCss className="w-7 h-7 sm:w-8 sm:h-8" />,
  Bootstrap: <SiBootstrap className="w-7 h-7 sm:w-8 sm:h-8" />,
  "Tailwind CSS": <SiTailwindcss className="w-7 h-7 sm:w-8 sm:h-8" />,
  JavaScript: <SiJavascript className="w-7 h-7 sm:w-8 sm:h-8" />,
  TypeScript: <SiTypescript className="w-7 h-7 sm:w-8 sm:h-8" />,
  "React.js": <SiReact className="w-7 h-7 sm:w-8 sm:h-8" />,
  "Next.js": <SiNextdotjs className="w-7 h-7 sm:w-8 sm:h-8" />,
  Redux: <SiRedux className="w-7 h-7 sm:w-8 sm:h-8" />,
  // "Context API": <Icons.GitBranch className="w-7 h-7 sm:w-8 sm:h-8" />,
  // "Material UI": <SiMui className="w-7 h-7 sm:w-8 sm:h-8" />,
  // "Styled Components": <SiStyledcomponents className="w-7 h-7 sm:w-8 sm:h-8" />,

  "Node.js": <SiNodedotjs className="w-7 h-7 sm:w-8 sm:h-8" />,
  Express: <SiExpress className="w-7 h-7 sm:w-8 sm:h-8" />,
  MongoDB: <SiMongodb className="w-7 h-7 sm:w-8 sm:h-8" />,
  "REST APIs": <Icons.Database className="w-7 h-7 sm:w-8 sm:h-8" />,
  Firebase: <SiFirebase className="w-7 h-7 sm:w-8 sm:h-8" />,

  "Git & Github": <SiGithub className="w-7 h-7 sm:w-8 sm:h-8" />,
  Figma: <SiFigma className="w-7 h-7 sm:w-8 sm:h-8" />,
  "CI/CD": <Icons.GitMerge className="w-7 h-7 sm:w-8 sm:h-8" />,
  Docker: <Icons.Container className="w-7 h-7 sm:w-8 sm:h-8" />,

  AWS: <FaAws className="w-7 h-7 sm:w-8 sm:h-8" />,

  "Google Gemini API": <SiGooglegemini className="w-7 h-7 sm:w-8 sm:h-8" />,
  "JWT Auth": <Icons.ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
  Postman: <SiPostman className="w-7 h-7 sm:w-8 sm:h-8" />,
};

const allSkills: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "Frontend", tag: "UI Library" },
  { name: "Next.js", category: "Frontend", tag: "Full-Stack React" },
  { name: "TypeScript", category: "Frontend", tag: "Type Safety" },
  { name: "JavaScript", category: "Frontend", tag: "Core Language" },
  { name: "Tailwind CSS", category: "Frontend", tag: "Utility CSS" },
  { name: "Redux", category: "Frontend", tag: "State Manager" },
  // { name: "Context API", category: "Frontend", tag: "React State" },
  { name: "HTML", category: "Frontend", tag: "Semantic Markup" },
  { name: "CSS", category: "Frontend", tag: "Responsive Styling" },
  // { name: "Material UI", category: "Frontend", tag: "Component System" },
  // { name: "Styled Components", category: "Frontend", tag: "CSS-in-JS" },
  { name: "Bootstrap", category: "Frontend", tag: "UI Framework" },

  // Backend
  { name: "Node.js", category: "Backend", tag: "Runtime Engine" },
  { name: "Express", category: "Backend", tag: "REST API Server" },
  { name: "MongoDB", category: "Backend", tag: "NoSQL Database" },
  { name: "REST APIs", category: "Backend", tag: "API Architecture" },
  { name: "Firebase", category: "Backend", tag: "Cloud BaaS" },
  { name: "JWT Auth", category: "Backend", tag: "Token Security" },
  { name: "Google Gemini API", category: "Backend", tag: "AI Integration" },

  // Tools
  { name: "Git & Github", category: "Tools", tag: "Version Control" },
  { name: "Docker", category: "Tools", tag: "Containers" },
  { name: "AWS", category: "Tools", tag: "Cloud Platform" },
  { name: "Figma", category: "Tools", tag: "UI/UX Design" },
  { name: "Postman", category: "Tools", tag: "API Testing" },
  { name: "CI/CD", category: "Tools", tag: "Build Pipeline" },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "Frontend" | "Backend" | "Tools"
  >("all");

  const tabs = [
    { id: "all", label: "All Stack", count: allSkills.length },
    {
      id: "Frontend",
      label: "Frontend",
      count: allSkills.filter((s) => s.category === "Frontend").length,
    },
    {
      id: "Backend",
      label: "Backend",
      count: allSkills.filter((s) => s.category === "Backend").length,
    },
    {
      id: "Tools",
      label: "Tools & DevOps",
      count: allSkills.filter((s) => s.category === "Tools").length,
    },
  ] as const;

  const filteredSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background Styling */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <FadeIn delay={0}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/25 bg-primary/10 rounded-full mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(189,255,105,0.1)]">
              <Icons.Cpu className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[2.5px]">
                Tech Capabilities
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-5">
              Technical <span className="text-primary italic">Skills</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              The technologies and tools I use to build responsive web
              applications, develop APIs, and create full-stack solutions.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                        : "bg-white/[0.03] text-white/70 border border-white/10 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? "bg-black/20 text-black font-black"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* All Skills as Individual Single Boxes in Unified Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((item, index) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  duration: 0.35,
                  delay: (index % 6) * 0.04,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <div className="group relative h-full bg-white/[0.025] hover:bg-white/[0.045] border border-primary/20 hover:border-primary/50 rounded-2xl sm:rounded-[1.75rem] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_35px_-10px_rgba(189,255,105,0.2)] backdrop-blur-xl overflow-hidden flex flex-col items-center justify-between text-center cursor-default">
                  {/* Subtle Top Gradient Highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner Glow Overlay on hover */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 blur-[35px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top: Category Tag & Status Dot */}
                  <div className="w-full flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 group-hover:text-primary transition-colors">
                      {item.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary group-hover:shadow-[0_0_8px_#bdff69] transition-all" />
                  </div>

                  {/* Center: Prominent Icon in Elevated Squircle */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(189,255,105,0.12)] my-3">
                    {skillIcons[item.name] || (
                      <Icons.Code className="w-7 h-7 sm:w-8 sm:h-8" />
                    )}
                  </div>

                  {/* Bottom: Skill Title & Role Tag */}
                  <div className="w-full mt-2">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors tracking-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-medium text-white/50 group-hover:text-white/80 transition-colors uppercase tracking-wider mt-1 truncate">
                      {item.tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
