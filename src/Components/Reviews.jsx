// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import reviews from "../assets/reviews.png";

// const Reviews = () => {
//   return (
//     <div className="relative w-full bg-[#1C4670] py-10 px-4 overflow-hidden">
//       {/* Heading */}
//       <h2 className="text-white text-2xl font-semibold  text-center mb-7">
//         What people say about us
//       </h2>
      
//       <button className="absolute right-[160px] top-[41px]  bg-white p-2 rounded-full shadow-md">
//           <FaChevronLeft className="text-[#1C4670]" />
//         </button>
//       {/* Right Arrow */}
//       <button className="absolute  right-[110px] top-[41px]  bg-orangish p-2 rounded-full shadow-md">
//           <FaChevronRight className="text-[#1C4670] " />
//         </button>

//       {/* Slider Container */}
//       <div className="relative flex items-center justify-center overflow-hidden w-full ">
//         {/* Left Arrow */}
        

//         {/* Slides */}
//         <div className="flex px-14 w-full gap-10 overflow-hidden">
//           <img
//             src={reviews}
//             alt="Review 1"
//             className="w-[520px] h-[318px] rounded-lg"
//           />
//           <img
//             src={reviews}
//             alt="Review 2"
//             className="w-[520px] h-[318px] rounded-lg"
//           />
//           <img
//             src={reviews}
//             alt="Review 3"
//             className="w-[520px] h-[318px] rounded-lg "
//             // style={{ clipPath: "inset(0 50px 0 0)" }} // Half-shown effect
//           />
//         </div>

        
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-4">
//         <span className="w-2 h-2 bg-orange-500 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
        
//       </div>
//     </div>
//   );
// };

// export default Reviews;

// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import reviews from "../assets/reviews.png";

// const Reviews = () => {
//   return (
//     <div className="relative w-full bg-[#1C4670] py-10 px-4 overflow-hidden">
//       {/* Heading */}
//       <h2 className="text-white text-2xl font-semibold text-center mb-7 lg:text-center">
//         What people say about us
//       </h2>
      
//       <div className="absolute top-[41px] right-4 lg:right-[110px] gap-5 flex">
//         <button className="bg-white p-2 rounded-full shadow-md mr-2 lg:mr-0 lg:left-[-50px]">
//           <FaChevronLeft className="text-[#1C4670]" />
//         </button>
//         {/* Right Arrow */}
//         <button className="bg-orange-500 p-2 rounded-full shadow-md">
//           <FaChevronRight className="text-[#1C4670] " />
//         </button>
//       </div>

//       {/* Slider Container */}
//       <div className="relative flex items-center justify-center overflow-hidden w-full ">
//         {/* Slides */}
//         <div className="flex px-4 lg:px-14 w-full gap-4 lg:gap-10 overflow-hidden">
//           <img
//             src={reviews}
//             alt="Review 1"
//             className="w-full lg:w-[520px] h-auto lg:h-[318px] rounded-lg"
//           />
//           <img
//             src={reviews}
//             alt="Review 2"
//             className="w-full lg:w-[520px] h-auto lg:h-[318px] rounded-lg"
//           />
//           <img
//             src={reviews}
//             alt="Review 3"
//             className="w-full lg:w-[520px] h-auto lg:h-[318px] rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-4">
//         <span className="w-2 h-2 bg-orange-500 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//         <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
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
        {/* Right Arrow */}
        <button className="bg-orange-500 p-2 rounded-full shadow-md hidden lg:block">
          <FaChevronRight className="text-[#1C4670] " />
        </button>
      </div>

      {/* Slider Container */}
      <div className="relative flex items-center justify-center overflow-hidden w-full ">
        {/* Slides */}
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