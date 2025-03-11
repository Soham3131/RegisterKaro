// import React from "react";
// import main from "../assets/main.png";
// import run from "../assets/run.png";
// import ratings from "../assets/ratings.png";
// import star from "../assets/star.png";
// import stars from "../assets/stars.png";
// import target from "../assets/target.png"

// const HeroSection = () => {
//   return (
//     <div className="relative h-[585px] flex items-center px-10 bg-hero-gradient bg-cover bg-no-repeat overflow-hidden">
//       {/* Left Side Content */}
//       <div className="w-[50%] space-y-4">
//         {/* Google Rating */}
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           <img src={star} alt="star" />
//           <span>Google Rating</span>
//           <img src={stars} alt="stars" />
//         </div>

//         {/* Heading */}
//         <h1 className="text-[42px] leading-tight font-bold text-gray-900">
//           Your Trusted Partner <br />
//           For <span className="text-orangish">Compliance</span> needs
//         </h1>

//         {/* Description */}
//         <p className="text-gray-600 text-lg">
//           An online business compliance platform that helps entrepreneurs and
//           other individuals with various{" "}
//           <strong>registrations, tax filings,</strong> and other{" "}
//           <strong>legal matters</strong>.
//         </p>

//         {/* Stats */}
//         <img src={ratings} alt="ratings" />

//         {/* Buttons */}
//         <div className="flex gap-4 mt-4">
//           <button className="bg-bluish text-white px-6 py-3 rounded-md font-semibold shadow-md">
//             Get Started For Free
//           </button>
//           <button className="flex items-center gap-2 text-gray-900">
//             <img src={run} alt="run icon" /> See how it works
//           </button>
//         </div>
//       </div>

//       {/* Right Side Content */}
//       <div className="w-[50%] flex flex-col items-end justify-center space-y-6 pr-10">
//         {/* Hero Image */}
//         <img
//           src={main}
//           alt="Hero Image"
//           className="absolute  w-[600px] h-[484.19px]  lg:top-[100px] left[788px] sm:block "
//         />

//         {/* Floating Buttons - Strictly aligned to the right */}
//         <div className="flex flex-col space-y-3 absolute right-0 items-center top-[39px] ">
//           {["Annual Compliance", "Payroll Services", "Company Formation","Annual Compliance"].map(
//             (text, index) => (
//               <button
//                 key={index}
//                 className="bg-white px-6 py-3 shadow-lg rounded-md text-gray-700 font-semibold w-56 text-center border border-gray-300 hover:bg-gray-100 transition-all"
//               >
//                 {text}
//               </button>
//             )
//           )}
//           <img src={target} className=" absolute lg:w-[229.03px] lg:h-[171.1px] right-3 top-[330px]   "/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import main from "../assets/main.png";
import run from "../assets/run.png";
import ratings from "../assets/ratings.png";
import star from "../assets/star.png";
import stars from "../assets/stars.png";
import target from "../assets/target.png";

const HeroSection = () => {
  return (
    <div className="relative h-[585px] flex items-center px-10 bg-hero-gradient bg-cover bg-no-repeat overflow-hidden">
      {/* Left Side Content */}
      <div className="w-[50%] space-y-4">
        {/* Google Rating */}
        <div className="flex items-center gap-2 text-lg font-semibold">
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
        <div className="flex gap-4 mt-4">
          <button className="bg-bluish text-white px-6 py-3 rounded-md font-semibold shadow-md">
            Get Started For Free
          </button>
          <button className="flex items-center gap-2 text-gray-900">
            <img src={run} alt="run icon" /> See how it works
          </button>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-[50%] flex flex-col items-end justify-center space-y-6 pr-10">
        {/* Hero Image */}
        {/* <img
          src={main}
          alt="Hero Image"
          className="absolute w-[600px] h-[484.19px] lg:top-[100px] left-[850px]"
        /> */}
        <img
  src={main}
  alt="Hero Image"
  className="absolute w-[600px] h-[484.19px] lg:top-[100px] lg:left-[820px]"
/>

        {/* Floating Buttons */}
        <div className="flex flex-col space-y-3 absolute right-0 items-center top-[39px]">
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


        {/* Target Image - Only visible on large screens */}
        {/* <img
          src={target}
          alt="Target"
          className="hidden lg:block absolute w-[229.03px] h-[171.1px] right-5 top-[389px]"
        /> */}

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


