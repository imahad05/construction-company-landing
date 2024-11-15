import React from "react";
import { what_we_do } from "../assets/assets";

const AboutMain = () => {
  return (
    <main
      className="flex flex-col md:flex-row items-center justify-between h-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/main_bg.jpeg')" }}
    >
      <div className="bg-black bg-opacity-60 h-full w-full absolute"></div>
      {/* Left Section with Background Image */}
      <div className="flex-1 w-full h-full flex flex-col gap-6 md:gap-10 justify-center items-start px-[7vw] py-4 z-10">
        <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white border-l-4 border-primary py-3 pl-4 fade-in lg:w-[50%]">
          About Our Construction Company
        </h5>
        <p className="2xl:w-[50%] text-white text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          egestas pellentesque libero dolor in diam consequat ut.
        </p>
        <button className="text-white text-xs md:text-sm 2xl:text-lg font-normal py-2 px-4 lg:px-5 2xl:px-6 border border-primary bg-primary hover:bg-transparent transition">
          GET A FREE QUOTE
        </button>
      </div>

      {/* Right Section with Services */}
      <div className="w-full md:w-[40%] md:h-full flex flex-col items-start justify-start md:gap-6 p-4 md:p-10 overflow-hidden z-10 slide-in">
        <h4 className="text-xl md:text-3xl 2xl:text-4xl text-primary font-bold">
          What We Do
        </h4>
        <div className="flex items-start gap-2 justify-center md:block">
          {what_we_do.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-start md:flex-row  gap-3 md:gap-6 py-4"
            >
              <img
                src={service.img}
                alt={service.heading}
                className="h-7 md:h-auto md:w-14"
              />
              <div className="2xl:w-[50%] text-start md:text-start">
                <h3 className="text-sm md:text-lg xl:text-xl font-semibold text-white mb-2">
                  {service.heading}
                </h3>
                <p className="text-white text-xs lg:text-base">
                  {service.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutMain;
