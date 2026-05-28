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
  title: "MERN STACK DEVELOPER",
  email: "ahmedoffice69@gmail.com",
  location: "Karachi, Pakistan",
  tagline:
    "Building scalable, production-ready web applications with the MERN stack and Next.js.",
  resume: "MUHAMMAD AHMED RESUME.pdf",
  bio: [
    "I'm a MERN Stack & Next.js Developer based in Karachi, Pakistan. I have completed my Full Stack development training at SMIT and specialize in building scalable, production-ready web applications. From responsive frontends to robust REST APIs and database design — I deliver complete end-to-end solutions for clients and businesses.",
  ],
};

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/AhmedDevx07",
  linkedin: "https://linkedin.com/in/ahmeddevx07",
  instagram: "https://instagram.com/AhmedDevx07",
};

export const STATS: StatItem[] = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Built", value: "30+" },
  { label: "Technologies Used", value: "8+" },
  { label: "github Repositories", value: "70+" },
];

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
