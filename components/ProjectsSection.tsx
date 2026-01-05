'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, ExternalLink, Star, Eye, Code2 } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all')
  const sectionRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'system', name: 'System Design' }
  ]

  const projects = [
    {
      id: 1,
      title: 'MoneyMate',
      description: 'MoneyMate is a personal finance management application that helps users track income and expenses, organize transactions by categories, and visualize spending patterns through interactive charts and analytics. It provides a centralized dashboard with personalized insights and spending trends. The system simplifies budgeting by offering quick access to transactions, spending breakdowns',
      image: '/photoes/MoneyMate.png',
      category: 'fullstack',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React'],
      github: 'https://github.com/Krushit-Babariya/Money-Mate.git',
      live: '',
      features: ['Expense Sharing', 'Simplify Debt Among Members']
    },
    {
      id: 2,
      title: 'Quick Split : Split your expenses quickly',
      description: 'A fintech web app for seamless group expense management, featuring automated debt calculations, customizable expense splits, dynamic debt simplification, and personalized user profiles. Built with Java, Spring Boot, and SQL for a robust backend, and a responsive JavaScript front-end for an intuitive user experience',
      image: '/photoes/QuickSplitHome.png',
      category: 'fullstack',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript'],
      github: 'https://github.com/Krushit-Babariya/Quick-Split.git',
      live: '',
      features: ['Expense Sharing', 'Simplify Debt Among Members']
    },
    {
      id: 3,
      title: 'Ride Hailing System',
      description: ' Developedafull-stack backend system for aride hailing platform similar to Uber using Java, Servlets to manage user interactions, ride bookings, and real-time status tracking. Integrated JPA (Hibernate) for ORM and MySQL as the relational database. Used Flyway for database version control and schema migrations',
      image: '/photoes/RideHailingSystem.png',
      category: 'web',
      technologies: ['Java', 'Spring Boot', 'JSP', 'Hibernate', 'MySQL'],
      github: 'https://github.com/Krushit-Babariya/Altus.git',
      features: ['User Authentication', 'Ride Booking', 'Real-time Status Tracking', 'Admin Dashboard']
    },
    {
      id: 4,
      title: 'Blood Bank Management System',
      description: 'Developed a web application to connect blood donors and banks using Java, JSP, Servlets, and JDBC. Implemented features like blood camp management, email notifications using JavaMail, and bot protection via Google reCAPTCHA. Used Bootstrap, jQuery, and Maven for a responsive UI and project management.',
      image: '/photoes/BloodBankMgmtSystem.jpg',
      category: 'web',
      technologies: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'jQuery'],
      github: 'https://github.com/Krushit-Babariya/Blood-Bank-Management-System.git',
      live: '',
      features: ['Organize Blood Donation Camp', 'Donate Blood from Home via booking slot from near organization']
    },
    {
      id: 5,
      title: 'Health Insurance System: Microservice Project',
      description: 'Designed and developed a Health Insurance System using a microservices architecture to streamline insurance pro cesses, including application registration, eligibility determination, data collection, and beneficiary manage ment. Integrated services such as correspondence generation and administrative functionalities, ensuring scalability and modularity through Spring Boot and Eureka Server.',
      image: '/photoes/HeathInsSystem.png',
      category: 'mobile',
      technologies: ['Java', 'Spring Boot'],
      github: 'https://github.com/Krushit-Babariya/Health-Insurance-System.git',
      features: ['Microservice Architecture', 'Application Registraction', 'Data Collection', 'Administrative Functionalities']
    }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectsRef.current?.children || [],
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects, demonstrating my skills in full-stack development, 
            mobile applications, and system design
          </p>
        </div>

        <div ref={projectsRef} className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-[40%] h-48 md:h-auto min-h-[200px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:hidden"></div>
              </div>

              <div className="w-full md:w-[60%] p-4 md:p-5 flex flex-col justify-between">
                <div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg shadow-blue-500/25"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/Krushit-Babariya/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/25"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
