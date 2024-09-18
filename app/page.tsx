'use client';
import { useState, useEffect } from 'react'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import RotatingText from './RotatingText'  // Adjust the import path as needed
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, Send, Moon, Sun } from "lucide-react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Engine, Container } from "@tsparticles/engine";

export default function Portfolio() {
  const [showFullBio, setShowFullBio] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container: Container | undefined): Promise<void> => {
    if (container) {
      console.log(container);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const fullBio = `As a passionate and driven Computer Science student at Georgia Institute of Technology, I am deeply committed to pushing the boundaries of technology and innovation. My academic journey, focused on Artificial Intelligence and Information Internetworks, has equipped me with a robust foundation in cutting-edge areas such as Natural Language Processing, Computer Vision, and Deep Learning. This theoretical knowledge, combined with my practical experience at companies like Glean and Roblox, has honed my ability to tackle complex technological challenges with creativity and precision. My internship experiences have not only sharpened my technical skills but also instilled in me the importance of creating scalable, efficient solutions that can handle real-world data volumes and user interactions. As I continue to grow and learn, I am excited about the possibilities that lie ahead in the ever-evolving world of technology, and I am eager to contribute my skills and passion to innovative projects that push the boundaries of what is possible in computer science.`

  const skills = [
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "C/C++", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Go", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "PyTorch", category: "Frameworks" },
    { name: "TensorFlow", category: "Frameworks" },
    { name: "Natural Language Processing", category: "AI/ML" },
    { name: "Computer Vision", category: "AI/ML" },
    { name: "Deep Learning", category: "AI/ML" },
    { name: "AWS", category: "Cloud" },
    { name: "GCP", category: "Cloud" },
    { name: "Leadership", category: "Soft Skills" },
    { name: "Teamwork", category: "Soft Skills" },
    { name: "Collaboration", category: "Soft Skills" },
  ]

  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)))

  const experiences = [
    {
      company: "Glean",
      role: "Software Engineer Intern",
      date: "May 2024 - August 2024",
      location: "Palo Alto, CA",
      description: [
        "Designed and implemented an adaptive task chunking crawler",
        "Developed a multi-language dual write system",
        "Created an intelligent throttle mechanism for data ingestion"
      ]
    },
    {
      company: "Roblox",
      role: "Software Engineer Intern",
      date: "May 2023 - August 2023",
      location: "San Mateo, CA",
      description: [
        "Built a computer vision-based E2E testing automation framework",
        "Developed a comprehensive monitoring and alerting system"
      ]
    },
    {
      company: "MLH",
      role: "Production Engineering Fellow",
      date: "May 2022 – Aug 2022",
      location: "Remote",
      description: [
        "Developed an open-source web application using Python, Flask, Docker, MySQL, Jinja, and unittest",
  "Implemented an automated CI/CD pipeline with GitHub Actions and Bash scripting",
  "Performed process monitoring and load testing to optimize web application performance under high traffic",
      ]
    }
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all duration-500 overflow-hidden`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: darkMode ? "#111" : "#f3f4f6",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: darkMode ? "#ffffff" : "#000000",
            },
            links: {
              color: darkMode ? "#ffffff" : "#000000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-500 sticky top-0 z-50`}>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center"
        >
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">
            Krish Thawani
          </h1>
          <nav className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              href="https://linkedin.com/in/krish-thawani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8 }}
              href="mailto:krishthawani@gatech.edu"
              className="text-red-500 hover:text-red-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-4 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-yellow-100 text-gray-900'} rounded-full`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 relative">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-700 to-blue-600 transform origin-left"
          style={{ scaleX: pathLength }}
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-12 sm:px-0"
        >
          <div className="mt-8 h-64">
            <Canvas>
              <Suspense>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <RotatingText text="Welcome" />
              </Suspense>
            </Canvas>
          </div>
          <div className={`rounded-2xl h-96 flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-200 to-purple-200'}`}>
            <div className={`absolute inset-0 ${darkMode ? 'bg-purple-900 opacity-50' : 'bg-white opacity-25'}`}></div>
            <div className="text-center relative z-10 p-6">
            <div className="flex justify-center mb-8">
    <img
      src="/pfp.jpeg"  // Path to your image
      alt="Krish Thawani"
      className="w-32 h-32 rounded-full object-cover shadow-lg"  // Example styling
    />
  </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-5xl font-bold mb-4 bg-clip-text text-transparent ${darkMode ? 'bg-gray-200' : 'bg-gradient-to-r from-purple-700 to-blue-600'}`}
              >
                Krish Thawani
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl"
              >
                Computer Science Student | Software Engineer
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transition-all duration-500 transform hover:scale-110`}>
            <CardHeader>
              <CardTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {showFullBio ? fullBio : `${fullBio.slice(0, 300)}...`}
              </p>
                <Button 
                  variant="link" 
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="mt-2 text-purple-500 hover:text-blue-500 transition-colors duration-300"
                >
                  {showFullBio ? 'Show Less' : 'Read More'}
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showFullBio ? 'rotate-180' : ''}`} />
                </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transition-all duration-500 transform hover:scale-110`}>
            <CardHeader>
              <CardTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg transition-all duration-300 transform hover:scale-105 `}
                  >
                    <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter(skill => skill.category === category)
                        .map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Badge
                              variant="secondary"
                              className={`text-sm py-1 px-2 ${darkMode ? 'bg-gray-600 text-purple-300' : 'bg-purple-100 text-purple-800'} hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-600 hover:text-white transition-all duration-300`}
                            >
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))
                      }
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education and Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transition-all duration-500 transform hover:scale-110`}>
            <CardHeader>
              <CardTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Education & Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Education</h3>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 0 }}
                        whileTap={{ scale: 0.8 }}
                        className={`w-12 h-12 ${darkMode ? 'bg-purple-100 text-purple-200' : 'bg-purple-100 text-purple-600'} rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300`}
                      >
                        GT
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Georgia Institute of Technology</h4>
                      <p>B.S. in Computer Science</p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" /> December 2024
                      </p>
                      <p className="text-sm mt-2">Concentration: Artificial Intelligence & Information Internetworks</p>
                    </div>
                  </div>
                </div>

                <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg transition-all duration-300 transform hover:scale-105 `}>
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Experience</h3>
                  <div className="space-y-6 relative before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-purple-700 before:to-blue-600">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="flex items-start ml-6"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 0 }}
                          whileTap={{ scale: 0.8 }}
                          className="absolute left-0 w-3 h-3 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full mt-1.5 -translate-x-1.5"
                        ></motion.div>
                        <div>
                          <h4 className="text-lg font-semibold">{exp.company}</h4>
                          <p className="text-purple-500">{exp.role}</p>
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <Calendar className="w-4 h-4 mr-1" /> {exp.date}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" /> {exp.location}
                          </p>
                          <ul className="list-disc list-inside text-sm mt-2">
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                className="mt-6"
              >
                <Button className="bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-500 hover:to-blue-700 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transition-all duration-500 transform hover:scale-110`}>
            <CardHeader>
              <CardTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Project Showcase</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="project1">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="project1" className={`${darkMode ? 'data-[state=active]:bg-purple-900 data-[state=active]:text-purple-100' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900'} transition-all duration-300 transform hover:scale-105`}>Vocabulary Constrained Language Learning Tool</TabsTrigger>
                  <TabsTrigger value="project2" className={`${darkMode ? 'data-[state=active]:bg-blue-900 data-[state=active]:text-blue-100' : 'data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900'} transition-all duration-300 transform hover:scale-105`}>Syllabus-Based AI Assistant</TabsTrigger>
                </TabsList>
                <TabsContent value="project1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Vocabulary Constrained Language Learning Tool</CardTitle>
                      <CardDescription>Python, PyTorch, Transformers, Llama 3.1, NLP</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">This is an LLM-based chatbot designed to revolutionize language learning. It simulates immersive Spanish language exposure within a constrained environment, gradually expanding the learner&apos;s vocabulary while focusing on contextual learning. By adapting its responses based on the learner&apos;s existing knowledge and incrementally introducing new words, the system aligns with Krashens input hypothesis. This tool aims to provide meaningful conversation practice for learners who lack access to fluent speakers, offering a personalized and engaging approach to Spanish language acquisition.</p>
                      <motion.img
                        src="/proj2.png?height=60&width=80"
                        alt="Language Learning Image"
                        className="w-80 h-80 rounded-lg shadow-md mb-4 transition-all duration-300"
                      />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-500 hover:to-blue-700 transition-all duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="project2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Syllabus-Based AI Learning Assistant</CardTitle>
                      <CardDescription>Python, Advanced NLP Techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">This is an innovative educational tool that transforms course syllabi into personalized learning experiences. By leveraging advanced AI and NLP techniques, it analyzes syllabi to generate tailored study materials, interactive quizzes, and adaptive learning pathways. The system provides AI-driven assistance that encourages critical thinking, adapts to individual student performance, and offers insights to both students and instructors. This project aims to bridge the gap between static course materials and dynamic learning needs, revolutionizing how students engage with course content and enhancing their overall academic performance.</p>
                      <motion.img
                        src="/proj1.png?height=60&width=80"
                        alt="AI Learning Assistant Interface"
                        className="w-80 h-80 rounded-lg shadow-md mb-4 transition-all duration-300"
                      />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-500 hover:to-blue-700 transition-all duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Get In Touch */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Card className={`mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl transition-all duration-500 transform hover:scale-105`}>
            <CardHeader>
              <CardTitle className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" id="name" name="name" className={`w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" name="email" className={`w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className={`w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white'  : 'bg-gray-100'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className={`w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}></textarea>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-500 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mt-8 transition-all duration-500`}>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Krish Thawani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}