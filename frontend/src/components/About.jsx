import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

function About() {
  const [yearsExp, setYearsExp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const controls1 = animate(0, 5, {
      duration: 2,
      onUpdate: (value) => setYearsExp(Math.floor(value)),
    });
    const controls2 = animate(0, 50, {
      duration: 2,
      delay: 0.5,
      onUpdate: (value) => setProjects(Math.floor(value)),
    });
    const controls3 = animate(0, 25, {
      duration: 2,
      delay: 1,
      onUpdate: (value) => setClients(Math.floor(value)),
    });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, []);

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Javascript"] },
    { category: "Backend", items: ["Node.js", "Java", "MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
    { category: "Misc", items: ["UI/UX Design", "DSA", "OOPs"] },
  ];

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-300" />,
      title: "Design Thinking",
      description: "Combining aesthetic appeal with functional design to create exceptional user experiences.",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-300" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver projects on time and within scope.",
    },
  ];

  const stats = [
    { label: "Years of Experience", value: yearsExp },
    { label: "Projects Completed", value: projects },
    { label: "Happy Clients", value: clients },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // //viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            // //viewport={{ once: true }}
          >
            <motion.img
              src="/about.png"
              alt="Working on projects"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              loading="lazy"
              width="600"
              height="400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            //viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
              With over 5 years of experience in web development and design, I specialize in creating
              digital solutions that are both beautiful and functional. My journey began with a curiosity
              about how things work on the web, and it has evolved into a passion for crafting experiences
              that users love.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
              I believe in the power of good design and clean code to solve real-world problems. Whether
              it's building a responsive web application or designing an intuitive user interface, I approach
              each project with attention to detail and a focus on user needs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source
              projects, or enjoying a good cup of coffee while sketching out ideas for my next project.
            </p> */}
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
  I am a passionate full-stack developer having hands-on experience in building modern web applications. I specialize in creating responsive, user-friendly interfaces and robust backend solutions using Java, Node.js, and modern frontend frameworks like React and Tailwind CSS.
</p>
<p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
  My expertise spans the entire web development stack — from designing intuitive user interfaces to developing scalable backend systems and working with databases. I enjoy turning complex problems into simple, efficient solutions while ensuring high-quality, maintainable code.
</p>
<p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Open Sans, sans-serif" }}>
  I am always eager to learn new technologies, improve my skills, and contribute to projects that make a real impact. When I'm not coding, I enjoy exploring new development trends, optimizing workflows, and collaborating with other developers to bring innovative ideas to life.
</p>

          </motion.div>
        </div>

    

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          //viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              //viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
              className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {highlight.title}
              </h3>
              <p className="text-gray-300" style={{ fontFamily: "Open Sans, sans-serif" }}>
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          //viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                //viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md"
              >
                <h4 className="text-xl font-semibold text-cyan-400 mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      //viewport={{ once: true }}
                      className="text-gray-300"
                      style={{ fontFamily: "Open Sans, sans-serif" }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
