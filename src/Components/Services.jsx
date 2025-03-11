// import React from "react";
// import Logos from "../assets/Logos.png";
// import a from "../assets/a.png";
// import b from "../assets/b.png";
// import c from "../assets/c.png";
// import d from "../assets/d.png";
// import e from "../assets/e.png";
// import f from "../assets/f.png"; // Add the missing 6th icon
// import { FaRegArrowAltCircleRight } from "react-icons/fa";
// const Services = () => {
//   return (
//     <div className="w-full">
//       <div className="w-full h-[236px] flex flex-col justify-center items-center bg-white border rounded-lg">
//         <p className="font-inter text-lg font-semibold text-center mb-7">
//           Trusted By Over 100+ Startups and Freelance Business
//         </p>
//         <img src={Logos} alt="Company Logos" className="w-[1070px] h-[28px] object-contain" />
//       </div>

//       {/* Services Section */}
//       <div className="w-full bg-[#FAFAFA] flex flex-col items-center py-10">
//         <p className="text-sm text-[#FF9C00] tracking-widest uppercase">
//           Welcome to RegisterKaro.in
//         </p>
//         <h2 className="text-2xl font-bold text-center mt-2">Explore Our Services</h2>

//         <div className="w-full max-w-[1200px] grid grid-cols-3 gap-6 mt-10">
//           {[
//             { title: "Company Formation", desc: "Build web-based solutions that enhance customer experience.", icon: a },
//             { title: "Company Secretarial Services", desc: "Make data-driven decisions and utilize technology to reach business goals.", icon: b },
//             { title: "Virtual Office Address", desc: "Foster customer relationships by effectively serving your market.", icon: c },
//             { title: "Annual Compliance Services", desc: "Turn your ideas into modern products with our design experts.", icon: d },
//             { title: "Payroll Services", desc: "Expand your business across the globe with minimal effort.", icon: e },
//             { title: "Bookkeeping Services", desc: "Steering user behaviors with creative design, data insights & technology.", icon: f },
//           ].map((service, index) => (
//             <div key={index} className="relative p-6 flex flex-col items-center text-center w-[400px] h-[250px]">
//               {/* Zigzag Maroon Left Border */}
//               <div className="absolute left-0 top-0 h-full w-[6px] bg-[repeating-linear-gradient(45deg, #A52A2A, #A52A2A 5px, transparent 5px, transparent 10px)]" />

//               {/* Icon */}
//               <div className="w-12 h-12 flex items-center justify-center mb-4">
//                 <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
//               </div>

//               <h3 className="text-lg font-semibold">{service.title}</h3>
//               <p className="text-gray-600 mt-2">{service.desc}</p>

//               <a href="#" className="text-black font-medium mt-4 flex items-center gap-1">
//                 Learn More <span className="text-lg"><FaRegArrowAltCircleRight /></span>
//               </a>
//             </div>
//           ))}
//         </div>

//         <button className="mt-10 px-6 py-3 bg-[#1C4670] text-white rounded-md hover:bg-blue-700">
//           See All Services
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import Logos from "../assets/Logos.png";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png"; // Add the missing 6th icon
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full">
      {/* Trusted By Section */}
      <div className="w-full h-[236px] flex flex-col justify-center items-center bg-white border rounded-lg shadow-md">
        <p className="font-inter text-lg font-semibold text-center mb-7">
          Trusted By Over 100+ Startups and Freelance Business
        </p>
        <img
          src={Logos}
          alt="Company Logos"
          className="w-[90%] max-w-[1070px] h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#FAFAFA] flex flex-col items-center py-10">
        <p className="text-sm text-[#FF9C00] tracking-widest uppercase">
          Welcome to RegisterKaro.in
        </p>
        <h2 className="text-2xl font-bold text-center mt-2">Explore Our Services</h2>

        {/* Responsive Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            { title: "Company Formation", desc: "Build web-based solutions that enhance customer experience.", icon: a },
            { title: "Company Secretarial Services", desc: "Make data-driven decisions and utilize technology to reach business goals.", icon: b },
            { title: "Virtual Office Address", desc: "Foster customer relationships by effectively serving your market.", icon: c },
            { title: "Annual Compliance Services", desc: "Turn your ideas into modern products with our design experts.", icon: d },
            { title: "Payroll Services", desc: "Expand your business across the globe with minimal effort.", icon: e },
            { title: "Bookkeeping Services", desc: "Steering user behaviors with creative design, data insights & technology.", icon: f },
          ].map((service, index) => (
            <div key={index} className="relative p-6 flex flex-col items-center text-center bg-[#FAFAFA] rounded-lg  border-r w-full sm:w-[350px] md:w-[400px] h-[250px] mx-auto">
              {/* Zigzag Maroon Left Border */}
              <div className="absolute left-0 top-0 h-full w-[6px] bg-[repeating-linear-gradient(45deg, #A52A2A, #A52A2A 5px, transparent 5px, transparent 10px)]" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <img src={service.icon} alt={service.title} className="w-full h-full object-contain" loading="lazy" />
              </div>

              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>

              <a href="#" className="text-black font-medium mt-4 flex items-center gap-1">
                Learn More <span className="text-lg"><FaRegArrowAltCircleRight /></span>
              </a>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-[#1C4670] text-white rounded-md hover:bg-blue-700">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Services;

