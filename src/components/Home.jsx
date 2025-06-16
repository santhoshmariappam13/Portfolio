import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] lg:min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 overflow-hidden">
      {/* Animated Decorative Circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
            My Portfolio
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          Explore my{" "}
          <span className="font-semibold text-yellow-200">projects</span> and{" "}
          <span className="font-semibold text-pink-200">skills</span>
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 10px 20px 0 rgba(236, 72, 153, 0.3)",
              "0 20px 40px 0 rgba(236, 72, 153, 0.5)",
              "0 10px 20px 0 rgba(236, 72, 153, 0.3)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
}
export default Hero;