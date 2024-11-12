import React from "react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center dark:bg-gray-800 dark:text-white bg-white text-black ">
      <h5 className="text-4xl font-semibold animate-pulse">
        Under construction
      </h5>
      <Link to={"/"} className="underline text-primary font-semibold">
        Back To Home Page
      </Link>
    </div>
  );
};

export default CommingSoon;
