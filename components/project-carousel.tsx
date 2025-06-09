"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
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
            <Card className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-square">
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">{projects[currentIndex].title}</CardTitle>
                    <CardDescription className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {projects[currentIndex].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-6">
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
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        className={`${
                          isDark
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        className={`${
                          isDark
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
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

      {/* Thumbnail Preview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => goToProject(index)}
            className={`cursor-pointer rounded-lg overflow-hidden ${
              index === currentIndex ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="relative aspect-video">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div
                className={`absolute inset-0 ${
                  index === currentIndex ? "bg-blue-500/20" : "bg-black/40 hover:bg-black/20"
                } transition-all duration-200`}
              />
            </div>
            <div className={`p-2 ${isDark ? "bg-gray-800" : "bg-white"}`}>
              <p className="text-xs font-medium truncate">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
