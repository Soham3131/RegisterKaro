import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter, IoLogoPinterest } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full bg-bluish flex flex-col sm:flex-row justify-center lg:justify-end text-white items-center px-2 lg:px-4 py-2 sm:h-[44px]">
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 lg:gap-4 text-sm lg:text-base">
        <p className="whitespace-nowrap">Email www.registerKaro.in</p>
        <p className="hidden lg:block">|</p>
        <p className="whitespace-nowrap">Phone +918447746183</p>
        <p className="hidden lg:block">|</p>
        <div className="flex gap-2 lg:gap-3">
          <FaInstagram className="cursor-pointer text-lg" />
          <IoLogoFacebook className="cursor-pointer text-lg" />
          <IoLogoTwitter className="cursor-pointer text-lg" />
          <IoLogoPinterest className="cursor-pointer text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
