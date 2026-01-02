import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 lg:px-24 py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-3 tracking-widest uppercase text-sm">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A track record of delivering impactful solutions at scale
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gray-900 border-4 border-cyan-500 rounded-full md:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-semibold mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-4 py-1.5 text-sm font-medium text-gray-400 bg-gray-800/80 rounded-full border border-gray-700">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-400 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-3 bg-cyan-500 rounded-full" />
                          <span className="group-hover:text-gray-300 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
