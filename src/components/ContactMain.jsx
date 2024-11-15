import React from "react";
import { contact_info } from "../assets/assets";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const ContactMain = () => {
  return (
    <main
      className="flex flex-col md:flex-row items-center justify-between h-full bg-cover bg-center relative overflow-x-hidden"
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
      <div className="w-full md:w-[40%] h-full bg-primary flex flex-col items-start justify-start md:gap-6 p-4 md:p-10 overflow-hidden z-10 slide-in">
        <h4 className="text-xl md:text-3xl 2xl:text-4xl text-black font-bold">
          Contact Info
        </h4>
        <div className=" grid gap-1 grid-cols-3  items-center justify-center md:block">
          {contact_info.map((service) => (
            <div className="text-start md:text-start mt-4" key={service.id}>
              <h3 className="text-sm md:text-lg xl:text-xl font-semibold text-black mb-2">
                {service.heading}
              </h3>
              <p className="text-white text-xs md:text-sm lg:text-base">
                {service.paraOne}
              </p>
              <p className="text-white text-xs md:text-sm lg:text-base">
                {service.paraTwo}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-6 my-4 md:my-2 w-full">
          <span className="text-lg text-black md:text-xl 2xl:text-3xl cursor-pointer">
            <FaFacebook />
          </span>
          <span className="text-lg text-black md:text-xl 2xl:text-3xl cursor-pointer">
            <BsTwitter />
          </span>
          <span className="text-lg text-black md:text-xl 2xl:text-3xl cursor-pointer">
            <LiaLinkedin />
          </span>
        </div>
      </div>
    </main>
  );
};

export default ContactMain;
