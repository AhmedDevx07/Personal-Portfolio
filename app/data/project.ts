export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics: string;
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EcoShop - E-commerce",
    description:
      "A premium multi-vendor store with complex multi-filtering logic and secure checkout flow.",
    image: "project2.png",
    category: "Full Stack",
    technologies: ["Next.js", "Redux Toolkit", "Tailwind", "Firebase"],
    metrics: "150+ Monthly Sales",
    demoUrl: "#",
    githubUrl: "https://github.com/AhmedDevx07",
  },
  {
    id: 2,
    title: "Swift-Log - CRM Dashboard",
    description:
      "SaaS-grade attendance and task management system with real-time admin/student analytics.",
    image: "project2.png",
    category: "Backend",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind"],
    metrics: "20+ Enterprise Clients",
    demoUrl: "src/assets/project2.png",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Karachi Air Hub",
    description:
      "Airport management concept inspired by Dubai Airport's UI, featuring real-time flight tracking.",
    image: "project2.png",
    category: "Frontend",
    technologies: ["React", "Framer Motion", "Tailwind"],
    metrics: "Ultra-Modern UI/UX",
    demoUrl: "src/assets/project2.png",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Bento-Style Portfolio",
    description:
      "A fully responsive personal branding site with Apple-style animations and Glassmorphism.",
    image: "project2.png",
    category: "Backend",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    metrics: "Top 5% Portfolio SEO",
    demoUrl: "src/assets/project2.png",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "SocialPulse AI",
    description:
      "AI-powered social media management dashboard for tracking engagement and post scheduling.",
    image: "project2.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "Tailwind"],
    metrics: "1.2K+ Data Points",
    demoUrl: "src/assets/project2.png",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Modern UI Library",
    description:
      "A collection of high-end reusable components featuring Bento grids and complex animations.",
    image: "project2.png",
    category: "Frontend",
    technologies: ["React", "Tailwind", "Framer Motion"],
    metrics: "100+ Reusable Units",
    demoUrl: "src/assets/project2.png",
    githubUrl: "https://github.com",
  },
];

export const categories = ["All", "Frontend", "Backend", "Full Stack"];
