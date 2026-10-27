"use client";

import React, { useState } from "react";
import { projects, categories } from "@/app/data/project";
import { Briefcase, Sparkles } from "lucide-react";
import ProjectCard from "../Ui/ProjectCard";
import FadeIn from "../animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute top-1/3 left-[-8%] w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-8%] w-[450px] h-[450px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(189,255,105,0.1)]">
              <Briefcase className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] text-primary font-extrabold uppercase tracking-[2.5px]">
                Portfolio Showcase
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tighter">
              Featured <span className="text-primary italic">Projects</span>
            </h2>

            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              A showcase of web applications and full-stack projects I’ve built
              using modern technologies, with a focus on practical
              functionality, responsive design, and user experience.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
              {categories.map((category) => {
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                        : "bg-white/[0.03] text-white/70 border border-white/10 hover:border-primary/40 hover:text-white"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? "bg-black/20 text-black font-black"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.94, y: 30 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg italic">
              No projects found in this category...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
