import React, { useState, useEffect } from "react";
import mobl from "../assets/mbl1.jpg";
import mobl2 from "../assets/mbl2.jpg";

const Skills = ({ className }) => {
  const images = [mobl, mobl2];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col md:flex-row items-center gap-0 sm:gap-85 px-10 py-10 sm:px-20 sm:py-15 ${className}`}>
      
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-black">
          Real-Time AQI Monitoring App
        </h1>
        <p className="text-gray-600 text-lg">
          Developed a mobile application to monitor real-time Air Quality Index (AQI) data using React Native and Tailwind CSS. The backend was built with Node.js and Express, connected to MongoDB Atlas for cloud data storage and retrieval.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#00ca86] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">
            <i className="fab fa-apple"></i> Contact Now
          </button>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg justify-center flex items-center gap-2">
            ▶ Watch the demo
          </button>
        </div>

        <div className="pt-6">
          <p className="text-sm text-gray-500 mb-3 font-semibold">Tech Stack</p>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start grayscale opacity-70">
            <span className="font-bold">React Native</span>
            <span className="font-bold">Tailwind CSS</span>
            <span className="font-bold">Node.js</span>
            <span className="font-bold">Express</span>
            <span className="font-bold">MongoDB Atlas</span>
          </div>
        </div>
      </div>

   
      <div className="relative mt-10 md:mt-0 w-72 h-[600px] sm:w-80 sm:h-[650px] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900">
        <div className="absolute -inset-[1px] border-[3px] border-zinc-700 border-opacity-40 rounded-[37px] pointer-events-none"></div>

        <div className="relative w-full h-full rounded-[37px] overflow-hidden bg-zinc-900/10">
          <img
            src={images[currentImage]}
            alt="Mobile Design"
            className="w-full h-full object-cover transition duration-700 ease-in-out"
          />
        </div>

        <div className="absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
        <div className="absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
        <div className="absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
        <div className="absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
      </div>
    </div>
  );
};

export default Skills;
