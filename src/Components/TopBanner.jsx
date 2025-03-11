import React from 'react';
import logo from "../assets/logo.png";

const TopBanner = () => {
  return (
    <div className="flex w-full h-[72px] bg-white justify-between items-center px-6 lg:px-14 border-b-2 border-gray-300">
      {/* Logo Section */}
      <img src={logo} alt="Logo" className="w-[120px] h-auto" loading="lazy" />

      {/* Navigation Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Our Services</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">Contact Us</p>
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Search</p>
        <button className="rounded-md bg-orangish text-white px-4 lg:px-6 py-2 w-auto h-[40px] lg:h-[46px]">
          Talk to Expert
        </button>
      </div>
      
      {/* Mobile Responsive Menu Placeholder (Can Add Dropdown Later) */}
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </div>
  );
};

export default TopBanner;
