import React from "react";
import { assets } from "../assets/assets";
const ProjectMain = () => {
  return (
    <main
      className="flex flex-col md:flex-row items-center justify-between h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url('${assets.gallery}')` }}
    >
      <div className="bg-black bg-opacity-60 h-full w-full absolute"></div>
      {/* Left Section with Background Image */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:h-full px-[7vw] py-[10vw] z-10">
        <div className="w-full h-full flex flex-col gap-6 md:gap-10 justify-center items-start mb-4">
          <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white border-l-4 border-primary py-3 pl-4 fade-in">
            Monarch HQ Project
          </h5>
          <p className="2xl:w-[50%] text-white text-xs md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            egestas pellentesque libero dolor in diam consequat ut.
          </p>
        </div>

        <div className="lg:w-2/5 flex flex-col items-start space-y-2 text-white text-sm md:text-base font-normal ">
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
    </main>
  );
};

export default ProjectMain;
