"use client";

import React from "react";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";

interface Milestone {
  period: string;
  role: string;
  organization: string;
  type: "Experience" | "Education" | "Foundation";
  status?: string;
  isCurrent?: boolean;
  desc: string;
  highlights: string[];
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    period: "April 2026 — June 2026",
    role: "React.js Developer Intern",
    organization: "Internee.pk",
    type: "Experience",
    status: "Internship Completed",
    desc: "Worked on six web projects, including an AI-powered Resume Analyzer, a full-stack AI Chatbot using the Google Gemini API, a multi-vendor e-commerce platform, and other web applications.",
    highlights: [
      "Worked on six projects during the internship.",
      "Integrated AI features and APIs into web applications.",
      "Developed responsive interfaces using React.js and modern frontend tools.",
    ],
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    period: "April 2025 — June 2026",
    role: "Full-Stack Development Trainee",
    organization: "Saylani Mass IT Training (SMIT)",
    type: "Education",
    status: "Completed",
    desc: "Completed full-stack web development training covering JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and MongoDB.",
    highlights: [
      "Built frontend and full-stack web projects.",
      "Practiced REST API development and JWT authentication.",
      "Worked with database modeling and modern web technologies.",
    ],
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    period: "Early 2025",
    role: "Frontend Development & JavaScript Foundations",
    organization: "Self-Directed Learning",
    type: "Foundation",
    status: "Learning Foundations",
    desc: "Started learning web development with HTML, CSS, and JavaScript, building a foundation in responsive design, DOM manipulation, and modern JavaScript concepts.",
    highlights: [
      "Built responsive web interfaces.",
      "Practiced JavaScript fundamentals and DOM manipulation.",
      "Progressed from frontend basics to full-stack development.",
    ],
    icon: <Calendar className="w-4 h-4" />,
  },
];

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient decorative glows */}
      <div className="absolute top-1/3 left-[-8%] w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-8%] w-[450px] h-[450px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/25 rounded-full mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(189,255,105,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-[2.5px]">
                My Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-5">
              Experience &{" "}
              <span className="text-primary italic">Milestones</span>
            </h2>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              My journey through full-stack development training, hands-on
              projects, and professional internship experience.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line on desktop & mobile */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-8 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent z-0" />

          <div className="space-y-8 sm:space-y-10 relative z-10">
            {milestones.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="relative flex items-start gap-5 sm:gap-10 group">
                  {/* Timeline Node Orb */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        item.isCurrent
                          ? "bg-primary text-black border-primary shadow-[0_0_25px_rgba(189,255,105,0.5)] scale-110"
                          : "bg-[#0a0a0a] border-primary/30 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-black group-hover:scale-110 shadow-[0_0_15px_rgba(189,255,105,0.15)]"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-white/[0.025] hover:bg-white/[0.045] border border-primary/20 hover:border-primary/50 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 transition-all duration-500 backdrop-blur-xl shadow-lg hover:shadow-[0_12px_40px_-10px_rgba(189,255,105,0.18)] hover:-translate-y-1 overflow-hidden relative">
                    {/* Top gradient highlight on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top Row: Year pill + Status Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="px-3.5 py-1 rounded-lg bg-primary/10 border border-primary/25 text-primary font-mono text-xs font-bold tracking-wider">
                        {item.period}
                      </span>

                      {item.status && (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/80">
                          {item.isCurrent && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                          )}
                          <span
                            className={
                              item.isCurrent ? "text-primary" : "text-white/70"
                            }
                          >
                            {item.status}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Role & Organization */}
                    <div className="mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary/80 tracking-wide mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    {/* Key Highlights / Deliverables */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-white/75 group-hover:border-primary/20 group-hover:text-white transition-all font-light"
                        >
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
