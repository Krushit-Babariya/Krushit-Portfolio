'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Database, 
  Scale, 
  Shield, 
  Zap,
  Eye,
  Github,
  ExternalLink
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function SystemDesignSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const designsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        designsRef.current?.children || [],
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
  }, [])

  const systemDesigns = [
    {
      title: 'Uber : Ride-Sharing Platform',
      description: 'A real-time ride-sharing platform handling 30 million daily rides with 180 million monthly active users and processing 1 million requests per second during peak hours. The system matches riders with nearest available drivers within 1 minute of request submission, ensuring strong consistency to prevent driver double-assignment. Designed to handle up to 100,000 simultaneous ride requests from the same geographic location during peak hours with geographic sharding and redundancy',
      image: '/photoes/Uber.png',
      complexity: 'High',
      features: [
        'Fare estimation before booking based on pickup and destination',
        'Automatic driver-rider matching with nearest available driver',
        'Driver ability to accept or decline ride requests',
        'Driver availability toggle (online/offline)',
        'Real-time location and status tracking on map interface',
        'View all available drivers/cabs in vicinity before requesting',
        'Secure payment transactions and automatic digital receipts',
        'Rating system for both riders and drivers',
        'Ride scheduling in advance for future dates and times',
        'Multiple ride categories (UberGo, Sedan, XL, Premium)',
        'Turn-by-turn navigation for drivers',
        'Geographic sharding for regional scalability',
        'High-throughput location query processing (100K updates/sec)'
      ],
      diagram: '/photoes/Uber_HLD.png',
      github: 'https://github.com/Krushit-Babariya/High-Level-System-Design/tree/main/Uber'
    },
    {
      title: 'WhatsApp : Messaging Platform',
      description: 'A real-time messaging platform handling 150 billion messages per day with 3.14 billion monthly active users and 700 million concurrent connections. The system ensures message delivery within 1 second under normal network conditions with 99.99% uptime across all regions. Built with Erlang/BEAM architecture supporting horizontal scaling and end-to-end encryption using Signal Protocol, with efficient binary protocols (FunXMPP) minimizing bandwidth usage.',
      image: '/photoes/WhatsApp.png',
      complexity: 'High',
      features: [
        'Real-time text messaging with end-to-end encryption',
        'One-on-one and group voice/video calls with low latency',
        'Multimedia file sharing (images, videos, audio, documents) up to 2GB',
        'Group chats supporting up to 1024 participants',
        'Online/offline status and last seen timestamp tracking',
        'Message delivery status with checkmarks (sent, delivered, read)',
        'Offline message storage and delivery when users come online',
        'Group voice and video calls with multiple participants',
        'Live location sharing with contacts',
        'Status updates (stories) that disappear after 24 hours',
        'Communities to organize multiple groups',
        'Disappearing messages that auto-delete after set time',
        'WhatsApp Pay for payments (in select countries)',
        'Cloud backup for chat history'
      ],
      diagram: '/photoes/Whatsapp_HLD.png',
      github: 'https://github.com/Krushit-Babariya/High-Level-System-Design/tree/main/Whatsapp'
    }
  ]

  const designPrinciples = [
    {
      icon: Scale,
      title: 'Scalability',
      description: 'Design systems that can handle increasing loads by scaling horizontally and vertically'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Ensure high availability and fault tolerance through redundancy and failover mechanisms'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimize for speed and efficiency with caching, CDNs, and performance monitoring'
    },
    {
      icon: Database,
      title: 'Data Consistency',
      description: 'Maintain data integrity across distributed systems with appropriate consistency models'
    }
  ]

  return (
    <section
      id="system-design"
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
              System Design
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive system architecture designs for scalable, high-performance applications. 
            Each design addresses real-world challenges with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {designPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <principle.icon size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
              <p className="text-gray-300 text-sm">{principle.description}</p>
            </div>
          ))}
        </div>

        <div ref={designsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {systemDesigns.map((design, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    design.complexity === 'Very High' 
                      ? 'bg-red-500/20 text-red-400' 
                      : design.complexity === 'High'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {design.complexity} Complexity
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {design.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {design.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {design.features.slice(0, 10).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a
                    href={design.diagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye size={16} />
                    View Diagram
                  </a>

                  <a
                    href={design.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
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
      </div>
    </section>
  )
}
