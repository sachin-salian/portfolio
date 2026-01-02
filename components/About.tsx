export default function About() {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "2M+", label: "Users Impacted" },
    { value: "Multiple", label: "Domains" },
  ];

  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-24 py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left side - Title and description */}
          <div className="flex-1">
            <p className="text-cyan-400 font-medium mb-3 tracking-widest uppercase text-sm">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
              Crafting Digital
              <span className="block gradient-text">Experiences</span>
            </h2>
            <div className="space-y-5 text-lg text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Senior Full-Stack Engineer with 6+ years of
                experience building production-grade mobile and web
                applications, with a strong focus on React Native, React, and
                scalable backend systems.
              </p>
              <p>
                I&apos;ve worked across fintech and enterprise domains,
                contributing to products used globally. My work spans
                performance optimization, security, system design, and owning
                features end-to-end from concept to deployment.
              </p>
              <p>
                I enjoy solving complex engineering problems, improving system
                reliability, and writing clean, maintainable code. I value
                thoughtful architecture, collaboration, and continuous learning.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I do section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              title: "Web Development",
              description:
                "Building fast, responsive web applications with modern frameworks and best practices.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
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
              title: "Mobile Development",
              description:
                "Creating native-quality mobile experiences for iOS and Android platforms.",
            },
            {
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              ),
              title: "System Architecture",
              description:
                "Designing scalable backend systems and cloud infrastructure that handle millions of requests.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-gray-900/30 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:bg-gray-900/50 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
