import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "JavaScript", "HTML", "CSS", "Node.js", "React.js",
  "Firebase", "TypeScript", "Express", "Strapi", "SQL",
  "Vue.js", "Tailwind", "Mui-Material", "Google Cloud", "Docker", "Nest.js", "Dart", "Flutter"
];

const Skills = () => (
  <section className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, duration: 0.5 },
        },
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="p-2 bg-gray-700 rounded-md text-center hover:bg-gray-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          {skill}
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;