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
      "Building modern, scalable, and responsive web applications using React.js and Next.js with clean component architecture, reusable code, and seamless user experience.",
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Creating pixel-perfect, mobile-first layouts that deliver a consistent and polished experience across all devices and screen sizes using Tailwind CSS.",
  },
  {
    id: 3,
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and efficiency through code splitting, lazy loading, image optimization, and Next.js best practices for faster load times.",
  },
  {
    id: 4,
    icon: "Database",
    title: "Full-Stack Development",
    description:
      "Delivering complete end-to-end web solutions using the MERN Stack — from database design and REST APIs in Node.js & Express to fully functional React frontends.",
  },
  {
    id: 5,
    icon: "Figma",
    title: "UI/UX to Code",
    description:
      "Converting Figma designs and UI concepts into clean, responsive, and pixel-accurate web interfaces with smooth interactions and consistent styling.",
  },
  {
    id: 6,
    icon: "Search",
    title: "SEO Optimization",
    description:
      "Implementing on-page SEO best practices including semantic HTML, Next.js meta tags, SSR/SSG for better indexing, and performance improvements for higher search rankings.",
  },
];
