'use client';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin } from "lucide-react"

export default function Portfolio() {
  const [showFullBio, setShowFullBio] = useState(false)

  const fullBio = `As a passionate and driven Computer Science student at Georgia Institute of Technology, I am deeply committed to pushing the boundaries of technology and innovation. My academic journey, focused on Artificial Intelligence and Information Internetworks, has equipped me with a robust foundation in cutting-edge areas such as Natural Language Processing, Computer Vision, and Deep Learning. This theoretical knowledge, combined with my practical experience at industry leaders like Glean and Roblox, has honed my ability to tackle complex technological challenges with creativity and precision. My internship experiences have not only sharpened my technical skills but also instilled in me the importance of creating scalable, efficient solutions that can handle real-world data volumes and user interactions. Beyond my technical pursuits, I am proud of my role as the President and Co-Founder of Codivate, where I've had the opportunity to make a tangible impact in the field of coding education. This experience has not only showcased my leadership and organizational skills but also reinforced my belief in the power of technology to create positive change in society. As I continue to grow and learn, I am excited about the possibilities that lie ahead in the ever-evolving world of technology, and I am eager to contribute my skills and passion to innovative projects that push the boundaries of what's possible in computer science.`

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
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "GCP", category: "Cloud" },
    { name: "RESTful APIs", category: "Web Development" },
    { name: "Git", category: "Version Control" },
    { name: "Agile Methodologies", category: "Project Management" },
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
      company: "Codivate",
      role: "President & Co-Founder",
      date: "June 2020 – May 2022",
      location: "Princeton, NJ",
      description: [
        "Launched a 501(c)(3) coding education organization offering 100+ hours of free content",
        "Enrolled 3000+ students, oversaw 400+ volunteers, and managed a team of 60 directors",
        "Featured in NJ.com, Hindustan Times, Trenton Times, NJ Business Magazine, and more"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-serif">Krish Thawani</h1>
          <nav>
            <a href="https://linkedin.com/in/krish-thawani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-600 mx-2 transition-colors duration-300">
              <Linkedin className="inline-block w-6 h-6" />
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-purple-600 mx-2 transition-colors duration-300">
              <Github className="inline-block w-6 h-6" />
            </a>
            <a href="mailto:krishthawani@gatech.edu" className="text-blue-600 hover:text-purple-600 mx-2 transition-colors duration-300">
              <Mail className="inline-block w-6 h-6" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="px-4 py-12 sm:px-0">
          <div className="rounded-lg h-96 flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{backgroundImage: "url('/placeholder.svg?height=400&width=800')"}}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
            <div className="text-center text-white relative z-10 p-6">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in-up font-sans">Welcome to My Portfolio</h2>
              <p className="text-2xl animate-fade-in-up animation-delay-300 font-serif">Computer Science Student | AI Enthusiast | Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Biography */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600 font-serif">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed font-sans">
              {showFullBio ? fullBio : `${fullBio.slice(0, 300)}...`}
            </p>
            <Button 
              variant="link" 
              onClick={() => setShowFullBio(!showFullBio)}
              className="mt-2 text-purple-600 hover:text-blue-600 transition-colors duration-300"
            >
              {showFullBio ? 'Show Less' : 'Read More'}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showFullBio ? 'rotate-180' : ''}`} />
            </Button>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600 font-serif">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-purple-600 font-serif">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm py-1 px-2 bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 font-sans">
                          {skill.name}
                        </Badge>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education and Experience Section */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600 font-serif">Education & Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 font-serif">Education</h3>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">GT</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 font-sans">Georgia Institute of Technology</h4>
                    <p className="text-lg">B.S. in Computer Science</p>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-1" /> December 2024
                    </p>
                    <p className="text-sm mt-2">Concentration: Artificial Intelligence & Information Internetworks</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 font-serif">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {exp.company[0]}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-600 font-sans">{exp.company}</h4>
                        <p className="text-lg">{exp.role}</p>
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </CardContent>
        </Card>

        {/* Projects Showcase */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600 font-serif">Project Showcase</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="project1">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="project1" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">Multi-LLM Agentic Workflow</TabsTrigger>
                <TabsTrigger value="project2" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white">Syllabus-Based AI Assistant</TabsTrigger>
              </TabsList>
              <TabsContent value="project1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600 font-serif">Multi-LLM Agentic Workflow Optimization</CardTitle>
                    <CardDescription className="font-sans">Python, GPT-4, Claude, Gemini</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 font-sans">Engineered an AI workflow utilizing state-of-the-art LLMs to enhance decision-making and output quality through agentic design patterns including iterative refinement, a collaborative multi-agent system, and task-specific model utilization.</p>
                    <img src="/placeholder.svg?height=300&width=400" alt="Multi-LLM Workflow Diagram" className="rounded-lg shadow-md mb-4" />
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="project2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600 font-serif">Syllabus-Based AI Learning Assistant</CardTitle>
                    <CardDescription className="font-sans">Python, Advanced NLP Techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 font-sans">Created an AI assistant that parses course syllabi to generate personalized study guides, quizzes, and interactive help sessions, adapting content based on student performance. Achieved an F1 score of 0.81, indicating high accuracy in content generation.</p>
                    <img src="/placeholder.svg?height=300&width=400" alt="AI Learning Assistant Interface" className="rounded-lg shadow-md mb-4" />
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-blue-600 font-serif">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-lg mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Krish Thawani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}