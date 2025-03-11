import React from 'react';
import pagination from "../assets/pagination.png";

const Clients = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 gap-12">
      {/* Title*/}
      <div className="max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">Our Happy Clients</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state-of-the-art customer service.
        </p>
      </div>

      {/* Logo */}
      <div className="w-full flex justify-center items-center">
        <img 
          src={pagination} 
          alt="Client Logos" 
          className="max-w-[90%] sm:max-w-[80%] object-contain" 
          loading="lazy" 
        />
      </div>

     
      <button className="text-blue-900 hover:underline flex items-center text-sm sm:text-base">
        Show more →
      </button>
    </div>
  );
};

export default Clients;
