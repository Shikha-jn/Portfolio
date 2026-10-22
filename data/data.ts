/**
 * Single source of truth for the portfolio.
 * Edit this file to update the site — no component changes needed.
 */

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  summary: string[];
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  resumeUrl: string;
  siteUrl: string;
  status: string;
  links: { label: string; href: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  context: string;
  period?: string;
  description: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  location: string;
  degree: string;
  field: string;
  score: string;
  start: string;
  end: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
  detail: string;
}

export const profile: Profile = {
  name: "Shikha Jain",
  firstName: "Shikha",
  lastName: "Jain",
  role: "React Native developer",
  tagline: "I build Android and iOS apps and take them all the way to the stores.",
  summary: [
    "Mobile application developer building and deploying Android and iOS apps with React Native, JavaScript and TypeScript. I work with REST APIs, Firebase and payment gateways, and I own the release process from signed build to store submission.",
    "I care about performance, clean code and smooth user experiences, and I work closely with QA and back-end teams to ship production-ready apps.",
  ],
  location: "Bhopal, Madhya Pradesh, India",
  email: "shikhajn133@gmail.com",
  phone: "+91 94067 32772",
  phoneHref: "tel:+919406732772",
  resumeUrl: "/Shikha_Jain_Resume.pdf",
  siteUrl: "https://portfolio-topaz-seven-62.vercel.app",
  status: "Open to React Native roles",
  links: [
    { label: "GitHub", href: "https://github.com/Shikha-jn" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shikha-jain-533b20374",
    },
  ],
};

export const experience: ExperienceItem[] = [
  {
    id: "injection-app",
    role: "Freelance Mobile App Developer",
    company: "Injection App",
    type: "Freelance",
    location: "Remote",
    start: "Aug 2026",
    end: "Sep 2026",
    highlights: [
      "Built a React Native on-demand healthcare app where users book home-care services such as injections, BP measurement and blood sample collection based on their location.",
      "Implemented location-based vendor booking and service allocation, so nearby vendors receive service requests, accept them and visit customers at home.",
      "Integrated the Razorpay payment gateway for secure online payments and Firebase Cloud Messaging (FCM) for real-time booking notifications and status updates.",
      "Built the full booking life-cycle with notifications for booking acceptance, service start and service completion.",
      "Added prescription and document upload during booking so users can securely share medical prescriptions with service providers.",
    ],
    stack: ["React Native", "Razorpay", "Firebase Cloud Messaging", "Geo-location APIs"],
  },
  {
    id: "indian-online-directory",
    role: "Freelance Back-end Developer",
    company: "Indian Online Directory",
    type: "Freelance",
    location: "Remote",
    start: "Apr 2026",
    end: "May 2026",
    highlights: [
      "Developed RESTful APIs for an Indian online business directory using ASP.NET Core and the Code First approach.",
      "Implemented JWT authentication and role-based authorization to secure API access.",
      "Integrated Cloudinary for image upload and cloud-based media management.",
      "Owned the complete back-end life-cycle, from database design to API delivery.",
    ],
    stack: ["ASP.NET Core", "Entity Framework", "JWT", "Cloudinary"],
  },
  {
    id: "itechsoft",
    role: "Mobile App Developer",
    company: "iTechSoft Solution",
    type: "Full-time",
    location: "Ahmedabad",
    start: "Jun 2025",
    end: "Mar 2026",
    highlights: [
      "Developed and maintained cross-platform Android and iOS apps with React Native.",
      "Managed complete Android and iOS releases: build generation, versioning, signing, Play Store and App Store submissions, and post-release updates.",
      "Integrated apps with back-end services, third-party APIs and authentication systems.",
      "Worked with the QA and development team to find, troubleshoot and fix issues before production releases.",
      "Took part in code reviews, bug fixing and performance tuning, applying clean code and mobile-first practices.",
    ],
    stack: ["React Native", "TypeScript", "REST APIs", "Play Store", "App Store"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "fit-india",
    name: "Fit India",
    context: "Self-learning project",
    period: "Jul – Aug 2026",
    description:
      "A fitness and wellness app for women, with separate experiences for trainers and members.",
    highlights: [
      "Trainer tools to manage clients, workout and diet plans, goals, calories, weight and attendance.",
      "Paid webinars, subscriptions, Zoom sessions and access to recorded sessions.",
      "Members can manage their profile, track attendance, see assigned trainers and monitor transactions.",
    ],
    stack: ["React Native", "TypeScript"],
    links: [{ label: "Source on GitHub", href: "https://github.com/Shikha-jn/Fit_India_App" }],
  },
  {
    id: "ordorite-inventory",
    name: "Ordorite Inventory",
    context: "Live project at iTech Soft Solutions",
    description:
      "A production inventory app I maintained and released to the store.",
    highlights: [
      "Upgraded the Android target version from 14 to 15 to meet the latest Play Store requirements and fixed the compatibility issues the migration introduced.",
      "Debugged and resolved critical errors, improving stability, performance and user experience.",
      "Generated APKs for QA testing and AABs for release.",
      "Owned the production release: final build, app signing, versioning and store submission.",
    ],
    stack: ["React Native", "Android", "Gradle", "Play Store"],
  },
  {
    id: "socio-chat",
    name: "Socio Chat",
    context: "Self-learning project",
    period: "Feb 2026",
    description:
      "A social chat app with swipe-based discovery and a real-time style messaging screen.",
    highlights: [
      "Multi-screen navigation with React Navigation (stack and bottom tabs).",
      "Profile browsing, likes, chat bubbles with timestamps and online indicators.",
      "Reusable, responsive components across Home, Likes, Chats and Profile, with state handled by React Hooks.",
    ],
    stack: ["React Native", "React Navigation", "React Hooks"],
    links: [{ label: "Source on GitHub", href: "https://github.com/Shikha-jn/Socio_Chat" }],
  },
  {
    id: "veterinary-appointments",
    name: "Veterinary Appointment System",
    context: "Group project",
    period: "Dec 2023 – Mar 2024",
    description:
      "A desktop appointment manager with role-based access for admins, veterinarians and receptionists.",
    highlights: [
      "Designed the MySQL schema for pets, owners, appointments, veterinarian schedules and billing.",
      "Pet registration, appointment booking, treatment history and payment tracking, with input validation and error handling.",
    ],
    stack: ["Java", "Swing", "MySQL"],
    links: [{ label: "Source on GitHub", href: "https://github.com/Shikha-jn/Vet-project" }],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Mobile",
    items: [
      "React Native",
      "Android development",
      "iOS development",
      "Cross-platform development",
      "Geo-location APIs",
      "Firebase Cloud Messaging",
    ],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "HTML", "CSS", "SQL"],
  },
  {
    title: "APIs and integration",
    items: [
      "RESTful APIs",
      "Third-party API integration",
      "JWT authentication",
      "Zustand",
      "Context API",
      "Razorpay",
    ],
  },
  {
    title: "Database",
    items: ["Firebase Firestore", "MySQL"],
  },
  {
    title: "Release and tooling",
    items: [
      "Git",
      "Gradle",
      "CI/CD",
      "Android Studio",
      "Xcode",
      "Play Store and App Store deployment",
      "APK and AAB builds",
      "IPA builds",
    ],
  },
  {
    title: "Also working knowledge of",
    items: ["React.js", ".NET and Entity Framework", "C#", "Swift"],
  },
];

export const education: EducationItem[] = [
  {
    school: "Bansal College of Engineering",
    location: "Mandideep, Madhya Pradesh",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    score: "CGPA 7.5",
    start: "Oct 2021",
    end: "May 2025",
  },
];

export const certificates: CertificateItem[] = [
  {
    name: "Java Programming",
    issuer: "Prema Software Solutions",
    date: "Nov 2023",
    detail: "Java syntax, OOP principles and back-end fundamentals.",
  },
  {
    name: "SQL Certificate",
    issuer: "Udemy",
    date: "Nov 2022",
    detail: "SQL syntax, stored procedures and SQL functions.",
  },
];

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
