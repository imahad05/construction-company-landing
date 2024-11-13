import React from "react";
import { assets } from "../../assets/assets";

const History = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-gray-900 dark:text-white">
      {/* Left Side Image */}
      <div className="md:w-2/6 bg-headingGrey text-white p-[7vw] md:p-[4vw] 2xl:p-[7vw]">
        <h5 className="text-3xl md:text-4xl font-bold mb-8">
          We’ve Been Building For Over 10 Years
        </h5>
        {/* Yellow Underline */}
        <div className="w-12 h-1 bg-primary mb-8 md:mb-16"></div>

        <p className="text-white mb-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
          dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
          quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc
          amet phasellus.
        </p>

        <button className="border border-primary transition py-3 px-8 cursor-pointer text-primary hover:text-yellow-600 font-medium text-sm md:text-base">
          About Us
        </button>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex relative">
        <video
          src={assets.project_video}
          autoPlay
          muted
          loop
          className="w-full object-cover mb-[190px] md:mb-0"
        ></video>

        {/* Bottom Statistics */}
        <div className="w-full flex flex-col md:flex-row absolute bottom-0 right-0 left-0">
          <div className="flex-1 bg-primary p-6">
            <p className="text-xl md:text-4xl font-bold">Call for a Quote</p>
            <p className="text-sm font-semibold uppercase">(346) 234-6973</p>
          </div>
          <div className="flex-1 bg-white flex items-center justify-center dark:bg-gray-700 p-6 text-center text-white">
            <button className="bg-transparent hover:bg-transparent border border-black hover:bg-primary hover:text-black transition py-3 px-8 cursor-pointer dark:text-gray-300 dark:border-white dark:hover:text-white text-textGrey font-medium text-sm md:text-base">
              ONLINE ESTIMATE FORM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
