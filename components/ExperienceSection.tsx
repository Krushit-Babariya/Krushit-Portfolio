'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.children || [],
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        '.timeline-line',
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const experiences = [
    {
      title: 'Java Full Stack Developer',
      company: 'Finlogic Technologies (NJ Group)',
      location: 'Surat, Gujarat',
      period: 'Jul 2025 - Present',
      type: 'Full-time',
      description: 'Worked as a Full Stack Java Developer, gaining hands-onexperience with Spring and Spring Boot frameworks. Developed expertise in the Insurance domain by integrating multiple third-party services, optimizing existing codebases, and leading migration efforts from Spring 5 to Spring 6 with React for modernized, high-performance applications.',
      achievements: [
        'Successfully integrated multiple third-party insurance provider services using REST APIs, ensuring secure and reliable data exchange',
        'Enhanced system scalability and response time by optimizing backend microservices and reducing redundant API calls',
        'Improved overall application performance by nearly 40% through code refactoring, query optimization, and efficient database indexing'
      ],
      technologies: ['Java', 'Spring', 'Spring MVC', 'Spring Boot', 'React', 'MySQL', 'Oracle']
    },
    {
      title: 'Sofware Engineer Trainee',
      company: 'Narola Infotech',
      location: 'Surat, Gujarat',
      period: 'Jan 2025 - Jun 2025',
      type: 'Internship',
      description: ' Worked as a Java Developer Intern, gain experience in Java, Advance Java Technologies. Developed backend applications, working closely with product managers and designers to deliver high-quality user experiences.',
      achievements: [
        'Built a real-time e-shipping platform',
        'Designed and implemented RESTful APIs'
      ],
      technologies: ['Java', 'Spring boot', 'React', 'MySQL', 'PostgreSQL']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Gujarat Technological University',
      location: 'Surat, Gujarat',
      period: '2021 - 2025',
      gpa: '8.99/10',
      description: 'Focused on Data Structure & Algorithms, Object-Oriented Programming, Computer Network, Database Management, Operating System.'
    }
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 timeline-line origin-top"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 sm:border-4 border-gray-900 z-10"></div>
                <div className="ml-12 sm:ml-16 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} className="sm:w-4 sm:h-4" />
                          <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-sm sm:text-base">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 sm:gap-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        <span className="font-semibold text-sm sm:text-base">{exp.period}</span>
                      </div>
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center gap-2">
                      <Award size={16} className="sm:w-5 sm:h-5 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                          <span className="text-blue-400 mt-1 sm:mt-2 text-xs">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Building2 size={24} className="text-blue-400" />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-gray-300 mt-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2">GPA: {edu.gpa}</p>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
