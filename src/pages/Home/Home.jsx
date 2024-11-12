import React from "react";
import Main from "../../components/Main/Main";
import GetQuote from "../../components/GetQuote/GetQuote";
import LatestProjects from "../../components/LatestProjects/LatestProjects";

const Home = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black">
      <Main />
      <GetQuote />
      <LatestProjects />
    </div>
  );
};

export default Home;
