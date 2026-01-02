import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="opacity-0 animate-fade-in-up text-cyan-400 font-medium mb-4 tracking-widest uppercase text-sm">
              Hello, I&apos;m
            </p>
            <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Sachin Kumar Kaniyaru</span>
            </h1>
            <h2 className="opacity-0 animate-fade-in-up delay-200 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-6">
              Senior Full-Stack Engineer (Mobile & Web)
            </h2>
            <p className="opacity-0 animate-fade-in-up delay-300 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              I build high-performance mobile and web applications with a focus
              on React Native, React, and scalable backend systems. I enjoy
              solving complex engineering problems and delivering reliable,
              user-focused products at scale.
            </p>
            <div className="opacity-0 animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/Sachin_Resume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-900 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </span>
              </a>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-gray-100 font-semibold rounded-xl transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 animate-border-dance"
              >
                <span className="flex items-center gap-2">
                  View Projects
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
                </span>
              </Link>
            </div>

            {/* Tech stack badges */}
            <div className="opacity-0 animate-fade-in-up delay-500 mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
              {["React Native", "React", "TypeScript", "Node.js", "AWS"].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Profile Avatar */}
          <div className="opacity-0 animate-scale-in delay-300 relative flex-shrink-0">
            <div className="relative">
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full blur-2xl opacity-30 animate-pulse-glow" />

              {/* Avatar container with gradient */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 animate-float">
                {/* Gradient background with initials */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-violet-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-white/90">
                    SK
                  </span>
                </div> */}

                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Decorative ring */}
              <div
                className="absolute -inset-4 border-2 border-dashed border-cyan-500/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              />

              {/* Status badge */}
              {/* <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-300">
                  Open to opportunities
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
