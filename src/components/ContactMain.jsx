import React from "react";
import { our_services } from "../assets/assets";

const ContactMain = () => {
  return (
    <main
      className="flex flex-col md:flex-row items-center justify-between h-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/main_bg.jpeg')" }}
    >
      <div className="bg-black bg-opacity-60 h-full w-full absolute"></div>
      {/* Left Section with Background Image */}

      <div className="w-full h-full flex flex-col gap-6 md:gap-10 justify-center items-start px-[7vw] py-4 z-10">
        <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl text-white border-l-4 border-primary py-3 pl-4 fade-in">
          Contact Us
        </h5>
        <p className="2xl:w-[50%] text-white text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet
          viverra id aliquet neque odio.
        </p>
        <button className="text-white text-xs md:text-sm 2xl:text-lg font-normal py-2 px-4 lg:px-5 2xl:px-6 border border-primary bg-primary hover:bg-transparent transition">
          SEND A MESSAGE
        </button>
      </div>

      {/* Right Section with Services */}
      <div className="w-full md:w-[40%] xl:w-[30%] md:h-full bg-primary flex flex-col items-start justify-start md:gap-6 p-4 md:p-10 overflow-hidden z-10 slide-in">
        <h4 className="text-xl md:text-3xl 2xl:text-4xl text-black font-bold">
          Contact Info
        </h4>
        <div className="flex items-center justify-center md:block">
          {our_services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center md:flex-row  gap-3 md:gap-6 py-4"
            >
              <div className="text-center md:text-start">
                <h5 className="text-sm md:text-xl font-semibold text-black mb-4">
                  {service.heading}
                </h5>
                <p className="text-white text-xs md:text-base">
                  {service.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ContactMain;
