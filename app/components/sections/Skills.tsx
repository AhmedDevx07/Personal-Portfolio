"use client";

import React from "react";
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
  SiVite,
  SiGithub,
} from "react-icons/si";
import FadeIn from "../animations/FadeIn";

const skillIcons: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 className="w-4 h-4" />,
  CSS: <SiCss className="w-4 h-4" />,
  Bootstrap: <SiBootstrap className="w-4 h-4" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
  JavaScript: <SiJavascript className="w-4 h-4" />,
  TypeScript: <SiTypescript className="w-4 h-4" />,
  "React.js": <SiReact className="w-4 h-4" />,
  "Next.js": <SiNextdotjs className="w-4 h-4" />,
  Redux: <SiRedux className="w-4 h-4" />,

  "Node.js": <SiNodedotjs className="w-4 h-4" />,
  Express: <SiExpress className="w-4 h-4" />,
  MongoDB: <SiMongodb className="w-4 h-4" />,
  "REST APIs": <Icons.Database className="w-4 h-4" />,
  Firebase: <SiFirebase className="w-4 h-4" />,

  "Git & Github": <SiGithub className="w-4 h-4" />,
  Figma: <SiFigma className="w-4 h-4" />,
  Vite: <SiVite className="w-4 h-4" />,
  "Responsive Design": <Icons.Smartphone className="w-4 h-4" />,
};

const Skills: React.FC = () => {
  const skillCategories = {
    Frontend: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
    ],
    Backend: ["Node.js", "Express", "MongoDB", "Rest APIs", "Firebase"],
    Tools: ["Git & Github", "Figma", "Vite", "Responsive Design"],
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Styling */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Technical <span className="text-primary italic">Arsenal</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              Engineered with precision. A curated collection of modern tools I
              use to build scalable digital solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Frontend Section */}
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="group h-full bg-white/[0.02] border border-primary/20 rounded-[2.5rem] p-10 hover:border-primary/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Icons.Monitor className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Frontend Development
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillCategories.Frontend.map((name) => (
                    <div
                      key={name}
                      className="p-4 bg-white/[0.03] border border-primary/10 rounded-2xl flex items-center gap-3 group/item hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="text-primary opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300">
                        {skillIcons[name] || <Icons.Code />}
                      </div>
                      <span className="text-white/70 group-hover/item:text-white font-medium text-sm transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Backend Section */}
          <div className="md:col-span-4">
            <FadeIn delay={200}>
              <div className="group h-full bg-white/[0.02] border border-primary/20 rounded-[2.5rem] p-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Icons.Server className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>

                <div className="space-y-6">
                  {skillCategories.Backend.map((name) => (
                    <div
                      key={name}
                      className="flex justify-between items-center group/line"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-primary/70 group-hover/line:text-primary transition-all">
                          {skillIcons[name] || <Icons.Database />}
                        </div>
                        <span className="text-white/70 group-hover/line:text-primary transition-colors">
                          {name}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]" : "bg-white/10"}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Design & Workflow - Sleek Bar */}
          <div className="md:col-span-12">
            <FadeIn delay={300}>
              <div className="bg-white/[0.02] border border-primary/20 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-10 hover:border-primary/40 transition-all duration-500">
                <div className="min-w-fit">
                  <h3 className="text-xl font-bold text-white">
                    Design & Workflow
                  </h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold">
                    The Modern Stack
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                  {skillCategories.Tools.map((name) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 group/tool"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover/tool:border-primary/50 group-hover/tool:bg-primary/10 group-hover/tool:rotate-6 transition-all duration-300">
                        <div className="text-primary/70 group-hover/tool:text-primary transition-all">
                          {skillIcons[name] || <Icons.Box />}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white/70 group-hover/tool:text-primary uppercase tracking-widest transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
