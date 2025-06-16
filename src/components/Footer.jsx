import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-center py-8 border-t border-white/10 relative overflow-hidden">
      {/* Animated Glow Circles */}
      <motion.div
        className="absolute top-2 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-2 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <div className="relative z-10">
        <p className="text-white/80 text-sm mb-2">
          © {new Date().getFullYear()} <span className="font-bold text-white">Santhosh Mariappan</span>. All rights reserved.
        </p>
        <div className="space-x-6 text-sm flex justify-center">
          <a
            href="mailto:santhoshmariappan13@gmail.com"
            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 font-semibold hover:underline transition-all duration-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/santhosh-m-2b1471220"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-semibold hover:underline transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/santhoshmariappam13"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 font-semibold hover:underline transition-all duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;