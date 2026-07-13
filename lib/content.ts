// All portfolio copy lives here so the page component stays presentational.
// Edit these values to update the site.

export const PROFILE = {
  name: "Rommel Valdiviezo",
  title: "Mobile Software Engineer",
  location: "Quito, Ecuador",
  email: "alexanderommelsw@gmail.com",
  phone: "+593 96 335 6744",
  github: "https://github.com/sheromdevvs",
  // Update this once you have a LinkedIn URL; leave empty to hide the link.
  linkedin: "",
  summary:
    "Mobile software engineer specializing in fintech platforms, building and scaling native iOS and Android applications used by 500,000+ users. Experienced in payment systems, modular mobile architectures, application reliability and mobile security — with a proven ability to lead mobile initiatives from MVP to production.",
  tagline: "I build native mobile apps that",
  taglineAccent: " move money at scale.",
};

export const STATS = [
  { value: "500K+", label: "users on shipped fintech apps" },
  { value: "iOS + Android", label: "native, cross-ecosystem" },
  { value: "MVP → Production", label: "led from prototype to launch" },
  { value: "PCI DSS", label: "security-hardened payments" },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Mobile",
    items: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine",
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Clean Architecture",
      "Modularization",
      "SPM",
      "CocoaPods",
    ],
  },
  {
    group: "Platforms & Reliability",
    items: ["iOS", "Android", "Firebase", "Crashlytics", "XCTest", "CoreData", "AVFoundation"],
  },
  {
    group: "Security",
    items: ["Obfuscation", "Encryption", "Secure SDK integration", "Play Integrity", "PCI DSS"],
  },
  {
    group: "Tooling & Delivery",
    items: ["Fastlane", "Azure DevOps", "Bitrise", "Jira", "Appium", "LLM-assisted development"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  blurb: string;
  points: string[];
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Specialist Mobile Developer",
    company: "PayPhone",
    location: "Remote",
    period: "Nov 2024 — Present",
    blurb:
      "Contributed to the complete modernization of iOS and Android apps for a fintech payment platform serving 500,000+ users, supporting the rebuild of the mobile platform for U.S. expansion.",
    points: [
      "Drove the iOS and Android architecture from a monolithic codebase to a standardized modular architecture, enabling legacy and market-specific features to coexist during the incremental adoption of SwiftUI, SPM, Jetpack Compose and MVVM.",
      "Shipped identity verification, digital card issuance, cross-border transfers and customer-engagement features by integrating APIs and SDKs with backend and product teams.",
      "Redesigned the Tap-to-Phone NFC integration, reducing payment failures in Crashlytics and improving transaction processing time; added structured logging that improved reconciliation and reduced revenue leakage.",
      "Applied mobile security hardening — obfuscation, version enforcement and Google Play Integrity — aligned with PCI DSS requirements.",
      "Managed App Store and Play Store production releases and proposed CI/CD pipelines with Fastlane and Azure DevOps.",
    ],
    tags: ["Swift", "SwiftUI", "Kotlin", "NFC", "PCI DSS", "Fastlane"],
  },
  {
    role: "Lead Mobile Developer",
    company: "Willay",
    location: "Remote",
    period: "Mar 2022 — Dec 2024",
    blurb:
      "Led mobile engineering for a startup MVP, rebuilding an early prototype into a vehicle-inspection platform and supporting growth from launch to 2,000+ completed inspections.",
    points: [
      "Migrated the MVP from Xamarin to a native Android platform with a modular architecture in Kotlin, Clean Architecture and MVVM (later moving from XML to Compose).",
      "Built a camera and document-processing module combining device camera APIs, ML Kit and OCR to automate vehicle inspection and data extraction.",
      "Designed and built the native iOS app (Swift, SwiftUI, Combine, CoreData, URLSession, AVFoundation), extending the product into a cross-ecosystem solution.",
      "Defined mobile-backend API contracts and introduced CI pipelines with Bitrise and GitHub.",
    ],
    tags: ["Kotlin", "Swift", "ML Kit", "OCR", "Compose", "Bitrise"],
  },
  {
    role: "Full-Stack Developer",
    company: "Escuela Politécnica Nacional",
    location: "Quito, Ecuador · Freelance",
    period: "May 2024 — Sep 2024",
    blurb:
      "Delivered a web platform automating research-project application workflows for the university's Research Directorate, serving a department of 100+ researchers.",
    points: [
      "Led end-to-end development from concept to production — system architecture plus backend and frontend using Java EE, JBoss, PostgreSQL, JPA and JSP.",
      "Implemented a configurable rules engine so administrators could modify approval logic without code changes, cutting production redeployments.",
    ],
    tags: ["Java EE", "PostgreSQL", "JPA", "JBoss"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Entrevia",
    tagline: "AI Voice Mock Interview Platform",
    description:
      "An AI-powered mock interview platform for technical and behavioral prep. Integrates OpenAI, Vapi and ElevenLabs for real-time voice interview simulations with contextual AI responses.",
    stack: ["Next.js", "React", "OpenAI", "Vapi", "ElevenLabs", "Vercel"],
    href: "https://entrevia-dev.vercel.app/",
  },
];

export const EDUCATION = {
  degree: "Software Engineering",
  school: "National Polytechnic School",
  location: "Quito, Ecuador",
  year: "2024",
};
