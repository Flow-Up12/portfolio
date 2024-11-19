import React from "react";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Hero = () => (
  <section className="hero bg-gradient-to-br from-black to-gray-900 text-white py-10">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold tracking-wide">
        Marcos Jiménez Enero
      </h1>
      <p className="text-xl mt-2">Fullstack Developer</p>
      <div className="mt-4">
        <p className="text-sm">Coppell, Texas</p>
        <p className="text-sm">469-412-9135</p>
        <a
          href="mailto:Marcosje2005@gmail.com"
          className="text-blue-400 hover:text-blue-300 flex items-center justify-center mt-2"
        >
          Marcosje2005@gmail.com <Mail className="ml-2" />
        </a>
      </div>
      <div className="mt-6 flex justify-center">
        <Avatar
          src="./me.jpg"
          sx={{
            width: 180,
            height: 180,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
          }}
          className="animate-float"
        />
      </div>
      <div className="flex justify-center gap-6 mt-6 text-lg">
        <a
          href="https://linkedin.com/in/marcos-jimenez-enero"
          className="hover:text-gray-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="mr-2" /> LinkedIn
        </a>
        <a
          href="https://github.com/Flow-Up12"
          className="hover:text-gray-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Hero;