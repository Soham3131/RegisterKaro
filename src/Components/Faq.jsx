import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const faqData = [
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1441px] mx-auto bg-white py-10 px-6 shadow-md">
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-[11px] text-orangish uppercase mb-2">FAQ</p>
        <h2 className="text-2xl font-semibold text-[#3C2109]">
          Frequent Ask Questions
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((question, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between w-full px-5 py-4 border border-gray-300 rounded-md shadow-md bg-white"
          >
       
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-blue-800 rounded-l-md"></div>

      
            <p className="text-gray-700">{question}</p>

            <FaChevronRight className="text-gray-500" />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-[#1C4670] w-[148px] h-[46px] text-white px-6 py-2 rounded-md shadow-md">
          Show More →
        </button>
      </div>
    </div>
  );
};

export default Faq;
