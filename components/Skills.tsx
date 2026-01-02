const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    skills: [
      { name: "React", proficiency: "Expert" },
      { name: "Next.js", proficiency: "Advanced" },
      { name: "TypeScript", proficiency: "Advanced" },
      { name: "Tailwind CSS", proficiency: "Advanced" },
      { name: "Redux", proficiency: "Advanced" },
      { name: "GraphQL", proficiency: "Proficient" },
    ],
  },
  {
    title: "Mobile",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      { name: "React Native", proficiency: "Expert" },
      { name: "iOS (Swift)", proficiency: "Proficient" },
      { name: "Android (Kotlin)", proficiency: "Proficient" },
      { name: "Expo", proficiency: "Advanced" },
      { name: "App Store Deployment", proficiency: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
        />
      </svg>
    ),
    skills: [
      { name: "Node.js (BFF)", proficiency: "Advanced" },
      { name: "REST APIs", proficiency: "Expert" },
      { name: "PostgreSQL", proficiency: "Advanced" },
      { name: "Redis", proficiency: "Proficient" },
      { name: "Python", proficiency: "Working Knowledge" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    skills: [
      { name: "CI/CD", proficiency: "Advanced" },
      { name: "Docker", proficiency: "Advanced" },
      { name: "AWS", proficiency: "Proficient" },
      { name: "Git", proficiency: "Expert" },
    ],
  },
];

const proficiencyMap = {
  Expert: 90,
  Advanced: 75,
  Proficient: 60,
  "Working Knowledge": 45,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 lg:px-24 py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-3 tracking-widest uppercase text-sm">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of solving real-world
            problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-8 bg-gray-900/30 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/5"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover/skill:text-cyan-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.proficiency}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${proficiencyMap[skill.proficiency]}%`,
                          animationDelay: `${
                            categoryIndex * 0.1 + skillIndex * 0.05
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
