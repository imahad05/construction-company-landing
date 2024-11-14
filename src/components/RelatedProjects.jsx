import React from "react";
import { latest_project, related_project } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const RelatedProjects = () => {
  return (
    <div className="w-full py-20 text-center px-[7vw]">
      <div className="flex flex-col items-center justify-center gap-8 mb-10">
        <h5 className="font-bold text-2xl md:text-4xl">Related Projects</h5>
        <hr className="w-14 border-none bg-primary h-[4px] rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full md:w-[80%] mx-auto">
        {related_project.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            heading={project.heading}
            para={project.para}
          />
        ))}
      </div>
      <button className="bg-transparent border border-black dark:border-white transition py-3 px-8 cursor-pointer text-gray-600 hover:text-black dark:text-white font-medium text-sm md:text-base my-6 dark:hover:text-gray-500">
        VIEW ALL
      </button>
    </div>
  );
};

export default RelatedProjects;
