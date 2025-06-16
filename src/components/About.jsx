import React from "react";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-700 relative overflow-hidden"
    >
      {/* Decorative Glow Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        //viewport={{ once: true, amount: 0.3 }}
      >
        {/* Profile Image with Gradient Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-400 blur-lg animate-pulse"></div>
          <img
            src={profileImg}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover object-top relative z-10"
          />
        </div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 mb-6 drop-shadow-lg">
          About Me
        </h2>
        <p className="text-white/90 text-lg leading-relaxed mb-4 text-center">
  Hello, I’m <span className="font-semibold text-yellow-200">Santhosh</span> — a passionate 
  <span className="font-medium text-pink-200"> MERN Stack Developer</span> with a solid background in both 
  <span className="font-medium text-purple-200"> software and hardware</span> domains. I enjoy building full-stack applications with a focus on performance and user experience.
</p>
<p className="text-white/90 text-lg leading-relaxed mb-4 text-center">
  My academic journey includes contributions to 
  <span className="font-medium text-purple-200"> electrical and IOT projects</span>, blending logical thinking with hands-on circuit design and IoT-based prototypes. This multidisciplinary exposure has shaped my ability to solve real-world problems using both code and circuits.
</p>
<p className="text-white/90 text-lg leading-relaxed text-center">
  Currently, I’m focused on strengthening my skills in the 
  <span className="font-medium text-yellow-200"> MERN stack, REST API development</span>, and 
  delivering clean, scalable solutions. I’m open to software development roles, collaborative projects, and freelance opportunities.
</p>

        <a
          href="https://drive.google.com/file/d/1TmRA95v1MLB_lYtsVVnDRmZhbLvd4-9O/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 mt-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-bounce"
        >
          View My Document
        </a>
      </motion.div>
    </section>
  );
}

export default About;