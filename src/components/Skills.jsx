import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "Tailwind CSS", "JavaScript",
  "React.js", "Redux Toolkit", "Node.js", "Express.js",
  "MongoDB", "Git", "GitHub", "Postman",
  "REST APIs"
];

function Skills() {
  return (
    <section
  id="skills"
  className="relative py-20 px-4 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600"
><div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none" />
  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-orange-300 to-yellow-600 mb-10 drop-shadow-lg text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/80 border-2 border-transparent rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
              style={{
                borderImage: "linear-gradient(to right, #fde68a, #f9a8d4, #a78bfa) 1"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-400 to-purple-500 group-hover:from-yellow-400 group-hover:via-pink-400 group-hover:to-purple-500 transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;