'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Coffee, Rocket, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        statsRef.current?.children || [],
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])


  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center text-justify">
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
              I am a backend developer proficient in Core Java and Spring Boot, with experience in building microservices-based systems and developing RESTful APIs. I have hands-on expertise in working with databases such as MySQL, and I am comfortable using tools and technologies like Git, Docker, and AWS to build, deploy, and manage scalable backend applications efficiently.
              </p>
              
              <p>
              Alongside my development experience, I have a solid foundation in data structures and algorithms, which enables me to write optimized, efficient, and scalable code. I actively apply strong problem-solving skills to analyze requirements, debug complex issues, and implement reliable solutions that meet both functional and performance needs.
              </p>
              
              <p>
              I also possess a good understanding of system design principles, including API design, database modeling, scalability, and performance optimization. This combination of backend development expertise, problem-solving ability, and system design knowledge allows me to build robust, maintainable, and high-performance backend applications that scale effectively in real-world environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
                <span className="text-blue-400 font-semibold">Location:</span>
                <span className="text-gray-300 ml-2">Remote / India</span>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
                <span className="text-purple-400 font-semibold">Available:</span>
                <span className="text-gray-300 ml-2">For Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
