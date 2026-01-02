export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Omio",
    role: "Frontend Developer (React & React Native)",
    duration: "Jun 2025 — Present",
    description: [
      "Building scalable web and mobile features using React, React Native, and TypeScript within a shared monorepo architecture",
      "Improved application reliability and delivery speed through CI/CD optimizations using Fastlane, Jest, Cypress, and Detox",
      "Worked closely with global cross-functional teams to deliver features across 30+ languages with consistent UX",
      "Contributed to performance optimizations and code quality initiatives across web and mobile platforms",
    ],
  },
  {
    id: "exp-2",
    company: "NIUM (InstaReM)",
    role: "Senior Software Development Engineer",
    duration: "Dec 2022 — Jun 2025",
    description: [
      "Led performance optimization initiatives across iOS and Android, improving app load times by 30% and enhancing App Store ratings",
      "Owned critical fintech flows including international transactions, card integrations, and in-app payments with a strong focus on security and reliability",
      "Designed and implemented Backend-for-Frontend (BFF) services using Node.js to simplify frontend integration during backend API migrations",
      "Integrated Apple Pay Wallet extensions and implemented app-level data protection, privacy, and secure storage mechanisms",
      "Built a CMS-driven mobile architecture using Contentful to dynamically render app content, reducing customer support queries by 20%",
      "Drove A/B testing and growth experiments that resulted in 40% reactivation of inactive users and a 50% increase in transaction volume",
    ],
  },
  {
    id: "exp-3",
    company: "Honeywell",
    role: "Mobile Developer II",
    duration: "Nov 2021 — Dec 2022",
    description: [
      "Developed a cross-platform React Native application for building automation and control systems used in enterprise environments",
      "Implemented native modules and bridging to integrate device-level functionality while maintaining smooth cross-platform performance",
      "Optimized application architecture to reduce render times and improve responsiveness on low-powered devices",
      "Led security implementations including encryption, authentication, and secure storage aligned with enterprise compliance standards",
    ],
  },
  {
    id: "exp-4",
    company: "GreenPrint Technologies",
    role: "React Native / iOS Developer",
    duration: "Jul 2019 — Oct 2021",
    description: [
      "Led end-to-end development of iOS and React Native applications, from requirement gathering to App Store deployment",
      "Integrated third-party APIs, analytics, push notifications, and location services including Apple and Google Maps",
      "Implemented unit testing, crash monitoring, and performance tracking to improve overall app stability and user engagement",
      "Delivered secure and scalable mobile solutions tailored for production use across multiple clients",
    ],
  },
];
