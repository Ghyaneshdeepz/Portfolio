import React from "react";
import img2 from '../assets/img2.png';

const Aboutus = ({ className }) => {
  return (
    <div className={`h-auto sm:h-[70vh] bg-white py-5 px-5 sm:pr-15 relative overflow-visible ${className}`}>
      <div className="relative flex flex-col sm:flex-row h-full transition-all duration-200 overflow-visible">
        <div className="absolute w-[15rem] top-15 left-15 h-[15rem] bg-[#41a974] rounded-full blur-3xl" ></div>

        <div className="w-full sm:w-2xl flex items-center mt-2 sm:mt-10 justify-center z-10">
          <div className="w-[14rem] sm:w-[17rem] h-[20.4rem] sm:h-[24.4rem] bg-[#f1f1f1] flex flex-col items-center px-3 border-2 border-[#2e564d] rounded-2xl">
            <div className="w-16 h-3 rounded-2xl bg-white/10 mt-6 border-2 border-[#2e564d]"></div>
            <div className="flex gap-5 mt-5 items-center">
              <h1 className="font-bold text-[#2e564d]">Ghyanesh S Y</h1>
              <div className="w-10 h-10 bg-[#2e564d] rounded-full flex items-center justify-center text-white font-semibold">
                GS
              </div>
            </div>
            <div className="w-full h-[12rem] sm:h-[16rem] bg-[#DBDBDB] mt-5 border-2 border-[#2e564d] rounded-xl overflow-hidden">
              <img src={img2} alt="Profile" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 sm:mt-0 w-full items-center justify-center overflow-hidden transition-all duration-100">
          <h1 className="w-full sm:max-w-[60rem] text-center text-[#2e564d] mb-5 font-bold sm:text-[1.8rem] text-[1.2rem]">
            Passion for Tech, Purpose in Innovation
          </h1>
          <p className="w-full sm:max-w-[60rem] text-center text-sm sm:text-xl text-gray-700 leading-relaxed">
            👨‍💻 I’m an MCA student and passionate full stack developer skilled in MERN stack, React Native, Tailwind CSS, and UI/UX design. 🚀 I’ve built projects like an IoT-based air quality monitor, a student portfolio management system, and a face recognition attendance tracker. 🎥 I also run the TechBeedi YouTube channel, where I share coding tutorials, project walkthroughs, and tech tips to help others grow. 💡 I love creating innovative, user-friendly solutions that make a real impact.
          </p>
          <div className="p-1 mt-5 cursor-pointer rounded-2xl text-white font-bold flex w-50 justify-center mx-auto bg-[#00ca86]">
Download Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
