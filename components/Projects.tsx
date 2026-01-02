import { projects, Project } from "@/data/projects";
import Link from "next/link";

interface ProjectsProps {
  limit?: number;
  showTitle?: boolean;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="group relative p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02] overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project number */}
      <div className="absolute top-6 right-6 text-6xl font-bold text-gray-800/50 group-hover:text-cyan-500/20 transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-100 mb-6 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Problem
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-violet-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="text-sm font-semibold text-violet-400 uppercase tracking-wider">
                Ownership
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">{project.ownership}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                Impact
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">{project.outcome}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800/80 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ limit, showTitle = true }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  const hasMore = limit && projects.length > limit;

  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:px-24 py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {showTitle && (
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-3 tracking-widest uppercase text-sm">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Selected work demonstrating end-to-end ownership, system design,
              and impact at scale
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 text-cyan-400 font-semibold border-2 border-cyan-500/50 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
            >
              View All Projects
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
