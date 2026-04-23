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
    <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-primary/10 rounded-[2rem] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Modern Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
            {category}
          </span>
        </div>

        {/* Hover Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-black transition-all duration-300 shadow-xl"
              title="View Source"
            >
              <Code className="w-5 h-5" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-black rounded-full hover:bg-white transition-all duration-300 shadow-xl"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-7 space-y-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed line-clamp-2 font-light">
            {description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold text-white/50 bg-white/5 border border-primary/5 rounded-lg group-hover:border-primary/20 group-hover:text-primary transition-all duration-300 uppercase tracking-tighter"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Performance Metrics */}
        {metrics && (
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <p className="text-[11px] font-bold text-primary uppercase tracking-widest">
                {metrics}
              </p>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        )}
      </div>

      {/* Subtle Glow Background hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
