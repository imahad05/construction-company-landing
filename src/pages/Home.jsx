import React from "react";
import Main from "../components/Main";
import MiniBanner from "../components/MiniBanner";
import LatestProjects from "../components/LatestProjects";
import ProjectOverview from "../components/ProjectOverview";
import History from "../components/History";
import ContactSection from "../components/Accordion";
import TestimonialsSection from "../components/Testimonials";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black mt-16">
      <Main />
      <MiniBanner
        heading={"Get a Quote For Your Project"}
        buttonText={"FREE QUOTE"}
      />
      <ProjectOverview />
      <LatestProjects />
      <History />
      <ContactSection />
      <TestimonialsSection />
      <Brands />
    </div>
  );
};

export default Home;
