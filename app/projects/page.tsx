"use client"
import Link from "next/link"
import { projects } from "@/lib/projects-data"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation Back */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* All Projects Grid */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              My Creations
            </span>
          </h1>
          <p className="text-center text-xl text-gray-300 mb-16">
            Every project is a story — told through code, design, and purpose.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <div className="group h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 hover:scale-105 cursor-pointer">
                  {/* Project Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-cyan-400/10 to-pink-500/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-pink-500/20 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl opacity-50 group-hover:opacity-100 transition-opacity">
                        {project.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-pink-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{project.tagline}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.excerpt}</p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.slice(0, 3).map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-300 rounded-full group-hover:bg-cyan-400/40 transition-colors"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-cyan-400/10">
                      <span className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group-hover:gap-3 transition-all">
                        View Project
                        <ExternalLink size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
