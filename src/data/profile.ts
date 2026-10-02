export const profile = {
  name: "Omodamola Oladeji",
  title: "Senior Full-Stack Engineer",
  tagline:
    "I build operations-critical platforms where correctness matters: payment and transaction workflows, core banking integrations, and the internal tools that operations teams run on every day. I work across Ruby on Rails, Laravel, Go and React/TypeScript.",
  location: "Lagos, Nigeria",
  email: "omodamolaoladeji@gmail.com",
  phone: "+234 813 532 1769",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/darmhoo",
    linkedin: "https://linkedin.com/in/omodamola-oladeji-612b6179",
  },
  about: [
    "Senior full-stack engineer with 7+ years building operations-critical platforms where correctness matters: payment and transaction workflows, core banking integrations, and the internal tools that operations, sales, HR and logistics teams run on every day. I own work end to end, from data model and API design through Ruby on Rails, Laravel and Go backends, background processing, React/TypeScript, Vue and Hotwire frontends, React Native mobile apps, and production support.",
    "I am strongest where messy real-world workflows have to become simple, reliable systems. That means turning stakeholder needs into clear lifecycles and states, designing backends that handle webhooks, callbacks and external providers safely, and building reusable patterns other engineers can extend.",
    "I run my team's code reviews and knowledge sharing, and I use Claude Code to deliver faster while checking everything it generates for correctness and security.",
  ],
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Ruby", "PHP", "Go", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "Hotwire (Turbo, Stimulus)",
      "Livewire",
      "Alpine.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "Zustand",
      "TanStack React Query",
      "Tamagui",
      "Axios",
    ],
  },
  {
    category: "Backend",
    items: [
      "Ruby on Rails",
      "PHP/Laravel",
      "Go",
      "REST API Design",
      "Service-Layer Architecture",
      "Microservices",
      "Webhooks & Provider Callbacks",
      "Background Jobs & Queues",
      "Sidekiq",
    ],
  },
  {
    category: "Data & Security",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Transactional Data Modelling",
      "OAuth2",
      "JWT",
      "HMAC Request Signing",
    ],
  },
  {
    category: "Payments & Integrations",
    items: [
      "M-Pesa",
      "Paystack",
      "Flutterwave",
      "Apache Fineract",
      "Twilio",
      "Africa's Talking",
      "SMTP",
      "Cloudinary",
      "QR Payment Requests",
      "Provider/Adapter Architecture",
    ],
  },
  {
    category: "Delivery & Operations",
    items: [
      "Docker",
      "Nginx",
      "Linux",
      "CI/CD",
      "Grafana",
      "Jest",
      "React Native Testing Library",
      "ESLint",
      "Code Review",
      "Production Troubleshooting",
      "Framework Upgrades",
      "Claude Code",
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
      "A payments gateway built on a reusable provider/adapter architecture, so new payment, messaging and notification providers plug in without changes to core logic. Integrates M-Pesa, core banking, Twilio, Africa's Talking and SMTP, with webhook processing and provider callbacks where every state change is correct and traceable.",
    tags: ["Go", "PostgreSQL", "Next.js", "Redis", "Docker", "OAuth2", "Webhooks"],
    liveUrl: "https://gateway.jethroapp.net/app/login",
    loginDetails: {
      username: "admin@admin.com",
      passwordNote: "Contact me for demo access",
    },
    repoUrl: "https://github.com/darmhoo/payment-hub-admin",
  },
  {
    title: "Digital Banking & Lending Platform",
    description:
      "A Rails platform covering onboarding, KYC, account management, savings products, loan lifecycle workflows, transfers and financial reporting, integrated with Apache Fineract and Flutterwave. Sidekiq handles transfers, onboarding automation and recurring financial tasks; Hotwire drives the admin and client dashboards.",
    tags: ["Ruby on Rails", "Hotwire", "Sidekiq", "PostgreSQL", "Redis", "Fineract", "Flutterwave"],
  },
  {
    title: "Mobile Banking & Payments App",
    description:
      "A cross-platform app for account management, transfers, beneficiaries, transaction history, loan applications, repayment tracking and notifications, with secure flows for authentication, transaction PINs and sensitive data storage.",
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query", "Tamagui", "Jest"],
  },
  {
    title: "Ahead Uploader",
    description:
      "A bulk transaction uploader that loads transactions into the Apache Fineract core banking system. It serves 1,000+ users and processes 100,000+ records per batch without bottlenecks.",
    tags: ["Vue.js", "PHP/Laravel", "MySQL", "Fineract"],
    repoUrl: "https://github.com/darmhoo/ahead_uploader_fe",
  },
  {
    title: "School of Ministry LMS",
    description:
      "Built v1 and then v2 of a learning management system covering student registration, course management, attendance and Paystack payments.",
    tags: ["Laravel", "React", "Paystack"],
    repoUrl: "https://github.com/darmhoo/ism-frontend",
  },
  {
    title: "VTU PWA Application",
    description:
      "Built transaction workflows, external API integrations and responsive interfaces for a digital-services progressive web app.",
    tags: ["Laravel", "Filament", "JavaScript", "REST APIs"],
    repoUrl: "https://github.com/darmhoo/billshub",
  },
  {
    title: "Altara Portal",
    description:
      "Built and maintained major modules of the core operations platform, including a logistics module that tracks each product through its lifecycle, payment processing, and staff management tools for internal teams.",
    tags: ["Vue.js", "PHP/Laravel"],
  },
  {
    title: "Altara Loan App",
    description:
      "Owned large parts of a customer-facing React Native app covering loan applications and status tracking, plus the backend APIs behind them.",
    tags: ["React Native", "Laravel"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export type ExperienceGroup = {
  heading?: string;
  points: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary?: string;
  groups: ExperienceGroup[];
};

export const experience: Experience[] = [
  {
    role: "Senior Developer",
    company: "Jethro Limited — Lagos",
    period: "Jun 2025 – Present",
    summary:
      "Own financial applications end to end across Ruby on Rails, Go and React Native (PostgreSQL, Redis, Docker): data model, API contracts, and web and mobile frontends.",
    groups: [
      {
        heading: "Digital banking and lending platform — Ruby on Rails",
        points: [
          "Built a platform covering onboarding, KYC, account management, savings products, loan lifecycle workflows, transfers and financial reporting, integrated with Apache Fineract and Flutterwave.",
          "Developed modular service-layer integrations for bank lookups, payment requests and automated transaction flows, which made account and loan operations more reliable and cut manual processing.",
          "Built background processing and scheduled workflows with Sidekiq, Redis and PostgreSQL for transfers, onboarding automation and recurring financial tasks.",
          "Delivered responsive admin and client-facing dashboards with Hotwire (Turbo, Stimulus), Bootstrap and JavaScript. Integrated SMS, QR-based payment requests, Cloudinary document uploads and communication tools for onboarding, notifications and secure document handling.",
        ],
      },
      {
        heading: "Mobile banking and payments app — React Native, Expo, TypeScript",
        points: [
          "Built a cross-platform app for account management, transfers, beneficiaries, transaction history, loan applications, repayment tracking and notifications.",
          "Structured it with Expo Router, Zustand and TanStack React Query for data fetching, caching and UI state sync. API calls go through Axios with centralised error handling and toast feedback.",
          "Implemented secure flows for authentication, onboarding, password changes, transaction PINs and profile management, with secure storage for sensitive data.",
          "Built reusable Tamagui components and dashboard screens, and added unit and component tests with Jest and React Native Testing Library plus ESLint checks.",
        ],
      },
      {
        heading: "Payments infrastructure and engineering practice",
        points: [
          "Built a bulk transaction uploader that loads transactions into the Apache Fineract core banking system. It serves 1,000+ users and processes 100,000+ records per batch.",
          "Designed a reusable provider/adapter architecture so new payment, messaging and notification providers plug in without changes to core logic. Integrated M-Pesa, core banking, Twilio, Africa's Talking and SMTP through it.",
          "Built inbound webhook processing and provider callbacks for payment flows, where every state change has to be correct and traceable, and secured service APIs with OAuth2, JWT and HMAC request signing.",
          "Lead troubleshooting of production incidents across APIs, databases, networking and authentication in distributed systems, using Grafana for observability.",
          "Use Claude Code to speed up delivery, including generating tests, and verify generated code for correctness and security before it merges.",
          "Run the team's mandatory code reviews and a weekly tech expo where engineers share what they have learnt. Contribute to architecture decisions and work directly with business stakeholders to turn ambiguous requirements into simple, maintainable solutions.",
        ],
      },
    ],
  },
  {
    role: "Independent Contractor — Full-Stack Development",
    company: "Self-employed",
    period: "Oct 2024 – Jun 2025",
    groups: [
      {
        points: [
          "Delivered full-stack web and API work for fintech and business clients, across React/Vue frontends and Laravel/Go backends.",
        ],
      },
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Altara Credit Limited — Lagos",
    period: "Jul 2019 – Oct 2024",
    summary:
      "Owned frontend and backend delivery for the internal platforms that ran Altara's lending, sales, HR and logistics operations, with the core platform built on Laravel and Vue.js.",
    groups: [
      {
        points: [
          "Altara Portal (core operations platform): Built and maintained major modules in Vue.js and Laravel. These included a logistics module that tracks each product through its lifecycle, payment processing, and staff management tools for internal teams.",
          "Legacy platform migration: Migrated the Altara codebase through two major framework upgrades, from Laravel 5.8 to 7 and then to 8. It shipped in gradual stages: core functionality first, then hardening of the APIs and the authentication system.",
          "Altara CRM: Designed and built a CRM serving multiple business units from one platform: data model, backend APIs, and reusable frontend components shared across teams.",
          "Altara HRM: Designed and built an HR management module that replaced manual HR processes with automated workflows, owning the database design and backend logic.",
          "Altara Loan App (customer-facing): Owned large parts of the React Native app, covering loan applications and status tracking, plus the backend APIs behind them.",
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.Sc. Computer Engineering",
  school: "Obafemi Awolowo University",
  period: "2012 – 2017",
};

export const community = {
  role: "Volunteer",
  organisation: "Andela Learning Community",
  period: "Mar 2018 – Feb 2019",
  description:
    "Collaborative software development and peer learning in modern engineering practices.",
};
