import React from "react";

const Contact = ({ className }) => {
  return (
    <div className={`w-full flex flex-col sm:flex-row gap-6 px-4 py-10 ${className}`}>
      {/* Left Text Block */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center px-4 sm:px-10 text-center sm:text-left">
        <h2 className="text-3xl font-bold text-[#2e564d]">Get in Touch</h2>
        <p className="text-lg sm:text-xl font-medium text-gray-800 mt-4">
          Interested in working together or have any questions? Feel free to get in touch —
          I’m always open to new opportunities, collaborations, or simply connecting with fellow tech enthusiasts.
        </p>
      </div>

     
      <div className="w-full sm:w-1/2 p-4 sm:p-10 relative">
       
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[12rem] h-[12rem] bg-green-200 opacity-20 rounded-full"></div>
        </div>

        <div className="relative z-10 border border-[#2e564d] bg-white rounded-2xl shadow-md p-6 sm:p-8">
          <form 
          action="https://formspree.io/f/meokeopo"
          method="POST"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
                name="name"
              placeholder="Enter Your Name"
              className="p-3 border border-[#2e564d] rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 border border-[#2e564d] rounded-md w-full"
            />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              className="p-3 border border-[#2e564d] rounded-md w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone No"
              className="p-3 border border-[#2e564d] rounded-md w-full"
            />
            <input
              type="text"
              name="workDescription"
              placeholder="Work Description"
              className="p-3 border border-[#2e564d] rounded-md col-span-1 sm:col-span-2 w-full"
            />

           
            <div className="col-span-1 sm:col-span-2 mt-4">
              <button type="submit" className="w-full bg-[#2e564d] text-white py-3 rounded-md hover:bg-[#24483e] transition duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
