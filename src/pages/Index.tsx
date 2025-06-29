
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, ExternalLink, Calendar, MapPin, Award, Code, Database, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const skills = [
    { name: "HTML/CSS", icon: Code, level: "Advanced" },
    { name: "JavaScript", icon: Code, level: "Advanced" },
    { name: "React.js", icon: Code, level: "Intermediate" },
    { name: "AngularJS", icon: Code, level: "Intermediate" },
    { name: "Tailwind CSS", icon: Code, level: "Advanced" },
    { name: "Python", icon: Code, level: "Intermediate" },
    { name: "C/C++", icon: Code, level: "Intermediate" },
    { name: "Git/GitHub", icon: Github, level: "Advanced" }
  ];

  const projects = [
    {
      title: "Water and Electricity Bill Management System",
      description: "Major project tracking utility bills with automated payment reminders and comprehensive records management.",
      tech: ["Frontend Design", "Backend Logic", "Database Management"],
      period: "Dec 2024",
      status: "Major Project"
    },
    {
      title: "Chit Chat - Real-time Anonymous Chat",
      description: "Interactive chat application enabling real-time anonymous conversations with modern UI/UX.",
      tech: ["HTML", "CSS", "JavaScript", "AngularJS"],
      period: "Jan 2022 – May 2022",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Professional showcase of projects and technical skills with responsive design.",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
      period: "2024",
      status: "Live"
    },
    {
      title: "Weather App",
      description: "Mobile-responsive weather application with OpenWeatherMap API integration and dark mode.",
      tech: ["JavaScript", "REST API", "Responsive Design"],
      period: "2024",
      status: "Mini Project"
    }
  ];

  const certifications = [
    "Responsive Web Design – freeCodeCamp",
    "JavaScript Algorithms and Data Structures – freeCodeCamp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Abhishek Kumar
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 sm:text-2xl">
              Frontend Developer & Technical Content Writer
            </p>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate about creating responsive, user-focused interfaces that blend performance with elegant design. 
              Experienced in React.js, JavaScript, and modern web technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Mail className="mr-2 h-4 w-4" />
              abhishek993526@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="mr-2 h-4 w-4" />
              +91-8924062059
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex justify-center gap-6"
          >
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              <Code className="mr-2 h-4 w-4" />
              LeetCode
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              <Database className="mr-2 h-4 w-4" />
              GeeksforGeeks
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-300">
              <Globe className="mr-2 h-4 w-4" />
              HackerRank
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate and detail-oriented Frontend Developer with a solid foundation in HTML, CSS, JavaScript, 
                  and frameworks like React.js and AngularJS. With hands-on experience creating responsive and user-focused 
                  interfaces, I am eager to build interactive web experiences that blend performance and design. I also write 
                  technical content and explore backend integration and automation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <skill.icon className="h-12 w-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {skill.level}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="border-purple-400 text-purple-300">
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">GFG Content Writer</CardTitle>
                    <CardDescription className="text-purple-300 text-lg">GeeksforGeeks</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-green-400 text-green-300">
                    Apr 2024 – Jul 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Wrote and published technical articles on Data Structures, Algorithms, and Web Technologies 
                  for GeeksforGeeks, contributing to the technical education community.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="mr-2 h-5 w-5 text-purple-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white">B.Tech in Computer Science</h3>
                    <p className="text-gray-300">Institute of Engineering and Rural Technology, Prayagraj</p>
                    <p className="text-purple-300">CGPA: 7.4/10 (till 7th semester)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">12th Grade</h3>
                    <p className="text-gray-300">Shanadilya Public School, Varanasi</p>
                    <p className="text-purple-300">Percentage: 74%</p>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="mr-2 h-5 w-5 text-green-400" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2 text-green-400" />
                        <span className="text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Always open to discussing new opportunities and interesting projects!
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
