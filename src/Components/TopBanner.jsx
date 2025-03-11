import React, { useState } from 'react';
import logo from "../assets/logo.png";

const TopBanner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close 
  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu-container')) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="flex w-full h-[72px] bg-white justify-between items-center px-6 lg:px-14 border-b-2 border-gray-300 relative">

      <img src={logo} alt="RegisterKaro Logo" className="w-[120px] h-auto" loading="lazy" />

      {/* Navigation Menu  */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
        <p className="cursor-pointer" aria-label="Go to Home">Home</p>
        <p className="cursor-pointer" aria-label="View Our Services">Our Services</p>
        <p className="cursor-pointer" aria-label="Read our Blog">Blog</p>
        <p className="cursor-pointer" aria-label="Contact Us">Contact Us</p>
        <p className="cursor-pointer" aria-label="Learn About Us">About Us</p>
        <p className="cursor-pointer" aria-label="Search">Search</p>
        <button className="rounded-md bg-orangish text-white px-4 lg:px-6 py-2 w-auto h-[40px] lg:h-[46px]" aria-label="Talk to an Expert">
          Talk to Expert
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative menu-container">
        <button className="text-2xl" onClick={toggleMenu} aria-label="Toggle Mobile Menu">☰</button>

        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-300 z-50">
            <ul className="flex flex-col">
              <li className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100" aria-label="Go to Home">Home</li>
              <li className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100" aria-label="View Our Services">Our Services</li>
              <li className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100" aria-label="Read our Blog">Blog</li>
              <li className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100" aria-label="Contact Us">Contact Us</li>
              <li className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100" aria-label="Learn About Us">About Us</li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" aria-label="Search">Search</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBanner;
