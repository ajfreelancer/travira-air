import React from "react";
import { Zoom } from "react-reveal";

const Contact = ({ showContactForm }) => {
  return (
    <Zoom>
      <section className="mt-[-11em] xl:mt-[-9em] container mx-auto">
        <div className="xl:w-[1200px] bg-[url('./assets/imgs/contact-bg.svg')] bg-cover flex flex-col md:flex-row md:space-b text-center md:text-left justify-center md:justify-between w-[100%] mx-auto rounded-3xl py-12 md:py-16 md:px-12 xl:px-16 xl:py-20 bg-right">
          <h3 className="sm:w-[20rem] md:w-[13rem] mx-auto md:mx-0 text-[1.5rem] md:text-[1.7rem] px-10 md:px-0 font-semibold tracking-tight leading-tight text-white">
            Don't hesitate to contact us
          </h3>
          <button
            onClick={showContactForm}
            className="bg-white text-darkblue tracking-tight font-bold mx-auto w-[80%] md:w-fit md:mx-0 md:px-8 py-3 mt-4 md:mt-0 rounded-xl"
          >
            Contact Us
          </button>
        </div>
      </section>
    </Zoom>
  );
};

export default Contact;
