"use client"

import Link from "next/link"
import { ArrowLeft, Zap, BookOpen, Code2 } from "lucide-react"
import { notFound } from "next/navigation"

interface Project {
  slug: string
  title: string
  type: string
  tagline: string
  heroDescription: string
  year: number
  role: string
  techStack: string[]
  overview: string
  problem: string
  problemBullets?: string[]
  approach: string
  approachPoints?: { title: string; description: string }[]
  implementationHighlights?: { title: string; description: string }[]
  challenges?: { title: string; description: string; solution: string }[]
  impact?: string
  metrics?: { value: string; label: string }[]
  learnings?: string[]
}

interface ProjectDetailPageClientProps {
  project: Project | undefined
}

export default function ProjectDetailPageClient({ project }: ProjectDetailPageClientProps) {
  if (!project) {
    notFound()
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
          <h1 className="text-center text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text">
            {project.title}
          </h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-black" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-bold mb-4">
            {project.type}
          </span>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">{project.tagline}</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{project.heroDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-cyan-400/5 to-pink-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 space-y-6">
              {/* Quick Facts */}
              <div>
                <h3 className="text-sm font-black text-cyan-400 mb-4 uppercase tracking-wider">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">Year</p>
                    <p className="text-gray-200 font-bold">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Type</p>
                    <p className="text-gray-200 font-bold">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Role</p>
                    <p className="text-gray-200 font-bold">{project.role}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              {project.slug === "timine" ? (
                <div>
                  <h3 className="text-sm font-black text-pink-400 mb-4 uppercase tracking-wider">Tools Used</h3>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">📝 Google Docs & Word</p>
                    <p className="text-xs text-gray-400">✨ Grammarly Premium</p>
                    <p className="text-xs text-gray-400">🔍 Turnitin / Quetext</p>
                    <p className="text-xs text-gray-400">📊 ProWritingAid</p>
                    <p className="text-xs text-gray-400">🎨 Canva & Figma</p>
                    <p className="text-xs text-gray-400">☁️ Google Drive & Notion</p>
                    <p className="text-xs text-gray-400">📚 Wattpad</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-sm font-black text-pink-400 mb-4 uppercase tracking-wider">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-pink-400/10 text-pink-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-4xl font-black mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  Overview
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.overview}</p>
            </div>

            {/* Problem Statement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-cyan-400" size={28} />
                <h2 className="text-4xl font-black text-cyan-400">Problem Statement</h2>
              </div>
              <div className="bg-cyan-400/5 border border-cyan-400/20 rounded-xl p-6">
                <p className="text-lg text-gray-300 leading-relaxed">{project.problem}</p>
                {project.problemBullets && (
                  <ul className="mt-4 space-y-2">
                    {project.problemBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-cyan-400 font-bold mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Approach */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                {project.slug === "timine" ? (
                  <BookOpen className="text-pink-400" size={28} />
                ) : (
                  <Code2 className="text-pink-400" size={28} />
                )}
                <h2 className="text-4xl font-black text-pink-400">Approach & Design</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">{project.approach}</p>
              {project.approachPoints && (
                <div className="grid md:grid-cols-2 gap-4">
                  {project.approachPoints.map((point, idx) => (
                    <div key={idx} className="bg-pink-400/5 border border-pink-400/20 rounded-lg p-4">
                      <h3 className="text-pink-400 font-bold mb-2">{point.title}</h3>
                      <p className="text-gray-300 text-sm">{point.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {project.slug === "timine" && (
              <div>
                <h2 className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    Tools & Workflow
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: "🖋",
                      name: "Google Docs & Microsoft Word",
                      desc: "Drafting, editing, and version control across chapters",
                    },
                    { icon: "🧠", name: "Grammarly Premium", desc: "Advanced grammar, tone, and clarity optimization" },
                    {
                      icon: "🔍",
                      name: "Turnitin / Quetext",
                      desc: "Plagiarism and originality checking for authenticity",
                    },
                    {
                      icon: "🧩",
                      name: "ProWritingAid",
                      desc: "Syntax, readability, and narrative consistency analysis",
                    },
                    {
                      icon: "🎨",
                      name: "Canva & Figma",
                      desc: "Cover design, typography mockups, and promotional visuals",
                    },
                    {
                      icon: "☁️",
                      name: "Google Drive & Notion",
                      desc: "Organizing timelines, research material, and character references",
                    },
                    {
                      icon: "📚",
                      name: "Wattpad",
                      desc: "Publishing and reader engagement platform for continuous improvement",
                    },
                  ].map((tool, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-cyan-400/5 to-violet-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-5 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105 group"
                      style={{
                        animation: `slideUpGlow 0.6s ease-out ${idx * 0.1}s both`,
                      }}
                    >
                      <div className="text-3xl mb-3 group-hover:animate-pulse">{tool.icon}</div>
                      <h3 className="font-bold text-cyan-300 mb-2">{tool.name}</h3>
                      <p className="text-gray-400 text-sm">{tool.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-cyan-400/5 to-violet-500/5 border border-cyan-400/20 rounded-xl p-6">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    The creation of <span className="text-cyan-400 font-bold">Timine</span> combined creativity with
                    discipline. Every chapter passed through grammar and plagiarism checks, readability tools, and
                    stylistic refinement before publication on Wattpad. Each tool played a crucial role — ensuring
                    accuracy, originality, and aesthetic excellence from concept to final release.
                  </p>
                </div>
              </div>
            )}

            {/* Implementation Highlights */}
            {project.implementationHighlights && (
              <div>
                <h2 className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                    Implementation Highlights
                  </span>
                </h2>
                <div className="space-y-4">
                  {project.implementationHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-400/20 text-cyan-400 font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-200 mb-1">{highlight.title}</h3>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div>
                <h2 className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Challenges & Solutions
                  </span>
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-pink-400/5 to-orange-400/5 border border-pink-400/20 rounded-lg p-6"
                    >
                      <h3 className="text-pink-400 font-bold mb-2">Challenge: {challenge.title}</h3>
                      <p className="text-gray-300 mb-3">{challenge.description}</p>
                      <p className="text-orange-400 font-semibold">Solution: {challenge.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact & Results */}
            {project.impact && (
              <div>
                <h2 className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Impact & Results
                  </span>
                </h2>
                <div className="bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border border-cyan-400/20 rounded-xl p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">{project.impact}</p>
                  {project.metrics && (
                    <div className="mt-6 grid md:grid-cols-3 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-black/50 rounded-lg p-4 text-center">
                          <div className="text-3xl font-black text-cyan-400 mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && (
              <div>
                <h2 className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Learnings & Next Steps
                  </span>
                </h2>
                <div className="space-y-3">
                  {project.learnings.map((learning, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-pink-400 font-bold text-lg mt-1">✓</span>
                      {learning}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="border-t border-cyan-400/20 pt-8">
              <h2 className="text-3xl font-black mb-6">Ready to collaborate?</h2>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-110"
                >
                  Discuss This Project
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
