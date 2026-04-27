"use client";

import { ExternalLink, Code, TrendingUp } from "lucide-react";
import React from "react";

export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
    category,
  } = project;

  return (
    <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-primary/10 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fit transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Static Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

        {/* Floating Category Badge (Directly Visible) */}
        <div className="absolute top-5 left-5 z-10">
          <span className="px-4 py-1.5 text-[9px] font-black uppercase tracking-[2px] text-primary bg-black/60 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-3 tracking-tighter">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2 font-light">
            {description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold text-white/60 bg-white/5 border border-white/10 rounded-md group-hover:border-primary/20 group-hover:text-primary transition-all duration-300 uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Performance Metrics (If exists) */}
        {metrics && (
          <div className="flex items-center gap-2 py-3 border-y border-white/5">
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <p className="text-[10px] font-black text-primary uppercase tracking-widest">
              {metrics}
            </p>
          </div>
        )}

        {/* DIRECT ACTION BUTTONS (Updated Position) */}
        <div className="flex items-center gap-3 ">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-black rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-lg shadow-primary/5 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-[46px] flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-500 group/btn active:scale-95"
              title="View Source"
            >
              <Code className="w-5 h-5 transition-transform group-hover/btn:rotate-12" />
            </a>
          )}
        </div>
      </div>

      {/* Subtle Glow Background hover */}
      <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
