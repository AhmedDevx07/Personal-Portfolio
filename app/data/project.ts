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
    title: "SkyCast",
    description:
      "A high-performance weather intelligence dashboard featuring real-time data synchronization, location-aware forecasts, and dynamic visual state management.",
    image: "1.png",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "OpenWeather API", "Tailwind CSS"],
    metrics: "Real-time Sync • 99% Accuracy",
    demoUrl: "https://next-weather-app-nine.vercel.app/",
    githubUrl: "https://github.com/AhmedDevx07/Next-Weather-App",
  },
  {
    id: 2,
    title: "CodeLab",
    description:
      "A modular productivity ecosystem for developers, featuring secure authentication, persistent task architecture, and an intuitive Bento-grid management system.",
    image: "2.png",
    category: "Frontend",
    technologies: ["React.js", "Context API", "Firebase", "Tailwind CSS"],
    metrics: "Secure Auth • 100% Persistence",
    demoUrl: "https://preeminent-arithmetic-3a737b.netlify.app/auth",
    githubUrl: "https://github.com/AhmedDevx07/React-Tasks-Dashboard",
  },
  {
    id: 3,
    title: "SNEAKX",
    description:
      "An enterprise-level E-Commerce management suite with advanced multi-filtering logic, real-time inventory tracking, and interactive sales analytics.",
    image: "3.png",
    category: "Frontend",
    technologies: ["React.js", "Context API", "Tailwind CSS", "React Router"],
    metrics: "Dynamic Filtering • Scale-Ready",
    demoUrl: "https://react-e-commerce-dashboard-eight.vercel.app/",
    githubUrl: "https://github.com/AhmedDevx07/React-E-Commerce-Dashboard",
  },
  {
    id: 4,
    title: "ProTodo",
    description:
      "A streamlined real-time task engine built with a focus on low-latency data updates and efficient state handling for daily operations.",
    image: "4.png",
    category: "Full Stack",
    technologies: ["JavaScript", "Firebase", "Bootstrap", "HTML5"],
    metrics: "Instant Updates • No-SQL Data",
    demoUrl: "https://splendid-scone-5ec404.netlify.app/",
    githubUrl: "https://github.com/AhmedDevx07/Firebase-FullStack-TodoApp",
  },
  {
    id: 5,
    title: "GitIntel",
    description:
      "A deep-dive GitHub analytics tool that visualizes repository health, user contributions, and profile metrics via the GitHub REST API.",
    image: "5.png",
    category: "Frontend",
    technologies: ["JavaScript", "GitHub API", "Bootstrap", "CSS3"],
    metrics: "100+ Data Points • API Driven",
    demoUrl: "https://ahmeddevx07.github.io/GitHub-User-Analytics/",
    githubUrl: "https://github.com/AhmedDevx07/GitHub-User-Analytics",
  },
  {
    id: 6,
    title: "ModernShop UI",
    description:
      "A lightweight e-commerce storefront prototype designed for rapid API prototyping and seamless frontend-to-backend integration testing.",
    image: "6.png",
    category: "Frontend",
    technologies: ["JavaScript", "REST API", "Bootstrap", "HTML5"],
    metrics: "Modular UI • Rapid Prototype",
    demoUrl: "https://ahmeddevx07.github.io/E-Com-Fake-Product-API/",
    githubUrl: "https://github.com/AhmedDevx07/E-Com-Fake-Product-API",
  },
];

export const categories = ["All", "Frontend", "Backend", "Full Stack"];
