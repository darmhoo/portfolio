export const profile = {
  name: "Omodamola Oladeji",
  title: "Senior Full-Stack Engineer",
  tagline:
    "Fintech & payment systems engineer with 7+ years building scalable platforms across React, Vue.js, Go, and Laravel.",
  location: "Lagos, Nigeria",
  email: "omodamolaoladeji@gmail.com",
  phone: "+234 813 532 1769",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/darmhoo",
    linkedin: "https://linkedin.com/in/omodamola-oladeji-612b6179",
  },
  about: [
    "Senior Full-Stack Engineer with 7+ years of experience building scalable fintech platforms, payment systems, and enterprise business applications across the full development lifecycle. Deep expertise in React, Vue.js, TypeScript, PHP/Laravel, and Go, with a strong track record integrating payment providers (M-Pesa, Paystack), core banking systems, and messaging/notification services into secure, production-grade applications.",
    "Comfortable owning features end-to-end — from database design and API architecture through frontend delivery — and collaborating with product and business stakeholders to ship reliable, maintainable software.",
  ],
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Go", "PHP", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Vue.js",
      "Nuxt.js",
      "React Native",
      "Livewire",
      "Alpine.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend",
    items: [
      "Laravel",
      "Go",
      "REST APIs",
      "Microservices",
      "OAuth2",
      "JWT",
      "HMAC",
      "Webhooks",
    ],
  },
  {
    category: "Payments & Integrations",
    items: [
      "M-Pesa",
      "Paystack",
      "Core Banking",
      "Africa's Talking",
      "Twilio",
      "SMTP",
    ],
  },
  {
    category: "Databases & Infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Nginx",
      "Linux",
      "Git/GitHub",
      "CI/CD",
      "Background Jobs & Queues",
    ],
  },
  {
    category: "Practices & Tools",
    items: [
      "System Design",
      "Database Design",
      "Automated Testing",
      "Performance Optimization",
      "Code Review",
      "Production Support",
      "Postman",
      "Bruno",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  loginDetails?: {
    username: string;
    passwordNote: string;
  };
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "PaymentHub Admin",
    description:
      "Architected and built scalable financial and business applications end-to-end, including a reusable provider/adapter architecture that lets the platform plug in new payment, messaging, and notification providers without rework — integrating M-Pesa, Africa's Talking, Twilio, SMTP, and core banking systems.",
    tags: ["Go", "PostgreSQL", "Nextjs", "Redis", "Docker", "OAuth2", "Webhooks"],
    liveUrl: "https://gateway.jethroapp.net/app/login",
    loginDetails: {
      username: "admin@admin.com",
      passwordNote: "Contact me for demo access",
    },
    repoUrl: "https://github.com/darmhoo/payment-hub-admin"
  },
  {
    title: "School of Ministry LMS",
    description:
      "Built v1 and v2 of a Learning Management System handling student registration, course management, attendance, and payments, with Paystack integration for online payments.",
    tags: ["Laravel", "React", "Paystack"],
    repoUrl: "https://github.com/darmhoo/ism-frontend"
  },
  {
    title: "VTU PWA Application",
    description:
      "Built features for a Progressive Web Application handling digital services and transaction workflows, including external API integrations and responsive interfaces.",
    tags: ["Filament", "JavaScript", "Laravel", "REST APIs"],
    repoUrl: "https://github.com/darmhoo/billshub"
  },
  {
    title: "Ahead Uploader",
    description:
      "Enables bathc uploading of transactions, it was disgned to handle large data without any serious bottlenecks",
    tags: ["Vue.js", "PHP/Laravel", "MySQL"],
    repoUrl: "https://github.com/darmhoo/ahead_uploader_fe"
  },
  {
    title: "Altara Loan App",
    description:
      "Owned significant portions of the frontend for a customer-facing React Native loan application, covering loan applications, status tracking, and supporting backend APIs.",
    tags: ["React Native", "Laravel"],
  },
  {
    title: "Altara Portal",
    description:
      "Built and maintained major modules of the company's core business platform, including a logistics management module for product lifecycle tracking, and payment processing and staff management features.",
    tags: ["Vue.js", "PHP/Laravel"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Developer",
    company: "Jethro Limited — Lagos",
    period: "Jun 2025 – Present",
    points: [
      "Architect and build scalable financial and business applications end-to-end — from database schema and backend services (Go, PostgreSQL, Redis, Docker) through API design and frontend delivery.",
      "Built a reusable provider/adapter architecture that lets the platform plug in new payment, messaging, and notification providers without rework, integrating M-Pesa, Africa's Talking, Twilio, SMTP, and core banking systems.",
      "Develop secure REST APIs using OAuth2, JWT, and HMAC-based authentication, and implement payment processing workflows including transaction handling, webhook processing, and provider callbacks.",
      "Lead troubleshooting of API, database, networking, and authentication issues across distributed production systems, and participate in architecture decisions, code reviews, and technical design.",
      "Partner directly with business stakeholders to translate requirements into practical, maintainable technical solutions.",
    ],
  },
  {
    role: "Independent Contractor — Full-Stack Development",
    company: "Self-employed",
    period: "Oct 2024 – Jun 2025",
    points: [
      "Delivered full-stack web and API development for fintech and business clients on a contract basis, working across React/Vue frontends and Laravel/Go backends.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Altara Credit Limited — Lagos, Nigeria",
    period: "Jul 2019 – Oct 2024",
    points: [
      "Owned frontend and backend delivery across the company's core fintech, CRM, HR, and logistics platforms.",
      "Built and maintained major modules of the company's core business platform (Altara Portal), including a logistics management module for product lifecycle tracking, and payment processing and staff management features, using Vue.js and PHP/Laravel.",
      "Designed and built a CRM platform (Altara CRM) supporting multiple business units, including backend APIs, database structures, and reusable frontend components for different teams.",
      "Owned significant portions of the frontend for a customer-facing React Native loan application (Altara Loan App), covering loan applications, status tracking, and supporting backend APIs.",
      "Designed and built an internal HR management module (Altara HRM) that automated previously manual HR workflows, including database design and backend logic.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science, Computer Engineering",
  school: "Obafemi Awolowo University",
  period: "Feb 2012 – Mar 2017",
};
