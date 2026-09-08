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
  title: " FULL STACK DEVELOPER",
  email: "ahmeddevx07@gmail.com",
  location: "Karachi, Pakistan",
  tagline:
    "Building scalable, production-ready web applications with the MERN stack and Next.js.",
  resume: "MUHAMMAD AHMED RESUME.pdf",
  bio: [
    "I'm a MERN Stack & Next.js Developer based in Karachi, Pakistan. I completed my Full-Stack Development training at Saylani Mass IT Training (SMIT) and further sharpened my skills through a React.js Internship at Internee.pk, where I delivered real-world, production-ready applications. From responsive frontends to robust REST APIs and database design, I build complete, end-to-end web solutions — combining clean architecture with a strong focus on performance and user experience.",
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
  { label: "github Repositories", value: "70+" },
];

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
