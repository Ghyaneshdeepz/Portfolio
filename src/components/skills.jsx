import React from "react";
import mobl from '../assets/mbl1.jpg';
import mob2 from '../assets/mbl2.jpg';

const Skills = ({ className }) => {
  return (
    <div
      className={`relative h-auto sm:min-h-[80vh] bg-white py-10 px-5 overflow-visible ${className}`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Radial white fade on all sides */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,1)_90%)]" />

      {/* Heading */}
      <h1 className="w-full sm:max-w-[60rem] mx-auto text-center text-[#2e564d] mb-8 font-bold sm:text-[1.8rem] text-[1.2rem] relative z-20">
        Showcase
      </h1>

      {/* Images container with gap */}
      <div className="flex items-center justify-center space-x-8 relative z-20">
        <img
          src={mobl}
          alt="Mobile Design 1"
          className="w-[40vw] sm:w-[25vw] max-w-[300px]  object-cover rounded-2xl shadow-lg"
        />
        <img
          src={mob2}
          alt="Mobile Design 2"
          className="w-[40vw] sm:w-[25vw] max-w-[300px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Skills;
