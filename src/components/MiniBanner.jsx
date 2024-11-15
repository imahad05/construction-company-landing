import React from "react";

const MiniBanner = ({ heading, para, buttonText }) => {
  return (
    <div className="w-full md:px-[7vw] flex flex-col md:flex-row items-center justify-center md:justify-around overflow-hidden py-4 lg:py-8">
      <h5 className="font-bold text-2xl md:text-3xl xl:text-4xl dark:text-white text-headingGrey text-center mb-4">
        {heading}
      </h5>
      <p>{para}</p>
      <button className="text-primary hover:text-yellow-600 transition text-xs md:text-sm 2xl:text-lg font-medium py-2 px-4 md:px-5 2xl:px-6 border border-primary xl:border-2">
        {buttonText}
      </button>
    </div>
  );
};

export default MiniBanner;
