import React from "react";
import { assets, portfolio } from "../assets/assets";

const Portfolio = () => {
  return (
    <div className=" bg-white dark:bg-gray-800 text-black dark:text-white mt-16">
      <main
        className="flex flex-col md:flex-row items-center justify-between h-full bg-cover bg-center relative"
        style={{
          background: `url(${assets.portfolio_bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-60 h-full w-full absolute"></div>
        <div className=" px-[7vw] py-[10vw] z-10">
          <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white border-l-4 border-primary py-3 pl-4 fade-in mb-4">
            Our Construction <br /> Projects
          </h5>
          <p className="2xl:w-[50%] text-white text-xs md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis{" "}
            egestas pellentesque libero dolor in diam consequat ut.{" "}
          </p>
        </div>
      </main>

      <div className="py-20 px-[7vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-10 w-full md:w-[80%] mx-auto gap-y-10">
          {portfolio.map((item, index) => (
            <div key={index} className="shadow-md rounded-md">
              <img src={item.img} alt="" className="w-full" />
              <div className="p-4 border dark:border-white border-black mt-4">
                <h5 className="text-2xl font-semibold my-4">{item.heading}</h5>
                <p className="text-sm md:text-base">{item.para}</p>
                <button className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-300 transition text-xs md:text-sm 2xl:text-lg py-2 px-4 md:px-5 2xl:px-6 border border-black dark:border-white 2xl:border-2 font-normal mt-8">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
