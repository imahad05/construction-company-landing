import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailchimp,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 dark:bg-gray-800 bg-white text-black dark:text-white ">
      <div className="w-full bg-primary p-[5vw]">
        <form>
          <h5 className="text-4xl text-black mb-8 font-bold">Contact Us</h5>
          <div className="w-12 h-1 bg-black mb-8 md:mb-16"></div>
          <div className="flex gap-3 md:gap-6 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[50px] px-4 "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[50px] px-4 "
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full p-4 h-[100px]"
          ></textarea>
          <div className="text-right mt-4">
            <button className="border border-white text-white font-semibold px-6 py-3 cursor-pointer hover:text-gray-300 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center h-[100px] bg-headingGrey gap-10">
          <span>
            <FaFacebook className="text-white text-xl cursor-pointer hover:text-primary transition" />
          </span>
          <span>
            <FaTwitter className="text-white text-xl cursor-pointer hover:text-primary transition" />
          </span>
          <span>
            <FaLinkedin className="text-white text-xl cursor-pointer hover:text-primary transition" />
          </span>
        </div>
        <div className="flex flex-col items-start justify-center w-full px-[7vw] gap-4 py-10 md:pt-32">
          <div className="flex gap-4 items-center">
            <span>
              <FaLocationPin className="text-xl text-gray-500" />
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex gap-4 items-center">
            <span>
              <FaPhone className="text-xl text-gray-500" />
            </span>
            <p>+00 123 456 78</p>
          </div>
          <div className="flex gap-4 items-center">
            <span>
              <MdEmail className="text-xl text-gray-500" />
            </span>
            <p>constractioninc@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;