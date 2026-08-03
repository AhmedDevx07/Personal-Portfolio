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
    title: "MaintainIQ — AI-Powered QR Maintenance Platform",
    description:
      "An AI-assisted full-stack asset maintenance system built around QR codes, featuring OpenAI-powered issue triage, a backend-enforced state machine for status transitions, and role-based dashboards with a complete auditable asset history.",
    image: "12.png",
    category: "Full Stack",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Tailwind CSS",
    ],
    metrics: "AI Issue Triage • Enforced State Machine",
    demoUrl: "https://smit-final-hackathon-gamma.vercel.app/login",
    githubUrl: "https://github.com/AhmedDevx07/SMIT-Final-Hackathon",
  },
  {
    id: 2, // Apne sequence ke mutabiq ID set kar lijiyega
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
    id: 3, // Apne sequence ke mutabiq ID manage kar lijiyega
    title: "Nexus — Multi-Vendor Marketplace",
    description:
      "A production-ready Amazon-style multi-tenant e-commerce marketplace powered by a unified Next.js App Router architecture, featuring three role-isolated portals, middleware-enforced RBAC, and Cloudinary media optimization.",
    image: "2.png", // Aap apni asset ka naam yahan likh sakte hain
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
    id: 4, // Apne sequence ke mutabiq ID maintain kar lijiyega
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
    id: 5,
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
    id: 6, // Aap apne purane sequence ke mutabiq ID check kar lijiyega
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
];

export const categories = ["All", "Frontend", "Full Stack"];
