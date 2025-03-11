// import React from "react";
// import { FaShieldAlt, FaCheckCircle, FaSmile, FaUserTie } from "react-icons/fa";

// const ChooseUs = () => {
//   return (
//     <div className="w-full flex flex-col items-center justify-center py-12">
//       {/* First Row: Heading + 2 Cards */}
//       <div className="flex justify-center items-start gap-8 w-[1200px]">
//         {/* Left: Heading Section */}
//         <div className="flex-1">
//           <h2 className="  text-orange-500">WHY REGISTERKARO.IN</h2>
//           <h1 className="text-3xl font-inter-700  font-bold mt-2">Why Choose Register Karo</h1>
//           <p className="text-gray-600 mt-2">
//             It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
//           </p>
//         </div>

//         {/* Right: 2 Cards */}
//         <div className="flex gap-6">
//           <div className="w-[288.11px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-red-50">
//             <FaShieldAlt size={30} className="text-red-500" />
//             <h3 className="text-lg font-semibold mt-2">Confidential & Safe</h3>
//             <p className="text-center text-gray-600">All your private information is safe with us</p>
//           </div>
//           <div className="w-[288.11px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-green-50">
//             <FaCheckCircle size={30} className="text-green-500" />
//             <h3 className="text-lg font-semibold mt-2">No Hidden Fee</h3>
//             <p className="text-center text-gray-600">Everything is put before you with no hidden charges or conditions</p>
//           </div>
//         </div>
//       </div>

//       {/* Second Row: 3 Cards (Right-Aligned) */}
//       <div className="w-[1200px] flex justify-end gap-6 mt-6">
//         <div className="w-[288.11px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col items-center justify-center p-6 bg-blue-50">
//           <FaSmile size={30} className="text-blue-500" />
//           <h3 className="text-lg font-semibold mt-2">Guaranteed Satisfaction</h3>
//           <p className="text-center text-gray-600">We ensure that you stay 100% satisfied with our offered services</p>
//         </div>
//         <div className="w-[288.11px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-pink-50">
//           <FaUserTie size={30} className="text-pink-500" />
//           <h3 className="text-lg font-semibold mt-2">Expert CA/CS Assistance</h3>
//           <p className="text-center text-gray-600">Prompt support from our in-house expert professionals</p>
//         </div>
//         <div className="w-[288.11px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-yellow-50">
//           <FaShieldAlt size={30} className="text-yellow-500" />
//           <h3 className="text-lg font-semibold mt-2">Confidential & Safe</h3>
//           <p className="text-center text-gray-600">All your private information is safe with us</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;

// import React from "react";
// import { FaShieldAlt, FaCheckCircle, FaSmile, FaUserTie } from "react-icons/fa";

// const ChooseUs = () => {
//   return (
//     <div className="w-full flex flex-col items-center justify-center py-12 px-4">
//       {/* First Row: Heading + 2 Cards */}
//       <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:w-[1200px] w-full">
//         {/* Left: Heading Section */}
//         <div className="lg:flex-1  text-center lg:text-left max-w-full">
//           <h2 className="text-orange-500 text-lg">WHY REGISTERKARO.IN</h2>
//           <h1 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
//             Why Choose <span className="text-orange-500">Register Karo</span>
//           </h1>
//           <p className="text-gray-600 mt-2 max-w-[600px] lg:max-w-full">
//             It is with consistent services and results that build trust with the people, 
//             and that in turn help us to serve the business better.
//           </p>
//         </div>

//         {/* Right: 2 Cards */}
//         <div className="flex flex-col sm:flex-row gap-6">
//           <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-red-50">
//             <FaShieldAlt size={30} className="text-red-500" />
//             <h3 className="text-lg font-semibold mt-2">Confidential & Safe</h3>
//             <p className="text-center text-gray-600">All your private information is safe with us</p>
//           </div>
//           <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-green-50">
//             <FaCheckCircle size={30} className="text-green-500" />
//             <h3 className="text-lg font-semibold mt-2">No Hidden Fee</h3>
//             <p className="text-center text-gray-600">Everything is put before you with no hidden charges or conditions</p>
//           </div>
//         </div>
//       </div>

//       {/* Second Row: 3 Cards (Right-Aligned on Large Screens, Centered on Small Screens) */}
//       <div className="flex flex-col sm:flex-row lg:justify-end justify-center gap-6 mt-6 w-full lg:w-[1200px]">
//         <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col items-center justify-center p-6 bg-blue-50">
//           <FaSmile size={30} className="text-blue-500" />
//           <h3 className="text-lg font-semibold mt-2">Guaranteed Satisfaction</h3>
//           <p className="text-center text-gray-600">We ensure that you stay 100% satisfied with our offered services</p>
//         </div>
//         <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-pink-50">
//           <FaUserTie size={30} className="text-pink-500" />
//           <h3 className="text-lg font-semibold mt-2">Expert CA/CS Assistance</h3>
//           <p className="text-center text-gray-600">Prompt support from our in-house expert professionals</p>
//         </div>
//         <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-yellow-50">
//           <FaShieldAlt size={30} className="text-yellow-500" />
//           <h3 className="text-lg font-semibold mt-2">Confidential & Safe</h3>
//           <p className="text-center text-gray-600">All your private information is safe with us</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChooseUs;
import React from "react";
import { FaShieldAlt, FaCheckCircle, FaSmile, FaUserTie } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      {/* First Row: Heading + 2 Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:w-[1200px] w-full mx-auto">
        {/* Left: Heading Section */}
        <div className="lg:flex-1 text-center lg:text-left w-full">
          <h2 className="text-orange-500 text-lg">WHY REGISTERKARO.IN</h2>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
            Why Choose <span className="text-orange-500">Register Karo</span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-[600px] mx-auto lg:mx-0">
            It is with consistent services and results that build trust with the people, 
            and that in turn help us to serve the business better.
          </p>
        </div>

        {/* Right: 2 Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-red-50">
            <FaShieldAlt size={30} className="text-red-500" />
            <h3 className="text-lg font-semibold mt-2">Confidential & Safe</h3>
            <p className="text-center text-gray-600">All your private information is safe with us</p>
          </div>
          <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-green-50">
            <FaCheckCircle size={30} className="text-green-500" />
            <h3 className="text-lg font-semibold mt-2">No Hidden Fee</h3>
            <p className="text-center text-gray-600">Everything is put before you with no hidden charges or conditions</p>
          </div>
        </div>
      </div>

      {/* Second Row: 3 Cards (Right-Aligned on Large Screens, Centered on Small Screens) */}
      <div className="flex flex-col sm:flex-row lg:justify-end justify-center gap-6 mt-6 w-full lg:w-[1200px] mx-auto">
        <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col items-center justify-center p-6 bg-blue-50">
          <FaSmile size={30} className="text-blue-500" />
          <h3 className="text-lg font-semibold mt-2">Guaranteed Satisfaction</h3>
          <p className="text-center text-gray-600">We ensure that you stay 100% satisfied with our offered services</p>
        </div>
        <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-pink-50">
          <FaUserTie size={30} className="text-pink-500" />
          <h3 className="text-lg font-semibold mt-2">Expert CA/CS Assistance</h3>
          <p className="text-center text-gray-600">Prompt support from our in-house expert professionals</p>
        </div>
        <div className="w-full sm:w-[288px] h-[215px] border border-gray-300 rounded-[10px] flex flex-col justify-center items-center p-6 bg-yellow-50">
          <FaShieldAlt size={30} className="text-yellow-500" />
          <h3 className="text-lg font-semibold mt-2">Confidential & Safe</h3>
          <p className="text-center text-gray-600">All your private information is safe with us</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
