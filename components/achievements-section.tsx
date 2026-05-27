"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Zap, Rocket, CheckCircle } from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const achievements = [
  {
    icon: Zap,
    title: "Bundle Size Optimization",
    description: "Achieved 30% reduction in app bundle size through code splitting and optimization",
    value: 30,
    suffix: "%",
    metric: "Size Reduction",
  },
  {
    icon: Rocket,
    title: "Performance Enhancement",
    description: "Improved app load times by 40% through lazy loading and caching strategies",
    value: 40,
    suffix: "%",
    metric: "Faster Load",
  },
  {
    icon: Award,
    title: "Full Release Cycle",
    description: "End-to-end mobile deployment experience across Android and iOS platforms",
    value: 3,
    suffix: "+",
    metric: "Apps Deployed",
  },
  {
    icon: CheckCircle,
    title: "Code Quality",
    description: "Maintained high code coverage with comprehensive testing and clean architecture",
    value: 95,
    suffix: "%",
    metric: "Test Coverage",
  },
]

const badges = [
  "React Native Expert",
  "Cross-Platform Specialist",
  "Performance Optimizer",
  "Android & IOs Deployment",
  "Mobile Architecture",
  "API Integration",
]

export function AchievementsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Achievements</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Notable <span className="gradient-text">Accomplishments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and metrics from my professional journey
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter target={achievement.value} suffix={achievement.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mb-4">{achievement.metric}</div>

                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-center mb-6">Expertise Badges</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
