import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sachin Kumar Kaniyaru",
  description:
    "Get in touch with Sachin Kuamr Kaniyaru, a Senior Full-Stack Engineer.",
};

const contactMethods = [
  {
    name: "Email",
    value: "sachinkaniyar@gmail.com",
    href: "mailto:sachinkaniyar@gmail.com",
    description: "For professional inquiries and opportunities",
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "github.com/sachin-salian",
    href: "https://github.com/sachin-salian",
    description: "Check out my open-source work and contributions",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/sachinsaliank",
    href: "https://www.linkedin.com/in/sachinsaliank/",
    description: "Connect with me professionally",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#030712] pt-32 min-h-screen">
        <section className="relative px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
          {/* Background gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

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
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 opacity-0 animate-fade-in-up delay-100">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-16 opacity-0 animate-fade-in-up delay-200">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a conversation about technology and
              software engineering.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 opacity-0 animate-fade-in-up delay-300">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.name !== "Email" ? "_blank" : undefined}
                  rel={
                    method.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="group p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02]"
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                    {method.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {method.name}
                  </h2>
                  <p className="text-cyan-400 text-sm mb-3 font-medium">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {method.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Availability Card */}
            {/* <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-2xl border border-gray-800 overflow-hidden opacity-0 animate-fade-in-up delay-400">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-emerald-400 font-semibold">
                      Available for work
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-100 mb-4">
                    Open to New Opportunities
                  </h2>
                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    Whether you have a specific role in mind, an exciting
                    project, or just want to explore possibilities, I&apos;d
                    love to hear from you. I typically respond within 24-48
                    hours.
                  </p>
                </div>
                <a
                  href="mailto:sachinkaniyar@gmail.com"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  Send Message
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
