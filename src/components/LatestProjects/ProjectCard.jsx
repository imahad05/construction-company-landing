import React from "react";

const ProjectCard = ({ img, heading, para }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img src={img} alt={heading} className="w-full" />
      <div className="text-start border dark:border-white border-gray-400 border-b-0 p-4">
        <h5 className="text-xl font-semibold mb-5">{heading}</h5>
        <p className="text-sm">{para}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
