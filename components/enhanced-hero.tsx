"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { ParticlesBackground } from "./particles-background"

interface EnhancedHeroProps {
  isDark: boolean
  scrollToSection: (sectionId: string) => void
}

export function EnhancedHero({ isDark, scrollToSection }: EnhancedHeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Particles Background */}
      <ParticlesBackground isDark={isDark} />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-black via-gray-900 to-black" : "bg-gradient-to-br from-white via-gray-50 to-white"} opacity-90`}
        style={{ zIndex: 2 }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-20 h-20 ${isDark ? "bg-blue-500/10" : "bg-blue-500/5"} rounded-full blur-xl`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 sm:text-left lg:px-8" style={{ zIndex: 4 }}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="mx-auto max-w-2xl space-y-6 sm:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className={`inline-block text-lg ${isDark ? "text-slate-300" : "text-slate-600"} font-medium`}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  👋 Hello, I'm
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  className={isDark ? "text-slate-100" : "text-slate-900"}
                >
                  Anshul Kumar
                </motion.span>
              </motion.h1>

              <motion.h2
                className={`text-xl sm:text-2xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Software Developer
                </motion.span>
              </motion.h2>

              <motion.div
                className={`mx-auto max-w-2xl space-y-4 text-base leading-7 ${isDark ? "text-gray-400" : "text-gray-700"} sm:mx-0 sm:text-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p>
                  Hi, I&apos;m Anshul Kumar, a Software Engineer at HSBC and a B.Tech CSE graduate from IIIT Pune, with experience building data-driven, cloud-based, and enterprise software systems.
                </p>
                <p className={isDark ? "text-gray-500" : "text-gray-600"}>
                  At HSBC, I work on technology migration projects and large-scale system modernization. Previously, I worked at Fractal.ai on cloud automation with AWS, GCP, and Azure. My interests include backend and full-stack development, data systems, cloud infrastructure, machine learning, LLMs, and generative AI. Outside work, I enjoy solving puzzles, reading technology articles, and staying active through outdoor sports.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row sm:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <a
    href="https://drive.google.com/file/d/1Tqre9R8iUzxjRJLPsdrdS_SOCSQBMjNe/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
                <Button
                  size="lg"
                  className="bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-white transform transition-all duration-300 shadow-lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className={`transform transition-all duration-300 ${
                    isDark
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:shadow-lg"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-lg"
                  }`}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
  className="flex justify-center space-x-4 pt-4 sm:justify-start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  {[
    {
      Icon: Github,
      href: "https://github.com/Anshulk2004",
      label: "GitHub"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/anshul-kumar-627001250/",
      label: "LinkedIn"
    },
    {
      Icon: Mail,
      href: "mailto:anshulwork0102@gmail.com",
      label: "Send Email"
    }
  ].map(({ Icon, href, label }, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Button
          variant="ghost"
          size="icon"
          className={`transition-all duration-300 ${
            isDark
              ? "text-gray-400 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Icon className="h-6 w-6" />
        </Button>
      </a>
    </motion.div>
  ))}
</motion.div>

          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Glowing Ring Effect */}
              <motion.div
                className={`absolute inset-0 h-64 w-64 rounded-full sm:h-80 sm:w-80 ${
                  isDark
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                } blur-2xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className={`relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80 ${
                  isDark ? "bg-gray-800" : "bg-gray-200"
                } flex items-center justify-center shadow-2xl border-4 ${
                  isDark ? "border-gray-700" : "border-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/Anshul_Profile.jpeg?height=320&width=320"
                  alt="Profile Photo"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/10 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
