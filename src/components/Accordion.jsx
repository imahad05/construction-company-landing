import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
            <FaMinus className="text-white text-sm" />
          ) : (
            <FaPlus className="text-white text-sm" />
          )}
        </div>
      </button>
      {isOpen && (
        <p className="text-gray-600 dark:text-gray-400 pb-4">{content}</p>
      )}
    </div>
  );
};

const ContactSection = () => {
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
    <div className="py-10 px-[7vw] flex flex-col md:flex-row items-start dark:bg-gray-800 bg-white text-black dark:text-white">
      {/* Left Section */}
      <div className="w-full md:w-2/6 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build <br /> Something <br /> Together
        </h2>
        <div className="w-12 h-1 bg-yellow-500 mb-8"></div>
        <p className="text-gray-700 dark:text-gray-300 mb-8 md:w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
          dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
          quam sed mauris proin feugiat.
        </p>
        <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-white transition">
          GET IN TOUCH
        </button>
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

export default ContactSection;
