import React, { useState, useEffect, useRef } from "react";
import mobl from '../assets/mbl1.jpg';
import mob2 from '../assets/mbl2.jpg';

const Skills = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Update active dot on scroll
  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`relative h-auto sm:min-h-[80vh] bg-white py-10 px-5 overflow-visible ${className}`}>
      {/* Background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      {/* Radial white fade */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,1)_90%)]" />

      {/* Heading */}
      <h1 className="w-full sm:max-w-[60rem] mx-auto text-center text-[#2e564d] mb-8 font-bold sm:text-[1.8rem] text-[1.2rem] relative z-20">
        Showcase
      </h1>

      <div className="relative z-20 flex flex-col sm:flex-row sm:space-x-12 sm:items-center">
        {/* Image scroll container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar sm:overflow-visible sm:space-x-4 sm:flex-shrink-0 sm:w-1/2 scroll-snap-x"
        >
          <img
            src={mobl}
            alt="Mobile Design 1"
            className="flex-shrink-0 w-[80vw] sm:w-full max-w-[300px] object-contain rounded-2xl shadow-lg scroll-snap-align-start"
          />
          <img
            src={mob2}
            alt="Mobile Design 2"
            className="flex-shrink-0 w-[80vw] sm:w-full max-w-[300px] object-contain rounded-2xl shadow-lg scroll-snap-align-start"
          />
        </div>

    
        <div className="sm:hidden flex justify-center mt-4 space-x-2">
          {[0, 1].map((index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                activeIndex === index ? "bg-[#2e564d]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Text section */}
        <div className="hidden sm:block sm:w-1/2 text-[#2e564d] mt-8 sm:mt-0">
          <h2 className="text-4xl font-semibold mb-4">AQI Monitoring App</h2>
          <p className="text-2xl leading-relaxed">
            This project is a <strong>MERN stack</strong> and <strong>React Native</strong>-based application designed to monitor Air Quality Index (AQI) values in real time. It integrates IoT sensors to collect data and presents the information in a mobile-friendly dashboard, providing users with easy access to environmental conditions anytime, anywhere.
          </p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-snap-x {
          scroll-snap-type: x mandatory;
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
};

export default Skills;
