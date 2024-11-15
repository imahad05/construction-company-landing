import React from "react";
import { FaStar } from "react-icons/fa";
import PrimaryUnderLine from "./PrimaryUnderLine";

const Testimonial = ({ name, text }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
    <div className="flex gap-2 justify-center mb-5 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4 text-start">“{text}”</p>
    <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-start">
      {name}
    </h3>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Abdul Ahad",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.",
    },
    {
      name: "Adnan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.",
    },
    {
      name: "Meer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24">
      {/* Testimonials Header */}
      <h5 className="font-bold text-3xl md:text-4xl 2xl:text-5xl py-3 fade-in mb-4 text-center">
        Client Testimonials
      </h5>
      <div className="flex justify-center mb-8">
        <PrimaryUnderLine />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
