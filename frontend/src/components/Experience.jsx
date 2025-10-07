import React from "react";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
   const experiences = [
    {
      title: "Full Stack Developer",
      company: "DesignoWeb",
      location: "Remote / India",
      period: "Mar 2025 - Present",
      description: "Working on full-stack web development projects, handling both frontend and backend using React, Node.js, and Java.",
      achievements: [
        "Built responsive web applications with modern UI/UX.",
        "Integrated backend services using Java and Node.js.",
        "Collaborated on team projects to deliver high-quality solutions.",
      ],
    },
    
  ];

const education = [
    {
      degree: "Post Graduate Diploma in Advanced Computing",
      school: "CDAC",
      location: "India",
      period: "2024 - 2025",
      description: "Specialized in full-stack development, cloud computing, and modern web technologies.",
      achievements: ["Hands-on projects in frontend & backend development", "Training in React, Node.js, Java, and databases"],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Tech SVVV",
      location: "India",
      period: "2020 - 2024",
      description: "Completed undergraduate studies in computer science with focus on software development and algorithms.",
      achievements: ["GPA: 8.5/10", "Participated in coding competitions and hackathons"],
    },
  ];
  const TimelineItem = ({ title, description, achievements, companyOrSchool, location, period, iconColor }) => (
    <div className="relative pl-8 border-l-2 border-gray-700 last:border-l-0">
      <div className={`absolute -left-2 top-0 w-4 h-4 ${iconColor} rounded-full`}></div>
      <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-300">
          <span className="flex items-center">
            {companyOrSchool.icon}
            {companyOrSchool.name}
          </span>
          <span className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {location}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {period}
          </span>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {achievements.map((ach, idx) => (
            <li key={idx} className="text-sm text-gray-300 flex items-start">
              <span className={`w-2 h-2 ${iconColor} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
              {ach}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience & Education</h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <TimelineItem
                  key={idx}
                  title={exp.title}
                  description={exp.description}
                  achievements={exp.achievements}
                  companyOrSchool={{ icon: <Briefcase size={14} className="mr-1" />, name: exp.company }}
                  location={exp.location}
                  period={exp.period}
                  iconColor="bg-cyan-600"
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <TimelineItem
                  key={idx}
                  title={edu.degree}
                  description={edu.description}
                  achievements={edu.achievements}
                  companyOrSchool={{ icon: <GraduationCap size={14} className="mr-1" />, name: edu.school }}
                  location={edu.location}
                  period={edu.period}
                  iconColor="bg-blue-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
