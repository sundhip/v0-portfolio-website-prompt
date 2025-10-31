"use client"

import Image from "next/image"
import { ArrowDown, Github, Mail, Instagram } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            SM
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with absolute positioning */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-10-31_130354745-97clQ5UtxPrpamNUEXZspdqrN6Xs8x.png"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-400 shadow-2xl shadow-cyan-400/50">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-31%20at%201.00.38%20PM-hz9pSh1R8m0ax56FvCUoT60mKpacSx.jpeg"
                alt="M. Sundhip Manhooj"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            M. SUNDHIP{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              MANHOOJ
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Robotics • Music • Code • Innovation</p>
          <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 font-semibold">
            Explore My World
            <ArrowDown className="group-hover:translate-y-1 transition" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dorWls94eNzvitZgaOU6hAQAcSaGft.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 mb-12">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Hello! I'm <span className="text-cyan-400 font-semibold">M. Sundhip Manhooj</span>, a VIT Chennai student
              who sees the world in code and color. My life is a balance sheet: fluent in Python, HTML/CSS, React,
              Django, C++, and JavaScript, yet equally driven by the melodic complexity of the flute and the precision
              of archery.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I transform raw ideas into engaging realities, whether through award-winning robotics work—including
              securing a <span className="text-pink-500 font-semibold">World Record for tree-planting rovers</span>—or
              through digital art, video editing, and compelling content creation.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              I'm not just building projects; I'm building impact. For me, innovation, creativity, and mastery aren't
              just goals—they're a way of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Technical Stack</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Python, C++, JavaScript</p>
                <p>• HTML, CSS, React, Django</p>
                <p>• Robotics, Arduino, IoT</p>
                <p>• GitHub, Figma, VS Code</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Creative Skills</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Flute Performance</p>
                <p>• Drawing & Digital Art</p>
                <p>• Video Editing</p>
                <p>• Writing & Storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg p-6 transition duration-300">
              <div className="text-cyan-400 text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-bold mb-2">World Record</h3>
              <p className="text-gray-300">Built 100 rovers that planted trees for environmental sustainability</p>
            </div>
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-pink-400/20 hover:border-pink-400/50 rounded-lg p-6 transition duration-300">
              <div className="text-pink-400 text-3xl mb-3">💻</div>
              <h3 className="text-xl font-bold mb-2">Tech Innovation</h3>
              <p className="text-gray-300">
                Co-created an organ donation awareness website using modern web technologies
              </p>
            </div>
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-orange-400/20 hover:border-orange-400/50 rounded-lg p-6 transition duration-300">
              <div className="text-orange-400 text-3xl mb-3">🎶</div>
              <h3 className="text-xl font-bold mb-2">Cultural Excellence</h3>
              <p className="text-gray-300">2nd place in flute competition among 18 schools</p>
            </div>
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/50 rounded-lg p-6 transition duration-300">
              <div className="text-blue-400 text-3xl mb-3">📚</div>
              <h3 className="text-xl font-bold mb-2">Author</h3>
              <p className="text-gray-300">Published "Timine" - a novel blending imagination and futuristic ideas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="space-y-6">
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 rounded-lg p-8 transition duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Organ Donation Awareness Platform</h3>
              <p className="text-gray-300 mb-4">
                A web platform promoting organ donation with educational resources and a pledge form
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm">Django</span>
              </div>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm border border-pink-400/20 hover:border-pink-400/50 rounded-lg p-8 transition duration-300">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Timine - Novel Publication</h3>
              <p className="text-gray-300 mb-4">
                A creative and philosophical novel blending imagination with futuristic concepts and innovative
                storytelling
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-400/20 text-pink-300 rounded-full text-sm">Writing</span>
                <span className="px-3 py-1 bg-pink-400/20 text-pink-300 rounded-full text-sm">Storytelling</span>
                <span className="px-3 py-1 bg-pink-400/20 text-pink-300 rounded-full text-sm">Publishing</span>
              </div>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm border border-orange-400/20 hover:border-orange-400/50 rounded-lg p-8 transition duration-300">
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Robotics Projects</h3>
              <p className="text-gray-300 mb-4">
                Multiple innovative robots exploring automation, sensor integration, and environmental sustainability
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-400/20 text-orange-300 rounded-full text-sm">Arduino</span>
                <span className="px-3 py-1 bg-orange-400/20 text-orange-300 rounded-full text-sm">Robotics</span>
                <span className="px-3 py-1 bg-orange-400/20 text-orange-300 rounded-full text-sm">IoT</span>
                <span className="px-3 py-1 bg-orange-400/20 text-orange-300 rounded-full text-sm">C++</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-cyan-400">Vellore Institute of Technology (VIT) Chennai</h3>
                <span className="text-sm text-gray-400">2025–2029</span>
              </div>
              <p className="text-gray-300">B.Tech - First Year Student</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-400/20 rounded-lg p-8">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-pink-400">Maharishi Vidya Mandir (MVM)</h3>
              </div>
              <div className="space-y-1 text-gray-300">
                <p>12th Grade: 95%</p>
                <p>10th Grade: 92%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Interested in collaborating or just want to chat? Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href="mailto:sundhipmanhooj@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://github.com/sundhip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://instagram.com/s_m_dude"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400/10 transition"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>

          <p className="text-gray-500 text-sm">© 2025 M. Sundhip Manhooj. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}
