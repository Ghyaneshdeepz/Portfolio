import React from "react";
import { FlipWords } from "./ui/flip-words";

const Hero = ({ className }) => {
  const words = ["Websites", "Mobileapp", "Frontends"];

  return (
    <div className={`relative h-[60vh] overflow-hidden ${className || ""}`}>
      <div className="absolute inset-0 -z-20 bg-white bg-[radial-gradient(#334155_1.2px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 -z-10 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-6 text-4xl sm:text-6xl font-bold text-gray-900 text-center">
  Full Stack Developer for{" "}
  <span
    className="inline-block relative align-middle"
    style={{ height: "1.5em", width: "200px" }} // adjust width if needed
  >
    <FlipWords words={words} />
  </span>
</h1>



        <p className="max-w-xl text-lg font-medium text-gray-600 mb-8">
          MCA student skilled in React, Tailwind, React Native, Expo, and UI/UX — building modern web and mobile apps.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-lg px-6 py-2 font-semibold bg-[#00ca86] text-gray-900 cursor-pointer hover:bg-[#00b97a] transition-colors duration-300">
            Hire Me
          </button>
          <button className="rounded-lg border px-6 py-2 font-medium border-slate-300 bg-white text-gray-900 cursor-pointer transition-colors duration-300 hover:bg-slate-50">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
