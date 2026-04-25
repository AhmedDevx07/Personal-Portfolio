"use client";

import React, { useState } from "react";
import { projects, categories } from "@/app/data/project";
import { Briefcase, Target, Globe, Database, Layers, Zap } from "lucide-react";
import ProjectCard from "../Ui/ProjectCard";
import FadeIn from "../animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const categoryIcons: Record<string, React.ElementType> = {
  All: Target,
  Frontend: Layers,
  Backend: Database,
  "Full Stack": Zap,
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#8DFF69] animate-pulse" />
              <span className="text-xs text-primary font-bold uppercase tracking-widest">
                My Work
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tighter">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
              A curated showcase of high-performance web applications, digital
              products, and experimental prototypes built with a focus on
              scalability and user experience.
            </p>
          </div>
        </FadeIn>

        {/* Filter Categories */}
        <FadeIn delay={50}>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-8 py-3 rounded-2xl font-medium transition-all duration-500 overflow-hidden ${
                  activeCategory === category
                    ? "text-black"
                    : "text-white/60 hover:text-primary border border-primary/10"
                }`}
              >
                {/* Background Fill for Active State */}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="relative flex items-center gap-2 z-10">
                  {React.createElement(categoryIcons[category] || Globe, {
                    className: "w-4 h-4",
                  })}
                  <span className="text-sm font-bold tracking-tight">
                    {category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-xl italic">
              No projects found in this category...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
