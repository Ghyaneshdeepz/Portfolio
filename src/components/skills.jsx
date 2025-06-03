import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPaintBrush,
} from "react-icons/fa";
import { SiExpo, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "React Native (Expo)", icon: <SiExpo color="#1B9AAA" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express", icon: <SiExpress color="#000" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "UI/UX Design", icon: <FaPaintBrush color="#7c3aed" /> },
];

const Skills = ({ className }) => {
  return (
    <div
      className={`h-auto sm:h-[60vh] bg-white py-10 px-5 relative overflow-visible ${className}`}
    >
      {/* Background blur removed to reduce GPU load */}
      <div className="absolute w-[15rem] h-[15rem] top-[3rem] left-[3rem] bg-[#41a974] rounded-full opacity-20 -z-10"></div>

      <h1 className="w-full sm:max-w-[60rem] mx-auto text-center text-[#2e564d] mb-8 font-bold sm:text-[1.8rem] text-[1.2rem]">
        My Skills
      </h1>

      <div className="max-w-[60rem] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon }, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center p-5 rounded-2xl
              border border-[#2e564d] bg-white shadow-sm
              transition-transform duration-200 ease-in-out
              hover:scale-105 will-change-transform cursor-default
            "
          >
            <div className="text-5xl mb-3">{icon}</div>
            <p className="text-[#2e564d] font-semibold text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
