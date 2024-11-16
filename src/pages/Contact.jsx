import React from "react";
import ContactMain from "../components/ContactMain";
import MiniBanner from "../components/MiniBanner";
import ContactUs from "../components/ContactAccordian";
import ContactMap from "../components/ContactMap";

const Contact = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-white text-black mt-16 overflow-hidden">
      <ContactMain />
      <MiniBanner
        heading={"Call: (541) 931-3526"}
        para={"We Can’t Wait to Make Your Ideas a Reality"}
        buttonText={"ONLINE ESTIMATE FORM"}
      />
      <ContactUs/>
      <ContactMap/>
    </div>
  );
};

export default Contact;
