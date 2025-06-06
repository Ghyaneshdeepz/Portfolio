import React, { useState } from "react";
import logo from '../assets/logo.png'; // Make sure this path is correct
import { MdArrowDropDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-white sticky top-0 z-50 shadow-[0px_15px_18px_rgba(0,0,0,0.06)] px-6 py-3 rounded-2xl transition-all duration-500 ${className}`}>
            <div className="flex justify-between items-center">
                {/* Logo and Links */}
                <div className="flex items-center space-x-4 sm:space-x-8">
                    <div className="px-2 py-2 sm:px-3 sm:py-3 bg-[#00ca86] rounded-[1rem] sm:rounded-[1.3rem]">
                        <h1 className="font-bold text-xl sm:text-2xl text-white">TB</h1>
                    </div>
                    <div className="font-montserrat font-bold text-lg sm:text-2xl text-[#10c986]">TechBeedi</div>

                    {/* Desktop Menu */}
                    <div className="space-x-5 hidden sm:flex items-center">
                        <a href="#" className="text-gray-800 font-semibold">Home</a>
                        <a href="#" className="text-gray-800 font-semibold">About Me</a>
                        <a href="#" className="text-gray-800 flex items-center font-semibold">
                            <span>Gallery</span>
                            <MdArrowDropDown className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-800 font-semibold">Updates</a>
                    </div>
                </div>


                <div className="flex items-center space-x-2.5">
                    <button className="hidden sm:inline-block bg-[#ccf4e7] px-2 text-[#41a974] text-sm sm:text-[1rem] sm:px-5 sm:py-2 font-semibold py-1 rounded-xl whitespace-nowrap ">
                        Report Issue
                    </button>
                    <button className="bg-[#00ca86] px-3 py-2 text-gray-800 text-xs sm:text-[1rem] sm:px-4 sm:py-2 font-bold rounded-md whitespace-nowrap">
                        Contact Me
                    </button>

                   
                    <div className="sm:hidden">
                        {isMenuOpen ? (
                            <HiX
                                className="text-2xl text-gray-800 cursor-pointer"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <HiMenu
                                className="text-2xl text-gray-800 cursor-pointer"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                </div>
            </div>

           
            <div className={`sm:hidden px-6 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col items-center space-y-4 py-3">
                    <a href="#" className="text-gray-800 font-semibold">Home</a>
                    <a href="#" className="hover:bg-amber-50 text-gray-800 font-semibold">About Me</a>
                    <a href="#" className="text-gray-800 flex items-center font-semibold">
                        <span>Gallery</span>
                        <MdArrowDropDown className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-800 font-semibold">Updates</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
