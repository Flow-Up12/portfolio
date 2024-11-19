import React from "react";

const skills = [
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "React.js",
  "Firebase",
  "TypeScript",
  "Express",
  "Strapi",
  "SQL",
  "Vue.js",
  "Tailwind",
  "Mui-Material",
  "Google Cloud",
  "Docker",
  "Nest.js",
];

const TechnicalSkills = () => (
  <section className="bg-gray-800 text-white py-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-700 py-2 px-4 rounded text-center hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalSkills;