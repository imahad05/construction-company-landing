import React from "react";

const MiniBanner = ({
  heading,
  para,
  buttonText,
  headingColor = "white",
  paraColor = "text-black",
}) => {
  return (
    <div className="w-full md:px-[7vw] flex flex-col md:flex-row items-center justify-center md:justify-around overflow-hidden py-4 lg:py-8">
      <div>
        <h5
          className={`font-bold text-2xl md:text-3xl xl:text-4xl dark:text-${headingColor} text-headingGrey mb-2 text-center md:text-start`}
        >
          {heading}
        </h5>
        <p className="text-sm md:text-xl font-semibold mb-4">{para}</p>
      </div>
      <button className="text-primary hover:text-yellow-600 transition text-xs md:text-sm 2xl:text-lg font-medium py-2 px-4 md:px-5 2xl:px-6 border border-primary xl:border-2">
        {buttonText}
      </button>
    </div>
  );
};

export default MiniBanner;
