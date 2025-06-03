import React, { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "IoT-Based Air Quality Index System",
    description: "Real-time air quality monitoring using sensors and cloud dashboards.",
  },
  {
    title: "Student Portfolio Management System",
    description: "A full-featured portal for students to showcase their academic growth and projects.",
  },
  {
    title: "Face Recognition Attendance System",
    description: "MERN-based platform for attendance tracking with real-time face detection.",
    videoLink: "https://youtu.be/AF46tPiYG5M?si=PFaYaKJxyVFy7Ghv",
  },
];

const Projects = ({ className }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showVideoLink, setShowVideoLink] = useState(false);

  const handleFadeClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowVideoLink(true);
    }, 500); // match with transition duration
  };

  return (
    <section
      className={`min-h-[60vh] rounded-2xl bg-[#F6F6F6] py-12 px-6 sm:px-16 ${className}`}
    >
      <h1 className="text-center text-[#2E564D] font-extrabold text-3xl sm:text-4xl mb-12 tracking-wide">
        My Projects
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {projects.map(({ title, description, videoLink }, index) => {
          const isFaceProject = title === "Face Recognition Attendance System";

          // Show the video link
          if (isFaceProject && showVideoLink) {
            return (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-3xl shadow-lg p-7 transition-opacity duration-500 opacity-100"
              >
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#41A974] font-semibold text-lg underline"
                >
                  Watch Video: Face Recognition Attendance System
                </a>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`relative group bg-white rounded-3xl border border-transparent shadow-lg hover:shadow-2xl transition-opacity duration-500 cursor-pointer p-7 flex flex-col justify-between ${
                isFaceProject && fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              onClick={() => {
                if (isFaceProject) handleFadeClick();
              }}
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#41A974] via-[#4dd39e] to-[#41A974] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl -z-10"></div>

              <div className="flex items-center gap-3 mb-6">
                <FaProjectDiagram className="text-[#41A974] text-2xl" />
                <h2 className="text-[#2E564D] font-semibold text-xl">{title}</h2>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
