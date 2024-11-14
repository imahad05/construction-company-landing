import React from "react";
import ProjectCard from "./ProjectCard";
import { latest_project } from "../assets/assets";

const LatestProjects = () => {
  return (
    <div className="w-full py-20 text-center px-[7vw]">
      <div className="flex flex-col items-center justify-center gap-8 mb-10">
        <h5 className="font-bold text-2xl md:text-4xl">
          Latest Projects
        </h5>
        <hr className="w-14 border-none bg-primary h-[4px] rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full md:w-[80%] mx-auto">
        {latest_project.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            heading={project.heading}
            para={project.para}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
