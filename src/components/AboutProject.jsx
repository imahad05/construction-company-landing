// AboutProject.js
import React from "react";
import { assets } from "../assets/assets";
import PrimaryUnderLine from "./PrimaryUnderLine";

const AboutProject = () => (
  <div className=" mt-6 md:mt-12 px-[7vw] grid grid-cols-1 md:grid-cols-2 items-center gap-6">
    <div>
      <h2 className="font-bold text-3xl md:text-4xl 2xl:text-5xl py-3 fade-in mb-4">
        About This Project
      </h2>
      <PrimaryUnderLine />
      <p className="mt-4 text-sm md:text-base 2xl:w-3/4 text-gray-600 dark:text-gray-300">
        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
        cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
        commodo elit dui sit amet risus.
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
        <li>Maecenas ornare nisl</li>
        <li>A tortor ultrices bibendum</li>
        <li>Nulla fermentum</li>
        <li>Metus quis</li>
        <li>Sodales tristique</li>
      </ul>
    </div>
    <div className="md:p-14">
      <img src={assets.about_img} alt="" />
    </div>
  </div>
);

export default AboutProject;
