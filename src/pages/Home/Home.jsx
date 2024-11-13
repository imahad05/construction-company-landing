import React from "react";
import Main from "../../components/Main/Main";
import GetQuote from "../../components/GetQuote/GetQuote";
import LatestProjects from "../../components/LatestProjects/LatestProjects";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview";
import History from "../../components/History/History";

const Home = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black mt-16">
      <Main />
      <GetQuote />
      <ProjectOverview />
      <LatestProjects />
      <History />
    </div>
  );
};

export default Home;
