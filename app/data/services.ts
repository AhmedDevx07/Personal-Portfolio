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
      "Crafting high-performance, interactive user interfaces using React.js and Next.js with a strong focus on scalable and clean code architecture.",
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Developing mobile-first, fluid layouts that provide a flawless experience across all screen sizes—from high-res monitors to handheld devices.",
  },
  {
    id: 3,
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Accelerating web applications with advanced techniques like code splitting, lazy loading, and asset optimization for lightning-fast load times.",
  },
  {
    id: 4,
    icon: "Database",
    title: "Full-Stack Solutions",
    description:
      "Engineering scalable backend architectures and real-time databases using Firebase, Node.js, and MongoDB to power data-driven applications.",
  },
  {
    id: 5,
    icon: "Figma",
    title: "UI/UX to Code",
    description:
      "Converting complex Figma designs into pixel-perfect, functional web components with high-end animations and precise aesthetic styling.",
  },
  {
    id: 6,
    icon: "Search",
    title: "SEO & Branding",
    description:
      "Optimizing web structures for search engines to maximize visibility and establishing a consistent digital identity for your professional brand.",
  },
];
