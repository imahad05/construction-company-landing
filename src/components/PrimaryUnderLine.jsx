import React from "react";

const PrimaryUnderLine = ({width=12, height=1 , bgColor='bg-primary'}) => {
  return <div className={`w-${width} h-${height} ${bgColor} mb-8 md:mb-12`}></div>;
};

export default PrimaryUnderLine;
