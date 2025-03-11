import React from 'react';
import group from "../assets/group.png";
import Vector from "../assets/Vector.png";
import dotted from "../assets/dotted.png";

const About = () => {
  return (
    <div className="about-container w-full h-[558px] bg-[#FAFAFA] flex items-center justify-between px-[71px]">
      
      {/* Left Content */}
      <div className="about-text w-[644px]">
        <p className="text-sm text-[#FF9C00] mb-9 tracking-widest uppercase">
          Welcome to RegisterKaro.in
        </p>
        <h2 className="text-3xl font-bold mt-2">
          About <span className="text-[#FF9C00]">Register Karo</span>
        </h2>
        <p className="text-gray-700 mt-4">
          We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, 
          and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing 
          environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team 
          that consistently delivers on projects, exceeding expectations.
        </p>
        <p className="text-gray-700 mt-4">
          I would strongly recommend their services to any organization looking for solid, reliable, and predictable outcomes.
        </p>
        <button className="about-button mt-14 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Learn More
        </button>
      </div>

      {/* Right Side */}
      <div className="about-image-container relative w-[600px] px-[71px]">
        <div className="relative w-[584px] h-[422px] z-55">
       
          <img 
            src={group} 
            alt="Group" 
            className="about-image w-[579px] h-[418px] absolute rounded-lg shadow-lg right-[59px] z-50"
          />
        </div>

     
        <div className="relative hidden lg:block">
          <img src={Vector} alt="Vector Design" className="vector absolute right-[-142px] top-[-440px] z-50"/>
          <img src={dotted} alt="Dotted Pattern" className="dotted absolute right-[-132px] top-[-125px]"/>
        </div>
      </div>

    </div>
  );
};

export default About;
