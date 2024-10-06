import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-16 px-8 sm:px-6 lg:px-8 h-auto overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-50 to-blue-200 opacity-30"></div>
        <div className="absolute bg-gradient-to-br from-blue-100 to-purple-200 rounded-full w-96 h-96 opacity-50 top-20 right-20 transform translate-x-1/2 translate-y-1/2 animate-spin-slow"></div>
        <div className="absolute bg-gradient-to-br from-blue-200 to-purple-300 rounded-full w-64 h-64 opacity-50 bottom-20 left-20 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slower"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-[#0394f5] font-bold text-md mb-6">
            Job Hunt Portal
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 mb-6 leading-tight text-shadow">
            Search, Apply & <br className="hidden md:inline" /> Get Your{" "}
            <span className="text-[#0394f5]">Dream Job</span>
          </h1>

          <p className="text-gray-700 mb-8 px-4 sm:px-8 lg:px-0 mx-auto lg:mx-0 max-w-2xl leading-relaxed font-semibold">
            Discover opportunities and find your perfect job with our advanced
            search and application tools. Join thousands of professionals who
            have successfully found their dream jobs through our portal.
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="flex justify-center items-center border border-gray-300 rounded-full overflow-hidden shadow-lg bg-white w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for jobs"
                className="flex-1 py-3 px-4 border-none outline-none placeholder-gray-400 text-gray-800"
              />
              <Button className="bg-[#0394f5] text-white py-6 px-8 rounded-none hover:bg-[#0373cc] transition-colors duration-300">
                Find Job
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section with Popup Cards */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <img
            src="src/assets/heroOne.png"
            alt="Job Hunt"
            className="w-full h-auto max-w-lg rounded-lg shadow-lg"
          />
          <div className="absolute bottom-10 right-10 transform translate-x-1/4 translate-y-1/4">
            <div className="bg-white p-5 rounded-full shadow-lg animate-bounce">
              <span className="text-[#0394f5] font-semibold">Apply for a Job</span>
            </div>
          </div>
          <div className="absolute top-10 left-10 transform -translate-x-1/4 -translate-y-1/4">
            <div className="bg-white p-5 rounded-full shadow-lg animate-bounce">
              <span className="text-[#0394f5] font-semibold">Upload Resume</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
