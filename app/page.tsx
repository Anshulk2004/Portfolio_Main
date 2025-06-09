"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { EnhancedHero } from "@/components/enhanced-hero";
import { ProjectCarousel } from "@/components/project-carousel";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Work Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Extra-curricular", id: "extracurricular" },
    { name: "Contact Me", id: "contact" },
  ];

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { once: true, margin: "-100px" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    initial: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.6 },
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      title: "ToneCraft – Emotionally Intelligent NFT Audiobook Marketplace",
      description:
        "Launched an NFT marketplace featuring emotionally expressive audiobook voices using TTS libraries and blockchain integration. Achieved 95% user satisfaction by enhancing audio quality through sentiment-aware synthesis with Amazon Polly.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        "Python",
        "AWS",
        "FastAPI",
        "Flask",
        "Solidity",
        "IPFS",
        "Node.js",
        "ReactJS",
      ],
      github: "https://github.com/Anshulk2004/ToneCraft",
      live: "https://tone-craft-frontend.vercel.app/",
    },
    {
      title: "FestHub – College Fest Event Manager",
      description:
        "Built a mobile app for event discovery and ticketing tailored for college fests. Includes user panels for profiles and bookings, an admin dashboard for event uploads, and a Gemini-powered chatbot. Integrated Firebase Auth and Stripe with 98% payment success.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Flutter", "Dart", "Firebase", "Gemini", "Stripe"],
      github: "https://github.com/Anshulk2004/Event_Booking_App",
      live: "",
    },
    {
      title: "RideOn – AI-Powered Ride Sharing & Courier App",
      description:
        "Developed a full-stack ride sharing platform with booking, rentals, courier service, and driver onboarding. Features Stripe integration, OTP verification, dynamic Leaflet.js maps, and a Gemini-based chatbot. Serves 100+ users with real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        "Python",
        "Next.js",
        "TypeScript",
        "Leaflet.js",
        "MongoDB",
        "Gemini API",
      ],
      github: "https://github.com/Anshulk2004/FJ-FE-R2-Anshul-Kumar-IIITPune",
      live: "https://fj-fe-r2-anshul-kumar-iiit-pune.vercel.app/",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Interactive dashboard for business intelligence with real-time data visualization, custom reports, and predictive analytics using machine learning algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      github: "#",
      live: "#",
    },
    {
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting system built on blockchain technology. Features include voter authentication, immutable vote records, and real-time result tracking.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum"],
      github: "#",
      live: "#",
    },
    {
      title: "Smart Home IoT Platform",
      description:
        "Comprehensive IoT platform for smart home automation with device management, energy monitoring, and AI-powered optimization for energy efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "MQTT", "React", "InfluxDB", "Raspberry Pi"],
      github: "#",
      live: "#",
    },
  ];

  const socialLinks = [
  { Icon: Github, url: "https://github.com/Anshulk2004" },
  { Icon: Linkedin, url: "https://www.linkedin.com/in/anshul-kumar-627001250/" },
  { Icon: Twitter, url: "https://x.com/Anshulk012" },
  { Icon: Mail, url: "mailto:anshulwork0102@gmail.com" },
];

  const skillGroups = [
    {
      category: "Machine Learning 🤖",
      skills: [
        "🗣️ NLP",
        "👁️ Computer Vision",
        "🧠 Deep Learning",
        "📊 Data Science",
      ],
    },
    {
      category: "Frontend Development 💻",
      skills: [
        "⚛️ React",
        "🔺 Vue.js",
        "🎨 Tailwind CSS",
        "📱 Responsive Design",
      ],
    },
    {
      category: "App Development 📱",
      skills: [
        "📲 React Native",
        "🐦 Flutter",
        "🍎 iOS Development",
        "🤖 Android Development",
      ],
    },
    {
      category: "Databases 🗄️",
      skills: ["🐘 PostgreSQL", "🍃 MongoDB", "🔥 Firebase", "☁️ AWS DynamoDB"],
    },
    {
      category: "Tools 🛠️",
      skills: ["🐙 Git", "🐳 Docker", "☁️ AWS", "🔧 Kubernetes"],
    },
    {
      category: "Coursework 📚",
      skills: [
        "🤖 Machine Learning",
        "📊 Data Structures",
        "🔐 Cybersecurity",
        "☁️ Cloud Computing",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isDark ? "bg-black/90 border-gray-800" : "bg-white/90 border-gray-200"
        } backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anshul Kumar
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className={`transition-all duration-300 ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }
                  >
                    {isMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${
              isDark ? "bg-black border-gray-800" : "bg-white border-gray-200"
            } border-t`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Enhanced Hero Section */}
      <EnhancedHero isDark={isDark} scrollToSection={scrollToSection} />

      {/* Work Experience Section */}
      <motion.section
        {...fadeInUp}
        id="experience"
        className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              My professional journey and the roles that have shaped my career
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Project Intern",
                company: "Fractal",
                period: "March 2025 – June 2025",
                location: "Mumbai",
                description:
                  "Developed a cloud optimization engine using AWS, GCP, and Azure APIs to detect and decommission over 1500+ unused resources, reducing monthly cloud costs by 30% through automated cleanups. Implemented a Flask backend and React frontend to integrate cloud APIs with internal tools such as CIDR and Server Inventory, improving cross-platform VM and network visibility. Built a cost monitoring system by integrating AWS Cost Explorer, Azure Consumption API, and GCP Billing API, enabling real-time spend analysis and accelerating anomaly detection by 20%. Created a unified cloud cost dashboard with usage charts, cost breakdowns, and alerting features, improving transparency and budget oversight across departments for 1000+ users.",
                technologies: [
                  "AWS",
                  "GCP",
                  "Azure",
                  "Flask",
                  "React",
                  "CIDR",
                  "Server Inventory",
                  "Cost Explorer",
                  "Billing API",
                ],
              },
              {
                title: "Full Stack Developer Intern",
                company: "Oddminds Innovation (Startup)",
                period: "August 2024 – November 2024",
                location: "Remote",
                description:
                  "Optimized backend performance by implementing Firebase Storage, Node.js and Emulator suite, achieving 40% faster data retrieval and enhanced system scalability. Improved frontend features including Event Cards with role-based access, allowing authorized users to create, modify, and manage events, and developed an ELO-based matchmaking and recommendation system to optimize participant interactions.",
                technologies: [
                  "Firebase",
                  "Node.js",
                  "Emulator Suite",
                  "React",
                  "ELO Algorithm",
                ],
              },
              {
                title: "Data Analyst Intern",
                company: "Ozibook Tech Solutions Private Limited",
                period: "May 2024 – July 2024",
                location: "Remote",
                description:
                  "Developed automated web scraping solutions (LinkedIn) and data visualization tools (Power BI, Python, Excel dashboards) to identify 500+ business leads, increasing client contacts by 30% and reducing prospecting time by 45%.",
                technologies: ["Python", "Power BI", "Excel", "Web Scraping"],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription
                          className={`text-lg ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        } mt-2 sm:mt-0`}
                      >
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } mb-4`}
                    >
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`${
                            isDark
                              ? "border-gray-600 text-gray-300"
                              : "border-gray-300 text-gray-700"
                          } hover:scale-105 transition-transform duration-200`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section - Reverted to Original */}
      <motion.section {...fadeInUp} id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {skillGroups.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } h-full hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`${
                              isDark
                                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            } transition-all duration-200 cursor-pointer`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Projects Section with Carousel */}
      <motion.section
        {...fadeInUp}
        id="projects"
        className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <ProjectCarousel projects={projects} isDark={isDark} />
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section {...fadeInUp} id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Achievements & Recognition
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Milestones and recognition that mark my professional journey
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
  {
    title: "Geeks for Geeks – Solving for India Hackathon",
    organization: "GeeksforGeeks",
    description: "Selected in the Top 15 teams in the Western Regional Finals among nationwide participants.",
    year: "2023",
  },
  {
    title: "PEC Hacks – 36 Hrs Hackathon",
    organization: "PEC College",
    description: "Reached Top 50 out of 500+ teams in the final round with a real-world project demo.",
    year: "2024",
  },
  {
    title: "Citi Bank Ada Lovelace Hackathon",
    organization: "Citi Bank",
    description: "Secured 2nd position within the institute and placed in the Top 20 overall out of 300+ teams.",
    year: "2025",
  },
  {
    title: "Oracle GenAI Certified",
    organization: "Oracle Cloud Infrastructure",
    description: "Certified Generative AI Professional under Oracle Cloud Infrastructure 2024 program.",
    year: "2024",
  },
]
.map((achievement, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">
                          {achievement.title}
                        </CardTitle>
                        <CardDescription
                          className={`text-lg ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {achievement.organization}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {achievement.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Extra-curricular Activities Section - Fixed Icons */}
      <motion.section
        {...fadeInUp}
        id="extracurricular"
        className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Extra-curricular Activities
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Beyond coding - my involvement in community and personal interests
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Sports Club | Head",
                description:
                  "Organized Eklavya (Annual Sports Fest) twice with 500+ participants and hosted National Sports Day engaging 300+ students.",
                icon: "🏆",
              },
              {
                title: "localhost | Web3 and AI/ML Mentor",
                description:
                  "Conducted web development sessions and Web3 workshops for 200+ learners; organized two major hackathons to foster innovation.",
                icon: "🧠",
              },
              {
                title: "E-Cell | Cluster Head",
                description:
                  "Led E-Summit 2k23 & 2k24 with 1,000+ attendees and organized multiple tech events to boost student engagement and entrepreneurship.",
                icon: "🚀",
              },
              {
                title: "Quantnum | Event Management Head",
                description:
                  "Managed an inter-college Mathematics competition celebrating National Mathematics Day with wide student participation.",
                icon: "📐",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{activity.icon}</span>
                      <CardTitle className="text-lg">
                        {activity.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section {...fadeInUp} id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              I'm always open to discussing new opportunities and interesting
              projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      text: "anshulwork0102@gmail.com",
                      color: "text-blue-500",
                    },
                    {
                      icon: Phone,
                      text: "+91 9870803265",
                      color: "text-green-500",
                    },
                    {
                      icon: MapPin,
                      text: "Pune, Maharashtra",
                      color: "text-red-500",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { Icon: Github, href: "https://github.com/Anshulk2004" },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/in/anshul-kumar-627001250/",
                    },
                    { Icon: Twitter, href: "https://x.com/Anshulk012" },
                    {
                      Icon: Instagram,
                      href: "https://www.instagram.com/anshulk0102/",
                    },
                  ].map(({ Icon, href }, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="icon"
                          className={`${
                            isDark
                              ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          } transition-all duration-300 hover:shadow-lg`}
                        >
                          <Icon className="h-5 w-5" />
                        </Button>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                className={`${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } hover:shadow-xl transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="text-sm font-medium mb-2 block">
                          Name
                        </label>
                        <Input
                          placeholder="Your name"
                          className={`${
                            isDark
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-white border-gray-300"
                          } transition-all duration-300`}
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className={`${
                            isDark
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-white border-gray-300"
                          } transition-all duration-300`}
                        />
                      </motion.div>
                    </div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        placeholder="What's this about?"
                        className={`${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300"
                        } transition-all duration-300`}
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        placeholder="Your message..."
                        rows={5}
                        className={`${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300"
                        } transition-all duration-300`}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Footer - Fixed Icons */}
      <motion.footer
        className={`py-12 ${
          isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
        } border-t`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Anshul Kumar
              </h3>
              <p
                className={`${
                  isDark ? "text-gray-400" : "text-gray-600"
                } mb-4 max-w-md`}
              >
                Software Developer & Full Stack Developer passionate about creating
                intelligent solutions and building scalable applications.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, url }, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button
        variant="ghost"
        size="icon"
        className={`${
          isDark
            ? "text-gray-400 hover:text-white hover:bg-gray-800"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        } transition-all duration-300`}
      >
        <Icon className="h-5 w-5" />
      </Button>
    </a>
  </motion.div>
))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className={`${
                        isDark
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } transition-colors duration-200`}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  anshulwork0102@gmail.com
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  +91 9870803265
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  Pune, Maharashtra
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={`mt-8 pt-8 border-t ${
              isDark ? "border-gray-800" : "border-gray-200"
            } text-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } text-sm`}
            >
              © {new Date().getFullYear()} Anshul Kumar. All rights reserved. 
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
