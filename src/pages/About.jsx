import React from "react";
import AboutMain from "../components/AboutMain";
import AboutUs from "../components/AboutUs";
import AboutOverview from "../components/AboutOverview";
import AboutQuote from "../components/AboutQuote";

const About = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black mt-16 overflow-x-hidden">
      <AboutMain/>
      <AboutUs/>
      <AboutOverview/>
      <AboutQuote/>
    </div>
  );
};

export default About;
