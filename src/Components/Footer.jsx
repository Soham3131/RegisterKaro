import React from 'react';
import uparrow from "../assets/uparrow.png";
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#011B5B] text-white px-6 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-sm">
          <p className="text-sm mt-8 w-[247px] h-[72px]  text-[#AAB5CD]">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
  <FaFacebook className="cursor-pointer" />
  <FaGoogle className="cursor-pointer" />
  <FaApple className="cursor-pointer" />
  <FaInstagram className="cursor-pointer" />
</div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="text-orangish font-bold">START A BUSINESS</h3>
            <ul className="mt-2 space-y-2 text-[#AAB5CD]">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orangish font-bold ">GOVERNMENT REGISTRATION</h3>
            <ul className="mt-2 space-y-2 text-[#AAB5CD]">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orangish font-bold">COMPLIANCE & TAX</h3>
            <ul className="mt-2 space-y-2 text-[#AAB5CD]">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          <div>
            <h3 className="text-orangish font-bold">BIS & CDSCO</h3>
            <ul className="mt-2 space-y-2 text-[#AAB5CD]">
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Back to Top */}
      <div className="flex flex-col items-center mt-10 mb-14 sm:mb-6">
  <img src={uparrow} alt="Back to Top" className="w-10 h-10 cursor-pointer" />
  <p className="mt-4 text-sm text-[#AAB5CD]">© 2024 Registerkaro. All Rights Reserved.</p>
</div>


    </div>
  );
};

export default Footer;
