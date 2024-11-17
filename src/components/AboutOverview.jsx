import React from "react";
import { assets, onlyTheBest } from "../assets/assets";
import PrimaryUnderLine from "./PrimaryUnderLine";

const AboutOverview = () => {
  return (
    <div className="flex flex-col xl:flex-row ">
      {/* Left Side Image */}
      <div className="xl:w-2/6 p-[7vw] md:p-[4vw] 2xl:p-[7vw]">
        <h5 className="text-3xl md:text-4xl font-bold mb-8">Only the Best</h5>

        <div>
          {onlyTheBest.map((item) => (
            <div key={item.id} className="flex items-start gap-4 mb-4">
              <img src={item.img} alt="" className="w-7 md:w-auto"/>
              <div className="space-y-4">
                <h3 className="text-sm md:text-lg xl:text-xl font-semibold mb-2">
                  {item.heading}
                </h3>
                <p className="text-xs lg:text-base">{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-end">
          <button className="text-primary hover:text-yellow-600 transition text-xs md:text-sm 2xl:text-lg py-2 px-4 border border-primary 2xl:border-2 mt-4">
            FREE QUOTE
          </button>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col">
        <img
          src={assets.about_img}
          className="max-h-[500px] 2xl:max-h-[600px]"
        />

        {/* Bottom Statistics */}
        <div className="w-full flex flex-col md:flex-row ">
          <div className="flex flex-col flex-1 gap-2 justify-center items-center bg-primary p-4">
            <p className="text-xl md:text-2xl xl:text-4xl font-bold">12</p>
            <p className="text-sm font-semibold uppercase">YEARS ESTABLISHED</p>
          </div>
          <div className=" bg-gray-300 flex flex-col flex-1 gap-2 justify-center items-center p-4 dark:bg-gray-700">
            <p className="text-xl md:text-2xl xl:text-4xl font-bold">250</p>
            <p className="text-sm font-semibold uppercase">
              COMPLETED PROJECTS
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row ">
          <div className="flex flex-col flex-1 gap-2 justify-center items-center p-4 ">
            <p className="text-xl md:text-2xl xl:text-4xl  font-bold">24</p>
            <p className="text-sm font-semibold uppercase">FIELD WORKERS</p>
          </div>
          <div className="flex flex-col flex-1 gap-2 justify-center items-center p-4 ">
            <p className="text-xl md:text-2xl xl:text-4xl  font-bold">18</p>
            <p className="text-sm font-semibold uppercase">OFFICE STAFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
