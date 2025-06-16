import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "full Stack",
    provider: "GUVI",
    link: "https://drive.google.com/file/d/19F9w0wIjl9KUjmnWXnq6SJPPh9GT2Zk4/view?usp=drive_link",
    color: "from-blue-400 via-purple-400 to-pink-400",
  },
  {
    title: "frontend Development",
    provider: "GUVI",
    link: "https://drive.google.com/file/d/1_o7KjzaQx8MRLLaXxLb8jUvXLywyIoAj/view?usp=drive_link",
    color: "from-yellow-400 via-pink-400 to-purple-400",
  },
  {
    title: "react.js",
    provider: "GUVI",
    link: "https://drive.google.com/file/d/1gOuQydrTrIFHhSj_1WEB29WNm3hiYL6q/view?usp=drive_link",
    color: "from-indigo-400 via-pink-400 to-yellow-400",
  },
  {
    title: "Node.js, Express, MongoDB ",
    provider: "GUVI",
    link: "https://drive.google.com/file/d/1M2jeZuPsTyIkTXmGWidGimOqb7PqNInY/view?usp=sharing",
    color: "from-green-400 via-blue-400 to-purple-400",
  },
  {
    title: "Database",
    provider: "GUVI",
    link: "https://drive.google.com/file/d/1mojIF0OWMYl7ZioluDfDkN6ofGilfLqO/view?usp=drive_link",
    color: "from-cyan-400 via-blue-400 to-indigo-400",
  },
  {
    title: "Advanced JS",
    provider: "GUVI",
    link: "https://drive.google.com/file/d/15XeclnaWJoVeUPgcsFa0BaCZrYIc0y-U/view?usp=drive_link",
    color: "from-pink-400 via-yellow-400 to-red-400",
  },
  {
    title: "Machine Learning",
    provider: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1vea20LFxVbdhmEf5sjVSMlssgG0nvt4v/view?usp=drive_link",
    color: "from-pink-400 via-yellow-400 to-red-400",
  },
  {
    title: "Artificial Intelligence basics",
    provider: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1vYw1ngt28_qzF09WWmSAFxcRKEPb3m7K/view?usp=drive_link",      
    color: "from-pink-400 via-yellow-400 to-red-400",
  }
];

function Courses() {
  return (
    <section
      id="courses"
      className="py-20 px-4 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 relative overflow-hidden"
    >
      {/* Decorative Glow Circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 mb-10 text-center drop-shadow-lg">
          Certificates & Courses
        </h2>
        <div className="space-y-8">
          {certificates.map((cert, idx) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300 group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: "backOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${cert.color} mb-1`}>
                {cert.title}
              </div>
              <div className="text-white/80 font-semibold">{cert.provider}</div>
              <div className="mt-2 text-xs text-white/60 group-hover:underline">
                View Certificate &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
