import React from 'react'
import { our_services } from '../assets/assets'

const ContactMain = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-[80vh] 2xl:h-[70vh]">
    {/* Left Section with Background Image */}
    <div
      className="flex-1 md:h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/main_bg.jpeg')" }}
    >
      <div className="w-full h-full bg-black bg-opacity-60 flex flex-col gap-6 md:gap-10 justify-center items-start px-[7vw] py-4">
        <h5 className="font-bold text-4xl md:text-5xl text-white border-l-4 border-primary py-3 pl-4">
        Contact Us
        </h5>
        <p className="w-[90%] md:w-[70%] 2xl:w-[50%] text-white text-xs md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.
        </p>
        <button className="bg-primary hover:bg-transparent border border-primary hover:border-primary transition py-3 px-8 cursor-pointer text-white font-medium text-sm md:text-base">
          SEND A MESSAGE
        </button>
      </div>
    </div>

    {/* Right Section with Services */}
    <div className="w-full md:w-[30%] md:h-full bg-primary flex flex-col items-start justify-start md:gap-6 p-4 md:p-10 overflow-hidden">
      <h5 className="text-xl md:text-4xl text-black font-bold">
        Contact Info
      </h5>
      <div className="flex items-center justify-center md:block">
        {our_services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center md:flex-row  gap-3 md:gap-6 py-4"
          >
            <div className="2xl:w-[50%] text-center md:text-start">
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
  </div>
  )
}

export default ContactMain