import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-lg animate-bounce"
          loading="eager"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Avni <span className="text-cyan-400">Jain</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-300 mb-8 font-medium">
          Full Stack Developer & UI/UX Designer
        </p>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional, and user-centered
          digital experiences. I combine technical expertise with creative
          design to build solutions that make a difference.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
