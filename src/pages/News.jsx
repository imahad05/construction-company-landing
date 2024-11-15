import React from "react";
import { assets, news } from "../assets/assets";

const News = () => {
  return (
    <div className=" bg-white dark:bg-gray-800 text-black dark:text-white mt-16">
      <main
        className=" h-full bg-cover bg-center relative"
        style={{
          background: `url(${assets.gallery})`,
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-60 h-full w-full absolute"></div>
        <div className="px-[7vw] py-[10vw] z-10">
          <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white border-l-4 border-primary py-3 pl-4 fade-in">
            News
          </h5>
        </div>
      </main>

      <div className="py-20 px-[7vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-10 w-full md:w-[80%] mx-auto gap-y-10">
          {news.map((item, index) => (
            <div key={index} className="shadow-md rounded-md">
              <img src={item.img} alt="" className="w-full" />
              <div className="p-2">
                <h5 className="text-2xl font-bold my-4">{item.heading}</h5>
                <h5 className="dark:text-gray-500 text-gray-300 mb-4">
                  {item.subHeading}
                </h5>
                <p className="text-sm md:text-base">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
