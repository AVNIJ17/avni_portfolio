import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
  title: 'Software Development Engineer - I',
  company: 'DesignoWeb',
  location: 'Noida, IN',
  period: 'Feb 2025 - Present',
  description:
    'Contributed to full-stack web development, primarily focusing on frontend engineering using React, JavaScript, and modern UI frameworks. Gained hands-on experience with backend integration and worked on 4+ client projects involving performance optimization and scalable design. Also explored Shopify and Webflow for e-commerce and design automation tasks.',
  achievements: [
    'Delivered 4+ responsive and optimized web applications for diverse clients',
    'Enhanced UI/UX consistency and application performance across multiple projects',
    'Collaborated closely with designers and backend teams to ensure seamless API integration'
  ]
}

  ];

  // const education = [
  //   {
  //     degree: 'Post Graduation in Full Stack Development',
  //     school: 'CDAC',
  //     location: 'India',
  //     period: '2022 - 2023',
  //     description: 'Specialized in modern web technologies and full-stack application development.',
  //     achievements: ['Completed multiple full-stack projects', 'Hands-on experience with React, Node.js, and databases']
  //   },
  //   {
  //     degree: 'Bachelor of Technology',
  //     school: 'SVVV',
  //     location: 'India',
  //     period: '2016 - 2020',
  //     description: 'Focused on computer science fundamentals and software development.',
  //     achievements: ['Graduated with good academic performance', 'Participated in coding competitions and hackathons']
  //   }
  // ];
const education = [
  {
    degree: 'Post Graduation in Advanced Computing',
    school: 'Centre for Development of Advanced Computing',
    location: 'Mumbai',
    period: '2022 - 2023',
    description:
      'Specialized in Java and Full Stack Web Development with hands-on training in modern technologies like React, Node.js, Spring Boot, and databases.',
    achievements: [
      'Built and deployed multiple full-stack web applications using Java, Spring Boot, React, and MySQL',
      'Gained expertise in backend API development, RESTful services, and end-to-end project implementation'
    ]
  },
  {
    degree: 'Bachelor of Technology',
    school: 'SVVV',
    location: 'Indore',
    period: '2016 - 2020',
    description:
      'Completed undergraduate studies, building strong fundamentals in problem-solving, teamwork, and project execution.',
    achievements: [
      'Demonstrated analytical and project management skills through academic and practical projects',
      'Successfully transitioned into software development through continuous learning and upskilling'
    ]
  }
];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center mb-8"
            >
              <Briefcase className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Professional Experience
              </h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-cyan-700 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full"></div>
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
                    <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Briefcase size={14} className="mr-1" /> {exp.company}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" /> {exp.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-300 flex items-start" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>


            <div className="w-full overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center mb-8"
              >
                <GraduationCap className="w-8 h-8 text-blue-300 mr-3 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white truncate min-w-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Education
                </h3>
              </motion.div>
            </div>


            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-700 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
                    <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-300">
                      <span className="flex items-center">
                        <GraduationCap size={14} className="mr-1" /> {edu.school}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" /> {edu.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" /> {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      {edu.description}
                    </p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-300 flex items-start" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
