export interface Project {
  id: string;
  title: string;
  problem: string;
  stack: string[];
  ownership: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "InstaReM Mobile App (Fintech)",
    problem:
      "Users required a secure, high-performance mobile application to manage international money transfers, cards, and payments at scale.",
    stack: [
      "React Native",
      "TypeScript",
      "Node.js (BFF)",
      "GraphQL",
      "Contentful",
      "Apple Pay",
    ],
    ownership:
      "Owned mobile performance optimization, transaction flows, card integrations, Apple Pay Wallet extensions, and frontend-backend architecture alignment.",
    outcome:
      "Improved app load time by 30%, increased transaction volume by 50%, and reactivated 40% of inactive users through performance and growth initiatives.",
  },
  {
    id: "proj-2",
    title: "Honeywell SAMBA Building Controller",
    problem:
      "Enterprise customers needed a reliable mobile interface to monitor and control building automation systems securely and in real time.",
    stack: [
      "React Native",
      "TypeScript",
      "Native Modules (iOS & Android)",
      "Secure Storage",
      "Encryption",
    ],
    ownership:
      "Led development of the React Native application with native bridging, optimized architecture, and implemented enterprise-grade security.",
    outcome:
      "Delivered a stable, performant controller app used in production enterprise environments with improved responsiveness and security compliance.",
  },
  {
    id: "proj-3",
    title: "CMS-Driven Mobile Architecture",
    problem:
      "Static app content required frequent releases and caused high dependency on app updates for simple content changes.",
    stack: [
      "React Native",
      "TypeScript",
      "Contentful",
      "REST APIs",
    ],
    ownership:
      "Designed and implemented a CMS-driven rendering system to dynamically control in-app content and help center experiences.",
    outcome:
      "Reduced customer support queries by 20% and enabled faster content updates without requiring app releases.",
  },
  {
    id: "proj-4",
    title: "Backend-for-Frontend (BFF) Services",
    problem:
      "Frontend teams faced complexity and instability during backend API migrations and version changes.",
    stack: [
      "Node.js",
      "TypeScript",
      "REST",
      "AWS",
    ],
    ownership:
      "Designed and built BFF services to abstract backend complexity and align APIs with frontend requirements.",
    outcome:
      "Improved frontend development velocity, reduced breaking changes, and simplified long-term maintenance during backend refactors.",
  },
];
