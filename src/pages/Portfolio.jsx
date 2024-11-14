import React from "react";
import { assets, portfolio } from "../assets/assets";

const Portfolio = () => {
  return (
    <div className=" bg-white dark:bg-gray-800 text-black dark:text-white mt-16">
      <div
        className="w-full bg-no-repeat"
        style={{
          background: `url(${assets.portfolio_bg})`,
          backgroundPosition : "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-60 h-[60vh] w-full items-start flex flex-col gap-4 justify-center  px-[7vw] md:px-[14vw]">
          <h5 className="font-bold text-4xl md:text-5xl text-white border-l-4 border-primary py-3 pl-4">
            Our Construction <br /> Projects
          </h5>
          <p className="text-white text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis{" "}
            <br />
            egestas pellentesque libero dolor in diam consequat ut.{" "}
          </p>
        </div>
      </div>

      <div className="py-20 px-[7vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-10 w-full md:w-[80%] mx-auto gap-y-10">
          {portfolio.map((item, index) => (
            <div key={index} className="shadow-md rounded-md">
              <img src={item.img} alt="" className="w-full" />
              <div className="p-4 border dark:border-white border-black mt-4">
                <h5 className="text-2xl font-semibold my-4">{item.heading}</h5>
                <p className="text-sm md:text-base">{item.para}</p>
                <button className="py-2 px-8 border-2 border-black dark:border-white mt-4 text-sm md:text-base hover:text-gray-400 transition">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
