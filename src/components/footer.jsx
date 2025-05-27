import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2e564d] text-white py-8 px-5 sm:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
       
        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} Ghyanesh S Y. All rights reserved.
        </div>

        <div className="text-center sm:text-left">
          <p>Contact me: <a href="mailto:ghyanesh.co@gmail.com" className="underline hover:text-green-400">ghyanesh.co@gmail.com</a></p>
          <p className="mt-1 text-sm opacity-70">Based in India 🇮🇳</p>
        </div>

        
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/ghyanesh72-nig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ghyanesh-sy-5857152b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:ghyanesh.co@gmail.com"
            aria-label="Email"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
