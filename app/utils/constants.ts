export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  tagline: string;
  resume: string;
  bio: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Muhammad Ahmed",
  title: "MERN Stack & Next.js Developer",
  email: "ahmedoffice69@gmail.com",
  location: "Karachi, Pakistan",
  tagline:
    "Building full-stack web applications with React, Next.js, Node.js, MongoDB, and AI integrations.",
  resume: "MUHAMMAD AHMED RESUME.pdf",
  bio: [
    "I am a Full-Stack Developer based in Karachi, Pakistan, specializing in the MERN stack and Next.js. I build responsive web applications, REST APIs, authentication systems, and database-driven solutions using JavaScript and TypeScript.",
    "During my React.js Developer Internship at Internee.pk, I worked on six projects, including an AI-powered Resume Analyzer, a full-stack AI Chatbot using the Google Gemini API, and a multi-vendor e-commerce platform.",
    "I have built 30+ projects covering frontend development, backend APIs, database integration, authentication, and AI-powered features. I am looking for full-time or internship opportunities where I can contribute to a development team, apply my skills, and continue growing as a developer.",
  ],
};

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/AhmedDevx07",
  linkedin: "https://linkedin.com/in/ahmeddevx07",
  instagram: "https://instagram.com/ahmeddevx07",
};

export const STATS: StatItem[] = [
  { label: "Years Learning & Building", value: "1+" },
  { label: "Projects Built", value: "30+" },
  { label: "Technologies Used", value: "8+" },
  { label: "GitHub Repositories", value: "70+" },
];

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
