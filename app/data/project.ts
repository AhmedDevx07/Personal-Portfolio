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
    id: 8, // Apne sequence ke mutabiq ID set kar lijiyega
    title: "AI-Powered Resume Analyzer",
    description:
      "An intelligent MERN-stack intelligence engine featuring Google Gemini AI for structured resume parsing, strict Zod schema validation, and interactive predictive analytics dashboards to optimize ATS scoring.",
    image: "8.png", // Aap apni image asset ka naam yahan likh sakte hain
    category: "Full Stack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Gemini API",
      "Zod",
      "Tailwind CSS",
    ],
    metrics: "Structured AI Output • HTTPOnly JWT Security",
    demoUrl: "https://ai-powered-resume-analyzer-pied.vercel.app/",
    githubUrl: "https://github.com/AhmedDevx07/AI-Powered-Resume-Analyzer",
  },
  {
    id: 7, // Aap apne purane sequence ke mutabiq ID check kar lijiyega
    title: "Car Rental Booking System",
    description:
      "An enterprise-grade fleet management and reservation engine featuring a dual-role dashboard architecture for seamless peer-to-peer vehicle scaling and low-latency booking operations.",
    image: "7.png", // Aap apni image asset ka naam yahan match kar saktay hain
    category: "Full Stack",
    technologies: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Motion",
    ],
    metrics: "JWT Secured • CDN Image Edge Storage",
    demoUrl: "https://car-rental-booking-app-alpha.vercel.app/",
    githubUrl:
      "https://github.com/AhmedDevx07/Full-Stack-Car-Rental-Booking-App",
  },
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
    id: 9, // Apne sequence ke mutabiq ID maintain kar lijiyega
    title: "QuickGPT — Full-Stack AI Chatbot",
    description:
      "A high-throughput MERN AI conversational agent integrated with Google Gemini via an abstraction-layer wrapper, featuring stateful MongoDB chat persistence and a secure credit-token payment gateway.",
    image: "10.png", // Aap apna image asset name map kar sakte hain
    category: "Full Stack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Gemini API",
      "OpenAI SDK",
      "JWT",
    ],
    metrics: "Token Monetization • Swappable AI Engine",
    demoUrl: "https://full-stack-quickgpt.vercel.app/",
    githubUrl: "https://github.com/AhmedDevx07/Full-Stack-QuickGPT",
  },
  {
    id: 10, // Apne sequence ke mutabiq ID manage kar lijiyega
    title: "E-MarketX — Multi-Vendor Marketplace",
    description:
      "A production-ready Amazon-style multi-tenant e-commerce marketplace powered by a unified Next.js App Router architecture, featuring three role-isolated portals, middleware-enforced RBAC, and Cloudinary media optimization.",
    image: "9.png", // Aap apni asset ka naam yahan likh sakte hain
    category: "Full Stack",
    technologies: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
    ],
    metrics: "Multi-Tenant RBAC • Cloudinary Edge Media",
    demoUrl: "https://full-stack-multi-vendor-e-com.vercel.app/",
    githubUrl:
      "https://github.com/AhmedDevx07/Full-Stack-Multi-Vendor-E-Commerce",
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
];

export const categories = ["All", "Frontend", "Full Stack"];
