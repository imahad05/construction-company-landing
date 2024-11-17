import React from "react";
import PrimaryUnderLine from "./PrimaryUnderLine";

const AboutUs = () => {
  return (
    <div className="my-14 px-[7vw]">
      <div className="flex items-center justify-center flex-col">
        <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl fade-in mb-8 text-center">
          About us
        </h5>
        <PrimaryUnderLine />
      </div>
      <div className="grid lg:grid-cols-2 gap-6 text-sm md:text-base">
        <div className="space-y-4">
          <p>
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam
            blandit est in eros elementum, quis vehicula est suscipit.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            augue mauris molestie augue non feugiat ligula neque nec felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
