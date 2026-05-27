"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Smartphone, Code, Wrench, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 90 },
      { name: "Android", level: 85 },
      { name: "iOS", level: 80 },
      {name: "Play Store", level: 90},
      {name: "App Store", level: 80},
    ],
  },
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 75 },
      { name: "Html & Css", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Firebase", level: 85 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "Gradle", level: 70 },
      { name: "Visual Studio", level: 90 },
    ],
  },
  {
    title: "Backend/DB",
    icon: Database,
    skills: [
      { name: "MySQL", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "ASP.NET Core", level: 70 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`glass rounded-2xl p-6 transition-all duration-300 ${
                hoveredCategory === categoryIndex
                  ? "border-primary/30 shadow-lg shadow-primary/10 scale-[1.02]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    hoveredCategory === categoryIndex ? "bg-primary/20" : "bg-primary/10"
                  }`}
                >
                  <category.icon
                    className={`w-5 h-5 transition-colors ${
                      hoveredCategory === categoryIndex ? "text-primary" : "text-primary/70"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Zustand", "Context API", "Expo", "Firebase", "Android Studio", "Xcode", "Firestore", "Postman"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="px-4 py-2 rounded-full glass text-sm hover:border-primary/30 hover:text-primary transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
