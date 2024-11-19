import React, { useState } from "react";

const projects = [
  {
    title: "Admin Manager PaaS",
    description: "Streamlined operations for ORWA by managing HR, memberships, and more.",
    images: ["https://via.placeholder.com/400x300", "https://via.placeholder.com/400x300"],
    link: "#",
  },
  {
    title: "Car Game",
    description: "A dynamic and interactive gap analysis map for ORWA.",
    iframe: "https://mj-flying-cars.netlify.app/",
  },
  {
    title: "Gapp Map Project",
    description: "A dynamic and interactive gap analysis map for ORWA.",
    iframe: "https://orwa.org/gapp-map/",
  },
  {
    title: "Associate Directory",
    description: "A dynamic and interactive gap analysis map for ORWA.",
    iframe: "https://orwa.org/associate-directory/",
    link: "https://orwa.org/associate-directory/"
  },
  {
    title: "SaaS Platform for GoVolt",
    description: "Unified systems with Nx Monorepo and optimized infrastructure.",
    images: ["https://via.placeholder.com/400x300", "https://via.placeholder.com/400x300"],
    link: "#",
  },
  {
    title: "Web Blog Application",
    description: "Built a blog app with Firebase and CRUD features.",
    images: ["https://via.placeholder.com/400x300", "https://via.placeholder.com/400x300"],
    link: "#",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (index: any) => {
    setCurrentProject(index);
  };

  const project = projects[currentProject];

  return (
    <section className="relative h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-5xl px-8 py-6">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-blue-600 p-4 rounded-full shadow-md hover:bg-blue-500 transition z-10 focus:ring-4 focus:ring-blue-400"
          aria-label="Previous Project"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-blue-600 p-4 rounded-full shadow-md hover:bg-blue-500 transition z-10 focus:ring-4 focus:ring-blue-400"
          aria-label="Next Project"
        >
          &#8594;
        </button>

        {/* Project Card */}
        <div className="relative bg-gray-800 bg-opacity-80 rounded-2xl shadow-xl p-8 transition-transform transform hover:scale-105">
          <h3 className="text-4xl font-extrabold">{project.title}</h3>
          <p className="mt-4 text-gray-300 text-lg">{project.description}</p>

          {/* Display Images or Iframe */}
          {project.iframe ? (
            <div className="mt-6">
              <iframe
                src={project.iframe}
                title={project.title}
                className="w-full h-[400px] rounded-lg shadow-lg border border-gray-700"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {project.images && project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - ${index}`}
                  className="rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                />
              ))}
            </div>
          )}

          {/* View Project Button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-400"
            >
              View Project
            </a>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentProject ? "bg-blue-500" : "bg-gray-500"
              } focus:outline-none hover:scale-125 transition-transform`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;