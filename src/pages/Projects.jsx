import React from "react";
import ProjectMain from "../components/ProjectMain";
import AboutProject from "../components/AboutProject";
import ProjectBanner from "../components/ProjectBanner";
import LatestProjects from "../components/LatestProjects";
import RelatedProjects from "../components/RelatedProjects";

const Projects = () => {
  return (
    <div className="mt-16 bg-white dark:bg-gray-800 dark:text-white text-black">
      <ProjectMain />
      <AboutProject />
      <ProjectBanner />
      <RelatedProjects />
    </div>
  );
};

export default Projects;
