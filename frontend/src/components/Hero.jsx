import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 py-20 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-lg"
          loading="eager"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        />

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          variants={fadeInUp}
        >
          Avni <span className="text-cyan-400">Jain</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-blue-300 mb-8 font-medium"
          variants={fadeInUp}
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with creative design to build solutions that make a difference.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={fadeInUp}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition-colors duration-200"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
