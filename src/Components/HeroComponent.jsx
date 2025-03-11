

import React from "react";
import main from "../assets/main.png";
import run from "../assets/run.png";
import ratings from "../assets/ratings.png";
import star from "../assets/star.png";
import stars from "../assets/stars.png";
import target from "../assets/target.png";

const HeroSection = () => {
  return (
    <div className="relative lg:h-[585px] flex items-center px-10 bg-hero-gradient bg-cover bg-no-repeat lg:overflow-hidden flex-col lg:flex-row">
      {/* Left Side Content */}
      <div className="w-full lg:w-1/2 space-y-4 lg:text-left text-center">
        
        <div className="flex items-center gap-2 text-lg font-semibold justify-center lg:justify-start">
          <img src={star} alt="star" />
          <span>Google Rating</span>
          <img src={stars} alt="stars" />
        </div>

        {/* Heading */}
        <h1 className="text-[42px] leading-tight font-bold text-gray-900">
          Your Trusted Partner <br />
          For <span className="text-orangish">Compliance</span> needs
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various{" "}
          <strong>registrations, tax filings,</strong> and other{" "}
          <strong>legal matters</strong>.
        </p>

        {/* Stats */}
        <img src={ratings} alt="ratings" />

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center lg:justify-start">
          <button className="bg-bluish text-white px-6 py-3 rounded-md font-semibold shadow-md">
            Get Started For Free
          </button>
          <button className="flex items-center gap-2 text-gray-900">
            <img src={run} alt="run icon" /> See how it works
          </button>
        
          <div className="flex gap-2 flex-wrap w-full mt-4 lg:hidden justify-center">
            {["Annual Compliance", "Payroll Services", "Company Formation", "Annual Compliance"].map(
              (text, index) => (
                <button
                  key={index}
                  className="bg-white px-6 py-3 shadow-lg rounded-md text-gray-700 w-[150px] h-[58px] text-[14px] flex items-center justify-center whitespace-nowrap border border-gray-300 hover:bg-gray-100 transition-all"
                >
                  {text}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center space-y-6 lg:pr-10">
       
        <img
          src={main}
          alt="Hero Image"
          className="absolute w-[600px] h-[484.19px] lg:top-[100px] lg:left-[820px] max-lg:hidden"
        />

        <div className="flex flex-col space-y-3 absolute right-0 items-center top-[39px] lg:flex max-lg:hidden">
          {["Annual Compliance", "Payroll Services", "Company Formation", "Annual Compliance"].map(
            (text, index) => (
              <button
                key={index}
                className="bg-white px-6 py-3 shadow-lg rounded-md text-gray-700 w-[150px] h-[58px] text-[14px] flex items-center justify-center whitespace-nowrap border border-gray-300 hover:bg-gray-100 transition-all"
              >
                {text}
              </button>
            )
          )}
        </div>

        <img
          src={target}
          alt="Target"
          className="hidden lg:block absolute w-[229.03px] h-[171.1px] lg:right-10 lg:top-[380px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;