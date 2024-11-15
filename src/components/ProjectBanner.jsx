import React from "react";
import { assets } from "../assets/assets";

const ProjectBanner = () => {
  return (
    <div>
      <div className="px-[7vw] lg:px-[14vw] w-full my-6 md:my-12">
        <img src={assets.project_banner} alt="" className="w-full" />
      </div>

      <div className="mb-12 px-[7vw] grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
          <img src={assets.gallery} />
        </div>
        <div>
          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            augue mauris molestie augue non feugiat ligula neque nec felis.
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
