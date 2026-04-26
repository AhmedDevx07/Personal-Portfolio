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
  title: "Frontend Developer",
  email: "ahmedoffice69@gmail.com",
  location: "Karachi, Pakistan",
  tagline:
    "Crafting modern, scalable and user-friendly web applications with React & Next.js.",
  resume: "MUHAMMAD AHMED RESUME.pdf",
  bio: [
    "I'm a passionate Frontend Developer currently learning Full Stack MERN development at SMIT. I have built a strong foundation in modern frontend technologies including HTML, CSS, JavaScript, and TypeScript, and I specialize in building responsive and high-performance web applications using React.js and Next.js.",
  ],
};

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/AhmedDevx07",
  linkedin: "https://linkedin.com/in/ahmeddevx07",
  instagram: "https://instagram.com/AhmedDevx07",
};

export const STATS: StatItem[] = [
  { label: "Months of Experience", value: "12+" },
  { label: "Projects Built", value: "30+" },
  { label: "Technologies Used", value: "10+" },
  { label: "LinkedIn Network", value: "1.5K+" },
];

export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
