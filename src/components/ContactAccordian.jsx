import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import PrimaryUnderLine from "./PrimaryUnderLine";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800 dark:text-gray-200 "
      >
        {title}
        <div className="bg-primary p-1 rounded-full">
          {isOpen ? (
            <FaMinus className="text-white text-xs md:text-sm" />
          ) : (
            <FaPlus className="text-white text-xs md:text-sm" />
          )}
        </div>
      </button>
      {isOpen && (
        <p className="text-gray-600 dark:text-gray-400 pb-4">{content}</p>
      )}
    </div>
  );
};

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Donec rutrum congue leo eget malesuada?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
    },
    {
      title: "Vivamus suscipit tortor eget felis porttitor volutpat?",
      content:
        "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Curabitur non nulla sit amet nisi tempus?",
      content:
        "Curabitur non nulla sit amet nisi tempus. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Pellentesque in ipsum id orci porta dapibus?",
      content:
        "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet.",
    },
    {
      title: "Curabitur non nulla sit amet nisi?",
      content: "Curabitur non nulla sit amet nisi. Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="py-14 px-[7vw] lg:grid grid-cols-2 gap-6 items-start dark:bg-gray-800 bg-white text-black dark:text-white">
      {/* Left Section */}
      <div className="w-full lg:w-[90%] mb-8 md:mb-0">
        <h5 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
          Get in Touch
        </h5>
        <PrimaryUnderLine />
        <form className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            className="h-[40px] md:h-[50px] text-black px-2 md:px-4"
            placeholder="Name"
          />
          <input
            type="email"
            className="h-[40px] md:h-[50px] text-black px-2 md:px-4"
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="h-[80px] md:h-[100px] p-2 md:p-4 text-black"
          ></textarea>
          <div className="text-end">
            <button className="transition text-xs md:text-sm 2xl:text-lg py-2 px-4 border border-black dark:border-white 2xl:border-2 hover:text-gray-600 dark:hover:text-gray-300">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Right Section - Accordion */}
      <div className="w-full flex-1 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
