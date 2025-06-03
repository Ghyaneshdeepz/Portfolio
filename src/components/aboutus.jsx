import React, { useState } from "react";
import img2 from '../assets/img2.png';

const Aboutus = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`h-auto sm:h-[70vh] bg-white py-5 px-5 sm:pr-15 relative overflow-visible ${className}`}>
      <div className="relative flex flex-col sm:flex-row h-full transition-all duration-200 overflow-visible">
        <div className="absolute w-[15rem] top-15 left-15 h-[15rem] bg-[#41a974] rounded-full blur-3xl" ></div>

        <div className="w-full sm:w-2xl flex items-center mt-2 sm:mt-10 justify-center z-10">
          <div className="w-[14rem] sm:w-[17rem] h-[20.4rem] sm:h-[24.4rem] bg-[#f1f1f1] flex flex-col items-center px-3 border-2 border-[#2e564d] rounded-2xl">
            <div className="w-16 h-3 rounded-2xl bg-white/10 mt-6 border-2 border-[#2e564d]"></div>
            <div className="flex gap-5 mt-5 items-center">
              <h1 className="font-bold text-[#2e564d]">Ghyanesh S Y</h1>
              <div className="w-10 h-10 bg-[#2e564d] rounded-full flex items-center justify-center text-white font-semibold">GS</div>
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
          <button
            className="p-2 px-4 mt-5 cursor-pointer rounded-2xl text-white font-bold bg-[#00ca86]"
            onClick={() => setIsOpen(true)}
          >
            View Resume
          </button>
        </div>
      </div>

{isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 sm:px-8">
    <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-lg relative">
      <button
        className="absolute top-3 right-3 bg-[#41a974] cursor-pointer text-white px-4 py-1 rounded-full"
        onClick={() => setIsOpen(false)}

            >
              Close
            </button>

            
            <div className="text-gray-800">
              <h1 className="text-3xl font-bold text-center mb-2">Ghyanesh S Y</h1>
              <p className="text-center mb-4">📞 +91 9108591464 | ✉️ ghyanesh.co@gmail.com</p>
              <p className="text-center text-sm text-gray-600 mb-6">Lakshmi Nivas House, Bollekinakodi Kukkala Grama, Beltangady</p>

              <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1 border-[#2e564d]">Objective</h2>
                <p className="mt-2 text-sm">
                  A motivated and enthusiastic Full Stack MERN Developer with skills in Tailwind CSS and UI/UX design, seeking an entry-level position to apply my skills and gain practical experience.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1 border-[#2e564d]">Projects</h2>
                <ul className="list-disc list-inside mt-2 text-sm space-y-2">
                  <li>
<strong>IoT AQI Monitor App:</strong> A mobile app built using React Native with a Node.js + Express backend for monitoring air quality index data in real-time using IoT sensors.
                  </li>
                  <li>
                    <strong>Expense Tracker:</strong> Java + MySQL app to track income and expenses.
                  </li>
                  <li>
                    <strong>Student Portfolio:</strong> Node.js + MongoDB system for managing student portfolios with admin review access.
                  </li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1 border-[#2e564d]">Education</h2>
                <ul className="mt-2 text-sm space-y-1">
                  <li><strong>MCA:</strong> Dayananda Sagar Academy of Technology and Management (Pursuing)</li>
                  <li><strong>BCA:</strong> Sacred Heart College - Mangalore University (2020–2023)</li>
                  <li><strong>PUC:</strong> Sacred Heart PU College - EBAC (2018–2020)</li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1 border-[#2e564d]">Certifications</h2>
                <p className="text-sm mt-2">Java Full Stack Development (Spring Boot + React) – by TNS Foundation funded by Capgemini.</p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1 border-[#2e564d]">Skills</h2>
                <div className="text-sm mt-2">
                  <p><strong>Technical:</strong> React (Vite), Tailwind CSS, React Native (Expo), Node.js, Express.js, Java, Python</p>
                  <p><strong>Non-Technical:</strong> Communication, Leadership, Adaptability, Stress Management</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold border-b pb-1 border-[#2e564d]">Languages</h2>
                <p className="text-sm mt-2">English, Hindi, Kannada, Tulu</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutus;
