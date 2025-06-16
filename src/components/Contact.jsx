import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 80568 15506",
    href: "tel:+918056815506",
    color: "from-yellow-400 via-pink-400 to-purple-400",
    animation: { rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "santhoshmariappan13@gmail.com",
    href: "mailto:santhoshmariappan13@gmail.com",
    color: "from-pink-400 via-purple-400 to-indigo-400",
    animation: { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/santhosh-m-2b1471220",
    href: "https://www.linkedin.com/in/santhosh-m-2b1471220",
    color: "from-blue-400 via-purple-400 to-pink-400",
    animation: { x: [0, 10, -10, 0], scale: [1, 1.1, 1] }
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/santhoshmariappam13",
    href: "https://github.com/santhoshmariappam13",
    color: "from-purple-400 via-pink-400 to-yellow-400",
    animation: { y: [0, -10, 10, 0], scale: [1, 1.1, 1] }
  }
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 relative overflow-hidden"
    >
      {/* Decorative Glow Circles */}
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
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 mb-8 drop-shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-white/90 text-lg leading-relaxed mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          I'm actively open to opportunities as a{" "}
          <span className="font-medium text-yellow-200">Frontend or Full Stack Developer</span>.
          If you're looking for someone who can build scalable web apps, collaborate on exciting products, or contribute to creative tech teams —<br />
          <span className="font-medium text-pink-200">feel free to connect with me directly via any of the platforms below.</span>
        </motion.p>

        <div className="space-y-6 text-left text-lg">
          {contactItems.map((item, idx) => (
            <motion.div
              key={item.label}
              className={`flex items-center gap-4 px-6 py-4 rounded-xl bg-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group border-l-8 border-gradient-to-r ${item.color} hover:scale-105`}
             whileHover={item.animation}

             transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}

            >
              <span
                className={`text-2xl p-2 rounded-full bg-gradient-to-tr ${item.color} text-white shadow-lg group-hover:scale-125 transition-transform duration-300`}
              >
                {item.icon}
              </span>
              <span className="font-semibold text-white">{item.label}:</span>
              <a
                href={item.href}
                target={item.label === "Phone" || item.label === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`text-white underline-offset-4 decoration-2 decoration-wavy hover:underline font-bold transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
              >
                {item.value}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;