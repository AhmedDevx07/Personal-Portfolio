export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: "Intermediate" | "Advanced" | "Expert";
  experience: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "React.js",
    icon: "Code2",
    level: "Advanced",
    experience: "1+ Year",
  },
  {
    id: 2,
    name: "Next.js",
    icon: "Zap",
    level: "Advanced",
    experience: "1+ Year",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "FileCode",
    level: "Advanced",
    experience: "1+ Year",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "FileType",
    level: "Intermediate",
    experience: "6+ Months",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "Palette",
    level: "Expert",
    experience: "1+ Year",
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: "Database",
    level: "Intermediate",
    experience: "6+ Months",
  },
  {
    id: 7,
    name: "Firebase",
    icon: "Flame",
    level: "Intermediate",
    experience: "8+ Months",
  },
  {
    id: 8,
    name: "Git & GitHub",
    icon: "GitBranch",
    level: "Advanced",
    experience: "1+ Year",
  },
  {
    id: 9,
    name: "Figma to Code",
    icon: "Figma",
    level: "Advanced",
    experience: "1+ Year",
  },
  {
    id: 10,
    name: "Responsive Design",
    icon: "Smartphone",
    level: "Expert",
    experience: "1+ Year",
  },
  {
    id: 11,
    name: "REST APIs",
    icon: "Globe",
    level: "Advanced",
    experience: "1+ Year",
  },
  {
    id: 12,
    name: "Vite",
    icon: "Zap",
    level: "Expert",
    experience: "1+ Year",
  },
];
