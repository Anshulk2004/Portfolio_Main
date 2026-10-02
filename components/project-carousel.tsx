"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string[]
  image: string
  technologies: string[]
  github: string
  live: string
}

interface ProjectCarouselProps {
  projects: Project[]
  isDark: boolean
}

export function ProjectCarousel({ projects, isDark }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
    setIsDetailsExpanded(false)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
    setIsDetailsExpanded(false)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setIsDetailsExpanded(false)
  }

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className={`group ${isDark ? "border-white/10 bg-[#0a0a0a]/90" : "border-stone-900/10 bg-[#f7eddf]/90"} overflow-hidden rounded-3xl shadow-xl`}>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.2fr)]">
                <div className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br lg:min-h-[340px] ${isDark ? "from-blue-950/40 via-slate-950 to-black" : "from-blue-100 via-[#f7eddf] to-white"}`}>
                  <Image
                    src={projects[currentIndex].image}
                    alt={`${projects[currentIndex].title} preview`}
                    fill
                    priority={currentIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-105 sm:p-12"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-bold tracking-[0.18em] ${isDark ? "bg-white/10 text-blue-200" : "bg-white/75 text-blue-800"}`}>
                    PROJECT {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-8">
                  <CardHeader className="mb-4 p-0">
                    <CardTitle className="mb-2 text-xl sm:text-2xl">{projects[currentIndex].title}</CardTitle>
                    <button
                      type="button"
                      onClick={() => setIsDetailsExpanded((expanded) => !expanded)}
                      aria-expanded={isDetailsExpanded}
                      className={`mb-4 flex w-full items-center justify-between rounded-lg border px-4 py-3 text-sm font-semibold sm:hidden ${
                        isDark
                          ? "border-white/10 bg-white/[0.04] text-gray-200"
                          : "border-gray-200 bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span>{isDetailsExpanded ? "Hide project details" : "See project details"}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isDetailsExpanded ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`${isDetailsExpanded ? "block" : "hidden"} sm:block`}>
                      <CardDescription className={`text-base sm:text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        <ul className="list-disc space-y-2 pl-5">
                          {projects[currentIndex].description.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className={`${isDetailsExpanded ? "block" : "hidden"} p-0 sm:block`}>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {projects[currentIndex].technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`${isDark ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-700"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:space-x-4">
                      <Button
                        asChild
                        variant="outline"
                        className={`${
                          isDark
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <a href={projects[currentIndex].github} target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className={`${
                          isDark
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <a href={projects[currentIndex].live} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
            isDark ? "bg-gray-800/80 text-white hover:bg-gray-700" : "bg-white/80 text-gray-900 hover:bg-gray-100"
          } backdrop-blur-sm transition-all duration-200 hover:scale-110`}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextProject}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
            isDark ? "bg-gray-800/80 text-white hover:bg-gray-700" : "bg-white/80 text-gray-900 hover:bg-gray-100"
          } backdrop-blur-sm transition-all duration-200 hover:scale-110`}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? isDark
                  ? "bg-blue-400"
                  : "bg-blue-600"
                : isDark
                  ? "bg-gray-600 hover:bg-gray-500"
                  : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Project Selector */}
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => goToProject(index)}
            className={`rounded-xl border px-3 py-3 text-left transition-all duration-200 sm:px-4 ${
              index === currentIndex
                ? isDark
                  ? "border-blue-400/60 bg-blue-400/10 text-white"
                  : "border-blue-700/40 bg-blue-700/10 text-blue-950"
                : isDark
                  ? "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/25 hover:text-gray-200"
                  : "border-stone-900/10 bg-stone-900/[0.03] text-stone-600 hover:border-stone-900/25 hover:text-stone-900"
            }`}
          >
            <span className="mb-1 block text-[10px] font-bold tracking-[0.2em] opacity-70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="block truncate text-xs font-semibold sm:text-sm">{project.title.split(" – ")[0]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
