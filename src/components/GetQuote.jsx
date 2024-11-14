import React from "react";

const GetQuote = () => {
  return (
    <div className="w-full md:h-[100px] px-[7vw] flex flex-col md:flex-row items-center justify-center md:justify-around overflow-hidden py-4">
      <h5 className="font-bold text-xl mb-4 md:text-4xl dark:text-white text-headingGrey ">
        Get a Quote For Your Project
      </h5>
      <button className="bg-transparent hover:bg-transparent border border-primary hover:bg-primary hover:text-black transition py-3 px-8 cursor-pointer dark:text-white text-textGrey font-medium text-sm md:text-base">
        VIEW OUR WORK
      </button>
    </div>
  );
};

export default GetQuote;
