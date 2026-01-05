'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Download, Github, Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, subtitleRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20 sm:pt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-4 lg:space-y-6">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight break-words"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Krushit Babariya
              </span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-300 leading-relaxed">
              Full Stack Java Developer
            </h2>
          </div>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-6 sm:mb-8"
          >
            Java Developer specializing in scalable, high-performance applications using Core Java, Spring, and Spring Boot. Experienced in REST APIs, microservices, Docker, Kubernetes, and modern DevOps tools.
          </p>

          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/resume.pdf"
              download="Krushit Babariya - Resume.pdf"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base inline-flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <Download size={18} className="sm:w-5 sm:h-5" />
                Download Resume
              </span>
            </a>
          </div>

          <div className="flex gap-6 mt-6 sm:mt-8">
            <a
              href="https://github.com/Krushit-Babariya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="www.linkedin.com/in/krushit-babariya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div ref={imageRef} className="relative">
          <div className="relative w-full h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">krushit-portfolio.js</span>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-blue-400">
                    <span className="text-purple-400">const</span> developer = {'{'}
                  </div>
                  <div className="ml-4 text-green-400">
                    name: <span className="text-yellow-400">'Krushit Babariya'</span>,
                  </div>
                  <div className="ml-4 text-green-400">
                    role: <span className="text-yellow-400">'Full Stack Developer'</span>,
                  </div>
                  <div className="ml-4 text-green-400">
                    skills: <span className="text-yellow-400">['Java', 'Spring Boot', 'React']</span>,
                  </div>
                  <div className="ml-4 text-green-400">
                    passion: <span className="text-yellow-400">'Building amazing things'</span>
                  </div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
