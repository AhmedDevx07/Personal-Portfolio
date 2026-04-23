export interface Service {
  id: number;
  icon: string; 
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "Layout",
    title: "Frontend Development",
    description:
      "Crafting high-performance, interactive user interfaces using React.js and Next.js with a focus on clean code.",
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Developing mobile-first, fluid layouts that provide a seamless experience across all screen sizes and devices.",
  },
  {
    id: 3,
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Speeding up web applications with advanced techniques like code splitting, lazy loading, and image optimization.",
  },
  {
    id: 4,
    icon: "Database",
    title: "Full-Stack Solutions",
    description:
      "Building scalable backend architectures and real-time databases using Firebase and Node.js environments.",
  },
  {
    id: 5,
    icon: "Figma",
    title: "UI/UX to Code",
    description:
      "Converting complex Figma designs into pixel-perfect, functional web components with precise styling.",
  },
  {
    id: 6,
    icon: "Search",
    title: "SEO & Branding",
    description:
      "Optimizing web structure for search engines to improve visibility and establishing a consistent digital identity.",
  },
];
