

import React from 'react';
import playstore from "../assets/playstore.png";
import Phone from "../assets/Phone.png";  
import horizontal from "../assets/horizontal.png";
import Logos1 from "../assets/Logos1.png";

const Numbers = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Manage Your Services Section */}
      <div className="w-full bg-[#1C4670] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 lg:py-28 md:h-[600px] relative overflow-hidden">

        <div className="text-white text-center lg:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Manage Your Services by Your Mobile Phone
          </h2>
          <p className="mt-4 text-base md:text-sm text-[#AAB5CD]">
            Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
          </p>

          <p className='mt-6'>Get the App</p>
          <div className="mt-6 flex justify-center lg:justify-start gap-2">
            <img src={playstore} alt="Google Play" className="h-12 cursor-pointer" />
          </div>
        </div>

        {/* Phone Image - Responsive Adjustments */}


        {/* <div className="absolute right-0 w-[250px] md:w-[350px] lg:w-[420px] z-10 hidden md:block lg:flex">
         
          <img
            src={Phone}
            alt="Phone Screen"
            className="absolute overflow-hidden right-[250px] top-[-25px] w-[308px] h-[619px] z-10 lg:block hidden"
          />
          <img
            src={Phone}
            alt="Phone Frame"
            className="absolute right-0 overflow-hidden top-[-232px] w-[308px] h-[650px] z-10 lg:block hidden"
          />
           <img
            src={Phone}
            alt="Phone Frame"
            className=" lg:hidden w-[250px] h-[450px]"
          />
          
        </div> */}


<div className="absolute right-0 w-[250px] md:w-[350px] lg:w-[420px] z-10 hidden lg:flex">
          <img
            src={Phone}
            alt="Phone Screen"
            className="absolute overflow-hidden right-[250px] top-[-1px] w-[308px] h-[619px] z-10"
          />
          <img
            src={Phone}
            alt="Phone Frame"
            className="absolute right-0 overflow-hidden top-[-180px] w-[308px] h-[650px] z-10"
          />
        </div>

        {/* Show this Image Only on md & sm Screens */}
        <div className="w-full flex justify-center mt-6 lg:hidden">
          <img
            src={Phone}
            alt="Phone Frame"
            className="w-[250px] h-[450px]"
          />
        </div>





        {/* For screens ≤ 1025px: Center text & show full phone below */}
        {/* <div className="w-full flex flex-col items-center text-center lg:hidden">
          <img 
            src={Phone} 
            alt="Phone Full Image" 
            className="w-[80%] sm:w-[70%] md:w-[60%] mt-[-50px]"
          />
        </div> */}
      </div>

      {/* Numbers Section */}
      <div className="w-full z-50 bg-[#FAFAFA] flex flex-col items-center justify-center py-12">
        <h3 className="text-[14px] z-50 text-orangish">
          WHY <span className="text-orangish">REGISTER</span> KARO
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-[#3C2109]">
          Some Numbers are Important
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6 text-center">
          {[
            { number: "1M+", text: "Customers" },
            { number: "12+", text: "Years of Excellence" },
            { number: "41+", text: "R&D Engineers" },
            { number: "78+", text: "Countries" },
            { number: "3287+", text: "Partners" },
            { number: "41+", text: "Awards Received" }
          ].map((item, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] text-transparent bg-clip-text">
                {item.number}
              </p>
              <p className="text-base md:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1% of the Industry Section */}
      <div className="z-50 w-full bg-gradient-to-r from-[#FFA229] to-[#1C4670] flex flex-col items-center justify-center py-12 px-6">
        <h3 className="text-lg font-semibold text-white">1% OF THE INDUSTRY</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 text-center">
          Welcome to your new digital reality. Now.
        </h2>
        <div className="flex items-center mt-4 w-full max-w-md overflow-hidden rounded-md">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="px-4 py-3 w-full text-black"
          />
          <button className="bg-orangish text-white px-6 py-3">
            Submit
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-6 text-sm md:text-base justify-center">
          <img src={horizontal} alt="Horizontal Line" />
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="w-full flex justify-center items-center bg-white py-12 px-6">
        <img src={Logos1} alt="Company Logos" />
      </div>
    </div>
  );
};

export default Numbers;
