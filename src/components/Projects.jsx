import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Event Managemt Platform",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/santhoshmariappam13/EMP-FE.git",
    demo: "https://empfrontend.netlify.app/",
    description:
      "A full-featured Event Management Platform built using the MERN stack, designed to streamline the process of organizing, managing, and attending events. The platform supports role-based access for admins and users, providing a seamless experience for event creation, discovery, registration, and management.",
  },
  {
    title: "🛒 E-commerce App – Fake Store API",
    tech: ["React.js", "Tailwind CSS", "Fake Store API"],
    github: "https://github.com/santhoshmariappam13/cart-react.git",
    demo: "https://fakestore-3.netlify.app/",
    description:
      "A modern e-commerce front-end built with React.js and styled using Tailwind CSS. It integrates with the Fake Store API to fetch dynamic product listings. Users can view product details and manage a shopping cart using a modal interface, with responsive design for mobile and desktop.",
  },
  {
    title: "Memory Game (Card Matching)",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/santhoshmariappam13/Memory-Game.git",
    demo: "https://memorygame5222.netlify.app/",
    description:
      "A classic memory card-matching game developed using HTML, CSS, and JavaScript. Users flip cards to match pairs and test their memory skills. Built with flip animations, timer, and basic score logic.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 relative overflow-hidden"
    >
      {/* Decorative Glow Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 mb-12 text-center drop-shadow-lg animate-fade-in-down">
          Projects
        </h2>
        <div className="space-y-12">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 hover:scale-105 hover:-rotate-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 80, scale: 0.95, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.18, ease: "backOut" }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.07, rotate: 2, boxShadow: "0 8px 32px 0 rgba(236,72,153,0.25)" }}
            >
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                  {project.title}
                </h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                <div className="space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold shadow hover:scale-110 transition-transform duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-white rounded-full font-semibold shadow hover:scale-110 transition-transform duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex flex-wrap justify-center md:justify-end gap-2">
                {project.tech.map((tech, id) => (
                  <motion.span
                    key={id}
                    className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-indigo-900 font-semibold text-xs px-4 py-1 rounded-full shadow"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.18 + id * 0.07, ease: "backOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {tech}
                    
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
             <div className="mt-12 text-center text-white/80 font-semibold text-lg">
          For more projects, refer to my GitHub.
        </div>
      </div>
    </section>
  );
}

export default Projects;