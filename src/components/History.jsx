import React from "react";
import { assets } from "../assets/assets";
import PrimaryUnderLine from "./PrimaryUnderLine";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-gray-900 dark:text-white">
      {/* Left Side Image */}
      <div className="md:w-2/6 bg-headingGrey text-white p-[7vw] md:p-[4vw] 2xl:p-[7vw]">
        <h5 className="text-3xl md:text-4xl font-bold mb-8">
          We’ve Been Building For Over 10 Years
        </h5>
        {/* Yellow Underline */}
        <PrimaryUnderLine />

        <p className="text-white mb-10 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
          dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
          quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc
          amet phasellus.
        </p>

        <Link
          to={"/about"}
          className="text-primary hover:text-yellow-600 transition text-xs md:text-sm 2xl:text-lg py-2 px-4 border border-primary 2xl:border-2"
        >
          About Us
        </Link>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col">
        <video
          src={assets.project_video}
          autoPlay
          muted
          loop
          className="h-full object-cover"
        ></video>

        {/* Bottom Statistics */}
        <div className="w-full flex flex-col md:flex-row ">
          <div className="flex-1 bg-primary p-6">
            <p className="text-xl md:text-2xl xl:text-4xl  font-bold">
              Call for a Quote
            </p>
            <p className="text-sm font-semibold uppercase">(346) 234-6973</p>
          </div>
          <div className="flex-1 bg-white flex items-center justify-center dark:bg-gray-700 p-6 text-center text-white">
            <button className="text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 text-xs md:text-sm 2xl:text-lg py-2 px-4 border dark:border-white border-black 2xl:border-2 transition">
              ONLINE ESTIMATE FORM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
