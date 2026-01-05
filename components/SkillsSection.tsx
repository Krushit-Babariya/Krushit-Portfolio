'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Code2,
  Database,
  Layers
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        skillsRef.current?.children || [],
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

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skillCategories = [
    {
      title: 'Languages and Tools',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', icon: 'java' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Python', icon: 'python' },
        { name: 'C', icon: 'c' },
        { name: 'Git', icon: 'git' },
        { name: 'Html', icon: 'html' },
        { name: 'CSS', icon: 'css' }
      ]
    },
    {
      title: 'Frameworks and Libraries',
      icon: Layers,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Spring', icon: 'spring' },
        { name: 'React', icon: 'react' }
      ]
    },
    {
      title: 'Databases and Others',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Redis', icon: 'redis' },
        { name: 'AWS', icon: 'aws' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Kafka', icon: 'kafka' },
        { name: 'Jenkins', icon: 'jenkins' },
      ]
    }
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across
            different domains of software development
          </p>
        </div>
        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="text-center group"
            >
              <div className="flex items-center justify-center mb-8">
                <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
              </div>

              <div className="grid grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center p-2 sm:p-3 hover:scale-110 transition-transform duration-300 group/skill"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-3 group-hover/skill:scale-110 transition-transform duration-300">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="w-full h-full bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
