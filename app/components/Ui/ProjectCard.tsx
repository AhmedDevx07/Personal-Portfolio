"use client";

import { ExternalLink, Code, TrendingUp, Sparkles } from "lucide-react";
import React from "react";
import Image from "next/image";

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
    <div className="group relative bg-white/[0.025] hover:bg-white/[0.04] backdrop-blur-xl border border-primary/20 hover:border-primary/50 rounded-[2.2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_45px_-12px_rgba(189,255,105,0.18)] flex flex-col justify-between h-full">
      {/* Top Border Gradient Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20" />

      {/* Top Part: Image & Category */}
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-black/40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Vignette Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80" />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
            <span className="px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[2px] text-primary bg-black/70 backdrop-blur-md border border-primary/25 rounded-full shadow-xl">
              {category}
            </span>

            {demoUrl && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-[9px] font-bold text-white/80 bg-black/70 backdrop-blur-md border border-white/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span>Live App</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2.5 tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-white/65 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
              {description}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-[10px] font-semibold text-white/70 bg-white/[0.03] border border-white/10 rounded-lg group-hover:border-primary/25 group-hover:text-primary/90 transition-all duration-300 uppercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Performance / Architectural Metrics */}
          {metrics && (
            <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 border border-primary/20 rounded-xl">
              <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0" />
              <p className="text-[10px] font-bold text-primary uppercase tracking-wider truncate">
                {metrics}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons (Always pinned to bottom) */}
      <div className="px-7 pb-7 pt-2 flex items-center gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-black rounded-xl text-[11px] font-extrabold uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(189,255,105,0.3)] transition-all duration-300 active:scale-[0.98]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Source Code on GitHub"
            className="w-12 h-11 flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-primary hover:bg-primary hover:text-black text-white rounded-xl transition-all duration-300 group/btn active:scale-95 shadow-sm"
            title="View Source Code"
          >
            <Code className="w-4 h-4 transition-transform group-hover/btn:scale-115" />
          </a>
        )}
      </div>

      {/* Subtle Glow Overlay on Card Hover */}
      <div className="absolute inset-0 bg-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
