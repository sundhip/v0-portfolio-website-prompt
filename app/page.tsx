"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Mail, Instagram, Star, Zap, Trophy, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [activeNav, setActiveNav] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleExploreClick = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-2xl shadow-cyan-400/10" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform">
            SM
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setActiveNav("about")}
              className={`transition duration-300 relative group ${
                activeNav === "about" ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 ${
                  activeNav === "about" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
            <a
              href="#projects"
              onClick={() => setActiveNav("projects")}
              className={`transition duration-300 relative group ${
                activeNav === "projects" ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 ${
                  activeNav === "projects" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
            <a
              href="#contact"
              onClick={() => setActiveNav("contact")}
              className={`transition duration-300 relative group ${
                activeNav === "contact" ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 ${
                  activeNav === "contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with absolute positioning */}
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/image_2025-10-31_130354745.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50 hover:shadow-pink-500/50 transition-all duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-31%20at%201.00.38%20PM%20%281%29-1U2EcY830OL6amEOzBpO5IREQpyrX5.jpeg"
                  alt="M. Sundhip Manhooj"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
            M. SUNDHIP{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              MANHOOJ
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Zap className="text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} size={24} />
            <p className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text font-bold">
              Robotics • Music • Code • Innovation
            </p>
            <Star
              className="text-pink-500 animate-spin"
              style={{ animationDuration: "4s", animationDirection: "reverse" }}
              size={24}
            />
          </div>

          <button
            onClick={handleExploreClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 font-bold text-lg"
          >
            <span className="flex items-center gap-2">
              Explore My World
              <ArrowDown size={20} />
            </span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/design-mode/image.png"
            alt="Background"
            fill
            className="object-cover opacity-10"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="bg-gradient-to-br from-cyan-400/5 to-pink-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-10 mb-16 hover:border-cyan-400/40 transition-all duration-300">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              I'm <span className="text-cyan-400 font-bold">M. Sundhip Manhooj</span>, a B.Tech Computer Science Core
              student at VIT Chennai driven by curiosity, creativity, and innovation. I believe that real progress lies
              where technology meets imagination — where logic builds, and creativity brings it to life.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              From creating robots that plant trees (part of a world-record initiative) to developing{" "}
              <span className="text-pink-400 font-bold">OrganXCell</span>, a web-and-IoT platform promoting organ
              donation, I've always aimed to use tech to make a difference. My interests span robotics, automation, and
              full-stack development, with proficiency in{" "}
              <span className="text-cyan-400 font-bold">Python, C++, JavaScript, React, Django, HTML, and CSS</span>.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Beyond engineering, I'm a flutist, digital artist, and author of{" "}
              <span className="text-orange-400 font-bold">Timine</span>, a sci-fi novel exploring time, ethics, and
              human emotion. My creative side fuels my innovation — teaching me to see code as art and systems as
              stories.
            </p>
            <p className="text-xl text-gray-200 leading-relaxed font-semibold">
              I see myself not just as a developer, but as a creator who blends code, design, and emotion to craft
              meaningful experiences. Every project I build is a reflection of curiosity, precision, and the belief that
              technology can inspire change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-8 hover:from-cyan-400/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-cyan-400 group-hover:rotate-12 transition-transform" size={28} />
                <h3 className="text-2xl font-bold text-cyan-400">Technical Stack</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <Star className="text-cyan-400" size={16} /> Python, C++, JavaScript
                </p>
                <p className="flex items-center gap-2">
                  <Star className="text-cyan-400" size={16} /> HTML, CSS, React, Django
                </p>
                <p className="flex items-center gap-2">
                  <Star className="text-cyan-400" size={16} /> Robotics, Arduino, IoT
                </p>
                <p className="flex items-center gap-2">
                  <Star className="text-cyan-400" size={16} /> GitHub, Figma, VS Code
                </p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-400/30 rounded-xl p-8 hover:from-pink-500/20 hover:to-orange-500/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-pink-400 group-hover:rotate-12 transition-transform" size={28} />
                <h3 className="text-2xl font-bold text-pink-400">Creative Skills</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <Star className="text-pink-400" size={16} /> Flute Performance
                </p>
                <p className="flex items-center gap-2">
                  <Star className="text-pink-400" size={16} /> Drawing & Digital Art
                </p>
                <p className="flex items-center gap-2">
                  <Star className="text-pink-400" size={16} /> Video Editing
                </p>
                <p className="flex items-center gap-2">
                  <Star className="text-pink-400" size={16} /> Writing & Storytelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🌍",
                title: "World Record",
                desc: "Built 100 rovers that planted trees for environmental sustainability",
                color: "cyan",
              },
              {
                icon: "💻",
                title: "Tech Innovation",
                desc: "Co-created an organ donation awareness website using modern web technologies",
                color: "pink",
              },
              {
                icon: "🎶",
                title: "Cultural Excellence",
                desc: "2nd place in flute competition among 18 schools",
                color: "orange",
              },
              {
                icon: "📚",
                title: "Author",
                desc: 'Published "Timine" - a novel blending imagination and futuristic ideas',
                color: "blue",
              },
            ].map((achievement, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(`achievement-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group bg-gray-900/40 backdrop-blur-sm border transition-all duration-300 rounded-xl p-8 cursor-pointer transform hover:scale-105 ${
                  achievement.color === "cyan"
                    ? "border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
                    : achievement.color === "pink"
                      ? "border-pink-400/20 hover:border-pink-400/50 hover:bg-pink-400/10 hover:shadow-lg hover:shadow-pink-400/20"
                      : achievement.color === "orange"
                        ? "border-orange-400/20 hover:border-orange-400/50 hover:bg-orange-400/10 hover:shadow-lg hover:shadow-orange-400/20"
                        : "border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-400/10 hover:shadow-lg hover:shadow-blue-400/20"
                }`}
              >
                <div className={`text-5xl mb-4 transform group-hover:scale-125 transition-transform`}>
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-300 leading-relaxed">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-xl text-gray-300 mb-8">Where creativity meets code.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Tree-Planting Rovers",
                tagline: "100 synchronized rovers planting trees",
                tech: ["Arduino", "C++", "Sensors"],
                icon: "🤖",
                slug: "tree-rovers",
              },
              {
                title: "OrganXCell",
                tagline: "IoT + web platform for donor awareness",
                tech: ["Django", "Python", "IoT"],
                icon: "🏥",
                slug: "organxcell",
              },
              {
                title: "Timine",
                tagline: "A sci-fi novel about time & morality",
                tech: ["Writing", "World-building", "Design"],
                icon: "📖",
                slug: "timine",
              },
            ].map((project, idx) => (
              <Link key={idx} href={`/projects/${project.slug}`}>
                <div className="group h-full bg-gradient-to-br from-cyan-400/5 to-pink-500/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-black mb-2 text-cyan-400 group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm group-hover:gap-3 transition-all">
                    View Project →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="space-y-8">
            <div className="group bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 rounded-xl p-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">Vellore Institute of Technology (VIT) Chennai</h3>
                  <p className="text-gray-300 text-lg mt-2">B.Tech - First Year Student</p>
                </div>
                <span className="text-sm font-bold text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">2025–2029</span>
              </div>
            </div>

            <div className="group bg-gray-900/40 backdrop-blur-sm border border-pink-400/20 hover:border-pink-400/50 rounded-xl p-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/20">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-pink-400">Maharishi Vidya Mandir (MVM)</h3>
                  <div className="space-y-2 text-gray-300 mt-4 text-lg">
                    <p className="flex items-center gap-2">
                      <BookOpen size={18} className="text-pink-400" /> 12th Grade: 95%
                    </p>
                    <p className="flex items-center gap-2">
                      <BookOpen size={18} className="text-pink-400" /> 10th Grade: 92%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
            Interested in collaborating or just want to chat? Let's create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a
              href="mailto:sundhipmanhooj@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
              <span>Email Me</span>
            </a>
            <a
              href="https://github.com/sundhip"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://instagram.com/s_m_dude"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-full hover:bg-pink-400/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-400/50"
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
          </div>

          <p className="text-gray-500 text-sm font-medium">© 2025 M. Sundhip Manhooj. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}
