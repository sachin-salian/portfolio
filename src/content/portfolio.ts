/**
 * Single source of truth for portfolio copy.
 * Update here — UI components should not hardcode facts.
 *
 * Sourced from career-os + existing portfolio. No invented employers/metrics.
 */

export const person = {
  name: "Sachin Kumar Kaniyaru",
  shortName: "Sachin",
  monogram: "SK",
  /** Honest current title — do not attach Senior to Omio */
  role: "Software Engineer",
  positioningRole: "Product Engineer",
  company: "Omio",
  location: "Bengaluru, India",
  years: "7+",
  email: "sachinkaniyar@gmail.com",
  phone: "+91 81050 61586",
  github: "https://github.com/sachin-salian",
  linkedin: "https://www.linkedin.com/in/sachinsaliank/",
  resume: "/Sachin_Resume.pdf",
  portfolioUrl: "https://sachin-kaniyaru.vercel.app/",
  education: {
    school: "Vivekananda College of Engineering and Technology",
    degree: "B.E. Computer Science & Engineering",
    year: "2019",
    detail: "SGPA 8.15",
  },
  languages: ["English", "Kannada", "Tulu"],
  awards: [
    {
      title: "Functional Award",
      org: "NIUM",
      note: "Performance improvement and timely delivery across mobile capabilities",
    },
    {
      title: "Achievement Award",
      org: "Honeywell",
      note: "Technical excellence on critical mobile app enhancements",
    },
  ],
} as const;

export const hero = {
  lines: ["ENGINEER.", "BUILDER.", "PRODUCT THINKER."],
  support:
    "I build customer-facing products across web, Android and iOS — then the platform tooling that makes the next feature cheaper. React, React Native, TypeScript. Travel and fintech.",
  status: [
    { label: "SYSTEM", value: "ONLINE" },
    { label: "LOCATION", value: "BENGALURU" },
    { label: "FOCUS", value: "PRODUCT ENGINEERING" },
    { label: "EXPERIENCE", value: "7+ YEARS" },
    { label: "CURRENTLY", value: "OMIO" },
  ],
  modes: [
    { id: "build", label: "BUILD", hint: "Product surfaces across web & mobile" },
    { id: "explore", label: "CRAFT", hint: "Where I go deep technically" },
    { id: "experience", label: "PATH", hint: "Career as a changelog" },
    { id: "systems", label: "THINK", hint: "How I approach systems" },
  ],
} as const;

export const nav = [
  { id: "focus", label: "Focus" },
  { id: "experience", label: "Experience" },
  { id: "lab", label: "Lab" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const story = {
  kicker: "Who I am",
  headline: "Engineering is my medium.",
  body: [
    "I started by shipping production mobile apps end to end. Then enterprise controllers. Then fintech payments at scale. Now I build travel product and the developer platforms underneath it.",
    "The through-line is ownership: shape the contract, build the feature, ship behind flags, instrument it, learn — then build tools so the next cycle is cheaper.",
  ],
  journey: [
    { year: "2019", company: "GreenPrint", domain: "Mobile foundations" },
    { year: "2021", company: "Honeywell", domain: "Enterprise IoT" },
    { year: "2022", company: "NIUM", domain: "Fintech / payments" },
    { year: "2025", company: "Omio", domain: "Travel · Platform · DevEx" },
    { year: "2026", company: "Now", domain: "Product + platform engineering" },
  ],
} as const;

export type ExperienceEntry = {
  id: string;
  year: string;
  company: string;
  role: string;
  duration: string;
  domain: string;
  context: string;
  built: string[];
  changed: string[];
  stack: string[];
  metrics?: Array<{ value: string; label: string; note?: string }>;
  featured?: boolean;
};

export const experiences: ExperienceEntry[] = [
  {
    id: "omio",
    year: "2025",
    company: "Omio",
    role: "Software Engineer (Frontend)",
    duration: "Jun 2025 — Present",
    domain: "Travel technology · Product & platform",
    context:
      "Multi-modal travel booking across web, Android and iOS — many markets, languages, currencies, and hundreds of transport operators.",
    built: [
      "FE Companion — internal debugging platform across web, Android and iOS (own OKR).",
      "Booking-flexibility capability end to end across three platforms.",
      "Cross-platform product work with GraphQL/BFF, flags, and localization.",
    ],
    changed: [
      "Zero-intrusion instrumentation: adapters attach to shared infrastructure; product code does not depend on the debug layer.",
      "0% devtools code in production bundles — enforced by build-script leak detection, not convention.",
      "Operator variability modeled as backend-reported capabilities instead of client-side rule trees.",
    ],
    stack: ["React", "React Native", "TypeScript", "GraphQL", "Apollo", "Feature flags"],
    metrics: [
      { value: "0%", label: "Devtools in prod", note: "Build-time exclusion + leak detection" },
      { value: "80%", label: "FE adoption / qtr", note: "Recorded OKR metric — be ready to explain" },
      { value: "~50%", label: "Debug time ↓", note: "Recorded OKR metric — be ready to explain" },
    ],
    featured: true,
  },
  {
    id: "nium",
    year: "2022",
    company: "NIUM",
    role: "Senior Software Development Engineer",
    duration: "Dec 2022 — Jun 2025",
    domain: "Fintech · Payments · Growth",
    context:
      "Cross-border payments product — transfers, cards, wallets, and content that had to stay correct across app versions.",
    built: [
      "Apple Wallet integration via native PassKit — sensitive provisioning never entered the JS layer.",
      "CMS-driven Help Centre so support could publish without store releases.",
      "BFF collaboration and contract migration with screen-by-screen rollback.",
      "Performance and growth experiments on the consumer mobile app.",
    ],
    changed: [
      "Eligibility checked before Wallet affordances render — failed taps in finance read as card failure.",
      "Content model treated as a versioned public API for a long-lived mobile install base.",
      "Support inquiries reduced after self-serve FAQ (claimed ~20% — defend measurement if asked).",
    ],
    stack: ["React Native", "TypeScript", "Swift", "PassKit", "Contentful", "Node.js BFF"],
    metrics: [
      { value: "~20%", label: "Support ↓", note: "CMS Help Centre — claimed; prepare measurement story" },
      { value: "~30%", label: "Load faster", note: "Claimed on prior resume — prepare measurement story" },
    ],
  },
  {
    id: "honeywell",
    year: "2021",
    company: "Honeywell",
    role: "Mobile Developer II",
    duration: "Nov 2021 — Dec 2022",
    domain: "Enterprise · Building automation",
    context:
      "Enterprise operators needed a reliable mobile interface to monitor and control building systems on constrained devices.",
    built: [
      "Cross-platform React Native controller for building automation.",
      "Native modules and bridging for device-level I/O.",
      "Encryption, authentication, and secure storage aligned with enterprise compliance.",
    ],
    changed: [
      "Stable production controller used in enterprise environments.",
      "Security posture treated as a product requirement, not a checklist.",
    ],
    stack: ["React Native", "TypeScript", "Native Modules", "BLE", "Encryption"],
  },
  {
    id: "greenprint",
    year: "2019",
    company: "GreenPrint Technologies",
    role: "React Native / iOS Developer",
    duration: "Jul 2019 — Oct 2021",
    domain: "Mobile product delivery",
    context: "End-to-end mobile delivery from requirements through App Store release.",
    built: [
      "Production React Native applications with native iOS collaboration.",
      "Integrations for APIs, analytics, push notifications, and maps.",
      "Testing, crash monitoring, and release hygiene for production stability.",
    ],
    changed: [
      "Foundation in the full mobile lifecycle — build, ship, observe, iterate.",
    ],
    stack: ["React Native", "Swift", "Firebase", "Maps"],
  },
];

export type FocusArea = {
  id: string;
  index: string;
  title: string;
  thesis: string;
  body: string;
  topics: string[];
};

/** Generalized domains for a 7+ yr product / mobile engineer — not project case studies */
export const focusAreas: FocusArea[] = [
  {
    id: "product-surfaces",
    index: "01",
    title: "Product surfaces",
    thesis: "Ship the path users actually walk.",
    body: "End-to-end product work across web and mobile — flows, edge cases, localization, and the boring states that decide whether people trust the app.",
    topics: ["React", "React Native", "TypeScript", "Design collaboration", "Feature flags"],
  },
  {
    id: "mobile-systems",
    index: "02",
    title: "Mobile systems",
    thesis: "Native where it earns its keep.",
    body: "Cross-platform apps with selective native modules — performance, secure storage, platform APIs, and store-safe release habits.",
    topics: ["React Native", "Swift", "Kotlin", "Native modules", "App Store / Play"],
  },
  {
    id: "platform-dx",
    index: "03",
    title: "Platform & DX",
    thesis: "Make the next feature cheaper.",
    body: "Shared infrastructure, debugging tooling, and workflows that reduce friction for product teams — adoption without forcing roadmap trade-offs.",
    topics: ["DevEx", "Shared infra", "CI/CD", "Observability", "Tooling"],
  },
  {
    id: "apis-data",
    index: "04",
    title: "APIs & data",
    thesis: "Contracts are product surface area.",
    body: "GraphQL, REST, and BFF collaboration — shaping client-friendly models, migrations that stay reversible, and clear failure modes.",
    topics: ["GraphQL", "Apollo", "REST", "BFF", "TypeScript"],
  },
];

/** Kept for resume/detail pages later — not the homepage hero of the site */
export type Project = {
  id: string;
  index: string;
  title: string;
  thesis: string;
  company: string;
  category: string;
  platforms: string;
  context: string;
  problem: string;
  approach: string;
  decision: string;
  outcome: string;
  stack: string[];
  learned?: string;
};

export const projects: Project[] = [];

export const omioFocus = {
  kicker: "Currently",
  headline: "Building product & platform at Omio.",
  body: "Travel technology across web, Android and iOS — customer-facing features, shared frontend systems, and the developer experience that keeps multi-platform work sane.",
  pillars: [
    { title: "Product", items: ["Cross-platform features", "Booking & trip experiences", "Experimentation"] },
    { title: "Platform", items: ["Internal tooling", "Shared infrastructure", "Developer workflows"] },
    { title: "Stack", items: ["React / React Native", "TypeScript", "GraphQL"] },
  ],
} as const;

export const stackGroups = [
  {
    id: "product",
    title: "Product",
    items: ["React", "React Native", "TypeScript", "Swift", "Kotlin"],
  },
  {
    id: "data",
    title: "Data & APIs",
    items: ["GraphQL", "Apollo", "REST", "Node.js", "BFF"],
  },
  {
    id: "state",
    title: "State",
    items: ["Redux", "React Query", "Zustand"],
  },
  {
    id: "observe",
    title: "Observability",
    items: ["Sentry", "Firebase", "Analytics pipelines"],
  },
  {
    id: "delivery",
    title: "Delivery",
    items: ["Fastlane", "CI/CD", "Docker", "Jest", "Detox"],
  },
  {
    id: "experiment",
    title: "Experimentation",
    items: ["Feature flags", "A/B testing", "Statsig / Flagr familiarity"],
  },
  {
    id: "content",
    title: "Content",
    items: ["Contentful"],
  },
] as const;

export const dna = [
  {
    id: "perf",
    title: "Performance",
    body: "Users feel latency as distrust. Startup, interaction delay, and stability belong in the product brief — not as polish.",
  },
  {
    id: "arch",
    title: "Architecture",
    body: "Prefer constraints that make classes of bugs impossible: typed boundaries, clear module edges, and defaults that survive deadline pressure.",
  },
  {
    id: "product",
    title: "Product thinking",
    body: "Own the path from API shape to instrumentation. Shipping and learning in production is part of the job.",
  },
  {
    id: "dx",
    title: "Developer experience",
    body: "Internal tools compete with roadmaps. If adoption costs anything meaningful, the tool loses.",
  },
  {
    id: "observe",
    title: "Observability",
    body: "If you cannot inspect state, network, and product signals while building, you will guess under pressure later.",
  },
  {
    id: "collab",
    title: "Cross-functional work",
    body: "Influence designs you do not own with evidence — usage, latency, duplication — not taste arguments.",
  },
] as const;

export const underHood = [
  {
    id: "rn-arch",
    title: "React Native architecture",
    body: "Shared business logic with platform-specific presentation. Native modules when the OS capability is the product — not by default. Design for install bases you cannot force-update.",
  },
  {
    id: "react-web",
    title: "React & modern frontend",
    body: "Component systems, data fetching boundaries, and rendering performance. Keep product code readable under change — the architecture tax must pay for itself.",
  },
  {
    id: "typescript",
    title: "TypeScript as a contract",
    body: "Types as documentation that fails the build. Domain models on the client; keep wire shapes behind adapters so migrations do not rewrite every screen.",
  },
  {
    id: "state",
    title: "State & server cache",
    body: "Redux, Zustand, React Query — pick for the problem. Remote state is not UI state. Avoid stores that invite impossible combinations.",
  },
  {
    id: "graphql",
    title: "GraphQL & Apollo",
    body: "Query design for mobile networks, cache as a product surface, and honest loading/error/empty paths. Partial data is normal — treat it deliberately.",
  },
  {
    id: "bff",
    title: "BFF & API collaboration",
    body: "Shape APIs around product needs. Prefer reversible migrations. Never mix behaviour change with contract change in the same cutover.",
  },
  {
    id: "native",
    title: "Native bridges",
    body: "Swift/Kotlin modules for payments, device I/O, and OS integrations. Keep sensitive data on the native side of the boundary when trust requires it.",
  },
  {
    id: "flags",
    title: "Flags, experiments, rollout",
    body: "Risky paths behind flags with rollback criteria written before launch. On mobile, a flag flip beats a store hotfix.",
  },
  {
    id: "i18n",
    title: "Internationalization",
    body: "Market differences as configuration, not country `if` trees. Enumerate reasons and outcomes so copy and analytics stay coherent.",
  },
  {
    id: "quality",
    title: "Quality & release",
    body: "Unit tests where logic is pure; device/E2E where the platform demands it. CI, Fastlane, and explicit residual risk for what you cannot automate.",
  },
] as const;

export const principles = [
  {
    id: "simplicity",
    title: "Complexity should earn its place",
    body: "Every abstraction, dependency, and layer must pay rent. If it only looks elegant on a whiteboard, it is debt.",
  },
  {
    id: "perf",
    title: "Performance is a product feature",
    body: "Speed and stability shape trust. Treat them as requirements with owners — not as a cleanup sprint.",
  },
  {
    id: "boundaries",
    title: "Good boundaries disappear",
    body: "When modules, APIs, and platform seams are right, feature work feels boring in the best way.",
  },
  {
    id: "ship",
    title: "Shipping is part of engineering",
    body: "Design, build, release, observe, iterate. A solution that cannot ship safely is incomplete.",
  },
  {
    id: "observe",
    title: "Observability changes how you build",
    body: "What you can see, you can improve. Blind systems invite folklore and late nights.",
  },
  {
    id: "structure",
    title: "Prefer structure over discipline",
    body: "Deadline pressure erodes checklists. Make the safe path the easy path — types, gates, and defaults.",
  },
  {
    id: "reversible",
    title: "Reversibility beats confidence",
    body: "Wrong quickly and cheaply beats right slowly. Flags, rollback, and incremental migration are craft, not fear.",
  },
  {
    id: "boring-states",
    title: "Craft shows up in boring states",
    body: "Loading, empty, error, offline, and multi-language layouts are where products earn respect.",
  },
] as const;

export const lab = [
  {
    id: "interfaces",
    title: "Interface experiments",
    tag: "WEB",
    body: "Motion, typography, and interaction studies — treating the portfolio itself as a product surface.",
  },
  {
    id: "mobile-playground",
    title: "Mobile playground",
    tag: "MOBILE",
    body: "Small React Native explorations: navigation patterns, performance profiles, and native module sketches.",
  },
  {
    id: "dx-tools",
    title: "Developer tooling ideas",
    tag: "EXPERIMENT",
    body: "Prototypes around debugging, locale switching, and inspection workflows for multi-platform teams.",
  },
  {
    id: "ai-workflow",
    title: "AI-assisted engineering",
    tag: "AI",
    body: "Practical use of AI in day-to-day coding, review, and documentation — without outsourcing judgment.",
  },
  {
    id: "writing",
    title: "Technical writing",
    tag: "WRITING",
    body: "Notes on architecture trade-offs, API design, and mobile constraints — written to clarify thinking.",
  },
  {
    id: "automation",
    title: "Automation & hardware",
    tag: "HARDWARE",
    body: "Side explorations in scripting, Raspberry Pi, and small physical builds when time allows.",
  },
] as const;

export const outside = [
  {
    id: "travel",
    title: "Travel",
    body: "Places, culture, and how products feel when the market changes under your feet.",
  },
  {
    id: "mountains",
    title: "Mountains",
    body: "Hiking and altitude — the reset that makes long engineering weeks sustainable.",
  },
  {
    id: "fitness",
    title: "Fitness",
    body: "Consistency compounds — same discipline as shipping software.",
  },
  {
    id: "learning",
    title: "Learning",
    body: "Deliberately growing backend and distributed systems depth toward Staff/Principal.",
  },
] as const;

export const contact = {
  kicker: "Contact",
  headline: "Have a hard problem?",
  sub: "Let's build something worth shipping.",
  note: "Bengaluru · Open to Senior / Staff-track product & platform conversations.",
} as const;
