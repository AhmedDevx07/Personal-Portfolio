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
    "I'm a dedicated Full Stack Developer currently honing my expertise at SMIT. I specialize in building high-performance web applications using the MERN ecosystem (MongoDB, Express, React, Node.js) and Next.js. With a deep focus on Glassmorphism and ultra-modern UI/UX design, I aim to bridge the gap between complex backend logic and seamless frontend aesthetics.",
  ],
};

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/AhmedDevx07",
  linkedin: "https://linkedin.com/in/AhmedDevx07",
  instagram: "https://instagram.com/AhmedDevx07",
};

export const STATS: StatItem[] = [
  { label: "YEARS FOCUSED ON MERN", value: "1+" },
  { label: "PROJECTS COMPLETED", value: "30+" },
  { label: "MODERN TECHNOLOGIES", value: "15+" },
  { label: "LinkedIn Followers", value: "1.5K+" },
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
