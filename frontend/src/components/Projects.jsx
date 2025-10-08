import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {

 const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, fully responsive portfolio built with React, Tailwind CSS, and Framer Motion to showcase my skills, projects, and contact details with backend integration for contact form submission.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express"],
    liveUrl: "https://avni-portfolio-delta.vercel.app",
    githubUrl: "https://github.com/AVNIJ17/avni_portfolio",
  },
      {
      title: "Task Management App",
      description:
        "Collaborative task management app with real-time updates and drag-and-drop.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Responsive dashboard providing forecasts and interactive maps using APIs.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },

];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-2"
        >
          Featured Projects
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-500 mx-auto mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Some of my recent projects showcasing skills in web development,
          design, and problem-solving.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 mb-4"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-900 text-cyan-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex gap-4"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-gray-200 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
