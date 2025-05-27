import React, { useEffect, useState } from "react";

const Hero = ({ className }) => {
  const words = ["Website", "Mobile App", "Frontend"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFlipping(false);
      }, 300); 
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative h-[60vh] overflow-hidden ${className}`}>
     
      <div className="absolute inset-0 -z-20 bg-white bg-[radial-gradient(#334155_1.2px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 -z-10 bg-gradient-to-t from-white to-transparent" />

   
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-4xl sm:text-6xl font-bold text-gray-900">
          Full Stack{" "}
          <span
            className={`inline-block text-[#10c986] transition-transform duration-300 ease-in-out ${
              isFlipping ? "rotate-x-180 blur-sm" : "rotate-x-0"
            }`}
            style={{
              display: "inline-block",
              transformStyle: "preserve-3d",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          >
            {words[currentWordIndex]}
          </span>{" "}
          Developer
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
