import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-white">JobPortal</h1>
            <p className="text-gray-400 mt-2">
              Your dream job is just a click away.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <div className="flex flex-col space-y-2">
              <a href="/" className="hover:text-white transition duration-300">Home</a>
              <a href="/about" className="hover:text-white transition duration-300">About</a>
              <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
              <a href="/jobs" className="hover:text-white transition duration-300">Jobs</a>
              <a href="/privacy" className="hover:text-white transition duration-300">Privacy Policy</a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Job Street</p>
            <p className="text-gray-400">City, State, 12345</p>
            <p className="text-gray-400">Email: info@jobportal.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
