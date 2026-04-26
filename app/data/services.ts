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
      "Building modern, responsive user interfaces using React.js and Next.js with a focus on clean, maintainable code and scalability.",
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Creating mobile-first, fully responsive layouts that deliver a consistent experience across all devices and screen sizes.",
  },
  {
    id: 3,
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Improving application performance through techniques like code splitting, lazy loading, and efficient rendering in React and Next.js.",
  },
  {
    id: 4,
    icon: "Database",
    title: "Full-Stack Learning",
    description:
      "Currently expanding into backend development with Node.js, Express, and MongoDB to build complete MERN stack applications.",
  },
  {
    id: 5,
    icon: "Figma",
    title: "UI/UX to Code",
    description:
      "Transforming Figma and design concepts into clean, responsive, and user-friendly web interfaces with attention to detail.",
  },
  {
    id: 6,
    icon: "Search",
    title: "SEO Fundamentals",
    description:
      "Applying basic SEO practices such as semantic HTML, accessibility, and performance optimization to improve visibility.",
  },
];
