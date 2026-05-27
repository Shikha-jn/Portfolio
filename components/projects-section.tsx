"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, Smartphone, MessageCircle, Calendar } from "lucide-react"

const projects = [
  {
    title: "Expense Tracker App",
    description:
      "A comprehensive budgeting application with analytics dashboard, expense categorization, and bills management system.",
    icon: Smartphone,
    features: ["Budget Planning", "Analytics Dashboard", "Bills Management", "Expense Categories"],
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    github: "https://github.com/Shikha-jn/Expense_Tracker",
    demo: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Modern messaging application with swipe UI interactions, real-time chat system, and intuitive navigation.",
    icon: MessageCircle,
    features: ["Real-Time Messaging", "Swipe Gestures", "Push Notifications", "Media Sharing"],
    technologies: ["React Native", "Reanimated", "Typescript", "AsyncStorage"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    github: "https://github.com/Shikha-jn/Socio_Chat",
    demo: "#",
  },
  {
    title: "Veterinary Appointment System",
    description:
      "Desktop application for managing veterinary appointments, patient records, and clinic scheduling.",
    icon: Calendar,
    features: ["Appointment Booking", "Patient Records", "Scheduling System", "Reviews Writing"],
    technologies: ["Java", "MySQL", "Swing", "JDBC"],
    gradient: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/Shikha-jn/Vet-project",
    demo: "#",
  },
]

export function ProjectsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />
              <div className="relative glass rounded-2xl p-6 h-full flex flex-col transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 transition-transform duration-300 ${
                    hoveredProject === index ? "scale-110" : ""
                  }`}
                >
                  <project.icon className="w-7 h-7 text-foreground" />
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover font-medium transition-all hover:border-primary/30"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
