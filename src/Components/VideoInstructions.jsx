import React from 'react';
import bulb from "../assets/bulb.png";
import youtube from "../assets/youtube.png";
import idea from "../assets/idea.png";

const VideoInstructions = () => {
  return (
    <div className="w-full bg-[#1C4670] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12">
      {/* Left Section */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">Our Video Introductions</h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
        </p>

       
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-4">
            <img src={bulb} alt="bulb" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]" loading="lazy" />
            <div>
              <h3 className="text-white font-semibold text-lg">Explore ideas together</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={idea} alt="idea" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]" loading="lazy" />
            <div>
              <h3 className="text-white font-semibold text-lg">Bring those ideas to life</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Engage audience segments and finally create actionable insights. Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section*/}
      <div className="mt-8 lg:mt-0 lg:ml-12 flex justify-center">
        <img
          src={youtube}
          alt="video preview"
          className="w-full max-w-[480px] sm:max-w-[640px] h-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default VideoInstructions;
