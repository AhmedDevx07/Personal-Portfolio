"use client";

import React from "react";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";

interface SkillCategories {
  Frontend: string[];
  Backend: string[];
  Tools: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategories = {
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
    Backend: ["Node.js", "Express", "REST APIs", "Firebase"],
    Tools: ["Git & Github", "Figma", "Vite", "Responsive Design", "VS Code"],
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Grid & Glow */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Technical <span className="text-primary italic">Arsenal</span>
            </h2>

            <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
              Engineered with precision. A curated collection of modern tools
              and frameworks I use to build scalable, high-performance digital
              solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Frontend - Large Card */}
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <div className="group h-full bg-white/[0.02] border border-primary/20 rounded-[2.5rem] p-10 relative overflow-hidden ">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Icons.Monitor className="text-primary w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Frontend Development
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillCategories.Frontend.map((name) => (
                    <div
                      key={name}
                      className="p-4 bg-white/[0.03] border border-primary/10 rounded-2xl flex items-center gap-3 group/item hover:border-primary/50 transition-all duration-300"
                    >
                      <Icons.Zap className="w-4 h-4 text-primary opacity-30 group-hover/item:opacity-100 transition-all duration-300" />
                      <span className="text-white/70 group-hover/item:text-primary font-medium text-sm transition-colors transition-all duration-300">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Backend - High Highlight Card */}
          <div className="md:col-span-4">
            <FadeIn delay={200}>
              <div className="group h-full bg-white/[0.02] border border-primary/20 rounded-[2.5rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                      <Icons.Server className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Backend
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {skillCategories.Backend.map((name) => (
                      <div
                        key={name}
                        className="flex justify-between items-center group/line transition-all duration-300"
                      >
                        <span className="text-white/70 group-hover/line:text-primary transition-colors">
                          {name}
                        </span>
                        <div className="flex gap-1">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-primary" : "bg-white/10"}`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Tools - Horizontal Sleek Bar */}
          <div className="md:col-span-12">
            <FadeIn delay={300}>
              <div className="bg-white/[0.02] border border-primary/20 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="min-w-fit">
                  <h3 className="text-xl font-bold text-white mb-1">
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
                      className="flex items-center gap-3 group/tool "
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover/tool:border-primary/50 group-hover/tool:bg-primary/5 transition-all duration-300">
                        <Icons.Box className="w-4 h-4 text-primary/50 group-hover/tool:text-primary transition-all duration-300" />
                      </div>
                      <span className="text-xs font-bold text-white/70 group-hover/tool:text-primary uppercase tracking-widest transition-colors transition-all duration-300">
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
