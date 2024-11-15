import React from "react";
import { assets } from "../assets/assets";
import PrimaryUnderLine from "./PrimaryUnderLine";

const ProjectOverview = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-gray-900 dark:text-white">
      {/* Left Side Image */}
      <div className="md:w-2/6 slide-in-left">
        <img
          src={assets.project_bg}
          alt="Construction"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col justify-center slide-in">
        {/* Title */}
        <div className="pr-[7vw] p-[7vw]">
          <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl py-3 fade-in mb-4">
            No Project Too Big Or Too Small
          </h5>
          {/* Yellow Underline */}
          <PrimaryUnderLine />

          {/* Content Paragraphs */}
          <div className="space-y-4 md:mb-8 grid grid-cols-1 xl:grid-cols-2">
            <div className="xl:w-[80%] text-xs md:text-base space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam.
              </p>
            </div>
            <div className="xl:w-[80%] text-xs md:text-base space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
              {/* Learn More Button */}
              <button className="bg-transparent hover:bg-transparent border border-black dark:border-white dark:hover:text-primary hover:text-black transition py-3 px-8 cursor-pointer dark:text-white text-textGrey font-medium text-sm md:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Statistics */}
        <div className="w-full flex">
          <div className="flex-1 bg-primary text-center py-6">
            <p className="text-2xl md:text-4xl font-bold">12</p>
            <p className="text-sm uppercase">Years Established</p>
          </div>
          <div className="flex-1 bg-gray-700 text-center py-6 text-white">
            <p className="text-2xl md:text-4xl font-bold">250</p>
            <p className="text-sm uppercase">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
