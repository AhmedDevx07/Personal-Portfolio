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
      "Building responsive web applications with React.js and Next.js using reusable components, organized code, and user-friendly interfaces.",
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Responsive Design",
    description:
      "Creating mobile-first interfaces with Tailwind CSS that adapt to different screen sizes and provide a consistent user experience.",
  },
  {
    id: 3,
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Applying practical performance improvements such as image optimization, lazy loading, and appropriate Next.js rendering techniques.",
  },
  {
    id: 4,
    icon: "Database",
    title: "Full-Stack Development",
    description:
      "Building full-stack applications with the MERN stack, including REST APIs, MongoDB data modeling, authentication, and frontend integration.",
  },
  {
    id: 5,
    icon: "Figma",
    title: "UI Design to Code",
    description:
      "Converting design references and Figma layouts into responsive React interfaces with consistent styling, reusable components, and polished interactions.",
  },
  {
    id: 6,
    icon: "Search",
    title: "Next.js & Web Optimization",
    description:
      "Using Next.js rendering features, page metadata, semantic HTML, and web performance best practices to build accessible and well-structured pages.",
  },
];
