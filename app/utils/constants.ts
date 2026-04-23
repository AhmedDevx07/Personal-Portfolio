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
  title: "Full Stack MERN Developer",
  email: "ahmedoffice69@gmail.com",
  location: "Karachi, Pakistan",
  tagline:
    "Crafting ultra-modern, SaaS-grade digital experiences with MERN Stack.",
  resume: "/MUHAMMADAHMEDRESUME.pdf",
  bio: [
    "I'm an aspiring Full Stack Developer currently honing my skills at SMIT. I specialize in building high-performance web applications using React, Next.js, and the MERN ecosystem, with a deep focus on glassmorphism and modern UI/UX.",
  ],
};

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/AhmedDevx07",
  linkedin: "https://linkedin.com/in/AhmedDevx07",
  instagram: "https://instagram.com/AhmedDevx07",
};

export const STATS: StatItem[] = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Technologies", value: "12+" },
  { label: "LinkedIn Followers", value: "1K+" },
];

export const ABOUT_STATS: StatItem[] = [
  { label: "UI Components", value: "100+" },
  { label: "Hours Coding", value: "2.5K+" },
  { label: "Success Rate", value: "100%" },
];

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
