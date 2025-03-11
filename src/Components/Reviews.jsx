
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "../assets/reviews.png";

const Reviews = () => {
  return (
    <div className="relative w-full bg-[#1C4670] py-10 px-4 overflow-hidden">
      {/* Heading */}
      <h2 className="text-white text-2xl font-semibold text-center mb-7 lg:text-center">
        What people say about us
      </h2>

      <div className="absolute top-[41px] right-4 lg:right-[110px] gap-5 flex lg:flex">
        <button className="bg-white p-2 rounded-full shadow-md mr-2 lg:mr-0 lg:left-[-50px] hidden lg:block">
          <FaChevronLeft className="text-[#1C4670]" />
        </button>
       
        <button className="bg-orange-500 p-2 rounded-full shadow-md hidden lg:block">
          <FaChevronRight className="text-[#1C4670] " />
        </button>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center overflow-hidden w-full ">
        
        <div className="flex px-4 lg:px-14 w-full gap-4 lg:gap-10 overflow-hidden">
          <img
            src={reviews}
            alt="Review 1"
            className="w-full lg:w-[520px] h-auto lg:h-[318px] rounded-lg"
          />
          <img
            src={reviews}
            alt="Review 2"
            className="w-full lg:w-[520px] h-auto lg:h-[318px] rounded-lg"
          />
          <img
            src={reviews}
            alt="Review 3"
            className="w-full lg:w-[520px] h-auto lg:h-[318px] rounded-lg"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        <span className="w-2 h-2 bg-orange-500 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Reviews;