import React from "react";
import { assets } from "../assets/assets";
const ProjectMain = () => {
  return (
    <div>
      <div
        className="h-full md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${assets.gallery}')` }}
      >
        {/* Left Section with Background Image */}
        <div className="flex flex-col md:flex-row md:items-center md:h-full bg-black bg-opacity-60 py-4">
          <div className="w-full h-full flex flex-col gap-6 md:gap-10 justify-center items-start px-[7vw] md:px-[14vw] py-4">
            <h5 className="font-bold text-2xl md:text-5xl text-white border-l-4 border-primary py-2 pl-4">
              Monarch HQ Project
            </h5>
            <p className="w-[90%] md:w-[70%] 2xl:w-[50%] text-white text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              egestas pellentesque libero dolor in diam consequat ut.
            </p>
          </div>

          <div className="md:w-1/2 space-y-2 text-white text-sm md:text-base font-normal px-[7vw] md:px-0 md:pb-20">
            <p>
              <span className="font-semibold">Date: </span>12 April 2018
            </p>
            <p>
              <span className="font-semibold">Client: </span>Monarch Group
            </p>
            <p>
              <span className="font-semibold">Project Type: </span>Building
              Renovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
