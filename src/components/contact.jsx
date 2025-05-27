
import React from "react";

const Contact=({classname})=>{
return(
<div className="h- w-full gap-0.5 flex flex-col sm:flex-row p-8 ">
<div className="w-full sm:w-1/2 flex flex-col items-center justify-center px-10">
<h2 className="text-3xl font-bold text-[#2e564d]">Get in Touch</h2>
  <p className="text-xl font-semibold text-center text-gray-800 mt-5">Interested in working together or have any questions? Feel free to get in touch — I’m always open to new opportunities, collaborations, or simply connecting with fellow tech enthusiasts.</p>
  

</div>
<div className="w-full sm:w-1/2 p-10 relative">
<div className="absolute flex items-center inset-0 z-0 h-full justify-center" >
<div className=" w-[15rem] h-[15rem] mx-auto bg-green-200 rounded-full blur-3xl"></div>

</div>
<div className="w-full h-full relative z-10">
  <div
    className="
      rounded-2xl border border-[#2e564d] bg-white/30 backdrop-blur-lg shadow-lg ring-1 ring-white/10
      transform transition duration-300 ease-in-out hover:rotate-[0.5deg] hover:scale-[1.01] hover:shadow-2xl
    "
  >
    <div className="grid grid-cols-2 p-8 gap-4">
      <input
        type="text"
        placeholder="Enter Your Name"
        className="border border-[#2e564d] bg-white/30 backdrop-blur-lg p-3 rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        className="border border-[#2e564d] bg-white/30 backdrop-blur-lg p-3 rounded-md"
      />
      <input
        type="text"
        placeholder="Occupation"
        className="border border-[#2e564d] bg-white/30 backdrop-blur-lg p-3 rounded-md"
      />
      <input
        type="number"
        placeholder="Phone No"
        className="border border-[#2e564d] bg-white/30 backdrop-blur-lg p-3 rounded-md"
      />
      <input
        type="text"
        placeholder="Work Discription"
        className="col-span-2 border border-[#2e564d] bg-white/30 backdrop-blur-lg p-3 rounded-md"
      />
    </div>
  </div>
</div>

</div>

</div>
);
};
export default Contact;

