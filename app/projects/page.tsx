import Link from "next/link";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Your Name",
  description:
    "Featured projects and work by Your Name, a Senior Full-Stack Engineer.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#030712] pt-32">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 lg:px-24 pb-16 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <Link
              href="/"
              className="group inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
            <p className="text-cyan-400 font-medium mb-3 tracking-widest uppercase text-sm opacity-0 animate-fade-in-up">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 opacity-0 animate-fade-in-up delay-100">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200">
              A comprehensive collection of projects I&apos;ve worked on throughout my career.
              Each project represents a unique challenge and demonstrates my
              approach to solving complex problems.
            </p>
          </div>
        </section>

        <Projects showTitle={false} />
      </main>
      <Footer />
    </>
  );
}
