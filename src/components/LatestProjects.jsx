import React from "react";
import ProjectCard from "./ProjectCard";
import { latest_project } from "../assets/assets";
import PrimaryUnderLine from "./PrimaryUnderLine";

const LatestProjects = () => {
  return (
    <div className="w-full py-20 text-center px-[7vw]">
      <div className="flex flex-col items-center justify-center gap-8 mb-10">
        <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl">
          Latest Projects
        </h5>
        <PrimaryUnderLine/>
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
