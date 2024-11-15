import React from "react";
import { related_project } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import PrimaryUnderLine from "./PrimaryUnderLine";

const RelatedProjects = () => {
  return (
    <div className="w-full pb-12 text-center px-[7vw]">
      <div className="flex flex-col items-center justify-center gap-8">
        <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl py-3 fade-in">Related Projects</h5>
        <PrimaryUnderLine />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full md:w-[90%] mx-auto">
        {related_project.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            heading={project.heading}
            para={project.para}
          />
        ))}
      </div>
      <button className="text-black dark:text-white hover:text-gray-300 dark:hover:text-gray-300 transition text-xs md:text-sm 2xl:text-lg py-2 px-4 md:px-5 2xl:px-6 border border-black dark:border-white 2xl:border-2 font-normal mt-8">
        VIEW ALL
      </button>
    </div>
  );
};

export default RelatedProjects;
